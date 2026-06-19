/**
 * Datenschutz – Classic-Clean
 * Datenschutzerklärung gemäß DSGVO (Datenschutz-Grundverordnung)
 * und BDSG (Bundesdatenschutzgesetz)
 */
import { ChevronLeft } from "lucide-react";
import { useLocation } from "wouter";

export default function Datenschutz() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#F8FAFC" }}>
      {/* Header */}
      <div className="border-b" style={{ borderColor: "#E5E7EB", background: "white" }}>
        <div className="container py-6 flex items-center gap-3">
          <button
            onClick={() => setLocation("/")}
            className="flex items-center gap-1 text-sm font-medium transition-colors hover:opacity-70"
            style={{ color: "#2563EB" }}
          >
            <ChevronLeft size={16} />
            Zurück zur Startseite
          </button>
        </div>
      </div>

      {/* Main content */}
      <main className="flex-1">
        <div className="container py-12 md:py-16 max-w-3xl">
          <h1 className="text-4xl font-bold mb-2" style={{ color: "#102A43" }}>
            Datenschutzerklärung
          </h1>
          <p className="text-sm mb-8" style={{ color: "#6B7280" }}>
            Gültig ab: Juni 2026 | Zuletzt aktualisiert: Juni 2026
          </p>

          {/* Verantwortlicher */}
          <section className="mb-10">
            <h2 className="text-xl font-bold mb-4" style={{ color: "#102A43" }}>
              1. Verantwortlicher für die Datenverarbeitung
            </h2>
            <div className="space-y-2" style={{ color: "#374151" }}>
              <p>
                <strong>Classic-Clean</strong>
              </p>
              <p>Einzelunternehmen</p>
              <p>Berlin, Deutschland</p>
              <p>
                <strong>Telefon:</strong> 0163 6259023
              </p>
              <p>
                <strong>E-Mail:</strong> Service-Classic-clean@hotmail.com
              </p>
            </div>
          </section>

          {/* Allgemeine Hinweise */}
          <section className="mb-10">
            <h2 className="text-xl font-bold mb-4" style={{ color: "#102A43" }}>
              2. Allgemeine Hinweise zur Datenverarbeitung
            </h2>
            <div className="space-y-4" style={{ color: "#374151", lineHeight: "1.7" }}>
              <p>
                Diese Datenschutzerklärung gilt für die Website classic-clean.de und alle damit verbundenen Dienste. Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst und verarbeiten diese gemäß den Bestimmungen der Datenschutz-Grundverordnung (DSGVO) und des Bundesdatenschutzgesetzes (BDSG).
              </p>
              <p>
                <strong>Rechtsgrundlagen der Verarbeitung:</strong> Die Verarbeitung personenbezogener Daten erfolgt auf Basis von:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)</li>
                <li>Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung)</li>
                <li>Art. 6 Abs. 1 lit. c DSGVO (Rechtliche Verpflichtung)</li>
                <li>Art. 6 Abs. 1 lit. f DSGVO (Berechtigte Interessen)</li>
              </ul>
            </div>
          </section>

          {/* Kontaktformular */}
          <section className="mb-10">
            <h2 className="text-xl font-bold mb-4" style={{ color: "#102A43" }}>
              3. Datenverarbeitung über das Kontaktformular
            </h2>
            <div className="space-y-4" style={{ color: "#374151", lineHeight: "1.7" }}>
              <p>
                <strong>Welche Daten werden erfasst?</strong>
              </p>
              <p>
                Wenn Sie unser Kontaktformular nutzen, erfassen wir folgende Daten:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Name</li>
                <li>Unternehmen</li>
                <li>Telefonnummer</li>
                <li>E-Mail-Adresse</li>
                <li>Nachricht (optional)</li>
              </ul>

              <p>
                <strong>Zweck der Verarbeitung:</strong>
              </p>
              <p>
                Die Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage verwendet. Wir nutzen diese Informationen, um mit Ihnen Kontakt aufzunehmen und Ihre Anfrage zu beantworten.
              </p>

              <p>
                <strong>Rechtsgrundlage:</strong>
              </p>
              <p>
                Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung) – Die Verarbeitung ist erforderlich, um Ihre Anfrage zu bearbeiten.
              </p>

              <p>
                <strong>Speicherdauer:</strong>
              </p>
              <p>
                Die Daten werden nach vollständiger Bearbeitung Ihrer Anfrage gelöscht, spätestens nach 6 Monaten, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.
              </p>
            </div>
          </section>

          {/* Website-Besuch */}
          <section className="mb-10">
            <h2 className="text-xl font-bold mb-4" style={{ color: "#102A43" }}>
              4. Datenverarbeitung beim Besuch der Website
            </h2>
            <div className="space-y-4" style={{ color: "#374151", lineHeight: "1.7" }}>
              <p>
                <strong>Server-Logdateien:</strong>
              </p>
              <p>
                Bei jedem Besuch unserer Website werden automatisch Informationen erfasst und in sogenannten Server-Logdateien gespeichert:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>IP-Adresse des anfragenden Rechners</li>
                <li>Datum und Uhrzeit des Zugriffs</li>
                <li>Name der angeforderten Datei</li>
                <li>Seite, von der aus der Zugriff erfolgt ist (Referrer)</li>
                <li>Verwendeter Browser und Betriebssystem</li>
                <li>HTTP-Statuscode</li>
              </ul>

              <p>
                <strong>Zweck:</strong>
              </p>
              <p>
                Diese Daten dienen der Systemsicherheit, Fehleranalyse und zur Optimierung unserer Website. Eine Zusammenfassung mit anderen Daten findet nicht statt.
              </p>

              <p>
                <strong>Rechtsgrundlage:</strong>
              </p>
              <p>
                Art. 6 Abs. 1 lit. f DSGVO (Berechtigte Interessen) – Die Verarbeitung ist erforderlich für die Sicherheit und den Betrieb unserer Website.
              </p>

              <p>
                <strong>Speicherdauer:</strong>
              </p>
              <p>
                Die Logdateien werden nach 7 Tagen gelöscht.
              </p>
            </div>
          </section>

          {/* Cookies */}
          <section className="mb-10">
            <h2 className="text-xl font-bold mb-4" style={{ color: "#102A43" }}>
              5. Verwendung von Cookies
            </h2>
            <div className="space-y-4" style={{ color: "#374151", lineHeight: "1.7" }}>
              <p>
                Unsere Website verwendet derzeit keine Tracking-Cookies oder Cookies zur Speicherung von Nutzungsdaten. Technisch notwendige Cookies (z. B. für die Sitzungsverwaltung) werden nur mit Ihrer Zustimmung gespeichert.
              </p>

              <p>
                <strong>Verweigerung von Cookies:</strong>
              </p>
              <p>
                Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und einzeln über deren Annahme entscheiden können. Sie können auch die Annahme von Cookies für bestimmte Fälle oder generell ausschließen.
              </p>
            </div>
          </section>

          {/* Externe Dienste */}
          <section className="mb-10">
            <h2 className="text-xl font-bold mb-4" style={{ color: "#102A43" }}>
              6. Externe Dienste und Drittanbieter
            </h2>
            <div className="space-y-4" style={{ color: "#374151", lineHeight: "1.7" }}>
              <p>
                <strong>Google Fonts:</strong>
              </p>
              <p>
                Diese Website verwendet Google Fonts zur Darstellung von Schriftarten. Dabei werden Ihre IP-Adresse und Informationen über den Seitenaufruf an Google übermittelt. Weitere Informationen finden Sie in der{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                  style={{ color: "#2563EB" }}
                >
                  Datenschutzerklärung von Google
                </a>
                .
              </p>

              <p>
                <strong>Manus-Plattform:</strong>
              </p>
              <p>
                Diese Website wird auf der Manus-Plattform gehostet. Dabei können Daten gemäß der{" "}
                <a
                  href="https://manus.im/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                  style={{ color: "#2563EB" }}
                >
                  Datenschutzerklärung von Manus
                </a>
                {" "}verarbeitet werden.
              </p>
            </div>
          </section>

          {/* Betroffenenrechte */}
          <section className="mb-10">
            <h2 className="text-xl font-bold mb-4" style={{ color: "#102A43" }}>
              7. Ihre Rechte als Betroffener
            </h2>
            <div className="space-y-4" style={{ color: "#374151", lineHeight: "1.7" }}>
              <p>
                Sie haben folgende Rechte gemäß DSGVO:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>
                  <strong>Auskunftsrecht (Art. 15 DSGVO):</strong> Sie können Auskunft über die Verarbeitung Ihrer Daten verlangen.
                </li>
                <li>
                  <strong>Recht auf Berichtigung (Art. 16 DSGVO):</strong> Sie können die Berichtigung unrichtiger Daten verlangen.
                </li>
                <li>
                  <strong>Recht auf Löschung (Art. 17 DSGVO):</strong> Sie können die Löschung Ihrer Daten verlangen (unter bestimmten Voraussetzungen).
                </li>
                <li>
                  <strong>Recht auf Einschränkung (Art. 18 DSGVO):</strong> Sie können die Einschränkung der Verarbeitung verlangen.
                </li>
                <li>
                  <strong>Recht auf Datenportabilität (Art. 20 DSGVO):</strong> Sie können Ihre Daten in einem strukturierten Format erhalten.
                </li>
                <li>
                  <strong>Widerspruchsrecht (Art. 21 DSGVO):</strong> Sie können der Verarbeitung widersprechen.
                </li>
              </ul>

              <p>
                Um diese Rechte geltend zu machen, kontaktieren Sie uns bitte unter:
              </p>
              <p>
                <strong>E-Mail:</strong> Service-Classic-clean@hotmail.com
              </p>
              <p>
                <strong>Telefon:</strong> 0163 6259023
              </p>
            </div>
          </section>

          {/* Beschwerderecht */}
          <section className="mb-10">
            <h2 className="text-xl font-bold mb-4" style={{ color: "#102A43" }}>
              8. Beschwerderecht bei einer Aufsichtsbehörde
            </h2>
            <div className="space-y-4" style={{ color: "#374151", lineHeight: "1.7" }}>
              <p>
                Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren, wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen Daten gegen die DSGVO verstößt.
              </p>

              <p>
                <strong>Zuständige Aufsichtsbehörde für Berlin:</strong>
              </p>
              <p>
                Berliner Beauftragte für Datenschutz und Informationsfreiheit
              </p>
              <p>
                Friedrichstraße 219
              </p>
              <p>
                10969 Berlin
              </p>
              <p>
                Telefon: +49 (0)30 13889-0
              </p>
              <p>
                E-Mail: mailbox@datenschutz-berlin.de
              </p>
              <p>
                Website:{" "}
                <a
                  href="https://www.datenschutz-berlin.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                  style={{ color: "#2563EB" }}
                >
                  www.datenschutz-berlin.de
                </a>
              </p>
            </div>
          </section>

          {/* Sicherheit */}
          <section className="mb-10">
            <h2 className="text-xl font-bold mb-4" style={{ color: "#102A43" }}>
              9. Sicherheit Ihrer Daten
            </h2>
            <div className="space-y-4" style={{ color: "#374151", lineHeight: "1.7" }}>
              <p>
                Wir setzen technische und organisatorische Maßnahmen ein, um Ihre Daten vor Missbrauch, Verlust und unbefugtem Zugriff zu schützen. Alle Datenübertragungen erfolgen verschlüsselt über HTTPS.
              </p>
            </div>
          </section>

          {/* Änderungen */}
          <section className="mb-10">
            <h2 className="text-xl font-bold mb-4" style={{ color: "#102A43" }}>
              10. Änderungen dieser Datenschutzerklärung
            </h2>
            <div className="space-y-4" style={{ color: "#374151", lineHeight: "1.7" }}>
              <p>
                Wir behalten uns vor, diese Datenschutzerklärung jederzeit zu ändern. Die jeweils aktuelle Version ist auf unserer Website verfügbar. Wesentliche Änderungen werden Ihnen per E-Mail mitgeteilt.
              </p>
            </div>
          </section>

          {/* Kontakt */}
          <section className="p-6 rounded-lg border" style={{ background: "#F3F4F6", borderColor: "#E5E7EB" }}>
            <h3 className="font-bold mb-3" style={{ color: "#102A43" }}>
              Fragen zum Datenschutz?
            </h3>
            <p className="text-sm mb-3" style={{ color: "#6B7280" }}>
              Bei Fragen zur Datenverarbeitung oder zur Geltendmachung Ihrer Rechte kontaktieren Sie uns:
            </p>
            <div className="text-sm space-y-1" style={{ color: "#374151" }}>
              <p>
                <strong>E-Mail:</strong> Service-Classic-clean@hotmail.com
              </p>
              <p>
                <strong>Telefon:</strong> 0163 6259023
              </p>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <div className="border-t" style={{ borderColor: "#E5E7EB", background: "white", marginTop: "auto" }}>
        <div className="container py-6 text-center text-sm" style={{ color: "#6B7280" }}>
          <p>© {new Date().getFullYear()} Classic-Clean. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </div>
  );
}
