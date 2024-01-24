import moment from "moment";
function PostDetailHead({ title, authorData, publishedDate }) {

  const { nickname } = authorData

  return (
    <div className="post-detail__head">
      <div className="tcl-container">
        <h1 className="post-detail__title">
          {title}
        </h1>
        <ul className="post-detail__info">
          <li className="item author">
            By{' '}
            <a href="/">
              <strong>{nickname}</strong>
            </a>
          </li>
          <li className="item date">{moment(publishedDate).format('MMM DD, YYYY')}</li>
          <li className="item views">
            2 <i className="icons ion-ios-eye" />
          </li>
          <li className="item comments">
            20 <i className="icons ion-ios-chatbubble" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PostDetailHead;
