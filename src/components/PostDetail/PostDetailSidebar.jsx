import PostDetailAuthor from './PostDetailAuthor';
import PostDetailRelatedPosts from './PostDetailRelatedPosts';

function PostDetailSidebar({ thumb, desc, authorData, dataRelated }) {
  return (
    <div className="post-detail__side">
      <PostDetailAuthor thumb={thumb} desc={desc} authorData={authorData} />
      <div className="spacing" />
      <PostDetailRelatedPosts dataRelated={dataRelated} />
    </div>
  );
}

export default PostDetailSidebar;
