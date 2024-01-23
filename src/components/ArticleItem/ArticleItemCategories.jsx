import { useSelector } from 'react-redux';

export default function ArticleItemCategories({ categoryIds }) {
  const categories = useSelector((state) => state.CATEGORY.categories);

  return (
    <ul className="article-item__categories">
      {categories.length > 0 &&
        categoryIds.map((id) => {
          const foundItem = categories.find((item) => item.id === id);

          return (
            <li key={id}>
              <a href="/" className="btn btn-category">
                {foundItem.name}
              </a>
            </li>
          );
        })}
    </ul>
  );
}
