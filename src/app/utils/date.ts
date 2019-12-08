const MONTH_MAP: { [monthKey: string]: string } = {
    '01': 'January',
    '02': 'Feburary',
    '03': 'March',
    '04': 'April',
    '05': 'May',
    '06': 'June',
    '07': 'July',
    '08': 'August',
    '09': 'September',
    '10': 'October',
    '11': 'November',
    '12': 'December',
};

export const formatDate = (date: string) => {
    const [year, month, day] = date.split('-');
    return `${MONTH_MAP[month]} ${day} ${year}`;
};