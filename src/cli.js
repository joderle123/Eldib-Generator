#!/usr/bin/env node
/**
 * ELDiB Arbeitsblatt-Generator CLI
 * Kommandozeilen-Interface zum Generieren von Arbeitsblättern
 */

import { ArbeitsblattGenerator } from './core/generator.js';
import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const generator = new ArbeitsblattGenerator();

// Argumente parsen
const args = process.argv.slice(2);

function showHelp() {
  console.log(`
📚 ELDiB Arbeitsblatt-Generator CLI

Verwendung:
  node src/cli.js [Optionen]

Optionen:
  --thema <thema>       Thema auswählen (z.B. verhalten, kommunikation, mobbing)
  --typ <typ>           Übungstyp (selbstreflexion, situationsanalyse, etc.)
  --stufe <1-5>         Entwicklungsstufe (nur für ELDiB-Bereiche)
  --output <datei>      Ausgabedatei (Standard: arbeitsblatt.html)
  --list                Zeigt alle verfügbaren Themen und Übungstypen
  --help                Diese Hilfe anzeigen

Beispiele:
  node src/cli.js --thema verhalten --typ selbstreflexion --stufe 3
  node src/cli.js --thema mobbing --typ situationsanalyse
  node src/cli.js --list
  `);
}

function listOptions() {
  console.log('\n📋 Verfügbare Themen:\n');
  console.log('ELDiB-Bereiche:');
  console.log('  • verhalten     - Verhaltenssteuerung und Selbstkontrolle');
  console.log('  • kommunikation - Sprachliche Kompetenzen');
  console.log('  • sozialisation - Soziale Fähigkeiten\n');

  console.log('Zusatzthemen:');
  console.log('  • mobbing       - Mobbing & Cybermobbing');
  console.log('  • konflikte     - Konfliktlösung');
  console.log('  • emotionen     - Gefühle & Emotionsregulation');
  console.log('  • selbstwert    - Selbstwert & Identität');
  console.log('  • medien        - Medienkompetenz');
  console.log('  • sucht         - Suchtprävention');
  console.log('  • respekt       - Respekt & Toleranz');
  console.log('  • freundschaft  - Freundschaft & Beziehungen');
  console.log('  • gewalt        - Gewaltprävention');
  console.log('  • teamarbeit    - Teamwork & Kooperation\n');

  console.log('📝 Verfügbare Übungstypen:\n');
  console.log('  • selbstreflexion    - Übungen zur Selbstwahrnehmung');
  console.log('  • situationsanalyse  - Analyse von Situationen');
  console.log('  • ich_botschaften    - Gewaltfreie Kommunikation');
  console.log('  • gruppenarbeit      - Gruppenaktivitäten');
  console.log('  • quiz               - Wissenstests');
  console.log('  • rollenspiel        - Rollenspiel-Anleitungen');
  console.log('  • kreativ            - Kreative Aufgaben');
  console.log('  • checkliste         - Praktische Checklisten\n');
}

function parseArgs(args) {
  const options = {
    thema: 'verhalten',
    typ: 'selbstreflexion',
    stufe: 3,
    output: 'arbeitsblatt.html'
  };

  for (let i = 0; i < args.length; i++) {
    switch (args[i]) {
      case '--help':
      case '-h':
        showHelp();
        process.exit(0);
      case '--list':
      case '-l':
        listOptions();
        process.exit(0);
      case '--thema':
      case '-t':
        options.thema = args[++i];
        break;
      case '--typ':
        options.typ = args[++i];
        break;
      case '--stufe':
      case '-s':
        options.stufe = parseInt(args[++i]);
        break;
      case '--output':
      case '-o':
        options.output = args[++i];
        break;
    }
  }

  return options;
}

async function main() {
  if (args.length === 0) {
    showHelp();
    return;
  }

  const options = parseArgs(args);

  console.log('\n📚 ELDiB Arbeitsblatt-Generator\n');
  console.log(`Thema: ${options.thema}`);
  console.log(`Übungstyp: ${options.typ}`);
  console.log(`Stufe: ${options.stufe}`);
  console.log(`Ausgabe: ${options.output}\n`);

  try {
    // Generiere Arbeitsblatt
    const arbeitsblatt = generator.generateArbeitsblatt({
      thema: options.thema,
      stufe: options.stufe,
      uebungstyp: options.typ,
      interaktiv: true
    });

    // Generiere HTML
    const html = generator.generateHTML(arbeitsblatt);

    // Schreibe Datei
    const outputPath = join(process.cwd(), options.output);
    writeFileSync(outputPath, html);

    console.log(`✅ Arbeitsblatt erfolgreich erstellt: ${outputPath}\n`);
    console.log('Öffnen Sie die Datei in Ihrem Browser, um das Arbeitsblatt zu nutzen.\n');

  } catch (error) {
    console.error('❌ Fehler beim Erstellen des Arbeitsblatts:', error.message);
    process.exit(1);
  }
}

main();
