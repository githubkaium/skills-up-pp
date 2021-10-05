import React from 'react';
import './Footer.css';

const Footer = () => {
    const title = {
        height: '160px',
        backgroundColor: 'black'
    }

    return (
        <div style={title} className="d-flex flex-column justify-content-center align-items-center">
            <p className="footer text-white fw-bold fs-3 pt-2"><span>Skill</span> Up</p>
            <address>
                #House: 3 / A, Uttara, Dhaka - 1230<br />
                Contact: +880 999999 <br />
                Visit us at: <a href="SkillUp.com">SkillUp</a><br />
                Email: mailtous@skillup.com <br />
            </address>
        </div >
    );
};

export default Footer;