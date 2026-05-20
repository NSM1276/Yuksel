/* global React, ReactDOM, TweaksPanel, useTweaks, TweakSection, TweakRadio, TweakColor, TweakToggle */
const { useState, useEffect, useRef } = React;

// ─── Image map ────────────────────────────────────────────────────────────────
const IMG = {
  brideTiara: 'images/bride-tiara.png',
  brideTiara2: 'images/bride-tiara-2.png',
  threePony: 'images/three-ponytails.png',
  redLips: 'images/red-lips-curls.png',
  bridalUpdo: 'images/bridal-updo.png',
  team: 'images/team.png',
  blondeCurls: 'images/blonde-curls.png',
};

// ─── Tiny editorial helpers ───────────────────────────────────────────────────
const Eyebrow = ({ children, style }) => (
  <span className="eyebrow" style={style}>{children}</span>
);

const Rule = ({ style }) => <span className="rule" aria-hidden="true" style={style} />;

// ─── Top navigation ───────────────────────────────────────────────────────────
function Nav({ onBook }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    ['Leistungen', '#services'],
    ['Galerie', '#gallery'],
    ['Hochzeit', '#wedding'],
    ['Salon', '#about'],
    ['Kontakt', '#contact'],
  ];

  return (
    <header className={`nav ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#top" className="brand">
          <span className="brand-mark">M·F</span>
          <span className="brand-name">
            <span className="brand-line-1">Mode Friseur</span>
            <span className="brand-line-2">Yüksel · Wien</span>
          </span>
        </a>
        <nav className="nav-links" aria-label="Hauptnavigation">
          {links.map(([label, href]) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </nav>
        <div className="nav-cta">
          <a href="tel:+4318179130" className="nav-phone">
            <span className="dot" aria-hidden="true" />
            01 8179130
          </a>
          <button className="btn btn-dark btn-sm" onClick={onBook}>Termin buchen</button>
          <button
            className="nav-burger"
            aria-label="Menü"
            aria-expanded={open}
            onClick={() => setOpen(o => !o)}
          >
            <span /><span />
          </button>
        </div>
      </div>
      {open && (
        <div className="nav-mobile" onClick={() => setOpen(false)}>
          {links.map(([label, href]) => (
            <a key={href} href={href}>{label}</a>
          ))}
          <a href="tel:+4318179130">01 8179130</a>
          <button className="btn btn-dark" onClick={onBook}>Termin buchen</button>
        </div>
      )}
    </header>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero({ onBook }) {
  return (
    <section className="hero" id="top">
      <div className="hero-grid">
        <div className="hero-copy">
          <Eyebrow>
            <span className="eyebrow-dot" /> Salon · 1120 Wien Meidling
          </Eyebrow>
          <h1 className="display">
            Ihr Friseur in
            <span className="display-italic"> Wien Meidling</span>.
          </h1>
          <p className="hero-sub">
            Für Alltag &amp; besondere Anlässe — ehrliches Handwerk,
            persönliche Beratung, Ergebnisse, die zu Ihnen passen.
          </p>

          <div className="hero-ctas">
            <button className="btn btn-dark" onClick={onBook}>
              Termin buchen
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square" />
              </svg>
            </button>
            <a className="btn btn-ghost" href="tel:+4318179130">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="1.5" />
              </svg>
              Anrufen · 01 8179130
            </a>
          </div>

          <ul className="hero-meta">
            <li><strong>Mo–Fr</strong> 09:00 – 18:30</li>
            <li><strong>Sa</strong> 09:00 – 16:00</li>
            <li><strong>So</strong> Geschlossen</li>
          </ul>
        </div>

        <div className="hero-media">
          <figure className="hero-figure-main">
            <img src={IMG.brideTiara} alt="Braut mit Tiara, Make-up und Hochsteckfrisur" />
            <figcaption>
              <span className="cap-num">No. 01</span>
              <span className="cap-text">Braut · Sommer 2026</span>
            </figcaption>
          </figure>
          <figure className="hero-figure-side">
            <img src={IMG.redLips} alt="Hollywood-Wellen Styling" />
          </figure>
          <div className="hero-stat">
            <div className="hero-stat-num">25<span>+</span></div>
            <div className="hero-stat-label">Jahre<br/>im Bezirk</div>
          </div>
        </div>
      </div>

      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="ticker-row">
              <em>Damen &amp; Styling</em>
              <Rule />
              <em>Herren</em>
              <Rule />
              <em>Brows · Lashes · Nails</em>
              <Rule />
              <em>Hochzeit &amp; Events</em>
              <Rule />
              <em>Färben &amp; Strähnen</em>
              <Rule />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Services ─────────────────────────────────────────────────────────────────
const SERVICES = [
  {
    no: '01',
    title: 'Damen & Styling',
    de: 'Schnitt, Föhnstyling, Färben, Strähnen, Pflege.',
    points: ['Damenschnitt ab €38', 'Waschen + Föhnen ab €25', 'Glanzbehandlung ab €30'],
    img: IMG.blondeCurls,
  },
  {
    no: '02',
    title: 'Herren',
    de: 'Klassischer Herrenschnitt, Bart, Trockenhaarschnitt.',
    points: ['Herrenschnitt ab €22', 'Bart trimmen ab €12', 'Kinder bis 10 ab €15'],
    img: IMG.team,
    portrait: true,
  },
  {
    no: '03',
    title: 'Beauty',
    de: 'Brows, Lashes, Nails — gepflegt, nicht überzeichnet.',
    points: ['Augenbrauen zupfen €15', 'Wimpernlifting €55', 'Maniküre ab €25'],
    img: IMG.redLips,
  },
  {
    no: '04',
    title: 'Hochzeit & Events',
    de: 'Brautstyling, Probetermin, Make-up und Frisur am großen Tag.',
    points: ['Probestyling €70', 'Brautstyling ab €180', 'Mit Hausbesuch nach Absprache'],
    img: IMG.bridalUpdo,
    accent: true,
  },
];

function Services({ onBook }) {
  return (
    <section className="section services" id="services">
      <header className="section-head">
        <Eyebrow>§ 02 · Leistungen</Eyebrow>
        <h2 className="section-title">
          Vier Bereiche.<br/>
          <span className="display-italic">Ein vertrauter Salon.</span>
        </h2>
        <p className="section-lede">
          Wir nehmen uns Zeit. Erst hören wir zu, dann beraten wir, dann arbeiten wir.
          Jeder Termin beginnt mit einem ehrlichen Gespräch über Pflegezustand,
          Alltag und Wunschergebnis.
        </p>
      </header>

      <div className="service-grid">
        {SERVICES.map((s) => (
          <article key={s.no} className={`service-card ${s.accent ? 'is-accent' : ''}`}>
            <div className="service-media">
              <img src={s.img} alt={s.title} />
            </div>
            <div className="service-body">
              <div className="service-num">{s.no}</div>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-de">{s.de}</p>
              <ul className="service-points">
                {s.points.map((p) => (
                  <li key={p}>
                    <span className="service-point-dot" />
                    {p}
                  </li>
                ))}
              </ul>
              <button className="link-arrow" onClick={onBook}>
                Termin anfragen
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                  <path d="M1 5h12M9 1l4 4-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="square" />
                </svg>
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

// ─── Gallery ──────────────────────────────────────────────────────────────────
const GALLERY = [
  { src: IMG.brideTiara, label: 'Braut · Tiara', span: 'tall' },
  { src: IMG.threePony, label: 'Event · Pferdeschwänze', span: 'wide' },
  { src: IMG.blondeCurls, label: 'Styling · Wellen', span: 'tall' },
  { src: IMG.bridalUpdo, label: 'Hochsteckfrisur', span: 'tall' },
  { src: IMG.redLips, label: 'Hollywood-Wellen', span: 'normal' },
  { src: IMG.brideTiara2, label: 'Braut · Klassik', span: 'tall' },
];

function Gallery() {
  const [active, setActive] = useState(null);
  return (
    <section className="section gallery" id="gallery">
      <header className="section-head section-head-row">
        <div>
          <Eyebrow>§ 03 · Galerie</Eyebrow>
          <h2 className="section-title">
            Echte Arbeiten<br/>
            <span className="display-italic">aus unserem Salon.</span>
          </h2>
        </div>
        <p className="section-lede section-lede-side">
          Keine Stockbilder. Jedes Foto entstand bei uns in der Ratschkygasse —
          mit echten Kundinnen, an echten Tagen.
        </p>
      </header>

      <div className="gallery-grid">
        {GALLERY.map((g, i) => (
          <button
            key={i}
            className={`gallery-tile gallery-${g.span}`}
            onClick={() => setActive(i)}
          >
            <img src={g.src} alt={g.label} loading="lazy" />
            <span className="gallery-cap">
              <span className="gallery-cap-num">{String(i + 1).padStart(2, '0')}</span>
              <span className="gallery-cap-label">{g.label}</span>
            </span>
          </button>
        ))}
      </div>

      {active !== null && (
        <div className="lightbox" onClick={() => setActive(null)}>
          <button className="lightbox-close" aria-label="Schließen">×</button>
          <img src={GALLERY[active].src} alt={GALLERY[active].label} />
          <div className="lightbox-cap">{GALLERY[active].label}</div>
        </div>
      )}
    </section>
  );
}

// ─── Wedding ──────────────────────────────────────────────────────────────────
function Wedding({ onBook }) {
  return (
    <section className="section wedding" id="wedding">
      <div className="wedding-grid">
        <div className="wedding-art">
          <figure className="wedding-fig wedding-fig-1">
            <img src={IMG.bridalUpdo} alt="Brautstyling Hochsteckfrisur" />
          </figure>
          <figure className="wedding-fig wedding-fig-2">
            <img src={IMG.brideTiara2} alt="Braut Studioporträt" />
          </figure>
          <div className="wedding-quote">
            <span className="quote-mark">“</span>
            Mein Tag begann bei Yüksel — und das war
            das Schönste daran.
            <span className="quote-by">— Sarah K., Mai 2025</span>
          </div>
        </div>

        <div className="wedding-copy">
          <Eyebrow>§ 04 · Hochzeit &amp; Events</Eyebrow>
          <h2 className="section-title">
            Der wichtigste Tag<br/>
            <span className="display-italic">verdient Ruhe.</span>
          </h2>
          <p className="wedding-lede">
            Probetermin, Zeitplan, Frisur und Make-up — wir nehmen Ihnen die
            Anspannung, damit Sie den Morgen genießen können. Auf Wunsch kommen
            wir zu Ihnen.
          </p>

          <ol className="wedding-steps">
            <li>
              <span className="step-num">1</span>
              <div>
                <h4>Beratung</h4>
                <p>20 Minuten, kostenlos. Wir sprechen über Kleid, Stil und Tagesablauf.</p>
              </div>
            </li>
            <li>
              <span className="step-num">2</span>
              <div>
                <h4>Probetermin</h4>
                <p>Komplettes Styling im Salon — Sie nehmen es mit nach Hause &amp; entscheiden in Ruhe.</p>
              </div>
            </li>
            <li>
              <span className="step-num">3</span>
              <div>
                <h4>Der Tag selbst</h4>
                <p>Im Salon oder bei Ihnen zu Hause. Wir kommen pünktlich, mit allem, was wir brauchen.</p>
              </div>
            </li>
          </ol>

          <div className="wedding-ctas">
            <button className="btn btn-dark" onClick={onBook}>Probetermin anfragen</button>
            <a className="btn btn-ghost" href="tel:+4318179130">Lieber kurz anrufen</a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── About ────────────────────────────────────────────────────────────────────
function About() {
  return (
    <section className="section about" id="about">
      <div className="about-grid">
        <figure className="about-fig">
          <img src={IMG.team} alt="Das Team von Mode Friseur Yüksel" />
          <figcaption>Das Team · Ratschkygasse, 1120 Wien</figcaption>
        </figure>
        <div className="about-copy">
          <Eyebrow>§ 05 · Salon</Eyebrow>
          <h2 className="section-title">
            Ein Friseur,<br/>
            <span className="display-italic">der bleibt.</span>
          </h2>
          <p className="about-lede">
            Wir sind ein Familienbetrieb in Meidling — mit Stammkundinnen, die
            seit über zwanzig Jahren zu uns kommen, und neuen Gesichtern, die
            am gleichen Tag gerne wiederkommen.
          </p>
          <p className="about-body">
            Was uns wichtig ist: ehrliche Beratung statt Verkaufsdruck, Pflege,
            die zu Ihrem Alltag passt, und faire Preise — Meidling-fair, nicht
            Innenstadt-fair.
          </p>

          <div className="about-pillars">
            <div>
              <div className="pillar-num">12k+</div>
              <div className="pillar-label">Termine seit Eröffnung</div>
            </div>
            <div>
              <div className="pillar-num">5</div>
              <div className="pillar-label">Stylist:innen im Team</div>
            </div>
            <div>
              <div className="pillar-num">4,9</div>
              <div className="pillar-label">★ Google · 280 Bewertungen</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Contact ──────────────────────────────────────────────────────────────────
function Contact({ onBook }) {
  return (
    <section className="section contact" id="contact">
      <div className="contact-grid">
        <div className="contact-info">
          <Eyebrow>§ 06 · Kontakt</Eyebrow>
          <h2 className="section-title">
            Vorbeikommen oder<br/>
            <span className="display-italic">kurz anrufen.</span>
          </h2>

          <dl className="contact-dl">
            <div>
              <dt>Adresse</dt>
              <dd>Ratschkygasse 6<br/>1120 Wien · Meidling</dd>
            </div>
            <div>
              <dt>Telefon</dt>
              <dd><a href="tel:+4318179130">01 8179130</a></dd>
            </div>
            <div>
              <dt>Öffnungszeiten</dt>
              <dd>
                <span><b>Mo–Fr</b> 09:00 – 18:30</span><br/>
                <span><b>Sa</b> 09:00 – 16:00</span><br/>
                <span><b>So</b> Geschlossen</span>
              </dd>
            </div>
            <div>
              <dt>Anfahrt</dt>
              <dd>U6 Niederhofstraße · 4 Min. zu Fuß<br/>Linie 8 &amp; 62 in der Nähe</dd>
            </div>
          </dl>

          <div className="contact-ctas">
            <button className="btn btn-dark" onClick={onBook}>Termin buchen</button>
            <a className="btn btn-ghost" href="tel:+4318179130">Anrufen</a>
          </div>
        </div>

        <div className="contact-map" role="img" aria-label="Kartenausschnitt Ratschkygasse 6, 1120 Wien">
          <MapStencil />
          <div className="map-pin">
            <span className="map-pin-dot" />
            <span className="map-pin-label">
              <strong>Mode Friseur Yüksel</strong>
              Ratschkygasse 6, 1120 Wien
            </span>
          </div>
          <div className="map-attribution">Karte · 1120 Wien · Meidling</div>
        </div>
      </div>
    </section>
  );
}

function MapStencil() {
  // Stylized hand-drawn neighbourhood map (simple, no slop)
  return (
    <svg viewBox="0 0 600 480" className="map-svg" aria-hidden="true">
      <rect width="600" height="480" fill="var(--paper)" />
      {/* large blocks */}
      <g stroke="var(--ink-30)" strokeWidth="1" fill="var(--paper-2)">
        <rect x="20" y="20" width="160" height="120" />
        <rect x="200" y="20" width="180" height="90" />
        <rect x="400" y="20" width="180" height="120" />
        <rect x="20" y="160" width="140" height="140" />
        <rect x="180" y="130" width="200" height="170" />
        <rect x="400" y="160" width="180" height="140" />
        <rect x="20" y="320" width="200" height="140" />
        <rect x="240" y="320" width="180" height="140" />
        <rect x="440" y="320" width="140" height="140" />
      </g>
      {/* roads — implied as gaps; add labels */}
      <g fontFamily="JetBrains Mono, monospace" fontSize="9" fill="var(--ink-50)" letterSpacing="1">
        <text x="120" y="155" transform="rotate(0 120 155)">RATSCHKYGASSE</text>
        <text x="395" y="155">SCHÖNBRUNNER STR.</text>
        <text x="170" y="315">NIEDERHOFSTRASSE</text>
      </g>
      {/* park */}
      <rect x="240" y="320" width="180" height="140" fill="var(--accent-soft)" stroke="var(--ink-30)" />
      <text x="290" y="395" fontFamily="Cormorant Garamond, serif" fontStyle="italic" fontSize="22" fill="var(--ink-50)">Park</text>
      {/* compass */}
      <g transform="translate(540 420)" stroke="var(--ink)" fill="none" strokeWidth="1">
        <circle r="18"/>
        <path d="M0 -14 L4 0 L0 14 L-4 0 Z" fill="var(--ink)" />
        <text x="-3" y="-22" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="var(--ink)">N</text>
      </g>
    </svg>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <span className="brand-mark brand-mark-lg">M·F</span>
          <div>
            <div className="footer-brand-name">Mode Friseur Yüksel</div>
            <div className="footer-brand-meta">Friseur · Beauty · Brautstyling</div>
          </div>
        </div>
        <div className="footer-cols">
          <div>
            <h5>Salon</h5>
            <a href="#services">Leistungen</a>
            <a href="#gallery">Galerie</a>
            <a href="#wedding">Hochzeit</a>
            <a href="#about">Über uns</a>
          </div>
          <div>
            <h5>Kontakt</h5>
            <a href="tel:+4318179130">01 8179130</a>
            <span>Ratschkygasse 6</span>
            <span>1120 Wien</span>
          </div>
          <div>
            <h5>Folgen</h5>
            <a href="#">Instagram</a>
            <a href="#">Google</a>
            <a href="#">Facebook</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Mode Friseur Yüksel</span>
        <span className="footer-line">Made in Meidling · Wien XII</span>
        <span><a href="#">Impressum</a> · <a href="#">Datenschutz</a></span>
      </div>
    </footer>
  );
}

// ─── Booking modal ────────────────────────────────────────────────────────────
const TIMES = ['09:00', '10:00', '11:00', '13:00', '14:30', '16:00', '17:30'];
const DAYS = (() => {
  const out = [];
  const d = new Date();
  for (let i = 0; i < 8; i++) {
    const x = new Date(d);
    x.setDate(d.getDate() + i);
    out.push(x);
  }
  return out;
})();
const DAY_NAMES = ['So','Mo','Di','Mi','Do','Fr','Sa'];
const MONTH_NAMES = ['Jan','Feb','Mär','Apr','Mai','Jun','Jul','Aug','Sep','Okt','Nov','Dez'];

function BookingModal({ open, onClose }) {
  const [step, setStep] = useState(0);
  const [service, setService] = useState(null);
  const [day, setDay] = useState(null);
  const [time, setTime] = useState(null);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!open) {
      // reset on close after delay
      const t = setTimeout(() => {
        setStep(0); setService(null); setDay(null); setTime(null);
        setName(''); setPhone(''); setDone(false);
      }, 300);
      return () => clearTimeout(t);
    }
  }, [open]);

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  if (!open) return null;

  const canNext = (step === 0 && service) || (step === 1 && day !== null && time) || (step === 2 && name && phone);

  return (
    <div className="modal-shade" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Schließen">×</button>
        <div className="modal-head">
          <Eyebrow>Termin · Online</Eyebrow>
          <h3 className="modal-title">
            {done ? 'Vielen Dank.' : <>In drei Schritten<br/><span className="display-italic">zum Termin.</span></>}
          </h3>
          {!done && (
            <div className="modal-steps">
              {['Leistung','Zeit','Kontakt'].map((s, i) => (
                <span key={s} className={i === step ? 'is-active' : i < step ? 'is-done' : ''}>
                  <span className="step-dot">{i+1}</span> {s}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="modal-body">
          {done ? (
            <div className="modal-done">
              <div className="check">✓</div>
              <p>
                Wir haben Ihre Anfrage für <b>{service}</b> am <b>{day && day.fmt}</b>{' '}
                um <b>{time}</b> erhalten. Wir melden uns innerhalb eines Werktags
                unter <b>{phone}</b> zur Bestätigung.
              </p>
              <button className="btn btn-dark" onClick={onClose}>Schließen</button>
            </div>
          ) : step === 0 ? (
            <div className="step step-services">
              {SERVICES.map(s => (
                <button
                  key={s.title}
                  className={`pick-card ${service === s.title ? 'is-on' : ''}`}
                  onClick={() => setService(s.title)}
                >
                  <span className="pick-num">{s.no}</span>
                  <span className="pick-name">{s.title}</span>
                  <span className="pick-de">{s.de}</span>
                </button>
              ))}
            </div>
          ) : step === 1 ? (
            <div className="step step-time">
              <div className="step-label">Tag wählen</div>
              <div className="day-row">
                {DAYS.map((d, i) => {
                  const fmt = `${DAY_NAMES[d.getDay()]} ${d.getDate()}. ${MONTH_NAMES[d.getMonth()]}`;
                  const sun = d.getDay() === 0;
                  return (
                    <button
                      key={i}
                      disabled={sun}
                      className={`day-pill ${day && day.idx === i ? 'is-on' : ''}`}
                      onClick={() => setDay({ idx: i, fmt })}
                    >
                      <span className="day-name">{DAY_NAMES[d.getDay()]}</span>
                      <span className="day-num">{d.getDate()}</span>
                      <span className="day-mon">{MONTH_NAMES[d.getMonth()]}</span>
                      {sun && <span className="day-sun">Zu</span>}
                    </button>
                  );
                })}
              </div>
              <div className="step-label">Uhrzeit</div>
              <div className="time-row">
                {TIMES.map(t => (
                  <button
                    key={t}
                    className={`time-pill ${time === t ? 'is-on' : ''}`}
                    disabled={!day}
                    onClick={() => setTime(t)}
                  >{t}</button>
                ))}
              </div>
            </div>
          ) : (
            <div className="step step-form">
              <label className="field">
                <span>Name</span>
                <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Vor- und Nachname" />
              </label>
              <label className="field">
                <span>Telefonnummer</span>
                <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="+43 …" />
              </label>
              <div className="summary">
                <div><span>Leistung</span><b>{service}</b></div>
                <div><span>Zeit</span><b>{day && day.fmt} · {time}</b></div>
              </div>
              <p className="fine">Mit dem Absenden stimmen Sie der Kontaktaufnahme zur Terminbestätigung zu.</p>
            </div>
          )}
        </div>

        {!done && (
          <div className="modal-foot">
            <button
              className="btn btn-ghost"
              disabled={step === 0}
              onClick={() => setStep(s => s - 1)}
            >Zurück</button>
            <button
              className="btn btn-dark"
              disabled={!canNext}
              onClick={() => {
                if (step < 2) setStep(s => s + 1);
                else setDone(true);
              }}
            >{step < 2 ? 'Weiter' : 'Termin anfragen'}</button>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "warm-beige",
  "displayFont": "cormorant",
  "darkSection": true,
  "ticker": true
}/*EDITMODE-END*/;

const ACCENTS = {
  'warm-beige': { soft: '#E8DDCD', mid: '#C9B8A4', deep: '#8B7860' },
  'olive':      { soft: '#DCDDC9', mid: '#A8AB8E', deep: '#6E7256' },
  'rose':       { soft: '#EAD9D4', mid: '#C9A9A0', deep: '#8C645A' },
  'ink':        { soft: '#D9D9D6', mid: '#9A9A95', deep: '#3A3A36' },
};

const FONTS = {
  cormorant: { display: '"Cormorant Garamond", "Times New Roman", serif', italicWeight: 500 },
  playfair:  { display: '"Playfair Display", "Times New Roman", serif', italicWeight: 500 },
  dmserif:   { display: '"DM Serif Display", "Times New Roman", serif', italicWeight: 400 },
};

function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [book, setBook] = useState(false);

  // Apply tweaks via CSS variables
  useEffect(() => {
    const root = document.documentElement;
    const a = ACCENTS[tweaks.accent] || ACCENTS['warm-beige'];
    root.style.setProperty('--accent-soft', a.soft);
    root.style.setProperty('--accent', a.mid);
    root.style.setProperty('--accent-deep', a.deep);
    const f = FONTS[tweaks.displayFont] || FONTS.cormorant;
    root.style.setProperty('--font-display', f.display);
    root.classList.toggle('no-dark-section', !tweaks.darkSection);
    root.classList.toggle('no-ticker', !tweaks.ticker);
  }, [tweaks.accent, tweaks.displayFont, tweaks.darkSection, tweaks.ticker]);

  return (
    <>
      <Nav onBook={() => setBook(true)} />
      <main>
        <Hero onBook={() => setBook(true)} />
        <Services onBook={() => setBook(true)} />
        <Gallery />
        <Wedding onBook={() => setBook(true)} />
        <About />
        <Contact onBook={() => setBook(true)} />
      </main>
      <Footer />
      <BookingModal open={book} onClose={() => setBook(false)} />

      <TweaksPanel title="Tweaks" defaultPosition={{ right: 24, bottom: 24 }}>
        <TweakSection title="Akzent">
          <TweakRadio
            value={tweaks.accent}
            options={[
              { value: 'warm-beige', label: 'Beige' },
              { value: 'olive', label: 'Olive' },
              { value: 'rose', label: 'Rosé' },
              { value: 'ink', label: 'Tinte' },
            ]}
            onChange={v => setTweak('accent', v)}
          />
        </TweakSection>
        <TweakSection title="Display-Schrift">
          <TweakRadio
            value={tweaks.displayFont}
            options={[
              { value: 'cormorant', label: 'Cormorant' },
              { value: 'playfair', label: 'Playfair' },
              { value: 'dmserif', label: 'DM Serif' },
            ]}
            onChange={v => setTweak('displayFont', v)}
          />
        </TweakSection>
        <TweakSection title="Layout">
          <TweakToggle
            label="Dunkler Hochzeits-Abschnitt"
            value={tweaks.darkSection}
            onChange={v => setTweak('darkSection', v)}
          />
          <TweakToggle
            label="Laufschrift unter Hero"
            value={tweaks.ticker}
            onChange={v => setTweak('ticker', v)}
          />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
