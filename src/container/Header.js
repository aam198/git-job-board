import React from 'react';
import { FaGithub } from 'react-icons/fa';
import Zoom from 'react-reveal/Zoom';
import Tada from 'react-reveal/Tada';

export default function Header() {
    return (
        <>
        <header>
            <a 
            href="https://github.com/aam198" target="_blank"
            rel="noopener noreferrer">
                    <FaGithub className="icons"> </FaGithub>
            </a>
            <Zoom>
            <h1>Find your next professional destination with...</h1>
            </Zoom>
            <Tada>
            <h2><span className="btm-label">GitHub Job Search </span> </h2>
            </Tada>
          
        </header>
        </>
    )
}
