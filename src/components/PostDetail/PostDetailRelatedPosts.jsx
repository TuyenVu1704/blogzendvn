import ArticleRelated from '../ArticleItem/ArticleRelated';

function PostDetailRelatedPosts({ dataRelated }) {
  const { list } = dataRelated
  return (
    <div className="related-post">
      <h2 className="related-post__head">Related Posts</h2>
      {list.map((item) => {
        return <ArticleRelated key={item.id} data={item} />
      })
      }

    </div>
  );
}

export default PostDetailRelatedPosts;
