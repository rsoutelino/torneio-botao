/**
 * Copa Meinha de Botao
 * Sistema Operacional do Torneio em Terra Organic Design
 */

// --- PREDEFINICOES DE TORNEIO ---
const PRESETS = {
  meinha: {
    id: "meinha",
    title: "Copa Meinha de Bot\u00e3o",
    subtitle: "Torneio Oficial de Futebol de Bot\u00e3o \u2022 Regras 12 Toques & Dadinho",
    venue: "Est\u00e1dio Maracan\u00e3 de Mesa",
    categoryBadge: "COPA MEINHA",
    teams: {
      "FLA": { id: "FLA", name: "Flamengo", group: "A", crest: "\ud83d\udd34\u26ab", seed: 1 },
      "PAL": { id: "PAL", name: "Palmeiras", group: "A", crest: "\ud83d\udfe2\u26aa", seed: 2 },
      "SAO": { id: "SAO", name: "S\u00e3o Paulo", group: "A", crest: "\ud83d\udd34\u26aa\u26ab", seed: 3 },
      "SAN": { id: "SAN", name: "Santos", group: "A", crest: "\u26aa\u26ab", seed: 4 },
      "COR": { id: "COR", name: "Corinthians", group: "B", crest: "\ud83e\udd85", seed: 1 },
      "VAS": { id: "VAS", name: "Vasco da Gama", group: "B", crest: "\u2693", seed: 2 },
      "FLU": { id: "FLU", name: "Fluminense", group: "B", crest: "\ud83c\udded\ud83c\uddfa", seed: 3 },
      "GRE": { id: "GRE", name: "Gr\u00eamio", group: "B", crest: "\ud83d\udd35\u26aa", seed: 4 }
    },
    defaultFixtures: [
      { id: "A1", group: "A", md: 1, home: "FLA", away: "PAL", homeScore: 3, awayScore: 1, status: "FT", scorers: [{ player: "Zico", team: "FLA", min: 4 }, { player: "Gabigol", team: "FLA", min: 9 }, { player: "Zico", team: "FLA", min: 14 }, { player: "Veiga", team: "PAL", min: 12 }] },
      { id: "A2", group: "A", md: 1, home: "SAO", away: "SAN", homeScore: 2, awayScore: 2, status: "FT", scorers: [{ player: "Calleri", team: "SAO", min: 5 }, { player: "Lucas", team: "SAO", min: 16 }, { player: "Neymar", team: "SAN", min: 7 }, { player: "Pel\u00e9", team: "SAN", min: 18 }] },
      { id: "A3", group: "A", md: 2, home: "FLA", away: "SAO", homeScore: 2, awayScore: 0, status: "FT", scorers: [{ player: "Zico", team: "FLA", min: 8 }, { player: "Pedro", team: "FLA", min: 17 }] },
      { id: "A4", group: "A", md: 2, home: "PAL", away: "SAN", homeScore: 2, awayScore: 1, status: "FT", scorers: [{ player: "Dudu", team: "PAL", min: 6 }, { player: "Veiga", team: "PAL", min: 13 }, { player: "Pel\u00e9", team: "SAN", min: 15 }] },
      { id: "A5", group: "A", md: 3, home: "SAN", away: "FLA", homeScore: 1, awayScore: 3, status: "FT", scorers: [{ player: "Pel\u00e9", team: "SAN", min: 10 }, { player: "Zico", team: "FLA", min: 3 }, { player: "Pedro", team: "FLA", min: 11 }, { player: "Gabigol", team: "FLA", min: 19 }] },
      { id: "A6", group: "A", md: 3, home: "PAL", away: "SAO", homeScore: 2, awayScore: 2, status: "FT", scorers: [{ player: "Veiga", team: "PAL", min: 5 }, { player: "Dudu", team: "PAL", min: 14 }, { player: "Calleri", team: "SAO", min: 8 }, { player: "Lucas", team: "SAO", min: 17 }] },

      { id: "B1", group: "B", md: 1, home: "COR", away: "VAS", homeScore: 2, awayScore: 1, status: "FT", scorers: [{ player: "Neto Craque", team: "COR", min: 4 }, { player: "Neto Craque", team: "COR", min: 15 }, { player: "Dinamite", team: "VAS", min: 9 }] },
      { id: "B2", group: "B", md: 1, home: "FLU", away: "GRE", homeScore: 1, awayScore: 1, status: "FT", scorers: [{ player: "Cano", team: "FLU", min: 11 }, { player: "Renato Ga\u00facho", team: "GRE", min: 18 }] },
      { id: "B3", group: "B", md: 2, home: "COR", away: "FLU", homeScore: 3, awayScore: 1, status: "FT", scorers: [{ player: "Neto Craque", team: "COR", min: 2 }, { player: "Yuri Alberto", team: "COR", min: 12 }, { player: "Neto Craque", team: "COR", min: 19 }, { player: "Cano", team: "FLU", min: 8 }] },
      { id: "B4", group: "B", md: 2, home: "VAS", away: "GRE", homeScore: 2, awayScore: 0, status: "FT", scorers: [{ player: "Dinamite", team: "VAS", min: 7 }, { player: "Rom\u00e1rio", team: "VAS", min: 16 }] },
      { id: "B5", group: "B", md: 3, home: "GRE", away: "COR", homeScore: 1, awayScore: 2, status: "FT", scorers: [{ player: "Renato Ga\u00facho", team: "GRE", min: 10 }, { player: "Neto Craque", team: "COR", min: 6 }, { player: "Yuri Alberto", team: "COR", min: 17 }] },
      { id: "B6", group: "B", md: 3, home: "VAS", away: "FLU", homeScore: 1, awayScore: 1, status: "FT", scorers: [{ player: "Rom\u00e1rio", team: "VAS", min: 12 }, { player: "Cano", team: "FLU", min: 14 }] }
    ],
    defaultKnockout: {
      sf1: { score1: 2, score2: 1, pkWinner: null, decided: true },
      sf2: { score1: 3, score2: 2, pkWinner: null, decided: true },
      fn:  { score1: 3, score2: 1, pkWinner: null, decided: true },
      third: { score1: 1, score2: 2, pkWinner: null, decided: true }
    }
  },
  meinha_euro: {
    id: "meinha_euro",
    title: "Copa Meinha Internacional",
    subtitle: "Torneio de Futebol de Bot\u00e3o com os Gigantes da Europa",
    venue: "Allianz Arena de Mesa",
    categoryBadge: "EURO MEINHA",
    teams: {
      "RMA": { id: "RMA", name: "Real Madrid", group: "A", crest: "\ud83d\udc51", seed: 1 },
      "MCI": { id: "MCI", name: "Manchester City", group: "A", crest: "\ud83d\udd35", seed: 2 },
      "PSG": { id: "PSG", name: "Paris SG", group: "A", crest: "\ud83d\udfe3", seed: 3 },
      "AJX": { id: "AJX", name: "Ajax", group: "A", crest: "\u26aa", seed: 4 },
      "BAY": { id: "BAY", name: "Bayern Munique", group: "B", crest: "\ud83d\udd34", seed: 1 },
      "MIL": { id: "MIL", name: "Milan", group: "B", crest: "\u26ab", seed: 2 },
      "POR": { id: "POR", name: "Porto", group: "B", crest: "\ud83d\udc09", seed: 3 },
      "BVB": { id: "BVB", name: "Borussia Dortmund", group: "B", crest: "\ud83d\udfe1", seed: 4 }
    },
    defaultFixtures: [
      { id: "A1", group: "A", md: 1, home: "RMA", away: "MCI", homeScore: 3, awayScore: 1, status: "FT", scorers: [{ player: "Vini Jr", team: "RMA", min: 4 }, { player: "Bellingham", team: "RMA", min: 14 }] },
      { id: "A2", group: "A", md: 1, home: "PSG", away: "AJX", homeScore: 2, awayScore: 2, status: "FT", scorers: [{ player: "Mbapp\u00e9", team: "PSG", min: 5 }] },
      { id: "A3", group: "A", md: 2, home: "RMA", away: "PSG", homeScore: 2, awayScore: 0, status: "FT", scorers: [{ player: "Vini Jr", team: "RMA", min: 12 }] },
      { id: "A4", group: "A", md: 2, home: "MCI", away: "AJX", homeScore: 2, awayScore: 1, status: "FT", scorers: [{ player: "Haaland", team: "MCI", min: 7 }] },
      { id: "A5", group: "A", md: 3, home: "AJX", away: "RMA", homeScore: 1, awayScore: 3, status: "FT", scorers: [{ player: "Rodrygo", team: "RMA", min: 18 }] },
      { id: "A6", group: "A", md: 3, home: "MCI", away: "PSG", homeScore: 2, awayScore: 2, status: "FT", scorers: [{ player: "Haaland", team: "MCI", min: 9 }] },

      { id: "B1", group: "B", md: 1, home: "BAY", away: "MIL", homeScore: 2, awayScore: 1, status: "FT", scorers: [{ player: "Kane", team: "BAY", min: 11 }] },
      { id: "B2", group: "B", md: 1, home: "POR", away: "BVB", homeScore: 1, awayScore: 1, status: "FT", scorers: [{ player: "Reus", team: "BVB", min: 15 }] },
      { id: "B3", group: "B", md: 2, home: "BAY", away: "POR", homeScore: 3, awayScore: 1, status: "FT", scorers: [{ player: "Kane", team: "BAY", min: 8 }] },
      { id: "B4", group: "B", md: 2, home: "MIL", away: "BVB", homeScore: 2, awayScore: 0, status: "FT", scorers: [{ player: "Le\u00e3o", team: "MIL", min: 13 }] },
      { id: "B5", group: "B", md: 3, home: "BVB", away: "BAY", homeScore: 1, awayScore: 2, status: "FT", scorers: [{ player: "Kane", team: "BAY", min: 16 }] },
      { id: "B6", group: "B", md: 3, home: "MIL", away: "POR", homeScore: 1, awayScore: 1, status: "FT", scorers: [{ player: "Giroud", team: "MIL", min: 14 }] }
    ],
    defaultKnockout: {
      sf1: { score1: 2, score2: 1, pkWinner: null, decided: true },
      sf2: { score1: 3, score2: 2, pkWinner: null, decided: true },
      fn:  { score1: 3, score2: 1, pkWinner: null, decided: true },
      third: { score1: 1, score2: 2, pkWinner: null, decided: true }
    }
  }
};

