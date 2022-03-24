import React, { useRef } from "react";
import { Container } from "./styles";

import { useDrag, useDrop } from "react-dnd";
import { ICard, itemDragging } from "./types";
import { useDispatch, useSelector } from "react-redux";
import { cardsMove } from "../../store/Cards/Cards.slice";
import { RootState } from "../../store/store";

export default function Card({ data, index, listIndex }: ICard) {
  const lists = useSelector((state: RootState) => state.cards);
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

      if (draggedIndex === targetIndex && draggedListIndex === targetListIndex) {
        return;
      }

      const targetSize = cardRef?.current.getBoundingClientRect();
      const targetCenter = (targetSize.bottom - targetSize.top) / 2;
      const draggedOffset = monitor.getClientOffset();
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
      <a href="#">{data.title}</a>
    </Container>
  );
}
