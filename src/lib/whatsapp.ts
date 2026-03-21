import content from "@/data/content.json";

/**
 * Gera o link do WhatsApp com mensagem pré-formatada.
 * Usa o número definido no content.json como fonte única.
 */
export function whatsappLink(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${content.meta.whatsapp}?text=${encoded}`;
}
