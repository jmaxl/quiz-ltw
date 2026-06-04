const QUESTION_POOLS = {
  afd: [
    { question: "Was wird in dem AfD-Programmentwurf ausdrücklich als unsere 'Zukunft' bezeichnet (im Gegensatz zur Einwanderung)?", answers: ["Der technologische Wandel", "Die Förderung von Start-ups", "Kinder", "Ausländische Fachkräfte"], correct: 2 },
    { question: "Welche Struktur soll laut dem AfD-Programm als 'normative Normalität' besonders gefördert werden?", answers: ["Die Ehe aus Mann und Frau, aus der Kinder hervorgehen", "Alleinerziehende Elternteile", "Jede Form des Zusammenlebens", "Mehrgenerationenhäuser"], correct: 0 },
    { question: "Welche Position vertritt der AfD-Programmentwurf bezüglich der Privilegien der Kirchensteuerkirchen?", answers: ["Die Privilegien sollen komplett abgeschafft werden.", "Die Privilegien sollen ausgebaut werden.", "Der Staat übernimmt die Privilegien.", "Privilegien nur im ländlichen Raum."], correct: 0 },
    { question: "Worauf soll sich das Bildungssystem nach der AfD wieder als Kernaufgabe fokussieren?", answers: ["Digitale Kompetenz und Diversität", "Inklusion und globales Denken", "Vorbereitung auf die Klimatransformation", "Kulturtechniken und Wissen vermitteln"], correct: 3 },
    { question: "Im Zuge welcher Vergehen unterstützt die AfD eine Initiative zur Aberkennung der deutschen Staatsbürgerschaft?", answers: ["Bei andauernder Arbeitslosigkeit", "Bei Eintritt in feindliche Armeen oder Erschleichung durch Betrug", "Bei Steuerhinterziehung", "Bei krimineller Auffälligkeit"], correct: 1 },
    { question: "Wie steht die AfD zur aktuellen EU-Bürokratie und Regulierung aus Brüssel?", answers: ["Sie ist Vorbild für Landesgesetze.", "Sie wird als übergriffig und bevormundend abgelehnt.", "Sie soll stärker subventioniert werden.", "Sie wird in Sicherheitsfragen voll unterstützt."], correct: 1 },
    { question: "Welchen Ansatz verfolgt der AfD-Programmentwurf in der Energiepolitik?", answers: ["Förderung von Kernenergie und grundlastfähigen Kraftwerken.", "100% Windenergie bis 2030.", "Verbot von Verbrennungsmotoren.", "Abschaltung aller Kohlekraftwerke bis 2028."], correct: 0 },
    { question: "Was fordert die AfD zur Finanzierung des öffentlich-rechtlichen Rundfunks?", answers: ["Ausbau der Digitalangebote.", "Verschlankung und langfristige Abschaffung als Zwangsabgabe.", "Aufstockung der Mittel für politische Bildung.", "Zusammenlegung aller Sender."], correct: 1 },
    { question: "Wie äußert sich die AfD zum Thema Grenzkontrollen?", answers: ["Komplette Öffnung aller Binnengrenzen.", "Einführung einer asylfreien Zone.", "Umfassender Schutz der Grenzen gegen illegale Migration.", "Übergabe des Grenzschutzes an Frontex."], correct: 2 },
    { question: "Welche Haltung nimmt die AfD gegenüber der sogenannten 'Gender-Sprache' ein?", answers: ["Sie soll verpflichtend an Schulen gelehrt werden.", "Sie wird abgelehnt und soll in staatlichen Behörden untersagt werden.", "Sie soll nur im universitären Rahmen gelten.", "Sie wird als Bereicherung akzeptiert."], correct: 1 },
    { question: "Welche Rolle spielt die direkte Demokratie im AfD-Programmentwurf?", answers: ["Soll durch repräsentative Gremien ersetzt werden.", "Volksentscheide nach Schweizer Vorbild sollen gestärkt werden.", "Volksentscheide nur auf kommunaler Ebene.", "Bürger erhalten lediglich beratende Funktionen."], correct: 1 },
    { question: "Wie beurteilt die AfD die aktuelle CO2-Steuer?", answers: ["Als notwendig für den Umweltschutz.", "Als unsoziale Belastung, die abgeschafft werden soll.", "Sie soll noch weiter angehoben werden.", "Sie soll nur Unternehmen treffen."], correct: 1 },
    { question: "Was fordert die AfD im Bereich der Landwirtschaft?", answers: ["Strenge EU-Ökostandards.", "Verstaatlichung der Agrarbetriebe.", "Befreiung von ideologischen Vorgaben und bürokratischen Hürden.", "Verbot von konventionellem Anbau."], correct: 2 },
    { question: "Welche Sicherheitsmaßnahme hebt die AfD besonders hervor?", answers: ["Konsequente Ausweisung von Mehrfachtätern ohne deutschen Pass.", "Mehr Sozialpädagogen bei der Polizei.", "Entwaffnung der Sicherheitsbehörden.", "Privatisierung von Polizei-Aufgaben."], correct: 0 },
    { question: "Was ist laut AfD ein Kernziel für den ländlichen Raum in Sachsen-Anhalt?", answers: ["Der ländliche Raum soll renaturiert werden.", "Sicherstellung von ärztlicher Versorgung, Nahverkehr und Breitbandausbau.", "Umsiedlung der Bevölkerung in Städte.", "Abschaffung von Landarzt-Programmen."], correct: 1 }
  ],
  cdu: [
    { question: "Mit welcher neuen Ausrüstung will die CDU alle Polizisten in Sachsen-Anhalt ausstatten?", answers: ["Schusssichere Westen", "Bodycams und Dashcams", "Elektro-Taser", "Drohnen zur Aufklärung"], correct: 2 },
    { question: "Was will die CDU beim Thema Videoüberwachung ausbauen?", answers: ["Nur analoge Kameras an Bahnhöfen", "Videoschutz mit KI-gestützter Erkennung von Gefahren", "Freiwillige Bürgernetzwerke", "Internationale Satelliten-Überwachung"], correct: 1 },
    { question: "Wie beschreibt die CDU ihre politische Positionierung?", answers: ["Klar linke Alternative zur SPD", "Partei der Mitte mit vernünftiger Politik", "Konservativ-nationalistische Bewegung", "Liberale Partei mit wirtschaftlichem Fokus"], correct: 1 },
    { question: "Was will die CDU beim Thema Migration konkret forcieren?", answers: ["Öffnung der Grenzen für Fachkräfte", "Erheblichen Rückgang der Asylzugangszahlen und mehr Abschiebungen", "Aufbau neuer Aufnahmezentren", "Gleichbehandlung aller Migranten"], correct: 1 },
    { question: "Was soll laut CDU-Programm mit den Feuerwehren in Sachsen-Anhalt geschehen?", answers: ["Sie sollen privatisiert werden.", "Sie sollen erhalten und gestärkt werden.", "Sie sollen regional zusammengelegt werden.", "Ihre Aufgaben gehen an die Polizei."], correct: 1 },
    { question: "Als welches Ziel bezeichnet die CDU ihre Wirtschaftspolitik für Sachsen-Anhalt?", answers: ["Top-Region für Unternehmensansiedlungen in Europa", "Erstes klimaneutrales Bundesland bis 2030", "Sozialstaat mit garantiertem Grundeinkommen", "Exportweltmeister für erneuerbare Energien"], correct: 0 },
    { question: "Was verspricht die CDU im Bereich Steuern und Abgaben?", answers: ["Erhöhung der Unternehmenssteuer", "Sorgsamen Umgang mit Steuergeld und keine weiteren Abgaben", "Einführung einer neuen Vermögenssteuer", "Verdoppelung des Bildungsetats durch neue Steuern"], correct: 1 },
    { question: "Welche Technologie will die CDU in Verwaltung und Wirtschaft einsetzen?", answers: ["Blockchain für alle Behördengänge", "Künstliche Intelligenz (KI)", "Quantencomputer für die Steuerverwaltung", "Virtual Reality für Bürgerberatung"], correct: 1 },
    { question: "Was hat die CDU zum Thema Bürokratieabbau angekündigt?", answers: ["Einführung neuer Berichtspflichten", "Jede Berichtspflicht soll neu begründet und zeitlich befristet werden", "Verdoppelung der Kontrollbehörden", "Einheitliche EU-Bürokratiestandards übernehmen"], correct: 1 },
    { question: "Welchen Begriff verwendet die CDU für die unerwünschte Übererfüllung von EU-Normen?", answers: ["Euro-Overload", "Gold-Plating", "Norm-Inflation", "Bürokratie-Spirale"], correct: 1 },
    { question: "Unter welchem Motto steht das Bildungskapitel des CDU-Programms?", answers: ["Bildung für alle – kostenlos und digital", "Das klügste Bildungssystem in Deutschland", "Schule ohne Noten – Lernen mit Freude", "Ganztagsbetreuung als Pflicht"], correct: 1 },
    { question: "Was betont die CDU bei der Modernisierung von Schulen ausdrücklich?", answers: ["Verpflichtende Genderquoten bei Lehrern", "Modernisierung ohne ideologische Vorgaben", "Abschaffung von Religionsunterricht", "Englisch als Amtssprache"], correct: 1 },
    { question: "Was will die CDU für Schüler im Bereich Digitalisierung erreichen?", answers: ["Verbot von Smartphones im Unterricht", "Vollständige Digitalisierung aller Lehrmaterialien bis 2027", "Ausstattung mit digitalen Endgeräten und digitale Lernmethoden", "Nur Online-Unterricht für Oberstufenschüler"], correct: 2 },
    { question: "Welche Berufsgruppe möchte die CDU durch bessere Bezahlung attraktiver machen?", answers: ["IT-Spezialisten", "Lehrer", "Ingenieure", "Ärzte"], correct: 1 },
    { question: "Was will die CDU für die frühkindliche Bildung in Kitas erreichen?", answers: ["Abschaffung der Kita-Pflicht", "Stärkung der Kitas als Bildungseinrichtungen mit qualifizierten Fachkräften", "Ausschließlich elterliche Erziehung", "Einführung von Kita-Gutscheinen"], correct: 1 },
    { question: "Unter welchem Motto steht das Gesundheitskapitel des CDU-Programms?", answers: ["Gesundheit ist Chefsache", "Gute Gesundheit und Pflege überall", "Medizin ohne Wartezeiten", "Pflege neu denken"], correct: 1 },
    { question: "Was will die CDU zur medizinischen Versorgung im ländlichen Raum tun?", answers: ["Alle kleineren Krankenhäuser schließen", "Sicherstellung der ärztlichen Versorgung auch im ländlichen Raum", "Nur private Arztpraxen aufbauen", "Pflichtlandpraxis ohne Förderung"], correct: 1 },
    { question: "Was plant die CDU im Bereich der Pflege?", answers: ["Verstaatlichung aller Pflegeheime", "Stärkung der Pflegekräfte und bessere Arbeitsbedingungen", "Abschaffung der stationären Pflege", "Pflichttätigkeit für Rentner"], correct: 1 },
    { question: "Unter welchem Kapitel behandelt die CDU Themen rund um Familie?", answers: ["Traditionelle Werte für Sachsen-Anhalt", "Soziale Gerechtigkeit und Familie", "Ehe und Familie als Staatspflicht", "Kinder zuerst – immer"], correct: 1 },
    { question: "Was will die CDU für die Kinderbetreuung in kirchlicher Trägerschaft sicherstellen?", answers: ["Sie wird durch staatliche Einrichtungen ersetzt.", "Die Kinderbetreuung in kirchlicher Trägerschaft wird abgesichert.", "Kirchliche Kitas erhalten keine Subventionen mehr.", "Kirchliche Einrichtungen werden verstaatlicht."], correct: 1 },
    { question: "Was sagt die CDU zu Gottesdiensten in der ländlichen Region?", answers: ["Sie sollen nur noch in Städten stattfinden.", "Gottesdienste in der ländlichen Region sollen erhalten bleiben.", "Gottesdienste nur noch an Feiertagen.", "Staatliche Subventionen werden abgeschafft."], correct: 1 },
    { question: "Was will die CDU im Bereich digitaler Infrastruktur für Sachsen-Anhalt?", answers: ["Breitbandausbau nur in Städten", "Flächendeckender Breitbandausbau auch im ländlichen Raum", "Privatisierung aller Telekommunikationsnetze", "Einschränkung des Internetzugangs für Minderjährige"], correct: 1 },
    { question: "Was plant die CDU für den Nahverkehr im ländlichen Raum?", answers: ["Einstellung aller Buslinien auf dem Land", "Sicherstellung und Ausbau des ÖPNV auch im ländlichen Raum", "Nur On-Demand-Taxi-Services", "Privatisierung des gesamten ÖPNV"], correct: 1 },
    { question: "Welchen energiepolitischen Ansatz verfolgt die CDU?", answers: ["Sofortiger Ausstieg aus allen fossilen Energieträgern", "Technologieoffenheit bei der Energieversorgung", "100% Windenergie bis 2028", "Verbot von Kernenergie auf Landesebene"], correct: 1 },
    { question: "Wie will die CDU mit Flächen auf ehemaligen Tagebaugebieten umgehen?", answers: ["Vollständige Renaturierung ohne Ausnahmen", "Prüfung für Standorte der Energieerzeugung", "Bebauung mit Industrieanlagen aller Art", "Verpachtung an internationale Konzerne"], correct: 1 },
    { question: "Was fordert die CDU gegenüber der EU-Klimapolitik?", answers: ["Noch strengere Vorgaben als die EU verlangt", "Realistische, wirtschaftsfreundliche Umweltpolitik mit technologischer Offenheit", "Vollständige Abkehr von allen Klimazielen", "Übertragung aller Klimakompetenzen auf die EU"], correct: 1 },
    { question: "Was sagt das CDU-Programm zu innovativen Umwelttechnologien?", answers: ["Staatliche Förderung wird abgelehnt.", "Innovative Umwelttechnologien, besonders Biotechnologie, sollen gefördert werden.", "Nur ausländische Umwelttechnologien fördern.", "Umwelttechnologien sind Bundessache."], correct: 1 },
    { question: "Wo will die CDU die Verwaltungsmodernisierung organisatorisch bündeln?", answers: ["In einem Bundesministerium", "An einer zentralen Stelle in der Landesverwaltung", "In einem privaten Beratungsunternehmen", "In jedem Landkreis separat"], correct: 1 },
    { question: "Was will die CDU bei Genehmigungs- und Vergabeverfahren erreichen?", answers: ["Verlängerung aller Verfahren", "Vollständige Digitalisierung und Einführung einer Genehmigungsfiktion", "Übergabe an private Stellen", "Abschaffung von Genehmigungspflichten"], correct: 1 },
    { question: "Was verspricht die CDU beim Thema Barrierefreiheit im digitalen Bereich?", answers: ["Barrierefreiheit ist kein staatliches Ziel.", "Digitale Angebote des Landes sollen durchgehend barrierefrei gestaltet werden.", "Barrierefreiheit nur für öffentliche Gebäude.", "Barrierefreiheit nur für staatliche Behörden."], correct: 1 },
    { question: "Was will die CDU bei Gerichtsverfahren verbessern?", answers: ["Mehr Verfahren für mehr Rechtssicherheit", "Mehr Geschwindigkeit in die Verfahren bringen", "Verlagerung an Schiedsgerichte", "Abschaffung von Berufungsverfahren"], correct: 1 },
    { question: "Was will die CDU für Justizberufe in Sachsen-Anhalt tun?", answers: ["Justizberufe für Frauen unattraktiver machen.", "Justizberufe attraktiver machen.", "Justizberufe privatisieren.", "Nur Bundesbesoldung."], correct: 1 },
    { question: "Wie will die CDU die Papierbürokratie in der Justiz bekämpfen?", answers: ["Durch mehr Aktenschränke", "Durch elektronische Akten statt Papierbürokratie", "Durch Auslagerung an private Archive", "Durch Vernichtung älterer Akten"], correct: 1 },
    { question: "Wie viele Vereinssportler gibt es laut CDU-Programm in Sachsen-Anhalt?", answers: ["Ca. 120.000", "Ca. 250.000", "Ca. 380.000", "Ca. 520.000"], correct: 2 },
    { question: "Was will die CDU beim Thema Ehrenamt einführen?", answers: ["Einen verpflichtenden Ehrenamtsdienst", "Einen Ehrenamts-Check bei allen neuen Gesetzen", "Abschaffung der steuerlichen Absetzbarkeit", "Verstaatlichung aller gemeinnützigen Vereine"], correct: 1 },
    { question: "Was plant die CDU bezüglich der Übungsleiter- und Ehrenamtspauschale?", answers: ["Abschaffung dieser Pauschalen", "Anhebung der Übungsleiter- und Ehrenamtspauschale", "Beibehaltung ohne Änderung", "Einführung einer Steuerpflicht darauf"], correct: 1 },
    { question: "Wie will die CDU junge Menschen für das Ehrenamt gewinnen?", answers: ["Durch finanzielle Zwangsabgaben an Vereine", "Durch Kooperationen von Vereinen mit Schulen und Kitas", "Durch verpflichtende Sozialstunden", "Durch staatliche Jugendorganisationen"], correct: 1 },
    { question: "Was bekennt die CDU zum Thema Staatskirchenverträge?", answers: ["Die Verträge sollen abgeschafft werden.", "Die CDU bekennt sich zur Eigenständigkeit der Kirchen und hält an den Verträgen fest.", "Neue Verträge nur mit muslimischen Gemeinschaften.", "Staatskirchenverträge unter EU-Aufsicht stellen."], correct: 1 },
    { question: "Wie lange prägt das Christentum laut CDU die Landschaften Sachsen-Anhalts?", answers: ["Seit der Reformation (ca. 500 Jahre)", "Seit weit über einem Jahrtausend", "Seit dem Kaisertum (ca. 800 Jahre)", "Seit der Industrialisierung"], correct: 1 },
    { question: "Welches Grundrecht steht im Mittelpunkt des CDU-Kirchenkapitels?", answers: ["Das Recht auf Steuererlass für Kirchen", "Die Religionsfreiheit als Grundrecht", "Die Pflicht zum Kirchenbeitritt", "Das Recht auf staatlich finanzierten Religionsunterricht"], correct: 1 },
    { question: "Was hebt die CDU über Sachsen-Anhalt im Tourismusbereich hervor?", answers: ["Günstigste Hotelpreise Deutschlands", "Kein Bundesland verfügt über mehr Denkmale und Welterbestätten als Sachsen-Anhalt.", "Das grünste Bundesland", "Die meisten Drei-Sterne-Restaurants"], correct: 1 },
    { question: "Was will die CDU für die Landesmarketingorganisation (LTV) im Tourismus tun?", answers: ["Sie auflösen und privatisieren.", "Organisatorisch und finanziell stärken.", "In die IMG aufgehen lassen.", "In ein EU-Tourismusnetzwerk überführen."], correct: 1 },
    { question: "Was will die CDU für die touristische Infrastruktur in Sachsen-Anhalt?", answers: ["Nur Städte als Touristenziele fördern.", "Landesweit investieren: Wanderwege, Radwege, historische Alleen etc.", "Alle Fördergelder in den Harz fließen lassen.", "Tourismus vollständig privatisieren."], correct: 1 },
    { question: "Wie positioniert sich die CDU grundsätzlich zur Europäischen Union?", answers: ["Die CDU lehnt die EU grundsätzlich ab.", "Die CDU bekennt sich klar zu einer EU, die Sicherheit, Wohlstand und Freiheit garantiert.", "Die CDU will Sachsen-Anhalt aus der EU herauslösen.", "Alle EU-Kompetenzen an die Bundesländer übertragen."], correct: 1 },
    { question: "Welches regionale Netzwerk will die CDU laut Programm stärken?", answers: ["Den Bundesrat als einzige Stimme der Länder", "Die Europäische Metropolregion Mitteldeutschland (EMMD)", "Den Städtebund Elbe-Saale", "Den Norddeutschen Städteverbund"], correct: 1 },
    { question: "Ab wann fordert die CDU eine neue EU-Förderperiode mit realistischen Übergangsbedingungen?", answers: ["Ab 2026", "Ab 2027", "Ab 2028", "Ab 2030"], correct: 2 },
    { question: "Was plant die CDU zur Stärkung des Zusammenhalts in Sachsen-Anhalt?", answers: ["Abschaffung von Vereinen zur Vereinfachung", "Starken gesellschaftlichen Zusammenhalt und ein gutes Klima fördern", "Nur wirtschaftliche Investitionen priorisieren", "Fokus ausschließlich auf Großstädte"], correct: 1 },
    { question: "Was will die CDU für die Metropolregion Mitteldeutschland erreichen?", answers: ["Sie soll aufgelöst werden.", "Länderübergreifende Projekte im Rahmen der EMMD werden weiter unterstützt.", "Sachsen-Anhalt soll die EMMD verlassen.", "Die EMMD soll zu einem Bundesland werden."], correct: 1 },
    { question: "Welchen Slogan nutzt die CDU Sachsen-Anhalt in ihrem Regierungsprogramm 2026?", answers: ["Sachsen-Anhalt verdient Besonderes!", "Sachsen-Anhalt stärker machen. Nur mit uns.", "Aufbruch für unser Land!", "Gemeinsam. Stark. Sachsen-Anhalt."], correct: 1 }
  ]
};

