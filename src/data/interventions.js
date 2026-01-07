/**
 * Interventionsvorschläge für ELDiB-Ziele
 * Basierend auf entwicklungstherapeutischen und entwicklungspädagogischen Prinzipien (ETEP)
 * Professionelle pädagogische und psychologische Strategien
 */

export const INTERVENTIONS = {
  // ===================== VERHALTEN =====================
  verhalten: {
    general: {
      principles: [
        "Positive Verstärkung konsequent einsetzen",
        "Klare, vorhersehbare Strukturen schaffen",
        "Erfolgserlebnisse ermöglichen",
        "Spiegeln und Verbalisieren von Verhalten",
        "Modelllernen durch Erwachsene"
      ],
      strategies: [
        "Token-Systeme mit visueller Unterstützung",
        "Verhaltensverträge altersgemäß gestalten",
        "Time-In statt Time-Out bevorzugen",
        "Übergänge ankündigen und begleiten",
        "Selbstregulationsstrategien vermitteln"
      ]
    },
    stufen: {
      1: {
        fokus: "Sensorische Integration und Grundvertrauen",
        interventionen: [
          "Sensorische Angebote systematisch einsetzen (taktil, visuell, auditiv)",
          "Sichere, reizarme Umgebung gestalten",
          "Körpernahe Begleitung bei Übergängen",
          "Routinen mit visuellen Ablaufplänen unterstützen",
          "Bewegungsangebote zur Selbstregulation",
          "Snoezelen-Elemente integrieren"
        ],
        materialien: ["Sensorische Spielzeuge", "Gewichtsdecken", "Vibrationsgeräte", "Visuelle Timer"]
      },
      2: {
        fokus: "Teilnahme an strukturierten Aktivitäten",
        interventionen: [
          "Klare Start- und Endsignale etablieren",
          "Schrittweise Anforderungssteigerung",
          "Erfolge sofort und konkret benennen",
          "Wahlmöglichkeiten innerhalb von Grenzen anbieten",
          "Bewegungspausen systematisch einplanen",
          "Peer-Modelle gezielt einsetzen"
        ],
        materialien: ["Belohnungssysteme", "Visuelle Tagespläne", "Sanduhren", "Gefühlskarten"]
      },
      3: {
        fokus: "Selbststeuerung in der Gruppe",
        interventionen: [
          "Gruppenregeln gemeinsam erarbeiten",
          "Reflexionsgespräche nach Aktivitäten",
          "Rollenspiele für Alternativverhalten",
          "Selbstbeobachtungsbögen einführen",
          "Peer-Coaching fördern",
          "Verstärkerabbau systematisch planen"
        ],
        materialien: ["Verhaltensampeln", "Selbstbewertungsbögen", "Rollenspielkarten", "Emotionsthermometer"]
      },
      4: {
        fokus: "Verantwortung und Gruppenbeitrag",
        interventionen: [
          "Verantwortungsübernahme in Projekten",
          "Konfliktlösungsstrategien trainieren",
          "Mentoring-Rollen zuweisen",
          "Feedback-Kultur etablieren",
          "Selbstwirksamkeitserfahrungen schaffen",
          "Problemlösungsgespräche führen"
        ],
        materialien: ["Projekthefte", "Feedbackkarten", "Konfliktlösungsplakate", "Kompetenzportfolio"]
      },
      5: {
        fokus: "Transfer in den Alltag",
        interventionen: [
          "Reale Lebenssituationen einbeziehen",
          "Praktika und Außenkontakte",
          "Selbstmanagement-Training",
          "Zukunftsplanung begleiten",
          "Generalisierung aktiv fördern",
          "Netzwerkarbeit mit Familie und Umfeld"
        ],
        materialien: ["Lebenspraktische Checklisten", "Portfolioarbeit", "Bewerbungstraining", "Reflexionstagebuch"]
      }
    }
  },

  // ===================== KOMMUNIKATION =====================
  kommunikation: {
    general: {
      principles: [
        "Kommunikationsanlässe schaffen",
        "Auf Augenhöhe kommunizieren",
        "Wartezeit geben für Antworten",
        "Alternative Kommunikationsformen akzeptieren",
        "Sprachvorbild sein"
      ],
      strategies: [
        "Unterstützte Kommunikation (UK) einsetzen",
        "Dialogisches Lesen",
        "Handlungsorientiertes Sprechen",
        "Sprachbad-Methode",
        "Metakommunikation fördern"
      ]
    },
    stufen: {
      1: {
        fokus: "Basale Kommunikation und Lautproduktion",
        interventionen: [
          "Mundmotorische Übungen spielerisch",
          "Lautimitationsspiele",
          "Kommunikationstafeln mit Bildern",
          "Blickkontakt sanft fördern",
          "Gesten als Brücke zur Sprache",
          "Musik und Rhythmus nutzen"
        ],
        materialien: ["Bildkarten", "Talker", "Sprechende Buttons", "Musikinstrumente"]
      },
      2: {
        fokus: "Wortschatz und einfache Sätze",
        interventionen: [
          "Wortschatzerweiterung in Alltagssituationen",
          "Bilderbücher dialogisch nutzen",
          "Modellieren korrekter Sprache",
          "Kommunikationskreise etablieren",
          "Sprachspiele und Reime",
          "Erzählsteine und Story-Telling"
        ],
        materialien: ["Wimmelbücher", "Wortschatzspiele", "Erzählsteine", "Fingerpuppen"]
      },
      3: {
        fokus: "Gruppenkommunikation und Selbstausdruck",
        interventionen: [
          "Morgenkreis-Rituale",
          "Ich-Bücher erstellen",
          "Gefühlsvokabular erweitern",
          "Gesprächsregeln visualisieren",
          "Präsentationen üben",
          "Feedback geben und nehmen lernen"
        ],
        materialien: ["Sprechstein", "Gefühlsposter", "Ich-Bücher", "Gesprächsregelplakat"]
      },
      4: {
        fokus: "Empathische Kommunikation",
        interventionen: [
          "Perspektivwechsel-Übungen",
          "Gewaltfreie Kommunikation einführen",
          "Aktives Zuhören üben",
          "Ich-Botschaften trainieren",
          "Kreatives Schreiben",
          "Debattieren und Argumentieren"
        ],
        materialien: ["GFK-Karten", "Perspektivwechsel-Spiele", "Kreativschreib-Prompts", "Debattierregeln"]
      },
      5: {
        fokus: "Beziehungspflege durch Sprache",
        interventionen: [
          "Bewerbungsgespräche simulieren",
          "Konfliktvermittlung übernehmen",
          "Öffentliches Sprechen üben",
          "Interkulturelle Kommunikation",
          "Networking-Strategien",
          "Selbstpräsentation entwickeln"
        ],
        materialien: ["Präsentationsvorlagen", "Networking-Übungen", "Kulturelle Kommunikationsguides"]
      }
    }
  },

  // ===================== SOZIALISATION =====================
  sozialisation: {
    general: {
      principles: [
        "Sichere Bindung als Basis",
        "Soziale Kompetenz modellieren",
        "Kooperationssituationen schaffen",
        "Freundschaften aktiv fördern",
        "Inklusion leben"
      ],
      strategies: [
        "Kooperative Lernformen",
        "Soziales Kompetenztraining",
        "Peer-Mediation",
        "Klassenrat etablieren",
        "Soziale Geschichten"
      ]
    },
    stufen: {
      1: {
        fokus: "Vertrauen und Bindungsaufbau",
        interventionen: [
          "Bezugspädagog:in-System",
          "Eingewöhnungsrituale",
          "Körpernahe Zuwendung anbieten",
          "Parallelspiel begleiten",
          "Namen bewusst nutzen",
          "Sichere Basis schaffen"
        ],
        materialien: ["Übergangsobjekte", "Fotobücher", "Begrüßungsrituale", "Kuscheltiere"]
      },
      2: {
        fokus: "Interaktives Spiel und Teilen",
        interventionen: [
          "Partnerspiele anleiten",
          "Teilen explizit üben und loben",
          "Wartezeiten visualisieren",
          "Fantasiespiel begleiten",
          "Konflikte früh moderieren",
          "Spielangebote strukturieren"
        ],
        materialien: ["Kooperationsspiele", "Sanduhren", "Spielteppiche mit Bereichen", "Rollenspielecken"]
      },
      3: {
        fokus: "Freundschaft und Gruppenzugehörigkeit",
        interventionen: [
          "Freundschaftswoche gestalten",
          "Klassenrat einführen",
          "Gruppenprojekte planen",
          "Soziale Geschichten nutzen",
          "Peer-Tutoring etablieren",
          "Gemeinsame Erfolge feiern"
        ],
        materialien: ["Freundschaftsbänder", "Klassenratsbox", "Social Stories", "Gruppendiplome"]
      },
      4: {
        fokus: "Aktive Gruppenteilnahme",
        interventionen: [
          "Demokratische Strukturen leben",
          "Verantwortungsrollen verteilen",
          "Peer-Mediation ausbilden",
          "Empathietraining",
          "Vorbildrollen reflektieren",
          "Konstruktives Feedback geben"
        ],
        materialien: ["Mediationsleitfaden", "Rollenverteilungskarten", "Empathie-Spiele", "Feedbackregeln"]
      },
      5: {
        fokus: "Dauerhafte Beziehungen pflegen",
        interventionen: [
          "Beziehungspflege thematisieren",
          "Konfliktresilienz stärken",
          "Netzwerke aufbauen",
          "Werte und Prinzipien reflektieren",
          "Mentoring-Programme",
          "Community-Engagement"
        ],
        materialien: ["Beziehungslandkarten", "Werteworkshops", "Mentoring-Vereinbarungen", "Projektdokumentationen"]
      }
    }
  },

  // ===================== KOGNITION =====================
  kognition: {
    general: {
      principles: [
        "Vom Konkreten zum Abstrakten",
        "Multisensorisches Lernen",
        "Scaffolding einsetzen",
        "Lernstrategien vermitteln",
        "Transfer aktiv planen"
      ],
      strategies: [
        "Differenzierung nach Niveau",
        "Handlungsorientiertes Lernen",
        "Visualisierungen nutzen",
        "Wiederholung mit Variation",
        "Metakognition fördern"
      ]
    },
    stufen: {
      1: {
        fokus: "Sensorische und motorische Grundlagen",
        interventionen: [
          "Sensomotorische Integration",
          "Grobmotorische Basisübungen",
          "Feinmotorische Förderung",
          "Objektpermanenz spielerisch",
          "Ursache-Wirkung erleben",
          "Kategorisierung mit Gegenständen"
        ],
        materialien: ["Steckspiele", "Sortierboxen", "Knetmasse", "Motorikschleifen"]
      },
      2: {
        fokus: "Grundlegende kognitive Prozesse",
        interventionen: [
          "Seriation und Klassifikation",
          "Zahlenverständnis aufbauen",
          "Farben und Formen festigen",
          "Konzentration schrittweise steigern",
          "Gedächtnisspiele",
          "Sequenzierung üben"
        ],
        materialien: ["Lernspiele", "Memory", "Zahlentürme", "Farbsortier-Sets"]
      },
      3: {
        fokus: "Schulische Basiskompetenzen",
        interventionen: [
          "Lesen mit Silbenmethode",
          "Schreiben mit Anlauttraining",
          "Rechnen mit Anschauungsmaterial",
          "Leseförderung individuell",
          "Mathematische Grundvorstellungen",
          "Konzentrationstraining"
        ],
        materialien: ["Silbenklatschen", "Rechenrahmen", "Lesematerial differenziert", "Konzentrationsspiele"]
      },
      4: {
        fokus: "Anwendung und Transfer",
        interventionen: [
          "Problembasiertes Lernen",
          "Lernstrategien explizit",
          "Selbstorganisation fördern",
          "Kritisches Denken anregen",
          "Projektorientiertes Arbeiten",
          "Medienkompetenzen"
        ],
        materialien: ["Lernplaner", "Mind-Maps", "Projektmappen", "Digitale Lerntools"]
      },
      5: {
        fokus: "Lebenslanges Lernen",
        interventionen: [
          "Lebenspraktische Mathematik",
          "Informationskompetenz",
          "Berufsvorbereitung",
          "Eigenständiges Problemlösen",
          "Reflexion und Metakognition",
          "Alltagstransfer sichern"
        ],
        materialien: ["Alltagssituationen", "Recherche-Anleitungen", "Berufswahlportfolio", "Reflexionsbögen"]
      }
    }
  }
};

