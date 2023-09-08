import {
  Routes, Route,
} from 'react-router-dom';
import Home from './pages/Home';
import SavedUsers from './pages/SavedUsers';
import Navbar from './componets/Navbar';

function App() {

  return (
    <div className="app_container">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/SavedUsers" element={<SavedUsers />} />
      </Routes>
    </div>
  )
}

export default App
