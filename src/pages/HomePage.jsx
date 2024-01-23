import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ArticleGeneral from '../components/ArticleGeneral';
import ArticleLatest from '../components/ArticleLatest';
import ArticlePopular from '../components/ArticlePopular';
import { fetchPostsGeneral, fetchPostsLatest, fetchPostsPopular } from '../store/postSlice';

function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPostsLatest());
    dispatch(fetchPostsPopular());
    dispatch(fetchPostsGeneral());
  }, []);

  return (
    <>
      <ArticleLatest />
      <ArticlePopular />
      <ArticleGeneral />
    </>
  );
}

export default HomePage;
