import React from 'react';
import { DashboardWraper } from './DashboardScreen.style';
import PanelWhitelist from "../../components/Panels/PanelWhitelist/PanelWhitelist";
import PanelBurn from "../../components/Panels/PanelBurn/PanelBurn";

export default function DashboardScreen() {

    return (
        <DashboardWraper>
            <PanelWhitelist />
            <PanelWhitelist />
            <PanelBurn />
        </DashboardWraper>
    )
}
