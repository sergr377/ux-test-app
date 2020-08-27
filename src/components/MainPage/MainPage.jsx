import React from 'react';
import s from './MainPage.module.css';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom"
import Architecture from './Content/Architecture';
import Improvement from './Content/Improvement';
import Security from './Content/Security';
import Engineering from './Content/Engineering';
import Infrastructure from './Content/Infrastructure';
import Accessibility from './Content/Accessibility';


export default function MainPage() {

    return (
        <div className={s.mainPage}>
            <div className={s.menu}>
                <ul>
                    <li><Link className={s.navLink} to={{ pathname: '/mainPage/' + ('architecture') }}>Архитектура</Link></li>
                    <li><Link className={s.navLink} to={{ pathname: '/mainPage/' + ('improvement') }}>Благоустройство</Link></li>
                    <li><Link className={s.navLink} to={{ pathname: '/mainPage/' + ('security') }}>Безопасность</Link></li>
                    <li><Link className={s.navLink} to={{ pathname: '/mainPage/' + ('engineering') }}>Инженерия</Link></li>
                    <li><Link className={s.navLink} to={{ pathname: '/mainPage/' + ('infrastructure') }}>Инфраструктура</Link></li>
                    <li><Link className={s.navLink} to={{ pathname: '/mainPage/' + ('accessibility') }}>Транспортная доступность</Link></li>
                </ul>
            </div>
            {/* <BrowserRouter>
                <Switch>
                    <Route exact path='/'
                        render={() => <Architecture />} />
                    <Route path='mainPage/architecture'
                        render={() => <Architecture />} />
                    <Route path='mainPage/improvement'
                        render={() => <Improvement />} />
                    <Route path='mainPage/security'
                        render={() => <Security />} />
                    <Route path='mainPage/engineering'
                        render={() => <Engineering />} />
                    <Route path='mainPage/infrastructure'
                        render={() => <Infrastructure />} />
                    <Route path='mainPage/accessibility'
                        render={() => <Accessibility />} />
                    <Route path='/filmPage/:filmId'
                        component={() => <FilmPageContainer />} />
                </Switch>
            </BrowserRouter> */}
        </div >
    );
}


