import styled from 'styled-components';


export const Container = styled.div`
    padding: 80px 60px;
    background: #A3BCB6; 
    border-top: 2.5px dashed #D0DADD;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    color: #fff;
    `

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 50px;`

export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    grid-gap: 20px;
    
    @media (max-width: 1000px){
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }`

export const Link = styled.div`
    color: #fff;
    margin-bottom: 20px;
    font-size: 18px;
    text-decoration: none;

        &:hover{
            color: #1A222F;
            cursor: pointer;
            font-weight: bold;
            transition: 200ms ease-in;
        };
    `

export const Title = styled.div`
    font-size: 2rem;
    color: #fff;
    margin-bottom: 2rem;
    text-transform: uppercase;
`