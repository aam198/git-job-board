import styled from 'styled-components';


export const Container = styled.div`
    background: #A3BCB6; 
    border-top: 2.5px dashed #D0DADD;
    padding: 60px 50px 20px 50px;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1100px;
    margin: 0 auto;
    color: #fff;
    `

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    padding-bottom: 30px;`

export const Row = styled.div`
    display: grid;
    grid-template-columns: 400px 1fr;
    grid-gap: 10px;
    
    @media (max-width: 1000px){
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }`


export const Title = styled.div`
    font-size: 2rem;
    color: #fff;
    margin-bottom: 1.5rem;
    text-transform: uppercase;
`

export const Link = styled.div`
    color: #fff;
    font-size: 18px;
    text-decoration: none;
    display:flex;
    flex-direction: column;
    margin-top: .5rem;
    margin-bottom: 25px;
    margin-left: 2rem;
    `

export const Logo = styled.div`
    display: grid;
    justify-items: end;
    margin-right: 4rem;
    `

export const Icons = styled.div`
    margin-bottom: 1.3rem;
    font-size: 1.5rem;
    `

export const Copyright = styled.div`
    display: flex;
    align-content: center;
    justify-content: center;`