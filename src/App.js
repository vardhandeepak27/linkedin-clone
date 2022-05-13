import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './components/Login';
import Header from './components/Header';
import Home from './components/Home';
import { Fragment, useEffect } from 'react';
import { getUserAuth } from './actions';
import { connect } from 'react-redux';


function App(props) {
  useEffect(() => {
    props.getUserAuth();
  }, []);

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

const mapStateToProps = (state) => {
  return {};
}

const mapDispatchToProps = (dispatch) => ({
  getUserAuth: () => dispatch(getUserAuth())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
