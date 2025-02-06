import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home';
import Vision from './vision';
import Works from './works';
import Experience from './experience';
import ReachOutForm from './reachout';
import MenuModal from './menumodal';
import { useState } from 'react';

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home openModal={openModal} />} />
          <Route path="/vision" element={<Vision  openModal={openModal} />} />
          <Route path="/works" element={<Works  openModal={openModal} />} />
          <Route path="/experience" element={<Experience openModal={openModal} />} />
          <Route path='/reachout' element={<ReachOutForm openModal={openModal} />} />
        </Routes>
        <MenuModal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </Router>
  );
};

export default App
