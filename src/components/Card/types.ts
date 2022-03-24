export interface ICard {
  data: {
    id: number;
    title: string;
    content: string;
  };
  index: number;
  listIndex: number;
}

export type itemDragging = {
  type: string;
  index: number;
  listIndex: number;
};