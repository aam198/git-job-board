import React from 'react';
import {Container, Wrapper, Row, Column, Link, Title, Copyright, Icons, Logo} from './styles/footerStyle';

export default function Footer({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
  };

Footer.Wrapper = function FooterWrapper({children, ...restProps}){
    return <Wrapper {...restProps}>{children}</Wrapper>
}

Footer.Row = function FooterRow({children, ...restProps}){
    return <Row {...restProps}>{children}</Row>
}

Footer.Column = function FooterColumn({children, ...restProps}){
    return <Column {...restProps}>{children}</Column>
}



Footer.Title = function FooterTitle({children, ...restProps}){
    return <Title {...restProps}>{children}</Title>
}

Footer.Link = function FooterLink({children, ...restProps}){
    return <Link {...restProps}>{children}</Link>
}

Footer.Icons = function FooterIcons({children, ...restProps}){
    return <Icons {...restProps}>{children}</Icons>
}

Footer.Copyright = function FooterCopyright({children, ...restProps}){
    return <Copyright {...restProps}>{children}</Copyright>
}


Footer.Logo = function FooterLogo({children, ...restProps}){
    return <Logo {...restProps}>{children}</Logo>
}