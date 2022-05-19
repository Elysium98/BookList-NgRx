export interface IBook {
  id: string;
  volumeInfo: {
    title: string;
    author: string;
    publisher: string;
    publisherDate: string;
    language: string;
    volume: number;
    pageNumber: number;
  };
  ratingStar: number;
}
