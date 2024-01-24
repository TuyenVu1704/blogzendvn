import { useParams, useSearchParams } from 'react-router-dom';
import ArticleItem from '../components/ArticleItem';
import Button from '../components/shared/Button';
import MainTitle from '../components/shared/MainTitle';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchPostsCategoryById } from '../store/postSlice';
import { fetchCategoriesBySlug } from '../store/categorySlice'

function CategoryPage
  () {
  const params = useParams()
  const { slug } = params
  const dispatch = useDispatch();
  const data = useSelector(state => state.POST.postCategory)
  const currentPage = useSelector((state) => state.POST.postCategory.currentPage);
  const totalPages = useSelector((state) => state.POST.postCategory.totalPages);
  const total = useSelector((state) => state.POST.postCategory.total);
  const [loading, setLoading] = useState(false);
  const [categoryId, setCategoryId] = useState()
  useEffect(() => {
    dispatch(fetchCategoriesBySlug(slug)).then((res) => {
      const categoryId = res.payload.data[0].id
      setCategoryId(categoryId)
      dispatch(fetchPostsCategoryById({ categories: categoryId, page: 1 }))
    })
  }, [slug])

  const hasMorePost = currentPage < totalPages;

  function handleLoadMore() {
    setLoading(true);
    dispatch(fetchPostsCategoryById({ categories: categoryId, page: currentPage + 1 })).then((res) => {
      setLoading(false);
    });
  }

  return (
    <div className="articles-list section">
      <div className="tcl-container">
        <MainTitle type="search">{total} kết quả tìm kiếm  </MainTitle>

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

export default CategoryPage
  ;
