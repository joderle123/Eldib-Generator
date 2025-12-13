# 📚 ELDiB Arbeitsblatt-Generator

Ein interaktiver Arbeitsblatt-Generator für pädagogische Fachkräfte, basierend auf dem ETEP-Ansatz (Entwicklungstherapie/Entwicklungspädagogik).

## 🎯 Über das Projekt

Der **ELDiB Arbeitsblatt-Generator** ermöglicht es pädagogischen Fachkräften, schnell und einfach interaktive Arbeitsblätter zu erstellen für die Arbeit mit Kindern und Jugendlichen. Das Tool basiert auf dem bewährten **ELDiB** (Entwicklungstherapeutischer/entwicklungspädagogischer Lernziel-Diagnose-Bogen) und erweitert diesen um zusätzliche wichtige Themen der Jugendarbeit.

### Entwickelt für
- **CDSE Luxembourg** (Centre de Documentation et d'Information sur l'Enseignement Supérieur)

## 📋 Themenbereiche

### ELDiB-Bereiche (5 Entwicklungsstufen)
| Bereich | Beschreibung |
|---------|--------------|
| 🎯 **Verhalten** | Selbststeuerung, Impulskontrolle, Verhaltensregulation |
| 💬 **Kommunikation** | Sprachliche Kompetenzen, Ausdrucksfähigkeit |
| 👥 **Sozialisation** | Soziale Fähigkeiten, Beziehungskompetenz |

### Zusätzliche Themen für die Jugendarbeit
| Thema | Zielgruppe | Beschreibung |
|-------|------------|--------------|
| 🛡️ **Mobbing & Cybermobbing** | 10-18 Jahre | Prävention und Intervention |
| ⚖️ **Konflikte & Konfliktlösung** | 8-18 Jahre | Konstruktiver Umgang mit Konflikten |
| 💭 **Gefühle & Emotionen** | 6-18 Jahre | Emotionsregulation |
| ⭐ **Selbstwert & Identität** | 10-18 Jahre | Stärkung des Selbstbewusstseins |
| 📱 **Medienkompetenz** | 10-18 Jahre | Kritischer Umgang mit Medien |
| 🚫 **Suchtprävention** | 12-18 Jahre | Prävention von Suchtverhalten |
| 🤝 **Respekt & Toleranz** | 8-18 Jahre | Vielfalt und Respekt |
| ❤️ **Freundschaft & Beziehungen** | 8-18 Jahre | Aufbau und Pflege von Beziehungen |
| ✋ **Gewaltprävention** | 10-18 Jahre | Gewaltfreie Konfliktlösung |
| 🏆 **Teamwork & Kooperation** | 8-18 Jahre | Teamfähigkeit entwickeln |

## 📝 Übungstypen

Der Generator bietet verschiedene Übungstypen:

- **Selbstreflexion** - Übungen zur Selbstwahrnehmung und Reflexion
- **Situationsanalyse** - Analyse von sozialen Situationen und Konflikten
- **Ich-Botschaften** - Gewaltfreie Kommunikation üben
- **Gruppenarbeit** - Arbeitsblätter für Gruppenaktivitäten
- **Quiz** - Interaktive Wissenstests
- **Rollenspiel** - Anleitungen für Rollenspiele
- **Kreative Aufgaben** - Kreative Ausdrucksformen
- **Checklisten** - Praktische Checklisten für verschiedene Situationen

## 🚀 Schnellstart

### Web-Interface (empfohlen)

1. Öffnen Sie `dist/index.html` in Ihrem Browser
2. Wählen Sie ein Thema aus der Seitenleiste
3. Klicken Sie auf "Arbeitsblatt erstellen"
4. Passen Sie die Einstellungen an und generieren Sie das Arbeitsblatt
5. Drucken oder speichern Sie das Arbeitsblatt

### Kommandozeile (CLI)

```bash
# Hilfe anzeigen
node src/cli.js --help

# Verfügbare Optionen anzeigen
node src/cli.js --list

# Arbeitsblatt generieren
node src/cli.js --thema verhalten --typ selbstreflexion --stufe 3

# Mit benutzerdefiniertem Ausgabepfad
node src/cli.js --thema mobbing --typ situationsanalyse --output mein-arbeitsblatt.html
```

## 📁 Projektstruktur

```
Eldib-Generator/
├── data/
│   ├── themen/
│   │   ├── verhalten.json        # ELDiB Bereich Verhalten
│   │   ├── kommunikation.json    # ELDiB Bereich Kommunikation
│   │   ├── sozialisation.json    # ELDiB Bereich Sozialisation
│   │   └── zusatz-themen.json    # Zusätzliche Themen
│   └── uebungen/
│       └── uebungsvorlagen.json  # Übungsvorlagen
├── dist/
│   └── index.html                # Web-Interface
├── src/
│   ├── core/
│   │   └── generator.js          # Generator-Engine
│   ├── cli.js                    # Kommandozeilen-Interface
│   └── index.js                  # Haupteinstiegspunkt
├── package.json
├── README.md
└── CLAUDE.md
```

## 🎓 Über ELDiB und ETEP

### Was ist ELDiB?

Der **Entwicklungstherapeutische/entwicklungspädagogische Lernziel-Diagnose-Bogen (ELDiB)** ist ein Instrument zur Einschätzung und Förderung von Kindern und Jugendlichen. Er wurde vom Institut für Entwicklungstherapie/Entwicklungspädagogik e.V. (ETEP Europe) entwickelt.

### Die 5 Entwicklungsstufen

| Stufe | Ziel | Altersbereich |
|-------|------|---------------|
| I | Mit Freude auf die Umwelt reagieren | 0-2 Jahre |
| II | Erfolgreich auf die Umwelt reagieren | 2-5 Jahre |
| III | Erfolgreiche Teilnahme in Gruppen | 6-9 Jahre |
| IV | Sich einbringen in Gruppenprozesse | 9-12 Jahre |
| V | Fähigkeiten in neuen Situationen anwenden | 12-16+ Jahre |

### Die 4 Entwicklungsbereiche

1. **Verhalten** - Selbststeuerung und Verhaltenskontrolle
2. **Kommunikation** - Sprachliche und kommunikative Fähigkeiten
3. **Sozialisation** - Soziale Kompetenzen und Beziehungsfähigkeit
4. **Kognition** - Kognitive Fähigkeiten und Lernkompetenzen

## 🤝 Mitwirken

Beiträge sind willkommen! Bitte erstellen Sie einen Pull Request oder eröffnen Sie ein Issue für:

- Neue Themen oder Übungen
- Verbesserungen der bestehenden Inhalte
- Bugfixes
- Übersetzungen (Französisch, Luxemburgisch)

## 📄 Lizenz

MIT License - Siehe LICENSE Datei für Details.

## 🙏 Danksagung

- **Institut für Entwicklungstherapie/Entwicklungspädagogik e.V. (ETEP Europe)** für die Entwicklung des ELDiB-Ansatzes
- **Marita Bergsson** für die deutsche Übersetzung und Bearbeitung
- **CDSE Luxembourg** für die Unterstützung dieses Projekts

---

📚 **ELDiB Arbeitsblatt-Generator** | Entwickelt für CDSE Luxembourg | 2024
