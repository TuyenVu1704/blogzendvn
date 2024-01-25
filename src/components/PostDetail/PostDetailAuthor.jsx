import './post-author.css';
import parse from 'html-react-parser'
function PostDetailAuthor({ thumb, desc, authorData }) {
  const { nickname } = authorData
  return (
    <div className="post-author">
      <div className="post-author__bg-avatar">
        <a href="/" className="post-author__avatar">
          <img src={thumb} alt="" />
        </a>
      </div>
      <div className="post-author__nickname">
        <a href="/">{nickname}</a>
      </div>
      <p className="post-author__desc">
        {parse(desc)}
      </p>
    </div>
  );
}

export default PostDetailAuthor;
