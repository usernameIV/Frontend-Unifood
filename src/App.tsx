import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ItemsScreen from './pages/ItemsScreen';
import HomeScreen from './pages/HomeScreen';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element = {<HomeScreen />} />
          <Route path="/home" element= {<HomeScreen />} />
          <Route path="/items" element= {<ItemsScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
      
  );
}

export default App;
