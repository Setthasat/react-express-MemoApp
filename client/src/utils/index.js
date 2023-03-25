import moment from 'moment';

export function GetDate() {
    let nowDate = moment().format("YYYY-MM-DD");
    return nowDate;
};