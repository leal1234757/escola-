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
