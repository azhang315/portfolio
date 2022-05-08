import React from 'react';

import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <hr />
            <section id="legal">
            Copyright © 2022 Alex Zhang <br />
            7 Cypress Ln, Littleton MA 01460 <br />
            All Rights Reserved
            </section>

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <p><a href="#" className="fa fa-facebook"></a>
            <a href="#" className="fa fa-linkedin"></a>
            <a href="#" className="fa fa-instagram"></a></p>

        </footer>
    );
}

export default Footer;