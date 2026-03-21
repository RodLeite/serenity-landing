import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade — Serenity",
};

export default function Privacidade() {
  return (
    <main className="min-h-screen bg-pearl pt-28 pb-20 px-6">
      <article className="mx-auto max-w-3xl prose prose-neutral">
        <h1
          className="text-3xl font-bold text-ink mb-8"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          Política de Privacidade
        </h1>

        <p className="text-sm text-ink/50 mb-8">Última atualização: março de 2026</p>

        <h2 className="text-xl font-semibold text-ink mt-8 mb-4">1. Informações gerais</h2>
        <p className="text-ink/70 leading-relaxed mb-4">
          A Serenity — Centro de Estética e Odontológico (&quot;nós&quot;) está comprometida com a
          proteção da privacidade dos visitantes do nosso site. Esta política descreve como
          tratamos informações quando você acessa nossa página.
        </p>

        <h2 className="text-xl font-semibold text-ink mt-8 mb-4">2. Dados coletados</h2>
        <p className="text-ink/70 leading-relaxed mb-4">
          Nosso site não coleta dados pessoais diretamente. Os botões de contato redirecionam
          para o WhatsApp, onde a comunicação ocorre diretamente entre você e nossa equipe.
        </p>

        <h2 className="text-xl font-semibold text-ink mt-8 mb-4">3. Cookies e analytics</h2>
        <p className="text-ink/70 leading-relaxed mb-4">
          Podemos utilizar ferramentas de analytics para entender como os visitantes interagem
          com o site. Essas ferramentas podem usar cookies não identificáveis. Nenhum dado
          pessoal é armazenado por nós através dessas ferramentas.
        </p>

        <h2 className="text-xl font-semibold text-ink mt-8 mb-4">4. Compartilhamento</h2>
        <p className="text-ink/70 leading-relaxed mb-4">
          Não compartilhamos, vendemos ou alugamos informações pessoais a terceiros.
        </p>

        <h2 className="text-xl font-semibold text-ink mt-8 mb-4">5. Seus direitos (LGPD)</h2>
        <p className="text-ink/70 leading-relaxed mb-4">
          De acordo com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você tem
          direito a solicitar acesso, correção ou exclusão de quaisquer dados pessoais que
          possam estar em nosso poder. Para exercer seus direitos, entre em contato pelo
          WhatsApp: (11) 97280-4531.
        </p>

        <h2 className="text-xl font-semibold text-ink mt-8 mb-4">6. Contato</h2>
        <p className="text-ink/70 leading-relaxed mb-4">
          Para dúvidas sobre esta política, entre em contato:<br />
          WhatsApp: (11) 97280-4531<br />
          Endereço: R. Guaximbe, nº 32 - Parque Guarani, São Paulo - SP, 08235-710
        </p>

        <div className="mt-12 pt-8 border-t border-sand">
          <a
            href="/"
            className="text-sm text-blue-deep hover:text-bronze transition-colors"
          >
            ← Voltar para a página principal
          </a>
        </div>
      </article>
    </main>
  );
}
