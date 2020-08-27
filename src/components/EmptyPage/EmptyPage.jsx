import React from 'react';
import s from './EmptyPage.module.css';
import { useParams } from "react-router-dom";
import classNames from 'classnames/bind';

let cx = classNames.bind(s);

export default function EmptyPage() {

    let { id } = useParams();

    let className = cx({
        emptyPage1: id === 'emptyPage1',
        emptyPage2: id === 'emptyPage2',
        emptyPage3: id === 'emptyPage3'
    });

    return (
        <div className={className}>
            <div className={s.id}>
                <h3>ID: {id}</h3>
            </div>
        </div >
    );
}


