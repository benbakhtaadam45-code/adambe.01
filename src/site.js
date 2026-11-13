import { useState, useEffect } from "react";
//useeffect: un scroll, un timer, un appel à une API, etc.

/* ---------- Données (modifie-les facilement ici) ---------- */
const NAME = "Adam Benbakhta";

const SKILLS = [
  { name: "HTML / CSS", level: 90 },
  { name: "JavaScript", level: 80 },
  { name: "React JS", level: 70 },
  { name: "Node.js", level: 60 },
  { name: "Bootstrap", level: 85 },
  { name: "Git / Jira (Scrum)", level: 65 },
];

const PROJECTS = [
  {
    title: "Bibliothèque numérique",
    icon: "bi-book",
    text: "Mini projet Scrum géré sur Jira : backlog, sprints et suivi de l'avancement.",
    tags: ["Scrum", "Jira", "Agile"],
  },
  {
    title: "Application React",
    icon: "bi-lightning-charge",
    text: "Interface front-end en React avec composants réutilisables et état dynamique.",
    tags: ["React", "JavaScript", "Bootstrap"],
  },
  {
    title: "API Node.js",
    icon: "bi-hdd-network",
    text: "Back-end simple avec Node.js pour apprendre l'architecture client / serveur.",
    tags: ["Node.js", "API", "JSON"],
  },
];

const NAV = [
  { id: "accueil", label: "Accueil" },
  { id: "apropos", label: "À propos" },
  { id: "competences", label: "Compétences" },
  { id: "projets", label: "Projets" },
  { id: "contact", label: "Contact" },
];

