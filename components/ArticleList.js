import articleStyle from '../src/styles/ArticleList.module.css';
import ArticleItem from './ArticleItem';
const ArticleList = ({ articles }) => {
  return (
    <div className={articleStyle.grid}>
      {articles.map((article) => (
        <ArticleItem key={article.id} article={article}></ArticleItem>
      ))}
    </div>
  );
};

export default ArticleList;