// --- ESTADO DA APLICACAO ---
const STORAGE_KEY = "copa_meinha_state_v3";

let state = {
  currentPreset: "meinha",
  title: PRESETS.meinha.title,
  subtitle: PRESETS.meinha.subtitle,
  venue: PRESETS.meinha.venue,
  categoryBadge: PRESETS.meinha.categoryBadge,
  teams: JSON.parse(JSON.stringify(PRESETS.meinha.teams)),
  fixtures: JSON.parse(JSON.stringify(PRESETS.meinha.defaultFixtures)),
  knockout: JSON.parse(JSON.stringify(PRESETS.meinha.defaultKnockout)),
  timerSettings: {
    halfMinutes: 10,
    allowExtraTime: true
  }
};

// Carregar estado salvo do LocalStorage
function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      state = Object.assign(state, parsed);
    }
  } catch (err) {
    console.warn("N\u00e3o foi poss\u00edvel ler o estado salvo:", err);
  }
}

// Salvar estado no LocalStorage
function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (err) {
    console.error("Falha ao salvar estado no localStorage:", err);
  }
}

// --- CALCULO DA TABELA DE CLASSIFICACAO ---
function computeStandings(groupLetter) {
  const groupTeamIds = Object.keys(state.teams).filter(id => state.teams[id].group === groupLetter);
  const table = {};

  groupTeamIds.forEach(id => {
    table[id] = {
      id: id,
      name: state.teams[id].name,
      crest: state.teams[id].crest,
      p: 0,
      w: 0,
      d: 0,
      l: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      pts: 0
    };
  });

  state.fixtures.filter(f => f.group === groupLetter).forEach(f => {
    if (f.status === "FT" || (f.homeScore > 0 || f.awayScore > 0)) {
      const h = table[f.home];
      const a = table[f.away];
      if (!h || !a) return;

      h.p++;
      a.p++;
      h.gf += f.homeScore;
      h.ga += f.awayScore;
      a.gf += f.awayScore;
      a.ga += f.homeScore;

      if (f.homeScore > f.awayScore) {
        h.w++;
        h.pts += 3;
        a.l++;
      } else if (f.homeScore < f.awayScore) {
        a.w++;
        a.pts += 3;
        h.l++;
      } else {
        h.d++;
        a.d++;
        h.pts += 1;
        a.pts += 1;
      }
    }
  });

  Object.values(table).forEach(row => {
    row.gd = row.gf - row.ga;
  });

  // Ordenacao: Pontos (PTS) desc -> Saldo de Gols (GD) desc -> Gols Pro (GF) desc -> Alfabetica
  return Object.values(table).sort((x, y) => {
    if (y.pts !== x.pts) return y.pts - x.pts;
    if (y.gd !== x.gd) return y.gd - x.gd;
    if (y.gf !== x.gf) return y.gf - x.gf;
    return x.name.localeCompare(y.name);
  });
}

