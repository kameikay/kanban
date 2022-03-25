import React, { useRef, useState } from "react";
import { Container } from "./styles";

import { useDrag, useDrop } from "react-dnd";
import { ICard, itemDragging } from "./types";
import { useDispatch } from "react-redux";
import { cardsMove } from "../../store/Cards/Cards.slice";
import { CardModal } from "../CardModal";

export default function Card({ data, index, listIndex }: ICard) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const dispatch = useDispatch();
  const cardRef = useRef(null);

  const [{ isDragging }, dragRef] = useDrag({
    type: "CARD",
    item: {
      type: "CARD",
      index,
      listIndex,
    } as itemDragging,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, dropRef] = useDrop({
    accept: "CARD",
    hover(item: itemDragging, monitor) {
      const draggedListIndex = item.listIndex;
      const targetListIndex = listIndex;
      const draggedIndex = item.index;
      const targetIndex = index;

      if (draggedIndex === targetIndex && draggedListIndex === targetListIndex)
        return;

      //@ts-ignore
      const targetSize = cardRef?.current.getBoundingClientRect();
      const targetCenter = (targetSize.bottom - targetSize.top) / 2;
      const draggedOffset = monitor.getClientOffset();
      //@ts-ignore
      const draggetTop = draggedOffset?.y - targetSize.top;

      if (draggedIndex < targetIndex && draggetTop < targetCenter) return;
      if (draggedIndex > targetIndex && draggetTop > targetCenter) return;

      dispatch(
        cardsMove({
          fromList: draggedListIndex,
          toList: targetListIndex,
          from: draggedIndex,
          to: targetIndex,
        })
      );

      item.index = targetIndex;
      item.listIndex = targetListIndex;
    },
  });

  dragRef(dropRef(cardRef));

  return (
    <Container ref={cardRef} isDragging={isDragging}>
      {isModalOpen && (
        <CardModal
          setIsModalOpen={setIsModalOpen}
          data={{
            title: data.title,
            id: data.id,
            content: data.content,
            listIndex,
          }}
        />
      )}
      <a href="#" onClick={() => setIsModalOpen(true)}>
        {data.title}
      </a>
    </Container>
  );
}
