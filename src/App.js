import { Routes, Route } from 'react-router-dom';
// import Container from './components/Container/Container'
// import NavBar from './components/NavBar/NavBar'
import Home from './components/pages/Home/Home'
import SinglePost from './components/pages/SinglePost/SinglePost';
import AddPost from './components/pages/AddPost/AddPost';
import EditPost from './components/pages/EditPost/EditPost';
import About from './components/pages/About/About';
import NotFound from './components/pages/NotFound/NotFound';

const App = () => {
  return (
    <main>
     {/* <NavBar />
     <Container> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<SinglePost />} />
          <Route path="/post/add" element={<AddPost />} />
          <Route path="/post/edit/:id" element={<EditPost />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
     {/* </Container> */}
   </main>
  );
};

export default App;