function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

let gameQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let isAnswerLocked = false;
let joker5050Used = false;

const startScreen  = document.getElementById('start-screen');
const gameScreen   = document.getElementById('game-screen');
const endScreen    = document.getElementById('end-screen');
const startBtn     = document.getElementById('start-btn');
const restartBtn   = document.getElementById('restart-btn');
const joker5050Btn = document.getElementById('joker-5050');
const questionNumEl  = document.getElementById('current-question-num');
const scoreEl        = document.getElementById('score-val');
const questionTextEl = document.getElementById('question-text');
const answerBtns     = document.querySelectorAll('.answer-btn');
const finalCorrectEl = document.getElementById('final-correct');
const feedbackMsgEl  = document.getElementById('feedback-message');

startBtn.addEventListener('click', startGame);
restartBtn.addEventListener('click', () => { endScreen.classList.remove('active'); startScreen.classList.add('active'); });
joker5050Btn.addEventListener('click', useJoker5050);
answerBtns.forEach(btn => { btn.addEventListener('click', () => { if (isAnswerLocked) return; selectAnswer(btn); }); });

function startGame() {
  const checkedParties = [...document.querySelectorAll('.party-label input[type="checkbox"]:checked')].map(cb => cb.value);
  const activeParties = checkedParties.filter(p => QUESTION_POOLS[p] && QUESTION_POOLS[p].length > 0);
  if (activeParties.length === 0) { alert('Bitte wählen Sie mindestens eine Partei aus!'); return; }
  let combinedPool = [];
  activeParties.forEach(p => QUESTION_POOLS[p].forEach(q => combinedPool.push({ ...q, party: p })));
  gameQuestions = shuffleArray(combinedPool).slice(0, 10);
  currentQuestionIndex = 0; score = 0; isAnswerLocked = false; joker5050Used = false;
  joker5050Btn.disabled = false; scoreEl.textContent = score;
  startScreen.classList.remove('active'); endScreen.classList.remove('active'); gameScreen.classList.add('active');
  loadQuestion();
}

