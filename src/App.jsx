import React, { useEffect, useState } from "react";
import { ArrowRight, ArrowUpRight, ChevronDown, Clock, Mail, MapPin, Menu, Phone, Printer, Quote, Scale, X } from "lucide-react";
import { ConceptWidget, StudioCredit } from "./concept.jsx";
import logo from "./assets/dma-logo.png";
import monogram from "./assets/dma-monogram.png";
import dusk from "./assets/mobile-dusk.jpg";
import skyline from "./assets/mobile-skyline.jpg";
import pier from "./assets/fairhope-pier.jpg";
import office from "./assets/lawrence-st-office.jpg";
import davidPhoto from "./assets/david-allen.jpg";
import joePhoto from "./assets/joe-damrich.jpg";

// ------------------------------------------------------------ Content (from dma-lawfirm.com: home, attorneys, practice areas, courts, reviews, contact)
const COMPANY = "The Law Offices of Damrich & Allen";
const ABBR = "dal";
const END_DATE = "2026-11-30T23:59:59-06:00";
const ORIGINAL = "https://www.dma-lawfirm.com/";

const PHONE = "(251) 444-1444";
const PHONE_TEL = "+12514441444";
const FAX = "(251) 301-0247";
const EMAIL = "david@dma-lawfirm.com";

const OFFICES = [
  {
    name: "Mobile office",
    lines: ["214 S. Lawrence Street", "Mobile, Alabama 36602"],
    map: "https://www.google.com/maps/search/?api=1&query=214+S+Lawrence+Street+Mobile+AL+36602",
  },
  {
    name: "Daphne office",
    lines: ["29000 Highway 98, Building C, Suite 2102", "Daphne, Alabama 36526"],
    map: "https://www.google.com/maps/search/?api=1&query=29000+Highway+98+Building+C+Daphne+AL+36526",
  },
];
const MAP_EMBED = "https://www.google.com/maps?q=214+S+Lawrence+Street,+Mobile,+AL+36602&output=embed";

const NAV = [
  ["Practice", "#practice"],
  ["Attorneys", "#attorneys"],
  ["Courts", "#courts"],
  ["Clients", "#clients"],
  ["Contact", "#contact"],
];

const PRACTICES = [
  {
    id: "criminal",
    numeral: "I",
    title: "Criminal Defense",
    lead: "From speeding tickets to capital murder.",
    body: "A criminal prosecution can cost you time, money and your freedom. When you are charged with any offense, big or small, you need a dedicated, honest and experienced defense lawyer fighting for your rights.",
    close: "Your freedom may depend on it.",
    groups: [
      ["DUI & alcohol", ["DUI", "Public intoxication"]],
      ["Drug offenses", ["Possession of marijuana", "Drug paraphernalia", "Possession of a controlled substance", "Distribution", "Trafficking", "Manufacturing"]],
      ["Violent crimes", ["Domestic violence", "Assault", "Menacing", "Reckless endangerment", "Kidnapping", "Manslaughter", "Murder", "Stalking", "Human trafficking"]],
      ["Sex crimes", ["Rape & sodomy", "Sexual abuse & misconduct", "Indecent exposure & public lewdness", "School employee offenses", "Child sex offenses", "Registration & notification"]],
      ["Property & white collar", ["Theft of property, services or trademarks", "Cargo theft", "Breaking & entering", "Robbery", "Extortion", "Receiving stolen property", "White collar crimes"]],
      ["Also", ["Attempts & conspiracies", "Federal crimes", "Civil forfeiture (seized cash, vehicles, boats or property)"]],
    ],
  },
  {
    id: "injury",
    numeral: "II",
    title: "Personal Injury",
    lead: "When an accident turns your life upside down.",
    body: "Medical bills, lost wages, and pain and suffering can all be recovered, even when the insurance companies refuse to pay you. From car wrecks and slip and falls to wrongful death and product liability.",
    close: "Your financial freedom may depend on it.",
    groups: [
      ["On the road", ["Car accidents", "18-wheeler accidents", "Motorcycle accidents"]],
      ["Serious harm", ["Wrongful death", "Work accidents", "Slip & falls", "Products liability"]],
      ["Disputes & litigation", ["Insurance disputes", "Construction disputes", "PEX piping litigation", "Termite litigation"]],
    ],
  },
  {
    id: "family",
    numeral: "III",
    title: "Family Law",
    lead: "Help through difficult family matters.",
    body: "Divorce in Alabama can be a long and painful process for many families. We help with everything from prenuptial agreements and divorce to custody, support and later modifications.",
    close: "Call to talk through your situation.",
    groups: [
      ["Marriage & divorce", ["Marriage", "Prenuptial agreements", "Divorce", "Legal separation", "Annulment", "Asset division", "Alimony"]],
      ["Children", ["Child custody", "Temporary custody", "Child support", "Adoption", "Guardian ad litem", "Modifications"]],
    ],
  },
];

