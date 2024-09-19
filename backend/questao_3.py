def q3_tratar_datas(data):
    """Tratar e converter datas para o formato americano AAAA-MM-DD.
    
    Saída esperada: 2022-11-30"""

    months ={
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
    }

    monthsAcronym = {
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
    }
    
    for i in range(len(data)):

        for month, number in months.items():             #estou usando a chave como "month" e o valor como "number"
            if month in data[i]:
                data[i] = data[i].replace(month, number)

        for acronym, number in monthsAcronym.items():
            if acronym in data[i]:
                data[i] = data[i].replace(acronym, number)

        data[i] = data[i].replace(" de ", " ")
        data[i] = data[i].replace(" ", "/")
        data[i] = data[i].replace("/", "-")
        data[i] = data[i].replace(" ", "-")
    
        #adicionar a inversão de dia e ano

    return data
            

DATAS_PARA_TRATAR = [
    '30/11/2022',
    '01 dez 2022', 
    '25/12/2022', 
    '31 de dezembro de 2022'
]

print(q3_tratar_datas(DATAS_PARA_TRATAR))