/**
 * Impressum – Classic-Clean
 * Gesetzlich erforderliche Angaben gemäß §5 TMG (Telemediengesetz)
 * Für ein Einzelunternehmen in Berlin
 */
import { ChevronLeft } from "lucide-react";
import { useLocation } from "wouter";

export default function Impressum() {
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
            Impressum
          </h1>
          <p className="text-sm mb-8" style={{ color: "#6B7280" }}>
            Angaben gemäß § 5 TMG (Telemediengesetz)
          </p>

          {/* Verantwortlicher */}
          <section className="mb-10">
            <h2 className="text-xl font-bold mb-4" style={{ color: "#102A43" }}>
              Verantwortlicher für den Inhalt
            </h2>
            <div className="space-y-2" style={{ color: "#374151" }}>
              <p>
                <strong>Classic-Clean</strong>
              </p>
              <p>Einzelunternehmen</p>
              <p>Berlin, Deutschland</p>
            </div>
          </section>

          {/* Kontaktinformationen */}
          <section className="mb-10">
            <h2 className="text-xl font-bold mb-4" style={{ color: "#102A43" }}>
              Kontaktinformationen
            </h2>
            <div className="space-y-2" style={{ color: "#374151" }}>
              <p>
                <strong>Telefon:</strong> 0163 6259023
              </p>
              <p>
                <strong>E-Mail:</strong> Service-Classic-clean@hotmail.com
              </p>
              <p>
                <strong>Tätigkeitsbereich:</strong> Professionelle Gebäudereinigung für Unternehmen, Büros, Kanzleien und Einrichtungen in Berlin und Brandenburg
              </p>
            </div>
          </section>

          {/* Haftungsausschluss */}
          <section className="mb-10">
            <h2 className="text-xl font-bold mb-4" style={{ color: "#102A43" }}>
              Haftungsausschluss
            </h2>
            <div className="space-y-4" style={{ color: "#374151", lineHeight: "1.7" }}>
              <p>
                <strong>Haftung für Inhalte</strong>
              </p>
              <p>
                Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 des TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>

              <p>
                <strong>Haftung für Links</strong>
              </p>
              <p>
                Unsere Website enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
              </p>

              <p>
                <strong>Urheberrecht</strong>
              </p>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des Autors oder Urhebers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
              </p>
            </div>
          </section>

          {/* Datenschutz */}
          <section className="mb-10">
            <h2 className="text-xl font-bold mb-4" style={{ color: "#102A43" }}>
              Datenschutz
            </h2>
            <p style={{ color: "#374151", lineHeight: "1.7" }}>
              Informationen zum Datenschutz finden Sie in unserer{" "}
              <button
                onClick={() => setLocation("/datenschutz")}
                className="font-medium underline transition-colors hover:opacity-70"
                style={{ color: "#2563EB" }}
              >
                Datenschutzerklärung
              </button>
              .
            </p>
          </section>

          {/* Streitbeilegung */}
          <section className="mb-10">
            <h2 className="text-xl font-bold mb-4" style={{ color: "#102A43" }}>
              Streitbeilegung
            </h2>
            <div className="space-y-4" style={{ color: "#374151", lineHeight: "1.7" }}>
              <p>
                <strong>Verbraucherstreitbeilegung / Universalschiedsverfahren</strong>
              </p>
              <p>
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>
          </section>

          {/* Disclaimer */}
          <section className="p-6 rounded-lg border" style={{ background: "#F3F4F6", borderColor: "#E5E7EB" }}>
            <p className="text-sm" style={{ color: "#6B7280" }}>
              <strong>Hinweis:</strong> Dieses Impressum wurde mit größter Sorgfalt erstellt und entspricht den Anforderungen des deutschen Telemediengesetzes (TMG). Bei Fragen oder Unklarheiten kontaktieren Sie uns bitte direkt.
            </p>
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
