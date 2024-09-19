def q2_contar_frequencia_palavra(text):
    """Realiza uma contagem de quantas vezes uma determinada palavra ocorre
    Ao final, preferencialmente, ordenar o dicionário pelo volume de ocorrência

    Saída esperada: {'hello': 2, 'world': 1}
    """

    dict = {}
    text = text.lower()
    text = text.split()
    for word in text:
        if word in dict:
            dict[word] += 1
        else:
            dict[word] = 1
        
    return dict

print(q2_contar_frequencia_palavra("Hello world hello"))