// --- RENDERIZACAO DA INTERFACE ---
function renderHeaderAndTelemetry() {
  const titleEl = document.getElementById("app-title");
  if (titleEl) titleEl.textContent = state.title;

  const subtitleEl = document.getElementById("app-subtitle");
  if (subtitleEl) subtitleEl.textContent = state.subtitle;

  const badgeEl = document.getElementById("app-badge");
  if (badgeEl) badgeEl.textContent = state.categoryBadge;

  const venueEl = document.getElementById("stat-venue");
  if (venueEl) venueEl.textContent = state.venue;

  // Calculo de partidas encerradas e total de gols
  let finishedCount = 0;
  let totalGoals = 0;

  state.fixtures.forEach(f => {
    if (f.status === "FT" || f.homeScore > 0 || f.awayScore > 0) {
      finishedCount++;
    }
    totalGoals += (f.homeScore + f.awayScore);
  });

  // Gols do mata-mata
  ['sf1', 'sf2', 'fn', 'third'].forEach(k => {
    if (state.knockout[k]) {
      totalGoals += (state.knockout[k].score1 + state.knockout[k].score2);
      finishedCount++;
    }
  });

  const totalPossible = state.fixtures.length + 4;
  const progressText = document.getElementById("stat-progress-text");
  if (progressText) progressText.textContent = `${finishedCount}/${totalPossible}`;

  const goalsEl = document.getElementById("stat-total-goals");
  if (goalsEl) goalsEl.textContent = totalGoals;

  const avgGoalsEl = document.getElementById("stat-avg-goals");
  if (avgGoalsEl) {
    const avg = finishedCount > 0 ? (totalGoals / finishedCount).toFixed(2) : "0.00";
    avgGoalsEl.textContent = `${avg} M\u00e9dia / Jogo`;
  }

  // Lider geral
  const standA = computeStandings('A');
  const standB = computeStandings('B');
  let topCandidate = "Em andamento";
  if (standB.length > 0 && standA.length > 0) {
    topCandidate = (standB[0].pts >= standA[0].pts) ? standB[0].name : standA[0].name;
  }
  const topCandidateEl = document.getElementById("stat-top-candidate");
  if (topCandidateEl) topCandidateEl.textContent = topCandidate;
}

// Renderizar tabelas dos Grupos A e B
function renderTables() {
  ['A', 'B'].forEach(group => {
    const standings = computeStandings(group);
    const tbody = document.getElementById(`table-group-${group.toLowerCase()}`);
    if (!tbody) return;

    tbody.innerHTML = "";
    standings.forEach((row, idx) => {
      const isTop2 = idx < 2;
      const tr = document.createElement("tr");
      tr.className = `hover:bg-surface-container transition-colors ${isTop2 ? 'bg-primary/5 font-semibold' : ''}`;

      const posIndicator = isTop2
        ? `<span class="w-2 h-2 rounded-full bg-primary inline-block"></span>`
        : `<span class="w-1.5 h-1.5 rounded-full bg-outline-variant inline-block"></span>`;

      tr.innerHTML = `
        <td class="py-2.5 px-3 text-center font-bold flex items-center justify-center gap-1.5">
          ${posIndicator}
          <span class="${isTop2 ? 'text-primary' : 'text-outline'}">${idx + 1}</span>
        </td>
        <td class="py-2.5 px-3">
          <div class="flex items-center gap-2">
            <span class="text-[16px]">${row.crest}</span>
            <span class="font-bold text-on-surface truncate max-w-[130px] sm:max-w-none ${isTop2 ? 'text-primary' : ''}">${row.name}</span>
            ${isTop2 ? '<span class="hidden md:inline text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed-variant border border-primary/20">Classificado</span>' : ''}
          </div>
        </td>
        <td class="py-2.5 px-2 text-center text-on-surface-variant">${row.p}</td>
        <td class="py-2.5 px-2 text-center text-on-surface font-semibold">${row.w}</td>
        <td class="py-2.5 px-2 text-center text-on-surface-variant">${row.d}</td>
        <td class="py-2.5 px-2 text-center text-on-surface-variant">${row.l}</td>
        <td class="py-2.5 px-2 text-center text-on-surface-variant">${row.gf}</td>
        <td class="py-2.5 px-2 text-center text-on-surface-variant">${row.ga}</td>
        <td class="py-2.5 px-2 text-center font-bold ${row.gd > 0 ? 'text-primary' : row.gd < 0 ? 'text-error' : 'text-outline'}">${row.gd > 0 ? '+' + row.gd : row.gd}</td>
        <td class="py-2.5 px-3 text-center text-primary font-bold bg-primary/10 rounded-lg">${row.pts}</td>
      `;
      tbody.appendChild(tr);
    });
  });
}

