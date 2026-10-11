const listaEscolasSJC = [
    // --- 1. REGIÃO SUL (18 Escolas) ---
    { nome: "EMEFI Prof. Álvaro Gonçalves", bairro: "Campo dos Alemães", telefone: "(12) 3966-2234", rampa: true, banheiro: true, sala: true, libras: false },
    { nome: "EMEFI Prof. Moacyr Benedicto de Souza", bairro: "Campo dos Alemães", telefone: "(12) 3966-1544", rampa: true, banheiro: true, sala: true, libras: true },
    { nome: "EMEFI Profª Olga Benário Prestes", bairro: "Jardim Satélite", telefone: "(12) 3931-1555", rampa: true, banheiro: true, sala: true, libras: true },
    { nome: "EMEFI Profª Mercedes Carnevalli Klein", bairro: "Jardim Satélite", telefone: "(12) 3931-4199", rampa: true, banheiro: true, sala: true, libras: true },
    { nome: "EMEFI Professora Maria De Melo", bairro: "Parque Industrial", telefone: "(12) 3931-3593", rampa: true, banheiro: true, sala: true, libras: false },
    { nome: "EMEFI Prof. Hélio Walter Bevilacqua", bairro: "Jardim República", telefone: "(12) 3939-2310", rampa: true, banheiro: false, sala: true, libras: false },
    { nome: "EMEFI Profª Norma de Conti Simão", bairro: "Bosque dos Eucaliptos", telefone: "(12) 3916-4448", rampa: true, banheiro: true, sala: true, libras: true },
    { nome: "EMEFI Prof. Ilson Gomes", bairro: "Jardim Primavera", telefone: "(12) 3937-2299", rampa: true, banheiro: true, sala: true, libras: true },
    { nome: "EMEFI Profª Sônia Maria Pereira da Silva", bairro: "Jardim Morumbi", telefone: "(12) 3931-1190", rampa: false, banheiro: true, sala: true, libras: false },
    { nome: "EMEFI Prof. Chico Triste", bairro: "Jardim São José", telefone: "(12) 3934-2199", rampa: true, banheiro: true, sala: true, libras: false },
    { nome: "EMEFI Profª Martha Abib Castanho", bairro: "Jardim Satélite", telefone: "(12) 3931-6677", rampa: true, banheiro: true, sala: true, libras: true },
    { nome: "EMEFI Profª Luiza Maria Cavalcanti Guratti", bairro: "Setville", telefone: "(12) 3933-1122", rampa: true, banheiro: true, sala: true, libras: false },
    { nome: "EMEFI Profª Maria Antonieta Payar", bairro: "Residencial Pinheirinho", telefone: "(12) 3966-8844", rampa: true, banheiro: true, sala: true, libras: false },
    { nome: "EMEFI Profª Therezinha do Menino Jesus d. Nascimento", bairro: "Dom Pedro I", telefone: "(12) 3933-2211", rampa: true, banheiro: true, sala: true, libras: true },
    { nome: "EMEFI Prof. Dom Pedro de Alcântara", bairro: "Dom Pedro I", telefone: "(12) 3934-9988", rampa: true, banheiro: true, sala: false, libras: false },
    { nome: "EMEFI Prof. Dorival Monteiro", bairro: "Jardim Colonial", telefone: "(12) 3933-7755", rampa: true, banheiro: true, sala: true, libras: false },
    { nome: "EMEFI Profª Dosulina Chenque Chaves de Andrade", bairro: "Altos de Santana II", telefone: "(12) 3931-5544", rampa: true, banheiro: true, sala: true, libras: false },
    { nome: "EMEFI Profª Luzia Levina Aparecida Borges", bairro: "Jardim Cruzeiro do Sul", telefone: "(12) 3937-1100", rampa: true, banheiro: true, sala: true, libras: true },

    // --- 2. REGIÃO LESTE (15 Escolas) ---
    { nome: "EMEFI Profª Maria Amélia Wakamatsu", bairro: "Campos de São José", telefone: "(12) 3912-4775", rampa: true, banheiro: true, sala: true, libras: false },
    { nome: "EMEFI Prof. Antônio Palma Sobrinho", bairro: "Parque Nova Esperança", telefone: "(12) 3907-1124", rampa: true, banheiro: true, sala: false, libras: true },
    { nome: "EMEFI Prof. Possidônio José de Freitas", bairro: "Residencial Galo Branco", telefone: "(12) 3905-1911", rampa: true, banheiro: false, sala: true, libras: false },
    { nome: "EMEFI Prof. Waldemar Ramos", bairro: "Vista Verde", telefone: "(12) 3929-6319", rampa: true, banheiro: true, sala: true, libras: true },
    { nome: "EMEFI Profª Palmyra Sant'Anna", bairro: "Vila Industrial", telefone: "(12) 3929-2089", rampa: true, banheiro: true, sala: true, libras: true },
    { nome: "EMEFI Prof. Henrique Botelho", bairro: "Vila Industrial", telefone: "(12) 3921-9988", rampa: true, banheiro: true, sala: true, libras: false },
    { nome: "EMEFI Prof. Pedro Mazza", bairro: "Jardim Coqueiros", telefone: "(12) 3907-2211", rampa: true, banheiro: true, sala: false, libras: false },
    { nome: "EMEFI Profª Mariana Teixeira Cornélio", bairro: "Novo Horizonte", telefone: "(12) 3907-8899", rampa: false, banheiro: true, sala: true, libras: true },
    { nome: "EMEFI Prof. Hélio Augusto de Souza", bairro: "Jardim Valparaíba", telefone: "(12) 3929-5996", rampa: true, banheiro: true, sala: true, libras: true },
    { nome: "EMEFI Profª Mercedes Maria Perotti", bairro: "Jardim Santa Júlia", telefone: "(12) 3902-1244", rampa: true, banheiro: true, sala: true, libras: false },
    { nome: "EMEFI Prof. Leonor Pereira Nunes Galvão", bairro: "Vila Industrial", telefone: "(12) 3929-4455", rampa: false, banheiro: true, sala: false, libras: false },
    { nome: "EMEFI Profª Terezinha Araújo", bairro: "Jardim Santa Hermínia", telefone: "(12) 3907-5544", rampa: true, banheiro: true, sala: true, libras: false },
    { nome: "EMEFI Prof. Luiz Leite", bairro: "Galo Branco", telefone: "(12) 3905-3311", rampa: true, banheiro: true, sala: true, libras: true },
    { nome: "EMEFI Profª Maria Gomide de Sousa", bairro: "Jardim São Vicente", telefone: "(12) 3905-2244", rampa: true, banheiro: true, sala: true, libras: false },
    { nome: "EMEFI Profª Eunice de Oliveira", bairro: "Jardim Novo Horizonte II", telefone: "(12) 3907-1155", rampa: true, banheiro: true, sala: true, libras: false },

    // --- 3. REGIÃO NORTE (9 Escolas) ---
    { nome: "EMEFI Profª Ana Berling Macedo", bairro: "Alto da Ponte", telefone: "(12) 3921-6839", rampa: true, banheiro: true, sala: true, libras: false },
    { nome: "EMEFI Prof. Jacyra Vieira Baracho", bairro: "Santana", telefone: "(12) 3921-9535", rampa: true, banheiro: false, sala: true, libras: true },
    { nome: "EMEFI Profª Maria Ofélia Veneziani Pedrosa", bairro: "Jardim Telespark", telefone: "(12) 3922-4467", rampa: true, banheiro: true, sala: true, libras: false },
    { nome: "EMEFI Profª Vera Babo de Oliveira", bairro: "Altos de Santana", telefone: "(12) 3942-1254", rampa: true, banheiro: true, sala: false, libras: false },
    { nome: "EMEFI Prof. Sônia Maria Pereira", bairro: "Buquirinha", telefone: "(12) 3921-4470", rampa: false, banheiro: true, sala: true, libras: true },
    { nome: "EMEFI Prof. Felício Savastano", bairro: "Monte Castelo", telefone: "(12) 3923-4700", rampa: true, banheiro: false, sala: true, libras: false },
    { nome: "EMEFI Dr. Maurício Anisse Cury", bairro: "Jardim São Dimas", telefone: "(12) 3921-9955", rampa: true, banheiro: true, sala: true, libras: true },
    { nome: "EMEFI Profª Áurea Cantinho Rodrigues", bairro: "Jardim Oswaldo Cruz", telefone: "(12) 3921-8765", rampa: true, banheiro: true, sala: true, libras: true },
    { nome: "EMEFI Profª Mercedes Rachid Edwards", bairro: "São Francisco Xavier", telefone: "(12) 3926-1144", rampa: true, banheiro: true, sala: true, libras: false },

    // --- 4. REGIÃO OESTE (8 Escolas) ---
    { nome: "EMEFI Prof. Alcyr da Silva", bairro: "Jardim das Indústrias", telefone: "(12) 3931-4455", rampa: true, banheiro: true, sala: true, libras: true },
    { nome: "EMEFI Prof. Mário Campolim", bairro: "Vila Betânia", telefone: "(12) 3922-1144", rampa: true, banheiro: false, sala: true, libras: false },
    { nome: "EMEFI Profª Geraldina Salles de Alencar", bairro: "Jardim Limoeiro", telefone: "(12) 3941-8855", rampa: true, banheiro: true, sala: true, libras: false },
    { nome: "EMEFI Prof. Flávio Berling de Macedo", bairro: "Jardim Esplanada", telefone: "(12) 3922-3488", rampa: true, banheiro: true, sala: true, libras: true },
    { nome: "EMEFI Prof. Nelson Ferreira da Silva", bairro: "Jardim Paulista", telefone: "(12) 3922-9080", rampa: true, banheiro: true, sala: true, libras: false },
    { nome: "EMEFI Profª Otacília Madureira de Moura", bairro: "Vila Sanches", telefone: "(12) 3921-7788", rampa: true, banheiro: false, sala: true, libras: false },
    { nome: "EMEFI Prof. Emmanuel Antônio dos Santos", bairro: "Residencial Frei Galvão", telefone: "(12) 3929-8800", rampa: true, banheiro: true, sala: true, libras: false },
    { nome: "EMEFI Marechal do Ar Casemiro Montenegro Filho", bairro: "CTA", telefone: "(12) 3947-3311", rampa: true, banheiro: true, sala: true, libras: true }
];
// Seletores da Interface
const authModal = document.getElementById('auth-modal');
const appContainer = document.getElementById('app-container');
const btnNavLogin = document.getElementById('btn-nav-login');
const btnHeroBuscar = document.getElementById('btn-hero-buscar');
const closeModal = document.getElementById('close-modal');
const authTitle = document.getElementById('auth-title');
const btnPrimary = document.getElementById('btn-primary');
const toggleLink = document.getElementById('toggle-link');
const userEmailSpan = document.getElementById('user-email');
const btnLogout = document.getElementById('btn-logout');

