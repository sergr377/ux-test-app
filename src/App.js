import React from 'react';
import './App.css';
import s from './App.module.css';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import MainPage from './components/MainPage/MainPage';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import EmptyPage from './components/EmptyPage/EmptyPage';
import Architecture from './components/MainPage/Content/Architecture';
import Improvement from './components/MainPage/Content/Improvement';
import Security from './components/MainPage/Content/Security';
import Engineering from './components/MainPage/Content/Engineering';
import Infrastructure from './components/MainPage/Content/Infrastructure';
import Accessibility from './components/MainPage/Content/Accessibility';


const App = () => {
  return (
    <div className={s.appBlock}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/"
            children={<Navbar />} />
          <Route path="/:id"
            children={<Navbar />} />
        </Switch>
        <Switch>
          <Route exact path='/'
            render={() => <Architecture />} />
          <Route path='/architecture'
            render={() => <Architecture />} />
          <Route path='/improvement'
            render={() => <Improvement />} />
          <Route path='/security'
            render={() => <Security />} />
          <Route path='/engineering'
            render={() => <Engineering />} />
          <Route path='/infrastructure'
            render={() => <Infrastructure />} />
          <Route path='/accessibility'
            render={() => <Accessibility />} />
          <Route path="/:id"
            children={<EmptyPage />} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App; 