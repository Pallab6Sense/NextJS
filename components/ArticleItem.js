import Link from 'next/link';
import articleStyle from '../src/styles/ArticleList.module.css';

const ArticleItem = ({ article }) => {
  return (
    <Link href="/article/[id]" as={`/article/${article.id}`} legacyBehavior>
      <a className={articleStyle.card}>
        <h3 className="">{article.title} &arr;</h3>
        <p className="">{article.body}</p>
      </a>
    </Link>
  );
};

export default ArticleItem;
