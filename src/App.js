
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar';
import Products from './components/RoutingApp/Products';
import Posts from './components/RoutingApp/Posts';
import Dashboard from './components/RoutingApp/admin/Dashboard';
import Home from './components/RoutingApp/Home';
import ProductDetails from './components/RoutingApp/ProductDetails';
import NotFound from './components/RoutingApp/NotFound';
import { UseCaseOneHome } from './components/UseCaseOne/UseCaseOneHome';
import UseCaseTwoHome from './components/UseCaseTwo/UseCaseTwoHome';
import UseCaseThreeHome from './components/UseCaseThree/UseCaseThreeHome';
import UseCaseFourHome from './components/UseCaseFour/UseCaseFourHome';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div>
          <Switch>
            {/* <Route path="/products" component={Products} /> */}
            <Route path="/" exact component={Home} />
            <Route path="/products/:id" component={ProductDetails} />
            <Route path="/products" render={(props) => <Products sortBy='newest' {...props} />} />
            <Route path="/posts/:year?/:month?" component={Posts} />
            <Route path="/admin" component={Dashboard} />
            <Route path="/use-case-one" component={UseCaseOneHome} />
            <Route path="/use-case-two" component={UseCaseTwoHome} />
            <Route path="/use-case-three" component={UseCaseThreeHome} />
            <Route path="/use-case-four" component={UseCaseFourHome} />
            <Route path="/not-found" component={NotFound} />

            <Redirect to="/not-found" />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
