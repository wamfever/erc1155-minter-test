import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Web3 from "web3";

import Web3Service from "../../services/Web3Service";
import { DashboardWraper, PageContainer } from './DashboardScreen.style';

import PanelWhitelist from "../../components/Panels/PanelWhitelist/PanelWhitelist";
import PanelBurn from "../../components/Panels/PanelBurn/PanelBurn";
import PanelMint from "../../components/Panels/PanelMint/PanelMint";
import PanelBlacklist from "../../components/Panels/PanelBlacklist/PanelBlacklist";

export default function DashboardScreen() {

    const [isFinishedComputeRoles, setFinishedComputeRoles] = React.useState(false);

    const [isOwner, setIsOwner] = React.useState(false);
    const [isMinter, setIsMinter] = React.useState(false);

    // init web3
    const web3 = new Web3(window.ethereum);
    Web3Service.setConnectedWeb3(web3, window.ethereum.selectedAddress);

    // check roles function
    const refreshRoles = () => {
        Web3Service.owner().then((data : any) => {
            if (!data || !Web3Service.getCurrentAddress()) {
                return;
            }

            if (data.toLowerCase() === Web3Service.getCurrentAddress().toLowerCase()) {
                setIsOwner(true);
            }

            Web3Service.isWhitelisted(Web3Service.getCurrentAddress()).then((minterData : any) => {
                setIsMinter(minterData);

                setFinishedComputeRoles(true);
            });
        });
    };

    refreshRoles();

    if (!isFinishedComputeRoles) {
        return (<>
            <h1>LOADING...</h1>
        </>);
    }

    const refreshRolesObject = {
        refreshRoles: refreshRoles,
    };


    return (<>
        <PageContainer>
            {isOwner && <DashboardWraper>
                <PanelWhitelist {...refreshRolesObject} />
                <PanelBlacklist {...refreshRolesObject} />
            </DashboardWraper>}
            <DashboardWraper>
                {isMinter && <PanelMint />}
                <PanelBurn />
            </DashboardWraper>
        </PageContainer>
        <ToastContainer/>
    </>);
}
