import { format, parse } from 'date-fns';

export function getUserFriendlyDate(date: string) {
  if (date) {
    date = date?.toString().substring(0, 10);
    return format(parse(date, 'yyyy-MM-dd', new Date()), 'MMM dd, yyyy');
  } else {
    return '';
  }
}

export function getUserFriendlyDateTime(date: string) {
  if (date) {
    return format(
      Date.parse(date || new Date().toDateString()),
      'MMM dd, yyyy @ hh:mm a'
    );
  } else {
    return '';
  }
}

export function getUserFriendlyTime(date: string) {
  if (date) {
    return format(Date.parse(date || new Date().toDateString()), 'hh:mm a');
  } else {
    return '';
  }
}

export function getGenericDateFromDate(date: number | Date) {
  return format(date, 'dd/MM/yyyy');
}

export function getSQLDateFromDate(date: number | Date) {
  return format(date, 'yyyy-MM-dd');
}

export function getSQLDate() {
  return format(new Date(), 'yyyy-MM-dd');
}

export function getDateFromSQLDate(
  date: string,
  trim = false,
  isDateTime = true
) {
  let genDate = new Date();
  let format = isDateTime ? 'yyyy-MM-dd hh:mm:ss' : 'yyyy-MM-dd';
  if (date) {
    if (trim) date = date?.toString().substring(0, 10);

    if (date.length > 9) {
      genDate = parse(date, format, new Date());
    }
  }
  return genDate;
}

export function getGenericDate() {
  return format(new Date(), 'dd/MM/yyyy');
}

export function cleanNumber(number = '') {
  let n = number ? number.replace(',', '') : '';
  n = n.replace(',', '');
  n = n.replace(',', '');
  n = n.replace(',', '');
  return n;
}

const Utilities = {
  getUserFriendlyDate,
  getUserFriendlyDateTime,
  getGenericDate,
  getUserFriendlyTime,
  getGenericDateFromDate,
  getDateFromSQLDate,
  getSQLDateFromDate,
  getSQLDate,
  cleanNumber
};
export default Utilities;
