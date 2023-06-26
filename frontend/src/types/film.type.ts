export type TFilm = {
    title: string,
    posterUrl: string,
    releaseYear: number,
    description: string,
    genre:string,
    id: string,
    rating: number,
    director:string,
    reviewIds: string[],
  }

  export type TReview = {
    id: "6iaV-jUSjfl-gGk8EOdQ1",
    name: "Андрей",
    text: "Фильм хороший, но сюжет немного затянут",
    rating: 7,
  }

  export type TCinemas = {
    id:  string
    name: string,
    movieIds: string[]
  }