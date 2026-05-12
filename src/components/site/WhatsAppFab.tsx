import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/site-config";

export function WhatsAppFab() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-whatsapp text-whatsapp-foreground px-5 py-4 font-semibold shadow-card glow-pulse hover:scale-105 transition-transform"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="hidden sm:inline">Agendar agora</span>
    </a>
  );
}
