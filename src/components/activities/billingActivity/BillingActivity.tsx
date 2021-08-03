import React, { FunctionComponent, useEffect, useRef } from "react";
import AppHeader from "../../accessories/appHeader/AppHeader";
import { IState } from "../../../types";
import { IStateProps, TProps } from "./types";
import { useTranslation } from "react-i18next";

const BillingActivity: FunctionComponent<TProps> = ({
    userCredentials
}) => {
    const { t } = useTranslation();

    const breadcrumbMap = {
        [t("nav.dashboard")]: "/",
        [t("nav.billing")]: "/bill",
    };
    return (
        <h1>ciao!</h1>
    )
}

export default BillingActivity;