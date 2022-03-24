export interface ICardsState {
  title: string;
  cards: {
    id: number;
    title: string;
    content: string;
  }[];
}
[];


export interface IMoveCard {
  type: string;
  payload: [];
}