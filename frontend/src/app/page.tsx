import React from 'react';

import { CINEMAS_API } from 'constants/api.constants';
import MainPage from 'containers/MainPage';
import { TCinemas } from 'src/types/film.type';

async function getData() {
  const res = await fetch(`${process.env.API_URL ?? ''}${CINEMAS_API}`);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Home() {
  const cinemas: TCinemas[] = await getData();

  console.log('cinemas', cinemas);

  return (
    <MainPage cinemas={cinemas} />
  );
}
