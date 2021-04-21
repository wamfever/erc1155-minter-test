import React from 'react';
import Modal from 'react-modal';
import { Button, ModalStyle, ButtonWraper, AppWraper, ModalContent, ModalHeader, ModalFooter, ModalBody, MetamaskLogin, MetamaskImg, ModalCloseButton } from './ConnectComponent.style';
import Web3 from 'web3';

Modal.setAppElement('#connect_modal')


declare global {
  interface Window { ethereum: any; }
}



export default function ConnectComponent() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  console.log('window.eth', (window as any).ethereum)
  
  const openModal = () => {
    setIsOpen(true);
  }

  const afterOpenModal = () => {

  }

  const closeModal = () => {
    setIsOpen(false);
  }

  const connectWeb3 = () => {
    
    window.ethereum.request({method:'eth_requestAccounts'}).then((e:any) => {
      console.log(e);
      const w3 = new Web3(window.ethereum);
      console.log(w3);
    },(err:any) =>{
        console.log(err);
        // if(err.code==-32002){
        //     errorModal("Oups!","MetaMask already pending login. Please open it from the browser extensions and come back");
        //     pollMetaLogin();
        // }
    });
  }

  return (
    <AppWraper>
      <ButtonWraper>
        <Button onClick={openModal}>Connect Provider</Button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={ModalStyle}
          contentLabel="Connect Modal"
        >
          <ModalContent>
            <ModalHeader>
              <h3>Providers</h3>
            </ModalHeader>
            <ModalBody>
              <MetamaskLogin onClick={connectWeb3}>
                <MetamaskImg src={require("./../../assets/images/metamask_logo.jpeg").default} alt={"MetaMask Logo"} />
                Connect MetaMask
              </MetamaskLogin>
            </ModalBody>
            <ModalFooter>
              <ModalCloseButton onClick={closeModal}>Close</ModalCloseButton>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </ButtonWraper>
    </AppWraper>
  );
}
