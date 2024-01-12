import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap'
import Header from './components/views/Header/Header';
import Footer from './components/views/Footer/Footer';
import Home from './components/pages/Home/Home'
import SinglePost from './components/pages/SinglePost/SinglePost';
import AddPost from './components/pages/AddPost/AddPost';
import EditPost from './components/pages/EditPost/EditPost';
import About from './components/pages/About/About';
import NotFound from './components/pages/NotFound/NotFound';
import Categories from './components/pages/Categories/Categories';
import Category from './components/features/SelectedCategory/SelectedCategory';

const App = () => {
  return (
    <main>
     <Container>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:postId" element={<SinglePost />} />
          <Route path="/post/add" element={<AddPost />} />
          <Route path="/post/edit/:id" element={<EditPost />} />
          <Route path="/about" element={<About />} />
          <Route path="/categories" element={<Categories />}/>
          <Route path="/category/:category" element={<Category />}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
     </Container>
   </main>
  );
};

export default App;
