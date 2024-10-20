export default {
    insertRow(row) {
        console.log('Insert row', row);
        return Math.floor(Math.random() * Math.floor(1000));
    },
    deleteRow(rowId) {
        console.log('Delete row id', rowId);
        return;
    },
    updateRow(rowId, row) {
        console.log(`Update row ${rowId}`, row);
        return rowId;
    },
};
