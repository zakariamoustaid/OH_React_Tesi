import React, { ChangeEvent, Children, FunctionComponent, useEffect, useRef, useState } from "react";
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
import Paper from '@material-ui/core/Paper';
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import { IState } from "../../../types";
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import "./styles.scss";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import {
    getPrices,
} from "../../../state/prices/actions"
import {
    IDispatchProps,
    IStateProps,
    TProps,
} from "./types";
import DrawerActivity from "./DrawerActivity";
import { BillDTO, BillItemsDTO, FullBillDTO, PatientDTO } from "../../../generated";
import TextField from "@material-ui/core/TextField";


const NewBillActivity: FunctionComponent<TProps> = ({
    userCredentials,
    prices,
    getPrices,
}) => {

    const { t } = useTranslation();

    const breadcrumbMap = {
        [t("nav.dashboard")]: "/",
        [t("nav.billing")]: "/billing",
        [t("nav.newbill")]: "/bills",
    };

    //get prices/list
    useEffect(() => {
        getPrices();
    }, []);


    const [items, setItems] = React.useState<BillItemsDTO[]>([]);

    //  //  //  //  //
    //  GET TOKEN   //
    //  //  //  //  //
    const [token_auth, setToken] = useState('');
    useEffect(() => {
        const url = "https://www.open-hospital.org/oh11-api/auth/login?password=admin&username=admin";
        const cont_t = 'application/json'
        const acc = "*/*";

        const fetchDataTok = async () => {
            try {
                const response = await fetch(url, { method: 'POST', headers: { 'Content-Type': cont_t, 'Accept': acc} });
                const json = await response.json();
                setToken(json.token)

            } catch (error) {
                console.log("error", error);
            }
        };
        fetchDataTok();
    }, []);


    //  //  //  //  //
    //  GET PATIENT //
    //  //  //  //  //
    const [pat, setPatient] = useState<PatientDTO>();

    const getPat = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        const url = "https://www.open-hospital.org/oh11-api/patients?page=1&size=1";
        const auth = "Bearer "+token_auth;
        const acc = "application/json";

        const fetchData = async () => {
            try {
                const response = await fetch(url, { method: 'GET', headers: { Accept: acc, Authorization: auth } });
                const json = await response.json();
                setPatient(json[0])
            } catch (error) {
                console.log("error", error);
            }
        };
        fetchData();
    };
    const patient_data = pat?.firstName + " " + pat?.secondName;

    //GET DATE
    const [date, setDate] = useState('');
    const get_date = (e:React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        e.preventDefault();
        setDate(e.currentTarget.value)
    }


    const [createBill, setCreateBill] = React.useState<BillDTO>();
    

    //  //  //  //  //
    // CREATE BILL  //
    //  //  //  //  //
    const [openConferm, setOpenConferm] = useState(false);
    const handleClickOpenConferm = () => {
        setCreateBill({
            id: 0,
            list: true,
            listId: 0,
            patient: pat,
            date: date,
            update: date,
            listName: "Basic",
            patientTrue: true,
            patName: pat?.firstName + " " + pat?.secondName,
            status: "O",
            amount: 1000,
            balance: 1500,
            user: "admin",
        });
        setOpenConferm(true);
    };

    const handleCloseConferm = () => {
        setOpenConferm(false);
    };

    //  //  //  //  //
    //  DELETE ITEM //
    //  //  //  //  //
    const delete_item = (e: BillItemsDTO) => {
        setItems(items.filter(item => e !== item));
    }

    const test = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        console.log('hello patient')
    }

    //  //  //  //  //

    //  CREATE BILL //

    //  //  //  //  //

    const [fullBill, setFullBill] = React.useState<FullBillDTO>();

    const saveBill = () => {

        setFullBill({
            bill: createBill,
            billItems: items,
            billPayments: [{
                id: 0,
                billId: 0,
                date: "2020-03-19T14:58:00.000Z",
                amount: 0,
                user: "admin"
            }]
        });

        fetch('https://www.open-hospital.org/oh11-api/bills', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer '+token_auth,
            },
            body: JSON.stringify(fullBill),
        })
            .then(response => response.json())
            .then(data => {
                console.log("SUCCESS");
            })
            .catch((error) => {
                console.error('Error:', error);
            });
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
                        <div className="billPanel">
                            <form>
                                <div className="newBill_Head">
                                    <div className="newBill_Date_Pat">
                                        <TextField
                                            className='bill_Date'
                                            id="date"
                                            label="SELECT DATE"
                                            type="date"
                                            defaultValue=""
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            onChange={e => get_date(e)}
                                        />
                                        <Button type="submit" className='bill_SelectPat' onClick={e => getPat(e)} variant="outlined">find Patient</Button>
                                    </div>
                                    <div className="newBill_InputPat">
                                        <label>Patient</label><span></span><input className="patient_input" value={patient_data} disabled ></input>
                                        <Button className="buttonBillSubmit" onClick={handleClickOpenConferm}>SAVE</Button>
                                    </div>

                                </div>
                                <div className="newBill_Rows">
                                    <TableContainer className="tableDrawer" component={Paper}>
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
                                                            <TableCell>{x.hashCode}</TableCell>
                                                            <TableCell>{x.itemAmount}</TableCell>
                                                            <TableCell>{x.itemQuantity}</TableCell>
                                                            <TableCell><Button onClick={() => delete_item(x)}><HighlightOffIcon></HighlightOffIcon></Button></TableCell>
                                                        </TableRow>
                                                    )
                                                }
                                                )}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </div>
                            </form>
                        </div>
                        <div className="bill_Drawer">
                            <DrawerActivity prices={prices} items={items} setItems={setItems} />
                            <Dialog open={openConferm} onClose={handleCloseConferm} aria-labelledby="form-dialog-title">
                                <DialogTitle id="form-dialog-title">Confirm Message</DialogTitle>
                                <Button color="primary" size="large" onClick={saveBill} >Confirm</Button>
                                <Button color="secondary" size="large" onClick={handleCloseConferm} >Cancel</Button>
                                <DialogContent>
                                    <div style={{ height: 30, width: 250 }}>
                                    </div>
                                </DialogContent>
                            </Dialog>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}


const mapStateToProps = (state: IState): IStateProps => ({
    userCredentials: state.main.authentication.data,
    prices: state.prices.getPrices.data,
});


const mapDispatchToProps: IDispatchProps = {
    getPrices,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewBillActivity);
