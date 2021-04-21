import styled from 'styled-components';

export const Button = styled.button`
    padding: 10px;
    box-sizing: border-box;
    font-family: 'Catamaran', sans-serif;
    text-transform: uppercase;
    letter-spacing: .07em;
    background: #2980b9;
    border: none;
    border-radius: 5px;
    width: 100%;
    color: white;
    font-size:16px;
    cursor: pointer;
    transition: background 300ms;
    &:hover {
        background: #3498db;     
    }
`;

export const ButtonWraper = styled('div')`
    h1 {
        text-align: center;
        color: #434343;
        text-transform: uppercase;
        letter-spacing: .05em;
    }
    width: 400px;
    padding: 15px;
    border: #ddd thin solid;
    section {
        margin-bottom: 15px;
    }
`

export const AppWraper = styled('div')`
    flex-direction: column;
    display: flex;
    justify-content: center;
`