// Alternadores de blocos de inputs
const loginFields = document.getElementById('login-fields');
const cadastroFields = document.getElementById('cadastro-fields');
const paiFalecidoCheck = document.getElementById('pai-falecido');
const maeFalecidoCheck = document.getElementById('mae-falecido');
const blocoPai = document.getElementById('bloco-pai');
const blocoMae = document.getElementById('bloco-mae');

let isLoginMode = true;

// Abrir e Fechar Janela (Modal)
if (btnNavLogin) btnNavLogin.addEventListener('click', () => authModal.classList.remove('hidden'));
if (btnHeroBuscar) btnHeroBuscar.addEventListener('click', () => authModal.classList.remove('hidden'));
if (closeModal) closeModal.addEventListener('click', () => authModal.classList.add('hidden'));

// Tratamento de pais falecidos (Desabilitar blocos de inputs)
if (paiFalecidoCheck) {
    paiFalecidoCheck.addEventListener('change', (e) => {
        if (e.target.checked) {
            blocoPai.classList.add('disabled-block');
            document.querySelectorAll('#bloco-pai input').forEach(input => input.value = '');
        } else {
            blocoPai.classList.remove('disabled-block');
        }
    });
}

if (maeFalecidoCheck) {
    maeFalecidoCheck.addEventListener('change', (e) => {
        if (e.target.checked) {
            blocoMae.classList.add('disabled-block');
            document.querySelectorAll('#bloco-mae input').forEach(input => input.value = '');
        } else {
            blocoMae.classList.remove('disabled-block');
        }
    });
}

