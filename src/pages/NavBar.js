import React, {useState} from 'react';
import { Link } from "react-router-dom";

import './NavBar.css';

export default function NavBar() {
    const [atTop, setTop] = useState(true);

    const scrollable = document.querySelector('body');
    function handleScroll() {
        if (scrollable.scrollTop <= 0) {
            setTop(true);
        }
        else {
            setTop(false);
        }
    }
    scrollable.addEventListener('scroll', () => {throttle(handleScroll, 250)});

    function scroll_top() {
        scrollable.scrollTo({top: 0, behavior: 'smooth'});

    }

    function mirrorScroll(e) {
        const top_new = scrollable.scrollTop + 3 * e.deltaY;
        scrollable.scrollTo({
            top: top_new,
            behavior: 'smooth'
        });
    }

    let throttlePause;
    const throttle = (callback, time) => {
        if (throttlePause) return;
        throttlePause = true;
        setTimeout(() => {
            callback();
            throttlePause = false;
        }, time);
    };
    
    return(
        <nav className={atTop ? 'nav_top' : 'nav'} onWheel={atTop ? mirrorScroll : void 0} >
            <ul>
                <li className='foo' />
                <li>
                    <Link to="/contact" onClick={scroll_top}>Contact</Link>
                </li>
                <li>
                    <Link to="/projects" onClick={scroll_top}>Projects</Link>
                </li>
                <li>
                    <Link to="/resume" onClick={scroll_top}>Resume</Link>
                </li>  
                <li>
                    <Link to="/" onClick={scroll_top}>About</Link>
                </li>
            </ul>
        </nav>
    );
}