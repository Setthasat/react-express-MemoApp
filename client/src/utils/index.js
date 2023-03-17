import moment from 'moment';

export function GetDate() {
    let nowDate = moment().format("DD-MM-YYYY");
    return nowDate;
};