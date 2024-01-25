export function mappingPostData(item) {
  return {
    id: item.id,
    thumb: item.featured_media_url,
    title: item.title.rendered,
    desc: item.excerpt.rendered,
    publishedDate: item.date,
    authorData: item.author_data,
    categoryIds: item.categories,
    slug: item.slug,
    content: item.content,
    author: item.author
  };
}

export function mappingCategoryData(item) {
  return {
    id: item.id,
    name: item.name,
    slug: item.slug
  };
}

export const mappingMenuData = (item) => {
  let childItems = [];

  if (item.child_items) {
    childItems = item.child_items.map(mappingMenuData);
  }

  return {
    id: item.ID,
    title: item.title,
    childItems,
  };
};