function loadQuestion() {
  isAnswerLocked = false;
  const currentQ = gameQuestions[currentQuestionIndex];
  questionNumEl.textContent = currentQuestionIndex + 1;
  questionTextEl.textContent = currentQ.question;
  const shuffledIndices = shuffleArray([0, 1, 2, 3]);
  const letters = ['A', 'B', 'C', 'D'];
  answerBtns.forEach((btn, displayPos) => {
    const originalIdx = shuffledIndices[displayPos];
    btn.classList.remove('selected', 'correct', 'wrong', 'hidden');
    btn.disabled = false;
    btn.setAttribute('data-original-index', originalIdx);
    btn.querySelector('.letter').textContent = letters[displayPos] + ':';
    btn.querySelector('.text').textContent = currentQ.answers[originalIdx];
  });
}

function selectAnswer(btnElement) {
  isAnswerLocked = true;
  btnElement.classList.add('selected');
  setTimeout(() => { checkAnswer(btnElement); }, 1600);
}

function checkAnswer(btnElement) {
  const currentQ = gameQuestions[currentQuestionIndex];
  const selectedOriginalIndex = parseInt(btnElement.getAttribute('data-original-index'));
  btnElement.classList.remove('selected');
  if (selectedOriginalIndex === currentQ.correct) {
    btnElement.classList.add('correct'); score++; scoreEl.textContent = score;
  } else {
    btnElement.classList.add('wrong');
    answerBtns.forEach(btn => { if (parseInt(btn.getAttribute('data-original-index')) === currentQ.correct) btn.classList.add('correct'); });
  }
  setTimeout(() => { currentQuestionIndex++; if (currentQuestionIndex < gameQuestions.length) { loadQuestion(); } else { endGame(); } }, 2000);
}

