import React from 'react';
import Footer from '../components/footer';
import logo from '../assets/logo.svg';
import name from '../assets/nameLogo.svg';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';


export function FooterContainer() {
    return (
            <Footer>
               <Footer.Wrapper>
                   <Footer.Row>
                    <Footer.Column>
                    <Footer.Title>Connect with Me:</Footer.Title>
                        
                        <Footer.Link>
                             <Footer.Icons className="link-title">Projects:
                                <a href="https://github.com/aam198" target="_blank"rel="noreferrer"><AiIcons.AiOutlineGithub className="social-icons" /></a> 
                                <a href="https://codepen.io/aam198" target="_blank"rel="noreferrer"><FaIcons.FaCodepen className="social-icons"/></a>
                             </Footer.Icons>   

                             <Footer.Icons className="link-title">Social: 
                                <a href="https://www.twitter.com/alliemartz" target="_blank" rel="noreferrer"><AiIcons.AiFillTwitterCircle className="social-icons"/>
                                </a>
                            </Footer.Icons>
                       
                            <Footer.Icons className="link-title">Contact:      
                               <a href="mailto:alliemartzdev@gmail.com"><FaIcons.FaTelegram className="social-icons" /></a> 
                            </Footer.Icons>
  
                        </Footer.Link>
              
                    </Footer.Column>
                    

                     <Footer.Column>
                         <Footer.Logo>
                         
                                <a href ="http://www.alliemartz.com" className="site" target="_blank" rel="noreferrer" >
                                 <img src={logo} alt="logo" className="footer-logo" />
                                    <img src={name} alt="name logo" className="footer-logo name" />
                                </a>
                        </Footer.Logo>
                    </Footer.Column>  
                </Footer.Row>

                    <Footer.Copyright><FaIcons.FaRegCopyright className="icons"> </FaIcons.FaRegCopyright> 2021 Designed by 
                    <a href="http://www.alliemartz.com" className ="site-link" target="_blank" rel = "noreferrer"> Allie Martz</a></Footer.Copyright> 
               </Footer.Wrapper>
              
            </Footer>
    );
}