// Renderizar confrontos e botoes de placar
function renderFixtures() {
  ['A', 'B'].forEach(group => {
    const container = document.getElementById(`fixtures-group-${group.toLowerCase()}`);
    if (!container) return;

    const groupFixtures = state.fixtures.filter(f => f.group === group);
    container.innerHTML = "";

    groupFixtures.forEach(fix => {
      const homeTeam = state.teams[fix.home] || { name: fix.home, crest: "\u26aa" };
      const awayTeam = state.teams[fix.away] || { name: fix.away, crest: "\u26aa" };

      const card = document.createElement("div");
      card.className = "p-3 rounded-xl bg-surface-container-low border border-outline-variant/60 flex items-center justify-between hover:border-primary/40 transition-all";
      card.innerHTML = `
        <!-- Time Mandante -->
        <div class="flex items-center gap-2 w-5/12 justify-end cursor-pointer" onclick="openMatchModal('${fix.id}')" title="Clique para abrir a s\u00famula e registrar gols">
          <span class="font-bold text-xs md:text-sm text-on-surface text-right truncate">${homeTeam.name}</span>
          <span class="text-[18px]">${homeTeam.crest}</span>
        </div>

        <!-- Botoes de Placar -->
        <div class="flex items-center gap-2 mx-2">
          <div class="flex items-center bg-surface-container-lowest rounded-xl border border-outline-variant/60 p-1 shadow-inner">
            <button onclick="changeFixtureScore('${fix.id}', 'home', -1)" aria-label="Diminuir placar mandante" class="w-5 h-5 rounded-lg hover:bg-surface-container flex items-center justify-center font-bold text-xs text-on-surface-variant active:scale-90 transition-transform">-</button>
            <span class="w-6 text-center font-bold text-primary text-sm cursor-pointer" onclick="openMatchModal('${fix.id}')" title="Ver S\u00famula">${fix.homeScore}</span>
            <button onclick="changeFixtureScore('${fix.id}', 'home', 1)" aria-label="Aumentar placar mandante" class="w-5 h-5 rounded-lg hover:bg-surface-container flex items-center justify-center font-bold text-xs text-on-surface-variant active:scale-90 transition-transform">+</button>
          </div>

          <span class="text-xs font-bold text-outline cursor-pointer" onclick="openMatchModal('${fix.id}')" title="S\u00famula">X</span>

          <div class="flex items-center bg-surface-container-lowest rounded-xl border border-outline-variant/60 p-1 shadow-inner">
            <button onclick="changeFixtureScore('${fix.id}', 'away', -1)" aria-label="Diminuir placar visitante" class="w-5 h-5 rounded-lg hover:bg-surface-container flex items-center justify-center font-bold text-xs text-on-surface-variant active:scale-90 transition-transform">-</button>
            <span class="w-6 text-center font-bold text-primary text-sm cursor-pointer" onclick="openMatchModal('${fix.id}')" title="Ver S\u00famula">${fix.awayScore}</span>
            <button onclick="changeFixtureScore('${fix.id}', 'away', 1)" aria-label="Aumentar placar visitante" class="w-5 h-5 rounded-lg hover:bg-surface-container flex items-center justify-center font-bold text-xs text-on-surface-variant active:scale-90 transition-transform">+</button>
          </div>
        </div>

        <!-- Time Visitante -->
        <div class="flex items-center gap-2 w-5/12 justify-start cursor-pointer" onclick="openMatchModal('${fix.id}')" title="Clique para abrir a s\u00famula e registrar gols">
          <span class="text-[18px]">${awayTeam.crest}</span>
          <span class="font-bold text-xs md:text-sm text-on-surface text-left truncate">${awayTeam.name}</span>
        </div>
      `;
      container.appendChild(card);
    });
  });
}

function changeFixtureScore(fixtureId, side, delta) {
  const fix = state.fixtures.find(f => f.id === fixtureId);
  if (!fix) return;

  if (side === 'home') {
    fix.homeScore = Math.max(0, fix.homeScore + delta);
  } else {
    fix.awayScore = Math.max(0, fix.awayScore + delta);
  }
  fix.status = "FT";

  updateAll();
  saveState();
}

// --- LOGICA DO MATA-MATA (CHAVEAMENTO AUTOMATICO) ---
function updateBracket() {
  const standA = computeStandings('A');
  const standB = computeStandings('B');

  const winnerA = standA[0] || { name: "1\u00ba do Grupo A", crest: "\u26aa" };
  const runnerA = standA[1] || { name: "2\u00ba do Grupo A", crest: "\u26aa" };
  const winnerB = standB[0] || { name: "1\u00ba do Grupo B", crest: "\u26aa" };
  const runnerB = standB[1] || { name: "2\u00ba do Grupo B", crest: "\u26aa" };

  // SF1: 1o Grupo A x 2o Grupo B
  setElementText('name-sf1-team1', winnerA.name);
  setElementText('crest-sf1-team1', winnerA.crest);
  setElementText('score-sf1-team1', state.knockout.sf1.score1);

  setElementText('name-sf1-team2', runnerB.name);
  setElementText('crest-sf1-team2', runnerB.crest);
  setElementText('score-sf1-team2', state.knockout.sf1.score2);

  // SF2: 1o Grupo B x 2o Grupo A
  setElementText('name-sf2-team1', winnerB.name);
  setElementText('crest-sf2-team1', winnerB.crest);
  setElementText('score-sf2-team1', state.knockout.sf2.score1);

  setElementText('name-sf2-team2', runnerA.name);
  setElementText('crest-sf2-team2', runnerA.crest);
  setElementText('score-sf2-team2', state.knockout.sf2.score2);

  // Definicao da SF1
  let sf1Winner, sf1Loser;
  if (state.knockout.sf1.score1 > state.knockout.sf1.score2) {
    sf1Winner = winnerA;
    sf1Loser = runnerB;
    setElementText('winner-tag-sf1', `Classificado: ${winnerA.name}`);
  } else if (state.knockout.sf1.score2 > state.knockout.sf1.score1) {
    sf1Winner = runnerB;
    sf1Loser = winnerA;
    setElementText('winner-tag-sf1', `Classificado: ${runnerB.name}`);
  } else {
    if (state.knockout.sf1.pkWinner === 2) {
      sf1Winner = runnerB;
      sf1Loser = winnerA;
      setElementText('winner-tag-sf1', `Classificado (P\u00eanaltis): ${runnerB.name}`);
    } else {
      sf1Winner = winnerA;
      sf1Loser = runnerB;
      setElementText('winner-tag-sf1', `Classificado (P\u00eanaltis): ${winnerA.name}`);
    }
  }

  // Definicao da SF2
  let sf2Winner, sf2Loser;
  if (state.knockout.sf2.score1 > state.knockout.sf2.score2) {
    sf2Winner = winnerB;
    sf2Loser = runnerA;
    setElementText('winner-tag-sf2', `Classificado: ${winnerB.name}`);
  } else if (state.knockout.sf2.score2 > state.knockout.sf2.score1) {
    sf2Winner = runnerA;
    sf2Loser = winnerB;
    setElementText('winner-tag-sf2', `Classificado: ${runnerA.name}`);
  } else {
    if (state.knockout.sf2.pkWinner === 2) {
      sf2Winner = runnerA;
      sf2Loser = winnerB;
      setElementText('winner-tag-sf2', `Classificado (P\u00eanaltis): ${runnerA.name}`);
    } else {
      sf2Winner = winnerB;
      sf2Loser = runnerA;
      setElementText('winner-tag-sf2', `Classificado (P\u00eanaltis): ${winnerB.name}`);
    }
  }

  // Grande Final
  setElementText('name-fn-team1', sf1Winner.name);
  setElementText('crest-fn-team1', sf1Winner.crest);
  setElementText('score-fn-team1', state.knockout.fn.score1);

  setElementText('name-fn-team2', sf2Winner.name);
  setElementText('crest-fn-team2', sf2Winner.crest);
  setElementText('score-fn-team2', state.knockout.fn.score2);

  // Decisao de 3o Lugar
  setElementText('name-third-team1', sf1Loser.name);
  setElementText('crest-third-team1', sf1Loser.crest);
  setElementText('score-third-team1', state.knockout.third.score1);

  setElementText('name-third-team2', sf2Loser.name);
  setElementText('crest-third-team2', sf2Loser.crest);
  setElementText('score-third-team2', state.knockout.third.score2);

  // Campeao
  let champion;
  if (state.knockout.fn.score1 > state.knockout.fn.score2) {
    champion = sf1Winner;
    setElementText('winner-tag-fn', `Campe\u00e3o: ${sf1Winner.name}`);
  } else if (state.knockout.fn.score2 > state.knockout.fn.score1) {
    champion = sf2Winner;
    setElementText('winner-tag-fn', `Campe\u00e3o: ${sf2Winner.name}`);
  } else {
    if (state.knockout.fn.pkWinner === 2) {
      champion = sf2Winner;
      setElementText('winner-tag-fn', `Campe\u00e3o (P\u00eanaltis): ${sf2Winner.name}`);
    } else {
      champion = sf1Winner;
      setElementText('winner-tag-fn', `Campe\u00e3o (P\u00eanaltis): ${sf1Winner.name}`);
    }
  }

  // 3o Colocado
  if (state.knockout.third.score1 >= state.knockout.third.score2) {
    setElementText('winner-tag-third', `3\u00ba Lugar: ${sf1Loser.name}`);
  } else {
    setElementText('winner-tag-third', `3\u00ba Lugar: ${sf2Loser.name}`);
  }

  // Banner do Campeao
  const banner = document.getElementById('champion-banner');
  if (banner && champion) {
    banner.classList.remove('hidden');
    setElementText('champion-team-name', champion.name);
    setElementText('champion-subtext', `T\u00edtulo conquistado com garra no futebol de bot\u00e3o pelo time ${champion.crest} ${champion.name} no ${state.venue}!`);
  }
}

