import { useState } from "react";

import { createFileRoute } from "@tanstack/react-router";
import {
  MapPin, Phone, Instagram, Clock, MessageCircle, Star, Sparkles,
  Car, Droplets, Wind, Shield, Wrench, Leaf, Wifi, Truck, CheckCircle2,
  Menu, X
} from "lucide-react";
import heroCar from "@/assets/hero-car.jpg";
import serviceEncer from "@/assets/enceramento.jpg";
import servicePolish from "@/assets/service-polish.jpg";
import serviceWash from "@/assets/service-wash.jpg";
import serviceFoam from "@/assets/service-foam.jpg";
import serviceInterior from "@/assets/service-interior.jpg";
import serviceCrystal from "@/assets/service-crystal.jpg";
import serviceEngine from "@/assets/service-engine.jpg";
import beforeAfter1 from "@/assets/before-after-1.jpg";
import beforeAfter2 from "@/assets/before-after-2.jpg";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { SITE, WHATSAPP_URL } from "@/lib/site-config";
import logo from "@/assets/logo.png";


export const Route = createFileRoute("/")({
  component: LandingPage,
  head: () => ({
    meta: [
      { title: `Castelo | Estética Automotiva em Manaus-AM` },
      {
        name: "description",
        content:
          "Estética completa, lavagem detalhada, polimento, cristalização e higienização em Manaus. Agende pelo WhatsApp e tenha seu carro brilhando hoje.",
      },
    ],
  }),
});

const services = [
  { name: "Lavagem Simples", desc: "Lavagem externa rápida e impecável.", price: "R$ 35", time: "30 min", img: serviceFoam },
  { name: "Lavagem Completa", desc: "Externa, interna, vidros e pneus.", price: "R$ 70", time: "1h", img: serviceWash },
  { name: "Higienização Interna", desc: "Bancos, carpetes e teto a vapor.", price: "R$ 250", time: "3h", img: serviceInterior },
  { name: "Polimento Técnico", desc: "Remove riscos e devolve o brilho.", price: "R$ 350", time: "4h", img: servicePolish },
  { name: "Cristalização", desc: "Proteção e brilho duradouro.", price: "R$ 180", time: "2h", img: serviceCrystal },
  { name: "Enceramento", desc: "Cera premium para alto brilho.", price: "R$ 90", time: "1h", img: serviceEncer },
  { name: "Lavagem de Motor", desc: "Limpeza segura e profissional.", price: "R$ 80", time: "45 min", img: serviceEngine },
  { name: "Oxi-Sanitização", desc: "Elimina odores e bactérias.", price: "R$ 150", time: "1h", img: serviceInterior },
];

const testimonials = [
  { name: "Carlos M.", text: "Melhor lava jato de Manaus. Meu carro ficou impecável e o atendimento foi rápido.", car: "Honda Civic" },
  { name: "Juliana R.", text: "Higienização interna espetacular! Tirou cheiro de cigarro e bancos voltaram ao novo.", car: "Jeep Compass" },
  { name: "Rafael S.", text: "Cristalização ficou perfeita, o brilho dura semanas. Recomendo demais!", car: "Toyota Corolla" },
];

