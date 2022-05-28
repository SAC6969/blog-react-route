import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {NavBar,Home,PostDetail,CreatePost} from './';
function App() {
  return (
    <div className="container">
      <NavBar />
      {/* <Router> */}
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/post/:postId' element={<PostDetail/>} />
          <Route exact path='/create-post' element={<CreatePost/>} />
          {/* <Route exact path='/' component={Home} /> */}
        </Routes>
      {/* </Router> */}
    </div>
  );
}

export default App;
