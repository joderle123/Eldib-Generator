/**
 * ELDiB Arbeitsblatt-Generator
 * Haupteinstiegspunkt
 *
 * Ein Tool für pädagogische Fachkräfte zur Erstellung von
 * interaktiven Arbeitsblättern basierend auf dem ETEP-Ansatz.
 *
 * @author CDSE Luxembourg
 * @license MIT
 */

import { ArbeitsblattGenerator } from './core/generator.js';

// Exportiere den Generator für externe Nutzung
export { ArbeitsblattGenerator };

// CLI-Modus wenn direkt ausgeführt
if (process.argv[1] === import.meta.url.slice(7)) {
  console.log(`
╔═══════════════════════════════════════════════════════════╗
║                                                           ║
║     📚 ELDiB Arbeitsblatt-Generator                       ║
║     Interaktive Arbeitsblätter für pädagogische Arbeit    ║
║                                                           ║
╠═══════════════════════════════════════════════════════════╣
║                                                           ║
║  Befehle:                                                 ║
║    npm run serve    - Startet den Web-Server              ║
║    npm run generate - Generiert ein Arbeitsblatt (CLI)    ║
║                                                           ║
║  Verfügbare Themen:                                       ║
║    • Verhalten (ELDiB)                                    ║
║    • Kommunikation (ELDiB)                                ║
║    • Sozialisation (ELDiB)                                ║
║    • Mobbing & Cybermobbing                               ║
║    • Konflikte & Konfliktlösung                           ║
║    • Gefühle & Emotionen                                  ║
║    • Selbstwert & Identität                               ║
║    • Medienkompetenz                                      ║
║    • Suchtprävention                                      ║
║    • Respekt & Toleranz                                   ║
║    • Freundschaft & Beziehungen                           ║
║    • Gewaltprävention                                     ║
║    • Teamwork & Kooperation                               ║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝
  `);

  const generator = new ArbeitsblattGenerator();

  console.log('\n📋 Verfügbare Themen:\n');
  const themen = generator.getAvailableThemen();
  themen.forEach((t, i) => {
    console.log(`  ${i + 1}. ${t.name} (${t.typ})`);
  });

  console.log('\n📝 Verfügbare Übungstypen:\n');
  const uebungen = generator.getAvailableUebungstypen();
  uebungen.forEach((u, i) => {
    console.log(`  ${i + 1}. ${u.name} - ${u.beschreibung}`);
  });

  console.log('\n✨ Öffnen Sie dist/index.html in Ihrem Browser für die interaktive Oberfläche.\n');
}