/* ---------- Composants ---------- */
function Navbar() {
  const [active, setActive] = useState("accueil");

  useEffect(() => {
    const onScroll = () => {
      let current = "accueil";
      //current démarre à "accueil" : c’est la valeur par défaut, 
      // quand on est tout en haut de la page.

      NAV.forEach(({ id }) => {
        //On parcourt les 5 sections (accueil, apropos, competences, projets, contact).
        //  ({ id }) récupère directement l’id de chaque objet.
        const el = document.getElementById(id);
        //On cherche dans la page l’élément HTML qui a cet id (la <section id="projets">
        if (el && window.scrollY >= el.offsetTop - 120) current = id;
        /*el : on vérifie que l’élément existe (sinon null, et ça plante).
window.scrollY : combien de pixels tu as déjà scrollé depuis le haut.
el.offsetTop : la position de la section depuis le haut de la page.
- 120 : une marge, pour que la section devienne active un peu avant-
 d’arriver tout en haut (la navbar fixe prend de la place).*/
      });
      setActive(current);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center gap-2 fw-bold" href="#accueil">
          <img src="img/favicon.png" alt="Logo" className="brand-icon" />
          {NAME}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
          aria-label="Menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav ms-auto">
            {NAV.map((item) => (
              <li className="nav-item" key={item.id}>
                <a
                  className={"nav-link" + (active === item.id ? " active" : "")}
                  href={"#" + item.id}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

function Typing({ words }) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    const delay = deleting ? 50 : 110;
    const t = setTimeout(() => {
      if (!deleting) {
        setText(word.slice(0, text.length + 1));
        if (text.length + 1 === word.length) setTimeout(() => setDeleting(true), 1200);
      } else {
        setText(word.slice(0, text.length - 1));
        if (text.length - 1 === 0) {
          setDeleting(false);
          setI(i + 1);
        }
      }
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, i, words]);

  return <span className="gradient-text">{text}<span className="text-info">|</span></span>;
}

function Hero() {
  return (
    <header id="accueil" className="hero">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-7 order-2 order-lg-1">
            <p className="text-info fw-semibold mb-2">Salut, je suis</p>
            <h1 className="mb-3">{NAME}</h1>
            <h2 className="h3 mb-4">
              <Typing words={["Développeur Digital", "Front-end React", "Passionné de Web"]} />
            </h2>
            <p className="text-muted-2 fs-5 mb-4">
              Technicien spécialisé en développement digital. J'apprends et je crée des
              sites modernes avec React, Node.js, HTML, CSS et Bootstrap.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <a href="#projets" className="btn btn-accent btn-lg px-4">
                <i className="bi bi-rocket-takeoff me-2"></i>Mes projets
              </a>
              <a href="#contact" className="btn btn-outline-accent btn-lg px-4">
                <i className="bi bi-envelope me-2"></i>Me contacter
              </a>
            </div>
          </div>
          <div className="col-lg-5 order-1 order-lg-2 text-center">
            <img src="img/portrait.jpg" alt={NAME} className="hero-photo" />
          </div>
        </div>
      </div>
    </header>
  );
}

function About() {
  const stats = [
    { n: "DTS", label: "Développement digital" },
    { n: "5+", label: "Technologies" },
    { n: "100%", label: "Motivation" },
  ];
  return (
    <section id="apropos">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">
          À <span className="gradient-text">propos</span>
        </h2>
        <div className="row justify-content-center g-4">
          <div className="col-lg-7">
            <p className="fs-5 text-muted-2">
              Je m'appelle <strong className="text-white">{NAME}</strong>. Diplômé d'un
              diplôme de technicien spécialisé en développement digital, je continue
              d'apprendre chaque jour : architecture web, back-end avec Node.js et
              interfaces modernes avec React.
            </p>
            <p className="text-muted-2">
              J'aime comprendre comment les choses fonctionnent, faire des exercices
              pratiques et construire des projets concrets.
            </p>
          </div>
          <div className="col-lg-5">
            <div className="row g-3 text-center">
              {stats.map((s) => (
                <div className="col-4" key={s.label}>
                  <div className="card-dark p-3">
                    <div className="h3 gradient-text fw-bold mb-1">{s.n}</div>
                    <small className="text-muted-2">{s.label}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="competences">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">
          Mes <span className="gradient-text">compétences</span>
        </h2>
        <div className="row g-4">
          {SKILLS.map((s) => (
            <div className="col-md-6" key={s.name}>
              <div className="d-flex justify-content-between mb-1">
                <span>{s.name}</span>
                <span className="text-muted-2">{s.level}%</span>
              </div>
              <div className="progress skill-bar">
                <div className="progress-bar" style={{ width: s.level + "%" }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projets">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">
          Mes <span className="gradient-text">projets</span>
        </h2>
        <div className="row g-4">
          {PROJECTS.map((p) => (
            <div className="col-md-6 col-lg-4" key={p.title}>
              <div className="card-dark p-4">
                <i className={"bi " + p.icon + " card-icon mb-3 d-block"}></i>
                <h3 className="h5 fw-bold">{p.title}</h3>
                <p className="text-muted-2">{p.text}</p>
                <div className="d-flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span className="badge badge-tech rounded-pill" key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ nom: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    // Ouvre le client mail avec le message prérempli
    const subject = encodeURIComponent("Message de " + form.nom);
    const body = encodeURIComponent(form.message + "\n\n" + form.nom + " (" + form.email + ")");
    window.location.href = "mailto:benbakhtaadam45@gmail.com?subject=" + subject + "&body=" + body;
    setSent(true);
    setForm({ nom: "", email: "", message: "" });
  };

  return (
    <section id="contact">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">
          Me <span className="gradient-text">contacter</span>
        </h2>
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <form onSubmit={onSubmit} className="card-dark p-4">
              <div className="row g-3">
                <div className="col-md-6">
                  <input className="form-control" name="nom" placeholder="Votre nom"
                    value={form.nom} onChange={onChange} required />
                </div>
                <div className="col-md-6">
                  <input className="form-control" type="email" name="email" placeholder="Votre email"
                    value={form.email} onChange={onChange} required />
                </div>
                <div className="col-12">
                  <textarea className="form-control" rows="5" name="message" placeholder="Votre message"
                    value={form.message} onChange={onChange} required></textarea>
                </div>
                <div className="col-12 d-grid">
                  <button className="btn btn-accent btn-lg" type="submit">
                    <i className="bi bi-send me-2"></i>Envoyer
                  </button>
                </div>
              </div>
              {sent && (
                <div className="alert alert-success mt-3 mb-0">
                  Merci ! Votre application mail s'ouvre pour envoyer le message.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="text-center">
      <div className="container">
        <div className="social mb-2">
          <a href="mailto:benbakhtaadam45@gmail.com" aria-label="Email"><i className="bi bi-envelope"></i></a>
          <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub"><i className="bi bi-github"></i></a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
        </div>
        <small>© {new Date().getFullYear()} {NAME}. Tous droits réservés.</small>
      </div>
    </footer>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default function Site() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}