function useJoker5050() {
  if (isAnswerLocked || joker5050Used) return;
  joker5050Used = true; joker5050Btn.disabled = true;
  const currentQ = gameQuestions[currentQuestionIndex];
  let hidden = 0;
  answerBtns.forEach(btn => {
    const origIdx = parseInt(btn.getAttribute('data-original-index'));
    if (origIdx !== currentQ.correct && hidden < 2) { hidden++; btn.classList.add('hidden'); btn.disabled = true; }
  });
}

function endGame() {
  gameScreen.classList.remove('active'); endScreen.classList.add('active');
  finalCorrectEl.textContent = score;
  if (score === 10) { feedbackMsgEl.textContent = "Hervorragend! Sie kennen die Wahlprogramme in- und auswendig!"; feedbackMsgEl.style.color = "var(--correct-bg)"; }
  else if (score >= 7) { feedbackMsgEl.textContent = "Gut gemacht! Sie haben ein solides Wissen über die Programme."; feedbackMsgEl.style.color = "var(--gold)"; }
  else if (score >= 4) { feedbackMsgEl.textContent = "Mittelmäßig. Einige Aspekte haben Sie erkannt."; feedbackMsgEl.style.color = "#ccc"; }
  else { feedbackMsgEl.textContent = "Da ist noch Luft nach oben! Vielleicht die Programme nochmal überfliegen?"; feedbackMsgEl.style.color = "var(--wrong-bg)"; }
}
