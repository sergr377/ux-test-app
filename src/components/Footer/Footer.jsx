import React from 'react';
import { Link } from "react-router-dom"
import s from './Footer.module.css';

function Footer() {

    return (
        <div className={s.footer}>
            <p className={s.footerText}>Разработано в MST &emsp; | &emsp; 2018</p>
        </div>
    );
}

export default Footer

