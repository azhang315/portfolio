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
        <p><a href="https://www.facebook.com/profile.php?id=100009542816141" className="fa fa-facebook"> </a>
            <a href="https://www.linkedin.com/in/alex-zhang-aa3b6117a/" className="fa fa-linkedin"> </a>
            <a href="https://www.instagram.com/azhang0too/" className="fa fa-instagram"> </a></p>

        </footer>
    );
}

export default Footer;