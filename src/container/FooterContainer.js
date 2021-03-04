import React from 'react'
import Footer from '../components/footer';
import logo from '../assets/logo.svg';
import name from '../assets/name_asset.svg';


export function FooterContainer() {
    return (
            <Footer>
               <Footer.Wrapper>
                   <Footer.Row>
                    <Footer.Column>
                            <img src={logo} alt="logo" className="footer-logo" />
                            <img src={name} alt="name logo"
                            className="footer-logo name" />
                        
                            <Footer.Title></Footer.Title>
                    </Footer.Column>
                    
                    
                        <Footer.Column>
                            {/* <Footer.Title>Contact Me</Footer.Title>
                            <Footer.Link href="#">Projects</Footer.Link>
                            <Footer.Link href="#">Contact</Footer.Link>
                            <Footer.Link href="#">Social</Footer.Link> */}
                        </Footer.Column>

                        <Footer.Column>
                            <Footer.Title>Contact Me</Footer.Title>
                            <Footer.Link href="#">Projects</Footer.Link>
                            <Footer.Link href="#">Contact</Footer.Link>
                            <Footer.Link href="#">Social</Footer.Link>
                        </Footer.Column>
                    </Footer.Row>
                    <Footer.Copyright>Copyright 2021 Designed by Allie Martz</Footer.Copyright>
               </Footer.Wrapper>
              
            </Footer>
    );
}
