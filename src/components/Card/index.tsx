import React, { useRef } from "react";
import { Container } from "./styles";

import { useDrag, useDrop } from "react-dnd";

interface ICard {
  data: {
    id: number;
    title: string;
    content: string;
  };
  index: number;
}

type itemDragging = {
  type: string;
  index: number;
};

export default function Card({ data, index }: ICard) {
  const cardRef = useRef(null);

  const [{ isDragging }, dragRef] = useDrag({
    type: "CARD",
    item: {
      type: "CARD",
      index,
    } as itemDragging,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, dropRef] = useDrop({
    accept: "CARD",
    hover(item: itemDragging, monitor) {
      const draggedIndex = item.index;
      const targetIndex = index;

      if (draggedIndex === targetIndex) {
        return;
      }

      const targetSize = cardRef?.current.getBoundingClientRect();
      const targetCenter = (targetSize.bottom - targetSize.top) / 2;
      const draggedOffset = monitor.getClientOffset();
      const draggetTop = draggedOffset?.y - targetSize.top;
      
      console.log(targetSize);
    },
  });

  dragRef(dropRef(cardRef));

  return (
    <Container ref={cardRef} isDragging={isDragging}>
      <a href="#">{data.title}</a>
    </Container>
  );
}
