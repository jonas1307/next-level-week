import React from "react";

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/9701792?s=460&u=3c80eadddb42bf0a5f21fe6d2a92f995b19018bf&v=4" alt="Jonas Lima"/>
                <div>
                    <strong>Jonas Lima</strong>
                    <span>Chemistry</span>
                </div>
            </header>
            <p>
                Advanced chemistry enthusiast. 
                <br/><br/>
                Passionate about blowing things inside a laboratory and changing people's life through experiments.
            </p>
            <footer>
                <p>
                    Price per hour
                    <strong>15 EUR</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Contact me
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;