/**
 * SMART-Zielformulierung Generator
 * Erstellt professionelle Zielformulierungen basierend auf SMART-Kriterien
 */
export const generateSmartGoal = (item, childName = "[Name]") => {
  const templates = {
    verhalten: {
      prefix: `${childName} wird`,
      timeframe: "innerhalb der nächsten 8 Wochen",
      measurement: "in 4 von 5 beobachteten Situationen"
    },
    kommunikation: {
      prefix: `${childName} wird`,
      timeframe: "innerhalb der nächsten 6 Wochen",
      measurement: "bei mindestens 3 verschiedenen Aktivitäten"
    },
    sozialisation: {
      prefix: `${childName} wird`,
      timeframe: "innerhalb der nächsten 8 Wochen",
      measurement: "in 3 von 4 sozialen Situationen"
    },
    kognition: {
      prefix: `${childName} wird`,
      timeframe: "innerhalb der nächsten 6 Wochen",
      measurement: "mit 80% Erfolgsrate"
    }
  };

  return templates;
};

/**
 * Generiert eine Zielformulierung für ein spezifisches Item
 */
export const createGoalStatement = (bereich, item, childName = "[Name]") => {
  const templates = generateSmartGoal(item, childName);
  const template = templates[bereich] || templates.verhalten;

  return {
    ziel: `${template.prefix} ${item.beschreibung.toLowerCase()} ${template.measurement} ${template.timeframe}.`,
    indikatoren: [
      `Beobachtungsbogen zu ${item.name}`,
      "Dokumentation in Entwicklungsgesprächen",
      "Videoanalyse wenn möglich"
    ],
    ueberprüfung: template.timeframe
  };
};

export default INTERVENTIONS;
