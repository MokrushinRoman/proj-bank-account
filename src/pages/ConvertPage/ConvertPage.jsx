import { ConvertForm } from 'components/ConvertForm/ConvertForm';
import { useSelector } from 'react-redux';
import { selectChangeResult, selectIsLoading } from 'redux/selectors';
const ConvertPage = () => {
  const result = useSelector(selectChangeResult);
  const isLoading = useSelector(selectIsLoading);
  return (
    <>
      <ConvertForm />
      <div>{isLoading ? <p>fetching result...</p> : <p>{result}</p>}</div>
    </>
  );
};

export default ConvertPage;
