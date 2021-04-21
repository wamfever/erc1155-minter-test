let web3 : any = null;


const Web3Service = {
    setConnectedWeb3: (instance : any) => {
        web3 = instance;

        console.log('Successfully registered Web3', web3);
    },

    getWeb3: () => web3,


};

export default Web3Service;
