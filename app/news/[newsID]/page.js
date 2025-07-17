const NewsPageDetail = ({ params }) => {
  return (
    <>
      <header>News Page Detail</header>
      <p>News: {params.newsID}</p>
    </>
  );
};
export default NewsPageDetail;
