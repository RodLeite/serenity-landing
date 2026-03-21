import { Instagram, Phone, MapPin, Clock } from "lucide-react";
import content from "@/data/content.json";

const { meta, footer } = content;

export default function Footer() {
  return (
    <footer className="bg-ink text-white/80">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Marca */}
          <div>
            <h3
              className="text-2xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Serenity
            </h3>
            <p className="text-sm leading-relaxed text-white/60">
              Centro de Estética e Odontológico.
              <br />
              Beleza e saúde com o cuidado que você merece.
            </p>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contato
            </h4>
            <div className="flex items-start gap-3 text-sm">
              <Phone className="h-4 w-4 mt-0.5 text-blue-soft" />
              <span>(11) 97280-4531</span>
            </div>
            <div className="flex items-start gap-3 text-sm">
              <Instagram className="h-4 w-4 mt-0.5 text-blue-soft" />
              <a
                href={`https://instagram.com/${meta.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                @{meta.instagram}
              </a>
            </div>
            <div className="flex items-start gap-3 text-sm">
              <MapPin className="h-4 w-4 mt-0.5 text-blue-soft" />
              <span>{meta.address}</span>
            </div>
          </div>

          {/* Horários */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Horários
            </h4>
            <div className="flex items-start gap-3 text-sm">
              <Clock className="h-4 w-4 mt-0.5 text-blue-soft" />
              <div>
                <p>{meta.hours.weekdays}</p>
                <p>{meta.hours.saturday}</p>
                <p>{meta.hours.sunday}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider + Copyright */}
        <div className="mt-12 border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">{footer.copyright}</p>
          <a
            href="/privacidade"
            className="text-xs text-white/40 hover:text-white/70 transition-colors"
          >
            Política de Privacidade
          </a>
        </div>
      </div>
    </footer>
  );
}
