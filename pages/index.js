import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Editor from '../components/Editor'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>easy.dox</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2 className={styles.title}>easy.dox</h2>
        <Editor />
      </main>
    </div>
  )
}
