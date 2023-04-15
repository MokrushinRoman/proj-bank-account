import { rates } from 'redux/operations';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const RatePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(rates());
  }, [dispatch]);

  return (
    <>
      <h2>RatePage</h2>
    </>
  );
};

export default RatePage;
