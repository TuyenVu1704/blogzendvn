import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function ArticleItemCategories({ categoryIds }) {
  const categories = useSelector((state) => state.CATEGORY.categories);

  return (
    <ul className="article-item__categories">
      {categories.length > 0 &&
        categoryIds.map((id) => {
          const foundItem = categories.find((item) => item.id === id);

          return (
            <li key={id}>
              <Link to={`/category/${foundItem.slug}`} className="btn btn-category">
                {foundItem.name}
              </Link>
            </li>
          );
        })}
    </ul>
  );
}
