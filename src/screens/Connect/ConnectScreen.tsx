import React from 'react';
import { Button, ButtonWraper, AppWraper } from './ConnectScreen.style';
import Web3 from 'web3';
import LoginModal from "../../components/LoginModal/LoginModal";
import Web3Service from "../../services/Web3Service";
import {useHistory} from "react-router";


declare global {
  interface Window { ethereum: any; }
}

export default function ConnectScreen() {
  const history = useHistory();

  if (true) {
    history.push('/dashboard');
  }

  const [modalIsOpen, setIsOpen] = React.useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const afterOpenModal = () => {

  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const initWeb3 = () => {
    const web3 = new Web3(window.ethereum);
    Web3Service.setConnectedWeb3(web3);
  };

  return (
    <AppWraper>
      <ButtonWraper>
        <Button onClick={openModal}>Connect Provider</Button>
        <LoginModal
          modalIsOpen={modalIsOpen}
          afterOpenModal={afterOpenModal}
          closeModal={closeModal}
          connectSuccessCallback={initWeb3}
        />
      </ButtonWraper>
    </AppWraper>
  );
}
