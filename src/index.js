import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <div className='bg-primary-100'>
        <Navbar />
        <div className='flex flex-col h-screen justify-between'>
          <main className='mt-20 h-full'>
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>
            </Switch>
          </main>
          <Footer />
        </div>
      </div>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
