import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from 'components/Header';
import Home from 'pages/Home';
import Details from 'pages/Details';

const Router: React.FC = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="details/:id" element={<Details />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