function setElementText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

function updateKoScore(matchKey, teamIndex, delta) {
  if (!state.knockout[matchKey]) return;
  if (teamIndex === 1) {
    state.knockout[matchKey].score1 = Math.max(0, state.knockout[matchKey].score1 + delta);
  } else {
    state.knockout[matchKey].score2 = Math.max(0, state.knockout[matchKey].score2 + delta);
  }
  updateAll();
  saveState();
}

function toggleKoTieBreak(matchKey) {
  if (!state.knockout[matchKey]) return;
  if (state.knockout[matchKey].pkWinner === 2) {
    state.knockout[matchKey].pkWinner = 1;
  } else {
    state.knockout[matchKey].pkWinner = 2;
  }
  updateAll();
  saveState();
}

// --- ARTILHARIA & ESTATISTICAS DINAMICAS ---
function updateTelemetryAndStats() {
  const playerGoals = {};

  state.fixtures.forEach(f => {
    if (Array.isArray(f.scorers)) {
      f.scorers.forEach(s => {
        const key = `${s.player}:::${s.team}`;
        playerGoals[key] = (playerGoals[key] || 0) + 1;
      });
    }
  });

  const sortedScorers = Object.entries(playerGoals)
    .map(([key, goals]) => {
      const [player, teamId] = key.split(":::");
      const teamObj = state.teams[teamId] || { name: teamId };
      return { player, teamName: teamObj.name, goals };
    })
    .sort((a, b) => b.goals - a.goals);

  // Renderizar os 3 principais artilheiros
  const goldenBootContainer = document.getElementById('golden-boot-list');
  if (goldenBootContainer) {
    goldenBootContainer.innerHTML = "";

    const displayScorers = sortedScorers.length > 0 ? sortedScorers.slice(0, 3) : [
      { player: "Zico", teamName: "Flamengo", goals: 5 },
      { player: "Neto Craque", teamName: "Corinthians", goals: 4 },
      { player: "Pel\u00e9", teamName: "Santos", goals: 3 }
    ];

    const rankBorderColors = ["border-tertiary", "border-primary", "border-outline-variant"];
    const rankTextColors = ["text-tertiary", "text-primary", "text-on-surface"];

    displayScorers.forEach((item, idx) => {
      const div = document.createElement("div");
      div.className = `flex items-center justify-between p-2.5 rounded-xl bg-surface-container-low border-l-4 ${rankBorderColors[idx] || 'border-outline-variant'}`;
      div.innerHTML = `
        <div class="flex items-center gap-2.5">
          <span class="font-bold ${rankTextColors[idx] || 'text-on-surface'} text-sm">${idx + 1}</span>
          <div>
            <span class="text-on-surface font-bold text-sm block">${item.player}</span>
            <span class="text-xs text-on-surface-variant">${item.teamName}</span>
          </div>
        </div>
        <span class="font-headline font-bold text-lg ${rankTextColors[idx] || 'text-on-surface'}">${item.goals}</span>
      `;
      goldenBootContainer.appendChild(div);
    });
  }

  // Eficiencia ofensiva calculada dinamicamente
  const standAll = [...computeStandings('A'), ...computeStandings('B')].sort((a, b) => b.gf - a.gf);
  const offensiveContainer = document.getElementById('offensive-ratings-list');
  if (offensiveContainer && standAll.length >= 3) {
    offensiveContainer.innerHTML = "";
    const top3Teams = standAll.slice(0, 3);
    const maxGf = Math.max(1, top3Teams[0].gf);

    top3Teams.forEach((t, i) => {
      const pct = Math.round((t.gf / maxGf) * 92);
      const estXg = (t.p > 0 ? (t.gf / t.p * 1.05).toFixed(2) : "1.00");
      const colorClass = i === 0 ? "bg-primary" : i === 1 ? "bg-tertiary" : "bg-secondary";
      const textClass = i === 0 ? "text-primary font-bold" : i === 1 ? "text-tertiary font-bold" : "text-on-surface-variant font-bold";

      const row = document.createElement("div");
      row.className = "space-y-1.5";
      row.innerHTML = `
        <div class="flex justify-between text-xs font-semibold">
          <span class="text-on-surface flex items-center gap-1.5"><span>${t.crest}</span> ${t.name}</span>
          <span class="${textClass}">${estXg} Gols/Jogo</span>
        </div>
        <div class="w-full h-2.5 rounded-full bg-surface-container overflow-hidden">
          <div class="h-full ${colorClass} rounded-full" style="width: ${Math.max(15, pct)}%"></div>
        </div>
      `;
      offensiveContainer.appendChild(row);
    });
  }
}

