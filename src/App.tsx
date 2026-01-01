import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import News from './pages/News';
import Contact from './pages/Contact';
import ChairmanMessage from './pages/ChairmanMessage';
import Board from './pages/Board';
import SocialResponsibility from './pages/SocialResponsibility';
import Kvkk from './pages/Kvkk';

import JobApplication from './pages/JobApplication';

import ProjectDetail from './pages/ProjectDetail';
import Studio from './pages/Studio';

function App() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  if (isAdmin) {
    return (
      <Routes>
        <Route path="/admin/*" element={<Studio />} />
      </Routes>
    );
  }

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          
          {/* Kurumsal Routes */}
          <Route path="/kurumsal" element={<About />} />
          <Route path="/kurumsal/hakkimizda" element={<About />} />
          <Route path="/kurumsal/baskanin-mesaji" element={<ChairmanMessage />} />
          <Route path="/kurumsal/yonetim-kurulu" element={<Board />} />
          <Route path="/kurumsal/sosyal-sorumluluk" element={<SocialResponsibility />} />
          <Route path="/kurumsal/kvkk" element={<Kvkk />} />

          {/* Project Routes */}
          <Route path="/projeler" element={<Projects />} />
          <Route path="/projeler/tamamlanan" element={<Projects />} />
          <Route path="/projeler/devam-eden" element={<Projects />} />
          <Route path="/projeler/:id" element={<ProjectDetail />} />
          
          {/* IK Routes */}
          <Route path="/insan-kaynaklari" element={<JobApplication />} />
          <Route path="/ik/basvuru" element={<JobApplication />} />
          <Route path="/ik/aydinlatma-metni" element={<Kvkk />} />
          <Route path="/ik/*" element={<About />} /> 
          
          <Route path="/haberler" element={<News />} />
          <Route path="/iletisim" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </Layout>
  );
}

export default App;
