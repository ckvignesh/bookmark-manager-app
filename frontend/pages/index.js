import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bookmarks Manager App</title>
        <meta name="description" content="Created by wecraftcode" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Bookmarks Manager Application</h1>

        <p className={styles.description}>
          This is the <code className={styles.code}>pages/index.js</code> Page.
        </p>

        <div></div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/we-craft-code"
          target="_blank"
          rel="noopener noreferrer"
        >
          All Rights Reserved by wecraftcode, 2022{" "}
        </a>
      </footer>
    </div>
  );
}
