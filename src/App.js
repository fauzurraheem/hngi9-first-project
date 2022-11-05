import Footer from './components/Footer'
import Home from './pages/home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Contact from './pages/contact';
import Success from './pages/success';


function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route path='/' element={<Home />} /> 
          <Route path='/contact' element={<Contact />} />
          <Route path='/success' element={<Success />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