const ATTORNEYS = [
  {
    name: "David M. Allen",
    role: "Criminal Defense & Personal Injury",
    photo: davidPhoto,
    phone: PHONE,
    bio: "Born on a U.S. Navy base in Okinawa, Japan, the son of a Navy veteran, David grew up in Baldwin County and graduated with honors from Fairhope High School. He has worked on high-profile criminal defense trials and multi-million-dollar personal injury trials, and he prides himself on excellent communication with his clients.",
    record: [
      ["Undergraduate", "Spring Hill College, Mobile · cum laude · Political Science & Philosophy"],
      ["Law school", "University of Iowa College of Law"],
      ["In law school", "Intern, U.S. House of Representatives and Alabama Circuit Judge Carmen Bosch; Student Editor, Journal of Gender, Race, and Justice"],
    ],
    profile: "https://www.dma-lawfirm.com/attorneys/david-m-allen/",
  },
  {
    name: "Joseph D. Damrich",
    role: "Trial Attorney · former Assistant District Attorney",
    photo: joePhoto,
    phone: "(251) 301-0362",
    bio: "Joe was born and raised in Mobile. Before law, he was a project manager and NACE Level II certified coating inspector in the maritime industry. He handled hundreds of injury cases in New Orleans, then thousands of criminal cases as an Assistant District Attorney in Mobile County, including jury trials for murder, robbery and drug trafficking.",
    record: [
      ["Education", "University of South Alabama, BA 2011, summa cum laude · Loyola University New Orleans College of Law, J.D. 2015"],
      ["Trial advocacy", "Trial Advocacy National Team member and coach; Louisiana State Bar Trial Competition winner; Order of Barristers"],
      ["Bar admissions", "Louisiana 2015 · Alabama 2017"],
    ],
    profile: "https://www.dma-lawfirm.com/attorneys/joseph-d-damrich/",
  },
  {
    name: "Hamilton Jordan",
    role: "Personal Injury & Property Damage",
    photo: null,
    phone: PHONE,
    bio: "An Alabama native, Hamilton began his career in 2010 as a claims adjuster for a large insurance company before going to law school. He began practicing in south Alabama in 2019, working primarily on personal injury and property damage cases.",
    record: [
      ["Undergraduate", "University of Mobile, B.S. Business Administration (Finance), 2008"],
      ["Law school", "Birmingham School of Law, 2017"],
      ["Before law", "Insurance claims adjuster from 2010"],
    ],
    profile: "https://www.dma-lawfirm.com/attorneys/hamilton-jordan/",
  },
];

const COURTS = [
  ["Mobile County", ["Mobile County Circuit Court", "Mobile County District Court", "Mobile Municipal Court", "Prichard Municipal Court", "Saraland Municipal Court", "Citronelle Municipal Court", "Bayou La Batre Municipal Court"]],
  ["Baldwin County", ["Baldwin County Circuit Court", "Baldwin County District Court", "Bay Minette", "Daphne", "Fairhope", "Spanish Fort", "Loxley", "Robertsdale", "Silverhill", "Summerdale", "Foley", "Elberta", "Gulf Shores", "Orange Beach"]],
  ["Federal", ["United States District Court"]],
];

// Verbatim from the Reviews page of dma-lawfirm.com.
const REVIEWS = [
  ["Extremely professional and personable. Listened to every detail of my case and took the time to review and thoughtfully assess my situation. Moved quickly and effectively in helping resolve my case and I would highly recommend working with him!", "Shannon L."],
  ["Hard worker, listens to you, does his best on trial dates, and most importantly he knows how to win cases. I recommend him to anyone seeking justice.", "Abdelkarim B."],
  ["David Allen is a very competent, trustworthy criminal defense attorney. He is a hard worker and knowledgeable lawyer. I would absolutely recommend.", "Jenna G."],
  ["Great Lawyer! Really helped me out, and was really easy to work with! Highly recommended.", "Jessica G."],
  ["Mr. Allen is a fantastic lawyer. Really knows his stuff.", "Cynthia B."],
  ["Excellent lawyer. Very friendly and personable.", "Peyton K."],
  ["Great lawyer. Would definitely recommend.", "Mark R."],
  ["Highly recommend Attorney David Allen.", "Bryce P."],
];

