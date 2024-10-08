import './App.css';
import { ContainerM } from './presentation/components/container/Default.Container';
import { Layout } from './presentation/components/layout/Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home'; 

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<ContainerM />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
