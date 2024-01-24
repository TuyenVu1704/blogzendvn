import API from './api';

const postService = {
  getAll(inputParams = {}) {
    return API.call().get('wp/v2/posts', {
      params: {
        per_page: 3,
        page: 1,
        lang: 'vi',
        ...inputParams,
      },
    });
  },

  getLatest() {
    return this.getAll();
  },
  getPopular() {
    return this.getAll({ orderby: 'post_views' });
  },
  getGeneral(page = 1) {
    return this.getAll({ per_page: 2, page: page });
  },
  getSearch({ search, page }) {
    return this.getAll({ per_page: 1, page: page, search });
  },
  getCategoryById({ categories, page }) {
    return this.getAll({ per_page: 3, page: page, categories });
  },
  getPostDetailBySlug(slug) {
    return this.getAll({ slug });
  }
};

export default postService;
