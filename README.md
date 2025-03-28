# Projeto AQUA - Sistema de Monitoramento da Qualidade da Água (TCC)

O **Aqua Project** é um sistema de monitoramento da qualidade da água desenvolvido em **Django**, com integração ao **Firebase**. Ele recebe e processa dados de sensores em um **módulo ESP32** para exibição em um **dashboard interativo** em tempo real.

Este projeto foi desenvolvido como **Trabalho de Conclusão de Curso (TCC)** para o curso **Técnico em Desenvolvimento de Sistemas** da **ETEC de Sapopemba**, no ano de 2024.

## Tecnologias Utilizadas
- **Django** (backend e gerenciamento da aplicação)
- **Firebase** (autenticação e armazenamento)
- **WebSocket** (atualização em tempo real dos gráficos e informações)
- **Bootstrap** (estilização da interface)

## O que é Monitorado?
O sistema exibe diversas métricas relacionadas à qualidade da água, como:
- **Turbidez**: Mede a transparência da água, indicando a presença de partículas em suspensão.
- **pH**: Indica se a água está ácida, neutra ou alcalina.
- **Temperatura**: Monitora variações de temperatura da água.
- **Nível**: Indica o nível da água dentro do local monitorado.
- **Qualidade geral**: Índice baseado em múltiplos fatores que indicam se a água está dentro dos padrões aceitáveis.

Esses dados são **atualizados em tempo real** e apresentados em **gráficos dinâmicos**, permitindo um acompanhamento preciso das condições da água.

---

# Como Rodar o Projeto

### 1. Requisitos
Antes de iniciar, garanta que você tenha instalado:
- **Python 3.8+**
- **pip**
- **Virtualenv** (opcional, mas recomendado)

### 2. Clonar o Repositório
```sh
 git clone https://github.com/seu-usuario/aqua-project.git
 cd aqua-project
```

### 3. Criar e Ativar um Ambiente Virtual
```sh
 python -m venv venv
 source venv/bin/activate  # No Windows: venv\Scripts\activate
```

### 4. Instalar Dependências
```sh
 pip install -r requirements.txt
```

### 5. Configurar Firebase e Email
1. **Crie um projeto no Firebase.**
2. **Crie um App Web no Firebase.**
3. **Configure o Realtime Database e a autenticação por e-mail/senha no Firebase.**
4. **Crie um arquivo `.env` na raiz do projeto** e adicione as credenciais do Firebase e do e-mail de verificação de duas etapas:

```sh
 FIREBASE_API_KEY="sua-api-key"
 FIREBASE_AUTH_DOMAIN="seu-auth-domain"
 FIREBASE_DATABASE_URL="sua-database-url"
 FIREBASE_PROJECT_ID="seu-project-id"
 FIREBASE_STORAGE_BUCKET="seu-storage-bucket"
 FIREBASE_MESSAGING_SENDER_ID="seu-messaging-sender-id"
 FIREBASE_APP_ID="seu-app-id"

 EMAIL_HOST_USER="seu-email@gmail.com"
 EMAIL_HOST_PASSWORD="sua-senha"
 EMAIL_USE_TLS=True
 EMAIL_PORT=587
 EMAIL_HOST="smtp.gmail.com"
```

### 6. Aplicar Migrações e Criar Superusuário
```sh
 python manage.py migrate
 python manage.py createsuperuser
```

### 7. Rodar o Servidor
```sh
 python manage.py runserver
```
Acesse a aplicação em **http://127.0.0.1:8000/**

---

# Explorando o Código

### 1. Iniciando o Servidor
Após rodar o servidor com `python manage.py runserver`, acesse o site e **registre uma conta** para visualizar as funcionalidades.

### 2. Autenticação e Firebase
- O login e registro são gerenciados pelo **Firebase Authentication**.
- O registro inclui **verificação de duas etapas** por e-mail para maior segurança.

### 3. Dashboard e Monitoramento
- O **Dashboard** exibe os módulos vinculados à conta. Cada conta pode ter **mais de um módulo**.

**⚠️ Observação:**
De início, a página estará **vazia**. Para adicionar um módulo ESP32 ao Firebase, siga os passos abaixo:

