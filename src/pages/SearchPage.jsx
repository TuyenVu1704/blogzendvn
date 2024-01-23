import { useSearchParams } from 'react-router-dom';
import ArticleItem from '../components/ArticleItem';
import Button from '../components/shared/Button';
import MainTitle from '../components/shared/MainTitle';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchPostsSearch } from '../store/postSlice';


function SearchPage() {

  const [searchParams] = useSearchParams()
  const keyword = searchParams.get('keyword')
  const data = useSelector(state => state.POST.postSearch)
  const currentPage = useSelector((state) => state.POST.postSearch.currentPage);
  const totalPages = useSelector((state) => state.POST.postSearch.totalPages);
  const total = useSelector((state) => state.POST.postSearch.total);
  const [loading, setLoading] = useState(false);

  const hasMorePost = currentPage < totalPages;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPostsSearch({ search: keyword, page: 1 }))
  }, [keyword])

  function handleLoadMore() {
    setLoading(true);
    dispatch(fetchPostsSearch({ search: keyword, page: currentPage + 1 })).then((res) => {
      setLoading(false);
    });
  }
  console.log(data, currentPage, totalPages)
  return (
    <div className="articles-list section">
      <div className="tcl-container">
        <MainTitle type="search">{total} kết quả tìm kiếm với từ khóa {keyword} </MainTitle>

        <div className="tcl-row tcl-jc-center">
          {
            data.list.map((item) => {
              return <div className="tcl-col-12 tcl-col-md-8" key={item.id}>
                <ArticleItem isStyleCard isShowCategories isShowAvatar={false} isShowDesc={false} data={item} />
              </div>
            })
          }


        </div>
        {
          hasMorePost && <div className="text-center">
            <Button type="primary" size="large" loading={loading} disabled={loading} onClick={handleLoadMore}>
              Tải thêm
            </Button>
          </div>
        }

      </div>
    </div>
  );
}

export default SearchPage;
