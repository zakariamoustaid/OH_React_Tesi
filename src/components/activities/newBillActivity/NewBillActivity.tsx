import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import AppHeader from "../../accessories/appHeader/AppHeader";
import Footer from "../../accessories/footer/Footer";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import patientDTO from "/home/zak/Tesi/OH_React_Tesi/src/mockServer/fixtures/patientDTO.js";
import Table from '@material-ui/core/Table';
import TextData from '@material-ui/core/TextField'
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import { green } from '@material-ui/core/colors';
import Icon from '@material-ui/core/Icon';
import { useTranslation } from "react-i18next";
import { connect, useDispatch } from "react-redux";
import { Redirect } from "react-router";
import { IState } from "../../../types";
import { useFormik } from "formik";
import TextField from "../../accessories/textField/TextField";
import { BillDTO, PatientDTO } from "../../../generated";
import { FullBillDTO } from "../../../generated";
import { scrollToElement } from "../../../libraries/uiUtils/scrollToElement";
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import "./styles.scss";
import SearchIcon from "../../../assets/SearchIcon";
import AddIcon from '@material-ui/icons/Add';
import SaveIcon from '@material-ui/icons/Save';

import {
    createBill,
    createBillReset,
} from "../../../state/bills/actions";

import {
    getMedicals,
} from "../../../state/medicals/actions"

import { MedicalDTO } from "../../../generated";

import {
    IDispatchProps,
    IStateProps,
    TActivityTransitionState,
    TProps,
    TValues,
} from "./types";

import { getPatientSuccess } from "/home/zak/Tesi/OH_React_Tesi/src/state/patients/actions";



const NewBillActivity: FunctionComponent<TProps> = ({
    userCredentials,
    isLoading,
    hasSucceeded,
    createBill,
    createBillReset,
    hasFailed,
    billHomeRoute,
    med,
    getMedicals,
    getMedStat,
}) => {
    const { t } = useTranslation();

    const breadcrumbMap = {
        [t("nav.dashboard")]: "/",
        [t("nav.billing")]: "/billing",
        [t("nav.newbill")]: "/bills",
    };

    //
    //Gestione Modal
    //
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const body = (
        <div>
            <p>ciao</p>
        </div>
    )
    //
    //
    const x = med;

    useEffect(() => {
        getMedicals();
    }, []);

    const tet = () => {
        med?.map((m, i) => {
            console.log(i, m.description);
        })
    }


    return (
        <div className="new_Bill">
            <AppHeader
                userCredentials={userCredentials}
                breadcrumbMap={breadcrumbMap}
            />
            <div className="newBill__background">
                <div className="newBill__content">
                    <div className="newBill__title">{t("nav.newbill")}</div>
                    <div className="newBill__panel">
                        <Divider />
                        <form>
                            <div className="newBill_Head">
                                <div className="newBill_Date_Pat">
                                    <TextData
                                        className='bill_Date'
                                        id="date"
                                        label="Data"
                                        type="date"
                                        defaultValue=""
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                    <Button className='bill_SelectPat' variant="outlined">find Patient</Button>
                                </div>
                                <div className="newBill_InputPat"><label>Patient</label><span></span><input className="patient_input" disabled></input></div>
                            </div>
                            <Divider />
                            <div className="newBill_Drawer">
                                <List className="bill_Drawer">
                                    <ListItem button key="Medical"><AddIcon></AddIcon>Medical</ListItem>
                                    <ListItem button key="Operation"><AddIcon></AddIcon>Operation</ListItem>
                                    <ListItem button key="Exam"><AddIcon></AddIcon>Exam</ListItem>
                                    <ListItem button key="Other"><AddIcon></AddIcon>Other</ListItem>
                                    <ListItem button key="Other"><AddIcon></AddIcon>Custom</ListItem>
                                    <ListItem button key="Other"><SaveIcon></SaveIcon>SAVE</ListItem>
                                </List>
                            </div>
                            <div className="newBill_Rows">
                                <TableContainer component={Paper}>
                                    <Table size="small" aria-label="a dense table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Description</TableCell>
                                                <TableCell>Qty</TableCell>
                                                <TableCell>Amount</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {med?.map((m, i) => (
                                                <TableRow>
                                                    <TableCell>{i}</TableCell>
                                                    <TableCell>{m.description}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}


const mapStateToProps = (state: IState): IStateProps => ({
    userCredentials: state.main.authentication.data,
    isLoading: state.bills.createBill.status === "LOADING",
    hasSucceeded: state.bills.createBill.status === "SUCCESS",
    hasFailed: state.bills.createBill.status === "FAIL",
    med: state.medicals.medicalsOrderByName.data,
    getMedStat: state.medicals.medicalsOrderByName.status || "IDLE"
});




const mapDispatchToProps: IDispatchProps = {
    createBill,
    createBillReset,
    getMedicals,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewBillActivity);
