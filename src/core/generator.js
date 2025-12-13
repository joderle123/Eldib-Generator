/**
 * ELDiB Arbeitsblatt Generator
 * Generiert interaktive Arbeitsblätter für pädagogische Fachkräfte
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export class ArbeitsblattGenerator {
  constructor() {
    this.themen = {};
    this.zusatzThemen = {};
    this.uebungen = {};
    this.loadData();
  }

  loadData() {
    const dataPath = join(__dirname, '../../data');

    // Lade ELDiB-Bereiche
    const bereiche = ['verhalten', 'kommunikation', 'sozialisation'];
    for (const bereich of bereiche) {
      const filePath = join(dataPath, 'themen', `${bereich}.json`);
      if (existsSync(filePath)) {
        this.themen[bereich] = JSON.parse(readFileSync(filePath, 'utf-8'));
      }
    }

    // Lade Zusatzthemen
    const zusatzPath = join(dataPath, 'themen', 'zusatz-themen.json');
    if (existsSync(zusatzPath)) {
      this.zusatzThemen = JSON.parse(readFileSync(zusatzPath, 'utf-8'));
    }

    // Lade Übungsvorlagen
    const uebungenPath = join(dataPath, 'uebungen', 'uebungsvorlagen.json');
    if (existsSync(uebungenPath)) {
      this.uebungen = JSON.parse(readFileSync(uebungenPath, 'utf-8'));
    }
  }

  /**
   * Generiert ein Arbeitsblatt basierend auf den Parametern
   */
  generateArbeitsblatt(options) {
    const {
      thema,
      stufe,
      uebungstyp,
      titel,
      altersgruppe,
      interaktiv = true
    } = options;

    const arbeitsblatt = {
      titel: titel || this.generateTitel(thema, stufe),
      thema,
      stufe,
      altersgruppe: altersgruppe || this.getAltersgruppe(stufe),
      datum: new Date().toLocaleDateString('de-DE'),
      uebungen: this.getUebungen(thema, uebungstyp),
      interaktiv
    };

    return arbeitsblatt;
  }

  generateTitel(thema, stufe) {
    const themenTitel = {
      verhalten: 'Verhalten & Selbststeuerung',
      kommunikation: 'Kommunikation & Sprache',
      sozialisation: 'Soziale Kompetenzen',
      mobbing: 'Mobbing & Prävention',
      konflikte: 'Konflikte lösen',
      emotionen: 'Gefühle verstehen',
      selbstwert: 'Selbstwert stärken',
      medien: 'Medienkompetenz',
      freundschaft: 'Freundschaft & Beziehungen'
    };

    return themenTitel[thema] || `Arbeitsblatt: ${thema}`;
  }

  getAltersgruppe(stufe) {
    const altersgruppen = {
      1: '0-2 Jahre / Basiskompetenzen',
      2: '2-5 Jahre / Frühe Kindheit',
      3: '6-9 Jahre / Grundschulalter',
      4: '9-12 Jahre / Späte Kindheit',
      5: '12-16+ Jahre / Jugendalter'
    };
    return altersgruppen[stufe] || 'Alle Altersgruppen';
  }

  getUebungen(thema, typ) {
    if (!this.uebungen.uebungstypen) return [];

    const uebungsTyp = this.uebungen.uebungstypen.find(u => u.typ === typ);
    if (!uebungsTyp) return [];

    return uebungsTyp.vorlagen || [];
  }

  /**
   * Generiert HTML für ein Arbeitsblatt
   */
  generateHTML(arbeitsblatt) {
    const html = `<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${arbeitsblatt.titel}</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            background: #f5f5f5;
            padding: 20px;
        }

        .arbeitsblatt {
            max-width: 800px;
            margin: 0 auto;
            background: white;
            padding: 40px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        .header {
            text-align: center;
            margin-bottom: 30px;
            padding-bottom: 20px;
            border-bottom: 2px solid #e0e0e0;
        }

        .header h1 {
            color: #2c3e50;
            font-size: 28px;
            margin-bottom: 10px;
        }

        .meta {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 10px;
            font-size: 14px;
            color: #666;
        }

        .name-field {
            margin: 20px 0;
            padding: 15px;
            background: #f9f9f9;
            border-radius: 5px;
        }

        .name-field label {
            display: block;
            font-weight: bold;
            margin-bottom: 5px;
        }

        .name-field input {
            width: 100%;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
            font-size: 16px;
        }

        .uebung {
            margin: 30px 0;
            padding: 20px;
            background: #fafafa;
            border-radius: 8px;
            border-left: 4px solid #3498db;
        }

        .uebung h3 {
            color: #2c3e50;
            margin-bottom: 10px;
        }

        .uebung .anleitung {
            font-style: italic;
            color: #666;
            margin-bottom: 15px;
        }

        .element {
            margin: 15px 0;
        }

        .element label {
            display: block;
            font-weight: 600;
            margin-bottom: 5px;
            color: #444;
        }

        .element textarea {
            width: 100%;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
            font-size: 14px;
            resize: vertical;
        }

        .element input[type="text"] {
            width: 100%;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
            font-size: 14px;
        }

        .skala {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
        }

        .skala label {
            display: flex;
            align-items: center;
            gap: 5px;
            cursor: pointer;
            padding: 8px 15px;
            border: 2px solid #ddd;
            border-radius: 20px;
            transition: all 0.3s;
        }

        .skala input:checked + span {
            color: white;
        }

        .skala label:has(input:checked) {
            background: #3498db;
            border-color: #3498db;
            color: white;
        }

        .skala input {
            display: none;
        }

        .checkbox-gruppe {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .checkbox-gruppe label {
            display: flex;
            align-items: center;
            gap: 10px;
            font-weight: normal;
            cursor: pointer;
        }

        .checkbox-gruppe input[type="checkbox"] {
            width: 20px;
            height: 20px;
        }

        .liste-input {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .liste-input input {
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
        }

        .erklaerung {
            background: #e8f4fd;
            padding: 15px;
            border-radius: 5px;
            margin: 10px 0;
            border-left: 4px solid #3498db;
        }

        .beispiel {
            background: #e8f8f5;
            padding: 15px;
            border-radius: 5px;
            margin: 10px 0;
        }

        .beispiel h4 {
            color: #27ae60;
            margin-bottom: 10px;
        }

        .footer {
            margin-top: 40px;
            padding-top: 20px;
            border-top: 2px solid #e0e0e0;
            text-align: center;
            color: #888;
            font-size: 12px;
        }

        .print-button {
            position: fixed;
            bottom: 20px;
            right: 20px;
            padding: 15px 25px;
            background: #3498db;
            color: white;
            border: none;
            border-radius: 30px;
            cursor: pointer;
            font-size: 16px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.2);
        }

        .print-button:hover {
            background: #2980b9;
        }

        @media print {
            body {
                background: white;
                padding: 0;
            }

            .arbeitsblatt {
                box-shadow: none;
                padding: 20px;
            }

            .print-button {
                display: none;
            }

            textarea, input[type="text"] {
                border: 1px solid #ccc !important;
            }
        }
    </style>
</head>
<body>
    <div class="arbeitsblatt">
        <div class="header">
            <h1>${arbeitsblatt.titel}</h1>
            <div class="meta">
                <span>📚 Thema: ${arbeitsblatt.thema}</span>
                <span>📅 Datum: ${arbeitsblatt.datum}</span>
                <span>👤 Altersgruppe: ${arbeitsblatt.altersgruppe}</span>
            </div>
        </div>

        <div class="name-field">
            <label for="name">Name:</label>
            <input type="text" id="name" placeholder="Dein Name...">
        </div>

        ${this.renderUebungen(arbeitsblatt.uebungen)}

        <div class="footer">
            <p>Erstellt mit dem ELDiB Arbeitsblatt-Generator | CDSE Luxembourg</p>
            <p>Basierend auf dem ETEP-Ansatz (Entwicklungstherapie/Entwicklungspädagogik)</p>
        </div>
    </div>

    <button class="print-button" onclick="window.print()">🖨️ Drucken</button>

    <script>
        // Speichere Eingaben im localStorage
        document.querySelectorAll('input, textarea').forEach(el => {
            const key = 'arbeitsblatt_' + el.id;

            // Lade gespeicherte Werte
            if (localStorage.getItem(key)) {
                el.value = localStorage.getItem(key);
            }

            // Speichere bei Änderung
            el.addEventListener('input', () => {
                localStorage.setItem(key, el.value);
            });
        });
    </script>
</body>
</html>`;

    return html;
  }

  renderUebungen(uebungen) {
    if (!uebungen || uebungen.length === 0) {
      return '<p class="uebung">Keine Übungen ausgewählt.</p>';
    }

    return uebungen.map((uebung, index) => {
      return `
        <div class="uebung">
            <h3>${index + 1}. ${uebung.titel}</h3>
            <p class="anleitung">${uebung.anleitung}</p>
            ${this.renderElemente(uebung.elemente || [], uebung.id)}
        </div>
      `;
    }).join('');
  }

  renderElemente(elemente, uebungId) {
    return elemente.map((el, index) => {
      const id = `${uebungId}_${index}`;

      switch (el.typ) {
        case 'textfeld':
          return `
            <div class="element">
                <label for="${id}">${el.label}</label>
                <textarea id="${id}" rows="${el.zeilen || 3}" placeholder="Schreibe hier..."></textarea>
            </div>
          `;

        case 'liste':
          return `
            <div class="element">
                <label>${el.label}</label>
                <div class="liste-input">
                    ${Array(el.anzahl || 3).fill(0).map((_, i) =>
                      `<input type="text" id="${id}_${i}" placeholder="${i + 1}.">`
                    ).join('')}
                </div>
            </div>
          `;

        case 'gefuehlsskala':
        case 'auswahl':
          return `
            <div class="element">
                <label>${el.label}</label>
                <div class="skala">
                    ${(el.optionen || []).map((opt, i) =>
                      `<label><input type="radio" name="${id}" value="${i}"><span>${opt}</span></label>`
                    ).join('')}
                </div>
            </div>
          `;

        case 'skala':
          return `
            <div class="element">
                <label>${el.label}</label>
                <div class="skala">
                    ${Array.from({length: (el.max || 10) - (el.min || 1) + 1}, (_, i) => i + (el.min || 1))
                      .map(n => `<label><input type="radio" name="${id}" value="${n}"><span>${n}</span></label>`)
                      .join('')}
                </div>
            </div>
          `;

        case 'erklaerung':
          return `
            <div class="erklaerung">
                <p>${el.text.replace(/\n/g, '<br>')}</p>
            </div>
          `;

        case 'uebung':
          return `
            <div class="beispiel">
                <h4>${el.label}</h4>
                <p><strong>${el.vorgabe}</strong></p>
            </div>
          `;

        case 'checkbox':
          return `
            <div class="element">
                <div class="checkbox-gruppe">
                    <label>
                        <input type="checkbox" id="${id}">
                        <span>${el.label}</span>
                    </label>
                </div>
            </div>
          `;

        default:
          return '';
      }
    }).join('');
  }

  /**
   * Liste aller verfügbaren Themen
   */
  getAvailableThemen() {
    const themen = [];

    // ELDiB-Bereiche
    for (const [key, data] of Object.entries(this.themen)) {
      themen.push({
        id: key,
        name: data.bereich,
        typ: 'eldib',
        beschreibung: data.beschreibung,
        stufen: data.stufen?.length || 0
      });
    }

    // Zusatzthemen
    if (this.zusatzThemen.zusatzthemen) {
      for (const thema of this.zusatzThemen.zusatzthemen) {
        themen.push({
          id: thema.id,
          name: thema.name,
          typ: 'zusatz',
          beschreibung: thema.beschreibung,
          zielgruppe: thema.zielgruppe
        });
      }
    }

    return themen;
  }

  /**
   * Liste aller verfügbaren Übungstypen
   */
  getAvailableUebungstypen() {
    if (!this.uebungen.uebungstypen) return [];

    return this.uebungen.uebungstypen.map(u => ({
      typ: u.typ,
      name: u.name,
      beschreibung: u.beschreibung,
      anzahlVorlagen: u.vorlagen?.length || 0
    }));
  }
}

export default ArbeitsblattGenerator;
