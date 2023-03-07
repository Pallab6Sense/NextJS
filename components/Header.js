import headerStyle from '../src/styles/Header.module.css';

export default function Header() {
  return (
    <div>
      <h1 className={headerStyle.title}>
        <span>WebDev</span> news
      </h1>
      <p className={headerStyle.description}>
        Keep up to date with the latest web dev news
      </p>
    </div>
  );
}
