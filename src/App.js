import Footer from './components/Footer'
import Home from './pages/home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Contact from './pages/contact';


function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route path='/' element={<Home />} /> 
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
