import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bookmarks Manager App</title>
        <meta name="description" content="Created by wecraftcode" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Bookmarks Manager Application</h1>
      </main>

      <footer>
        <a
          href="https://github.com/we-craft-code"
          target="_blank"
          rel="noopener noreferrer"
        >
          All Rights Reserved by wecraftcode, 2022
        </a>
      </footer>
    </div>
  );
}