// --- SIMULACAO & SORTEIO DE RESULTADOS ---
function simulateAllMatches() {
  state.fixtures.forEach(fix => {
    fix.homeScore = Math.floor(Math.random() * 4);
    fix.awayScore = Math.floor(Math.random() * 3);
    fix.status = "FT";
  });

  state.knockout.sf1.score1 = Math.floor(Math.random() * 4) + 1;
  state.knockout.sf1.score2 = Math.floor(Math.random() * 3);
  state.knockout.sf2.score1 = Math.floor(Math.random() * 3);
  state.knockout.sf2.score2 = Math.floor(Math.random() * 4) + 1;

  state.knockout.fn.score1 = Math.floor(Math.random() * 3) + 1;
  state.knockout.fn.score2 = Math.floor(Math.random() * 3);

  state.knockout.third.score1 = Math.floor(Math.random() * 3);
  state.knockout.third.score2 = Math.floor(Math.random() * 3);

  updateAll();
  saveState();
  showToast("Placares simulados para todas as fases!");
}

function randomizeCurrentScores() {
  state.fixtures.forEach(fix => {
    fix.homeScore = Math.floor(Math.random() * 4);
    fix.awayScore = Math.floor(Math.random() * 3);
    fix.status = "FT";
  });
  updateAll();
  saveState();
  showToast("Resultados da rodada sorteados!");
}

function resetTournament() {
  if (!confirm("Tem certeza de que deseja zerar todos os placares do torneio para 0 a 0?")) {
    return;
  }
  state.fixtures.forEach(fix => {
    fix.homeScore = 0;
    fix.awayScore = 0;
    fix.scorers = [];
  });

  state.knockout.sf1 = { score1: 0, score2: 0, pkWinner: null, decided: false };
  state.knockout.sf2 = { score1: 0, score2: 0, pkWinner: null, decided: false };
  state.knockout.fn  = { score1: 0, score2: 0, pkWinner: null, decided: false };
  state.knockout.third = { score1: 0, score2: 0, pkWinner: null, decided: false };

  updateAll();
  saveState();
  showToast("Torneio reiniciado para 0 a 0.");
}

// --- TROCA DE PREDEFINICOES ---
function applyPreset(presetId) {
  const preset = PRESETS[presetId];
  if (!preset) return;

  state.currentPreset = presetId;
  state.title = preset.title;
  state.subtitle = preset.subtitle;
  state.venue = preset.venue;
  state.categoryBadge = preset.categoryBadge;
  state.teams = JSON.parse(JSON.stringify(preset.teams));
  state.fixtures = JSON.parse(JSON.stringify(preset.defaultFixtures));
  state.knockout = JSON.parse(JSON.stringify(preset.defaultKnockout));

  updateAll();
  saveState();
  showToast(`Predefini\u00e7\u00e3o ativada: ${preset.title}`);
}

// --- MODAL DA SUMULA & ARTILHEIROS ---
let currentModalMatchId = null;

function openMatchModal(fixtureId) {
  currentModalMatchId = fixtureId;
  const fix = state.fixtures.find(f => f.id === fixtureId);
  if (!fix) return;

  const home = state.teams[fix.home] || { name: fix.home, crest: "\u26aa" };
  const away = state.teams[fix.away] || { name: fix.away, crest: "\u26aa" };

  document.getElementById("modal-match-title").textContent = `Rodada ${fix.md} \u2022 Grupo ${fix.group}`;
  document.getElementById("modal-home-crest").textContent = home.crest;
  document.getElementById("modal-home-name").textContent = home.name;
  document.getElementById("modal-away-crest").textContent = away.crest;
  document.getElementById("modal-away-name").textContent = away.name;

  const homeScoreInput = document.getElementById("modal-home-score");
  const awayScoreInput = document.getElementById("modal-away-score");
  if (homeScoreInput) homeScoreInput.value = fix.homeScore;
  if (awayScoreInput) awayScoreInput.value = fix.awayScore;

  const teamSelect = document.getElementById("select-scorer-team");
  if (teamSelect) {
    teamSelect.innerHTML = `
      <option value="${fix.home}">${home.name}</option>
      <option value="${fix.away}">${away.name}</option>
    `;
  }

  renderModalScorers(fix);

  const dialog = document.getElementById("match-modal");
  if (dialog) dialog.showModal();
}

function renderModalScorers(fix) {
  const list = document.getElementById("modal-scorers-list");
  if (!list) return;
  list.innerHTML = "";

  if (!Array.isArray(fix.scorers) || fix.scorers.length === 0) {
    list.innerHTML = `<li class="text-xs text-on-surface-variant italic py-2">Nenhum gol individual registrado ainda.</li>`;
    return;
  }

  fix.scorers.forEach((s, idx) => {
    const li = document.createElement("li");
    li.className = "flex items-center justify-between py-1.5 px-3 rounded-lg bg-surface-container-low text-xs";
    li.innerHTML = `
      <div class="flex items-center gap-2">
        <span class="material-symbols-outlined text-[14px] text-primary">sports_soccer</span>
        <span class="font-bold">${s.player}</span>
        <span class="text-outline">(${s.min}')</span>
        <span class="text-on-surface-variant text-[11px] font-semibold">[${s.team}]</span>
      </div>
      <button onclick="removeScorer(${idx})" class="text-error hover:opacity-80 p-1 text-xs" title="Remover gol">\u2715</button>
    `;
    list.appendChild(li);
  });
}

function addScorerFromModal() {
  if (!currentModalMatchId) return;
  const fix = state.fixtures.find(f => f.id === currentModalMatchId);
  if (!fix) return;

  const playerInput = document.getElementById("input-scorer-player");
  const minInput = document.getElementById("input-scorer-minute");
  const teamSelect = document.getElementById("select-scorer-team");

  const player = playerInput ? playerInput.value.trim() : "";
  const min = minInput ? parseInt(minInput.value, 10) || 1 : 1;
  const team = teamSelect ? teamSelect.value : fix.home;

  if (!player) {
    alert("Digite o nome do jogador ou bot\u00e3o que marcou o gol.");
    return;
  }

  if (!Array.isArray(fix.scorers)) fix.scorers = [];
  fix.scorers.push({ player, min, team });

  if (playerInput) playerInput.value = "";
  renderModalScorers(fix);
  updateAll();
  saveState();
}

