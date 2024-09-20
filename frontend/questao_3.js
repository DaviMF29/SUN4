function q3TratarDatas(dates) {
    // Mapeamentos dos meses
    const months = {
        'janeiro': '01',
        'fevereiro': '02',
        'março': '03',
        'abril': '04',
        'maio': '05',
        'junho': '06',
        'julho': '07',
        'agosto': '08',
        'setembro': '09',
        'outubro': '10',
        'novembro': '11',
        'dezembro': '12'
    };

    const monthsAcronym = {
        'jan': '01',
        'fev': '02',
        'mar': '03',
        'abr': '04',
        'mai': '05',
        'jun': '06',
        'jul': '07',
        'ago': '08',
        'set': '09',
        'out': '10',
        'nov': '11',
        'dez': '12'
    };

    return dates.map(date => {
        for (const [month, number] of Object.entries(months)) {
            if (date.includes(month)) {
                date = date.replace(month, number);
            }
        }

        for (const [acronym, number] of Object.entries(monthsAcronym)) {
            if (date.includes(acronym)) {
                date = date.replace(acronym, number);
            }
        }

        date = date.replace(/ de /g, ' ').trim();
        date = date.replace(/ /g, '/');
        date = date.replace(/\//g, '-');
        date = date.replace(/ /g, '-');

        const [day, month, year] = date.split('-');
        return `${year}-${month}-${day}`;
    });
}

const DATAS_PARA_TRATAR = [
    '30/11/2022',
    '01 dez 2022',
    '25/12/2022',
    '31 de dezembro de 2022'
];

console.log(q3TratarDatas(DATAS_PARA_TRATAR));
