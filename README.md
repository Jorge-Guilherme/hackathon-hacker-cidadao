# 🚀 Hackathon - Hacker Cidadão 12.0 
![Imagem Hacker Cidadão 12.0](assets/Hackercidadaologo.png)

# Desafio

O  [Hub de Dados Aberto da Prefeitura do Recife](https://hubdedados.recife.pe.gov.br/)  é uma iniciativa que transforma dados públicos em ferramentas de empoderamento do cidadão, promovendo transparência e políticas públicas baseadas em evidências. Para expandir o acesso, é essencial melhorar a participação popular e o entendimento desses dados pela população, além de engajar os cidadãos para contribuir com soluções para problemas urbanos.

O **Hacker Cidadão 12.0** busca soluções inovadoras para melhorar a experiência do usuário, tornando os dados mais acessíveis e interativos. As tecnologias sugeridas incluem inteligência artificial, painéis dinâmicos, storytelling e chatbots, entre outras.

### Metas
- Desenvolver soluções que facilitem o acesso e entendimento dos dados.
- Criar ferramentas interativas, como dashboards e visualizações dinâmicas.
- Integrar inteligência artificial para auxiliar na interpretação e uso dos dados.
- Promover o engajamento do cidadão com experiências intuitivas.
- Enriquecer o Portal do Hub de Dados com funcionalidades mais acessíveis e úteis.
- Permitir o cruzamento de dados de forma amigável para o usuário comum.

### Indicadores de Sucesso
- Aumento de acessos e interações no Portal do Hub de Dados.
- Melhora na satisfação do usuário (pesquisas ou feedbacks).
- Crescimento no número de visualizações e downloads de dados.
- Implementação de soluções com IA ou ferramentas interativas.
- Engajamento da comunidade em eventos e desafios de dados abertos.

# 🤖 DigAI - Chatbot 

Para atender às necessidades do desafio, propomos o desenvolvimento de um Chatbot que permite aos cidadãos acessarem o [Hub de Dados Aberto da Prefeitura do Recife](https://hubdedados.recife.pe.gov.br/) de forma intuitiva e acessível.

### Funcionalidades principais:
- **Navegação por áreas de interesse**: O usuário poderá selecionar diferentes áreas de interesse (como saúde, educação, segurança, etc.) diretamente no aplicativo, iniciando uma conversa com o chatbot.
- **Interação em linguagem natural**: O chatbot será alimentado com a IA do **Gemini**, que permitirá que os cidadãos façam perguntas em linguagem natural. Ele será capaz de entender e interpretar essas perguntas e fornecer respostas precisas com base nos dados abertos.
- **Respostas baseadas em dados**: Ao fazer uma pergunta, o chatbot consultará o banco de dados aberto da Prefeitura do Recife e retornará uma resposta informada e contextualizada, ajudando o usuário a compreender os dados de forma clara e objetiva.
- **Facilidade de atualização e expansão**: O sistema será projetado de forma modular, permitindo fácil atualização e expansão das áreas de dados à medida que novas informações se tornem disponíveis.
- **Sistema Escalonável**: O DigAI é projetado para ser um produto flexível e expansível, permitindo a adição de diversas funcionalidades conforme a necessidade. Por exemplo:
  - **Integração com Google Maps**: O chatbot pode incorporar mapas interativos, permitindo que os usuários compartilhem ou recebam localizações diretamente no chat, facilitando a visualização de dados geográficos.
  - **Incorporação de Áudio**: A funcionalidade de envio e recepção de mensagens de áudio pode ser implementada para tornar a interação mais acessível e melhorar a experiência do usuário, especialmente para pessoas com deficiência ou para quem prefere comunicação verbal.
  - **Exportação de Dados**: O chatbot pode permitir que os usuários baixem conjuntos de dados relevantes em formatos populares como CSV ou Excel, oferecendo maior praticidade e a possibilidade de análises externas.
  - **Adição de Novas Áreas de Dados**: O sistema pode ser facilmente ampliado para integrar novas fontes de dados ou áreas de interesse, garantindo que a plataforma continue relevante à medida que as necessidades da comunidade evoluem.

### Como o chatbot facilita o acesso e a compreensão dos dados:
- **Acesso simplificado**: Ao invés de navegar por um portal complexo de dados, o chatbot proporciona uma forma simples e direta de interagir com os dados, sem que o cidadão precise entender conceitos técnicos ou fazer consultas complexas.
- **Engajamento ativo**: Através da interação com o chatbot, o usuário pode se engajar ativamente no processo de consulta de dados, tornando-o um participante mais ativo.
- **Respostas contextualizadas**: O chatbot não apenas fornece dados crus, mas também explica o que eles significam, oferecendo um contexto mais profundo sobre os números e informações disponíveis.
- **Integração com IA**: Com o uso de IA, o chatbot é capaz de aprender com as interações, melhorando suas respostas e tornando as futuras consultas ainda mais precisas e úteis.


### ⚙️ Tecnologias Usadas

- **FastAPI**: Framework para o backend, garantindo um serviço rápido e escalável. Ele permite a criação de APIs RESTful de maneira eficiente e com baixo tempo de resposta, sendo uma escolha ideal para aplicações de alta performance.
  
- **React Native**: Para o desenvolvimento do aplicativo móvel, proporcionando uma experiência fluida e nativa para os usuários, com a possibilidade de criar aplicações para iOS e Android.


## 🛠️ Como Instalar

Siga os passos abaixo para instalar e rodar o projeto:

### 1. **Clonar o repositório ou baixar diretamente no github o arquivo ZIP**
Clone o repositório do projeto no seu computador:

```bash
git clone https://github.com/Jorge-Guilerme/hackathon_hacker_cidadao.git
```

### 2. Crie e ative um ambiente virtual (opcional, mas recomendado):

```bash
python3 -m venv venv
source venv/bin/activate  # Para Linux/macOS
venv\Scripts\activate     # Para Windows
```

### 3. Instale as dependências do projeto:
```bash
pip install -r requirements.txt
```

## 📱 Instalando o Expo Go:

### 1. **Instalar o Expo Go no seu dispositivo**

- **Android**: Vá até a [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent) e pesquise por **Expo Go**. Clique em **Instalar**.
  
- **iOS**: Vá até a [App Store](https://apps.apple.com/us/app/expo-go/id982107779) e pesquise por **Expo Go**. Clique em **Instalar**.

### 2. Biblioteca:
No terminal, execute:
```bash
npm install -g expo-cli
```

### 2. **Iniciar o Expo Go**

Após instalar o Expo Go no seu dispositivo, abra o aplicativo. Você verá a opção de escanear o QR code que será gerado pelo Expo ao rodar seu projeto.


## Como Rodar o Projeto:

### Observação:
## IP:
Antes de rodar o projeto, certifique-se de configurar o ip presente no arquivo ChatScreen.js no front-end e main.py na pasta server.

Para verificar seu IP, digite no terminal:
```bash
ipconfig
```

Irá aparecer no terminal o IP em Endereço IPv4.

Copie e subtitua o IP nos arquivos mencionados acima (ChatScreen.js e main.py)

## Chave da API Gemini:
Ao acessar https://aistudio.google.com/apikey, será possível gerar a chave API Gemini.
Copie a chave API e substitua em:
- Na pasta data/scritps, o arquivo IA irá conter um campo para você colocar entre aspas as sua chave API.
  
### Backend (FastAPI):
Navegue para a pasta server: 
```bash
cd server
```
Inicializar a aplicação:
```bash
uvicorn main:app --reload --host 0.0.0.0 --port 8080
```

### Frontend (React Native):
Em um **novo terminal** navegue para a pasta front-end: 
```bash
cd front-end
```
Inicializar a aplicação:
```bash
npx expo start
```

# 🎨 Telas da Aplicação

## Tela de Início

A **Tela de Início** é a primeira interface que o usuário verá ao abrir o aplicativo. Nela, o usuário encontrará o nome do aplicativo e uma saudação de bem-vindo.
![tela_inciail](assets/tela_inicial.jpg)

## OnBoarding
Ao passar pela tele inicial, o usuário irá passar por 3 telas (mobilidade, educação e saúde) explicando sobre o intuito do aplicativo.
![tela_inciail](assets/onboardingtelas.png)

## Seleção da área
Antes de iniciar o chat, o usuário poderá selecionar a área que deseja iniciar um chat com a IA para buscar os dados.
![tela_inciail](assets/tela_selecao.jpg)
## Tela de Chatbot
A última tela, é o chat no qual o usuário irá poder perguntar sobre os dados que deseja buscar, facilitando a acessibilidade e sua usabilidade.
![tela_inciail](assets/tela_chat.jpg)


### Equipe- Bacanas 😎
Jorge Guilherme, Renata Mickaelly, Kleberson Araújo, Vinícius França e Hugo Coelho 


