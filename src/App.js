import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './components/Login';
import Header from './components/Header';
import Home from './components/Home';
import { Fragment } from 'react';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={
            <Fragment>
              <Header />
              <Home />
            </Fragment>
          }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