const STEPS = [
  ["Call or write", `Reach the office at ${PHONE} or send the form below. Initial consultations are free.`],
  ["Tell us what happened", "Share the details of your case and an attorney will explain your options."],
  ["We prepare for trial", "We prepare for trial. We prepare to win."],
];

// ------------------------------------------------------------ Components
function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="wrap header-row">
        <a href="#top" className="brand" aria-label={`${COMPANY} home`}>
          <img src={logo} alt="The Law Offices of Damrich & Allen, David M. Allen, LLC" />
        </a>
        <nav className={`nav${open ? " is-open" : ""}`} aria-label="Main">
          {NAV.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
          <a className="nav-call" href={`tel:${PHONE_TEL}`} onClick={() => setOpen(false)}><Phone size={16} /> {PHONE}</a>
        </nav>
        <button type="button" className="nav-toggle" onClick={() => setOpen((v) => !v)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <div className="wrap-left">
          <p className="eyebrow light">South Alabama's Full Service Law Firm</p>
          <h1>Prepared for trial.<br /><em>Prepared to win.</em></h1>
          <p className="hero-sub">Honest and experienced trial lawyers in Mobile and Daphne, ready to fight for you in criminal defense, personal injury and family law cases.</p>
          <div className="hero-actions">
            <a className="btn btn-brass" href={`tel:${PHONE_TEL}`}><Phone size={18} /> Call {PHONE}</a>
            <a className="btn btn-ghost" href="#contact">Free consultation <ArrowRight size={18} /></a>
          </div>
          <dl className="hero-facts">
            <div><dt>Consultations</dt><dd>Free, initial</dd></div>
            <div><dt>Offices</dt><dd>Mobile &amp; Daphne</dd></div>
            <div><dt>Courts</dt><dd>Mobile, Baldwin &amp; federal</dd></div>
          </dl>
        </div>
      </div>
      <figure className="hero-photo">
        <img src={dusk} alt="Downtown Mobile, Alabama skyline at dusk" />
        <figcaption><span>Fig. 1</span> Downtown Mobile at dusk. The firm's main office is on South Lawrence Street.</figcaption>
      </figure>
    </section>
  );
}

function Docket() {
  return (
    <div className="docket" aria-label="Practice areas">
      <div className="wrap docket-row">
        {PRACTICES.map((p) => (
          <a key={p.id} href={`#${p.id}`} className="docket-item">
            <span className="docket-num">§ {p.numeral}</span>
            <span className="docket-title">{p.title}</span>
            <ArrowRight size={18} />
          </a>
        ))}
      </div>
    </div>
  );
}

