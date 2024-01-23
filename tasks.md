# Chức năng search

- Cần lấy được từ khóa từ kiếm từ URL -> đã xử lý -> keyword
- Tạo method `getSearch` trong `postService` để lấy danh sách bài viết
- `postSlice.js`:
  - Tạo thêm thuộc tính `postsSearch` có cấu trúc giống `postsGeneral` ở trong `initialState`
  - Tạo thêm một action async (`createAsyncThunk`) -> `fetchPostsSearch`
  - Xử lý lưu trữ dữ liệu vào store -> add thêm case trong `extraReducers`
- Quay lại component `SearchPage`, lấy dữ liệu từ store và render
- Chú ý: xử lý chức năng load more (xem thêm bài viết, giống phần bài viết tổng hợp)

# Chức năng xem bài viết theo danh mục -> `CategoryPage` giao diện giống `SearchPage`
- Tạo ra route cho trang `category` -> /category/:slug
- Lấy thêm `slug` trong helper `mappingCategoryData`
- Gán Link cho category bài viết: `/category/fe`, `/category/vuejs`, .....
- Khi người dùng click vào category -> chuyển sang `CategoryPage`
  - Cần lấy được `slug` từ URL -> giống `PostDetailPage`

