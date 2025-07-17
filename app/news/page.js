import Link from "next/link";

const NewsPage = () => {
  return (
    <>
      <header>News Page</header>
      <ul>
        <li>
          <Link href="/news/first-news-page">First News Page</Link>
        </li>
        <li>
          <Link href="/news/second-news-page">Second News Page</Link>
        </li>
        <li>
          <Link href="/news/third-news-page">Third News Page</Link>
        </li>
      </ul>
    </>
  );
};
export default NewsPage;
