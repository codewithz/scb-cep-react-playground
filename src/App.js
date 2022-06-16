
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Products from './components/RoutingApp/Products';
import Posts from './components/RoutingApp/Posts';
import Dashboard from './components/RoutingApp/admin/Dashboard';
import Home from './components/RoutingApp/Home';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div>
          <Switch>
            <Route path="/products" component={Products} />
            <Route path="/posts" component={Posts} />
            <Route path="/admin" component={Dashboard} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
