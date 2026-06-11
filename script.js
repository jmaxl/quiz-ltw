const QUESTION_POOLS = {
  "afd": [
    {
      "question": "Was wird in dem AfD-Programmentwurf ausdrücklich als unsere 'Zukunft' bezeichnet (im Gegensatz zur Einwanderung)?",
      "answers": [
        "Der technologische Wandel",
        "Die Förderung von Start-ups",
        "Kinder",
        "Ausländische Fachkräfte"
      ],
      "correct": 2,
      "hint": "Die AfD betont im Programmentwurf, dass Kinder unsere Zukunft sind, nicht die Einwanderung."
    },
    {
      "question": "Welche Struktur soll laut dem AfD-Programm als 'normative Normalität' besonders gefördert werden?",
      "answers": [
        "Die Ehe aus Mann und Frau, aus der Kinder hervorgehen",
        "Alleinerziehende Elternteile",
        "Jede Form des Zusammenlebens",
        "Mehrgenerationenhäuser"
      ],
      "correct": 0,
      "hint": "Die AfD fordert die Stärkung der klassischen Ehe zwischen Mann und Frau."
    },
    {
      "question": "Welche Position vertritt der AfD-Programmentwurf bezüglich der Privilegien der Kirchensteuerkirchen?",
      "answers": [
        "Die Privilegien sollen komplett abgeschafft werden.",
        "Die Privilegien sollen ausgebaut werden.",
        "Der Staat übernimmt die Privilegien.",
        "Privilegien nur im ländlichen Raum."
      ],
      "correct": 0,
      "hint": "Die Partei plädiert dafür, staatliche Privilegien der großen Kirchen zu beenden."
    },
    {
      "question": "Worauf soll sich das Bildungssystem nach der AfD wieder als Kernaufgabe fokussieren?",
      "answers": [
        "Digitale Kompetenz und Diversität",
        "Inklusion und globales Denken",
        "Vorbereitung auf die Klimatransformation",
        "Kulturtechniken und Wissen vermitteln"
      ],
      "correct": 3,
      "hint": "Schulen sollen sich auf Grundlagen wie Lesen, Schreiben, Rechnen und Fachwissen konzentrieren."
    },
    {
      "question": "Im Zuge welcher Vergehen unterstützt die AfD eine Initiative zur Aberkennung der deutschen Staatsbürgerschaft?",
      "answers": [
        "Bei andauernder Arbeitslosigkeit",
        "Bei Eintritt in feindliche Armeen oder Erschleichung durch Betrug",
        "Bei Steuerhinterziehung",
        "Bei krimineller Auffälligkeit"
      ],
      "correct": 1,
      "hint": "Die Aberkennung betrifft Fälle von Betrug bei der Einbürgerung oder den Kampf in fremden Armeen."
    },
    {
      "question": "Wie steht die AfD zur aktuellen EU-Bürokratie und Regulierung aus Brüssel?",
      "answers": [
        "Sie ist Vorbild für Landesgesetze.",
        "Sie wird als übergriffig und bevormundend abgelehnt.",
        "Sie soll stärker subventioniert werden.",
        "Sie wird in Sicherheitsfragen voll unterstützt."
      ],
      "correct": 1,
      "hint": "Die Regulierung aus Brüssel wird als Eingriff in die Eigenständigkeit abgelehnt."
    },
    {
      "question": "Welchen Ansatz verfolgt der AfD-Programmentwurf in der Energiepolitik?",
      "answers": [
        "Förderung von Kernenergie und grundlastfähigen Kraftwerken.",
        "100% Windenergie bis 2030.",
        "Verbot von Verbrennungsmotoren.",
        "Abschaltung aller Kohlekraftwerke bis 2028."
      ],
      "correct": 0,
      "hint": "Die AfD setzt auf Kernkraft und bewährte Großkraftwerke."
    },
    {
      "question": "Was fordert die AfD zur Finanzierung des öffentlich-rechtlichen Rundfunks?",
      "answers": [
        "Ausbau der Digitalangebote.",
        "Verschlankung und langfristige Abschaffung als Zwangsabgabe.",
        "Aufstockung der Mittel für politische Bildung.",
        "Zusammenlegung aller Sender."
      ],
      "correct": 1,
      "hint": "Der Rundfunkbeitrag soll als Zwangsabgabe beendet werden."
    },
    {
      "question": "Wie äußert sich die AfD zum Thema Grenzkontrollen?",
      "answers": [
        "Komplette Öffnung aller Binnengrenzen.",
        "Einführung einer asylfreien Zone.",
        "Umfassender Schutz der Grenzen gegen illegale Migration.",
        "Übergabe des Grenzschutzes an Frontex."
      ],
      "correct": 2,
      "hint": "Die Partei fordert den physischen Schutz der Landesgrenzen."
    },
    {
      "question": "Welche Haltung nimmt die AfD gegenüber der sogenannten 'Gender-Sprache' ein?",
      "answers": [
        "Sie soll verpflichtend an Schulen gelehrt werden.",
        "Sie wird abgelehnt und soll in staatlichen Behörden untersagt werden.",
        "Sie soll nur im universitären Rahmen gelten.",
        "Sie wird als Bereicherung akzeptiert."
      ],
      "correct": 1,
      "hint": "Die Gendersprache soll im behördlichen und schulischen Bereich verboten werden."
    },
    {
      "question": "Welche Rolle spielt die direkte Demokratie im AfD-Programmentwurf?",
      "answers": [
        "Soll durch repräsentative Gremien ersetzt werden.",
        "Volksentscheide nach Schweizer Vorbild sollen gestärkt werden.",
        "Volksentscheide nur auf kommunaler Ebene.",
        "Bürger erhalten lediglich beratende Funktionen."
      ],
      "correct": 1,
      "hint": "Die Bürger sollen nach dem Modell der Schweiz direkt über Gesetze abstimmen können."
    },
    {
      "question": "Wie beurteilt die AfD die aktuelle CO2-Steuer?",
      "answers": [
        "Als notwendig für den Umweltschutz.",
        "Als unsoziale Belastung, die abgeschafft werden soll.",
        "Sie soll noch weiter angehoben werden.",
        "Sie soll nur Unternehmen treffen."
      ],
      "correct": 1,
      "hint": "Die Abgabe auf Kohlendioxid wird als ungerechte finanzielle Last abgelehnt."
    },
    {
      "question": "Was fordert die AfD im Bereich der Landwirtschaft?",
      "answers": [
        "Strenge EU-Ökostandards.",
        "Verstaatlichung der Agrarbetriebe.",
        "Befreiung von ideologischen Vorgaben und bürokratischen Hürden.",
        "Verbot von konventionellem Anbau."
      ],
      "correct": 2,
      "hint": "Landwirte sollen ohne bürokratische Einschränkungen und grüne Vorgaben wirtschaften können."
    },
    {
      "question": "Welche Sicherheitsmaßnahme hebt die AfD besonders hervor?",
      "answers": [
        "Konsequente Ausweisung von Mehrfachtätern ohne deutschen Pass.",
        "Mehr Sozialpädagogen bei der Polizei.",
        "Entwaffnung der Sicherheitsbehörden.",
        "Privatisierung von Polizei-Aufgaben."
      ],
      "correct": 0,
      "hint": "Kriminelle Ausländer und Mehrfachtäter sollen ohne Verzögerung abgeschoben werden."
    },
    {
      "question": "Was ist laut AfD ein Kernziel für den ländlichen Raum in Sachsen-Anhalt?",
      "answers": [
        "Der ländliche Raum soll renaturiert werden.",
        "Sicherstellung von ärztlicher Versorgung, Nahverkehr und Breitbandausbau.",
        "Umsiedlung der Bevölkerung in Städte.",
        "Abschaffung von Landarzt-Programmen."
      ],
      "correct": 1,
      "hint": "Es geht darum, die Infrastruktur und Lebensqualität in Dörfern und Kleinstädten zu sichern."
    },
    {
      "question": "Wie steht die AfD zum Erhalt des Bargelds?",
      "answers": [
        "Soll als gesetzliches Zahlungsmittel uneingeschränkt erhalten bleiben.",
        "Soll schrittweise durch digitales Zentralbankgeld ersetzt werden.",
        "Soll nur für Beträge unter 50 Euro gelten.",
        "Soll im Einzelhandel abgeschafft werden."
      ],
      "correct": 0,
      "hint": "Die AfD fordert den verfassungsrechtlich verankerten Schutz des Bargelds als uneingeschränktes Zahlungsmittel."
    },
    {
      "question": "Was fordert die AfD zur Förderung von Familien in Sachsen-Anhalt?",
      "answers": [
        "Abschaffung der Ehe-Privilegien.",
        "Ein Landeserziehungsgeld und die Einführung eines Familiensplittings.",
        "Erhöhung der Erbschaftssteuer für Großfamilien.",
        "Kostenlose Ganztagsbetreuung ausschließlich in staatlichen Kitas."
      ],
      "correct": 1,
      "hint": "Die AfD fordert finanzielle Unterstützung für Familien über Erziehungsgeld und steuerliche Entlastungen wie das Familiensplitting."
    },
    {
      "question": "Welche Position vertritt die AfD bezüglich des Denkmalschutzes?",
      "answers": [
        "Denkmalschutz soll komplett privatisiert werden.",
        "Erhaltung und Pflege des deutschen Kulturerbes ohne ideologische Uminterpretation.",
        "Abriss historischer Denkmale zur Wohnraumgewinnung.",
        "Denkmalschutz nur für Bauten nach 1990."
      ],
      "correct": 1,
      "hint": "Die AfD will historische Bauten als Zeugnisse deutscher Kultur und Geschichte unverändert erhalten und pflegen."
    },
    {
      "question": "Wie beurteilt die AfD das Thema Windenergie im Wald?",
      "answers": [
        "Windkraftanlagen im Wald sollen massiv gefördert werden.",
        "Komplettes Verbot von Windkraftanlagen in Waldgebieten.",
        "Windkraft nur in staatlichen Forstgebieten.",
        "Ersetzung aller Laubwälder durch Windkraftparks."
      ],
      "correct": 1,
      "hint": "Die AfD lehnt die Zerstörung des Waldes durch Windindustrieanlagen ab und fordert ein generelles Bauverbot im Wald."
    },
    {
      "question": "Was fordert die AfD im Bereich der inneren Sicherheit für die Polizei?",
      "answers": [
        "Bessere personelle Ausstattung und Rückkehr zum Prinzip von Recht und Ordnung.",
        "Entwaffnung von Streifenpolizisten.",
        "Einsparungen bei Polizeibudgets zur Förderung von Sozialprojekten.",
        "Zusammenlegung aller Polizeireviere zu einer Bundespolizei."
      ],
      "correct": 0,
      "hint": "Die AfD will die Polizei stärken und setzt auf eine konsequente Durchsetzung des Rechtsstaats."
    },
    {
      "question": "Wie positioniert sich die AfD zum Thema Corona-Maßnahmen?",
      "answers": [
        "Als absolut notwendig und ausbaubedürftig.",
        "Einsetzung eines Untersuchungsausschusses und Entschädigung von Opfern.",
        "Als alleinige Bundessache ohne Landeskompetenz.",
        "Unterstützung einer dauerhaften Maskenpflicht im ÖPNV."
      ],
      "correct": 1,
      "hint": "Die AfD fordert eine parlamentarische Aufarbeitung der Grundrechtseingriffe und Entschädigungsleistungen für Betroffene."
    },
    {
      "question": "Was will die AfD im sachsen-anhaltischen Nahverkehr primär fördern?",
      "answers": [
        "Vorrang für den Individualverkehr und Erhalt des Straßennetzes vor dem Ausbau von Fahrradwegen.",
        "Kostenfreien ÖPNV zum Nulltarif.",
        "Komplettes Verbot von Verbrennungsmotoren im ländlichen Raum.",
        "Rückbau aller Landstraßen zu Fahrradschnellwegen."
      ],
      "correct": 0,
      "hint": "Die AfD setzt sich für den Schutz des Autos und den Erhalt des Straßennetzes als Rückgrat der Mobilität ein."
    },
    {
      "question": "Welche Einstellung hat die AfD zu Quotenregelungen in der öffentlichen Verwaltung?",
      "answers": [
        "Befürwortung einer 50%-Frauenquote.",
        "Ablehnung jeglicher Quoten, Besetzung rein nach Eignung und Leistungsprinzip.",
        "Einführung von Migrantenquoten.",
        "Quotenregelungen nur für Spitzenpositionen."
      ],
      "correct": 1,
      "hint": "Die AfD lehnt geschlechts- oder herkunftsbezogene Quoten ab und will Stellen ausschließlich nach Leistung besetzen."
    },
    {
      "question": "Was fordert die AfD im Bereich Schule bezüglich der Notengebung?",
      "answers": [
        "Abschaffung aller Noten bis zur 8. Klasse.",
        "Beibehaltung und Stärkung des klassischen Ziffernnotensystems ab der Grundschule.",
        "Ersetzung von Ziffernnoten durch smileys.",
        "Notengebung nur bei freiwilligen Prüfungen."
      ],
      "correct": 1,
      "hint": "Die AfD fordert den Erhalt des Leistungsprinzips und sieht Ziffernnoten als notwendiges Feedback an Schulen."
    },
    {
      "question": "Wie steht die AfD zum Thema Zuwanderung in die Sozialsysteme?",
      "answers": [
        "Ausweitung des Bürgergeldes auf alle Asylbewerber ab Tag 1.",
        "Einführung von Sachleistungen statt Geldleistungen und Stopp von Leistungen für abgelhnte Asylbewerber.",
        "Unbeschränkte finanzielle Unterstützung für alle Zuwanderer.",
        "Kostenlose Kreditkarten für neu ankommende Migranten."
      ],
      "correct": 1,
      "hint": "Die AfD will finanzielle Fehlanreize abbauen, indem Geldleistungen durch Sachleistungen ersetzt und Leistungen für Ausreisepflichtige gestoppt werden."
    }
  ],
  "cdu": [
    {
      "question": "Mit welcher neuen Ausrüstung will die CDU alle Polizisten in Sachsen-Anhalt ausstatten?",
      "answers": [
        "Schusssichere Westen",
        "Bodycams und Dashcams",
        "Elektro-Taser",
        "Drohnen zur Aufklärung"
      ],
      "correct": 2,
      "hint": "Die Polizei soll moderner ausgestattet werden; hierbei wird eine Distanzwaffe zur Deeskalation genannt."
    },
    {
      "question": "Was will die CDU beim Thema Videoüberwachung ausbauen?",
      "answers": [
        "Nur analoge Kameras an Bahnhöfen",
        "Videoschutz mit KI-gestützter Erkennung von Gefahren",
        "Freiwillige Bürgernetzwerke",
        "Internationale Satelliten-Überwachung"
      ],
      "correct": 1,
      "hint": "Die CDU setzt im öffentlichen Raum auf moderne Bilderkennung zur Kriminalitätsbekämpfung."
    },
    {
      "question": "Wie beschreibt die CDU ihre politische Positionierung?",
      "answers": [
        "Klar linke Alternative zur SPD",
        "Partei der Mitte mit vernünftiger Politik",
        "Konservativ-nationalistische Bewegung",
        "Liberale Partei mit wirtschaftlichem Fokus"
      ],
      "correct": 1,
      "hint": "Die CDU sieht sich selbst als verlässliche Kraft der bürgerlichen Mitte."
    },
    {
      "question": "Was will die CDU beim Thema Migration konkret forcieren?",
      "answers": [
        "Öffnung der Grenzen für Fachkräfte",
        "Erheblichen Rückgang der Asylzugangszahlen und mehr Abschiebungen",
        "Aufbau neuer Aufnahmezentren",
        "Gleichbehandlung aller Migranten"
      ],
      "correct": 1,
      "hint": "Die Partei fordert strengere Kontrollen, um die illegale Zuwanderung einzudämmen und Abschiebungen zu beschleunigen."
    },
    {
      "question": "Was soll laut CDU-Programm mit den Feuerwehren in Sachsen-Anhalt geschehen?",
      "answers": [
        "Sie sollen privatisiert werden.",
        "Sie sollen erhalten und gestärkt werden.",
        "Sie sollen regional zusammengelegt werden.",
        "Ihre Aufgaben gehen an die Polizei."
      ],
      "correct": 1,
      "hint": "Die Unterstützung des Ehrenamtes im Brandschutz steht im Fokus."
    },
    {
      "question": "Als welches Ziel bezeichnet die CDU ihre Wirtschaftspolitik für Sachsen-Anhalt?",
      "answers": [
        "Top-Region für Unternehmensansiedlungen in Europa",
        "Erstes klimaneutrales Bundesland bis 2030",
        "Sozialstaat mit garantiertem Grundeinkommen",
        "Exportweltmeister für erneuerbare Energien"
      ],
      "correct": 0,
      "hint": "Sachsen-Anhalt soll im europäischen Vergleich ein führender Standort für Investoren werden."
    },
    {
      "question": "Was verspricht die CDU im Bereich Steuern und Abgaben?",
      "answers": [
        "Erhöhung der Unternehmenssteuer",
        "Sorgsamen Umgang mit Steuergeld und keine weiteren Abgaben",
        "Einführung einer neuen Vermögenssteuer",
        "Verdoppelung des Bildungsetats durch neue Steuern"
      ],
      "correct": 1,
      "hint": "Finanzpolitisch steht die CDU für Haushaltsdisziplin und Schutz vor Mehrbelastungen der Bürger."
    },
    {
      "question": "Welche Technologie will die CDU in Verwaltung und Wirtschaft einsetzen?",
      "answers": [
        "Blockchain für alle Behördengänge",
        "Künstliche Intelligenz (KI)",
        "Quantencomputer für die Steuerverwaltung",
        "Virtual Reality für Bürgerberatung"
      ],
      "correct": 1,
      "hint": "Es geht um die Digitalisierung durch selbstlernende Systeme in Betrieben und Behörden."
    },
    {
      "question": "Was hat die CDU zum Thema Bürokratieabbau angekündigt?",
      "answers": [
        "Einführung neuer Berichtspflichten",
        "Jede Berichtspflicht soll neu begründet und zeitlich befristet werden",
        "Verdoppelung der Kontrollbehörden",
        "Einheitliche EU-Bürokratiestandards übernehmen"
      ],
      "correct": 1,
      "hint": "Vorschriften sollen nicht ewig gelten, sondern auf den Prüfstand gestellt werden."
    },
    {
      "question": "Welchen Begriff verwendet die CDU für die unerwünschte Übererfüllung von EU-Normen?",
      "answers": [
        "Euro-Overload",
        "Gold-Plating",
        "Norm-Inflation",
        "Bürokratie-Spirale"
      ],
      "correct": 1,
      "hint": "Dieser Begriff beschreibt das Phänomen, wenn nationale Gesetze über EU-Vorgaben hinausgehen."
    },
    {
      "question": "Unter welchem Motto steht das Bildungskapitel des CDU-Programms?",
      "answers": [
        "Bildung für alle – kostenlos und digital",
        "Das klügste Bildungssystem in Deutschland",
        "Schule ohne Noten – Lernen mit Freude",
        "Ganztagsbetreuung als Pflicht"
      ],
      "correct": 1,
      "hint": "Die CDU strebt die Qualitätsführerschaft bei Schulen im bundesweiten Vergleich an."
    },
    {
      "question": "Was will die CDU für Schüler im Bereich Digitalisierung erreichen?",
      "answers": [
        "Verbot von Smartphones im Unterricht",
        "Vollständige Digitalisierung aller Lehrmaterialien bis 2027",
        "Ausstattung mit digitalen Endgeräten und digitale Lernmethoden",
        "Nur Online-Unterricht für Oberstufenschüler"
      ],
      "correct": 2,
      "hint": "Laptops und Tablets sollen flächendeckend im Unterricht Einzug halten."
    },
    {
      "question": "Welche Berufsgruppe möchte die CDU durch bessere Bezahlung attraktiver machen?",
      "answers": [
        "IT-Spezialisten",
        "Lehrer",
        "Ingenieure",
        "Ärzte"
      ],
      "correct": 1,
      "hint": "Um dem Unterrichtsausfall zu begegnen, soll das pädagogische Personal besser besoldet werden."
    },
    {
      "question": "Was will die CDU zur medizinischen Versorgung im ländlichen Raum tun?",
      "answers": [
        "Alle kleineren Krankenhäuser schließen",
        "Sicherstellung der ärztlichen Versorgung auch im ländlichen Raum",
        "Nur private Arztpraxen aufbauen",
        "Pflichtlandpraxis ohne Förderung"
      ],
      "correct": 1,
      "hint": "Niemand soll auf dem Land vom medizinischen Fortschritt abgehängt werden."
    },
    {
      "question": "Was will die CDU im Bereich digitaler Infrastruktur für Sachsen-Anhalt?",
      "answers": [
        "Breitbandausbau nur in Städten",
        "Flächendeckender Breitbandausbau auch im ländlichen Raum",
        "Privatisierung aller Telekommunikationsnetze",
        "Einschränkung des Internetzugangs für Minderjährige"
      ],
      "correct": 1,
      "hint": "Schnelles Internet wird als Teil der Daseinsvorsorge für jeden Winkel des Landes gesehen."
    },
    {
      "question": "Was plant die CDU für den Nahverkehr im ländlichen Raum?",
      "answers": [
        "Einstellung aller Buslinien auf dem Land",
        "Sicherstellung und Ausbau des ÖPNV auch im ländlichen Raum",
        "Nur On-Demand-Taxi-Services",
        "Privatisierung des gesamten ÖPNV"
      ],
      "correct": 1,
      "hint": "Die Mobilität ohne eigenes Auto soll auf dem Land durch Bus und Bahn gesichert werden."
    },
    {
      "question": "Welchen energiepolitischen Ansatz verfolgt die CDU?",
      "answers": [
        "Sofortiger Ausstieg aus allen fossilen Energieträgern",
        "Technologieoffenheit bei der Energieversorgung",
        "100% Windenergie bis 2028",
        "Verbot von Kernenergie auf Landesebene"
      ],
      "correct": 1,
      "hint": "Die CDU möchte sich nicht auf eine einzige Energiequelle festlegen, sondern alle Optionen prüfen."
    },
    {
      "question": "Was will die CDU bei Genehmigungs- und Vergabeverfahren erreichen?",
      "answers": [
        "Verlängerung aller Verfahren",
        "Vollständige Digitalisierung und Einführung einer Genehmigungsfiktion",
        "Übergabe an private Stellen",
        "Abschaffung von Genehmigungspflichten"
      ],
      "correct": 1,
      "hint": "Wenn Ämter zu lange brauchen, soll ein Antrag nach einer Frist automatisch als bewilligt gelten."
    },
    {
      "question": "Was verspricht die CDU beim Thema Barrierefreiheit im digitalen Bereich?",
      "answers": [
        "Barrierefreiheit ist kein staatliches Ziel.",
        "Digitale Angebote des Landes sollen durchgehend barrierefrei gestaltet werden.",
        "Barrierefreiheit nur für öffentliche Gebäude.",
        "Barrierefreiheit nur für staatliche Behörden."
      ],
      "correct": 1,
      "hint": "Webseiten des Landes müssen für Menschen mit Behinderungen uneingeschränkt nutzbar sein."
    },
    {
      "question": "Was will die CDU beim Thema Ehrenamt einführen?",
      "answers": [
        "Einen verpflichtenden Ehrenamtsdienst",
        "Einen Ehrenamts-Check bei allen neuen Gesetzen",
        "Abschaffung der steuerlichen Absetzbarkeit",
        "Verstaatlichung aller gemeinnützigen Vereine"
      ],
      "correct": 1,
      "hint": "Jedes neue Gesetz soll daraufhin geprüft werden, ob es Freiwillige mit zusätzlicher Bürokratie belastet."
    },
    {
      "question": "Was plant die CDU bezüglich der Übungsleiter- und Ehrenamtspauschale?",
      "answers": [
        "Abschaffung dieser Pauschalen",
        "Anhebung der Übungsleiter- und Ehrenamtspauschale",
        "Beibehaltung ohne Änderung",
        "Einführung einer Steuerpflicht darauf"
      ],
      "correct": 1,
      "hint": "Die steuerfreien Freibeträge für ehrenamtlich Tätige sollen erhöht werden."
    },
    {
      "question": "Was hebt die CDU über Sachsen-Anhalt im Tourismusbereich hervor?",
      "answers": [
        "Günstigste Hotelpreise Deutschlands",
        "Kein Bundesland verfügt über mehr Denkmale und Welterbestätten als Sachsen-Anhalt.",
        "Das grünste Bundesland",
        "Die meisten Drei-Sterne-Restaurants"
      ],
      "correct": 1,
      "hint": "Sachsen-Anhalt rühmt sich seiner immensen Dichte an UNESCO-Welterbestätten und historischen Bauten."
    },
    {
      "question": "Was will die CDU für die Landesmarketingorganisation (LTV) im Tourismus do?",
      "answers": [
        "Sie auflösen und privatisieren.",
        "Organisatorisch und finanziell stärken.",
        "In die IMG aufgehen lassen.",
        "In ein EU-Tourismusnetzwerk überführen."
      ],
      "correct": 1,
      "hint": "Die Schlagkraft für das Landesmarketing soll erhöht werden."
    },
    {
      "question": "Wie positioniert sich die CDU grundsätzlich zur Europäischen Union?",
      "answers": [
        "Die CDU lehnt die EU grundsätzlich ab.",
        "Die CDU bekennt sich klar zu einer EU, die Sicherheit, Wohlstand und Freiheit garantiert.",
        "Die CDU will Sachsen-Anhalt aus der EU herauslösen.",
        "Alle EU-Kompetenzen an die Bundesländer übertragen."
      ],
      "correct": 1,
      "hint": "Die europäische Integration wird als Fundament für Frieden und wirtschaftliche Stärke bejaht."
    },
    {
      "question": "Welchen Slogan nutzt die CDU Sachsen-Anhalt in ihrem Regierungsprogramm 2026?",
      "answers": [
        "Sachsen-Anhalt verdient Besonderes!",
        "Sachsen-Anhalt stärker machen. Nur mit uns.",
        "Aufbruch für unser Land!",
        "Gemeinsam. Stark. Sachsen-Anhalt."
      ],
      "correct": 1,
      "hint": "Der Slogan betont die Eigenständigkeit und Verlässlichkeit der CDU als Regierungskraft."
    }
  ],
  "spd": [
    {
      "question": "Welchen neuen Ausbildungsberuf möchte die SPD in Sachsen-Anhalt ab 2027 etablieren?",
      "answers": [
        "Physiotherapie",
        "Pflegeassistenz",
        "Altenpflege",
        "Hebammenpflege"
      ],
      "correct": 1,
      "hint": "Bereits 2027 soll der neue Beruf der Pflegeassistenz in Sachsen-Anhalt ausgebildet werden."
    },
    {
      "question": "Welche steuerliche Maßnahme schlägt die SPD auf Bundesebene vor, um soziale Gerechtigkeit zu finanzieren?",
      "answers": [
        "Erhöhung der Mehrwertsteuer auf 21%",
        "Eine 2%ige Vermögensabgabe auf Vermögen über 100 Millionen Euro",
        "Eine CO2-Sonderabgabe für alle Autofahrer",
        "Die Einführung einer Finanztransaktionssteuer ausschließlich für Kleinsparer"
      ],
      "correct": 1,
      "hint": "Die SPD fordert eine Vermögenssteuer von 2% auf sehr hohe Vermögen über 100 Millionen Euro zur Gegenfinanzierung."
    },
    {
      "question": "Welches Gesetz will die SPD in Sachsen-Anhalt sichern und nicht aufweichen lassen?",
      "answers": [
        "Das Ladenöffnungszeitengesetz",
        "Das Tariftreue- und Vergabegesetz",
        "Das Schulgesetz zur Privatschulförderung",
        "Das Waldbrandgesetz"
      ],
      "correct": 1,
      "hint": "Die SPD stellt sich gegen eine Aufweichung des Tariftreue- und Vergabegesetzes zur Sicherung fairer Löhne."
    },
    {
      "question": "Was fordert die SPD für Schüler an allen Kitas und Schulen in Sachsen-Anhalt?",
      "answers": [
        "Ausschließlich veganes Essen",
        "Ein kostenloses, gesundes und warmes Mittagessen",
        "Die Pflicht zur eigenen Brotbüchse",
        "Die Ersetzung von Kitas durch elterliche Betreuungsgruppen"
      ],
      "correct": 1,
      "hint": "Die SPD setzt sich für ein kostenfreies, gesundes Mittagessen an Schulen und Kitas ein."
    },
    {
      "question": "Wie möchte die SPD den Lehrermangel an sachsen-anhaltischen Schulen bekämpfen?",
      "answers": [
        "Durch Verpflichtung von Ruheständlern",
        "Durch die Einführung eines dualen Studiums für das Lehramt",
        "Durch Verkürzung der Schulzeit auf 10 Jahre",
        "Durch die Verlegung des Unterrichts ins Internet"
      ],
      "correct": 1,
      "hint": "Die SPD will das duale Lehramtsstudium etablieren, um die Attraktivität der Ausbildung zu steigern."
    },
    {
      "question": "Welches Ticket-Angebot will die SPD speziell für Senioren in Sachsen-Anhalt fördern?",
      "answers": [
        "Ein kostenloses Jahresticket für Fernverkehr",
        "Ein Deutschlandticket-Abo für ca. 20 Euro pro Monat",
        "Ein ermäßigtes Taxi-Sammelticket",
        "Ein reines Wochenend-Freizeitticket"
      ],
      "correct": 1,
      "hint": "Senioren sollen nach dem Vorbild anderer Länder ein Deutschlandticket für ca. 20 Euro im Monat erhalten."
    },
    {
      "question": "Wo soll die digitale Verwaltungsmodernisierung der SPD zufolge organisatorisch gebündelt werden?",
      "answers": [
        "In privaten Beratungsunternehmen",
        "An einer zentralen Stelle in der Landesverwaltung",
        "In jedem Landkreis getrennt",
        "Es soll keine zentrale Bündelung geben"
      ],
      "correct": 1,
      "hint": "Die SPD will die Digitalisierung der Verwaltung an einer zentralen Stelle bündeln, um Redundanzen zu vermeiden."
    },
    {
      "question": "Unter welchem Motto steht das Gesundheitskapitel des SPD-Programms?",
      "answers": [
        "Gesundheit ist Chefsache",
        "Gesund bleiben. Sicher leben.",
        "Medizin ohne Wartezeiten",
        "Pflege neu denken"
      ],
      "correct": 1,
      "hint": "Das Gesundheitskapitel der SPD trägt die Überschrift 'Gesund bleiben. Sicher leben.'."
    },
    {
      "question": "Welche Strategie schlägt die SPD zur Modernisierung der Schlüsselindustrie Chemie vor?",
      "answers": [
        "Sofortiges Verbot chemischer Produktionen",
        "Die Erstellung einer Carbon-Management-Strategie",
        "Die vollständige Privatisierung aller Chemieparks",
        "Die Rückkehr zur Kohlevergasung"
      ],
      "correct": 1,
      "hint": "Die SPD plant die Erstellung einer Carbon-Management-Strategie und darauf basierender Industrie-Dialoge."
    },
    {
      "question": "Welches Ziel setzt sich die SPD für den Klimaschutz in Sachsen-Anhalt?",
      "answers": [
        "Klimaneutralität bis 2045",
        "Ein klimaneutrales Sachsen-Anhalt bis 2035",
        "Keine festen Zielvorgaben auf Landesebene",
        "Klimaneutralität bis 2030 nur für Industriegebiete"
      ],
      "correct": 1,
      "hint": "Die SPD will das Land Sachsen-Anhalt bis zum Jahr 2035 klimaneutral aufstellen."
    },
    {
      "question": "Welche Infrastruktur-Änderung unterstützt die SPD zur Sicherung der Elbe?",
      "answers": [
        "Bau von 3 neuen Staustufen",
        "Gezielte Sohlstabilisierung und Rückbau von Buhnen",
        "Die Vertiefung der Elbe um 2 Meter",
        "Den Bau eines Elbkanals"
      ],
      "correct": 1,
      "hint": "Zum Schutz der Elbe setzt die SPD auf Sohlstabilisierung und den Rückbau künstlicher Buhnen und Steinschüttungen."
    },
    {
      "question": "Welche Haltung hat die SPD bezüglich der Schulgeldfreiheit?",
      "answers": [
        "Schulgeld soll nur für Universitäten gelten",
        "Schulgeldfreiheit in allen Gesundheitsberufen",
        "Einführung von Schulgebühren an staatlichen Schulen",
        "Ausschließlich Schulgeldfreiheit für IT-Berufe"
      ],
      "correct": 1,
      "hint": "Die SPD fordert den konsequenten Ausbau der Schulgeldfreiheit und die Zahlung von Ausbildungsvergütungen in Gesundheitsberufen."
    },
    {
      "question": "Wie will die SPD das Ehrenamt in sachsen-anhaltischen Kommunen finanziell stärken?",
      "answers": [
        "Durch Erhebung einer Vereinsabgabe",
        "Durch steuerfreie Aufwandsentschädigungen für Ehrenämter",
        "Durch die Einführung einer Ehrenamtspflicht",
        "Durch pauschale Kürzung von Projektmitteln"
      ],
      "correct": 1,
      "hint": "Die SPD setzt sich für die steuerfreie Auszahlung von Aufwandsentschädigungen im Ehrenamt ein."
    },
    {
      "question": "Welche Institution soll laut SPD als Energiekompetenzhub für Wirtschaft und Verbraucher ausgebaut werden?",
      "answers": [
        "Das Umweltbundesamt (UBA)",
        "Die Landesenergieagentur LENA",
        "Die Investitionsbank Sachsen-Anhalt",
        "Das Fraunhofer-Institut Magdeburg"
      ],
      "correct": 1,
      "hint": "Die Landesenergieagentur LENA soll zum zentralen Kompetenzhub für Energiewende-Fragen aufgewertet werden."
    },
    {
      "question": "Wie steht die SPD zum Thema Arbeitszeiten zur Entlastung von Familien?",
      "answers": [
        "Einführung einer verpflichtenden 48-Stunden-Woche",
        "Förderung von familienfreundlichen Arbeitszeitmodellen und gerechter Verteilung von Sorgearbeit",
        "Abschaffung von Teilzeitmöglichkeiten",
        "Verbot von Homeoffice für Eltern"
      ],
      "correct": 1,
      "hint": "Die SPD will familienfreundliche Arbeitszeitmodelle fördern, um Eltern die Vereinbarkeit von Beruf und Sorgearbeit zu erleichtern."
    },
    {
      "question": "Was fordert die SPD für die Digitalisierung an den Schulen?",
      "answers": [
        "Ausschließlichen Online-Unterricht",
        "Ausstattung mit digitalen Endgeräten und digitale Lernmethoden bei Erhalt der pädagogischen Beziehung",
        "Ein Smartphone-Verbot im gesamten Schulgebäude",
        "Die Abschaffung gedruckter Lehrbücher"
      ],
      "correct": 1,
      "hint": "Die SPD will Schüler mit Endgeräten ausstatten und moderne digitale Lernmethoden fördern."
    },
    {
      "question": "Welchen Ansatz vertritt die SPD im Bereich der Integration und Migration?",
      "answers": [
        "Grenzenlose Aufnahme ohne Integrationsmaßnahmen",
        "Geordnete, gestaltete und integrationsorientierte Zuwanderung unter Ablehnung von Arbeitsverboten",
        "Komplette Abschaffung aller Sprachkurse",
        "Sofortige Rückführung aller Asylbewerber"
      ],
      "correct": 1,
      "hint": "Die SPD versteht Zuwanderung als Chance und lehnt Arbeitsverbote ab, setzt aber auf geordnete Integration."
    },
    {
      "question": "Welche digitale Neuerung will die SPD in der Justiz zur Entlastung einführen?",
      "answers": [
        "Gerichtsverfahren per WhatsApp",
        "Die Einführung der elektronischen Akte (E-Akte)",
        "Die Ersetzung aller Richter durch KI-Systeme",
        "Die Auslagerung von Verfahren an private Archivare"
      ],
      "correct": 1,
      "hint": "Zur Beseitigung der Papierbürokratie setzt die SPD auf die konsequente Einführung der E-Akte."
    },
    {
      "question": "Was schlägt die SPD bezüglich der Hebammenversorgung in Sachsen-Anhalt vor?",
      "answers": [
        "Schließung aller Kreißsäle zur Kosteneinsparung",
        "Gezielter Ausbau von hebammengeführten Kreißsälen",
        "Ersatz von Hebammen durch Online-Kurse",
        "Pflichtgeburt zu Hause"
      ],
      "correct": 1,
      "hint": "Die SPD fordert den Ausbau hebammengeführter Kreißsäle zur Stärkung der wohnortnahen Geburtshilfe."
    },
    {
      "question": "Wie will die SPD den ländlichen Raum vor sozialer Isolation bewahren?",
      "answers": [
        "Durch Zwangsümsiedlungen in die Städte",
        "Durch die Förderung von Mehrgenerationenhäusern und Begegnungsorten",
        "Durch die Schließung aller Vereine",
        "Es sind keine Maßnahmen geplant"
      ],
      "correct": 1,
      "hint": "Die SPD will Mehrgenerationenhäuser und Seniorentreffs als soziale Anker im ländlichen Raum stärken."
    },
    {
      "question": "Welche Haltung nimmt die SPD gegenüber den Staatskirchenverträgen ein?",
      "answers": [
        "Sofortige Kündigung aller Verträge",
        "Die SPD bekennt sich zur Eigenständigkeit der Kirchen und hält an den Verträgen fest",
        "Übergabe aller Kirchen an den Staat",
        "Ersetzung durch EU-Verträge"
      ],
      "correct": 1,
      "hint": "Die SPD hält an der bewährten Partnerschaft und den Staatskirchenverträgen mit den christlichen Konfessionen fest."
    },
    {
      "question": "Welche Maßnahme zur Krebsprävention soll laut SPD gestärkt werden?",
      "answers": [
        "Die Pflichtuntersuchung für alle Bürger ab 18",
        "Ausbau von Programmen zur Krebsfrüherkennung und Suchtprävention",
        "Abschaffung der ärztlichen Vorsorgeuntersuchungen",
        "Ersetzung der Vorsorge durch Sportprogramme"
      ],
      "correct": 1,
      "hint": "Die SPD will Programme zur Früherkennung und Suchtprävention als elementare Bausteine stärken."
    },
    {
      "question": "Was will die SPD bezüglich des Hochwasserschutzes in Sachsen-Anhalt tun?",
      "answers": [
        "Bau von Betonmauern entlang aller Flüsse",
        "Kombination aus technischen und natürlichen Schutzmaßnahmen (Wiedervernässung, Deichsanierung)",
        "Vollständige Überlassung aller Flüsse der Natur",
        "Die Regulierung der Flüsse auf Bundesebene übertragen"
      ],
      "correct": 1,
      "hint": "Die SPD setzt auf Deichsanierung und den Ausbau natürlicher Rückhalteflächen wie Auen und Moore."
    },
    {
      "question": "Welchen Stellenwert hat der Katastrophenschutz im SPD-Programm?",
      "answers": [
        "Soll verringert werden, da Extremwetter seltener werden",
        "Ist aktiver Bevölkerungsschutz und muss umfassend ausfinanziert und modernisiert werden",
        "Soll vollständig durch private Firmen abgewickelt werden",
        "Zusammenlegung mit der Polizei"
      ],
      "correct": 1,
      "hint": "Die SPD fordert eine solide, krisenfeste Ausfinanzierung des Katastrophenschutzes und der Feuerwehren."
    },
    {
      "question": "Welches Instrument soll Kommunen laut SPD bei der Wärmeplanung unterstützen?",
      "answers": [
        "Eine CO2-Steuer für Gemeinden",
        "Verlässliche finanzielle und fachliche Unterstützung durch das Land",
        "Ausschließlich die Nutzung von Kohleöfen",
        "Die Vorgabe von starren Richtwerten ohne Finanzierung"
      ],
      "correct": 1,
      "hint": "Die SPD will Kommunen bei der Wärmeplanung fachlich und finanziell absichern, damit diese bezahlbar bleibt."
    }
  ],
  "gruene": [
    {
      "question": "Welches Ziel verfolgen die Grünen im Hinblick auf den Flächenverbrauch für neue Siedlungen bis zum Jahr 2050?",
      "answers": [
        "Reduzierung um 50%",
        "Netto-Null-Hektar",
        "Keine Neuausweisung ab 2030",
        "Beschränkung auf Großstädte"
      ],
      "correct": 1,
      "hint": "Die Grünen streben das „Netto-Null-Hektar“-Ziel bis 2050 an, um den Flächenverbrauch einzudämmen."
    },
    {
      "question": "Welche Verfassungsänderung fordern die Grünen in Sachsen-Anhalt?",
      "answers": [
        "Die Abschaffung des Landtages",
        "Die Aufnahme des Klimaschutzes als Staatsziel in Artikel 35",
        "Die Herabsetzung der Sperrklausel auf 3%",
        "Die Abschaffung des Verfassungsgerichtshofes"
      ],
      "correct": 1,
      "hint": "Die Grünen fordern die Verankerung des Klimaschutzes als Staatsziel in der Landesverfassung."
    },
    {
      "question": "Bis zu welchem Jahr soll Sachsen-Anhalt nach den Grünen klimaneutral sein?",
      "answers": [
        "2045",
        "2035",
        "2050",
        "2040"
      ],
      "correct": 1,
      "hint": "Die Grünen setzen sich für ein ambitioniertes Klimaschutzgesetz ein, das Klimaneutralität bis 2035 vorschreibt."
    },
    {
      "question": "Welche Bundesmaßnahme fordern die Grünen zur sozialen Abfederung der CO2-Steuer?",
      "answers": [
        "Die Erhöhung des Kindergeldes",
        "Die Einführung eines Klimageldes zur direkten Rückerstattung",
        "Die Abschaffung aller Energiesteuern",
        "Die Einführung einer Luxussteuer"
      ],
      "correct": 1,
      "hint": "Über ein Bundes-Klimageld sollen die Einnahmen der CO2-Abgabe direkt an die Bürger zurückfließen."
    },
    {
      "question": "Welchen Schutzstatus streben die Grünen für das Biosphärenreservat Karstlandschaft Südharz an?",
      "answers": [
        "Umwandlung in einen Nationalpark",
        "Anerkennung als UNESCO-Biosphärenreservat",
        "Freigabe für den großflächigen Rohstoffabbau",
        "Zusammenlegung mit dem Harzer Nationalpark"
      ],
      "correct": 1,
      "hint": "Die Grünen wollen das Gipskarstgebiet als UNESCO-Biosphärenreservat international anerkennen lassen."
    },
    {
      "question": "Welche Rohstoffgewinnung lehnen die Grünen im Biosphärenreservat Südharz konsequent ab?",
      "answers": [
        "Kupferbergbau",
        "Den Gipsabbau in Schutzgebieten",
        "Kalisalzförderung",
        "Kies- und Sandabbau"
      ],
      "correct": 1,
      "hint": "Die Grünen stellen sich entschieden gegen Gipsabbau, um die einzigartige Gipskarstlandschaft zu erhalten."
    },
    {
      "question": "Welches länderübergreifende Lichtschutzgebiet soll laut den Grünen anerkannt werden?",
      "answers": [
        "Der Harzer Nationalpark",
        "Die Sternenparks in der Altmark und im Wendland",
        "Das Grüne Band Sachsen-Anhalt",
        "Der Drömling"
      ],
      "correct": 1,
      "hint": "Zur Verringerung der Lichtverschmutzung soll die Sternenpark-Region als Lichtschutzgebiet ausgewiesen werden."
    },
    {
      "question": "Was beinhaltet das von den Grünen geforderte 'Schwammwald-Konzept'?",
      "answers": [
        "Die Errichtung von Badeseen im Wald",
        "Das Halten von Wasser im Wald durch Aufstau und Rückbau von Entwässerungsgräben",
        "Die künstliche Beregnung von Nadelwäldern",
        "Den großflächigen Anbau von Moosflächen"
      ],
      "correct": 1,
      "hint": "Schwammwälder sollen das Wasser in der Fläche halten und die Wälder gegen Trockenheit schützen."
    },
    {
      "question": "Welche Einrichtung soll laut den Grünen pro Landkreis zur Biotopentwicklung entstehen?",
      "answers": [
        "Ein Forstamt für Sonderaufgaben",
        "Mindestens ein Landschaftspflegehof",
        "Eine mobile Umweltbibliothek",
        "Ein staatlicher Recyclinghof"
      ],
      "correct": 1,
      "hint": "Ein Landschaftspflegehof pro Landkreis soll Naturschutzmaßnahmen vor Ort besser organisieren."
    },
    {
      "question": "Wie wollen die Grünen den Wasserverbrauch von industriellen Großverbrauchern regulieren?",
      "answers": [
        "Durch ein striktes Wasserlimit pro Tag",
        "Durch höhere Wasserentnahmeentgelte für Großverbraucher",
        "Durch ein generelles Verbot von Brunnenbohrungen",
        "Durch die Privatisierung aller Wasserwerke"
      ],
      "correct": 1,
      "hint": "Höhere Wasserentnahmeentgelte sollen finanzielle Anreize zum Wassersparen in der Industrie setzen."
    },
    {
      "question": "Was fordern die Grünen zur Modernisierung von kommunalen Kläranlagen?",
      "answers": [
        "Die Reduzierung auf zwei Reinigungsstufen",
        "Den forcierten Ausbau der vierten Reinigungsstufe",
        "Die Schließung aller kleineren Klärwerke",
        "Die Ersetzung durch biologische Sumpffilter"
      ],
      "correct": 1,
      "hint": "Die vierte Reinigungsstufe soll Rückstände von Kosmetika und Medikamenten effektiv herausfiltern."
    },
    {
      "question": "Wie positionieren sich die Grünen grundsätzlich zu Windkraftanlagen im Wald?",
      "answers": [
        "Befürwortung eines unbeschränkten Ausbaus",
        "Grundsätzliche Ablehnung (Ausnahme Kalamitätsflächen unter strengen Kriterien)",
        "Windkraft nur in Naturschutzgebieten",
        "Ausschließliche Errichtung in Laubwäldern"
      ],
      "correct": 1,
      "hint": "Die Grünen lehnen Windkraft im Wald ab und lassen Ausnahmen nur auf geschädigten Kalamitätsflächen zu."
    },
    {
      "question": "Welche Haltung vertreten die Grünen bezüglich der rechtlichen Einstufung des Wolfs?",
      "answers": [
        "Aufnahme in das Jagdrecht zur Bejagung",
        "Rückgängigmachung der Jagdrechts-Eintragung und Schutz im Bundesnaturschutzrecht",
        "Vollständige Ausrottung in Sachsen-Anhalt",
        "Ausschließliche Haltung in Gehegen"
      ],
      "correct": 1,
      "hint": "Die Grünen fordern, die Jagdrechts-Eintragung des Wolfs zu streichen und den Naturschutz in den Fokus zu stellen."
    },
    {
      "question": "Welches Programm soll laut den Grünen zum Schutz von Feuchtgebieten entwickelt werden?",
      "answers": [
        "Ein Hochwasser-Sanierungsprogramm",
        "Ein Moorschutzprogramm sowie ein Förderprogramm für Auen",
        "Ein Entwässerungsprogramm für nasse Keller",
        "Ein Staudamm-Neubauprogramm"
      ],
      "correct": 1,
      "hint": "Moorschutz und Auenförderung sollen wichtige ökologische Speicherfunktionen stärken."
    },
    {
      "question": "Welche Haltung haben die Grünen zu Bauvorhaben in Überschwemmungsgebieten?",
      "answers": [
        "Förderung von Wohnungsbau an Flüssen",
        "Generelles Bauverbot (Ausnahme PV-Anlagen und landwirtschaftliche Unterstände)",
        "Bauvorhaben ab 3 Etagen erlauben",
        "Es sind keine Einschränkungen geplant"
      ],
      "correct": 1,
      "hint": "Um Hochwasserschäden zu vermeiden, soll die Bebauung in Risikogebieten strikt untersagt werden."
    },
    {
      "question": "Welches Recht soll für Umweltverbände laut den Grünen unbedingt erhalten bleiben?",
      "answers": [
        "Das Veto-Recht bei Landtagswahlen",
        "Das Verbandsklagerecht",
        "Das Steuererhebungsrecht für Vereine",
        "Das Recht auf polizeiliche Ermittlungen"
      ],
      "correct": 1,
      "hint": "Das Verbandsklagerecht soll den Umweltschutzverbänden als rechtliche Säule erhalten bleiben."
    },
    {
      "question": "Welche Institution soll zur Ausbildung von Fachkräften im Naturschutz aufgebaut werden?",
      "answers": [
        "Ein forstliches Prüfungsamt",
        "Eine Naturschutzakademie",
        "Eine landeseigene Waldschule",
        "Ein Naturschutz-Forschungszentrum Halle"
      ],
      "correct": 1,
      "hint": "Eine Naturschutzakademie soll Fachkräften und Ehrenamtlichen fundiertes Wissen vermitteln."
    },
    {
      "question": "Welches Ziel setzen sich die Grünen für die landwirtschaftliche Nutzfläche in Sachsen-Anhalt?",
      "answers": [
        "100% ökologische Bewirtschaftung bis 2030",
        "Erhöhung des Öko-Landbau-Anteils auf 30%",
        "Vollständige Umstellung auf konventionellen Anbau",
        "Reduzierung der Anbauflächen um ein Drittel"
      ],
      "correct": 1,
      "hint": "Die Grünen wollen den Öko-Landbau stärken und streben einen signifikanten Zuwachs auf 30% an."
    },
    {
      "question": "Was fordern die Grünen bezüglich der Gesetzgebung zur künstlichen Beleuchtung?",
      "answers": [
        "Verpflichtende Beleuchtung aller Landstraßen",
        "Die Aufnahme der Lichtverschmutzung in das Naturschutzgesetz",
        "Die Abschaffung von Straßenlaternen in Kleinstädten",
        "Keine gesetzliche Regulierung"
      ],
      "correct": 1,
      "hint": "Die Aufnahme der Lichtverschmutzung ins Naturschutzgesetz soll nachtaktive Tiere schützen."
    },
    {
      "question": "Welche Hürden wollen die Grünen für Bürgerbegehren auf kommunaler Ebene senken?",
      "answers": [
        "Die Pflicht zur namentlichen Unterschrift",
        "Das Zustimmungsquorum auf maximal 5 Prozent der Wahlberechtigten",
        "Den Ausschluss von Finanzthemen",
        "Das Mindestalter auf 21 Jahre anheben"
      ],
      "correct": 1,
      "hint": "Die Senkung der Quoren soll die Hürden für direkte Demokratie vor Ort abbauen."
    },
    {
      "question": "Welches neue Beteiligungsformat soll auf Landesebene etabliert werden?",
      "answers": [
        "Monatliche Bürgerbefragungen per Post",
        "Bürgerräte auf Landes- und Kommunalebene für Zukunftsfragen",
        "Ein Volksentscheid für jedes neue Gesetz",
        "Ein Beratungsausschuss nur für Großgrundbesitzer"
      ],
      "correct": 1,
      "hint": "Bürgerräte sollen repräsentativ Zukunftsfragen diskutieren und Empfehlungen erarbeiten."
    },
    {
      "question": "Ab welchem Alter soll das Wahlrecht laut den Grünen gelten?",
      "answers": [
        "Ab 12 Jahren bei Kommunalwahlen",
        "Ab 16 Jahren bei Kommunal- und Landtagswahlen",
        "Generell ab 18 Jahren ohne Ausnahmen",
        "Ab 14 Jahren nur bei Schulwahlen"
      ],
      "correct": 1,
      "hint": "Die Grünen fordern die Absenkung des Wahlalters auf 16 Jahre bei Landtags- und Kommunalwahlen."
    },
    {
      "question": "Welche Maßnahme zur Verkehrsberuhigung schlagen die Grünen für Ortskerne vor?",
      "answers": [
        "Die Sperrung für den gesamten Lieferverkehr",
        "Ein landesweites Konzept für verkehrsberuhigte Dorf- und Stadtkerne",
        "Die Erhöhung von Parkgebühren in Großstädten",
        "Den Rückbau aller Bundesstraßen"
      ],
      "correct": 1,
      "hint": "Die Grünen wollen die Lebensqualität erhöhen, indem Ortskerne verkehrsberuhigt gestaltet werden."
    },
    {
      "question": "Was wollen die Grünen im Schienenverkehr zum Nulltarif erhalten?",
      "answers": [
        "Die kostenlose Beförderung von Haustieren",
        "Die kostenlose Fahrrad-Mitnahme in Regional- und S-Bahnen",
        "Die Nutzung der 1. Klasse für Inhaber des Deutschlandtickets",
        "Den Getränkeservice im Nahverkehr"
      ],
      "correct": 1,
      "hint": "Die kostenlose Fahrradmitnahme im Nahverkehr soll als klimafreundlicher Standard gesichert werden."
    },
    {
      "question": "Wie soll die Unterstützung von Tierheimen in Sachsen-Anhalt aussehen?",
      "answers": [
        "Ausschließliche Finanzierung durch Spenden",
        "Verlässliche institutionelle Landesförderung zur Entlastung der Kommunen",
        "Die Übergabe an private Tierschutzkonzerne",
        "Die Schließung aller Heime zugunsten mobiler Tierhilfe"
      ],
      "correct": 1,
      "hint": "Tierheime sollen verlässliche Landesmittel erhalten, da Tierschutz als Staatsaufgabe verstanden wird."
    }
  ],
  "fdp": [
    {
      "question": "Was fordert die FDP in Bezug auf das Tariftreue- und Vergabegesetz des Landes?",
      "answers": [
        "Erweiterung auf alle Branchen",
        "Komplette Abschaffung",
        "Striktere Einhaltung",
        "Erhöhung des Mindestlohns"
      ],
      "correct": 1,
      "hint": "Die FDP fordert die Abschaffung des Tariftreue- und Vergabegesetzes zur Entlastung des Mittelstandes."
    },
    {
      "question": "Welches innovative Wirtschaftskonzept möchte die FDP in Sachsen-Anhalt erproben?",
      "answers": [
        "Die Verstaatlichung der Chemieindustrie",
        "Sonderwirtschaftszonen (z.B. Leuna und Intel-Gelände) mit Steuerbefreiung und Fristen",
        "Eine genossenschaftliche Landwirtschaftspflicht",
        "Die Einführung eines bedingungslosen Grundeinkommens"
      ],
      "correct": 1,
      "hint": "Sonderwirtschaftszonen sollen durch Steuererlass und Express-Genehmigungen Investitionen anlocken."
    },
    {
      "question": "Was plant die FDP bezüglich des Ladenöffnungszeitengesetzes?",
      "answers": [
        "Die Verkürzung der Ladenöffnungszeiten am Samstag",
        "Die vollständige Liberalisierung (inklusive Sonn- und Feiertagsöffnungen)",
        "Ein Verbot der Sonntagsarbeit für Supermärkte",
        "Die Vorgabe von einheitlichen Schließzeiten ab 20 Uhr"
      ],
      "correct": 1,
      "hint": "Die FDP will die Ladenöffnungszeiten komplett freigeben, um Händlern maximale Flexibilität zu ermöglichen."
    },
    {
      "question": "Welche bürokratische Last möchte die FDP für Unternehmensgründer abschaffen?",
      "answers": [
        "Die Pflicht zur Steuererklärung",
        "Die Zwangsmitgliedschaften in den Kammern (IHK, HWK)",
        "Die Verpflichtung zur Krankenversicherung",
        "Die Pflicht zur Gewerbeanmeldung"
      ],
      "correct": 1,
      "hint": "Gründer sollen in den ersten Jahren von bürokratischen Zwangsmitgliedschaften entlastet werden."
    },
    {
      "question": "Innerhalb welcher Frist sollen Ausländerbehörden laut FDP arbeitsrelevante Aufenthaltstitel erteilen?",
      "answers": [
        "Innerhalb von 6 Monaten",
        "Innerhalb von 4 Wochen",
        "Innerhalb von 3 Monaten",
        "Innerhalb von 24 Stunden"
      ],
      "correct": 1,
      "hint": "Die FDP fordert eine massive Beschleunigung und Digitalisierung auf eine Frist von 4 Wochen."
    },
    {
      "question": "Bis wann soll die Abschiebungshafteinrichtung in Sachsen-Anhalt laut FDP in Betrieb gehen?",
      "answers": [
        "Spätestens Ende 2030",
        "Spätestens Ende 2027",
        "Sofort im Jahr 2026",
        "Es soll keine Abschiebungshaft geben"
      ],
      "correct": 1,
      "hint": "Die FDP will die Abschiebungshafteinrichtung bis spätestens Ende 2027 einsatzbereit machen."
    },
    {
      "question": "Welche Entlastung plant die FDP für kommunale Wohnungsgesellschaften?",
      "answers": [
        "Die Erhöhung der Mieten im Sozialbereich",
        "Einen landeseigenen Altschuldenfonds zur Tilgung von DDR-Altschulden",
        "Die Verstaatlichung der Wohnungsbestände",
        "Die Erhöhung der Grundsteuer"
      ],
      "correct": 1,
      "hint": "Ein Altschuldenfonds soll historische DDR-Altschulden abbauen, um Investitionsmittel freizusetzen."
    },
    {
      "question": "Wie positioniert sich die FDP zum Thema Kernenergie?",
      "answers": [
        "Ausstieg aus allen Atomkraftprojekten",
        "Wiedereinstieg und technologyoffener Neubau moderner Kernenergieanlagen",
        "Errichtung von Atommüll-Endlagern in allen Landkreisen",
        "Nutzung von Kernenergie nur für medizinische Zwecke"
      ],
      "correct": 1,
      "hint": "Die FDP fordert den Wiedereinstieg in die Kernkraft und den Neubau moderner Kernkraftwerke."
    },
    {
      "question": "Welche Reaktor-Technologie will die FDP in Sachsen-Anhalt erproben?",
      "answers": [
        "Fusionsreaktoren nach russischem Vorbild",
        "Small Modular Reactors (SMR)",
        "Herkömmliche Siedewasserreaktoren",
        "Biogas-Fusionskraftwerke"
      ],
      "correct": 1,
      "hint": "Kompakte modulare Reaktoren (SMR) sollen als innovative Energiequellen geprüft werden."
    },
    {
      "question": "Was fordert die FDP zur Gewinnung von Erdgas in Deutschland?",
      "answers": [
        "Einen kompletten Stopp aller Gasbohrungen",
        "Die Schiefergasgewinnung durch unkonventionelles Fracking unter wissenschaftlichen Auflagen",
        "Den Import von Flüssiggas ausschließlich per Schiff",
        "Die Ersetzung aller Gasheizungen durch Kohleöfen"
      ],
      "correct": 1,
      "hint": "Die FDP will das Fracking-Verbot durch ein wissenschaftsbasiertes Genehmigungsregime ersetzen."
    },
    {
      "question": "Was fordert die FDP zur Grunderwerbsteuer bei landwirtschaftlichen Flächen?",
      "answers": [
        "Die Erhöhung der Steuer auf 8%",
        "Die Abschaffung der doppelten Grunderwerbsteuer bei Vorkaufsrechtsfällen",
        "Die Befreiung aller Großagrarier von der Steuer",
        "Die Abschaffung des Vorkaufsrechts der Landgesellschaft"
      ],
      "correct": 1,
      "hint": "Der doppelte Anfall von Grunderwerbsteuer beim Zwischenerwerb durch die Landgesellschaft soll entfallen."
    },
    {
      "question": "Auf welchen Wert will die FDP die Kontrolldichte bei landwirtschaftlichen Betrieben senken?",
      "answers": [
        "Auf 3% der Betriebe",
        "Von 5% auf 1% der Betriebe",
        "Auf 0% (vollständige Abschaffung aller Kontrollen)",
        "Erhöhung auf 10% zur Qualitätssicherung"
      ],
      "correct": 1,
      "hint": "Die FDP fordert eine Reduzierung der bürokratischen Vor-Ort-Kontrollen auf 1% der Betriebe."
    },
    {
      "question": "Welchen Erlass aus dem Jahr 2019 möchte die FDP abschaffen?",
      "answers": [
        "Den Schulsanierungserlass",
        "Den landeseigenen Tierschutz-Tiertransporterlass",
        "Den Straßenausbaubeitragserlass",
        "Den Digitalisierungs-Erlass"
      ],
      "correct": 1,
      "hint": "Die FDP lehnt wettbewerbsverzerrende nationale Sonderregelungen bei Tiertransporten ab."
    },
    {
      "question": "Wie steht die FDP zum Thema erzieherische Steuern (z.B. Zuckersteuer)?",
      "answers": [
        "Massive Befürwortung zur Gesundheitsförderung",
        "Konsequente Ablehnung von Zuckersteuer und anderen Lenkungsabgaben",
        "Einführung einer Fett- und Zuckersteuer ab 2027",
        "Steuern nur auf importierte Süßwaren"
      ],
      "correct": 1,
      "hint": "Die FDP lehnt staatliche Bevormundung durch erzieherische Konsumsteuern strikt ab."
    },
    {
      "question": "Welche Steuern mit geringem Aufkommen will die FDP streichen?",
      "answers": [
        "Die Einkommensteuer für Geringverdiener",
        "Die Bier-, Kaffee- und Schaumweinsteuer",
        "Die Grundsteuer A",
        "Die Gewerbesteuer für Handwerker"
      ],
      "correct": 1,
      "hint": "Die FDP will Bagatellsteuern wie die Kaffee- und Biersteuer ersatzlos streichen."
    },
    {
      "question": "Was schlägt die FDP bezüglich der Beteiligungen des Landes an Unternehmen vor?",
      "answers": [
        "Die Verstaatlichung aller Banken",
        "Eine umfassende Privatisierungsoffensive",
        "Den Ausbau staatlicher Mehrheitsbeteiligungen",
        "Die Zusammenlegung aller Staatsbetriebe"
      ],
      "correct": 1,
      "hint": "Die FDP will staatliche Beteiligungen abbauen und vertraut auf den freien Markt."
    },
    {
      "question": "Welche Regelung an Hochschulen lehnt die FDP im Bereich der Forschung ab?",
      "answers": [
        "Die Notenpflicht",
        "Zivilklauseln (Verbot von Rüstungsforschung)",
        "Die Pflicht zur Veröffentlichung",
        "Die freie Wahl des Forschungsthemas"
      ],
      "correct": 1,
      "hint": "Um die Vernetzung mit der Verteidigungsindustrie zu stärken, lehnt die FDP Zivilklauseln ab."
    },
    {
      "question": "Welche Industriebranche will die FDP als neuen Wachstumsmotor im Land etablieren?",
      "answers": [
        "Die Textilindustrie",
        "Die Rüstungs- und Verteidigungsindustrie",
        "Die traditionelle Kohleindustrie",
        "Die Tabakindustrie"
      ],
      "correct": 1,
      "hint": "Sachsen-Anhalt soll von den Rüstungsinvestitionen des Bundes profitieren und Betriebe ansiedeln."
    },
    {
      "question": "Wie steht die FDP zur Gewinnung heimischer Bodenschätze (z.B. Lithium)?",
      "answers": [
        "Vollständiges Verbot aller Minenprojekte",
        "Verantwortungsvolle Nutzbarmachung durch schnelle, unbürokratische Genehmigungen",
        "Gewinnung nur durch staatliche Betriebe",
        "Es gibt keine Bodenschätze in Sachsen-Anhalt"
      ],
      "correct": 1,
      "hint": "Die FDP will Bodenschätze wie Lithium oder Schiefergas im Land aktiv heben und verarbeiten."
    },
    {
      "question": "Welches mildere Mittel schlägt die FDP anstelle von Abschiebungshaft vor?",
      "answers": [
        "Ein wöchentliches Meldegespräch",
        "Die gerichtliche Anordnung elektronischer Fußfesseln",
        "Eine freiwillige Zusage zur Ausreise",
        "Die Unterbringung in Luxushotels"
      ],
      "correct": 1,
      "hint": "Elektronische Fußfesseln sollen als weniger einschneidende Maßnahme eingesetzt werden können."
    },
    {
      "question": "Welche steuerliche Entlastung plant die FDP beim Erwerb von Eigenheim?",
      "answers": [
        "Die Befreiung von der Grundsteuer",
        "Einen Grunderwerbsteuer-Freibetrag für den erstmaligen Erwerb selbstgenutzten Wohneigentums",
        "Die Abschaffung der Grunderwerbsteuer für alle Käufer",
        "Zinslose Kredite nur für Großinvestoren"
      ],
      "correct": 1,
      "hint": "Der Freibetrag soll in Verbindung mit IB-Förderungen jungen Familien den Eigentumserwerb erleichtern."
    },
    {
      "question": "Welche Neuerung will die FDP bei langwierigen Bau-Genehmigungsverfahren durchsetzen?",
      "answers": [
        "Die Verlängerung der Antragsfristen",
        "Die konsequente Einführung einer Genehmigungsfiktion",
        "Die Verpflichtung zu analogen Bauplänen",
        "Die manuelle Prüfung aller Anträge im Bauministerium"
      ],
      "correct": 1,
      "hint": "Dank Genehmigungsfiktion soll ein Bauantrag nach Ablauf einer Frist automatisch als genehmigt gelten."
    },
    {
      "question": "Was fordert die FDP bezüglich der Flächenziele beim Windkraftausbau?",
      "answers": [
        "Die Verdoppelung der Flächenziele",
        "Den Entfall des Flächenziels, wenn das erzeugte Energiemengen-Ziel erreicht ist",
        "Die Errichtung von Windrädern auf 10% der Landesfläche",
        "Die Abschaffung aller Windkraftanlagen"
      ],
      "correct": 1,
      "hint": "Erreicht das Land sein erzeugtes Energiemengen-Ziel vorzeitig, soll das Flächenziel entfallen."
    },
    {
      "question": "Welche Technologie soll in der Landwirtschaft laut FDP beim Pflanzenschutz erlaubt werden?",
      "answers": [
        "Die manuelle Ausbringung",
        "Die Nutzung von Drohnen zur gezielten Ausbringung",
        "Das Verbot aller chemischen Pflanzenschutzmittel",
        "Die Ausbringung per Hubschrauber auf ganzer Fläche"
      ],
      "correct": 1,
      "hint": "Die FDP fordert, die automatisierte Ausbringung mittels Agrardrohnen praxistauglich zuzulassen."
    },
    {
      "question": "Welche Rolle sollen die Bundesbehörden im Pflanzenschutzrecht einnehmen?",
      "answers": [
        "Das UBA soll alleinig entscheiden",
        "BfR, BVL, JKI und UBA sollen wieder gleichberechtigte Partner ohne Vorrangstellung des UBA werden",
        "Die Auflösung aller Bundesbehörden",
        "Die ausschließliche Orientierung an EU-Behörden ohne nationale Kontrolle"
      ],
      "correct": 1,
      "hint": "Die FDP will die Vorrangstellung des Umweltbundesamtes (UBA) im Pflanzenschutzrecht beenden."
    }
  ],
  "linke": [
    {
      "question": "Ab welchem Alter fordert Die Linke die Herabsetzung des aktiven Wahlalters auf kommunaler und Landesebene?",
      "answers": [
        "16 Jahre",
        "14 Jahre",
        "12 Jahre",
        "18 Jahre"
      ],
      "correct": 1,
      "hint": "Die Linke will das aktive Wahlalter auf 14 Jahre absenken, um die Beteiligung junger Menschen zu stärken."
    },
    {
      "question": "Welches Amt soll laut Linken als Schnittstelle zur besseren Bearbeitung von Bürgerbeschwerden geschaffen werden?",
      "answers": [
        "Ein Ombudsmann für Finanzen",
        "Ein Bürgerbeauftragter",
        "Ein staatlicher Petitionspfleger",
        "Ein Beauftragter für Verbraucherschutz"
      ],
      "correct": 1,
      "hint": "Der Bürgerbeauftragte soll als direkte, neutrale Anlaufstelle für Beschwerden über die Verwaltung dienen."
    },
    {
      "question": "Welche historische Finanzzahlung an die Kirchen will Die Linke ablösen?",
      "answers": [
        "Die Kirchensteuer",
        "Die Staatskirchenleistungen",
        "Die Subventionierung von Kirchenrenovierungen",
        "Den Religionsunterrichtsbeitrag"
      ],
      "correct": 1,
      "hint": "Die Linke fordert das Ende der historischen Staatsleistungen an die großen christlichen Kirchen."
    },
    {
      "question": "Welches Tarif-Modell fordert Die Linke für den gesamten öffentlichen Nahverkehr in Sachsen-Anhalt?",
      "answers": [
        "Ein 365-Euro-Jahresticket",
        "Den ticketfreien ÖPNV (Nulltarif)",
        "Ein km-basiertes Abrechnungssystem",
        "Das kostenlose Ticket nur für Schüler"
      ],
      "correct": 1,
      "hint": "Die Linke fordert den schrittweisen Umbau des ÖPNV hin zu einem kostenfreien Nulltarif für alle Bürger."
    },
    {
      "question": "Wie positioniert sich Die Linke zum Autobahnnetz in Sachsen-Anhalt?",
      "answers": [
        "Ausbau aller Bundesautobahnen auf 6 Spuren",
        "Verbot des Neubaus von Autobahnen im Land",
        "Die Privatisierung des Autobahnnetzes",
        "Den Rückbau aller Autobahnen ab 2030"
      ],
      "correct": 1,
      "hint": "Die Linke fordert einen Stopp des Autobahn-Neubaus und will Gelder in Schienen und ÖPNV investieren."
    },
    {
      "question": "Welche Institution soll gegründet werden, um bezahlbaren und barrierefreien Wohnraum zu schaffen?",
      "answers": [
        "Ein privates Wohnungsbaukartell",
        "Eine landeseigene Wohnungsbaugesellschaft",
        "Eine Bundes-Wohngeldstelle",
        "Ein kommunaler Altschuldenverband"
      ],
      "correct": 1,
      "hint": "Eine Landeswohnungsbaugesellschaft soll den sozialen Wohnungsbau ankurbeln und Mieten deckeln."
    },
    {
      "question": "Wie hoch soll die Medien-Offensive ausfallen, die Die Linke zur Stärkung des Regionaljournalismus plant?",
      "answers": [
        "10 Millionen Euro",
        "100 Millionen Euro",
        "50 Millionen Euro",
        "5 Millionen Euro"
      ],
      "correct": 1,
      "hint": "Die Linke schlägt eine 100 Millionen Euro Medien-Offensive vor, um die lokale Medienlandschaft abzusichern."
    },
    {
      "question": "Auf welchen Wert soll das Zustimmungsquorum für Bürgerbegehren laut den Linken gesenkt werden?",
      "answers": [
        "Auf 10% der Wahlberechtigten",
        "Auf maximal 5% der Wahlberechtigten",
        "Auf 1% der Wahlberechtigten",
        "Bürgerbegehren sollen verboten werden"
      ],
      "correct": 1,
      "hint": "Die Linke will direkte Demokratie erleichtern, indem das Hürdenquorum auf 5% abgesenkt wird."
    },
    {
      "question": "Was versteht Die Linke unter dem neuen Beteiligungselement der 'Einwohnerinitiative'?",
      "answers": [
        "Eine Abstimmung per App",
        "Die Pflicht des Landtags zur Befassung mit einem Thema ab 1.000 Einwohner-Unterschriften",
        "Die Gründung von Bürgerwehren",
        "Die Pflicht zur Teilnahme an Gemeinderatssitzungen"
      ],
      "correct": 1,
      "hint": "Ab 1.000 Unterschriften sollen sich Fachausschüsse des Landtags zwingend mit Bürgeranliegen befassen müssen."
    },
    {
      "question": "Welche zwei Instrumente will Die Linke im Rahmen des bürgerschaftlichen Engagements etablieren?",
      "answers": [
        "Eine Ehrenamtspflicht und Zwangsabgaben",
        "Einen Ehrenamtsfonds und ein Ehrenamtsstärkungsgesetz",
        "Ein kostenloses Freizeitticket und Steuererlasse",
        "Eine Ehrenamts-Plakette und Ehrennadeln"
      ],
      "correct": 1,
      "hint": "Ein Ehrenamtsstärkungsgesetz und ein Ehrenamtsfonds sollen Freiwilligenarbeit finanziell und rechtlich stützen."
    },
    {
      "question": "Was fordert Die Linke bezüglich des Besuchs von NS-Gedenkstätten durch Schüler?",
      "answers": [
        "Einen freiwilligen Besuch in der Oberstufe",
        "Jeder Jugendliche soll bis zum Ende der Schulzeit mindestens einmal eine NS-Gedenkstätte besuchen",
        "Ein Verbot von Schulausflügen zu Gedenkstätten",
        "Besuche nur für Geschichtsleistungskurse"
      ],
      "correct": 1,
      "hint": "Die Linke fordert den verpflichtenden Besuch einer NS-Gedenkstätte als festen Teil der politischen Bildung."
    },
    {
      "question": "Wie soll die Zukunft der privaten Krankenhäuser laut den Linken aussehen?",
      "answers": [
        "Vollständige Privatisierung aller Kliniken",
        "Die Rückführung aller Krankenhäuser in die öffentliche Hand (Gemeinwohl statt Profit)",
        "Die Umwandlung in reine Pflegeheime",
        "Schließung aller Krankenhäuser unter 100 Betten"
      ],
      "correct": 1,
      "hint": "Die Linke fordert die Rekommunalisierung von Krankenhäusern zur Sicherung der Daseinsvorsorge."
    },
    {
      "question": "Welche Mindest-Versorgung fordert Die Linke für alle Krankenhausstandorte im Land?",
      "answers": [
        "Einen Hubschrauberlandeplatz",
        "Gesetzlich gesicherte Notaufnahmen",
        "Eine Entbindungsstation",
        "Ein telemedizinisches Terminal"
      ],
      "correct": 1,
      "hint": "Die Linke will Notaufnahmen an allen Krankenhausstandorten gesetzlich fest schreiben und erhalten."
    },
    {
      "question": "Welchen Steuersatz fordert Die Linke auf Bundesebene zur Bekämpfung sozialer Ungleichheit?",
      "answers": [
        "Eine Erhöhung der Einkommensteuer auf 50%",
        "Eine 1%ige Vermögenssteuer auf Vermögen über einer Million Euro",
        "Die Erhöhung der Mehrwertsteuer auf Luxusgüter",
        "Die Einführung einer Finanztransaktionssteuer für alle Konten"
      ],
      "correct": 1,
      "hint": "Die Linke schlägt eine jährliche Vermögenssteuer von 1% ab einer Million Euro zur Finanzierung des Sozialstaats vor."
    },
    {
      "question": "Welches Ziel setzt sich Die Linke für die Betreuungskosten in Kitas?",
      "answers": [
        "Die Erhöhung der Beiträge zur Qualitätsverbesserung",
        "Die Deckelung und schrittweise komplette Beitragsfreiheit",
        "Die Beibehaltung des aktuellen Beitragsniveaus",
        "Die komplette Übertragung der Kosten auf die Eltern"
      ],
      "correct": 1,
      "hint": "Die Linke fordert die vollständige Beitragsfreiheit für Kitas und Horte."
    },
    {
      "question": "Wie will Die Linke das pädagogische Personal an den Schulen im Schulalltag entlasten?",
      "answers": [
        "Durch Erhöhung der wöchentlichen Pflichtstunden",
        "Durch die Einführung von multiprofessionellen Teams an allen Schulen",
        "Durch die Einstellung von Hilfskräften ohne Bezahlung",
        "Durch die Ersetzung von Lehrern durch digitale Systeme"
      ],
      "correct": 1,
      "hint": "Multiprofessionelle Teams (Schulsozialarbeiter, IT-Kräfte, Verwaltung) sollen Lehrer entlasten."
    },
    {
      "question": "Was fordert Die Linke bezüglich der gesetzlichen Verankerung der Horte?",
      "answers": [
        "Horte sollen abgeschafft werden",
        "Die Verankerung der Horte im Schulgesetz des Landes",
        "Die Betreuung in Horten soll privatisiert werden",
        "Horte nur noch an Gymnasien"
      ],
      "correct": 1,
      "hint": "Horte sollen als fester Bestandteil des Bildungssystems im Schulgesetz verankert werden."
    },
    {
      "question": "Wie will Die Linke die Tarifbindung in Sachsen-Anhalt aktiv erhöhen?",
      "answers": [
        "Durch gesetzliche Mindestlohn-Vorgaben für alle Betriebe",
        "Durch die Vergabe öffentlicher Aufträge ausschließlich an tarifgebundene Betriebe",
        "Durch das Verbot von Tarifverträgen in der Pflege",
        "Durch Erhöhung der Körperschaftssteuer"
      ],
      "correct": 1,
      "hint": "Öffentliche Aufträge des Landes sollen nur noch an Betriebe vergeben werden, die nach Tarif zahlen."
    },
    {
      "question": "Welche Ausnahme fordert Die Linke für die verfassungsrechtliche Schuldenbremse?",
      "answers": [
        "Die Abschaffung der Schuldenbremse für Rüstungsausgaben",
        "Eine verfassungsrechtlich verankerte Ausnahme für dringende Zukunftsinvestitionen",
        "Die Aussetzung der Schuldenbremse nur in Wahljahren",
        "Keine Ausnahmen"
      ],
      "correct": 1,
      "hint": "Die Linke fordert Investitionskredite für Schulen, ÖPNV und Klimaschutz trotz Schuldenbremse."
    },
    {
      "question": "Was fordert Die Linke für den Flughafen Leipzig/Halle?",
      "answers": [
        "Den Ausbau einer dritten Startbahn",
        "Den Stopp der militärischen Nutzung des Flughafens",
        "Die komplette Privatisierung des Flughafengeländes",
        "Die Verlegung des Flughafens nach Sachsen-Anhalt"
      ],
      "correct": 1,
      "hint": "Die Linke lehnt die militärische Nutzung des zivilen Flughafens ab und fordert Rüstungskonversion."
    },
    {
      "question": "Wie positioniert sich Die Linke zur Rüstungsforschung an Hochschulen?",
      "answers": [
        "Förderung der Rüstungsforschung mit Landesmitteln",
        "Verbot von Rüstungsforschung und Beibehaltung von Zivilklauseln",
        "Errichtung von Rüstungsstudiengängen",
        "Keine Regulierung"
      ],
      "correct": 1,
      "hint": "Die Linke lehnt Militärforschung ab und verteidigt Zivilklauseln an sachsen-anhaltischen Hochschulen."
    },
    {
      "question": "Welche finanzielle Unterstützung fordert Die Linke für Menschen mit Behinderungen?",
      "answers": [
        "Die Streichung aller Beihilfen",
        "Die Einführung eines Gehörlosengeldes und die Erhöhung des Blindgeldes",
        "Einmalige Beihilfen nur auf Antrag",
        "Keine Erhöhungen"
      ],
      "correct": 1,
      "hint": "Die Linke fordert verbesserte finanzielle Absicherungen wie die Erhöhung des Blindengeldes."
    },
    {
      "question": "Wie soll der Schutz von Frauen vor Gewalt laut den Linken gestärkt werden?",
      "answers": [
        "Durch den Abbau von Frauenhäusern",
        "Durch den Ausbau von Frauenhäusern und eine auskömmliche Finanzierung",
        "Durch reine Online-Beratungsprogramme",
        "Durch Erhöhung der Polizeipräsenz vor Frauenhäusern"
      ],
      "correct": 1,
      "hint": "Die Linke fordert den Ausbau und die dauerhafte finanzielle Absicherung des Netzes von Frauenhäusern."
    },
    {
      "question": "Welche Technologie lehnt Die Linke zur Überwachung im öffentlichen Raum ab?",
      "answers": [
        "Analoge Kameras an Bahnhöfen",
        "Kameras mit automatischer Gesichtserkennung",
        "Den Einsatz von Streifenpolizisten",
        "Bodycams für Feuerwehrleute"
      ],
      "correct": 1,
      "hint": "Die Linke lehnt biometrische Massenüberwachung und Gesichtserkennungs-Software im öffentlichen Raum ab."
    },
    {
      "question": "Welchen Schutz fordert Die Linke bei Mietschulden zur Verhinderung von Obdachlosigkeit?",
      "answers": [
        "Die Erhöhung der Säumniszinsen",
        "Ein gesetzliches Verbot von Zwangsräumungen bei Zahlungsunfähigkeit",
        "Die fristlose Kündigung ab dem ersten Verzugstag",
        "Die Unterbringung in Containerdörfern"
      ],
      "correct": 1,
      "hint": "Zwangsräumungen sollen verboten werden, wenn Mieter unverschuldet in Zahlungsnot geraten."
    }
  ],
  "bsw": [
    {
      "question": "Welche Obergrenze fordert das BSW für den Benzinpreis an Tankstellen in Sachsen-Anhalt?",
      "answers": [
        "1,80 Euro",
        "1,50 Euro",
        "1,20 Euro",
        "2,00 Euro"
      ],
      "correct": 1,
      "hint": "Das BSW fordert: „Keine Tankstelle darf Sprit über 1,50 Euro anbieten!“"
    },
    {
      "question": "Was fordert das BSW bezüglich der CO2-Abgabe?",
      "answers": [
        "Erhöhung zur Erreichung der Klimaziele",
        "Die vollständige Abschaffung auf Landes- und Bundesebene",
        "Die Ersetzung durch eine Energiesteuer",
        "Die Erhebung nur für ausländische Unternehmen"
      ],
      "correct": 1,
      "hint": "Die CO2-Abgabe wird als unsoziale Belastung abgelehnt und soll abgeschafft werden."
    },
    {
      "question": "Wie positioniert sich das BSW zu Windkraftanlagen in Wäldern?",
      "answers": [
        "Befürwortung eines unbeschränkten Ausbaus",
        "Ablehnung von Windkraftanlagen in Wäldern ('Wälder sind keine Industrieflächen')",
        "Errichtung nur in Nadelwäldern",
        "Windkraft nur in staatlichen Forstgebieten"
      ],
      "correct": 1,
      "hint": "Das BSW lehnt Windkraftanlagen in Wäldern ab, da sie wertvolle Ökosysteme zerstören."
    },
    {
      "question": "Welche Maßnahme fordert das BSW zur Aufarbeitung der Corona-Politik in Sachsen-Anhalt?",
      "answers": [
        "Die Einführung einer Maskenpflicht im Winter",
        "Die Einsetzung eines parlamentarischen Untersuchungsausschusses im Landtag",
        "Den Ausschluss aller Kritiker von Wahlen",
        "Die Fortführung der epidemischen Notlage"
      ],
      "correct": 1,
      "hint": "Das BSW fordert einen Untersuchungsausschuss zur Aufarbeitung der Landesentscheidungen."
    },
    {
      "question": "Welche finanzielle Maßnahme fordert das BSW für von Corona-Maßnahmen Betroffene?",
      "answers": [
        "Erhöhung der Bußgelder für Maskenverweigerer",
        "Amnestie und Erlass aller Corona-Bußgelder sowie Erlass der Rückzahlungen von Coronahilfen bis 5.000 Euro",
        "Die Erhöhung der Steuern zur Schuldentilgung",
        "Keine Erstattungen"
      ],
      "correct": 1,
      "hint": "Das BSW will Bußgelder amnestieren und Rückzahlungsforderungen bei Kleinstunternehmen erlassen."
    },
    {
      "question": "Wie steht das BSW zur Gewinnung von Fracking-Gas?",
      "answers": [
        "Erprobung in Sachsen-Anhalt zur Gaseinsparung",
        "Ablehnung jeglicher Nutzung von Fracking-Gas und Schiefergas",
        "Zulassung unter der Bedingung der Umweltverträglichkeit",
        "Ausschließliche Nutzung für die chemische Industrie"
      ],
      "correct": 1,
      "hint": "Das BSW lehnt unkonventionelles Fracking und Schiefergasgewinnung aus ökologischen Gründen ab."
    },
    {
      "question": "Welche Kategorie des Verfassungsschutzes will das BSW abschaffen?",
      "answers": [
        "Die Spionageabwehr",
        "Die Extremismuskategorie 'verfassungsschutzrelevante Delegitimierung des Staates'",
        "Den Schutz vor Linksextremismus",
        "Den Kampf gegen Cyberkriminalität"
      ],
      "correct": 1,
      "hint": "Das BSW sieht in dieser unpräzisen Kategorie die Gefahr einer Kriminalisierung legitimer Regierungskritik."
    },
    {
      "question": "Wie positioniert sich das BSW zu Rüstungskrediten über den Bundesrat?",
      "answers": [
        "Zustimmung zur Erhöhung der Rüstungsausgaben",
        "Nein zu diesen Kriegskrediten und Aufrüstungspaketen",
        "Zustimmung nur bei Produktion in Sachsen-Anhalt",
        "Rüstungsausgaben sollen verdoppelt werden"
      ],
      "correct": 1,
      "hint": "Das BSW lehnt die Aufweichung der Schuldenbremse für Rüstungsgüter und Panzer ab."
    },
    {
      "question": "Was fordert das BSW bezüglich der Präsenz der Bundeswehr an Schulen?",
      "answers": [
        "Verpflichtende Besuche von Jugendoffizieren in allen Klassen",
        "Verbot von Werbung der Bundeswehr an Schulen und öffentlichen Einrichtungen",
        "Errichtung von Wehrkunde-Studiengängen",
        "Bundeswehrbesuche nur bei Freiwilligkeit"
      ],
      "correct": 1,
      "hint": "Schulen müssen laut BSW Orte der Friedensbildung bleiben - nicht Rekrutierungsräume."
    },
    {
      "question": "Wie steht das BSW zur Rolle Sachsen-Anhalts bei NATO-Operationen?",
      "answers": [
        "Ausbau Sachsen-Anhalts zur zentralen Logistikdrehscheibe",
        "Ablehnung der Nutzung des Landes als militärische Transit- und Logistikdrehscheibe",
        "Unterstützung aller NATO-Manöver",
        "Die Stationierung von Panzern in Magdeburg"
      ],
      "correct": 1,
      "hint": "Das BSW lehnt die Einbindung ziviler Infrastruktur in NATO-Aufmarschpläne ab."
    },
    {
      "question": "Was fordert das BSW bezüglich der militärischen Übungsplätze im Land?",
      "answers": [
        "Die Verdoppelung der Flächen für Übungen",
        "Keine weitere Ausweitung der Truppenübungsplätze (z.B. Letzlinger Heide, Zeitzer Forst)",
        "Die Freigabe aller Wälder für Übungen",
        "Die Privatisierung der Truppenübungsplätze"
      ],
      "correct": 1,
      "hint": "Letzlinger Heide und Zeitzer Forst sollen als wertvolle Naturräume vor Militäraufrüstung geschützt werden."
    },
    {
      "question": "Welche rechtliche Wirkung fordert das BSW für erfolgreiche Volksentscheide?",
      "answers": [
        "Lediglich beratenden Charakter",
        "Verbindliche Rechtskraft für Regierung und Parlament",
        "Die Pflicht zur erneuten Beratung im Landtag",
        "Keine bindende Wirkung"
      ],
      "correct": 1,
      "hint": "Das BSW will Volksentscheide erleichtern und die Ergebnisse rechtlich bindend machen."
    },
    {
      "question": "Welche internationale Kampagne zur Abrüstung unterstützt das BSW?",
      "answers": [
        "Den NATO-Aufrüstungsplan",
        "Den ICAN-Appell für ein atomwaffenfreies Deutschland",
        "Das EU-Verteidigungsprogramm",
        "Den Atomwaffen-Sperrvertrag von 1970"
      ],
      "correct": 1,
      "hint": "Das BSW unterstützt den ICAN-Städteappell für den Beitritt Deutschlands zum UN-Atomwaffenverbotsvertrag."
    },
    {
      "question": "Was fordert das BSW bezüglich der Forschung an Hochschulen im militärischen Bereich?",
      "answers": [
        "Zulassung von Rüstungsprojekten",
        "Verbot militärisch gesteuerter Forschungsprojekte und Verteidigung der Zivilklauseln",
        "Die Pflicht zur Rüstungsforschung an technischen Universitäten",
        "Keine staatliche Einflussnahme"
      ],
      "correct": 1,
      "hint": "Das BSW lehnt die Militarisierung von Forschung und Lehre an Hochschulen ab."
    },
    {
      "question": "Wie steht das BSW zur Durchsetzung des Rechtsstaates bei kriminellen Ausländern?",
      "answers": [
        "Duldung und Resozialisierung im Land",
        "Konsequente Ausweisung krimineller Ausländer und Errichtung von Abschiebungshaftplätzen bis Ende 2027",
        "Die Vergabe von Aufenthaltstiteln trotz Straftaten",
        "Es sind keine Abschiebungen geplant"
      ],
      "correct": 1,
      "hint": "Ausreisepflichtige Straftäter sollen zügig abgeschoben und entsprechende Haftplätze geschaffen werden."
    },
    {
      "question": "Was fordert das BSW im Bereich Wirtschaft bezüglich Tarifbindung und Betriebsräten?",
      "answers": [
        "Die Abschaffung von Tarifverträgen zur Flexibilisierung",
        "Erhöhung der Mindestlöhne und stärkere Unterstützung von Betriebsräten",
        "Das Verbot von Betriebsräten in Kleinbetrieben",
        "Keine staatlichen Förderungen für Betriebe mit Betriebsrat"
      ],
      "correct": 1,
      "hint": "Das BSW will die Mitbestimmung stärken und Unternehmen sanktionieren, die Betriebsräte systematisch behindern."
    },
    {
      "question": "Wie positioniert sich das BSW zur Stationierung neuer Raketen in Deutschland?",
      "answers": [
        "Befürwortung zur Verteidigung",
        "Keine Stationierung neuer US-Mittelstreckenraketen in Ostdeutschland",
        "Stationierung an der Grenze zu Polen",
        "Es gibt keine Stationierungspläne"
      ],
      "correct": 1,
      "hint": "Das BSW lehnt die Stationierung neuer atomarer oder konventioneller US-Mittelstreckenwaffen ab."
    },
    {
      "question": "Welche Strukturreform schlägt das BSW für den öffentlich-rechtlichen Rundfunk vor?",
      "answers": [
        "Die Verdoppelung der Rundfunkgebühren",
        "Obergrenzen für Intendantengehälter und Verwaltungskosten",
        "Die Zusammenlegung von ARD und ZDF zu einem Staatssender",
        "Die Abschaffung aller regionalen Studios"
      ],
      "correct": 1,
      "hint": "Zur Akzeptanzsteigerung fordert das BSW Transparenz und eine Deckelung der Spitzengehälter im ÖRR."
    },
    {
      "question": "Welche Haltung hat das BSW zum Gendern in Schulen und Behörden?",
      "answers": [
        "Es soll verpflichtend eingeführt werden",
        "Verbot von Gendersprache in Landesbehörden und Schulen",
        "Freie Wahl für Schüler, Abzug von Noten bei Nichtnutzung",
        "Einführung nur im universitären Rahmen"
      ],
      "correct": 1,
      "hint": "Das BSW lehnt Gendersprache ab und will deren Nutzung im staatlichen Bereich untersagen."
    },
    {
      "question": "Was fordert das BSW bezüglich der einrichtungsbezogenen Impfpflicht?",
      "answers": [
        "Die Ausweitung auf alle Berufsgruppen",
        "Die Aufhebung und die juristische Aufarbeitung der Grundrechtseingriffe",
        "Die Beibehaltung für Pflegekräfte",
        "Es gab keine Impfpflicht"
      ],
      "correct": 1,
      "hint": "Das BSW fordert die Rehabilitation und Entschädigung der von der Impfpflicht Betroffenen."
    },
    {
      "question": "Welche Tourismus-Strategie befürwortet das BSW für Sachsen-Anhalt?",
      "answers": [
        "Ausbau von Massentourismus",
        "Förderung des regionalen Tourismus und Ausbau des sanften Reisens",
        "Den Bau von Ferienparks in Naturschutzgebieten",
        "Ausschließlich touristische Förderung des Harzes"
      ],
      "correct": 1,
      "hint": "Das BSW will sanften Tourismus in Einklang mit Naturschutz und regionaler Wertschöpfung fördern."
    },
    {
      "question": "Wie steht das BSW zum Thema CCS (Speicherung von CO2 im Boden)?",
      "answers": [
        "Erprobung in der Altmark zur CO2-Reduzierung",
        "Ablehnung der Speicherung von Kohlendioxid (CCS) im Boden (z.B. in der Altmark)",
        "Verpflichtender Einbau bei allen Kohlekraftwerken",
        "CCS soll landesweit zugelassen werden"
      ],
      "correct": 1,
      "hint": "Das BSW lehnt CO2-Endlager im sachsen-anhaltischen Boden ab."
    },
    {
      "question": "Welche Umweltsünde fordert das BSW umgehend zu beseitigen?",
      "answers": [
        "Die Asphaltierung von Waldwegen",
        "Ökologische Altlasten wie die Giftgrube Brüchau",
        "Den Gipsabbau im Südharz",
        "Den Kiesabbau bei Halle"
      ],
      "correct": 1,
      "hint": "Altlasten wie die Giftgrube Brüchau müssen laut BSW dringend saniert und beseitigt werden."
    },
    {
      "question": "Wie soll die ärztliche Versorgung auf dem Land laut BSW gesichert werden?",
      "answers": [
        "Schließung kleiner Praxen zur Bündelung",
        "Durch gezielte Landarztprogramme und die Förderung von Polikliniken",
        "Ersatz von Landärzten durch Videosprechstunden",
        "Verpflichtender Dienst für alle Medizinstudenten"
      ],
      "correct": 1,
      "hint": "Das BSW will über Landarztquoten und medizinische Versorgungszentren die Versorgung sichern."
    },
    {
      "question": "Welchen Steuersatz fordert das BSW für Grundnahrungsmittel?",
      "answers": [
        "Die Anhebung auf 19%",
        "Die konsequente Senkung der Mehrwertsteuer auf Grundnahrungsmittel auf 0 Prozent",
        "Die Erhöhung auf 7% für Fleischprodukte",
        "Einführung einer zusätzlichen Konsumsteuer"
      ],
      "correct": 1,
      "hint": "Das BSW fordert die komplette Steuerbefreiung von Lebensmitteln des Grundbedarfs zur Entlastung geringer Einkommen."
    }
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
let jokerHintUsed = false;
let jokerSecondChanceUsed = false;
let pendingWrongBtnElement = null;

const startScreen  = document.getElementById('start-screen');
const gameScreen   = document.getElementById('game-screen');
const endScreen    = document.getElementById('end-screen');
const startBtn     = document.getElementById('start-btn');
const restartBtn   = document.getElementById('restart-btn');
const joker5050Btn = document.getElementById('joker-5050');
const jokerHintBtn = document.getElementById('joker-hint');
const jokerSecondChanceBtn = document.getElementById('joker-second-chance');
const hintDialog = document.getElementById('hint-dialog');
const closeHintBtn = document.getElementById('close-hint-btn');
const hintTextEl   = document.getElementById('hint-text');

// Second Chance Dialog elements
const secondChanceDialog = document.getElementById('second-chance-dialog');
const useSecondChanceBtn  = document.getElementById('use-second-chance-btn');
const skipSecondChanceBtn = document.getElementById('skip-second-chance-btn');

const questionNumEl  = document.getElementById('current-question-num');
const scoreEl        = document.getElementById('score-val');
const questionTextEl = document.getElementById('question-text');
const answerBtns     = document.querySelectorAll('.answer-btn');
const finalCorrectEl = document.getElementById('final-correct');
const feedbackMsgEl  = document.getElementById('feedback-message');

startBtn.addEventListener('click', startGame);
restartBtn.addEventListener('click', () => { endScreen.classList.remove('active'); startScreen.classList.add('active'); });
joker5050Btn.addEventListener('click', useJoker5050);
jokerHintBtn.addEventListener('click', useJokerHint);
jokerSecondChanceBtn.addEventListener('click', useJokerSecondChance);
closeHintBtn.addEventListener('click', () => { hintDialog.close(); });

useSecondChanceBtn.addEventListener('click', () => {
  jokerSecondChanceUsed = true;
  jokerSecondChanceBtn.disabled = true;
  secondChanceDialog.close();
  if (pendingWrongBtnElement) {
    pendingWrongBtnElement.classList.add('wrong-first-try');
    pendingWrongBtnElement.disabled = true;
  }
  isAnswerLocked = false;
});

skipSecondChanceBtn.addEventListener('click', () => {
  secondChanceDialog.close();
  if (pendingWrongBtnElement) {
    pendingWrongBtnElement.classList.add('wrong');
  }
  const currentQ = gameQuestions[currentQuestionIndex];
  answerBtns.forEach(btn => { if (parseInt(btn.getAttribute('data-original-index')) === currentQ.correct) btn.classList.add('correct'); });
  setTimeout(() => { currentQuestionIndex++; if (currentQuestionIndex < gameQuestions.length) { loadQuestion(); } else { endGame(); } }, 2000);
});

answerBtns.forEach(btn => { btn.addEventListener('click', () => { if (isAnswerLocked) return; selectAnswer(btn); }); });

// Dialog light-dismiss fallback
if (hintDialog && !('closedBy' in HTMLDialogElement.prototype)) {
  hintDialog.addEventListener('click', (event) => {
    if (event.target !== hintDialog) return;
    const rect = hintDialog.getBoundingClientRect();
    const isDialogContent = (
      rect.top <= event.clientY &&
      event.clientY <= rect.top + rect.height &&
      rect.left <= event.clientX &&
      event.clientX <= rect.left + rect.width
    );
    if (isDialogContent) return;
    hintDialog.close();
  });
}

function startGame() {
  const activeParties = [...document.querySelectorAll('#party-grid .party-btn.active[data-party]')]
    .map(btn => btn.getAttribute('data-party'))
    .filter(p => p === 'all' || (QUESTION_POOLS[p] && QUESTION_POOLS[p].length > 0));
  if (activeParties.length === 0) { alert('Bitte wählen Sie mindestens eine Partei aus!'); return; }
  let combinedPool = [];
  if (activeParties.includes('all')) {
    const allParties = Object.keys(QUESTION_POOLS);
    const pickedQuestions = [];
    const remainingQuestions = [];
    allParties.forEach(p => {
      const pool = QUESTION_POOLS[p];
      const randIdx = Math.floor(Math.random() * pool.length);
      pickedQuestions.push({ ...pool[randIdx], party: p });
      for (let i = 0; i < pool.length; i++) {
        if (i !== randIdx) {
          remainingQuestions.push({ ...pool[i], party: p });
        }
      }
    });
    const extraQuestions = shuffleArray(remainingQuestions).slice(0, 3);
    combinedPool = pickedQuestions.concat(extraQuestions);
  } else {
    activeParties.forEach(p => QUESTION_POOLS[p].forEach(q => combinedPool.push({ ...q, party: p })));
  }
  gameQuestions = shuffleArray(combinedPool).slice(0, 10);
  currentQuestionIndex = 0; score = 0; isAnswerLocked = false;
  joker5050Used = false; jokerHintUsed = false; jokerSecondChanceUsed = false;
  joker5050Btn.disabled = false; jokerHintBtn.disabled = false; jokerSecondChanceBtn.disabled = false;
  scoreEl.textContent = score;
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
    btn.classList.remove('selected', 'correct', 'wrong', 'hidden', 'wrong-first-try');
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
    setTimeout(() => { currentQuestionIndex++; if (currentQuestionIndex < gameQuestions.length) { loadQuestion(); } else { endGame(); } }, 2000);
  } else {
    if (!jokerSecondChanceUsed) {
      pendingWrongBtnElement = btnElement;
      secondChanceDialog.showModal();
    } else {
      btnElement.classList.add('wrong');
      answerBtns.forEach(btn => { if (parseInt(btn.getAttribute('data-original-index')) === currentQ.correct) btn.classList.add('correct'); });
      setTimeout(() => { currentQuestionIndex++; if (currentQuestionIndex < gameQuestions.length) { loadQuestion(); } else { endGame(); } }, 2000);
    }
  }
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

function useJokerHint() {
  if (isAnswerLocked || jokerHintUsed) return;
  jokerHintUsed = true;
  jokerHintBtn.disabled = true;
  const currentQ = gameQuestions[currentQuestionIndex];
  hintTextEl.textContent = currentQ.hint || "Für diese Frage ist kein Spickzettel-Hinweis verfügbar.";
  hintDialog.showModal();
}

function useJokerSecondChance() {
  alert("Der Zweite-Chance-Joker wird automatisch aktiv, wenn Sie eine falsche Antwort geben!");
}

function endGame() {
  gameScreen.classList.remove('active'); endScreen.classList.add('active');
  finalCorrectEl.textContent = score;
  if (score === 10) { feedbackMsgEl.textContent = "Hervorragend! Sie kennen die Wahlprogramme in- und auswendig!"; feedbackMsgEl.style.color = "var(--correct-bg)"; }
  else if (score >= 7) { feedbackMsgEl.textContent = "Gut gemacht! Sie haben ein solides Wissen über die Programme."; feedbackMsgEl.style.color = "var(--gold)"; }
  else if (score >= 4) { feedbackMsgEl.textContent = "Mittelmäßig. Einige Aspekte haben Sie erkannt."; feedbackMsgEl.style.color = "#ccc"; }
  else { feedbackMsgEl.textContent = "Da ist noch Luft nach oben! Vielleicht die Programme nochmal überfliegen?"; feedbackMsgEl.style.color = "var(--wrong-bg)"; }
}


// Party selection (Single selection / Radio button behavior)
document.querySelectorAll('#party-grid .party-btn[data-party]').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('#party-grid .party-btn[data-party]').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});
