import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import AppHeader from "../../accessories/appHeader/AppHeader";
import Footer from "../../accessories/footer/Footer";
import Button from "@material-ui/core/Button";
import Table from '@material-ui/core/Table';
import TextData from '@material-ui/core/TextField'
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import { useTranslation } from "react-i18next";
import { connect, useDispatch } from "react-redux";
import { IState } from "../../../types";
import "./styles.scss";
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import { DataGrid, GridColDef, GridValueGetterParams, GridSelectionModel, GridRowId } from '@material-ui/data-grid';
import { useDemoData } from '@material-ui/x-grid-data-generator';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from '@material-ui/icons/Add';
import SaveIcon from '@material-ui/icons/Save';
import {
    createBill,
    createBillReset,
    getBill,
} from "../../../state/bills/actions";
import {
    getPrices,
    getPriceLists
} from "../../../state/prices/actions"
import {
    getMedicals,
} from "../../../state/medicals/actions"
import {
    IDispatchProps,
    IStateProps,
    TProps,
} from "./types";


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
    bill,
    getBill,
    prices,
    getPrices,
    priceLists,
    getPriceLists
}) => {
    const { t } = useTranslation();

    const breadcrumbMap = {
        [t("nav.dashboard")]: "/",
        [t("nav.billing")]: "/billing",
        [t("nav.newbill")]: "/bills",
    };
    useEffect(() => {
        getMedicals();
    }, []);

    useEffect(() => {
        getPrices();
    }, [])
    //
    //Gestione Dialog
    //
    const [open_med, setOpen_med] = React.useState(false);

    const handleClickOpen_med = () => {
        setOpen_med(true);
    };

    const handleClose_med = () => {
        setOpen_med(false);
    };

    const [open_ope, setOpen_ope] = React.useState(false);

    const handleClickOpen_ope = () => {
        setOpen_ope(true);
    };

    const handleClose_ope = () => {
        setOpen_ope(false);
    };

    const [open_exa, setOpen_exa] = React.useState(false);

    const handleClickOpen_exa = () => {
        setOpen_exa(true);
    };

    const handleClose_exa = () => {
        setOpen_exa(false);
    };

    const [open_oth, setOpen_oth] = React.useState(false);

    const handleClickOpen_oth = () => {
        setOpen_exa(true);
    };

    const handleClose_oth = () => {
        setOpen_exa(false);
    };
    //
    //

    //
    //test useState
    //

    const [medicals, setmedicals] = React.useState<GridSelectionModel>([]);
    let item: GridRowId = '';

    const add_med = () => {
        medicals?.forEach(function (m, i) {
            item = m;
        })
    }
    const get_i = () => {
        return (
            <p>{item}</p>
        )
    }
    //
    //


    //  //  //  //  //  //
    // Gestione Grid MED//
    //  //  //  //  //  //
    const columns_med: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'group',
            headerName: 'Group',
            width: 250,
            editable: true,
        },
        {
            field: 'description',
            headerName: 'Description',
            width: 250,
            editable: true,
        },
    ];

    const rows_med = [{}];

    prices?.forEach(function (m, i) {
        if (m.group === "MED")
            rows_med.push({ id: m.id, group: m.group, description: m.list?.description })
    })
    rows_med.shift();
    //
    //

    //  //  //  //  //  //
    // Gestione Grid OPE//
    //  //  //  //  //  //
    const columns_ope: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'group',
            headerName: 'Group',
            width: 250,
            editable: true,
        },
        {
            field: 'description',
            headerName: 'Description',
            width: 250,
            editable: true,
        },
    ];

    const rows_ope = [{}];

    prices?.forEach(function (m, i) {
        if (m.group === "OPE")
            rows_ope.push({ id: m.id, group: m.group, description: m.list?.description })
    })
    rows_ope.shift();
    //
    //

    //  //  //  //  //  //
    // Gestione Grid EXA//
    //  //  //  //  //  //
    const columns_exa: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'group',
            headerName: 'Group',
            width: 250,
            editable: true,
        },
        {
            field: 'description',
            headerName: 'Description',
            width: 250,
            editable: true,
        },
    ];

    const rows_exa = [{}];

    prices?.forEach(function (m, i) {
        if (m.group === "EXA")
            rows_exa.push({ id: m.id, group: m.group, description: m.list?.description })
    })
    rows_exa.shift();
    //
    //

    //  //  //  //  //  //
    // Gestione Grid OTH//
    //  //  //  //  //  //
    const columns_oth: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'group',
            headerName: 'Group',
            width: 250,
            editable: true,
        },
        {
            field: 'description',
            headerName: 'Description',
            width: 250,
            editable: true,
        },
    ];

    const rows_oth = [{}];

    prices?.forEach(function (m, i) {
        if (m.group === "OTH")
            rows_oth.push({ id: m.id, group: m.group, description: m.list?.description })
    })
    rows_oth.shift();
    //
    //



    //fetch('https://www.open-hospital.org/oh11-api/pricelists/prices').then(res => res.json()).then(data => console.log(data)).catch(error => console.log('male'));


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
                                    <div>
                                        <ListItem button key="Medical" onClick={handleClickOpen_med}><AddIcon></AddIcon>Medical</ListItem>
                                        <Dialog open={open_med} onClose={handleClose_med} aria-labelledby="form-dialog-title">
                                            <DialogTitle id="form-dialog-title">Select Medical</DialogTitle>
                                            <Button>Confirm</Button>
                                            <DialogContent>
                                                <div style={{ height: 700, width: 1000 }}>
                                                    <DataGrid
                                                        rows={rows_med}
                                                        columns={columns_med}
                                                        checkboxSelection
                                                        disableSelectionOnClick
                                                        onSelectionModelChange={e => setmedicals(e)}
                                                    />
                                                </div>
                                            </DialogContent>
                                        </Dialog>
                                    </div>
                                    <div>
                                        <ListItem button key="Medical" onClick={handleClickOpen_ope}><AddIcon></AddIcon>Operation</ListItem>
                                        <Dialog open={open_ope} onClose={handleClose_ope} aria-labelledby="form-dialog-title">
                                            <DialogTitle id="form-dialog-title">Select Operation</DialogTitle>
                                            <Button>Confirm</Button>
                                            <DialogContent>
                                                <div style={{ height: 700, width: 600 }}>
                                                    <DataGrid
                                                        rows={rows_ope}
                                                        columns={columns_ope}
                                                        checkboxSelection
                                                        disableSelectionOnClick
                                                        onSelectionModelChange={e => setmedicals(e)}
                                                    />
                                                </div>
                                            </DialogContent>
                                        </Dialog>
                                    </div>
                                    <div>
                                        <ListItem button key="Exam" onClick={handleClickOpen_exa}><AddIcon></AddIcon>Exam</ListItem>
                                        <Dialog open={open_exa} onClose={handleClose_exa} aria-labelledby="form-dialog-title">
                                            <DialogTitle id="form-dialog-title">Select Exam</DialogTitle>
                                            <Button>Confirm</Button>
                                            <DialogContent>
                                                <div style={{ height: 700, width: 1000 }}>
                                                    <DataGrid
                                                        rows={rows_exa}
                                                        columns={columns_exa}
                                                        checkboxSelection
                                                        disableSelectionOnClick
                                                        onSelectionModelChange={e => setmedicals(e)}
                                                    />
                                                </div>
                                            </DialogContent>
                                        </Dialog>
                                    </div>
                                    <div>
                                        <ListItem button key="Other" onClick={handleClickOpen_oth}><AddIcon></AddIcon>Other</ListItem>
                                        <Dialog open={open_oth} onClose={handleClose_oth} aria-labelledby="form-dialog-title">
                                            <DialogTitle id="form-dialog-title">Select Exam</DialogTitle>
                                            <Button>Confirm</Button>
                                            <DialogContent>
                                                <div style={{ height: 700, width: 1000 }}>
                                                    <DataGrid
                                                        rows={rows_oth}
                                                        columns={columns_oth}
                                                        checkboxSelection
                                                        disableSelectionOnClick
                                                        onSelectionModelChange={e => setmedicals(e)}
                                                    />
                                                </div>
                                            </DialogContent>
                                        </Dialog>
                                    </div>
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
                                            {get_i}
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
    bill: state.bills.getBill.data,
    med: state.medicals.medicalsOrderByName.data,
    prices: state.prices.getPrices.data,
    getMedStat: state.medicals.medicalsOrderByName.status || "IDLE",
    priceLists: state.prices.getPriceLists.data
});




const mapDispatchToProps: IDispatchProps = {
    createBill,
    createBillReset,
    getMedicals,
    getBill,
    getPrices,
    getPriceLists
};

export default connect(mapStateToProps, mapDispatchToProps)(NewBillActivity);
