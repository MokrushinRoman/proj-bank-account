import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import ConvertPage from 'pages/ConvertPage/ConvertPage';
import RatePage from 'pages/RatePage/RatePage';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrency } from 'redux/operations';
import { selectBaseCurrency } from 'redux/selectors';
import { addBaseCurrency } from 'redux/currencySlice';

export const App = () => {
  const dispatch = useDispatch();
  const baseCurrency = useSelector(selectBaseCurrency);
  useEffect(() => {
    if (baseCurrency) {
      return;
    }
    function success(pos) {
      const crd = pos.coords;
      dispatch(getCurrency(crd));
    }

    function error(err) {
      dispatch(addBaseCurrency('usd'));
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error);
  }, [baseCurrency, dispatch]);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<ConvertPage />} />
        <Route path="rates" element={<RatePage />} />
      </Route>
    </Routes>
  );
};
