import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Editor from '../components/Editor'
import { StyleButton } from '../components/StyleButton';
import { EditorContainer } from '../components/EditorContainer'
import { StylesContainer } from '../components/StylesContainer'
import { TextField } from '../components/TextField'
import { DownloadButton } from '../components/DownloadButton';

export default function Home() {

  const stylesHandler = (style, value) => {
    console.log(style, value);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>easy.dox</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <span className={styles.title}>easy.dox</span>

        {/* <Editor /> */}
        <EditorContainer>
          <StylesContainer>
                <StyleButton onClick={() => stylesHandler('fontWeight', 'bold')}><strong>b</strong></StyleButton>
                <StyleButton onClick={() => stylesHandler('fontStyle', 'italic')}><i>i</i></StyleButton>
                <StyleButton onClick={() => stylesHandler('textDecoration', 'underline')}><u>u</u></StyleButton>
          </StylesContainer>

          <TextField>

          </TextField>
          <DownloadButton />
        </EditorContainer>
      </main>
    </div>
  )
}
