import { useDispatch, useSelector } from 'react-redux';
import ArticleItem from '../ArticleItem';
import Button from '../shared/Button';
import MainTitle from '../shared/MainTitle';
import { fetchPostsGeneral } from '../../store/postSlice';
import { useState } from 'react';

function ArticleGeneral() {
  const posts = useSelector((state) => state.POST.postsGeneral.list);
  const currentPage = useSelector((state) => state.POST.postsGeneral.currentPage);
  const totalPages = useSelector((state) => state.POST.postsGeneral.totalPages);
  const [loading, setLoading] = useState(false);

  const hasMorePost = currentPage < totalPages;

  const dispatch = useDispatch();

  function handleLoadMore() {
    setLoading(true);
    dispatch(fetchPostsGeneral(currentPage + 1)).then((res) => {
      setLoading(false);
    });
  }

  return (
    <div className="articles-list section">
      <div className="tcl-container">
        {/* Main Title */}
        <MainTitle btnLabel="Xem them">Bai Viet Tong Hop</MainTitle>
        {/* End Main Title */}
        {/* End Row News List */}
        <div className="tcl-row">
          {posts.map((item, index) => (
            <div key={index} className="tcl-col-12 tcl-col-md-6">
              <ArticleItem isStyleCard isShowAvatar={false} data={item} />
            </div>
          ))}
        </div>
        {/* End Row News List */}
        {hasMorePost && (
          <div className="text-center">
            <Button type="primary" size="large" loading={loading} disabled={loading} onClick={handleLoadMore}>
              Tải thêm
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ArticleGeneral;
