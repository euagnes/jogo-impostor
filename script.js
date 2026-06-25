  // ---------- Word pairs ----------
  const PAIRS = [
    ["Pizza","Hambúrguer"],["Praia","Piscina"],["Cachorro","Gato"],["Futebol","Basquete"],
    ["Escola","Faculdade"],["Avião","Ônibus"],["Filme","Série"],["Café","Chá"],["Sol","Lua"],
    ["Celular","Computador"],["Livro","Revista"],["Carro","Moto"],["Bicicleta","Patinete"],
    ["Chuva","Neve"],["Verão","Inverno"],["Montanha","Floresta"],["Rio","Lago"],["Mar","Oceano"],
    ["Sorvete","Açaí"],["Chocolate","Brigadeiro"],["Bolo","Torta"],["Arroz","Feijão"],
    ["Macarrão","Lasanha"],["Refrigerante","Suco"],["Água","Água de coco"],["Restaurante","Lanchonete"],
    ["Shopping","Mercado"],["Hospital","Farmácia"],["Médico","Dentista"],["Professor","Aluno"],
    ["Policial","Bombeiro"],["Cozinheiro","Garçom"],["Cantor","Ator"],["Dançarino","Músico"],
    ["Pintor","Fotógrafo"],["Computador","Notebook"],["Teclado","Mouse"],["Televisão","Projetor"],
    ["Fone de ouvido","Caixa de som"],["Internet","Wi-Fi"],["Instagram","TikTok"],["YouTube","Netflix"],
    ["WhatsApp","Telegram"],["Google","Safari"],["Jogo","Aplicativo"],["Controle","Teclado gamer"],
    ["PlayStation","Xbox"],["Minecraft","Roblox"],["Fortnite","Free Fire"],["Mario","Sonic"],
    ["Super-herói","Vilão"],["Batman","Homem-Aranha"],["Homem de Ferro","Capitão América"],
    ["Princesa","Rainha"],["Castelo","Palácio"],["Dragão","Dinossauro"],["Zumbi","Fantasma"],
    ["Vampiro","Lobisomem"],["Pirata","Ninja"],["Espada","Arco e flecha"],["Tesouro","Ouro"],
    ["Planeta","Estrela"],["Foguete","Nave espacial"],["Astronauta","Alienígena"],
    ["Robô","Inteligência artificial"],["Cidade","Vila"],["Casa","Apartamento"],["Quarto","Sala"],
    ["Cozinha","Banheiro"],["Cama","Sofá"],["Mesa","Cadeira"],["Porta","Janela"],["Geladeira","Fogão"],
    ["Micro-ondas","Air fryer"],["Vassoura","Aspirador"],["Roupa","Sapato"],["Camisa","Jaqueta"],
    ["Calça","Bermuda"],["Tênis","Chinelo"],["Boné","Chapéu"],["Relógio","Pulseira"],
    ["Óculos","Lente de contato"],["Mochila","Mala"],["Dinheiro","Cartão"],["Banco","Caixa eletrônico"],
    ["Trabalho","Reunião"],["Chefe","Funcionário"],["Viagem","Férias"],["Hotel","Pousada"],
    ["Passaporte","Identidade"],["Mapa","GPS"],["Táxi","Uber"],["Trem","Metrô"],["Navio","Barco"],
    ["Moto","Scooter"],["Cavalo","Burro"],["Leão","Tigre"],["Elefante","Rinoceronte"],
    ["Macaco","Gorila"],["Cobra","Lagarto"],["Peixe","Tubarão"],["Golfinho","Baleia"],
    ["Galinha","Pato"],["Águia","Coruja"],["Abelha","Borboleta"],["Formiga","Barata"],
    ["Flor","Árvore"],["Rosa","Girassol"],["Maçã","Banana"],["Morango","Uva"],["Laranja","Limão"],
    ["Melancia","Melão"],["Cenoura","Batata"],["Tomate","Cebola"],["Alface","Couve"],
    ["Sal","Açúcar"],["Pimenta","Molho"],["Garfo","Colher"],["Prato","Tigela"],["Copo","Caneca"],
    ["Faca","Tesoura"],["Caneta","Lápis"],["Caderno","Agenda"],["Borracha","Apontador"],
    ["Quadro","Tela"],["Mochila","Estojo"],["Prova","Trabalho escolar"],["Matemática","Física"],
    ["História","Geografia"],["Português","Inglês"],["Música","Arte"],["Teatro","Cinema"],
    ["Parque","Praça"],["Academia","Estádio"],["Piscina","Banheira"],["Festa","Balada"],
    ["Aniversário","Casamento"],["Presente","Surpresa"],["Amigo","Colega"],["Irmão","Primo"],
    ["Pai","Mãe"],["Bebê","Criança"],["Adulto","Idoso"],["Risada","Sorriso"],["Medo","Susto"],
    ["Sono","Cansaço"],["Alegria","Felicidade"],["Raiva","Estresse"],["Frio","Calor"],
    ["Dia","Noite"],["Manhã","Tarde"],["Ontem","Amanhã"],["Rápido","Veloz"],["Grande","Gigante"],
    ["Pequeno","Mini"],["Forte","Musculoso"],["Fraco","Cansado"],["Bonito","Elegante"],
    ["Feio","Estranho"],["Limpo","Organizado"],["Sujo","Bagunçado"],["Alto","Comprido"],
    ["Baixo","Curto"],["Claro","Brilhante"],["Escuro","Sombrio"],["Doce","Açucarado"],
    ["Salgado","Temperado"],["Quente","Morno"],["Gelado","Frio"],["Fácil","Simples"],
    ["Difícil","Complicado"]
  ];

  // ---------- Question pairs (modo "Qual é a frase?") ----------
  // [perguntaDoGrupo, perguntaDoImpostor] — parecidas, mas com um toque diferente.
  const PHRASE_PAIRS = [
    ["Qual é a melhor comida que existe?", "Qual é a pior comida que existe?"],
    ["Qual o melhor lugar para passar as férias?", "Qual o pior lugar para passar as férias?"],
    ["O que não pode faltar numa festa?", "O que estraga uma festa?"],
    ["Qual super poder você gostaria de ter?", "Qual super poder seria totalmente inútil?"],
    ["Qual animal daria o melhor animal de estimação?", "Qual animal daria o pior animal de estimação?"],
    ["Qual o melhor presente para ganhar?", "Qual o pior presente para ganhar?"],
    ["Qual a melhor estação do ano?", "Qual a estação do ano mais chata?"],
    ["Qual matéria da escola é a mais legal?", "Qual matéria da escola é a mais chata?"],
    ["Qual cidade você gostaria de morar?", "Qual cidade você nunca moraria?"],
    ["Qual o melhor filme de todos os tempos?", "Qual o filme mais superestimado?"],
    ["O que você sempre leva numa viagem?", "O que você sempre esquece de levar numa viagem?"],
    ["Qual a melhor hora do dia?", "Qual a pior hora do dia?"],
    ["O que te deixa feliz logo de manhã?", "O que mais te irrita logo de manhã?"],
    ["Qual hobby você gostaria de aprender?", "Qual hobby você acha mais entediante?"],
    ["Qual a melhor sobremesa?", "Qual sobremesa você acha enjoativa?"],
    ["Qual o melhor lugar para relaxar?", "Qual lugar mais te deixa estressado?"],
    ["Qual personagem você gostaria de ser?", "Qual personagem você não suporta?"],
    ["Qual esporte é mais divertido de assistir?", "Qual esporte é mais chato de assistir?"],
    ["Qual o melhor app do celular?", "Qual app do celular é o mais inútil?"],
    ["O que você faria se ganhasse na loteria?", "O que você faria no seu último dia de férias?"],
    ["Qual a melhor parte de uma viagem?", "Qual a pior parte de uma viagem?"],
    ["Qual música não sai da sua cabeça?", "Qual música você odeia ouvir?"],
    ["Qual o melhor jeito de passar o fim de semana?", "Qual o pior jeito de passar o fim de semana?"],
    ["Qual comida você comeria todo dia?", "Qual comida você nunca mais comeria?"],
    ["Qual lugar da casa é o seu favorito?", "Qual lugar da casa você mais detesta limpar?"]
  ];

  // ---------- Soletrando word lists (português) ----------
  const SPELL_WORDS = {
    facil: ["Bola","Casa","Gato","Pato","Mesa","Sapo","Dedo","Pera","Vaca","Fogo",
            "Rato","Sino","Mala","Suco","Bolo","Faca","Rede","Mapa","Teia","Sopa",
            "Lobo","Cama","Rosa","Selo","Nuvem","Janela","Caneta","Cavalo","Tomate","Cebola",
            "Banana","Dente","Folha","Galo","Pipa","Vela","Sino","Boca","Mato","Lixo"],
    medio: ["Cachorro","Bicicleta","Caderno","Estrela","Girafa","Sorvete","Abacaxi","Telefone","Borboleta","Geladeira",
            "Brinquedo","Montanha","Relógio","Sapato","Janeiro","Domingo","Sorriso","Festival","Aventura","Carrossel",
            "Foguete","Castelo","Floresta","Tartaruga","Cachoeira","Biblioteca","Calendário","Ferradura","Margarida","Pijama",
            "Esquilo","Vampiro","Travesseiro","Guarda-chuva","Aquário","Mochila","Pincel","Vizinho","Costela","Avião"],
    dificil: ["Paralelepípedo","Otorrinolaringologista","Inconstitucional","Excepcionalmente","Subterrâneo","Cabeleireiro",
              "Berinjela","Reincidência","Hipopótamo","Pneumonia","Mnemônico","Constrangimento","Exceção","Psicólogo",
              "Crisântemo","Vicissitude","Hesitação","Obstáculo","Necessário","Privilégio","Manjericão","Xilofone",
              "Beneficência","Empecilho","Concomitante","Meritíssimo","Adjetivo","Quociente","Sucinto","Ascensão",
              "Espontâneo","Bissexto","Cinquenta","Gengibre","Náusea","Próximo","Whisky","Asterisco","Cônjuge","Ritmo"]
  };

  // ---------- State ----------
  const state = {
    count: 4,
    mode: "knows",      // "knows" | "blind" | "phrase" | "soletrando"
    names: [],
    impostorIndex: 0,
    groupWord: "",
    impostorWord: "",
    current: 0,
    spell: {
      difficulty: "facil", // facil | medio | dificil
      format: "elim",      // elim | lives
      players: [],         // [{name, alive, lives}]
      turnPtr: 0,
      round: 1,
      currentWord: "",
      pool: [],
      poolPtr: 0,
      returnScreen: "spell", // p/ botão Voltar do ranking
    },
    draw: {
      knows: true,         // impostor sabe que é?
      elimination: false,  // eliminar por votação?
      alive: [],           // bool por índice de jogador
      current: 0,          // jogador atual na fase de ver palavra
      voters: [],          // índices que ainda votam nesta votação
      voteIdx: 0,          // posição na lista de voters
      candidates: [],      // índices que podem ser votados
      tally: {},           // índice -> nº de votos
      retied: false,       // já houve revotação por empate?
      accused: null,       // índice mais votado
    },
  };

  const $ = (id) => document.getElementById(id);
  const screens = {
    setup: $("screen-setup"),
    names: $("screen-names"),
    pass: $("screen-pass"),
    discuss: $("screen-discuss"),
    reveal: $("screen-reveal"),
    spell: $("screen-spell"),
    spellStatus: $("screen-spell-status"),
    spellWinner: $("screen-spell-winner"),
    drawWord: $("screen-draw-word"),
    drawReady: $("screen-draw-ready"),
    drawDraw: $("screen-draw-draw"),
    drawVote: $("screen-draw-vote"),
    drawVoteResult: $("screen-draw-voteresult"),
    drawReveal: $("screen-draw-reveal"),
  };
  function show(name) {
    Object.values(screens).forEach(s => s.classList.remove("active"));
    screens[name].classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  const rand = (n) => Math.floor(Math.random() * n);

  // ---------- Screen 1: setup ----------
  function renderCount() {
    $("count").textContent = state.count;
    $("minus").disabled = state.count <= 3;
    $("plus").disabled = state.count >= 10;
  }
  $("minus").onclick = () => { if (state.count > 3) { state.count--; renderCount(); } };
  $("plus").onclick  = () => { if (state.count < 10) { state.count++; renderCount(); } };

  document.querySelectorAll(".mode-opt[data-mode]").forEach(opt => {
    opt.onclick = () => {
      document.querySelectorAll(".mode-opt[data-mode]").forEach(o => o.classList.remove("sel"));
      opt.classList.add("sel");
      state.mode = opt.dataset.mode;
      $("spell-config").style.display = state.mode === "soletrando" ? "" : "none";
      $("draw-config").style.display = state.mode === "desenho" ? "" : "none";
    };
  });

  // Desenho: impostor sabe / não sabe
  document.querySelectorAll(".draw-know-opt").forEach(opt => {
    opt.onclick = () => {
      document.querySelectorAll(".draw-know-opt").forEach(o => o.classList.remove("sel"));
      opt.classList.add("sel");
      state.draw.knows = opt.dataset.know === "sim";
    };
  });

  // Desenho: eliminação por votação
  document.querySelectorAll("#elim-seg .seg-btn").forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll("#elim-seg .seg-btn").forEach(b => b.classList.remove("sel"));
      btn.classList.add("sel");
      state.draw.elimination = btn.dataset.elim === "sim";
    };
  });

  // Soletrando: dificuldade (segmented control)
  document.querySelectorAll("#diff-seg .seg-btn").forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll("#diff-seg .seg-btn").forEach(b => b.classList.remove("sel"));
      btn.classList.add("sel");
      state.spell.difficulty = btn.dataset.diff;
    };
  });

  // Soletrando: formato (eliminação / vidas)
  document.querySelectorAll(".fmt-opt").forEach(opt => {
    opt.onclick = () => {
      document.querySelectorAll(".fmt-opt").forEach(o => o.classList.remove("sel"));
      opt.classList.add("sel");
      state.spell.format = opt.dataset.fmt;
    };
  });

  $("to-names").onclick = () => { buildNameInputs(); show("names"); };

  // ---------- Screen 2: names ----------
  function buildNameInputs() {
    const wrap = $("names");
    const prev = [...wrap.querySelectorAll("input")].map(i => i.value);
    wrap.innerHTML = "";
    for (let i = 0; i < state.count; i++) {
      const row = document.createElement("div");
      row.className = "name-row";
      row.innerHTML = `<div class="num">${i + 1}</div>
        <input type="text" maxlength="20" autocomplete="off" spellcheck="false"
               placeholder="Jogador ${i + 1}" value="${prev[i] ? prev[i].replace(/"/g,'&quot;') : ""}">`;
      const input = row.querySelector("input");
      input.addEventListener("input", () => row.classList.remove("error"));
      wrap.appendChild(row);
    }
    $("name-alert").classList.remove("show");
  }

  $("back-setup").onclick = () => show("setup");

  $("start").onclick = () => {
    const rows = [...$("names").querySelectorAll(".name-row")];
    let ok = true;
    const names = [];
    rows.forEach(row => {
      const input = row.querySelector("input");
      const val = input.value.trim();
      if (!val) { row.classList.add("error"); ok = false; }
      names.push(val);
    });
    if (!ok) {
      $("name-alert").classList.add("show");
      return;
    }
    state.names = names;
    if (state.mode === "soletrando") startSpelling();
    else if (state.mode === "desenho") startDraw();
    else startRound();
  };

  // ---------- Round logic ----------
  function startRound() {
    state.isPhrase = state.mode === "phrase";
    const source = state.isPhrase ? PHRASE_PAIRS : PAIRS;
    const pair = source[rand(source.length)];
    // randomly decide which item of the pair is the group's and which is the impostor's
    const flip = rand(2) === 0;
    state.groupWord = flip ? pair[0] : pair[1];
    state.impostorWord = flip ? pair[1] : pair[0];
    state.impostorIndex = rand(state.names.length);
    state.current = 0;
    renderPassFront();
    show("pass");
  }

  // ---------- Screen 3: pass / reveal ----------
  function renderPassFront() {
    const name = state.names[state.current];
    $("pass-initial").textContent = (name[0] || "?").toUpperCase();
    $("pass-name").textContent = name;
    $("pass-progress").textContent = `Jogador ${state.current + 1} de ${state.names.length}`;
    $("front-hint").textContent = state.isPhrase
      ? "Pegue o celular e toque para ver sua pergunta secreta. Não deixe ninguém espiar!"
      : "Pegue o celular e toque para ver sua palavra secreta. Não deixe ninguém espiar!";
    $("show-word").textContent = state.isPhrase ? "👁 Mostrar pergunta" : "👁 Mostrar palavra";
    $("pass-front").style.display = "";
    $("pass-back").style.display = "none";
  }

  $("show-word").onclick = () => {
    const isImpostor = state.current === state.impostorIndex;
    const box = $("word-box");
    const kicker = state.isPhrase ? "Sua pergunta é" : "Sua palavra é";
    const sizeClass = state.isPhrase ? "phrase" : "";
    let word, html = "";

    if (isImpostor) {
      word = state.impostorWord;
      // impostor só é avisado no modo "knows" (palavras); nos modos "blind" e "phrase" ele não sabe
      if (state.mode === "knows") {
        html = `<div class="impostor-tag">🎭 Você é o Impostor!</div>
                <div class="word-kicker">${kicker}</div>
                <h2 class="the-word imp ${sizeClass}">${escapeHtml(word)}</h2>`;
      } else {
        html = `<div class="word-kicker">${kicker}</div>
                <h2 class="the-word ${sizeClass}">${escapeHtml(word)}</h2>`;
      }
    } else {
      word = state.groupWord;
      html = `<div class="word-kicker">${kicker}</div>
              <h2 class="the-word ${sizeClass}">${escapeHtml(word)}</h2>`;
    }
    box.innerHTML = html;
    $("memorize-hint").textContent = state.isPhrase
      ? "Memorize sua pergunta e passe o celular adiante."
      : "Memorize sua palavra e passe o celular adiante.";
    $("pass-front").style.display = "none";
    $("pass-back").style.display = "";
  };

  $("next-player").onclick = () => {
    state.current++;
    if (state.current >= state.names.length) {
      renderDiscuss();
      show("discuss");
    } else {
      renderPassFront();
    }
  };

  // ---------- Screen 4: discussion setup ----------
  function renderDiscuss() {
    $("discuss-title").textContent = state.isPhrase
      ? "Todos já viram suas perguntas"
      : "Todos já viram suas palavras";
    // botão "Mostrar frase padrão" só faz sentido no modo de perguntas
    $("show-standard").style.display = state.isPhrase ? "" : "none";
    const box = $("standard-box");
    box.style.display = "none";
    box.innerHTML = "";
  }

  $("show-standard").onclick = () => {
    const box = $("standard-box");
    box.innerHTML = `<div class="pk">Frase padrão · a que todos deveriam ter recebido</div>
                     <div class="pv">${escapeHtml(state.groupWord)}</div>`;
    box.style.display = "";
  };

  // ---------- Screen 4 & 5: discussion / reveal ----------
  function doReveal() {
    $("imp-name").textContent = state.names[state.impostorIndex];
    $("group-word").textContent = state.groupWord;
    $("imp-word").textContent = state.impostorWord;
    $("group-label").textContent = state.isPhrase ? "Pergunta do grupo" : "Grupo";
    $("imp-label").textContent = state.isPhrase ? "Pergunta do impostor" : "Impostor";
    // perguntas são longas → empilha as caixas; palavras ficam lado a lado
    $("word-pills").classList.toggle("col", state.isPhrase);
    show("reveal");
  }
  $("reveal-imp").onclick = doReveal;

  function newRound() { startRound(); }
  $("new-round").onclick = newRound;
  $("new-round-2").onclick = newRound;

  function newGame() { show("setup"); }
  $("new-game").onclick = newGame;
  $("new-game-2").onclick = newGame;

  // ================= SOLETRANDO =================
  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = rand(i + 1);
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
  const spellOut = (w) => w.toUpperCase().split("").join("-");
  const livesStr = (n) => "❤️".repeat(n) || "—";
  const elimPhrase = (name) => `${name}, pegue seu banquinho e saia soletrando de fininho!`;
  const aliveList = () => state.spell.players.filter(p => p.alive);

  function startSpelling() {
    const s = state.spell;
    s.players = state.names.map(n => ({ name: n, alive: true, lives: 3 }));
    s.round = 1;
    s.turnPtr = 0;
    s.pool = shuffle(SPELL_WORDS[s.difficulty].slice());
    s.poolPtr = 0;
    renderSpellTurn();
    show("spell");
  }

  function drawWord() {
    const s = state.spell;
    if (s.poolPtr >= s.pool.length) { shuffle(s.pool); s.poolPtr = 0; }
    s.currentWord = s.pool[s.poolPtr++];
  }

  function renderSpellTurn() {
    const s = state.spell;
    const pl = s.players[s.turnPtr];
    drawWord();
    $("spell-round").textContent = `Rodada ${s.round}`;
    $("spell-initial").textContent = (pl.name[0] || "?").toUpperCase();
    $("spell-name").textContent = pl.name;
    if (s.format === "lives") {
      $("spell-lives-line").style.display = "";
      $("spell-lives-line").textContent = `Vidas: ${livesStr(pl.lives)}`;
    } else {
      $("spell-lives-line").style.display = "none";
    }
    $("spell-front").style.display = "";
    $("spell-reveal").style.display = "none";
    $("spell-result").style.display = "none";
  }

  $("spell-show").onclick = () => {
    $("spell-word").textContent = state.spell.currentWord;
    $("spell-front").style.display = "none";
    $("spell-reveal").style.display = "";
    $("spell-result").style.display = "none";
  };

  function markResult(correct) {
    const s = state.spell;
    const pl = s.players[s.turnPtr];
    let msg = "", cls = "good";

    if (correct) {
      msg = `✅ ${pl.name} acertou! Continua na disputa.`;
      cls = "good";
    } else if (s.format === "elim") {
      pl.alive = false;
      msg = "💀 " + elimPhrase(pl.name);
      cls = "bad";
    } else { // lives
      pl.lives--;
      if (pl.lives <= 0) {
        pl.alive = false;
        msg = "💔 Sem vidas! " + elimPhrase(pl.name);
        cls = "bad";
      } else {
        msg = `❌ ${pl.name} errou e perdeu 1 vida. Restam ${pl.lives} (${livesStr(pl.lives)}).`;
        cls = "bad";
      }
    }

    const msgEl = $("spell-result-msg");
    msgEl.textContent = msg;
    msgEl.className = "result-msg " + cls;
    $("spell-result-correct").textContent = "Resposta correta: " + spellOut(s.currentWord);

    // fim de jogo?
    const alive = aliveList();
    if (alive.length <= 1) {
      showWinner(alive[0]);
      return;
    }

    $("spell-front").style.display = "none";
    $("spell-reveal").style.display = "none";
    $("spell-result").style.display = "";
  }

  $("spell-right").onclick = () => markResult(true);
  $("spell-wrong").onclick = () => markResult(false);

  function advanceToNextAlive() {
    const s = state.spell;
    const n = s.players.length;
    let p = s.turnPtr;
    for (let i = 0; i < n; i++) {
      p = (p + 1) % n;
      if (p === 0) s.round++;          // demos a volta → nova rodada
      if (s.players[p].alive) { s.turnPtr = p; return; }
    }
  }

  $("spell-next").onclick = () => {
    advanceToNextAlive();
    renderSpellTurn();
    show("spell");
  };

  // ---------- ranking / status ----------
  function renderStatus() {
    const s = state.spell;
    $("status-round").textContent = `Rodada ${s.round}`;

    const activeWrap = $("status-active");
    const deadWrap = $("status-dead");
    activeWrap.innerHTML = "";
    deadWrap.innerHTML = "";

    s.players.forEach(pl => {
      const row = document.createElement("div");
      const lives = s.format === "lives" && pl.alive
        ? `<div class="slives">${livesStr(pl.lives)}</div>` : "";
      if (pl.alive) {
        row.className = "status-row";
        row.innerHTML = `<div class="sname">${escapeHtml(pl.name)}</div>${lives}`;
        activeWrap.appendChild(row);
      } else {
        row.className = "status-row dead";
        row.innerHTML = `<div class="sname">${escapeHtml(pl.name)}</div><div class="sx">eliminado</div>`;
        deadWrap.appendChild(row);
      }
    });

    $("status-dead-section").style.display = s.players.some(p => !p.alive) ? "" : "none";
  }

  function openStatus(from) {
    state.spell.returnScreen = from;
    renderStatus();
    show("spellStatus");
  }
  $("spell-ranking").onclick = () => openStatus("spell");
  $("winner-ranking").onclick = () => openStatus("spellWinner");
  $("status-back").onclick = () => show(state.spell.returnScreen);
  $("status-newround").onclick = () => startSpelling();
  $("status-newgame").onclick = () => show("setup");

  // ---------- winner ----------
  function showWinner(pl) {
    $("winner-name").textContent = pl ? pl.name : "—";
    $("winner-msg").textContent = pl
      ? `Parabéns, ${pl.name}! Você venceu o Soletrando!`
      : "Fim de jogo!";
    show("spellWinner");
  }
  $("winner-newround").onclick = () => startSpelling();
  $("winner-newgame").onclick = () => show("setup");

  // ================= DESENHE A PALAVRA =================
  const drawAlive = () => state.names.map((_, i) => i).filter(i => state.draw.alive[i]);

  function startDraw() {
    const d = state.draw;
    const pair = PAIRS[rand(PAIRS.length)];
    const flip = rand(2) === 0;
    state.groupWord = flip ? pair[0] : pair[1];
    state.impostorWord = flip ? pair[1] : pair[0];
    state.impostorIndex = rand(state.names.length);
    d.alive = state.names.map(() => true);
    d.current = 0;
    renderDrawFront();
    show("drawWord");
  }

  function renderDrawFront() {
    const name = state.names[state.draw.current];
    $("dw-initial").textContent = (name[0] || "?").toUpperCase();
    $("dw-name").textContent = name;
    $("dw-progress").textContent = `Jogador ${state.draw.current + 1} de ${state.names.length}`;
    $("dw-front").style.display = "";
    $("dw-back").style.display = "none";
  }

  $("dw-show").onclick = () => {
    const isImp = state.draw.current === state.impostorIndex;
    let html;
    if (isImp && state.draw.knows) {
      // impostor sabe: aviso + palavra relacionada
      html = `<div class="impostor-tag">🎭 Você é o impostor!</div>
              <div class="word-kicker">Sua palavra é</div>
              <h2 class="the-word imp">${escapeHtml(state.impostorWord)}</h2>`;
    } else if (isImp && !state.draw.knows) {
      // impostor não sabe: NENHUMA palavra e nenhuma dica
      html = `<div class="word-kicker">Sua palavra é</div>
              <h2 class="the-word imp">Impostor</h2>
              <div class="pass-hint" style="margin-top:14px;">Você não recebeu palavra. Observe os outros e tente disfarçar no seu desenho.</div>`;
    } else {
      // jogador comum: palavra do grupo
      html = `<div class="word-kicker">Sua palavra é</div>
              <h2 class="the-word">${escapeHtml(state.groupWord)}</h2>`;
    }
    $("dw-box").innerHTML = html;
    // sem palavra para memorizar quando o impostor não recebe palavra
    $("dw-memorize").style.display = (isImp && !state.draw.knows) ? "none" : "";
    $("dw-front").style.display = "none";
    $("dw-back").style.display = "";
  };

  $("dw-hide").onclick = () => {
    $("dw-front").style.display = "";
    $("dw-back").style.display = "none";
  };

  $("dw-next").onclick = () => {
    state.draw.current++;
    if (state.draw.current >= state.names.length) show("drawReady");
    else renderDrawFront();
  };

  $("dr-start").onclick = () => show("drawDraw");
  $("dr-newgame").onclick = () => show("setup");
  $("dd-newgame").onclick = () => show("setup");
  $("dd-vote").onclick = () => startVoting(drawAlive());
  $("dd-reveal").onclick = () => doDrawReveal("");

  // ---------- votação ----------
  function startVoting(candidates) {
    const d = state.draw;
    d.candidates = candidates.slice();
    d.voters = drawAlive();       // todos os ativos votam
    d.voteIdx = 0;
    d.tally = {};
    d.retied = false;
    renderVote();
  }

  function renderVote() {
    const d = state.draw;
    const voter = d.voters[d.voteIdx];
    $("vote-progress").textContent = `Voto ${d.voteIdx + 1} de ${d.voters.length}`;
    $("vote-title").textContent = `Vez de ${state.names[voter]} votar`;
    $("vote-sub").textContent = "Em quem você vota como impostor?";
    const wrap = $("vote-options");
    wrap.innerHTML = "";
    d.candidates.filter(i => i !== voter).forEach(i => {
      const btn = document.createElement("button");
      btn.className = "btn btn-ghost";
      btn.textContent = state.names[i];
      btn.onclick = () => castVote(i);
      wrap.appendChild(btn);
    });
    show("drawVote");
  }

  function castVote(candidate) {
    const d = state.draw;
    d.tally[candidate] = (d.tally[candidate] || 0) + 1;
    d.voteIdx++;
    if (d.voteIdx >= d.voters.length) resolveVotes();
    else renderVote();
  }

  function resolveVotes() {
    const d = state.draw;
    let max = 0;
    Object.values(d.tally).forEach(v => { if (v > max) max = v; });
    const tied = Object.keys(d.tally).filter(k => d.tally[k] === max).map(Number);

    if (tied.length === 1) {
      d.accused = tied[0];
      showVoteResult();
    } else if (!d.retied) {
      // empate → nova votação só entre os empatados
      d.retied = true;
      d.candidates = tied.slice();
      d.voters = drawAlive();
      d.voteIdx = 0;
      d.tally = {};
      const names = tied.map(i => state.names[i]).join(", ");
      $("vote-options").innerHTML = "";
      renderVote();
      $("vote-sub").textContent = `Empate entre ${names}. Votem novamente só entre eles.`;
    } else {
      // empate de novo → escolhe aleatoriamente entre os empatados
      d.accused = tied[rand(tied.length)];
      showVoteResult(true);
    }
  }

  function showVoteResult(byRandom) {
    const d = state.draw;
    const acc = d.accused;
    $("vr-name").textContent = state.names[acc];
    const msgEl = $("vr-msg");
    const btnWrap = $("vr-buttons");
    btnWrap.innerHTML = "";
    $("vr-icon").textContent = "🗳️";

    const addBtn = (label, cls, fn) => {
      const b = document.createElement("button");
      b.className = "btn " + cls;
      b.textContent = label;
      b.onclick = fn;
      btnWrap.appendChild(b);
    };

    if (!d.elimination) {
      // sem eliminação: só mostra o mais votado e revela
      msgEl.style.display = byRandom ? "" : "none";
      if (byRandom) { msgEl.className = "result-msg"; msgEl.textContent = "Houve empate — escolhido por sorteio."; }
      addBtn("🔍 Revelar impostor", "btn-rose", () => doDrawReveal(""));
      show("drawVoteResult");
      return;
    }

    // com eliminação: elimina o mais votado
    d.alive[acc] = false;
    msgEl.style.display = "";
    const banquinho = `${state.names[acc]}, pegue seu banquinho e saia de fininho!`;

    if (acc === state.impostorIndex) {
      $("vr-icon").textContent = "🎉";
      msgEl.className = "result-msg good";
      msgEl.textContent = `${banquinho} E era o impostor — vocês acertaram!`;
      addBtn("🔍 Revelar impostor", "btn-primary", () => doDrawReveal("grupo"));
    } else {
      const restantes = drawAlive().length;
      if (restantes <= 2) {
        $("vr-icon").textContent = "🕵️";
        msgEl.className = "result-msg bad";
        msgEl.textContent = `${banquinho} Mas não era o impostor… e agora sobraram poucos: o impostor venceu!`;
        addBtn("🔍 Revelar impostor", "btn-rose", () => doDrawReveal("impostor"));
      } else {
        msgEl.className = "result-msg bad";
        msgEl.textContent = `${banquinho} Mas não era o impostor. O jogo continua!`;
        addBtn("🗳️ Nova votação", "btn-primary", () => show("drawDraw"));
        addBtn("🔍 Revelar impostor", "btn-rose", () => doDrawReveal(""));
      }
    }
    show("drawVoteResult");
  }

  // ---------- revelação ----------
  function doDrawReveal(outcome) {
    $("dreveal-name").textContent = state.names[state.impostorIndex];
    $("dreveal-group").textContent = state.groupWord;
    // no modo "impostor não sabe" o impostor não recebe palavra
    $("dreveal-imp").textContent = state.draw.knows ? state.impostorWord : "(não recebeu palavra)";
    const o = $("dreveal-outcome");
    if (outcome === "grupo") o.textContent = "🎉 Os jogadores venceram! O impostor era…";
    else if (outcome === "impostor") o.textContent = "🕵️ O impostor escapou! Era…";
    else o.textContent = "O impostor era…";
    show("drawReveal");
  }
  $("dreveal-newround").onclick = () => startDraw();
  $("dreveal-newgame").onclick = () => show("setup");

  // ---------- utils ----------
  function escapeHtml(s) {
    return s.replace(/[&<>"']/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[c]));
  }

  // init
  renderCount();
