import { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hello, ZoneMS Website</title>
        <meta name="description" content="ZoneMS personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://zonems.github.io">ZoneMS.github.io</a>
        </h1>

        <p className={styles.description}>
          Personal website hosted on GitHub Pages
        </p>

        <div className={styles.grid}>
          <a href="https://github.com/ZoneMS" className={styles.card}>
            <h2>GitHub &rarr;</h2>
            <p>Check out my repositories and projects on GitHub.</p>
          </a>

          <div className={styles.card}>
            <h2>About</h2>
            <p>Software developer passionate about web technologies.</p>
          </div>

          <div className={styles.card}>
            <h2>Projects</h2>
            <p>Explore my latest projects and contributions.</p>
          </div>

          <div className={styles.card}>
            <h2>Contact</h2>
            <p>Get in touch for collaboration opportunities.</p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>
          Powered by{' '}
          <span className={styles.logo}>
            Next.js
          </span>
        </p>
      </footer>
    </div>
  )
}

export default Home