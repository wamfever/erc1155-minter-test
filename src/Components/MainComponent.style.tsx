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


export const ModalContent = styled('div')`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    pointer-events: auto;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0,0,0,.2);
    border-radius: .3rem;
    outline: 0;
`

export const ModalHeader = styled('div')`
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: space-between;
    padding: 0.2rem 1rem;
    border-bottom: 1px solid #dee2e6;
    border-top-left-radius: calc(.3rem - 1px);
    border-top-right-radius: calc(.3rem - 1px);
`

export const ModalBody = styled('div')`
    position: relative;
    flex: 1 1 auto;
    padding: 1rem;
`

export const ModalFooter = styled('div')`
    display: flex;
    flex-wrap: wrap;
    flex-shrink: 0;
    align-items: center;
    justify-content: flex-end;
    padding: .75rem;
    border-top: 1px solid #dee2e6;
    border-bottom-right-radius: calc(.3rem - 1px);
    border-bottom-left-radius: calc(.3rem - 1px);
`

export const MetamaskLogin = styled('a')`
    font-size: 14px;
    line-height: 1.7;
    color: #666666;
    margin: 0px;
    cursor: pointer;
`

export const MetamaskImg = styled('img')`
    height: 40px; 
    vertical-align: middle;
`

export const ModalCloseButton = styled('button')`
    border: none;
    color: #FFFFFF;
    padding: 10px;
    text-align: center;
    
    text-decoration: none;
    font-size: 16px;
    cursor: pointer;
    background-color: #f44336;
    border-radius: 5px;
`

export const ModalStyle = {
    content : {
      top                   : '30%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      background: 'transparent',
      border: 'none,',
      minWidth: '300px',
    }
};

