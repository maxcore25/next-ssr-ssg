import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    async function getPokemon() {
      const resp = await fetch(
        'https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json'
      );
      setPokemon(await resp.json());
    }

    getPokemon();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Pokemon List</title>
      </Head>
      <div>{JSON.stringify(pokemon)}</div>
    </div>
  );
}
