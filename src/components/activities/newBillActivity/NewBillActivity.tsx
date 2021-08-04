import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import AppHeader from "../../accessories/appHeader/AppHeader";
import Footer from "../../accessories/footer/Footer";
import Button from "@material-ui/core/Button";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { IState } from "../../../types";
import { useFormik } from "formik";
import { TextField } from '@material-ui/core';
import { BillDTO } from "../../../generated";
import { FullBillDTO } from "../../../generated";
import { scrollToElement } from "../../../libraries/uiUtils/scrollToElement";
import "./styles.scss";
import {
    createBill,
    createBillReset,
} from "../../../state/bills/actions";
import {
    IDispatchProps,
    IStateProps,
    TActivityTransitionState,
    TProps,
} from "./types";



const NewBillActivity: FunctionComponent<TProps> = ({
    userCredentials,
    createBill,
    createBillReset,
    isLoading,
    hasSucceeded,
    hasFailed,
    billHomeRoute,
}) => {
    const { t } = useTranslation();

    const breadcrumbMap = {
        [t("nav.dashboard")]: "/",
        [t("nav.billing")]: "/billing",
        [t("nav.newbill")]: "/bills",
    };

    const onSubmit = (bill: FullBillDTO) => {
        createBill(bill);
    };

    const [activityTransitionState, setActivityTransitionState] =
        useState<TActivityTransitionState>("IDLE");

    useEffect(() => {
        if (
            activityTransitionState === "TO_NEW_BILL_RESET" ||
            activityTransitionState === "TO_BILL_HOME"
        ) {
            createBillReset();
            setShouldResetForm(true);
        }
    }, [activityTransitionState, createBillReset]);


    const infoBoxRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (hasFailed) {
            scrollToElement(infoBoxRef.current);
        }
    }, [hasFailed]);

    const [shouldResetForm, setShouldResetForm] = useState(false);

    const resetFormCallback = () => {
        setShouldResetForm(false);
        setActivityTransitionState("IDLE");
        scrollToElement(null);
    };

    switch (activityTransitionState) {
        case "TO_BILL_HOME":
            return <Redirect to={billHomeRoute} />;
        default:
            return (
                <div className="newPatient">
                    <AppHeader
                        userCredentials={userCredentials}
                        breadcrumbMap={breadcrumbMap}
                    />
                    <p>ciao</p>
                    <Footer />
                </div>
            );
    }
}

export default NewBillActivity;