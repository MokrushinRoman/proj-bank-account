import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import ConvertPage from 'pages/ConvertPage/ConvertPage';
import RatePage from 'pages/RatePage/RatePage';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCurrency } from 'redux/operations';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    function success(pos) {
      const crd = pos.coords;
      dispatch(getCurrency(crd));
    }

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error);
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<ConvertPage />} />
        <Route path="rates" element={<RatePage />} />
      </Route>
    </Routes>
  );
};
