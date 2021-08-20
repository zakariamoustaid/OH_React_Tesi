import React, { ChangeEvent, FunctionComponent, useEffect, useRef, useState } from "react";
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
import { connect } from "react-redux";
import { IState } from "../../../types";
import "./styles.scss";
import Dialog from '@material-ui/core/Dialog';
import { DataGrid, GridSelectionModel, GridColDef, GridRowId } from '@material-ui/data-grid';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from '@material-ui/icons/Add';
import SaveIcon from '@material-ui/icons/Save';
import TextField from '@material-ui/core/TextField';
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
    type Custom = {
        id: number,
        description: string,
        amount: string,
    }

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
        setOpen_oth(true);
    };

    const handleClose_oth = () => {
        setOpen_oth(false);
    };

    const [open_cust, setOpen_cust] = React.useState(false);

    const handleClickOpen_cust = () => {
        setOpen_cust(true);
    };

    const handleClose_cust = () => {
        setOpen_cust(false);
    };
    //
    //

    //
    //test useState
    //
    const [selectionModel, setSelectionModel] = React.useState<GridSelectionModel>([]);
    let item: Array<{}> = [];
    const [items, setItems] = React.useState<GridSelectionModel>([]);
    const [medicals, setMedicals] = React.useState<GridSelectionModel>([]);
    const [operations, setOperations] = React.useState<GridSelectionModel>([]);
    const [exams, setExams] = React.useState<GridSelectionModel>([]);
    const [others, setOthers] = React.useState<GridSelectionModel>([]);
    const [custom, setCustom] = React.useState<Custom>();
    const get_items_m = () => {
        medicals?.forEach(function (i, j) {
            if (!(items.includes(i)))
                setItems(prevItems => [...prevItems, i]);
        })
    }
    const get_items_o = () => {
        operations?.forEach(function (i, j) {
            if (!(items.includes(i)))
                setItems(prevItems => [...prevItems, i]);
        })
    }
    const get_items_e = () => {
        exams?.forEach(function (i, j) {
            if (!(items.includes(i)))
                setItems(prevItems => [...prevItems, i]);
        })
    }
    const get_items_ot = () => {
        others?.forEach(function (i, j) {
            if (!(items.includes(i)))
                setItems(prevItems => [...prevItems, i]);
        })
    }

    const get_items_cust = () => {
        const i: GridRowId = 2;
        setItems(prevItems => [...prevItems, i]);
    }

    const delete_item = (e: GridRowId) => {
        console.log(e);
        setItems(items.filter(item => e !== item));
    }



    const get_input = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const a = e.target.id as string;
        console.log(a);

        //setCustom({id:1, description:'ciao'});
    }

    const get_cust = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const desc = (e.currentTarget.elements[0] as HTMLInputElement).value as string;
        const amo = (e.currentTarget.elements[1] as HTMLInputElement).value as string;
        setCustom({ id: 1, description: desc, amount: amo });
        console.log(custom);

    }

    const test = (e: React.MouseEvent<HTMLTableRowElement, MouseEvent>) => {
        e.preventDefault();
        console.log(e.currentTarget.cells[0]);
    }
    //
    //


    //  //  //  //  //  //
    // Gestione Grid MED//
    //  //  //  //  //  //
    const columns_med = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'group',
            headerName: 'Group',
            width: 125,
            editable: true,
        },
        {
            field: 'description',
            headerName: 'Description',
            width: 170,
            editable: true,
        },
    ];

    type row = [{
        id: number | undefined,
        group: string,
        description: string | undefined
    }];

    let rows_med: row = [{ id: 0, group: '', description: '' }];

    prices?.forEach(function (m, i) {
        if (m.group === "MED")
            rows_med.push({ id: m.id, group: m.group, description: m.list?.description })
    })
    rows_med?.shift();
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
            width: 125,
            editable: true,
        },
        {
            field: 'description',
            headerName: 'Description',
            width: 170,
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
            width: 125,
            editable: true,
        },
        {
            field: 'description',
            headerName: 'Description',
            width: 170,
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
            width: 125,
            editable: true,
        },
        {
            field: 'description',
            headerName: 'Description',
            width: 170,
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
                                <div className="newBill_InputPat"><label>Patient</label><span></span><input className="patient_input" value="Mario Rossi" disabled></input></div>
                            </div>
                            <Divider />
                            <div className="newBill_Drawer">
                                <List className="bill_Drawer">
                                    <div>
                                        <ListItem button key="Medical" onClick={handleClickOpen_med}><AddIcon></AddIcon>Medical</ListItem>
                                        <Dialog open={open_med} onClose={handleClose_med} aria-labelledby="form-dialog-title">
                                            <DialogTitle id="form-dialog-title">Select Medical</DialogTitle>
                                            <Button onClick={get_items_m}>Confirm</Button>
                                            <DialogContent>
                                                <div style={{ height: 400, width: 450 }}>
                                                    <table>
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">Type</th>
                                                                <th scope="col">Description</th>
                                                            </tr>
                                                            <tbody>
                                                                {rows_med?.map((r, i) => {
                                                                    return (
                                                                        <tr onClick={e => test(e)}>
                                                                            <td title="type">{i + 1}</td>
                                                                            <td title="type">{r.group}</td>
                                                                            <td title="description">{r.description}</td>
                                                                        </tr>
                                                                    )
                                                                })}
                                                            </tbody>
                                                        </thead>
                                                    </table>
                                                </div>
                                            </DialogContent>
                                        </Dialog>
                                    </div>
                                    <div>
                                        <ListItem button key="Medical" onClick={handleClickOpen_ope}><AddIcon></AddIcon>Operation</ListItem>
                                        <Dialog open={open_ope} onClose={handleClose_ope} aria-labelledby="form-dialog-title">
                                            <DialogTitle id="form-dialog-title">Select Operation</DialogTitle>
                                            <Button onClick={get_items_o}>Confirm</Button>
                                            <DialogContent>
                                                <div style={{ height: 400, width: 450 }}>
                                                    <DataGrid
                                                        rows={rows_ope}
                                                        columns={columns_ope}
                                                        checkboxSelection
                                                        disableSelectionOnClick
                                                        onSelectionModelChange={e => setOperations(e)}
                                                    />
                                                </div>
                                            </DialogContent>
                                        </Dialog>
                                    </div>
                                    <div>
                                        <ListItem button key="Exam" onClick={handleClickOpen_exa}><AddIcon></AddIcon>Exam</ListItem>
                                        <Dialog open={open_exa} onClose={handleClose_exa} aria-labelledby="form-dialog-title">
                                            <DialogTitle id="form-dialog-title">Select Exam</DialogTitle>
                                            <form>
                                                <Button type="submit">Confirm</Button>
                                                <DialogContent>
                                                    <div style={{ height: 400, width: 450 }}>
                                                        <DataGrid
                                                            rows={rows_exa}
                                                            columns={columns_exa}
                                                            checkboxSelection
                                                            disableSelectionOnClick
                                                            onSelectionModelChange={e => setExams(e)}
                                                        />
                                                    </div>
                                                </DialogContent>
                                            </form>
                                        </Dialog>
                                    </div>
                                    <div>
                                        <ListItem button key="Other" onClick={handleClickOpen_oth}><AddIcon></AddIcon>Other</ListItem>
                                        <Dialog open={open_oth} onClose={handleClose_oth} aria-labelledby="form-dialog-title">
                                            <DialogTitle id="form-dialog-title">Select Other</DialogTitle>
                                            <Button onClick={get_items_ot}>Confirm</Button>
                                            <DialogContent>
                                                <div style={{ height: 400, width: 450 }}>
                                                    <DataGrid
                                                        rows={rows_oth}
                                                        columns={columns_oth}
                                                        checkboxSelection
                                                        disableSelectionOnClick
                                                        onSelectionModelChange={e => setOthers(e)}
                                                    />
                                                </div>
                                            </DialogContent>
                                        </Dialog>
                                    </div>
                                    <ListItem button key="Custom" onClick={handleClickOpen_cust}><AddIcon></AddIcon>Custom</ListItem>
                                    <Dialog open={open_cust} onClose={handleClose_cust} aria-labelledby="form-dialog-title">
                                        <DialogTitle id="form-dialog-title">Add custom Item</DialogTitle>
                                        <DialogContent>
                                            <form onSubmit={e => get_cust(e)}>
                                                <TextField required id="description" label="Description" />
                                                <TextField required id="amount" label="Amount" />
                                                <Button type="submit">Confirm</Button>
                                            </form>
                                        </DialogContent>
                                    </Dialog>
                                    <ListItem button key="Other"><SaveIcon></SaveIcon>SAVE</ListItem>
                                </List>
                            </div>
                            <div className="newBill_Rows">
                                <TableContainer component={Paper}>
                                    <Table size="small" aria-label="a dense table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Description</TableCell>
                                                <TableCell>Amount</TableCell>
                                                <TableCell>Qty</TableCell>
                                                <TableCell>Delete</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {items?.map((x, y) => {
                                                return (
                                                    <TableRow>
                                                        <TableCell>{x ? custom?.description : prices?.find(p => p.id == x)?.list?.description === ""}</TableCell>
                                                        <TableCell>{x ? custom?.amount : prices?.find(p => p.id == x)?.price}</TableCell>
                                                        <TableCell><select><option value="1"></option><option value="2"></option></select></TableCell>
                                                        <TableCell>
                                                            <Button onClick={() => delete_item(x)}>X</Button>
                                                        </TableCell>
                                                    </TableRow>
                                                )
                                            })}
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
