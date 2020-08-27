import React from 'react';
import { Link } from "react-router-dom"
import s from './Navbar.module.css';
import { useParams } from "react-router-dom";
import classNames from 'classnames/bind';

let cx = classNames.bind(s);

function Navbar() {

    let { id } = useParams();

    let className1 = cx({
        navLink: true,
        underline : id === 'architecture'
    });
    let className2 = cx({
        navLink: true,
        underline : id === 'emptyPage1'
    });
    let className3 = cx({
        navLink: true,
        underline : id === 'emptyPage2'
    });
    let className4 = cx({
        navLink: true,
        underline : id === 'emptyPage3'
    });

    return (
        <div className={s.navbar}>
            <div className={s.logo}>
                <div className={s.backgroundBlock}></div>
                <p className={s.navLinkLogo}>Первомайская</p>
            </div>
            <div className={s.navbuttonCenter}>
                <Link className={className1} to={'/architecture'}>О комплексе</Link>
                <Link className={className2} to={'/emptyPage1'}>Особенности</Link>
                <Link className={className3} to={'/emptyPage2'}>Пентхаусы</Link>
                <Link className={className4} to={'/emptyPage3'}>Выбрать квартиру</Link>
            </div>
            <div className={s.logo}>
                <p className={s.navLinkLogo}>8 888 888 88 88</p>
                <div className={s.backgroundBlock}>
                    <div className={s.iconBurger}>
                        <div className={s.shape1}></div>
                        <div className={s.shape2}></div>
                        <div className={s.shape1}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar

// import React from 'react';
// import s from './EmptyPage.module.css';
// import { useParams } from "react-router-dom";
// import classNames from 'classnames/bind';

// let cx = classNames.bind(s);

// export default function EmptyPage() {

//     let { id } = useParams();

//     let className = cx({
//         emptyPage1: id === 'emptyPage1',
//         emptyPage2: id === 'emptyPage2',
//         emptyPage3: id === 'emptyPage3'
//     });

//     return (
//         <div className={className}>
//             <div>
//                 <h3>ID: {id}</h3>
//             </div>
//         </div >
//     );
// }


