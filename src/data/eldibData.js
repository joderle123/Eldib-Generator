/**
 * ELDiB - Entwicklungstherapeutischer/entwicklungspädagogischer Lernziel-Diagnose-Bogen
 * Digitalisierte Datenstruktur basierend auf dem Original von ETEP Europe 2018
 */

export const ELDIB_DATA = {
  verhalten: {
    name: "Verhalten",
    code: "V",
    color: "#E74C3C",
    stufen: [
      {
        nummer: 1,
        stufenziel: "Mit Freude auf die Umwelt reagieren",
        bereichsziel: "Den eigenen körperlichen Fähigkeiten vertrauen",
        items: [
          { id: "V-1", name: "Wahrnehmung", beschreibung: "Lässt Wahrnehmung eines sensorischen Reizes erkennen durch beliebige Bewegungsreaktionen von der Reizquelle weg oder zu ihr hin. (Wenigstens zwei der sechs Modalitäten müssen vorhanden sein: taktil, auditiv, motorisch, Geschmack, visuell, Geruch)" },
          { id: "V-2", name: "Orientierung", beschreibung: "Reagiert auf sensorischen Reiz mit Zuwendung zur Reizquelle, entweder durch körperliche Reaktion oder durch Hinsehen. (Wenigstens zwei der sechs Modalitäten müssen vorhanden sein.)" },
          { id: "V-3", name: "Aufmerksamkeit", beschreibung: "Reagiert auf einen Reiz mit kurzzeitig anhaltender Aufmerksamkeit. (Behält die gerichtete Aufmerksamkeit zum Reiz noch kurze Zeit weiter bei, nachdem die anfängliche Reaktion vorbei ist.)" },
          { id: "V-4", name: "motorische Reaktion", beschreibung: "Reagiert von sich aus auf einfache Umgebungsreize mit einer motorischen Handlung. (Um die Fähigkeit als bewältigt einzuschätzen, muss das Kind sowohl auf Objekte und Personen als auch auf Geräusche reagieren.)" },
          { id: "V-5", name: "komplexe Reaktion", beschreibung: "Reagiert auf komplexe Umgebungsreize und verbale Impulse mit motorischer Handlung. (Reagieren durch Imitation, Ausführung der verbalen Anweisung und minimales Einbringen in den Routine-Ablauf; evtl. mit körperlicher Intervention oder verbaler Hilfe.)" },
          { id: "V-6", name: "Selbsthilfe", beschreibung: "Beteiligt sich aktiv am Erlernen von Selbsthilfe-Fähigkeiten. (Hände waschen, essen, die Toilette benutzen, anziehen etc.; der Schwerpunkt liegt auf Beteiligung an diesen Aktivitäten, nicht an der unabhängigen Durchführung.)" },
          { id: "V-7", name: "Spielmaterial", beschreibung: "Reagiert eigenständig auf verschiedene Spielmaterialien. (Der Erwachsene kann durch verbale Hinweise dabei unterstützen. Altersadäquates Spiel ist nicht notwendig. Perseverationen oder selbststimulierendes Verhalten werden nicht als Bewältigung angesehen.)" },
          { id: "V-8", name: "Routineabläufe", beschreibung: "Zeigt Wiedererkennen von Routineabläufen durch eigenständigen Wechsel von einem Aktivitätsbereich zum nächsten, ohne dass ein äußerer physischer Impuls erforderlich ist." }
        ]
      },
      {
        nummer: 2,
        stufenziel: "Erfolgreich auf die Umwelt reagieren",
        bereichsziel: "Erfolgreich an Routineabläufen und Aktivitäten teilnehmen",
        items: [
          { id: "V-9", name: "Spielerfahrung", beschreibung: "Geht mit Spielmaterialien sachgerecht um (Bewusstheit der Funktion im realen Leben und in vorgeblichen Bezügen)." },
          { id: "V-10", name: "warten", beschreibung: "Wartet ohne körperliche Steuerungshilfe durch den Erwachsenen (verbale Unterstützung oder leichte Berührung können vom Erwachsenen eingesetzt werden)." },
          { id: "V-11", name: "sitzen", beschreibung: "Beteiligt sich verbal und physisch an Aktivitäten im Sitzen wie z.B. Arbeitsphasen, Spielphasen oder Imbiss ohne körperliche Steuerungshilfe durch den Erwachsenen." },
          { id: "V-12", name: "Bewegung", beschreibung: "Beteiligt sich verbal und physisch an Bewegungsaktivitäten wie z.B. Spielphasen, Aktivitäten auf dem Spielteppich, Regelspielen oder Aktivitäten zur Musik ohne körperliche Steuerungshilfe durch den Erwachsenen." },
          { id: "V-13", name: "Aktivitäten", beschreibung: "Nimmt von sich aus verbal und physisch an Aktivitäten teil ohne körperliche Steuerungshilfe durch den Erwachsenen." },
          { id: "V-14", name: "Lob/Erfolg", beschreibung: "Akzeptiert Lob oder Erfolg ohne unangemessenes Verhalten oder Kontrollverlust." }
        ]
      },
      {
        nummer: 3,
        stufenziel: "Erwerben von Fähigkeiten zur erfolgreichen Teilnahme in Gruppen",
        bereichsziel: "Erworbene Fähigkeiten anwenden, um innerhalb einer Gruppe das eigene Verhalten erfolgreich zu steuern",
        items: [
          { id: "V-15", name: "beenden", beschreibung: "Beendet kurze, individuelle Aufgaben mit vertrautem Material selbstständig ohne jede Intervention Erwachsener." },
          { id: "V-16", name: "Erwartungen", beschreibung: "Lässt Bewusstsein für Verhaltensweisen erkennen, die zu Hause, in der Schule und in der Öffentlichkeit erwartet werden (ohne sie unbedingt zu erfüllen)." },
          { id: "V-17", name: "Begründungen", beschreibung: "Nennt Gründe für Verhaltenserwartungen, die zu Hause, in der Schule und in der Öffentlichkeit bedeutsam sind." },
          { id: "V-18", name: "Alternativen", beschreibung: "Beschreibt alternative, angemessenere Verhaltensmöglichkeiten für eine gegebene Situation (ohne sie unbedingt umzusetzen)." },
          { id: "V-19", name: "Gruppenwahl", beschreibung: "Reagiert angemessen auf Gruppenwahl als Anführer bzw. Teilnehmer." },
          { id: "V-20", name: "zurückhalten", beschreibung: "Hält sich von inakzeptablem Verhalten zurück, wenn andere in der Gruppe die Selbstkontrolle verlieren. (Der Erwachsene kann verbale Unterstützung einsetzen)." },
          { id: "V-21", name: "Kontrolle", beschreibung: "Behält während der Gruppenaktivitäten akzeptable physische und verbale Selbstkontrolle, auch bei Übergängen zwischen Aktivitäten und Spiel." }
        ]
      },
      {
        nummer: 4,
        stufenziel: "Sich einbringen in Gruppenprozesse",
        bereichsziel: "Persönliche Fähigkeiten einsetzen, um zum Gruppenerfolg beizutragen",
        items: [
          { id: "V-22", name: "Fortschritt", beschreibung: "Zeigt beginnendes Bewusstsein für eigenen Verhaltensfortschritt. (Der Schüler zeigt dieses Bewusstsein entweder von sich aus oder mit Unterstützung durch den Erwachsenen.)" },
          { id: "V-23", name: "Flexibilität", beschreibung: "Lässt Flexibilität erkennen, wenn Abläufe aufgrund sich ändernder Anforderungen an die Gruppe umgestaltet werden müssen." },
          { id: "V-24", name: "neue Erfahrungen", beschreibung: "Beteiligt sich verbal und physisch kontrolliert an neuen Erfahrungen bzw. Aktivitäten." },
          { id: "V-25", name: "anwenden", beschreibung: "Wendet alternative, sozial akzeptable Verhaltensweisen an." },
          { id: "V-26", name: "Provokation", beschreibung: "Reagiert von sich aus auf Provokationen mit verbal und physisch kontrolliertem Verhalten." },
          { id: "V-27", name: "Verantwortung", beschreibung: "Akzeptiert Verantwortung für die Folgen des eigenen Verhaltens und eigener Einstellungen." },
          { id: "V-28", name: "Lösungsvorschlag", beschreibung: "Reagiert in kritischen Situationen auf Probleme zwischen einzelnen Personen oder innerhalb der Gruppe mit konstruktiven Lösungsvorschlägen." }
        ]
      },
      {
        nummer: 5,
        stufenziel: "Anwenden von individuellen und gruppenbezogenen Fähigkeiten in neuen Situationen",
        bereichsziel: "Realen Lebenserfahrungen mit konstruktivem Verhalten begegnen",
        items: [
          { id: "V-29", name: "Gewohnheiten", beschreibung: "Entwickelt neue persönliche Gewohnheiten oder Fähigkeiten mit Bezug zur Arbeitswelt." },
          { id: "V-30", name: "positive Rolle", beschreibung: "Sucht und entwickelt eine begehrte positive Rolle innerhalb einer Gruppe." },
          { id: "V-31", name: "Recht/Ordnung", beschreibung: "Zeigt verbal oder durch bewusste Entscheidung für bestimmte Verhaltensoptionen Verständnis und Akzeptanz von Rechts- und Ordnungsprinzipien in Schule und Öffentlichkeit." },
          { id: "V-32", name: "Selbstverantwortung", beschreibung: "Befürwortet Verfahren zur Selbstverantwortung und Regelung des Gruppenlebens und beteiligt sich daran." },
          { id: "V-33", name: "Einsicht", beschreibung: "Löst persönliche Probleme anhand von Einsicht, Analyse und Generalisierung." }
        ]
      }
    ]
  },
  kommunikation: {
    name: "Kommunikation",
    code: "K",
    color: "#3498DB",
    stufen: [
      {
        nummer: 1,
        stufenziel: "Mit Freude auf die Umwelt reagieren",
        bereichsziel: "Gebraucht Wörter, um Bedürfnisse zu befriedigen",
        items: [
          { id: "K-1", name: "Laute", beschreibung: "Produziert Laute. (Das Kind wiederholt eigene Lautmuster, um sich sozial oder imitierend zu äußern. Mehrere verschiedene Lautmuster sind wünschenswert.)" },
          { id: "K-2", name: "Sprecher", beschreibung: "Richtet die Aufmerksamkeit auf eine sprechende Person. (Das Kind bewegt sich zum Erwachsenen hin oder sieht in die Richtung, aus der der verbale Impuls kommt.)" },
          { id: "K-3", name: "verbaler Impuls", beschreibung: "Reagiert auf einen verbalen Impuls mit einer Bewegung oder Handlung. (Das betreffende Objekt ist für das Kind sichtbar. Der Erwachsene setzt keine unterstützenden Gesten ein.)" },
          { id: "K-4", name: "Wort-Annäherung", beschreibung: "Reagiert verbal auf Fragen oder Aufforderungen von Erwachsenen mit erkennbaren Wort-Annäherungen. (Der Erwachsene kann das Wort vorsprechen.)" },
          { id: "K-5", name: "Wörter spontan", beschreibung: "Verwendet von sich aus erkennbare, relevante Wort-Annäherungen (oder Wörter) bei verschiedenen Aktivitäten, um ein Ereignis oder Objekt zu beschreiben, zu benennen, oder danach zu fragen." },
          { id: "K-6", name: "Wörter Erwachsener", beschreibung: "Produziert einzelne erkennbare Wörter während verschiedener Aktivitäten, um eine gewünschte Reaktion des Erwachsenen zu erhalten oder ein Objekt für ihn zu bezeichnen." },
          { id: "K-7", name: "Wörter Peer", beschreibung: "Produziert einzelne erkennbare Wörter während verschiedener Aktivitäten, um eine erwünschte Reaktion von einem gleichaltrigen Kind zu erhalten." },
          { id: "K-8", name: "Wortreihung", beschreibung: "Produziert eine sinnvolle Wortsequenz ohne Vorbild durch Erwachsene, um von Anderen eine Reaktion zu erhalten oder um etwas zu bezeichnen." }
        ]
      },
      {
        nummer: 2,
        stufenziel: "Erfolgreich auf die Umwelt reagieren",
        bereichsziel: "Gebraucht Wörter, um andere in konstruktiver Weise zu beeinflussen",
        items: [
          { id: "K-9", name: "beantworten", beschreibung: "Beantwortet Fragen, Bitten oder Aufforderungen eines anderen Kindes oder eines Erwachsenen mit einem oder mehreren erkennbaren, sinnvollen, relevanten Wörtern." },
          { id: "K-10", name: "Vokabular", beschreibung: "Zeigt ein rezeptives Vokabular, das nicht mehr als zwei Jahre hinter normalen Erwartungen in Bezug zum Lebensalter zurückliegt." },
          { id: "K-11", name: "Wortsequenzen", beschreibung: "Verwendet von sich aus einfache, der Aktivität angemessene Wortsequenzen, um von einem anderen Kind oder einem Erwachsenen etwas zu fordern, zu erfragen oder zu erbitten." },
          { id: "K-12", name: "Austausch – Erwachsene", beschreibung: "Verwendet von sich aus Wörter, um mit einem Erwachsenen minimale Informationen auszutauschen. (Kind initiiert das Gespräch.)" },
          { id: "K-13", name: "Merkmale", beschreibung: "Beschreibt einfache, konkrete Merkmale sowohl von sich als auch von anderen." },
          { id: "K-14", name: "Austausch – Kind", beschreibung: "Verwendet von sich aus Wörter, um mit einem anderen Kind minimale Informationen auszutauschen." }
        ]
      },
      {
        nummer: 3,
        stufenziel: "Erwerben von Fähigkeiten zur erfolgreichen Teilnahme in Gruppen",
        bereichsziel: "Gebraucht Wörter, um sich auf konstruktive Weise innerhalb einer Gruppe zu äußern",
        items: [
          { id: "K-15", name: "Persönliches", beschreibung: "Verwendet von sich aus Wörter (oder evtl. Sprachersatz wie z.B. Gebärden), um eigene Erfahrungen, Vorstellungen oder Arbeit zu beschreiben." },
          { id: "K-16", name: "Gefühlsreaktionen", beschreibung: "Verwendet Wörter oder Gesten, um angemessene und situationsgerechte positive oder negative Gefühlsreaktionen auf die Umgebung und auf Dinge, Personen oder Tiere zu zeigen." },
          { id: "K-17", name: "Gespräche", beschreibung: "Beteiligt sich an Gruppengesprächen in einer Weise, die sich nicht störend auf die Gruppe auswirkt." },
          { id: "K-18", name: "Stolz – ich", beschreibung: "Verwendet von sich aus Wörter oder Gesten, um Stolz auf eigene Arbeit oder Aktivitäten zu zeigen oder positive Aussagen über sich selbst zu machen." },
          { id: "K-19", name: "Eigenschaften – ich", beschreibung: "Beschreibt charakteristische Eigenschaften, Stärken und Schwächen bei sich selbst." },
          { id: "K-20", name: "Eigenschaften – du", beschreibung: "Beschreibt charakteristische Eigenschaften bei anderen." },
          { id: "K-21", name: "Gefühle – du", beschreibung: "Erkennt Gefühle anderer. (Der Schüler äußert sich von sich aus oder als Antwort auf Fragen.)" },
          { id: "K-22", name: "Stolz – wir", beschreibung: "Verwendet von sich aus Wörter, um Stolz auf Gruppenleistungen auszudrücken." }
        ]
      },
      {
        nummer: 4,
        stufenziel: "Sich einbringen in Gruppenprozesse",
        bereichsziel: "Verwendet Wörter, um Verständnis von Gefühlen und Verhaltensweisen von sich und anderen zu zeigen",
        items: [
          { id: "K-23", name: "Kreativität", beschreibung: "Kanalisiert Gefühle oder Erfahrungen durch kreative Ausdrucksmittel wie Kunst, Musik, Tanz oder szenisches Spiel." },
          { id: "K-24", name: "Fortschritt", beschreibung: "Zeigt beginnendes Bewusstsein für eigenen Verhaltensfortschritt." },
          { id: "K-25", name: "Beeinflussung", beschreibung: "Erklärt, wie eigenes Verhalten das Verhalten anderer beeinflusst." },
          { id: "K-26", name: "Gefühle – ich", beschreibung: "Verwendet Wörter, um in der Gruppe von sich aus eigene Gefühle auf angemessene Weise auszudrücken." },
          { id: "K-27", name: "Beziehung", beschreibung: "Verwendet Wörter, um positive Beziehungen sowohl mit Gleichaltrigen als auch mit Erwachsenen anzuknüpfen." },
          { id: "K-28", name: "unterstützen", beschreibung: "Verwendet Wörter, um von sich aus eine andere Person zu loben oder persönlich zu unterstützen." },
          { id: "K-29", name: "Relationen", beschreibung: "Beschreibt von sich aus den Ursache-Wirkungs-Zusammenhang von Gefühlen und Verhalten bei sich selbst und anderen." }
        ]
      },
      {
        nummer: 5,
        stufenziel: "Anwenden von individuellen und gruppenbezogenen Fähigkeiten in neuen Situationen",
        bereichsziel: "Verwendet Wörter, um Beziehungen auszubauen und zu pflegen",
        items: [
          { id: "K-30", name: "komplexe Aussagen", beschreibung: "Formuliert Aussagen, die weitgehend komplex strukturiert sind und inhaltlich bildhaft oder abstrakt sind." },
          { id: "K-31", name: "Ausgleich", beschreibung: "Wählt bei Provokationen in der Gruppe von sich aus einen Sprachgebrauch, der auf versöhnliche oder schlichtende Absichten hindeutet." },
          { id: "K-32", name: "Anerkennung", beschreibung: "Unterstützt andere durch Anerkennung ihrer Beiträge und bezieht von sich aus ihre Kommentare oder Ideen in eigene Äußerungen mit ein." },
          { id: "K-33", name: "Motive", beschreibung: "Beschreibt verschiedene Motive und Wertvorstellungen in sozialen Situationen." },
          { id: "K-34", name: "Ideale", beschreibung: "Beschreibt von sich aus eigene Wertvorstellungen, Ideale, persönliche Bindungen und Überzeugungen ohne Hilfe des Erwachsenen." },
          { id: "K-35", name: "Erhalt/Pflege", beschreibung: "Verwendet kommunikative Fähigkeiten, um positive zwischenmenschliche Beziehungen, auch innerhalb der Gruppe, mitzutragen und zu erhalten." }
        ]
      }
    ]
  },
  sozialisation: {
    name: "Sozialisation",
    code: "SOZ",
    color: "#2ECC71",
    stufen: [
      {
        nummer: 1,
        stufenziel: "Mit Freude auf die Umwelt reagieren",
        bereichsziel: "Einem Erwachsenen genügend vertrauen, um auf ihn zu reagieren",
        items: [
          { id: "SOZ-1", name: "Gegenwart", beschreibung: "Ist sich der Gegenwart anderer bewusst. (Das Kind reagiert auf verbalen oder körperlichen Kontakt durch einen Erwachsenen oder durch ein anderes Kind.)" },
          { id: "SOZ-2", name: "Gerichtetheit", beschreibung: "Richtet Aufmerksamkeit auf Handlungen anderer. (Schaut einen Erwachsenen und/oder ein Kind an, wenn es selbst nicht im Zentrum der Aufmerksamkeit steht.)" },
          { id: "SOZ-3", name: "Eigenname", beschreibung: "Reagiert, wenn ein Erwachsener den Namen des Kindes nennt." },
          { id: "SOZ-4", name: "Spiel – allein", beschreibung: "Beschäftigt sich mit organisiertem Spiel und spielt dabei für sich allein." },
          { id: "SOZ-5", name: "nonverbale Interaktion", beschreibung: "Interagiert nonverbal mit Erwachsenen, um Bedürfnisse auszudrücken." },
          { id: "SOZ-6", name: "kommen", beschreibung: "Reagiert auf die verbale und nonverbale Aufforderung des Erwachsenen, zu ihm zu kommen." },
          { id: "SOZ-7", name: "Aufforderungen", beschreibung: "Das Kind zeigt, dass es einzelne, verbale Aufforderungen oder Anweisungen des Erwachsenen versteht, wenn sie direkt an das Kind gerichtet werden." },
          { id: "SOZ-8", name: "Wörter – Erwachsener", beschreibung: "Produziert einzelne erkennbare Wörter während verschiedener Aktivitäten, um eine gewünschte Reaktion des Erwachsenen zu erhalten." },
          { id: "SOZ-9", name: "Selbst-Bewusstheit", beschreibung: "Zeigt deutliche Anzeichen für eine beginnende Herausbildung des Selbst." },
          { id: "SOZ-10", name: "Spiel – parallel", beschreibung: "Nimmt von sich aus an parallelem Spiel teil. Lässt dabei erkennen, dass es sich der Gegenwart anderer Kinder bewusst ist." },
          { id: "SOZ-11", name: "Wörter – Peer", beschreibung: "Produziert einzelne erkennbare Wörter während verschiedener Aktivitäten, um eine erwünschte Reaktion von einem gleichaltrigen Kind zu erhalten." },
          { id: "SOZ-12", name: "Kontaktsuche", beschreibung: "Sucht in unterschiedlichen Umgebungen/Situationen Kontakt mit einem vertrauten Erwachsenen." }
        ]
      },
      {
        nummer: 2,
        stufenziel: "Erfolgreich auf die Umwelt reagieren",
        bereichsziel: "Sich erfolgreich an Aktivitäten beteiligen",
        items: [
          { id: "SOZ-13", name: "Fantasie", beschreibung: "Beschäftigt sich von sich aus in verschiedenen Situationen mit Fantasie- und 'So-tun-als-ob'-Spielen." },
          { id: "SOZ-14", name: "warten", beschreibung: "Wartet ohne körperliche Steuerungshilfe durch den Erwachsenen." },
          { id: "SOZ-15", name: "Kontakt", beschreibung: "Zeigt Ansätze, einen angemessenen sozialen Kontakt zu einem anderen Kind aufzunehmen." },
          { id: "SOZ-16", name: "teilen", beschreibung: "Beteiligt sich an einer verbal gesteuerten Aktivität, die Teilen erfordert." },
          { id: "SOZ-17", name: "Spiel interaktiv", beschreibung: "Beteiligt sich erfolgreich an interaktivem Spiel mit einem anderen Kind." },
          { id: "SOZ-18", name: "Kooperation", beschreibung: "Kooperiert selbstständig mit einem anderen Kind in strukturierten Aktivitäten und Spiel." }
        ]
      },
      {
        nummer: 3,
        stufenziel: "Erwerben von Fähigkeiten zur erfolgreichen Teilnahme in Gruppen",
        bereichsziel: "Gruppenaktivitäten als befriedigend erleben",
        items: [
          { id: "SOZ-19", name: "abwechseln", beschreibung: "Teilt von sich aus Materialien und wechselt sich mit anderen ab ohne verbalen Hinweis durch Erwachsene." },
          { id: "SOZ-20", name: "nachahmen", beschreibung: "Ahmt von sich aus angemessenes Verhalten eines anderen Kindes nach." },
          { id: "SOZ-21", name: "werten", beschreibung: "Bezeichnet einfache soziale Situationen mit wertenden Aussagen (richtig/falsch; gut/schlecht; fair/unfair)." },
          { id: "SOZ-22", name: "leiten", beschreibung: "Leitet eine Gruppenaktivität oder demonstriert eine Aktivität für die Gruppe." },
          { id: "SOZ-23", name: "Vorschlag – andere", beschreibung: "Nimmt an einer Aktivität teil, die ein gleichaltriges Kind vorgeschlagen hat, ohne unangemessene Reaktion." },
          { id: "SOZ-24", name: "Erfahrungen", beschreibung: "Beschreibt eigene Erfahrungen in der Reihenfolge, in der sie sich ereignet haben." },
          { id: "SOZ-25", name: "Vorliebe", beschreibung: "Lässt beginnende Freundschaft erkennen durch Vorliebe für ein bestimmtes Kind/bestimmte Kinder." },
          { id: "SOZ-26", name: "Unterstützung", beschreibung: "Sucht von sich aus Hilfe oder Lob durch ein anderes Kind." },
          { id: "SOZ-27", name: "Gruppenregeln", beschreibung: "Hilft anderen von sich aus bei der Einhaltung von Gruppenregeln." }
        ]
      },
      {
        nummer: 4,
        stufenziel: "Sich einbringen in Gruppenprozesse",
        bereichsziel: "Nimmt von sich aus und erfolgreich als Gruppenmitglied an Aktivitäten teil",
        items: [
          { id: "SOZ-28", name: "identifizieren", beschreibung: "Identifiziert sich mit erwachsenen Führungspersonen, Vorbildern oder anderen Persönlichkeiten des öffentlichen Lebens." },
          { id: "SOZ-29", name: "Gruppenerfahrung", beschreibung: "Beschreibt soziale Gruppenerfahrungen in der Reihenfolge, in der sie sich ereignet haben." },
          { id: "SOZ-30", name: "Gruppenaktivität", beschreibung: "Schlägt von sich aus eine geeignete Gruppenaktivität vor und richtet den Vorschlag direkt an die Gruppe." },
          { id: "SOZ-31", name: "Verschiedenheit", beschreibung: "Das Kind lässt durch verbale Äußerungen erkennen, dass es sich bewusst ist, wie sich die eigenen sozialen Handlungen von denen anderer Kinder in der gleichen Situation unterscheiden." },
          { id: "SOZ-32", name: "Respekt", beschreibung: "Hört und respektiert die Vorstellungen, Gedanken und Meinungen anderer." },
          { id: "SOZ-33", name: "Interesse", beschreibung: "Bekundet offen sein Interesse an der Meinung Gleichaltriger über die eigene Person." },
          { id: "SOZ-34", name: "Lösungsvorschlag", beschreibung: "Reagiert in kritischen Situationen auf Probleme zwischen einzelnen Personen oder innerhalb der Gruppe mit konstruktiven Lösungsvorschlägen." },
          { id: "SOZ-35", name: "Wertvorstellung", beschreibung: "Erkennt und unterscheidet gegensätzliche Werte in sozialen Situationen." },
          { id: "SOZ-36", name: "Schlussfolgerungen", beschreibung: "Zieht Schlussfolgerungen aus sozialen Situationen." }
        ]
      },
      {
        nummer: 5,
        stufenziel: "Anwenden von individuellen und gruppenbezogenen Fähigkeiten in neuen Situationen",
        bereichsziel: "Beginnt und pflegt selbständig dauerhafte und tragfähige Beziehungen mit anderen",
        items: [
          { id: "SOZ-37", name: "Empathie", beschreibung: "Schüler lässt erkennen, dass er persönliche Situationen, Gefühle und Sichtweisen anderer versteht und achtet (Empathiefähigkeit)." },
          { id: "SOZ-38", name: "verschiedene Rollen", beschreibung: "Interagiert erfolgreich mit anderen in unterschiedlichen sozialen Rollen." },
          { id: "SOZ-39", name: "Prinzipien", beschreibung: "Trifft in sozialen Situationen persönliche Entscheidungen aufgrund eigener Wertvorstellungen und Prinzipien." },
          { id: "SOZ-40", name: "Selbstverständnis", beschreibung: "Schüler lässt realistisches Verständnis und Einschätzung des eigenen Selbst erkennen, indem er eigene Ziele, Stärken und Schwächen beschreibt." },
          { id: "SOZ-41", name: "Interpersonalität", beschreibung: "Zeigt die Fähigkeit, dauerhafte und tragfähige Beziehungen mit Einzelnen und in der Gruppe aufzubauen und zu erhalten." }
        ]
      }
    ]
  },
  kognition: {
    name: "Kognition",
    code: "KOG",
    color: "#9B59B6",
    stufen: [
      {
        nummer: 1,
        stufenziel: "Mit Freude auf die Umwelt reagieren",
        bereichsziel: "Auf die Umgebung reagieren mit gezielten Körperbewegungen und elementaren mentalen Verarbeitungsprozessen",
        items: [
          { id: "KOG-1", name: "Orientierung", beschreibung: "Reagiert auf sensorischen Reiz mit Zuwendung zur Reizquelle, entweder durch körperliche Reaktion oder durch Hinsehen." },
          { id: "KOG-2", name: "Aufmerksamkeit", beschreibung: "Reagiert auf einen Reiz mit kurzzeitig anhaltender Aufmerksamkeit." },
          { id: "KOG-3", name: "Kurzzeitgedächtnis", beschreibung: "Zeigt Kurzzeitgedächtnis durch Körperbewegung und Lautäußerung bei spontanem Wiedererkennen von Personen oder Objekten." },
          { id: "KOG-4", name: "komplexe Reaktionen", beschreibung: "Reagiert auf komplexe Umgebungsreize und verbale Impulse mit motorischer Handlung." },
          { id: "KOG-5", name: "einfache Imitation", beschreibung: "Imitiert von sich aus einfache, vertraute Handlungen des Erwachsenen." },
          { id: "KOG-6", name: "Motorik 18 Monate", beschreibung: "Zeigt rudimentäre fein- und grobmotorische Fähigkeiten auf dem Niveau eines Kindes von 18 Monaten." },
          { id: "KOG-7", name: "Bezeichnung", beschreibung: "Lässt Verständnis von Bezeichnungen für vertraute Objekte erkennen." },
          { id: "KOG-8", name: "Wort-Annäherung", beschreibung: "Reagiert verbal auf Fragen oder Aufforderungen von Erwachsenen mit erkennbaren Wort-Annäherungen." },
          { id: "KOG-9", name: "Wörter spontan", beschreibung: "Verwendet von sich aus erkennbare, relevante Wort-Annäherungen (oder Wörter) bei verschiedenen Aktivitäten." },
          { id: "KOG-10", name: "Form", beschreibung: "Passt ein Objekt in eine dafür passende Lücke ein." },
          { id: "KOG-11", name: "Körperteile", beschreibung: "Identifiziert eigene Körperteile." },
          { id: "KOG-12", name: "Details", beschreibung: "Erkennt einfache Details in Bildern durch Gesten oder Wörter." },
          { id: "KOG-13", name: "sortieren", beschreibung: "Ordnet zwei Sorten von Objekten mit minimal unterschiedlichen Merkmalen einander zu." },
          { id: "KOG-14", name: "Bilder benennen", beschreibung: "Äußert einzelne, erkennbare Wörter, um auf einfachen Abbildungen vertraute Dinge, Tiere oder Menschen zu bezeichnen." }
        ]
      },
      {
        nummer: 2,
        stufenziel: "Erfolgreich auf die Umwelt reagieren",
        bereichsziel: "Beteiligung an Aktivitäten, die Fähigkeiten der Selbsthilfe, motorischen Koordination, Sprache sowie mentale Prozesse erfordern",
        items: [
          { id: "KOG-15", name: "Gebrauchswert", beschreibung: "Erkennt Gebrauchswert vertrauter Gegenstände in entsprechenden 'So-tun-als-ob'-Spielen." },
          { id: "KOG-16", name: "Körper - 3", beschreibung: "Führt zwei einfache motorische Aktivitäten aus, die Körperkoordination auf dem Niveau eines dreijährigen Kindes erfordern." },
          { id: "KOG-17", name: "Serie - identisch", beschreibung: "Ordnet zwei identische Bilder einander zu, wenn zwei gleiche und ein unterschiedliches Bild gezeigt werden." },
          { id: "KOG-18", name: "Feinmotorik - 3", beschreibung: "Führt mindestens zwei feinmotorische Aktivitäten aus, die dem Entwicklungsniveau eines dreijährigen Kindes entsprechen." },
          { id: "KOG-19", name: "Serie - anders", beschreibung: "Erkennt dasjenige Objekt, das sich von den anderen unterscheidet, wenn zwei gleiche Objekte und ein unterschiedliches Objekt gezeigt werden." },
          { id: "KOG-20", name: "Gegenteile", beschreibung: "Versteht mindestens drei einfache Gegenteile: hoch/runter; unter/über; erster/letzter; groß/klein; lang/kurz; stopp/los." },
          { id: "KOG-21", name: "kategorisieren", beschreibung: "Gebraucht Kategorien beim Zuordnen einfacher Bilder, die zwar unterschiedlich sind, aber generell ähnliche Charakteristika aufweisen." },
          { id: "KOG-22", name: "zählen - 4", beschreibung: "Zählt bis 4 und wendet dabei 1 zu 1 Zuordnung an." },
          { id: "KOG-23", name: "Farben", beschreibung: "Identifiziert vier Farben und drei Formen durch Benennen oder Zeigen." },
          { id: "KOG-24", name: "Alternation", beschreibung: "Das Kind gibt korrekte Antworten, wenn es aufgefordert wird, zuerst gleiche Bilder einander zuzuordnen und dann das Bild zu erkennen, das sich unterscheidet." },
          { id: "KOG-25", name: "zählen - 10", beschreibung: "Zählt mit 1 zu 1 Zuordnung bis 10." },
          { id: "KOG-26", name: "Auge-Hand-5", beschreibung: "Führt mindestens zwei Aktivitäten aus, die eine Auge-Hand-Koordination auf dem Niveau eines fünfjährigen Kindes erfordern." },
          { id: "KOG-27", name: "unterscheiden", beschreibung: "Unterscheidet zwischen Ziffern, Zeichen und Großbuchstaben." },
          { id: "KOG-28", name: "Körper - 5", beschreibung: "Führt zwei motorische Aktivitäten aus, die Körperkoordination auf dem Niveau eines fünfjährigen Kindes erfordern." },
          { id: "KOG-29", name: "Objekte - 5", beschreibung: "Erkennt die Anzahl von Objekten in einer Menge bis zu 5, ohne zu zählen." },
          { id: "KOG-30", name: "Gedächtnis", beschreibung: "Gibt Auswendiggelerntes wieder – auf dem Niveau eines fünfjährigen Kindes." },
          { id: "KOG-31", name: "Bilderserie", beschreibung: "Das Kind ordnet in richtiger Reihenfolge drei einfache Bilder an, die eine Geschichte oder einen Handlungsablauf wiedergeben." }
        ]
      },
      {
        nummer: 3,
        stufenziel: "Erwerben von Fähigkeiten zur erfolgreichen Teilnahme in Gruppen",
        bereichsziel: "Beteiligt sich erfolgreich in einer Lerngruppe und setzt dabei grundlegende Lernkompetenzen ein",
        items: [
          { id: "KOG-32", name: "Auge-Hand-6", beschreibung: "Führt mindestens zwei Aktivitäten aus, die Auge-Hand-Koordination auf dem Niveau eines sechsjährigen Kindes erfordern." },
          { id: "KOG-33", name: "Körper - 6", beschreibung: "Führt mindestens zwei motorische Aktivitäten aus, die Körperkoordination auf dem Niveau eines sechsjährigen Kindes erfordern." },
          { id: "KOG-34", name: "lesen - 50", beschreibung: "Liest 50 Wörter des Grundwortschatzes." },
          { id: "KOG-35", name: "Zahlen - 10", beschreibung: "Erkennt und schreibt Zahlen, die Mengen bis 10 repräsentieren." },
          { id: "KOG-36", name: "schreiben - 50", beschreibung: "Schreibt 50 Wörter des Grundwortschatzes nach Diktat oder aus dem Gedächtnis." },
          { id: "KOG-37", name: "Verständnis", beschreibung: "Hört einer Geschichte auf Grundschulniveau zu und lässt Verständnis der Fakten und des Handlungsablaufes erkennen." },
          { id: "KOG-38", name: "erklären", beschreibung: "Erklärt das Verhalten anderer." },
          { id: "KOG-39", name: "Sinnentnahme", beschreibung: "Liest einfache Sätze und lässt dabei Verständnis des Inhalts erkennen." },
          { id: "KOG-40", name: "Plus / Minus - 9", beschreibung: "Beherrscht alle numerischen Operationen mit Addition und Subtraktion im Zahlenraum bis 9." },
          { id: "KOG-41", name: "Unlogik", beschreibung: "Erkennt Unstimmigkeiten in einfachen Situationen." },
          { id: "KOG-42", name: "Antwortsätze", beschreibung: "Schreibt einfache Sätze als Antworten auf Fragen, die der Erwachsene zu einer Geschichte stellt." },
          { id: "KOG-43", name: "Sport - Spiele", beschreibung: "Zeigt mindestens zwei motorische Kompetenzen oder motorische Spielaktivitäten, wie sie normalerweise von Kindern im Grundschulalter gespielt werden." },
          { id: "KOG-44", name: "Sätze frei", beschreibung: "Formuliert und schreibt einfache Sätze." },
          { id: "KOG-45", name: "numerische Konzepte", beschreibung: "Wendet grundlegende numerische Konzepte an, die Addition, Subtraktion, Zeit und Geld beinhalten." },
          { id: "KOG-46", name: "Quantitativa", beschreibung: "Liest und erklärt quantitative Begriffe für Maßeinheiten von Zeit, Länge und Flüssigkeitsvolumen." },
          { id: "KOG-47", name: "Sachverhalte", beschreibung: "Liest kurze Geschichten oder Artikel und erzählt anderen von den Personen und den Ereignissen, die im Text beschrieben werden." },
          { id: "KOG-48", name: "Operationen", beschreibung: "Führt grundlegende Rechenoperationen durch, die Stellenwert, Übertrag, Multiplikation und einfache Aufgaben zu Größenanordnung beinhalten." }
        ]
      },
      {
        nummer: 4,
        stufenziel: "Sich einbringen in Gruppenprozesse",
        bereichsziel: "Gebraucht kognitive und schulische Fähigkeiten, um sich erfolgreich an sozialen Gruppenerfahrungen zu beteiligen",
        items: [
          { id: "KOG-49", name: "Kommunikation", beschreibung: "Schreibt, um Informationen, Ereignisse oder Gefühle mitzuteilen." },
          { id: "KOG-50", name: "Mult./Divis. 100", beschreibung: "Rechnet Multiplikations- und Divisionsaufgaben im Zahlenraum bis 100." },
          { id: "KOG-51", name: "Informationsgewinn", beschreibung: "Liest aus Freude am Lesen und zum persönlichen Informationsgewinn." },
          { id: "KOG-52", name: "Geldmenge – 10 €", beschreibung: "Berechnet Wert für Geldmengen bis zu 10 Euro bzw. 1000 Cent." },
          { id: "KOG-53", name: "Fiktion", beschreibung: "Beschreibt fiktive Charaktere aus Büchern, Fernsehen oder Filmen und erklärt deren Motive." },
          { id: "KOG-54", name: "Grammatik", beschreibung: "Verwendet grammatische Regeln beim Schreiben von Sätzen, Abschnitten, kurzen Aufsätzen, fiktiven Geschichten und Gedichten." },
          { id: "KOG-55", name: "Wertvorstellungen", beschreibung: "Erkennt und unterscheidet gegensätzliche Werte in sozialen Situationen." },
          { id: "KOG-56", name: "Konzepte", beschreibung: "Gebraucht Maßeinheiten und andere quantitative Begriffe, um einfache logische Probleme zu lösen." }
        ]
      },
      {
        nummer: 5,
        stufenziel: "Anwenden von individuellen und gruppenbezogenen Fähigkeiten in neuen Situationen",
        bereichsziel: "Setzt erfolgreich kognitive Fähigkeiten zur Bereicherung persönlicher Erfahrungen ein",
        items: [
          { id: "KOG-57", name: "Zeitgeschichte", beschreibung: "Sucht die Meinung anderer zu aktuellen Problemen zu erfahren." },
          { id: "KOG-58", name: "Meinungen", beschreibung: "Unterscheidet in Texten zwischen Fakten und Meinungen." },
          { id: "KOG-59", name: "Inkonsistenz", beschreibung: "Erkennt unlogisches und unstimmiges Verhalten bei anderen in sozialen Situationen." },
          { id: "KOG-60", name: "Textaufgaben", beschreibung: "Löst Textaufgaben, die Bruchrechnung, Dezimalrechnung und das Rechnen mit negativen Zahlen erfordern." },
          { id: "KOG-61", name: "Einsicht", beschreibung: "Löst persönliche Probleme anhand von Einsicht, Analyse und Generalisierung." },
          { id: "KOG-62", name: "Bürger/in", beschreibung: "Gebraucht selbständig kognitive Verfahren in der Rolle als Bürger/in und Arbeitsnehmer/in." }
        ]
      }
    ]
  }
};

export default ELDIB_DATA;
