import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Image, Box } from "@chakra-ui/react"
import Link from 'next/link'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function Home() {

  return (
    <div>
      <Header />
    <div className={styles.container}>
      <Head>
        <title>Kevin's Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Box className={styles.main} boxShadow="dark-lg">
          <Image
            boxSize="300px"
            objectFit="cover"
            src="icon.jpeg"
            alt="Kevin"
            boxShadow="2xl"
          />
          <h1 className={styles.title}>
            Welcome to Kevin's homepage!
          </h1>

          <p className={styles.description}>
            You can know more about me in this page!
          </p>

          <div className={styles.grid}>
            <Link href="/aboutme">
              <a className={styles.card}>
                <h3>About me &rarr;</h3>
                <p>An accountant aiming at becoming an app developer.</p>
              </a>
            </Link>

            <Link href="/timeinjapan">
              <a className={styles.card}>
                <h3>Time in Japan &rarr;</h3>
                <p>I love Japan. Let me share some photos with you.</p>
              </a>
            </Link>

            <Link href="/contact">
              <a className={styles.card}>
                <h3>Contact me &rarr;</h3>
                <p>Contact me for business purposes or personal purposes</p>
              </a>
            </Link>

            <Link href="/project">
              <a className={styles.card} >
                <h3>My projects &rarr;</h3>
                <p>
                  Showcase of my projects. Just click & check it out.
                </p>
              </a>
            </Link>
          </div>
        </Box>
      </main>

      <Footer />
    </div>
    </div>
  )
}

