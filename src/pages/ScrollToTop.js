import {useEffect} from "react";
import {useLocation} from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom';

export default function ScrollToTop() {
    const {pathname} = useLocation();

    useEffect(() => {
        document.querySelector('body').scrollTo({top: 0});
    }, [pathname]);

    return null;
}