function removeScorer(idx) {
  if (!currentModalMatchId) return;
  const fix = state.fixtures.find(f => f.id === currentModalMatchId);
  if (!fix || !Array.isArray(fix.scorers)) return;

  fix.scorers.splice(idx, 1);
  renderModalScorers(fix);
  updateAll();
  saveState();
}

function saveMatchModal() {
  if (!currentModalMatchId) return;
  const fix = state.fixtures.find(f => f.id === currentModalMatchId);
  if (!fix) return;

  const homeScoreInput = document.getElementById("modal-home-score");
  const awayScoreInput = document.getElementById("modal-away-score");

  if (homeScoreInput) fix.homeScore = Math.max(0, parseInt(homeScoreInput.value, 10) || 0);
  if (awayScoreInput) fix.awayScore = Math.max(0, parseInt(awayScoreInput.value, 10) || 0);
  fix.status = "FT";

  updateAll();
  saveState();
  closeMatchModal();
}

function closeMatchModal() {
  const dialog = document.getElementById("match-modal");
  if (dialog) dialog.close();
  currentModalMatchId = null;
}

// --- MODAL DE GERENCIAMENTO DE TIMES ---
function openTeamManagerModal() {
  const container = document.getElementById("team-manager-list");
  if (!container) return;
  container.innerHTML = "";

  Object.values(state.teams).forEach(t => {
    const row = document.createElement("div");
    row.className = "flex items-center gap-3 p-2 rounded-xl bg-surface-container-low border border-outline-variant/60";
    row.innerHTML = `
      <input type="text" value="${t.crest}" id="edit-crest-${t.id}" class="w-12 text-center text-lg bg-surface-container-lowest rounded-lg border border-outline-variant/60 py-1" title="Escudo / Emoji">
      <input type="text" value="${t.name}" id="edit-name-${t.id}" class="flex-1 px-3 py-1.5 text-sm font-bold bg-surface-container-lowest rounded-lg border border-outline-variant/60">
      <span class="text-xs font-bold text-outline uppercase px-2 py-1 bg-surface-container rounded-lg">Grupo ${t.group}</span>
    `;
    container.appendChild(row);
  });

  const dialog = document.getElementById("team-modal");
  if (dialog) dialog.showModal();
}

function saveTeamManagerModal() {
  Object.keys(state.teams).forEach(id => {
    const nameInput = document.getElementById(`edit-name-${id}`);
    const crestInput = document.getElementById(`edit-crest-${id}`);
    if (nameInput && nameInput.value.trim()) {
      state.teams[id].name = nameInput.value.trim();
    }
    if (crestInput && crestInput.value.trim()) {
      state.teams[id].crest = crestInput.value.trim();
    }
  });

  updateAll();
  saveState();
  closeTeamModal();
  showToast("Nomes e escudos dos times atualizados!");
}

function closeTeamModal() {
  const dialog = document.getElementById("team-modal");
  if (dialog) dialog.close();
}

// --- MODAL DE CONFIGURACOES & BACKUP ---
function openSettingsModal() {
  const titleInput = document.getElementById("settings-title");
  const subtitleInput = document.getElementById("settings-subtitle");
  const venueInput = document.getElementById("settings-venue");
  const presetSelect = document.getElementById("settings-preset");

  if (titleInput) titleInput.value = state.title;
  if (subtitleInput) subtitleInput.value = state.subtitle;
  if (venueInput) venueInput.value = state.venue;
  if (presetSelect) presetSelect.value = state.currentPreset;

  const dialog = document.getElementById("settings-modal");
  if (dialog) dialog.showModal();
}

function saveSettingsModal() {
  const titleInput = document.getElementById("settings-title");
  const subtitleInput = document.getElementById("settings-subtitle");
  const venueInput = document.getElementById("settings-venue");

  if (titleInput && titleInput.value.trim()) state.title = titleInput.value.trim();
  if (subtitleInput && subtitleInput.value.trim()) state.subtitle = subtitleInput.value.trim();
  if (venueInput && venueInput.value.trim()) state.venue = venueInput.value.trim();

  updateAll();
  saveState();
  closeSettingsModal();
  showToast("Configura\u00e7\u00f5es do torneio salvas.");
}

function closeSettingsModal() {
  const dialog = document.getElementById("settings-modal");
  if (dialog) dialog.close();
}

// --- EXPORTAR E RESTAURAR BACKUP ---
function exportTournamentData() {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state, null, 2));
  const downloadAnchor = document.createElement("a");
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", `copa-meinha-${Date.now()}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
  showToast("Backup JSON da Copa Meinha exportado!");
}

function importTournamentData(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const imported = JSON.parse(e.target.result);
      if (imported && imported.teams && imported.fixtures) {
        state = imported;
        updateAll();
        saveState();
        showToast("Backup restaurado com sucesso!");
        closeSettingsModal();
      } else {
        alert("Estrutura do arquivo de backup inv\u00e1lida.");
      }
    } catch (err) {
      alert("Erro ao ler o arquivo de backup: " + err.message);
    }
  };
  reader.readAsText(file);
}

