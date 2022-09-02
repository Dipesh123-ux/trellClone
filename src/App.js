import Landing from './pages/Landing'
import VideoWatch from './pages/VideoWatch'
import NavBar from './components/Navbar'
import Footer from './components/Footer'
import {Routes,Route} from 'react-router-dom'


function App() {
  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/" exact element={<Landing/>} />
      <Route path="/watch" exact element={<VideoWatch/>} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
