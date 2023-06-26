import React from 'react';

import FilmPage from 'containers/FilmPage';

type Props = {
  params: {movieId: string}
}

export default function Film({ params: { movieId } }: Props) {

  return (
    <FilmPage movieId={movieId} />
  );
}
