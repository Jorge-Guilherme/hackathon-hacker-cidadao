import os
import pandas as pd

K_PARAMETER = 2  # Parâmetro para definir a relevância mínima

def check_dataset(key_words: list) -> list:
    """
    Verifica os arquivos CSV no diretório './data/' e retorna uma lista de arquivos que contêm as palavras-chave.
    
    :param key_words: Lista de palavras-chave para filtrar os arquivos.
    :return: Lista de nomes de arquivos CSV que correspondem às palavras-chave.
    """
    # Caminho absoluto para o diretório 'data'
    base_dir = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
    data_dir = os.path.join(base_dir, 'data')

    if not os.path.exists(data_dir):
        raise FileNotFoundError(f"O diretório '{data_dir}' não foi encontrado.")

    datasets = []  # Lista de arquivos CSV

    # Itera sobre os arquivos no diretório
    for file_name in os.listdir(data_dir):
        full_path = os.path.join(data_dir, file_name)

        # Verifica se é um arquivo CSV
        if os.path.isfile(full_path) and file_name.endswith(".csv"):
            # Verifica se o arquivo contém alguma das palavras-chave no nome
            for keyword in key_words:
                if keyword.lower() in file_name.lower():
                    datasets.append(file_name)
                    break  # Adiciona o arquivo uma vez e passa para o próximo

    return datasets

def dict_returnal(datasets: list, keywords: list) -> list:
    """
    Processa os arquivos CSV e retorna informações relevantes com base nas palavras-chave.
    
    :param datasets: Lista de nomes de arquivos CSV.
    :param keywords: Lista de palavras-chave para filtrar os dados.
    :return: Lista de dicionários com informações relevantes.
    """
    informations_returnal = []  # Armazena as informações relevantes

    # Caminho absoluto para o diretório 'data'
    base_dir = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
    data_dir = os.path.join(base_dir, 'data')

    for dataset in datasets:
        full_path = os.path.join(data_dir, dataset)

        try:
            # Lê o arquivo CSV
            df = pd.read_csv(full_path, encoding='latin1')  # Usando UTF-8 como codificação padrão
            datas = df.to_dict(orient='records')

            for data in datas:
                score = 0  # Pontuação para validação

                # Verifica se as palavras-chave estão presentes nos dados
                for keyword in keywords:
                    for context, value in data.items():
                        if keyword.lower() in str(value).lower():
                            score += 1
                        elif keyword.lower() in context.lower():
                            score += 1

                # Adiciona os dados relevantes à lista
                if score >= K_PARAMETER:
                    informations_returnal.append(data)

        except Exception as e:
            print(f"Erro ao processar o arquivo {dataset}: {e}")

    return informations_returnal

# Teste de funcionamento
if __name__ == "__main__":
    keywords = ['conecta', 'wifi', 'ACAD', 'UR5', 'localizacao', 'onde', 'fica', 'lugar', 'endereço', 'ponto', 'coordenadas', 'mapa', 'rede', 'wireless', 'internet', 'acesso', 'conexão', 'signal', 'antena', 'dispositivo']
    
    # Verifica os datasets
    datasets = check_dataset(keywords)
    print("Arquivos encontrados:", datasets)
    
    # Processa os datasets e retorna informações relevantes
    relevant_data = dict_returnal(datasets, keywords)
    print("Informações relevantes:", relevant_data)
