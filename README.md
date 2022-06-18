#Projeto Core CMP

Esse projeto esta sendo elaborado usando como referência uma aplicação desenvolvida em Excel usando liguagem de programação VBA, SQL, funcionalidades como Power Query, table pivoting, importação de dados via MS Access.

Esse projeto tem como proposito desenvolver um software que possa controlar o processo, garantir a qualidade do produto e certificar que todas as formas de validação estão sendo utilizadas.

No momento a ferramente esta fazendo o cadastro do usuário utilizando JSON e armazenando em Local Storage.
Esse cadastro de usuário, faz as seguintes validações:

    1 - Selecionar qual o projeto você terá acesso para exercutar as tarefas;

    2 - Valida se o nome possui mais que 3 Caracteres;

    3 - Valida que se o usuario esta separado por "ponto(.)";

    4 - Valida se a senha possui a partir de 6 caracteres;

    5 - Valida que no campo de confirmação de senha, esta de acordo com o campo senha;

    6 - Caso algum das informações acima estiverem faltando, o processo de cadastro não proceguirá;


Na tela de login, você consegue acessar a plataforma informando os dados cadastrados.
A validação dos dados é feita via JSON, importando esses dados do Local Storage e verificando se esta de acordo, fazendo tambem as seguintes validações:

    1 - Verificando se o usuário esta preenchido;

    2 - Verificando se a senha esta preenchida;

    3 - Verificando se o usuário esta de acordo com o cadastrado;

    4 - Verifica se a senha esta de acordo com a cadastrada;


Após passar pela tela de login, é possivel ver a pagina Home, onde será possivél selecionar o projeto que está atuando, caso tente acessar algum projeto que não foi liberado no processo de cadastro, terá o solicitação negada.
Atualmente somente o projeto Revolution possui estrutura para fazer o acesso as funcionalidades.

Na tela de Part List, após selecionar o projeto Revolution, tem a tela de acesso para selecionar se irá atuar no processo de Part List, Illustration, Text ou Quotation.

Cada processo desse possui ações diferente relacionadas ao trabalho feito.
Logo abaixo tem o campo de busca, onde é possivel informar quais dados desesja importar do banco de dados (Funcionalidade não habilitada)

Na proxima sessão tem os botões de ação, onde cada botão executa uma ação relacionada ao processo de check ou preenchimento de informações mandatórias, cada botão possui uma status de OK ou Não OK, caso alguma etapa seja selecionada antes da anterior ter sido acionada, o processo não terá continuidade, assim podendo somente continuar após acionar a etapa faltante.
Essa etapa ainda está em elaboração no momento somente acionando o status do processo e atualizando o valor da barra de progresso.

A barra de progresso serve para mostrar em qual etapa o processo está, dando uma noção de quantos falta para ser finalizado.

E as tabelas são usadas para mostrar os dados importados do banco de dados, habilitando através do botão ao lado direito "edit" e "save".

Projeto em desenvolvimento (WIP)
