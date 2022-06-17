
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar';
import Products from './components/RoutingApp/Products';
import Posts from './components/RoutingApp/Posts';
import Dashboard from './components/RoutingApp/admin/Dashboard';
import Home from './components/RoutingApp/Home';
import ProductDetails from './components/RoutingApp/ProductDetails';
import NotFound from './components/RoutingApp/NotFound';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div>
          <Switch>
            {/* <Route path="/products" component={Products} /> */}
            <Route path="/products/:id" component={ProductDetails} />
            <Route path="/products" render={(props) => <Products sortBy='newest' {...props} />} />
            <Route path="/posts/:year?/:month?" component={Posts} />
            <Route path="/admin" component={Dashboard} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/" exact component={Home} />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
