import React from 'react'
import Footer from '../components/footer';
import logo from '../assets/logo.svg';
import name from '../assets/name_asset.svg';
import name2 from '../assets/Asset11.svg';
import { FaRegCopyright } from 'react-icons/fa';


export function FooterContainer() {
    return (
            <Footer>
               <Footer.Wrapper>
                   <Footer.Row>
                    <Footer.Column>
                            <img src={logo} alt="logo" className="footer-logo" />
                            <img src={name2} alt="name logo"
                            className="footer-logo name" />
              
                    </Footer.Column>
                    
               
                    <Footer.Column>
                            <Footer.Title>Connect with Me:</Footer.Title>
                     </Footer.Column>

                     <Footer.Column>
                        

                        <Footer.Link href="#">Projects</Footer.Link>
                            <Footer.Link href="#">Contact</Footer.Link>
                            <Footer.Link href="#">Social</Footer.Link>
                      
                            
                    </Footer.Column>
                        

                    </Footer.Row>



                    <Footer.Copyright><FaRegCopyright className="icons"> </FaRegCopyright> 2021 Designed by Allie Martz</Footer.Copyright>
               </Footer.Wrapper>
              
            </Footer>
    );
}