const differentials = [
  { icon: Sparkles, title: "Produtos Profissionais", desc: "Só usamos linhas premium e seguras." },
  { icon: Clock, title: "Atendimento Rápido", desc: "Seu carro pronto no mesmo dia." },
  { icon: Truck, title: "Busca e Entrega", desc: "Buscamos e entregamos seu veículo." },
  { icon: Wrench, title: "Equipe Especializada", desc: "Detalhadores treinados e certificados." },
  { icon: Leaf, title: "Lavagem Ecológica", desc: "Economia de água e produtos biodegradáveis." },
  { icon: Wind, title: "Ambiente Climatizado", desc: "Conforto enquanto você espera." },
  { icon: Wifi, title: "Wi-Fi e Café", desc: "Espera com Wi-Fi grátis e cafezinho." },
  { icon: Shield, title: "Equipamentos Pro", desc: "Tecnologia e garantia em cada serviço." },
];

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Services />
      <BeforeAfterSection />
      <SocialProof />
      <Differentials />
      <CTABanner />
      <Contact />
      <Footer />
      <WhatsAppFab />
    </div>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black border-b border-red-600/20">    
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">

      {/* LOGO */}
      <a href="#top" className="flex items-center gap-2">
        <img
          <img
  src={logo}
          alt="Logo Castelo Estética Automotiva"
          className="h-12 w-auto object-contain"
        />
      </a>

      {/* MENU DESKTOP */}
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
        <a href="#servicos" className="hover:text-primary transition-colors">
          Serviços
        </a>

        <a href="#galeria" className="hover:text-primary transition-colors">
          Galeria
        </a>

        <a href="#avaliacoes" className="hover:text-primary transition-colors">
          Avaliações
        </a>

        <a href="#contato" className="hover:text-primary transition-colors">
          Contato
        </a>
      </nav>

      {/* BOTÃO WHATSAPP DESKTOP */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden sm:inline-flex items-center gap-2 rounded-full bg-whatsapp text-whatsapp-foreground px-4 py-2 text-sm font-semibold hover:scale-105 transition-transform"
      >
        <MessageCircle className="w-4 h-4" />
        WhatsApp
      </a>

      {/* BOTÃO MENU MOBILE */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-white"
      >
        {menuOpen ? (
          <X className="w-7 h-7" />
        ) : (
          <Menu className="w-7 h-7" />
        )}
      </button>
    </div>

      {/* MENU MOBILE */}

      {/* OVERLAY ESCURO */}
      <div
        className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-40 transition-opacity duration-300 ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* MENU LATERAL */}
      {/* OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/80 z-40 transition-opacity duration-300 ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        onClick={() => setMenuOpen(false)}
      ></div>

      {/* MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-[260px] bg-black z-50 border-l border-red-600/30 shadow-[0_0_40px_rgba(255,0,0,0.15)] transform transition-transform duration-300 ${menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >

        {/* HEADER */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-red-600/20">

          <div className="flex items-center gap-3">
            <img
              <img
  src={logo}
              alt="Logo Castelo"
              className="h-12 w-auto object-contain"
            />

            <div>
              <h2 className="text-white font-bold text-base leading-none">
                Castelo
              </h2>

              <p className="text-red-500 text-xs tracking-[3px] uppercase mt-1">
                Premium
              </p>
            </div>
          </div>

          <button
            onClick={() => setMenuOpen(false)}
            className="text-white hover:text-red-500 transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
        </div>

        {/* LINKS */}
        <nav className="flex flex-col px-6 py-8 gap-3">

          <a
            href="#servicos"
            onClick={() => setMenuOpen(false)}
            className="group flex items-center justify-between bg-zinc-900 border border-zinc-800 hover:border-red-500 rounded-xl px-4 py-4 transition-all duration-300 hover:bg-red-600/10"
          >
            <span className="text-white text-base font-semibold">
              Serviços
            </span>

            <span className="text-red-500 text-xl group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>

          <a
            href="#galeria"
            onClick={() => setMenuOpen(false)}
            className="group flex items-center justify-between bg-zinc-900 border border-zinc-800 hover:border-red-500 rounded-xl px-4 py-4 transition-all duration-300 hover:bg-red-600/10"
          >
            <span className="text-white text-base font-semibold">
              Galeria
            </span>

            <span className="text-red-500 text-xl group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>

          <a
            href="#avaliacoes"
            onClick={() => setMenuOpen(false)}
            className="group flex items-center justify-between bg-zinc-900 border border-zinc-800 hover:border-red-500 rounded-xl px-4 py-4 transition-all duration-300 hover:bg-red-600/10"
          >
            <span className="text-white text-base font-semibold">
              Avaliações
            </span>

            <span className="text-red-500 text-xl group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>

          <a
            href="#contato"
            onClick={() => setMenuOpen(false)}
            className="group flex items-center justify-between bg-zinc-900 border border-zinc-800 hover:border-red-500 rounded-xl px-4 py-4 transition-all duration-300 hover:bg-red-600/10"
          >
            <span className="text-white text-base font-semibold">
              Contato
            </span>

            <span className="text-red-500 text-xl group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>

          {/* BOTÃO */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center justify-center gap-3 rounded-xl bg-green-500 hover:bg-green-600 text-white font-bold text-base py-2 shadow-lg transition-all duration-300"
          >
            <MessageCircle className="w-6 h-6" />
            WhatsApp
          </a>
        </nav>

        {/* FOOTER */}
        <div className="absolute bottom-0 left-0 w-full px-6 py-5 border-t border-zinc-800 bg-black">
          <p className="text-zinc-400 text-sm">
            Castelo Estética Automotiva
          </p>

          <p className="text-red-500 text-xs mt-1 tracking-widest uppercase">
            Manaus • Premium Detail
          </p>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="container relative mx-auto px-4 pt-16 pb-24 lg:pt-2 lg:pb-32 grid lg:grid-cols-2 gap-12 items-center">
        <div className="fade-up">

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05]">
            Seu carro <span className="text-gradient-gold">limpo, brilhando</span> e pronto no mesmo dia.
          </h1>
          <p className="mt-6 text-base text-muted-foreground max-w-xl">
            Somos especialistas em lavagem detalhada, higienização interna, polimento e
            estética automotiva premium em Manaus. Agende seu serviço em até 30 segundos.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-whatsapp text-whatsapp-foreground px-6 py-4 font-semibold shadow-card glow-pulse hover:scale-105 transition-transform">
              <MessageCircle className="w-5 h-5" /> Agendar no WhatsApp
            </a>
            <a href={SITE.mapsLink} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-6 py-4 font-semibold hover:border-primary hover:text-primary transition-colors">
              <MapPin className="w-5 h-5" /> Ver localização
            </a>
          </div>
          <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-1 text-primary">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
              <span className="ml-2 text-foreground font-semibold">4.5/5</span>
            </div>
            <span>+5.000 carros atendidos</span>
          </div>
          <p className="mt-6 text-sm text-muted-foreground flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" /> {SITE.address}
          </p>
        </div>

        <div className="relative fade-up">
          <div className="relative shine-overlay rounded-3xl overflow-hidden border border-border shadow-card">
            <img src={heroCar} alt="Carro esportivo preto recém-lavado e brilhando" width={1920} height={1280} className="w-full h-full object-cover aspect-[4/3]" />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-4 shadow-card hidden sm:flex items-center gap-3">
            <div className="w-12 h-12 grid place-items-center rounded-xl bg-gradient-gold text-primary-foreground">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-bold">Pronto hoje</p>
              <p className="text-xs text-muted-foreground">Agende e retire no mesmo dia</p>
            </div>
          </div>
          <div className="absolute -top-6 -right-6 bg-card border border-border rounded-xl p-4 shadow-card hidden sm:flex items-center gap-3">
            <div className="w-12 h-12 grid place-items-center rounded-xl bg-primary/15 text-primary">
              <Droplets className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-bold">Lavagem ecológica</p>
              <p className="text-xs text-muted-foreground">Até 70% menos água</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="servicos" className="py-20 lg:py-2">
      <div className="container mx-auto px-4">
        <SectionHeader eyebrow="Serviços" title={<>Estética <span className="text-gradient-gold">de alto padrão</span></>}
          subtitle="Do banho rápido ao detalhamento completo: cuidamos do seu carro com produtos premium." />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <article key={s.name} className="group relative rounded-xl border border-border bg-card overflow-hidden shadow-card hover:border-primary/60 transition-colors">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={s.img} alt={s.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-base">{s.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
                <div className="mt-4 flex items-center justify-between text-sm">
                  <div>
                    <p className="text-xs text-muted-foreground">A partir de</p>
                    <p className="font-display font-extrabold text-xl text-gradient-gold">{s.price}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">Tempo médio</p>
                    <p className="font-semibold flex items-center gap-1 justify-end"><Clock className="w-3 h-3" /> {s.time}</p>
                  </div>
                </div>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                  className="mt-4 w-full inline-flex justify-center items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2.5 font-semibold hover:bg-gradient-gold transition-all">
                  Agendar
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function BeforeAfterSection() {
  return (
    <section id="galeria" className="py-20 lg:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        <SectionHeader eyebrow="Antes & Depois" title={<>Resultados que <span className="text-gradient-gold">falam por si</span></>}
          subtitle="Arraste para ver a transformação. Cada carro recebe atenção aos mínimos detalhes." />
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <BeforeAfter image={beforeAfter1} alt="Higienização interna" />
          <BeforeAfter image={beforeAfter2} alt="Polimento de pintura" />
        </div>
      </div>
    </section>
  );
}

function SocialProof() {
  return (
    <section id="avaliacoes" className="py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <SectionHeader eyebrow="Prova Social" title={<>Manauaras <span className="text-gradient-gold">amam</span> nosso trabalho</>}
          subtitle="+5.000 clientes atendidos · Avaliação média 4.9 no Google" />
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-xl border border-border bg-card p-6 shadow-card">
              <div className="flex items-center gap-1 text-primary mb-3">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-foreground/90 leading-relaxed">"{t.text}"</p>
              <div className="mt-5 flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-gradient-gold grid place-items-center text-primary-foreground font-bold">
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.car}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { n: "+5.000", l: "Carros atendidos" },
            { n: "4.5/5", l: "Avaliação média" },
            { n: "+5 anos", l: "De experiência" },
            { n: "98%", l: "Clientes recorrentes" },
          ].map((s) => (
            <div key={s.l} className="text-center rounded-xl border border-border bg-card/50 p-6">
              <p className="font-display font-extrabold text-3xl text-gradient-gold">{s.n}</p>
              <p className="text-sm text-muted-foreground mt-1">{s.l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Differentials() {
  return (
    <section className="py-20 lg:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        <SectionHeader eyebrow="Por que escolher" title={<>Diferenciais <span className="text-gradient-gold">do Castelo</span></>}
          subtitle="Tudo que um lava jato premium em Manaus precisa entregar — e mais." />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentials.map((d) => (
            <div key={d.title} className="group rounded-xl border border-border bg-card p-6 hover:border-primary/60 hover:-translate-y-1 transition-all shadow-card">
              <div className="w-12 h-12 grid place-items-center rounded-xl bg-primary/15 text-primary group-hover:bg-gradient-gold group-hover:text-primary-foreground transition-colors">
                <d.icon className="w-6 h-6" />
              </div>
              <h3 className="mt-4 font-bold">{d.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTABanner() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-hero p-10 lg:p-16 text-center shine-overlay">
          <div className="absolute inset-0 grid-pattern opacity-30" />
          <div className="relative">
            <h2 className="text-3xl lg:text-5xl font-extrabold">
              Deixe seu carro <span className="text-gradient-gold">novo de novo</span>.
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Agende agora pelo WhatsApp e garanta seu horário ainda hoje. Atendimento rápido, brilho de concessionária.
            </p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-whatsapp text-whatsapp-foreground px-8 py-4 font-bold shadow-card glow-pulse hover:scale-105 transition-transform">
              <MessageCircle className="w-5 h-5" /> Agendar agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contato" className="py-20 lg:py-2">
      <div className="container mx-auto px-4">
        <SectionHeader eyebrow="Visite-nos" title={<>Onde nos <span className="text-gradient-gold">encontrar</span></>}
          subtitle="Estamos no coração de Manaus, prontos para receber seu carro." />
        <div className="mt-12 grid lg:grid-cols-2 gap-8">
          <div className="rounded-xl overflow-hidden border border-border shadow-card aspect-[4/3] lg:aspect-auto">
            <iframe
              title="Mapa Castelo"
              src={SITE.mapsEmbed}
              className="w-full h-full min-h-[320px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="space-y-4">
            <ContactItem icon={MapPin} title="Endereço" text={SITE.address} />
            <ContactItem icon={Phone} title="Telefone" text={SITE.phone} href={`tel:+${SITE.whatsappNumber}`} />
            <ContactItem icon={MessageCircle} title="WhatsApp" text={SITE.phone} href={WHATSAPP_URL} />
            <ContactItem icon={Instagram} title="Instagram" text="@casteloesteticaautomotiva" href={SITE.instagram} />
            <ContactItem icon={Clock} title="Horário" text={SITE.hours} />
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
              className="mt-4 w-full inline-flex justify-center items-center gap-2 rounded-full bg-whatsapp text-whatsapp-foreground px-6 py-4 font-semibold shadow-card hover:scale-[1.02] transition-transform">
              <MessageCircle className="w-5 h-5" /> Falar com nossa equipe
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({ icon: Icon, title, text, href }: { icon: any; title: string; text: string; href?: string }) {
  const Wrap: any = href ? "a" : "div";
  return (
    <Wrap href={href} target={href?.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
      className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 hover:border-primary/60 transition-colors">
      <div className="w-12 h-12 grid place-items-center rounded-xl bg-primary/15 text-primary">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <p className="text-xs uppercase tracking-wider text-muted-foreground">{title}</p>
        <p className="font-semibold">{text}</p>
      </div>
    </Wrap>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-10 bg-background">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-muted-foreground">
        <a href="#top" className="flex items-center gap-2">
          <img
            <img
  src={logo}
            alt="Logo Castelo Estética Automotiva"
            className="h-12 w-auto object-contain"
          />
        </a>
        <div className="flex items-center gap-6">
          <a href="#servicos" className="hover:text-primary">Serviços</a>
          <a href="#galeria" className="hover:text-primary">Galeria</a>
          <a href="#contato" className="hover:text-primary">Contato</a>
          <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-primary"><Instagram className="w-4 h-4" /></a>
        </div>
        <p>© {new Date().getFullYear()} Castelo Estética Automotiva · Manaus-AM. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

function SectionHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: React.ReactNode; subtitle: string }) {
  return (
    <div className="max-w-2xl mx-auto text-center">
      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
        {eyebrow}
      </span>
      <h2 className="mt-4 text-3xl lg:text-5xl font-extrabold">{title}</h2>
      <p className="mt-4 text-muted-foreground">{subtitle}</p>
    </div>
  );
}
