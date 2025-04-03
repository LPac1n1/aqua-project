# Aqua Project - Sistema de Monitoramento de Qualidade da Água

O **Aqua Project** é um sistema **Full Stack** desenvolvido para monitorar a qualidade da água em tempo real. Ele utiliza **Django** no backend e **Firebase** para autenticação e armazenamento de dados. As informações são coletadas por sensores conectados a um **ESP32** e exibidas em um dashboard interativo.

<p align="center">
 <img src="https://imgur.com/he66cCL.png" width=960/>
</p>

Este projeto foi desenvolvido como **Trabalho de Conclusão de Curso (TCC)** para o curso **Técnico em Desenvolvimento de Sistemas** da **ETEC de Sapopemba**, em 2024.

---
## Tecnologias Utilizadas

### Backend
- **Django** (gerenciamento da aplicação e backend)
- **WebSocket** (atualização em tempo real dos dados)

### Frontend
- **HTML**
- **CSS**
- **JavaScript**
- **Bootstrap** (estilização da interface)

### Banco de Dados
- **Firebase** (armazenamento de dados e autenticação de usuários)

---
## Parâmetros Monitorados
O sistema exibe diversas métricas relacionadas à qualidade da água:

- **Turbidez**: Mede a transparência da água, indicando a presença de partículas em suspensão.
- **pH**: Indica se a água está ácida, neutra ou alcalina.
- **Temperatura**: Monitora variações de temperatura da água.
- **Nível**: Indica o nível da água no local monitorado.
- **Qualidade geral**: Cálculo baseado nos parâmetros acima para avaliar se a água está dentro dos padrões aceitáveis.

Os dados são atualizados **em tempo real** e apresentados em **gráficos dinâmicos** para um monitoramento preciso.

---
## Como Usar

### 1. Clonando o repositório
```bash
$ git clone https://github.com/seu-usuario/aqua-project.git
$ cd aqua-project
```

### 2. Criando e ativando um ambiente virtual
```bash
$ python -m venv venv
$ source venv/bin/activate  # No Windows: venv\Scripts\activate
```

### 3. Instalando as dependências
```bash
$ pip install -r requirements.txt
```

## Configuração do Firebase

Para configurar o Firebase:

1. Acesse o [Firebase Console](https://console.firebase.google.com/) e crie um novo projeto.
2. Adicione um **App Web** ao projeto.
3. Ative o **Realtime Database** e defina as regras de leitura e escrita como `true` para testes iniciais.
4. Habilite a autenticação por e-mail/senha em **Authentication > Sign-in method**.
5. Em **Configurações do Projeto > Contas de Serviço**, gere uma chave privada do Firebase Admin SDK e salve o arquivo JSON.
6. No diretório raiz do projeto, crie um arquivo `.env` e adicione as credenciais do Firebase:

```
FIREBASE_API_KEY="sua-api-key"
FIREBASE_AUTH_DOMAIN="seu-auth-domain"
FIREBASE_DATABASE_URL="sua-database-url"
FIREBASE_PROJECT_ID="seu-project-id"
FIREBASE_STORAGE_BUCKET="seu-storage-bucket"
FIREBASE_MESSAGING_SENDER_ID="seu-messaging-sender-id"
FIREBASE_APP_ID="seu-app-id"
```

## Inicialização do Sistema

### 1. Aplicando migrações e criando um superusuário
```bash
$ python manage.py migrate
$ python manage.py createsuperuser
```

### 2. Iniciando o servidor
```bash
$ python manage.py runserver
```
Acesse a aplicação em: [http://127.0.0.1:8000/](http://127.0.0.1:8000/).

## Registro e Inserção de Dados

Para acessar o dashboard e criar um módulo:

1. Clique em **Registrar** e preencha o formulário.
2. Insira o **código** exibido no terminal da aplicação no campo apropriado.
3. No Firebase, acesse **Realtime Database** e adicione os seguintes dados dentro de `UsersData/UID_da_conta`:

- Chave: `modules`
- Valor:
```json
{"b61c06":{"aquariumHeight":22,"statistics":{"LEVEL":28.832,"PH":7,"TEMP":24.3125,"TURBIDITY":5,"timestamp":1011922}}}
```


4. Atualize a página do sistema para visualizar os dados.

**Nota:** Os dados são enviados automaticamente pelo ESP32. Caso não possua um dispositivo, a inserção deve ser feita manualmente.

---
## Estrutura do Código

### 1. Autenticação com Firebase
- Gerenciamento de login e registro de usuários.
- Confirmação por e-mail para maior segurança.

### 2. Dashboard e Monitoramento
- Exibição dos módulos vinculados à conta do usuário.
- Atualização em tempo real dos parâmetros monitorados via **WebSocket**.
- Cálculo da **qualidade geral da água** com alertas em caso de níveis fora do padrão.

### 3. Gerenciamento da Conta
- Exibição de informações do usuário e módulos vinculados.
- Opção para adicionar foto de perfil.

### 4. Relatórios (Futura Implementação)
- Geração de relatórios detalhados sobre a qualidade da água.

---
## Contribuição
Se você deseja contribuir ou aprimorar o projeto, sinta-se à vontade para explorar o repositório e sugerir melhorias!

