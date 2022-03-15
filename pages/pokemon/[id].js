import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/Details.module.css';

// * Server Side Rendering
export async function getServerSideProps({ params }) {
  const resp = await fetch(
    `https://jherr-pokemon.s3.us-west-1.amazonaws.com/pokemon/${params.id}.json`
  );

  return {
    props: {
      pokemon: await resp.json(),
    },
  };
}

export default function Detail({ pokemon }) {
  // * Client Side Rendering
  //   const {
  //     query: { id },
  //   } = useRouter();

  //   const [pokemon, setPokemon] = useState(null);

  //   useEffect(() => {
  //     async function getPokemon() {
  //       const resp = await fetch(
  //         `https://jherr-pokemon.s3.us-west-1.amazonaws.com/pokemon/${id}.json`
  //       );
  //       setPokemon(await resp.json());
  //     }

  //     if (id) getPokemon();
  //   }, [id]);

  //   if (!pokemon) return null;

  return (
    <>
      <Head>
        <title>{pokemon.name}</title>
      </Head>
      <Link href='/'>
        <a>Back to Home</a>
      </Link>
      <div className={styles.layout}>
        <Image
          className={styles.picture}
          src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`}
          alt='Pokemon'
          width={400}
          height={400}
        />
      </div>
      <div>
        <div className={styles.name}>{pokemon.name}</div>
        <div className={styles.type}>{pokemon.type.join(', ')}</div>
        <table>
          <thead className={styles.header}>
            <tr>
              <th>Name</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {pokemon.stats.map(({ name, value }) => (
              <tr key={name}>
                <td className={styles.attribute}>{name}</td>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