function Practice() {
  return (
    <section className="section practice" id="practice">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Practice areas</p>
          <h2>Three practices. <em>One standard:</em> ready for a jury.</h2>
          <p className="section-intro">Our attorneys have earned tremendous success in jury trials throughout South Alabama, whether it is a felony criminal trial, a million-dollar civil case, or a difficult family law matter.</p>
        </div>
        <div className="practice-list">
          {PRACTICES.map((p) => (
            <article key={p.id} id={p.id} className="practice-item">
              <div className="practice-side">
                <span className="practice-num">§ {p.numeral}</span>
                <h3>{p.title}</h3>
                <p className="practice-lead">{p.lead}</p>
              </div>
              <div className="practice-main">
                <p>{p.body}</p>
                <p className="practice-close">{p.close} <a href={`tel:${PHONE_TEL}`}>Call {PHONE}</a></p>
                <details className="matters">
                  <summary><span>Matters we handle</span><ChevronDown size={18} /></summary>
                  <div className="matters-grid">
                    {p.groups.map(([label, items]) => (
                      <div key={label}>
                        <h4>{label}</h4>
                        <ul>{items.map((i) => <li key={i}>{i}</li>)}</ul>
                      </div>
                    ))}
                  </div>
                </details>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Statement() {
  return (
    <section className="statement" style={{ backgroundImage: `url(${pier})` }}>
      <div className="statement-inner wrap">
        <Scale size={30} aria-hidden="true" />
        <blockquote>
          “The decision to hire a lawyer to represent you in a court of law is a serious and important choice. Experience, integrity, and the abilities to fight and win are paramount.”
        </blockquote>
        <p>Serving Mobile, Baldwin and surrounding counties</p>
      </div>
    </section>
  );
}

function Attorneys() {
  return (
    <section className="section attorneys" id="attorneys">
      <div className="wrap">
        <div className="section-head split">
          <div>
            <p className="eyebrow">The attorneys</p>
            <h2>Alabama trial lawyers, <em>ready for court.</em></h2>
          </div>
          <p className="section-intro">A former prosecutor, a former insurance adjuster and a Baldwin County native who has tried high-profile criminal and multi-million-dollar injury cases. Joe and David partnered to bring their combined skills together for clients whose cases are big or small.</p>
        </div>
        <div className="attorney-grid">
          {ATTORNEYS.map((a) => (
            <article key={a.name} className="attorney">
              <div className="attorney-photo">
                {a.photo ? <img src={a.photo} alt={`Attorney ${a.name}`} loading="lazy" /> : (
                  <div className="attorney-plate"><img src={monogram} alt="" aria-hidden="true" /><span>Portrait coming soon</span></div>
                )}
              </div>
              <div className="attorney-body">
                <h3>{a.name}</h3>
                <p className="attorney-role">{a.role}</p>
                <p>{a.bio}</p>
                <dl className="record">
                  {a.record.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
                </dl>
                <a className="attorney-call" href={`tel:+1${a.phone.replace(/\D/g, "")}`}><Phone size={15} /> {a.phone}</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="process">
      <div className="wrap process-grid">
        <div>
          <p className="eyebrow light">What happens when you call</p>
          <h2>Your first conversation is <em>free.</em></h2>
          <a className="btn btn-brass" href={`tel:${PHONE_TEL}`}><Phone size={18} /> {PHONE}</a>
        </div>
        <ol className="steps">
          {STEPS.map(([t, d], i) => (
            <li key={t}><span>{String(i + 1).padStart(2, "0")}</span><div><h3>{t}</h3><p>{d}</p></div></li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Courts() {
  return (
    <section className="section courts" id="courts">
      <div className="wrap courts-grid">
        <div className="courts-photo">
          <img src={skyline} alt="Aerial view of downtown Mobile and the Mobile River" loading="lazy" />
        </div>
        <div>
          <p className="eyebrow">Where we appear</p>
          <h2>From municipal court <em>to federal court.</em></h2>
          <p className="section-intro">Speeding tickets and DUIs start in city courts; felonies and civil trials move to circuit court. Our attorneys represent clients in city, county and federal courts on both sides of Mobile Bay.</p>
          <div className="court-cols">
            {COURTS.map(([county, list]) => (
              <div key={county} className="court-col">
                <h3>{county}</h3>
                <ul>{list.map((c) => <li key={c}>{c}{county === "Baldwin County" && !c.includes("County") ? <small> Municipal</small> : null}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Clients() {
  const [featured, ...rest] = REVIEWS;
  return (
    <section className="section clients" id="clients">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">In their words</p>
          <h2>What clients <em>say.</em></h2>
        </div>
        <div className="reviews">
          <figure className="review-feature">
            <Quote size={36} aria-hidden="true" />
            <blockquote>{featured[0]}</blockquote>
            <figcaption>{featured[1]}</figcaption>
          </figure>
          <div className="review-list">
            {rest.map(([text, name]) => (
              <figure key={name} className="review">
                <blockquote>“{text}”</blockquote>
                <figcaption>{name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
        <p className="review-source">Reviews quoted word for word from the Reviews page of dma-lawfirm.com. <a href="https://www.google.com/search?q=Law+Offices+of+Damrich+%26+Allen+Mobile+AL+reviews" target="_blank" rel="noopener noreferrer">See reviews on Google <ArrowUpRight size={14} /></a></p>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", matter: "", office: "", notes: "", website: "" });
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");
  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  async function submit(e) {
    e.preventDefault();
    if (!form.agree) { setStatus("error"); setMessage("Please confirm you have read the disclaimer."); return; }
    setStatus("sending");
    setMessage("");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.success) throw new Error(data.message || "Please call the office instead.");
      setStatus("sent");
      setMessage(data.demo ? "Thank you. This is a concept preview, so nothing was sent. Please call the office directly." : "Thank you. The office will be in touch shortly.");
    } catch (err) {
      setStatus("error");
      setMessage(err.message);
    }
  }

  return (
    <section className="section contact" id="contact">
      <div className="wrap contact-grid">
        <div className="contact-info">
          <p className="eyebrow">Free initial consultation</p>
          <h2>Talk to a lawyer <em>today.</em></h2>
          <a className="contact-phone" href={`tel:${PHONE_TEL}`}><Phone size={26} /> {PHONE}</a>
          <ul className="contact-lines">
            <li><Mail size={17} /> <a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
            <li><Printer size={17} /> Fax {FAX}</li>
          </ul>
          <div className="offices">
            {OFFICES.map((o) => (
              <div key={o.name} className="office">
                <h3><MapPin size={17} /> {o.name}</h3>
                <p>{o.lines.map((l) => <span key={l}>{l}</span>)}</p>
                <a href={o.map} target="_blank" rel="noopener noreferrer">Directions <ArrowUpRight size={14} /></a>
              </div>
            ))}
          </div>
          <figure className="office-photo">
            <img src={office} alt="The firm's office at 214 S. Lawrence Street in Mobile" loading="lazy" />
            <figcaption>214 S. Lawrence Street, Mobile</figcaption>
          </figure>
        </div>
        <form className="consult-form" onSubmit={submit}>
          <h3>Request a consultation</h3>
          {status === "sent" ? <p className="form-done" role="status">{message}</p> : (
            <>
              <label>Name *<input required value={form.name} onChange={(e) => update("name", e.target.value)} autoComplete="name" /></label>
              <div className="form-row">
                <label>Phone *<input required type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} autoComplete="tel" /></label>
                <label>Email<input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} autoComplete="email" /></label>
              </div>
              <div className="form-row">
                <label>Type of case
                  <select value={form.matter} onChange={(e) => update("matter", e.target.value)}>
                    <option value="">Choose one</option>
                    <option>Criminal defense</option>
                    <option>Personal injury</option>
                    <option>Family law</option>
                    <option>Something else</option>
                  </select>
                </label>
                <label>Closest office
                  <select value={form.office} onChange={(e) => update("office", e.target.value)}>
                    <option value="">Either</option>
                    <option>Mobile</option>
                    <option>Daphne</option>
                  </select>
                </label>
              </div>
              <label>Briefly, what happened?<textarea rows={4} value={form.notes} onChange={(e) => update("notes", e.target.value)} /></label>
              <div className="hp" aria-hidden="true"><label>Website<input tabIndex={-1} autoComplete="off" value={form.website} onChange={(e) => update("website", e.target.value)} /></label></div>
              <label className="agree"><input type="checkbox" checked={!!form.agree} onChange={(e) => update("agree", e.target.checked)} /> I understand that contacting the firm through this website does not create an attorney-client relationship.</label>
              {status === "error" && <p className="form-error" role="alert">{message}</p>}
              <button className="btn btn-navy" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending..." : "Send request"} <ArrowRight size={18} /></button>
              <p className="form-note"><Clock size={14} /> Prefer to talk? Call {PHONE}.</p>
            </>
          )}
        </form>
      </div>
      <div className="wrap map-wrap">
        <iframe title="Map to the Mobile office of the Law Offices of Damrich & Allen" src={MAP_EMBED} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <img src={logo} alt={COMPANY} loading="lazy" />
          <p>South Alabama's Full Service Law Firm. Criminal defense, personal injury and family law in Mobile, Baldwin and surrounding counties.</p>
        </div>
        <div>
          <h4>Practice</h4>
          <ul>{PRACTICES.map((p) => <li key={p.id}><a href={`#${p.id}`}>{p.title}</a></li>)}</ul>
        </div>
        <div>
          <h4>Offices</h4>
          {OFFICES.map((o) => <p key={o.name}>{o.lines.join(", ")}</p>)}
        </div>
        <div>
          <h4>Contact</h4>
          <p><a href={`tel:${PHONE_TEL}`}>{PHONE}</a><br />Fax {FAX}<br /><a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
        </div>
      </div>
      <div className="wrap footer-legal">
        <p>The following language is required pursuant to Rule 7.2, Alabama Rules of Professional Conduct. No representation is made that the quality of legal services to be performed is greater than the quality of legal services performed by other lawyers. This web site is designed for general information only. The information presented at this site should not be construed to be formal legal advice nor the formation of a lawyer/client relationship.</p>
      </div>
      <div className="wrap footer-base">
        <span>© {new Date().getFullYear()} {COMPANY} · David M. Allen, LLC. Concept redesign by Blueprint WebStudio · Independent concept · not for official use. Current site: <a href={ORIGINAL}>dma-lawfirm.com</a></span>
        <StudioCredit />
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <div className="topbar">
        <div className="wrap topbar-row">
          <span>Free initial consultations · Mobile &amp; Daphne</span>
          <a href={`tel:${PHONE_TEL}`}><Phone size={14} /> {PHONE}</a>
        </div>
      </div>
      <Header />
      <main>
        <Hero />
        <Docket />
        <Practice />
        <Statement />
        <Attorneys />
        <Process />
        <Courts />
        <Clients />
        <Contact />
      </main>
      <Footer />
      <ConceptWidget company={COMPANY} abbr={ABBR} endDate={END_DATE} />
    </>
  );
}
