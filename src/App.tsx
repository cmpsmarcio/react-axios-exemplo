import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { ListPage } from './components/ListPage';
import './css/App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Link to="/users">Lista de Usuários</Link>
        <Switch>
          <Route path="/users">
            <ListPage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
