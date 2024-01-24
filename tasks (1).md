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
  - dispatch action lấy danh sách bài viết theo category slug => `fetchPostsByCategory`
- `fetchPostsByCategory`
  - gọi category service lấy chi tiết category thông qua slug -> categoryDetail -> category id
  - gọi post service lấy danh sách bài viết theo category (id)

# Chức năng xem chi tiết bài viết theo danh mục -> `PostDetailPage`
- Tạo route (done)
- Lấy thêm `slug` trong mapping data (done)
- Gán link cho bài viết dẫn đến trang detail (done)
- Khi người dùng click vào tiêu đề bài viết -> chuyển sang `PostDetailPage`
  - Cần lấy được `slug` từ URL (done)
  - dispatch action lấy chi tiết bài viết thông qua `slug` trong useEffect với dependency là `slug` => `fetchPostDetailBySlug`
  - Xử lý trong `postSlice` -> `fetchPostDetailBySlug`
    - lấy chi tiết bài viết thông qua `slug` -> postDetail -> post id, author id
    - lấy danh sách bài viết liên quan dựa trên post id và author id
    - ở extra reducer xử lý lưu trữ chi tiết bài viết và danh sách bài viết liên quan vào store 
- xử lý render nội dung bài viết dưới dạng html -> reactjs render raw html

# Chức năng đăng nhập -> `LoginPage`
- API: POST -> [USER] Login -> {{base_url}}/jwt-auth/v1/token
- tạo state lữu trữ giá trị người dùng nhập -> `onChange`
- xử lý sự kiện khi form submit -> `onSubmit` của form -> chú ý có thêm e.preventDefault() để tránh trang reload
  - dispatch action đăng nhập và gởi thông tin đăng nhập đi (username và password)
- Cần tạo thêm các thành phần liên quan đến các chức năng dành cho USER
  - userService
    - method login -> gọi API với phương thức `POST`
  - userSlice
- Nếu đăng nhập không thành công thì show lỗi lên giao diện
- Nếu đăng nhập thành công thì chuyển hướng về trang chủ

