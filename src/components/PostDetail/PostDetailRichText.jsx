import parse from 'html-react-parser';
function PostDetailRichText({ content }) {
  return (
    <div className="rte">
      {parse(content.rendered)}
    </div>
  );
}

export default PostDetailRichText;
