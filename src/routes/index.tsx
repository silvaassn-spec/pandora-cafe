import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Coffee,
  Flame,
  Croissant,
  Star,
  MapPin,
  Phone,
  Instagram,
  Clock,
  ArrowRight,
  Menu as MenuIcon,
  X,
} from "lucide-react";

import heroCoffee from "@/assets/hero-coffee.jpg";
import essenceBeans from "@/assets/essence-beans.jpg";
import menuCappuccino from "@/assets/capuchino.jpg";
import menuAmericano from "@/assets/expreso.jpg";
import menuMuffin from "@/assets/muffin.jpg";
import menuMokaccino from "@/assets/mokaccino.jpg";
import galleryLaptops from "@/assets/laptops.jpg";
import galleryPour from "@/assets/gallery-pour.jpg";
import galleryInterior from "@/assets/interior.jpg";
import galleryPastries from "@/assets/gallery-pastries.jpg";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  component: Landing,
});

const NAV = [
  { label: "Esencia", href: "#esencia" },
  { label: "Menú", href: "#menu" },
  { label: "Ambiente", href: "#ambiente" },
  { label: "Ubicación", href: "#ubicacion" },
];

function Landing() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  useReveal();

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/85 backdrop-blur-md border-b border-border/60 py-3"
            : "bg-transparent py-6"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <a
            href="#top"
            className={`font-display text-xl tracking-tight transition-colors ${
              scrolled ? "text-foreground" : "text-linen"
            }`}
            style={!scrolled ? { color: "var(--linen)" } : undefined}
          >
            Pandora<span className="text-accent">.</span>
          </a>
          <nav className="hidden items-center gap-9 md:flex">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className={`text-sm tracking-wide transition-colors hover:text-accent ${
                  scrolled ? "text-foreground/80" : "text-white/90"
                }`}
              >
                {n.label}
              </a>
            ))}
            <a
              href="#ubicacion"
              className="rounded-full bg-accent px-5 py-2 text-sm text-accent-foreground transition-transform hover:scale-[1.03]"
            >
              Visitanos
            </a>
          </nav>
          <button
            className="md:hidden"
            onClick={() => setOpenMenu((v) => !v)}
            aria-label="Abrir menú"
          >
            {openMenu ? (
              <X className={scrolled ? "text-foreground" : "text-white"} />
            ) : (
              <MenuIcon className={scrolled ? "text-foreground" : "text-white"} />
            )}
          </button>
        </div>
        {openMenu && (
          <div className="mt-3 border-t border-border/40 bg-background/95 backdrop-blur md:hidden">
            <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
              {NAV.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpenMenu(false)}
                  className="py-2 text-sm text-foreground/80"
                >
                  {n.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="relative min-h-[100svh] w-full overflow-hidden">
        <img
          src={heroCoffee}
          alt="Café de especialidad recién preparado"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-6 pb-20 pt-40 md:pb-28">
          <div className="max-w-3xl text-white" data-reveal>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs tracking-widest uppercase backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Rivera · Uruguay
            </div>
            <h1 className="font-display text-5xl leading-[1.02] text-white sm:text-6xl md:text-7xl lg:text-[92px]">
              Pandora Café
            </h1>
            <p className="mt-6 max-w-xl font-display text-xl italic text-white/85 md:text-2xl">
              Especialidad, sabor y experiencia en cada taza.
            </p>
            <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-white/70">
              Micro tostadores de café en Rivera, Uruguay. Café de especialidad
              acompañado de una propuesta gastronómica única.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#menu"
                className="group inline-flex items-center gap-2 rounded-full bg-cream px-7 py-3.5 text-sm font-medium text-coffee transition-transform hover:scale-[1.03]"
                style={{ backgroundColor: "var(--cream)", color: "var(--coffee)" }}
              >
                Ver menú
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#ubicacion"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-sm text-white transition-colors hover:bg-white/10"
              >
                Cómo llegar
              </a>
            </div>

            <div className="mt-12 flex items-center gap-3 text-white/85">
              <div className="flex">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-sm">
                <span className="font-medium">4.8/5</span>
                <span className="text-white/60"> · basado en +81 opiniones</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ESENCIA */}
      <section id="esencia" className="relative py-28 md:py-36">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
            <div data-reveal>
              <p className="mb-5 text-xs uppercase tracking-[0.28em] text-accent">
                Nuestra esencia
              </p>
              <h2 className="font-display text-4xl leading-tight md:text-5xl lg:text-6xl">
                Mucho más
                <br />
                que café.
              </h2>
              <p className="mt-8 max-w-md text-[15px] leading-relaxed text-muted-foreground">
                En Pandora Café seleccionamos cuidadosamente cada grano para
                ofrecer café de especialidad de alta calidad, acompañado por una
                propuesta gastronómica pensada para cada momento del día.
              </p>
            </div>
            <div className="relative overflow-hidden rounded-3xl" data-reveal>
              <img
                src={essenceBeans}
                alt="Granos de café recién tostados"
                width={1280}
                height={960}
                loading="lazy"
                className="h-[420px] w-full object-cover transition-transform duration-[1200ms] hover:scale-105"
              />
            </div>
          </div>

          <div className="mt-24 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Coffee,
                title: "Café de especialidad",
                desc: "Granos seleccionados y perfiles de tueste desarrollados para resaltar cada origen.",
              },
              {
                icon: Flame,
                title: "Micro tostadores propios",
                desc: "Tostamos en pequeñas tandas para asegurar frescura y consistencia en cada taza.",
              },
              {
                icon: Croissant,
                title: "Gastronomía artesanal",
                desc: "Panadería y pastelería hechas cada día, pensadas para acompañar tu café.",
              },
            ].map((c, i) => (
              <div
                key={c.title}
                data-reveal
                style={{ transitionDelay: `${i * 120}ms` }}
                className="group rounded-3xl border border-border/70 bg-card p-8 transition-all duration-500 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_20px_60px_-30px_rgba(74,44,42,0.35)]"
              >
                <div
                  className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl"
                  style={{ backgroundColor: "var(--cream)" }}
                >
                  <c.icon className="h-5 w-5 text-coffee" style={{ color: "var(--coffee)" }} />
                </div>
                <h3 className="font-display text-2xl">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MENU */}
      <section
        id="menu"
        className="relative py-28 md:py-36"
        style={{ backgroundColor: "var(--cream)" }}
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end" data-reveal>
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.28em] text-accent">
                Menú destacado
              </p>
              <h2 className="font-display text-4xl leading-tight md:text-5xl lg:text-6xl">
                Sabores para cada
                <br className="hidden md:block" /> momento del día.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-coffee-soft" style={{ color: "var(--coffee-soft)" }}>
              Una selección pensada para acompañar tu mañana, tu pausa o tu
              tarde de trabajo.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { img: menuCappuccino, name: "Capuchino & Escones", note: "+ Focaccia artesanal" },
              { img: menuAmericano, name: "Expreso Americano", note: "+ Roll de canela" },
              { img: menuMuffin, name: "Muffin de Café", note: "Horneado del día" },
              { img: menuMokaccino, name: "Mokaccino", note: "Cacao & espresso" },
            ].map((p, i) => (
              <article
                key={p.name}
                data-reveal
                style={{ transitionDelay: `${i * 100}ms` }}
                className="group overflow-hidden rounded-3xl bg-linen"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.name}
                    width={1024}
                    height={1280}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl leading-tight">{p.name}</h3>
                  <p className="mt-1.5 text-xs uppercase tracking-widest text-muted-foreground">
                    {p.note}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* AMBIENTE */}
      <section id="ambiente" className="py-28 md:py-36">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center" data-reveal>
            <p className="mb-4 text-xs uppercase tracking-[0.28em] text-accent">
              Ambiente
            </p>
            <h2 className="font-display text-4xl leading-tight md:text-5xl lg:text-6xl">
              Un espacio diseñado para
              <br className="hidden md:block" /> disfrutar, trabajar o compartir.
            </h2>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {[
              { img: galleryLaptops, alt: "Clientes trabajando con laptops", tall: true },
              { img: galleryPour, alt: "Barista sirviendo café" },
              { img: galleryInterior, alt: "Interior cálido y moderno" },
              { img: galleryPastries, alt: "Pastelería artesanal", tall: true },
            ].map((g, i) => (
              <div
                key={i}
                data-reveal
                style={{ transitionDelay: `${i * 90}ms` }}
                className={`group overflow-hidden rounded-2xl ${
                  g.tall ? "row-span-2 aspect-[3/5]" : "aspect-square md:aspect-[3/4]"
                }`}
              >
                <img
                  src={g.img}
                  alt={g.alt}
                  width={1280}
                  height={1600}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section
        className="py-24"
        style={{ backgroundColor: "var(--coffee)", color: "var(--linen)" }}
      >
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[1fr_auto] md:items-center">
          <div data-reveal>
            <p className="mb-4 text-xs uppercase tracking-[0.28em] text-accent">
              Comunidad
            </p>
            <h2 className="font-display text-4xl leading-tight text-linen md:text-5xl" style={{ color: "var(--linen)" }}>
              @pandoracafe.uy
            </h2>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/70">
              Detrás del mostrador, entre tuestes y desayunos. Seguinos y sé
              parte del día a día de Pandora.
            </p>
            <div className="mt-8 flex flex-wrap gap-8">
              {[
                { n: "4.586", l: "seguidores" },
                { n: "136", l: "publicaciones" },
                { n: "100%", l: "especialidad" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-3xl text-linen" style={{ color: "var(--linen)" }}>
                    {s.n}
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-widest text-white/50">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <a
            href="https://instagram.com/pandoracafe.uy"
            target="_blank"
            rel="noreferrer"
            data-reveal
            className="inline-flex items-center gap-3 self-start rounded-full bg-cream px-7 py-3.5 text-sm font-medium text-coffee transition-transform hover:scale-[1.03] md:self-auto"
            style={{ backgroundColor: "var(--cream)", color: "var(--coffee)" }}
          >
            <Instagram className="h-4 w-4" />
            Ver Instagram
          </a>
        </div>
      </section>

      {/* UBICACION */}
      <section id="ubicacion" className="py-28 md:py-36">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr]">
            <div data-reveal>
              <p className="mb-4 text-xs uppercase tracking-[0.28em] text-accent">
                Visitanos
              </p>
              <h2 className="font-display text-4xl leading-tight md:text-5xl lg:text-6xl">
                Agraciada 850,
                <br /> Rivera.
              </h2>
              <p className="mt-6 max-w-md text-[15px] leading-relaxed text-muted-foreground">
                Esquina Carlos Reyles, en el corazón de Rivera, Uruguay.
              </p>

              <div className="mt-10 space-y-5">
                <InfoRow icon={MapPin} label="Dirección" value="Agraciada 850, esquina Carlos Reyles · Rivera" />
                <InfoRow icon={Phone} label="Teléfono" value="+598 098 484 541" />
                <InfoRow icon={Clock} label="Horarios" value="Lun a Sáb · 09:00–13:00 · 15:00–21:00" />
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="https://maps.google.com/?q=Agraciada+850+Rivera+Uruguay"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground transition-transform hover:scale-[1.03]"
                >
                  <MapPin className="h-4 w-4" /> Abrir en Google Maps
                </a>
                <a
                  href="tel:+598098484541"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm text-foreground transition-colors hover:bg-secondary"
                >
                  <Phone className="h-4 w-4" /> Llamar ahora
                </a>
              </div>

              <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1.5 text-xs text-accent">
                <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
                Abierto hoy
              </div>
            </div>

            <div
              data-reveal
              className="overflow-hidden rounded-3xl border border-border shadow-[0_30px_80px_-40px_rgba(74,44,42,0.35)]"
            >
              <iframe
                title="Ubicación Pandora Café"
                src="https://www.google.com/maps?q=Agraciada+850+Rivera+Uruguay&output=embed"
                width="100%"
                height="520"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block h-[520px] w-full grayscale-[20%]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section
        className="py-28 md:py-36"
        style={{ backgroundColor: "var(--cream)" }}
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center" data-reveal>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-linen px-4 py-1.5 text-xs uppercase tracking-widest text-coffee">
              <div className="flex">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-3 w-3 fill-accent text-accent" />
                ))}
              </div>
              4.8/5 · 81 opiniones
            </div>
            <h2 className="font-display text-4xl leading-tight md:text-5xl lg:text-6xl">
              Lo que dicen quienes
              <br className="hidden md:block" /> ya nos visitaron.
            </h2>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              {
                q: "El mejor café de especialidad de Rivera. Ambiente cálido y atención impecable.",
                a: "Camila S.",
              },
              {
                q: "Cada detalle está pensado. El capuchino con escones es un ritual que repito cada semana.",
                a: "Martín P.",
              },
              {
                q: "Vengo a trabajar y termino quedándome horas. La focaccia y el mokaccino son imperdibles.",
                a: "Lucía R.",
              },
            ].map((t, i) => (
              <figure
                key={t.a}
                data-reveal
                style={{ transitionDelay: `${i * 120}ms` }}
                className="rounded-3xl bg-linen p-8"
              >
                <div className="mb-5 flex">
                  {[0, 1, 2, 3, 4].map((k) => (
                    <Star key={k} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <blockquote className="font-display text-xl leading-snug text-coffee" style={{ color: "var(--coffee)" }}>
                  "{t.q}"
                </blockquote>
                <figcaption className="mt-6 text-xs uppercase tracking-widest text-muted-foreground">
                  — {t.a}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="py-16"
        style={{ backgroundColor: "var(--coffee)", color: "var(--linen)" }}
      >
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="font-display text-3xl text-linen" style={{ color: "var(--linen)" }}>
              Pandora<span className="text-accent">.</span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-white/60">
              Micro tostadores de café en Rivera, Uruguay. Café de especialidad
              y gastronomía artesanal.
            </p>
          </div>
          <div>
            <div className="mb-4 text-xs uppercase tracking-widest text-white/50">
              Contacto
            </div>
            <ul className="space-y-2 text-sm text-white/80">
              <li>Agraciada 850, Rivera</li>
              <li>+598 098 484 541</li>
              <li>
                <a
                  href="https://instagram.com/pandoracafe.uy"
                  className="hover:text-accent"
                >
                  @pandoracafe.uy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="mb-4 text-xs uppercase tracking-widest text-white/50">
              Horarios
            </div>
            <ul className="space-y-2 text-sm text-white/80">
              <li>Lunes a Sábado</li>
              <li>09:00 – 13:00</li>
              <li>15:00 – 21:00</li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-14 max-w-6xl border-t border-white/10 px-6 pt-6 text-xs text-white/40">
          © {new Date().getFullYear()} Pandora Café · Rivera, Uruguay
        </div>
      </footer>
    </div>
  );
}

function InfoRow({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof MapPin;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div
        className="grid h-10 w-10 shrink-0 place-items-center rounded-xl"
        style={{ backgroundColor: "var(--cream)" }}
      >
        <Icon className="h-4 w-4" style={{ color: "var(--coffee)" }} />
      </div>
      <div className="min-w-0">
        <div className="text-xs uppercase tracking-widest text-muted-foreground">
          {label}
        </div>
        <div className="mt-1 text-[15px] text-foreground">{value}</div>
      </div>
    </div>
  );
}