1. **Vá até o Realtime Database e adicione os seguintes dados dentro de `UsersData/UID_da_conta`**:

- Chave: `modules`
- Valor:
```json
{"b61c06":{"aquariumHeight":22,"statistics":{"LEVEL":28.832,"PH":7,"TEMP":24.3125,"TURBIDITY":5,"timestamp":1011922}}}
```

2. Caso queira adicionar **mais módulos**, basta repetir o processo utilizando um **ID diferente**.

- **Ao clicar em um módulo**, você poderá renomeá-lo e será direcionado para uma nova página:

<img src="https://imgur.com/he66cCL.png" width="960" />

- Na página do módulo, as métricas (turbidez, pH, temperatura) são atualizadas **em tempo real** via **WebSocket**.
- A **qualidade geral** da água é calculada e são exibidos **alertas** caso alguma métrica esteja fora do padrão.
- A interface é estilizada com **Bootstrap**.

### 4. Relatórios
- A página de **Relatórios** foi planejada para exibir dados históricos, mas **não foi implementada**.

### 5. Conta
- Exibe as **informações da conta do usuário** e a quantidade de módulos vinculados.
- Permite adicionar uma **foto de perfil**.

---

# Estrutura do Projeto
```
/aqua-project/
|-- aquaproject/     # Configuração do Django
|-- aquasite/        # Aplicação principal
|   |-- models.py    # Modelos do banco de dados
|   |-- views.py     # Lógica das páginas
|   |-- consumers.py # WebSockets para dados em tempo real
|   |-- routing.py   # Configuração de WebSockets
|-- templates/       # Páginas HTML
|-- static/          # Arquivos estáticos (CSS, JS)
|-- migrations/      # Controle de banco de dados
|-- .env            # Variáveis de ambiente do Firebase
|-- manage.py        # Gerenciador do Django
|-- requirements.txt # Dependências
```

## Estrutura dos Diretórios
### **1. Diretório Principal (`aqua-project-main/`)**
Contém os arquivos essenciais do projeto:
- `.gitignore` – Arquivos que devem ser ignorados pelo Git.
- `manage.py` – Ferramenta de gerenciamento do Django.
- `requirements.txt` – Lista de dependências do projeto.

### **2. Configuração do Django (`aquaproject/`)**
Contém os arquivos de configuração do Django:
- `settings.py` – Configurações gerais do projeto.
- `urls.py` – Rotas do sistema.
- `asgi.py` e `wsgi.py` – Configurações para ASGI e WSGI.

### **3. Aplicação Principal (`aquasite/`)**
Aqui está o código principal da aplicação:
- `models.py` – Define os modelos do banco de dados.
- `views.py` – Controla as requisições e renderização das páginas.
- `urls.py` – Define as rotas específicas da aplicação.
- `consumers.py` – Gerencia os WebSockets para atualização em tempo real.
- `routing.py` – Configura a comunicação assíncrona via WebSockets.

### **4. Templates HTML (`aquasite/templates/aquasite/`)**
Contém as páginas do site:
- **`pages/`** – Páginas principais do sistema, como `dashboard.html`, `module.html` (monitoramento), `reports.html` (relatórios).
- **`partials/`** – Componentes reutilizáveis, como `dashboard-sidebar.html`, `home-navbar.html` e `module-card.html`.

### **5. Arquivos Estáticos (`aquasite/static/`)**
Dividido em subdiretórios:
- `admin/` – Arquivos padrão do Django Admin.
- `aquasite/` – Customizações do site:
  - `images/` – Imagens usadas no sistema.
  - `js/` – Scripts gerais, como `switch-theme.js`.
  - `module/js/` – Scripts dos gráficos e medições (`charts.js`, `turbidity.js`, etc.).
- `fontawesomefree/` – Ícones do FontAwesome.

---

# Conclusão

O **Aqua Project** foi desenvolvido com o objetivo de criar um sistema **eficiente e intuitivo** para o monitoramento da qualidade da água. Apesar das limitações, acreditamos que conseguimos atingir esse objetivo.

Se você chegou até aqui, obrigado por seu interesse! Caso queira contribuir ou aprimorar o projeto, fique à vontade para explorar e sugerir melhorias.
