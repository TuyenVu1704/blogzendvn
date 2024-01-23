export default function ArticleItemDesc({ desc }) {
  desc = desc.replace('<p>', '').replace('</p>', '');

  return <p className="article-item__desc">{desc}</p>;
}
