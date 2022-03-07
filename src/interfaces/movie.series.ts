export interface MovieSeries {
  id: number,
  name: string,
  description: string,
  image: string,
  rating: number,
  category: Category
}

export enum Category {
  SERIES = "Series",
  MOVIE = "Películas",
  ANY = "Todos"
}
