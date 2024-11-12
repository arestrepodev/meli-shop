import './styles/main.module.scss';
import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import Items from './pages/Items';
import Item from './pages/Item';
import Home from './pages/Home';

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/items" element={<Items />} />
      <Route path="/items/:id" element={<Item />} />
    </Routes>
  )
}

export default App
