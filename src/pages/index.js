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
        <span className={styles.title}>easy.dox</span>
        <Editor />
      </main>
    </div>
  )
}
