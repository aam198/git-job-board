import React from 'react';
import { FaGithub } from 'react-icons/fa';

export default function Header() {
    return (
        <>
        <header>
            <a 
            href="https://github.com/aam198" target="_blank"
            rel="noopener noreferrer">
                    <FaGithub className="icons"> </FaGithub>
            </a>
            <h1>Find your next professional destination with...</h1>
            <h2><span className="btm-label">GitHub Job Search </span> </h2>
          
        </header>
        </>
    )
}
