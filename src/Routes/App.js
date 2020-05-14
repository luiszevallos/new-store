import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import HomeScreen from '../Pages/Containers/HomeScreen';
import Layout from './Components/Layout';
import LoginScreen from '../Pages/Containers/LoginScreen';
import DetailsScreen from '../Pages/Containers/DetailsScreen';
import ShoppingScreen from '../Pages/Containers/ShoppingScreen';

function App() {
  return (
    <BrowserRouter>
      <Layout />
      <Switch>
        <Route path="/" exact component={HomeScreen} />
        <Route path="/Login" exact component={LoginScreen} />
        <Route path="/Details/:id" exact component={DetailsScreen} />
        <Route path="/Shopping" exact component={ShoppingScreen} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
