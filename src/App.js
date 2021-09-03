import {getAllProducts} from './reducers/productSlice'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import ProductListing from './components/productListing';

function App(props) {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllProducts())
    // console.log(props.products)
    return () => {}
  }, [dispatch])
  return (
    <div className="App">
      <ProductListing />
    </div>
  );
}


export default App;