// --- APITO SINTETIZADO DO ARBITRO VIA WEB AUDIO API ---
class WhistleSound {
  constructor() {
    this.ctx = null;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playBlow(duration = 0.5) {
    try {
      this.init();
      const now = this.ctx.currentTime;

      // Dois osciladores combinados para som caracteristico de apito de juiz
      const osc1 = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      const gainNode = this.ctx.createGain();

      osc1.type = "sine";
      osc1.frequency.setValueAtTime(2850, now);
      osc1.frequency.exponentialRampToValueAtTime(3100, now + 0.05);
      osc1.frequency.exponentialRampToValueAtTime(2950, now + duration);

      osc2.type = "sine";
      osc2.frequency.setValueAtTime(3250, now);
      osc2.frequency.exponentialRampToValueAtTime(3400, now + 0.05);
      osc2.frequency.exponentialRampToValueAtTime(3300, now + duration);

      gainNode.gain.setValueAtTime(0, now);
      gainNode.gain.linearRampToValueAtTime(0.35, now + 0.03);
      gainNode.gain.exponentialRampToValueAtTime(0.001, now + duration);

      osc1.connect(gainNode);
      osc2.connect(gainNode);
      gainNode.connect(this.ctx.destination);

      osc1.start(now);
      osc2.start(now);
      osc1.stop(now + duration);
      osc2.stop(now + duration);
    } catch (e) {
      console.warn("Falha no \u00e1udio do apito:", e);
    }
  }

  playFullWhistle() {
    // Tres silvos: dois curtos e um longo
    this.playBlow(0.15);
    setTimeout(() => this.playBlow(0.15), 200);
    setTimeout(() => this.playBlow(0.6), 420);
  }
}

const whistle = new WhistleSound();

// --- CRONOMETRO DE MESA PARA FUTEBOL DE BOTAO ---
class MatchTimer {
  constructor() {
    this.totalSeconds = 10 * 60; // 10 minutos padrao
    this.remainingSeconds = this.totalSeconds;
    this.isRunning = false;
    this.intervalId = null;
    this.period = "1\u00ba Tempo"; // "1o Tempo", "Intervalo", "2o Tempo", "Prorrogacao", "Fim"
  }

  start() {
    if (this.isRunning) return;
    this.isRunning = true;
    whistle.playBlow(0.35);
    this.intervalId = setInterval(() => {
      if (this.remainingSeconds > 0) {
        this.remainingSeconds--;
        this.render();
      } else {
        this.pause();
        whistle.playFullWhistle();
        showToast(`Apito final! Fim do tempo: ${this.period}`);
      }
    }, 1000);
    this.render();
  }

  pause() {
    this.isRunning = false;
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    this.render();
  }

  reset() {
    this.pause();
    this.remainingSeconds = this.totalSeconds;
    this.render();
  }

  setPeriod(periodName, minutes = 10) {
    this.pause();
    this.period = periodName;
    this.totalSeconds = minutes * 60;
    this.remainingSeconds = this.totalSeconds;
    this.render();
  }

  addMinute(delta) {
    this.remainingSeconds = Math.max(0, this.remainingSeconds + delta * 60);
    this.render();
  }

  render() {
    const mins = Math.floor(this.remainingSeconds / 60);
    const secs = this.remainingSeconds % 60;
    const formatted = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

    const timerDisplay = document.getElementById("timer-clock");
    if (timerDisplay) timerDisplay.textContent = formatted;

    const periodDisplay = document.getElementById("timer-period");
    if (periodDisplay) periodDisplay.textContent = this.period;

    const playPauseBtn = document.getElementById("timer-play-btn");
    if (playPauseBtn) {
      playPauseBtn.innerHTML = this.isRunning
        ? `<span class="material-symbols-outlined text-[18px]">pause</span>`
        : `<span class="material-symbols-outlined text-[18px]">play_arrow</span>`;
    }
  }
}

const matchTimer = new MatchTimer();

// --- MOTOR DE CONFETES (CANVAS OFFLINE) ---
class ConfettiEngine {
  constructor() {
    this.canvas = null;
    this.ctx = null;
    this.particles = [];
    this.animating = false;
  }

  init() {
    if (!this.canvas) {
      this.canvas = document.createElement("canvas");
      this.canvas.id = "confetti-canvas";
      document.body.appendChild(this.canvas);
      this.ctx = this.canvas.getContext("2d");
      window.addEventListener("resize", () => this.resize());
      this.resize();
    }
  }

  resize() {
    if (this.canvas) {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    }
  }

  fire() {
    this.init();
    this.resize();
    const colors = ["#4a7c59", "#705c30", "#8ecf9e", "#f8e0a8", "#c4a66a", "#faf6f0"];

    for (let i = 0; i < 120; i++) {
      this.particles.push({
        x: window.innerWidth * 0.5 + (Math.random() - 0.5) * 200,
        y: window.innerHeight * 0.35 + (Math.random() - 0.5) * 50,
        vx: (Math.random() - 0.5) * 14,
        vy: -Math.random() * 12 - 4,
        size: Math.random() * 8 + 5,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 10,
        gravity: 0.35,
        drag: 0.98,
        opacity: 1
      });
    }

    if (!this.animating) {
      this.animating = true;
      this.animate();
    }
  }

  animate() {
    if (!this.ctx) return;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.vx *= p.drag;
      p.rotation += p.rotSpeed;
      p.opacity -= 0.007;

      if (p.opacity <= 0 || p.y > this.canvas.height) {
        this.particles.splice(i, 1);
        continue;
      }

      this.ctx.save();
      this.ctx.translate(p.x, p.y);
      this.ctx.rotate((p.rotation * Math.PI) / 180);
      this.ctx.fillStyle = p.color;
      this.ctx.globalAlpha = Math.max(0, p.opacity);
      this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
      this.ctx.restore();
    }

    if (this.particles.length > 0) {
      requestAnimationFrame(() => this.animate());
    } else {
      this.animating = false;
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }
}

const confetti = new ConfettiEngine();

function triggerConfettiBanner() {
  confetti.fire();
  whistle.playFullWhistle();
  showToast("Hino da Vit\u00f3ria & Chuva de Confetes Acionados!");
}

// --- UTILITARIOS ---
function showToast(msg) {
  const existing = document.getElementById("toast-banner");
  if (existing) existing.remove();

  const banner = document.createElement('div');
  banner.id = "toast-banner";
  banner.className = "fixed bottom-6 right-6 z-50 bg-primary text-on-primary font-bold px-4 py-3 rounded-2xl shadow-xl flex items-center gap-2.5 border border-primary-fixed text-sm transform transition-all duration-300";
  banner.innerHTML = `<span class="material-symbols-outlined text-[20px]">task_alt</span> <span>${msg}</span>`;
  document.body.appendChild(banner);

  setTimeout(() => {
    if (banner.parentElement) {
      banner.classList.add("opacity-0", "translate-y-2");
      setTimeout(() => banner.remove(), 300);
    }
  }, 2500);
}

function scrollSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

// Imprimir sumula do torneio
function printTournament() {
  window.print();
}

// --- CICLO UNIVERSAL DE ATUALIZACAO ---
function updateAll() {
  renderHeaderAndTelemetry();
  renderTables();
  renderFixtures();
  updateBracket();
  updateTelemetryAndStats();
}

// --- INICIALIZACAO ---
document.addEventListener('DOMContentLoaded', () => {
  loadState();
  updateAll();
  matchTimer.render();
});
