import { useParams } from 'react-router-dom';
import PostDetailContent from '../components/PostDetail/PostDetailContent';
import PostDetailHead from '../components/PostDetail/PostDetailHead';
import PostDetailSidebar from '../components/PostDetail/PostDetailSidebar';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostsDetailBySlug, fetchPostsRelated } from '../store/postSlice';

function PostDetailPage() {

  const params = useParams()
  const dispatch = useDispatch()
  const { slug } = params;
  const [postID, setPostID] = useState()
  const [authorId, setAuthorId] = useState()
  useEffect(() => {
    dispatch(fetchPostsDetailBySlug(slug)).then((res) => {
      setAuthorId(res.payload[0].author);
      setPostID(res.payload[0].id)
    })
  }, [slug])

  useEffect(() => {
    dispatch(fetchPostsRelated({ author: authorId, id: postID }))
  }, [authorId])

  const data = useSelector(state => state.POST.postDetail)
  const dataRelated = useSelector(state => state.POST.postRelated)
  console.log(dataRelated)
  console.log(data)
  if (!data) return <></>
  if (!dataRelated) return <></>
  const { title, authorData, publishedDate, thumb, content, desc } = data


  return (
    <main className="post-detail">
      <div className="spacing" />

      <PostDetailHead title={title} authorData={authorData} publishedDate={publishedDate} />

      <div className="spacing" />

      <div className="post-detail__fluid">
        <div className="tcl-container">
          <div className="post-detail__wrapper">
            <PostDetailContent thumb={thumb} content={content} />

            <PostDetailSidebar thumb={thumb} desc={desc} authorData={authorData} dataRelated={dataRelated} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default PostDetailPage;
