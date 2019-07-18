export type SubgenreT = {
  id?: number,
  name: string,
  isDescriptionRequired: boolean
};

export type GenreT = {
  id: number,
  name: string,
  subgenres: SubgenreT[]
};

export type BookT = {
  author: string,
  book_title: string,
  date: string,
  description: string,
  edition: string,
  edition_language: string,
  format: string,
  genre: string,
  isbn: string,
  pages: string,
  publisher: string,
  subgenre: string
};
