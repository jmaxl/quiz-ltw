const QUESTION_POOLS = {
  afd: [
    { question: "Was wird in dem AfD-Programmentwurf ausdrücklich als unsere 'Zukunft' bezeichnet (im Gegensatz zur Einwanderung)?", answers: ["Der technologische Wandel", "Die Förderung von Start-ups", "Kinder", "Ausländische Fachkräfte"], correct: 2, hint: "Die AfD betont im Programmentwurf, dass Kinder unsere Zukunft sind, nicht die Einwanderung." },
    { question: "Welche Struktur soll laut dem AfD-Programm als 'normative Normalität' besonders gefördert werden?", answers: ["Die Ehe aus Mann und Frau, aus der Kinder hervorgehen", "Alleinerziehende Elternteile", "Jede Form des Zusammenlebens", "Mehrgenerationenhäuser"], correct: 0, hint: "Die AfD fordert die Stärkung der klassischen Ehe zwischen Mann und Frau." },
    { question: "Welche Position vertritt der AfD-Programmentwurf bezüglich der Privilegien der Kirchensteuerkirchen?", answers: ["Die Privilegien sollen komplett abgeschafft werden.", "Die Privilegien sollen ausgebaut werden.", "Der Staat übernimmt die Privilegien.", "Privilegien nur im ländlichen Raum."], correct: 0, hint: "Die Partei plädiert dafür, staatliche Privilegien der großen Kirchen zu beenden." },
    { question: "Worauf soll sich das Bildungssystem nach der AfD wieder als Kernaufgabe fokussieren?", answers: ["Digitale Kompetenz und Diversität", "Inklusion und globales Denken", "Vorbereitung auf die Klimatransformation", "Kulturtechniken und Wissen vermitteln"], correct: 3, hint: "Schulen sollen sich auf Grundlagen wie Lesen, Schreiben, Rechnen und Fachwissen konzentrieren." },
    { question: "Im Zuge welcher Vergehen unterstützt die AfD eine Initiative zur Aberkennung der deutschen Staatsbürgerschaft?", answers: ["Bei andauernder Arbeitslosigkeit", "Bei Eintritt in feindliche Armeen oder Erschleichung durch Betrug", "Bei Steuerhinterziehung", "Bei krimineller Auffälligkeit"], correct: 1, hint: "Die Aberkennung betrifft Fälle von Betrug bei der Einbürgerung oder den Kampf in fremden Armeen." },
    { question: "Wie steht die AfD zur aktuellen EU-Bürokratie und Regulierung aus Brüssel?", answers: ["Sie ist Vorbild für Landesgesetze.", "Sie wird als übergriffig und bevormundend abgelehnt.", "Sie soll stärker subventioniert werden.", "Sie wird in Sicherheitsfragen voll unterstützt."], correct: 1, hint: "Die Regulierung aus Brüssel wird als Eingriff in die Eigenständigkeit abgelehnt." },
    { question: "Welchen Ansatz verfolgt der AfD-Programmentwurf in der Energiepolitik?", answers: ["Förderung von Kernenergie und grundlastfähigen Kraftwerken.", "100% Windenergie bis 2030.", "Verbot von Verbrennungsmotoren.", "Abschaltung aller Kohlekraftwerke bis 2028."], correct: 0, hint: "Die AfD setzt auf Kernkraft und bewährte Großkraftwerke." },
    { question: "Was fordert die AfD zur Finanzierung des öffentlich-rechtlichen Rundfunks?", answers: ["Ausbau der Digitalangebote.", "Verschlankung und langfristige Abschaffung als Zwangsabgabe.", "Aufstockung der Mittel für politische Bildung.", "Zusammenlegung aller Sender."], correct: 1, hint: "Der Rundfunkbeitrag soll als Zwangsabgabe beendet werden." },
    { question: "Wie äußert sich die AfD zum Thema Grenzkontrollen?", answers: ["Komplette Öffnung aller Binnengrenzen.", "Einführung einer asylfreien Zone.", "Umfassender Schutz der Grenzen gegen illegale Migration.", "Übergabe des Grenzschutzes an Frontex."], correct: 2, hint: "Die Partei fordert den physischen Schutz der Landesgrenzen." },
    { question: "Welche Haltung nimmt die AfD gegenüber der sogenannten 'Gender-Sprache' ein?", answers: ["Sie soll verpflichtend an Schulen gelehrt werden.", "Sie wird abgelehnt und soll in staatlichen Behörden untersagt werden.", "Sie soll nur im universitären Rahmen gelten.", "Sie wird als Bereicherung akzeptiert."], correct: 1, hint: "Die Gendersprache soll im behördlichen und schulischen Bereich verboten werden." },
    { question: "Welche Rolle spielt die direkte Demokratie im AfD-Programmentwurf?", answers: ["Soll durch repräsentative Gremien ersetzt werden.", "Volksentscheide nach Schweizer Vorbild sollen gestärkt werden.", "Volksentscheide nur auf kommunaler Ebene.", "Bürger erhalten lediglich beratende Funktionen."], correct: 1, hint: "Die Bürger sollen nach dem Modell der Schweiz direkt über Gesetze abstimmen können." },
    { question: "Wie beurteilt die AfD die aktuelle CO2-Steuer?", answers: ["Als notwendig für den Umweltschutz.", "Als unsoziale Belastung, die abgeschafft werden soll.", "Sie soll noch weiter angehoben werden.", "Sie soll nur Unternehmen treffen."], correct: 1, hint: "Die Abgabe auf Kohlendioxid wird als ungerechte finanzielle Last abgelehnt." },
    { question: "Was fordert die AfD im Bereich der Landwirtschaft?", answers: ["Strenge EU-Ökostandards.", "Verstaatlichung der Agrarbetriebe.", "Befreiung von ideologischen Vorgaben und bürokratischen Hürden.", "Verbot von konventionellem Anbau."], correct: 2, hint: "Landwirte sollen ohne bürokratische Einschränkungen und grüne Vorgaben wirtschaften können." },
    { question: "Welche Sicherheitsmaßnahme hebt die AfD besonders hervor?", answers: ["Konsequente Ausweisung von Mehrfachtätern ohne deutschen Pass.", "Mehr Sozialpädagogen bei der Polizei.", "Entwaffnung der Sicherheitsbehörden.", "Privatisierung von Polizei-Aufgaben."], correct: 0, hint: "Kriminelle Ausländer und Mehrfachtäter sollen ohne Verzögerung abgeschoben werden." },
    { question: "Was ist laut AfD ein Kernziel für den ländlichen Raum in Sachsen-Anhalt?", answers: ["Der ländliche Raum soll renaturiert werden.", "Sicherstellung von ärztlicher Versorgung, Nahverkehr und Breitbandausbau.", "Umsiedlung der Bevölkerung in Städte.", "Abschaffung von Landarzt-Programmen."], correct: 1, hint: "Es geht darum, die Infrastruktur und Lebensqualität in Dörfern und Kleinstädten zu sichern." }
  ],
  cdu: [
    { question: "Mit welcher neuen Ausrüstung will die CDU alle Polizisten in Sachsen-Anhalt ausstatten?", answers: ["Schusssichere Westen", "Bodycams und Dashcams", "Elektro-Taser", "Drohnen zur Aufklärung"], correct: 2, hint: "Die Polizei soll moderner ausgestattet werden; hierbei wird eine Distanzwaffe zur Deeskalation genannt." },
    { question: "Was will die CDU beim Thema Videoüberwachung ausbauen?", answers: ["Nur analoge Kameras an Bahnhöfen", "Videoschutz mit KI-gestützter Erkennung von Gefahren", "Freiwillige Bürgernetzwerke", "Internationale Satelliten-Überwachung"], correct: 1, hint: "Die CDU setzt im öffentlichen Raum auf moderne Bilderkennung zur Kriminalitätsbekämpfung." },
    { question: "Wie beschreibt die CDU ihre politische Positionierung?", answers: ["Klar linke Alternative zur SPD", "Partei der Mitte mit vernünftiger Politik", "Konservativ-nationalistische Bewegung", "Liberale Partei mit wirtschaftlichem Fokus"], correct: 1, hint: "Die CDU sieht sich selbst als verlässliche Kraft der bürgerlichen Mitte." },
    { question: "Was will die CDU beim Thema Migration konkret forcieren?", answers: ["Öffnung der Grenzen für Fachkräfte", "Erheblichen Rückgang der Asylzugangszahlen und mehr Abschiebungen", "Aufbau neuer Aufnahmezentren", "Gleichbehandlung aller Migranten"], correct: 1, hint: "Die Partei fordert strengere Kontrollen, um die illegale Zuwanderung einzudämmen und Abschiebungen zu beschleunigen." },
    { question: "Was soll laut CDU-Programm mit den Feuerwehren in Sachsen-Anhalt geschehen?", answers: ["Sie sollen privatisiert werden.", "Sie sollen erhalten und gestärkt werden.", "Sie sollen regional zusammengelegt werden.", "Ihre Aufgaben gehen an die Polizei."], correct: 1, hint: "Die Unterstützung des Ehrenamtes im Brandschutz steht im Fokus." },
    { question: "Als welches Ziel bezeichnet die CDU ihre Wirtschaftspolitik für Sachsen-Anhalt?", answers: ["Top-Region für Unternehmensansiedlungen in Europa", "Erstes klimaneutrales Bundesland bis 2030", "Sozialstaat mit garantiertem Grundeinkommen", "Exportweltmeister für erneuerbare Energien"], correct: 0, hint: "Sachsen-Anhalt soll im europäischen Vergleich ein führender Standort für Investoren werden." },
    { question: "Was verspricht die CDU im Bereich Steuern und Abgaben?", answers: ["Erhöhung der Unternehmenssteuer", "Sorgsamen Umgang mit Steuergeld und keine weiteren Abgaben", "Einführung einer neuen Vermögenssteuer", "Verdoppelung des Bildungsetats durch neue Steuern"], correct: 1, hint: "Finanzpolitisch steht die CDU für Haushaltsdisziplin und Schutz vor Mehrbelastungen der Bürger." },
    { question: "Welche Technologie will die CDU in Verwaltung und Wirtschaft einsetzen?", answers: ["Blockchain für alle Behördengänge", "Künstliche Intelligenz (KI)", "Quantencomputer für die Steuerverwaltung", "Virtual Reality für Bürgerberatung"], correct: 1, hint: "Es geht um die Digitalisierung durch selbstlernende Systeme in Betrieben und Behörden." },
    { question: "Was hat die CDU zum Thema Bürokratieabbau angekündigt?", answers: ["Einführung neuer Berichtspflichten", "Jede Berichtspflicht soll neu begründet und zeitlich befristet werden", "Verdoppelung der Kontrollbehörden", "Einheitliche EU-Bürokratiestandards übernehmen"], correct: 1, hint: "Vorschriften sollen nicht ewig gelten, sondern auf den Prüfstand gestellt werden." },
    { question: "Welchen Begriff verwendet die CDU für die unerwünschte Übererfüllung von EU-Normen?", answers: ["Euro-Overload", "Gold-Plating", "Norm-Inflation", "Bürokratie-Spirale"], correct: 1, hint: "Dieser Begriff beschreibt das Phänomen, wenn nationale Gesetze über EU-Vorgaben hinausgehen." },
    { question: "Unter welchem Motto steht das Bildungskapitel des CDU-Programms?", answers: ["Bildung für alle – kostenlos und digital", "Das klügste Bildungssystem in Deutschland", "Schule ohne Noten – Lernen mit Freude", "Ganztagsbetreuung als Pflicht"], correct: 1, hint: "Die CDU strebt die Qualitätsführerschaft bei Schulen im bundesweiten Vergleich an." },
    { question: "Was betont die CDU bei der Modernisierung von Schulen ausdrücklich?", answers: ["Verpflichtende Genderquoten bei Lehrern", "Modernisierung ohne ideologische Vorgaben", "Abschaffung von Religionsunterricht", "Englisch als Amtssprache"], correct: 1, hint: "Der Fokus liegt auf sachlicher Qualität der Bildung, nicht auf gesellschaftspolitischen Experimenten." },
    { question: "Was will die CDU für Schüler im Bereich Digitalisierung erreichen?", answers: ["Verbot von Smartphones im Unterricht", "Vollständige Digitalisierung aller Lehrmaterialien bis 2027", "Ausstattung mit digitalen Endgeräten und digitale Lernmethoden", "Nur Online-Unterricht für Oberstufenschüler"], correct: 2, hint: "Laptops und Tablets sollen flächendeckend im Unterricht Einzug halten." },
    { question: "Welche Berufsgruppe möchte die CDU durch bessere Bezahlung attraktiver machen?", answers: ["IT-Spezialisten", "Lehrer", "Ingenieure", "Ärzte"], correct: 1, hint: "Um dem Unterrichtsausfall zu begegnen, soll das pädagogische Personal besser besoldet werden." },
    { question: "Was will die CDU für die frühkindliche Bildung in Kitas erreichen?", answers: ["Abschaffung der Kita-Pflicht", "Stärkung der Kitas als Bildungseinrichtungen mit qualifizierten Fachkräften", "Ausschließlich elterliche Erziehung", "Einführung von Kita-Gutscheinen"], correct: 1, hint: "Kitas sollen nicht nur Betreuung bieten, sondern als erste Stufe des Bildungswegs aufgewertet werden." },
    { question: "Unter welchem Motto steht das Gesundheitskapitel des CDU-Programms?", answers: ["Gesundheit ist Chefsache", "Gute Gesundheit und Pflege überall", "Medizin ohne Wartezeiten", "Pflege neu denken"], correct: 1, hint: "Es soll eine flächendeckende medizinische Versorgung gewährleistet sein." },
    { question: "Was will die CDU zur medizinischen Versorgung im ländlichen Raum tun?", answers: ["Alle kleineren Krankenhäuser schließen", "Sicherstellung der ärztlichen Versorgung auch im ländlichen Raum", "Nur private Arztpraxen aufbauen", "Pflichtlandpraxis ohne Förderung"], correct: 1, hint: "Niemand soll auf dem Land vom medizinischen Fortschritt abgehängt werden." },
    { question: "Was plant die CDU im Bereich der Pflege?", answers: ["Verstaatlichung aller Pflegeheime", "Stärkung der Pflegekräfte und bessere Arbeitsbedingungen", "Abschaffung der stationären Pflege", "Pflichttätigkeit für Rentner"], correct: 1, hint: "Um mehr Personal zu gewinnen, müssen Arbeitszeiten und Wertschätzung verbessert werden." },
    { question: "Unter welchem Kapitel behandelt die CDU Themen rund um Familie?", answers: ["Traditionelle Werte für Sachsen-Anhalt", "Soziale Gerechtigkeit und Familie", "Ehe und Familie als Staatspflicht", "Kinder zuerst – immer"], correct: 1, hint: "Die Familie wird im Kontext der sozialen Säulen unseres Bundeslandes betrachtet." },
    { question: "Was will die CDU für die Kinderbetreuung in kirchlicher Trägerschaft sicherstellen?", answers: ["Sie wird durch staatliche Einrichtungen ersetzt.", "Die Kinderbetreuung in kirchlicher Trägerschaft wird abgesichert.", "Kirchliche Kitas erhalten keine Subventionen mehr.", "Kirchliche Einrichtungen werden verstaatlicht."], correct: 1, hint: "Die Partnerschaft mit den Kirchen als bewährte Kita-Träger soll fortgeführt werden." },
    { question: "Was sagt die CDU zu Gottesdiensten in der ländlichen Region?", answers: ["Sie sollen nur noch in Städten stattfinden.", "Gottesdienste in der ländlichen Region sollen erhalten bleiben.", "Gottesdienste nur noch an Feiertagen.", "Staatliche Subventionen werden abgeschafft."], correct: 1, hint: "Das religiöse Leben soll auch in Dörfern weiterhin stattfinden können." },
    { question: "Was will die CDU im Bereich digitaler Infrastruktur für Sachsen-Anhalt?", answers: ["Breitbandausbau nur in Städten", "Flächendeckender Breitbandausbau auch im ländlichen Raum", "Privatisierung aller Telekommunikationsnetze", "Einschränkung des Internetzugangs für Minderjährige"], correct: 1, hint: "Schnelles Internet wird als Teil der Daseinsvorsorge für jeden Winkel des Landes gesehen." },
    { question: "Was plant die CDU für den Nahverkehr im ländlichen Raum?", answers: ["Einstellung aller Buslinien auf dem Land", "Sicherstellung und Ausbau des ÖPNV auch im ländlichen Raum", "Nur On-Demand-Taxi-Services", "Privatisierung des gesamten ÖPNV"], correct: 1, hint: "Die Mobilität ohne eigenes Auto soll auf dem Land durch Bus und Bahn gesichert werden." },
    { question: "Welchen energiepolitischen Ansatz verfolgt die CDU?", answers: ["Sofortiger Ausstieg aus allen fossilen Energieträgern", "Technologieoffenheit bei der Energieversorgung", "100% Windenergie bis 2028", "Verbot von Kernenergie auf Landesebene"], correct: 1, hint: "Die CDU möchte sich nicht auf eine einzige Energiequelle festlegen, sondern alle Optionen prüfen." },
    { question: "Wie will die CDU mit Flächen auf ehemaligen Tagebaugebieten umgehen?", answers: ["Vollständige Renaturierung ohne Ausnahmen", "Prüfung für Standorte der Energieerzeugung", "Bebauung mit Industrieanlagen aller Art", "Verpachtung an internationale Konzerne"], correct: 1, hint: "Alte Tagebaue eignen sich hervorragend für moderne, grüne Stromkraftwerke." },
    { question: "Was fordert die CDU gegenüber der EU-Klimapolitik?", answers: ["Noch strengere Vorgaben als die EU verlangt", "Realistische, wirtschaftsfreundliche Umweltpolitik mit technologischer Offenheit", "Vollständige Abkehr von allen Klimazielen", "Übertragung aller Klimakompetenzen auf die EU"], correct: 1, hint: "Klimaschutz darf die Wirtschaft nicht abwürgen, sondern muss sie durch Innovationen begleiten." },
    { question: "Was sagt das CDU-Programm zu innovativen Umwelttechnologien?", answers: ["Staatliche Förderung wird abgelehnt.", "Innovative Umwelttechnologien, besonders Biotechnologie, sollen gefördert werden.", "Nur ausländische Umwelttechnologien fördern.", "Umwelttechnologien sind Bundessache."], correct: 1, hint: "Die Partei setzt auf biologische Verfahren und technische Innovationen im Umweltschutz." },
    { question: "Wo will die CDU die Verwaltungsmodernisierung organisatorisch bündeln?", answers: ["In einem Bundesministerium", "An einer zentralen Stelle in der Landesverwaltung", "In einem privaten Beratungsunternehmen", "In jedem Landkreis separat"], correct: 1, hint: "Um Doppelstrukturen zu vermeiden, soll die Digitalisierung der Behörden zentral gesteuert werden." },
    { question: "Was will die CDU bei Genehmigungs- und Vergabeverfahren erreichen?", answers: ["Verlängerung aller Verfahren", "Vollständige Digitalisierung und Einführung einer Genehmigungsfiktion", "Übergabe an private Stellen", "Abschaffung von Geneigungspflichten"], correct: 1, hint: "Wenn Ämter zu lange brauchen, soll ein Antrag nach einer Frist automatisch als bewilligt gelten." },
    { question: "Was verspricht die CDU beim Thema Barrierefreiheit im digitalen Bereich?", answers: ["Barrierefreiheit ist kein staatliches Ziel.", "Digitale Angebote des Landes sollen durchgehend barrierefrei gestaltet werden.", "Barrierefreiheit nur für öffentliche Gebäude.", "Barrierefreiheit nur für staatliche Behörden."], correct: 1, hint: "Webseiten des Landes müssen für Menschen mit Behinderungen uneingeschränkt nutzbar sein." },
    { question: "Was will die CDU bei Gerichtsverfahren verbessern?", answers: ["Mehr Verfahren für mehr Rechtssicherheit", "Mehr Geschwindigkeit in die Verfahren bringen", "Verlagerung an Schiedsgerichte", "Abschaffung von Berufungsverfahren"], correct: 1, hint: "Bürger sollen nicht jahrelang auf Urteile warten müssen; die Justiz soll zügiger arbeiten." },
    { question: "Was will die CDU für Justizberufe in Sachsen-Anhalt tun?", answers: ["Justizberufe für Frauen unattraktiver machen.", "Justizberufe attraktiver machen.", "Justizberufe privatisieren.", "Nur Bundesbesoldung."], correct: 1, hint: "Durch bessere Rahmenbedingungen soll das Personal in Gerichten und Staatsanwaltschaften verstärkt werden." },
    { question: "Wie will die CDU die Papierbürokratie in der Justiz bekämpfen?", answers: ["Durch mehr Aktenschränke", "Durch elektronische Akten statt Papierbürokratie", "Durch Auslagerung an private Archive", "Durch Vernichtung älterer Akten"], correct: 1, hint: "Die Einführung der E-Akte soll Aktenberge in Gerichten abbauen." },
    { question: "Wie viele Vereinssportler gibt es laut CDU-Programm in Sachsen-Anhalt?", answers: ["Ca. 120.000", "Ca. 250.000", "Ca. 380.000", "Ca. 520.000"], correct: 2, hint: "Dies entspricht etwa einem Sechstel der Bevölkerung des Bundeslandes Sachsen-Anhalt." },
    { question: "Was will die CDU beim Thema Ehrenamt einführen?", answers: ["Einen verpflichtenden Ehrenamtsdienst", "Einen Ehrenamts-Check bei allen neuen Gesetzen", "Abschaffung der steuerlichen Absetzbarkeit", "Verstaatlichung aller gemeinnützigen Vereine"], correct: 1, hint: "Jedes neue Gesetz soll daraufhin geprüft werden, ob es Freiwillige mit zusätzlicher Bürokratie belastet." },
    { question: "Was plant die CDU bezüglich der Übungsleiter- und Ehrenamtspauschale?", answers: ["Abschaffung dieser Pauschalen", "Anhebung der Übungsleiter- und Ehrenamtspauschale", "Beibehaltung ohne Änderung", "Einführung einer Steuerpflicht darauf"], correct: 1, hint: "Die steuerfreien Freibeträge für ehrenamtlich Tätige sollen erhöht werden." },
    { question: "Wie will die CDU junge Menschen für das Ehrenamt gewinnen?", answers: ["Durch finanzielle Zwangsabgaben an Vereine", "Durch Kooperationen von Vereinen mit Schulen und Kitas", "Durch verpflichtende Sozialstunden", "Durch staatliche Jugendorganisationen"], correct: 1, hint: "Schon in jungen Jahren soll die Brücke zwischen Bildungsstätten und Sportvereinen geschlagen werden." },
    { question: "Was bekennt die CDU zum Thema Staatskirchenverträge?", answers: ["Die Verträge sollen abgeschafft werden.", "Die CDU bekennt sich zur Eigenständigkeit der Kirchen und hält an den Verträgen fest.", "Neue Verträge nur mit muslimischen Gemeinschaften.", "Staatskirchenverträge unter EU-Aufsicht stellen."], correct: 1, hint: "Die verfassungsmäßige Partnerschaft mit den christlichen Konfessionen wird nicht angetastet." },
    { question: "Wie lange prägt das Christentum laut CDU die Landschaften Sachsen-Anhalts?", answers: ["Seit der Reformation (ca. 500 Jahre)", "Seit weit über einem Jahrtausend", "Seit dem Kaisertum (ca. 800 Jahre)", "Seit der Industrialisierung"], correct: 1, hint: "Die Verwurzelung der christlichen Tradition geht auf das frühe Mittelalter zurück." },
    { question: "Welches Grundrecht steht im Mittelpunkt des CDU-Kirchenkapitels?", answers: ["Das Recht auf Steuererlass für Kirchen", "Die Religionsfreiheit als Grundrecht", "Die Pflicht zum Kirchenbeitritt", "Das Recht auf staatlich finanzierten Religionsunterricht"], correct: 1, hint: "Das Recht, seinen Glauben frei und ungestört auszuüben, wird besonders hervorgehoben." },
    { question: "Was hebt die CDU über Sachsen-Anhalt im Tourismusbereich hervor?", answers: ["Günstigste Hotelpreise Deutschlands", "Kein Bundesland verfügt über mehr Denkmale und Welterbestätten als Sachsen-Anhalt.", "Das grünste Bundesland", "Die meisten Drei-Sterne-Restaurants"], correct: 1, hint: "Sachsen-Anhalt rühmt sich seiner immensen Dichte an UNESCO-Welterbestätten und historischen Bauten." },
    { question: "Was will die CDU für die Landesmarketingorganisation (LTV) im Tourismus tun?", answers: ["Sie auflösen und privatisieren.", "Organisatorisch und finanziell stärken.", "In die IMG aufgehen lassen.", "In ein EU-Tourismusnetzwerk überführen."], correct: 1, hint: "Die Schlagkraft für das Landesmarketing soll erhöht werden." },
    { question: "Was will die CDU für die touristische Infrastruktur in Sachsen-Anhalt?", answers: ["Nur Städte als Touristenziele fördern.", "Landesweit investieren: Wanderwege, Radwege, historische Alleen etc.", "Alle Fördergelder in den Harz fließen lassen.", "Tourismus vollständig privatisieren."], correct: 1, hint: "Die Infrastruktur für Rad- und Wandertourismus soll im gesamten Land modernisiert werden." },
    { question: "Wie positioniert sich die CDU grundsätzlich zur Europäischen Union?", answers: ["Die CDU lehnt die EU grundsätzlich ab.", "Die CDU bekennt sich klar zu einer EU, die Sicherheit, Wohlstand und Freiheit garantiert.", "Die CDU will Sachsen-Anhalt aus der EU herauslösen.", "Alle EU-Kompetenzen an die Bundesländer übertragen."], correct: 1, hint: "Die europäische Integration wird als Fundament für Frieden und wirtschaftliche Stärke bejaht." },
    { question: "Welches regionale Netzwerk will die CDU laut Programm stärken?", answers: ["Den Bundesrat als einzige Stimme der Länder", "Die Europäische Metropolregion Mitteldeutschland (EMMD)", "Den Städtebund Elbe-Saale", "Den Norddeutschen Städteverbund"], correct: 1, hint: "Das länderübergreifende Netzwerk verbindet Sachsen-Anhalt mit Sachsen und Thüringen." },
    { question: "Ab wann fordert die CDU eine neue EU-Förderperiode mit realistischen Übergangsbedingungen?", answers: ["Ab 2026", "Ab 2027", "Ab 2028", "Ab 2030"], correct: 2, hint: "Die neue Periode schließt an die aktuelle Dekade an." },
    { question: "Was plant die CDU zur Stärkung des Zusammenhalts in Sachsen-Anhalt?", answers: ["Abschaffung von Vereinen zur Vereinfachung", "Starken gesellschaftlichen Zusammenhalt und ein gutes Klima fördern", "Nur wirtschaftliche Investitionen priorisieren", "Fokus ausschließlich auf Großstädte"], correct: 1, hint: "Die CDU will Gräben zuschütten und das Miteinander der Bürger stärken." },
    { question: "Was will die CDU für die Metropolregion Mitteldeutschland erreichen?", answers: ["Sie soll aufgelöst werden.", "Länderübergreifende Projekte im Rahmen der EMMD werden weiter unterstützt.", "Sachsen-Anhalt soll die EMMD verlassen.", "Die EMMD soll zu einem Bundesland werden."], correct: 1, hint: "Die Zusammenarbeit bei Zukunftsprojekten über die Landesgrenzen hinweg bleibt wichtig." },
    { question: "Welchen Slogan nutzt die CDU Sachsen-Anhalt in ihrem Regierungsprogramm 2026?", answers: ["Sachsen-Anhalt verdient Besonderes!", "Sachsen-Anhalt stärker machen. Nur mit uns.", "Aufbruch für unser Land!", "Gemeinsam. Stark. Sachsen-Anhalt."], correct: 1, hint: "Der Slogan betont die Eigenständigkeit und Verlässlichkeit der CDU als Regierungskraft." }
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
let jokerSecondChanceActive = false;

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
    .filter(p => QUESTION_POOLS[p] && QUESTION_POOLS[p].length > 0);
  if (activeParties.length === 0) { alert('Bitte wählen Sie mindestens eine Partei aus!'); return; }
  let combinedPool = [];
  activeParties.forEach(p => QUESTION_POOLS[p].forEach(q => combinedPool.push({ ...q, party: p })));
  gameQuestions = shuffleArray(combinedPool).slice(0, 10);
  currentQuestionIndex = 0; score = 0; isAnswerLocked = false;
  joker5050Used = false; jokerHintUsed = false; jokerSecondChanceUsed = false; jokerSecondChanceActive = false;
  joker5050Btn.disabled = false; jokerHintBtn.disabled = false; jokerSecondChanceBtn.disabled = false;
  jokerSecondChanceBtn.classList.remove('active-joker');
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
    if (jokerSecondChanceActive) {
      jokerSecondChanceActive = false;
      jokerSecondChanceBtn.classList.remove('active-joker');
    }
    setTimeout(() => { currentQuestionIndex++; if (currentQuestionIndex < gameQuestions.length) { loadQuestion(); } else { endGame(); } }, 2000);
  } else {
    if (jokerSecondChanceActive) {
      jokerSecondChanceActive = false;
      jokerSecondChanceBtn.classList.remove('active-joker');
      btnElement.classList.add('wrong-first-try');
      btnElement.disabled = true;
      isAnswerLocked = false; // Allow another selection!
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
  if (isAnswerLocked || jokerSecondChanceUsed || jokerSecondChanceActive) return;
  jokerSecondChanceUsed = true;
  jokerSecondChanceActive = true;
  jokerSecondChanceBtn.disabled = true;
  jokerSecondChanceBtn.classList.add('active-joker');
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
