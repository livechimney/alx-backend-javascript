import { RowID, RowElement } from "./interface";
import CRUD from "./crud";

const row: RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva',
}

const newRowId: RowID = CRUD.insertRow(row);
row.age = 23;
const updateRow: RowElement = row;

CRUD.updateRow(newRowId, updateRow);

CRUD.deleteRow(newRowId);