// Alternar entre modo Login e modo Cadastro
if (toggleLink) {
    toggleLink.addEventListener('click', () => {
        isLoginMode = !isLoginMode;
        if (isLoginMode) {
            authTitle.innerText = "Entrar na Conta";
            btnPrimary.innerText = "Entrar";
            toggleLink.innerText = "Cadastre-se";
            document.getElementById('toggle-auth').firstChild.textContent = "Não tem conta? ";
            loginFields.classList.remove('hidden');
            cadastroFields.classList.add('hidden');
        } else {
            authTitle.innerText = "Criar Nova Conta";
            btnPrimary.innerText = "Cadastrar";
            toggleLink.innerText = "Entre aqui";
            document.getElementById('toggle-auth').firstChild.textContent = "Já tem conta? ";
            loginFields.classList.add('hidden');
            cadastroFields.classList.remove('hidden');
        }
    });
}

// Clique no botão principal (Entrar ou Cadastrar)
if (btnPrimary) {
    btnPrimary.addEventListener('click', () => {
        if (isLoginMode) {
            // LÓGICA DE LOGIN LOCAL POR RA OU CPF
            const identificador = document.getElementById('login-identificador').value;
            const password = document.getElementById('login-password').value;

            if (!identificador || !password) {
                alert("Por favor, preencha o RA/CPF e a senha.");
                return;
            }

            // Puxa a lista de usuários salvos na memória do navegador
            const usuariosCadastrados = JSON.parse(localStorage.getItem('usuarios_escola_plus') || '[]');
            
            // Busca se existe algum usuário com o RA, CPF do Aluno, CPF do Pai ou CPF da Mãe digitado
            const usuarioEncontrado = usuariosCadastrados.find(u => 
                (u.raAluno === identificador || u.cpfAluno === identificador || u.cpfPai === identificador || u.cpfMãe === identificador) && 
                u.password === password
            );

            if (usuarioEncontrado) {
                // Armazena quem é o usuário logado no momento
                localStorage.setItem('sessao_ativa_escola_plus', JSON.stringify(usuarioEncontrado));
                authModal.classList.add('hidden');
                verificarSessao();
            } else {
                alert("Usuário não encontrado ou senha incorreta. Verifique os dados ou crie uma nova conta.");
            }

        } else {
            // LÓGICA DE CADASTRO LOCAL SEGURO
            const email = document.getElementById('cad-email').value;
            const password = document.getElementById('cad-password').value;
            const passwordConfirm = document.getElementById('cad-password-confirm').value;
            const raAluno = document.getElementById('cad-ra-aluno').value;
            const cpfAluno = document.getElementById('cad-cpf-aluno').value;
            const nomeAluno = document.getElementById('cad-nome-aluno').value;

            if (!email || !password || !raAluno || !nomeAluno) {
                alert("E-mail, Nome do aluno, RA do aluno e senha são obrigatórios!");
                return;
            }

            if (password !== passwordConfirm) {
                alert("As senhas não coincidem!");
                return;
            }

            // Monta o objeto com todos os dados familiares coletados
            const novoUsuario = {
                email: email,
                password: password,
                telefone: document.getElementById('cad-telefone').value,
                paiFalecido: paiFalecidoCheck.checked,
                nomePai: document.getElementById('cad-nome-pai').value,
                nascPai: document.getElementById('cad-nasc-pai').value,
                cpfPai: document.getElementById('cad-cpf-pai').value,
                maeFalecido: maeFalecidoCheck.checked,
                nomeMae: document.getElementById('cad-nome-mae').value,
                nascMae: document.getElementById('cad-nasc-mae').value,
                cpfMãe: document.getElementById('cad-cpf-mae').value,
                nomeAluno: nomeAluno,
                raAluno: raAluno,
                cpfAluno: cpfAluno
            };

            // Salva na lista local do navegador
            const cadastrosExistentes = JSON.parse(localStorage.getItem('usuarios_escola_plus') || '[]');
            
            // Verifica se o RA já foi cadastrado para evitar duplicados
            if (cadastrosExistentes.some(u => u.raAluno === raAluno)) {
                alert("Este RA de aluno já está cadastrado no sistema!");
                return;
            }

            cadastrosExistentes.push(novoUsuario);
            localStorage.setItem('usuarios_escola_plus', JSON.stringify(cadastrosExistentes));

            alert("Conta criada com sucesso! Você já pode realizar o login usando o RA ou CPF cadastrado.");
            
            // Limpa os campos do formulário
            document.querySelectorAll('.box-cadastro input[type="text"], .box-cadastro input[type="password"], .box-cadastro input[type="email"], .box-cadastro input[type="tel"]').forEach(input => input.value = '');
            
            isLoginMode = true;
            toggleLink.click(); // Retorna automaticamente para a tela de login
        }
    });
}

if (btnLogout) {
    btnLogout.addEventListener('click', () => {
        localStorage.removeItem('sessao_ativa_escola_plus');
        verificarSessao();
    });
}

function verificarSessao() {
    const sessao = localStorage.getItem('sessao_ativa_escola_plus');
    if (sessao) {
        const usuario = JSON.parse(sessao);
        document.querySelectorAll('header, section').forEach(el => el.classList.add('hidden'));
        authModal.classList.add('hidden');
        appContainer.classList.remove('hidden');
        userEmailSpan.innerText = usuario.email;
    } else {
        document.querySelectorAll('header, section').forEach(el => el.classList.remove('hidden'));
        authModal.classList.add('hidden');
        appContainer.classList.add('hidden');
    }
}

// Verifica o estado assim que a página abre
verificarSessao();
