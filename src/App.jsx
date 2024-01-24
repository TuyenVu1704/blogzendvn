import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import { fetchAllCategories } from './store/categorySlice';
import { fetchAllMenus } from './store/menuSlice';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import SearchPage from './pages/SearchPage';
import PostDetailPage from './pages/PostDetailPage';
import CategoryPage from './pages/CategoryPage';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllMenus());
    dispatch(fetchAllCategories());
  }, []);

  return (
    <div className="wrapper-content">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
        <Route path='/register' element={<RegisterPage />}></Route>
        <Route path='/search' element={<SearchPage />}></Route>
        <Route path='/post/:slug' element={<PostDetailPage />}></Route>
        <Route path='/category/:slug' element={<CategoryPage />}></Route>
      </Routes>

      <div className="spacing" />
      <Footer />
    </div>
  );
}

export default App;
