import { MovieSeries } from "./movie.series";

export interface User {
  uid: string,
  email: string,
  name: string,
  photo?: string,
  list?: MovieSeries[]
}
