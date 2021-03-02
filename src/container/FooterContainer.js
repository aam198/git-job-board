import React from 'react'
import Footer from '../components/footer';

export function FooterContainer() {
    return (
            <Footer>
               <Footer.Wrapper>
                   <Footer.Row>
                    <Footer.Column>
                        <Footer.Title>About Me</Footer.Title>
                        <Footer.Link href="#">Projects</Footer.Link>
                        <Footer.Link href="#">Contact</Footer.Link>
                        <Footer.Link href="#">Social</Footer.Link>
                    </Footer.Column>
                    
                    
                        <Footer.Column>
                            <Footer.Title><h1>Social</h1></Footer.Title>
                            <Footer.Link href="#">Projects</Footer.Link>
                            <Footer.Link href="#">Contact</Footer.Link>
                            <Footer.Link href="#">Social</Footer.Link>
                        </Footer.Column>

                        <Footer.Column>
                            <Footer.Title><h1>Social</h1></Footer.Title>
                            <Footer.Link href="#">Projects</Footer.Link>
                            <Footer.Link href="#">Contact</Footer.Link>
                            <Footer.Link href="#">Social</Footer.Link>
                        </Footer.Column>
                    </Footer.Row>
               </Footer.Wrapper>
            </Footer>
    );
}
