import { getAllProducts } from './reducers/productSlice'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import ProductListing from './components/productListing';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import CartPage from './components/cartPage';
import Header from './components/header';
// import { createBrowserHistory } from "history";

// const history = createBrowserHistory();

function App(props) {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllProducts())
    // console.log(props.products)
    return () => { }
  }, [dispatch])
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" component={ProductListing} exact={true} />
          <Route path="/cart" component={CartPage} exact={true} />
        </Switch>
      </Router>
    </div>
  );
}


export default App;

