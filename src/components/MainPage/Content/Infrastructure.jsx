import React from 'react';
import s from './Content.module.css';
import newsPic from '../../../images/Illustration - Инфраструктура.png'
import { Link } from "react-router-dom"
import { CSSTransition } from 'react-transition-group';
import "./../../../styles.css";


export default function Infrastructure() {

    return (
        <div className={s.mainPage}>
            <div className={s.menu}>
                <ul>
                    <li><Link className={s.navLink} to={'/architecture'}>Архитектура</Link></li>
                    <li><Link className={s.navLink} to={'/improvement'}>Благоустройство</Link></li>
                    <li><Link className={s.navLink} to={'/security'}>Безопасность</Link></li>
                    <li><Link className={s.navLink} to={'/engineering'}>Инженерия</Link></li>
                    <li>
                        <CSSTransition
                            in={true}
                            timeout={0}
                            classNames={{
                                enterDone: 'menu-done-enter',
                                exit: 'menu-exit',
                                exitActive: 'menu-active-exit',
                                exitDone: 'menu-done-exit',
                            }}
                            appear
                        ><Link className={s.navLink} to={'/infrastructure'}>Инфраструктура</Link>
                        </CSSTransition>
                    </li>
                    <li><Link className={s.navLink} to={'/accessibility'}>Транспортная доступность</Link></li>
                </ul>
            </div>
            <div className={s.mainContent}>
                <CSSTransition
                    in={true}
                    timeout={1000}
                    classNames={{
                        appear: 'content-appear',
                        appearActive: 'content-active-appear',
                        enter: 'content-enter',
                        enterActive: 'content-active-enter',
                    }}
                    appear>
                    <div className={s.content}>
                        <h1 className={s.title}>Инфраструктура</h1>
                        <p className={s.description}>Прекрасный вариант для тех, кто предпочитает жить в спокойном районе среди интеллигенции, но при этом чувствовать ритм мегаполиса</p>
                    </div>
                </CSSTransition>
            </div>
            <div className={s.illustration}>
                <CSSTransition
                    in={true}
                    timeout={1000}
                    classNames={{
                        appear: 'illustration-appear',
                        appearActive: 'illustration-active-appear',
                        enter: 'illustration-enter',
                        enterActive: 'illustration-active-enter',
                    }}
                    appear>
                    <img src={newsPic}></img>
                </CSSTransition>
            </div>
        </div>
    );
}



