import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Detail = () => {
  const {
    query: { id },
  } = useRouter();

  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    async function getPokemon() {
      const resp = await fetch(
        `https://jherr-pokemon.s3.us-west-1.amazonaws.com/pokemon/${id}.json`
      );
      setPokemon(await resp.json());
    }

    if (id) getPokemon();
  }, [id]);

  if (!pokemon) return null;

  return <div>{JSON.stringify(pokemon)}</div>;
};

export default Detail;
