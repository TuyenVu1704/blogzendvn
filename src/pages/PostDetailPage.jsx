import { useParams } from 'react-router-dom';
import PostDetailContent from '../components/PostDetail/PostDetailContent';
import PostDetailHead from '../components/PostDetail/PostDetailHead';
import PostDetailSidebar from '../components/PostDetail/PostDetailSidebar';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostsDetailBySlug } from '../store/postSlice';

function PostDetailPage() {

  const params = useParams()
  const dispatch = useDispatch()
  const { slug } = params;
  useEffect(() => {
    dispatch(fetchPostsDetailBySlug(slug))
  }, [slug])
  const data = useSelector(state => state.POST.postDetail)
  console.log(data)
  if (!data) return <></>
  const { title, authorData, publishedDate, thumb, content } = data
  return (
    <main className="post-detail">
      <div className="spacing" />

      <PostDetailHead title={title} authorData={authorData} publishedDate={publishedDate} />

      <div className="spacing" />

      <div className="post-detail__fluid">
        <div className="tcl-container">
          <div className="post-detail__wrapper">
            <PostDetailContent thumb={thumb} content={content} />

            <PostDetailSidebar />
          </div>
        </div>
      </div>
    </main>
  );
}

export default PostDetailPage;
