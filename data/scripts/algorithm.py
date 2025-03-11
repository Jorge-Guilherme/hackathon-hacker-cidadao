# algoritmo de consulta
import os
import pandas as pd

K_PARAMETER = 2


def check_dataset(key_words: list) -> list:
    route = "./data/" # caminho da pasta
    datasets = [] # lista de arquivos

    # iterando sobre os arquivos da pasta
    for file_name in os.listdir(route):
        complet_route = os.path.join(route, file_name) # pega o caminho completo do arquivo
        
        # verificar se é um arquivo
        if os.path.isfile(complet_route) and complet_route.endswith(".csv"): # verifica se é um arquivo e se é um arquivo csv
            datasets.append(file_name) # adiciona o dataset na pasta
            # checar o arquivo a partir da palavra chave
            # for keyword in key_words:
            #     if keyword in file_name: # verifica se a palavra chave bate com algum arquivo
            #         datasets.append(file_name)
            
    return list(set(datasets))


def dict_returnal(datasets: list, keywords: list):

    informations_returnal = [] # armazena em forma de dicionário as informações úteis

    for dataset in datasets: # iterando sobre os datasets
        df = pd.read_csv(f'./data/{dataset}', encoding='latin1') # lendo o dataset
        datas = df.to_dict(orient='records')

        for data in datas: # iterando sobre os dados
            score = 0 # pontuação para validação
            for keyword in keywords: # iterando sobre as palavras chaves
                try: # caso o dado não seja conversível em string
                    for context in data:
                        # soma uma pontuação para adicionar na lista de relevância de leitura
                        if keyword in str(data[context]).lower():
                            score += 1
                        elif keyword in context.lower():
                            score += 1 
                except:
                    ...
                
            if score >= K_PARAMETER:
                informations_returnal.append(data)  
    
    return informations_returnal

#Teste de funcionamento
# keywords = ['conceta,wifi,ACAD,UR5,localizacao,onde,fica,lugar,endereço,ponto,coordenadas,mapa,rede,wireless,internet,acesso,conexão,signal,antena,dispositivo\n']
# retorno = check_dataset(keywords)
# print(retorno)
# print(dict_returnal(retorno, keywords))
