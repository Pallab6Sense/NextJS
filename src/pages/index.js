import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import ArticleList from '../../components/ArticleList';
// import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] });

export default function Home({ articles }) {
  console.log(articles);
  return (
    <div className="">
      <Head>
        <title>WebDev Newz</title>
        <meta name="keywords" content="Web development,programming" />
      </Head>
      <ArticleList articles={articles}></ArticleList>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=6`
  );
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
