import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Folium Maps 🗺 | Aeropuerto El Dorado</title>
        <meta name="description" content="Creado por Santiago Bula" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Mapas interactivos de&nbsp;
            <code className={styles.code}>Aeropuerto/ElDorado.BOG</code>
          </p>
          <div>
            <a
              href="https://www.linkedin.com/in/santiago-bula-mosque20/"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={40}
            priority
          />
          <div className={styles.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={41}
              priority
            />
          </div>
        </div>

        <div className={styles.grid}>
          <a
            href="https://santiagobula.medium.com/aeropuerto-internacional-el-dorado-la-puerta-de-entrada-a-sudamérica-31851ac689b0"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Artículo <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Conoce los datos fascinantes sobre la puerta de entrada a&nbsp;Sudamérica.
            </p>
          </a>

          <a
            href="https://el-dorado-oj0w3rows-santiagobula.vercel.app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Mapa Capas <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Mira los destinos con vuelo directo que tiene el dorado en un mapa interactivo con&nbsp;capas!
            </p>
          </a>

          <a
            href="https://nacionales-el-dorado-16225r6oq-santiagobula.vercel.app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Nacionales <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Descubre que ciudades de Colombia reciben mas viajeros
            </p>
          </a>

          <a
            href="https://internacionales-el-dorado-6rjaxnjkk-santiagobula.vercel.app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Internacionales <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Conoce las ciudades del mundo que más viajeros reciben desde Colombia
            </p>
          </a>
        </div>
      </main>
    </>
  )
}
