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
import "./styles.scss";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import {
    newBill,
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
    Item,
} from "./types";
import DrawerActivity from "./DrawerActivity";
import { BillDTO, BillItemsDTO, FullBillDTO, PatientDTO } from "../../../generated";


const NewBillActivity: FunctionComponent<TProps> = ({
    userCredentials,
    billHomeRoute,
    med,
    getMedicals,
    getMedStat,
    bill,
    newBill,
    prices,
    getPrices,
    priceLists,
    getPriceLists,
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
    }, []);


    //
    //get patient
    //
    const [patient, setPatient] = useState<PatientDTO>();

    useEffect(() => {
        const url = "https://www.open-hospital.org/oh11-api/patients?page=1&size=1";
        const auth = "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJhZG1pbiIsImV4cCI6MTYyOTgxNjE2Mn0.uouPZE9Vrc8dYUA78RsVFQ0aui9zjcwokXndi3C6o1wC3xoEvyG68THiFyZ-wH7Z6RAtvmJa8MmYvZR3iMIutQ";
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
    }, []);

    const patient_data = patient?.firstName + " " + patient?.secondName;



    //delete an item from bill
    const delete_item = (e: BillItemsDTO) => {
        setItems(items.filter(item => e !== item));
    }
    const [items, setItems] = React.useState<BillItemsDTO[]>([]);

    const test = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        console.log('hello patient')
    }

    //  //  //  //  //

    //  CREATE BILL //

    //  //  //  //  //
    const [createBill, setCreateBill] = React.useState<BillDTO>();
    setCreateBill({
        id: 0,
        list: true,
        listId: 0,
        patientDTO: patient,
        date: "2020-03-19T14:58:00.000Z",
        update: "2020-03-19T14:58:00.000Z",
        listName: "Basic",
        patientTrue: true,
        patName: patient?.firstName,
        status: "O",
        amount: 1000,
        balance: 1500,
        user: "admin",
    });

    const saveBill = () => {
        const fullBill : FullBillDTO = {
            billDTO: createBill,
            billItemsDTO: items,
            billPaymentsDTO: {
                id: 0,
                billId: 0,
                date: "2020-03-19T14:58:00.000Z",
                amount: 500,
                user: "admin"
              }
        }
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
                                        <TextData
                                            className='bill_Date'
                                            id="date"
                                            label="SELECT DATE"
                                            type="date"
                                            defaultValue=""
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                        <Button type="submit" className='bill_SelectPat' onClick={e => test(e)} variant="outlined">find Patient</Button>
                                    </div>
                                    <div className="newBill_InputPat">
                                        <label>Patient</label><span></span><input className="patient_input" value={patient_data} disabled ></input>
                                        <Button className="buttonBillSubmit" onClick={saveBill}>SAVE</Button>
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
    bill: state.bills.getBill.data,
    med: state.medicals.medicalsOrderByName.data,
    prices: state.prices.getPrices.data,
    getMedStat: state.medicals.medicalsOrderByName.status || "IDLE",
    priceLists: state.prices.getPriceLists.data
});




const mapDispatchToProps: IDispatchProps = {
    newBill,
    getMedicals,
    getPrices,
    getPriceLists
};

export default connect(mapStateToProps, mapDispatchToProps)(NewBillActivity);
