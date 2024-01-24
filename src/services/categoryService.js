import API from './api';

const categoryService = {
  getAll() {
    return API.call().get('/wp/v2/categories?per_page=100&page=1&lang=vi');
  },
  getCategoryBySlug(slug) {
    return API.call().get(`/wp/v2/categories?slug=${slug}&lang=vi`)
  }
};

export default categoryService;
