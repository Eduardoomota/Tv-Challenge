import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from 'components/Header';
import Home from 'pages/Home';
import Details from 'pages/Details';

import { useShow } from 'hooks/useShow';

const Router: React.FC = () => {
  const [showInfo, loading] = useShow();

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home showInfo={showInfo} loading={loading} />} />
        <Route path="details/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
