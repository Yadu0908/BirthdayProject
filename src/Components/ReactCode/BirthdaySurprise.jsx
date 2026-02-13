import React, { useState, useEffect, useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import {
  Heart,
  Star,
  Gift,
  PartyPopper,
  Cake,
  Sparkles,
  MessageCircle,
  Camera,
  Music,
  Smile,
  Cloud,
  Zap
} from "lucide-react";
import "../CssCode/BirthdaySurprise.css";
import emailjs from '@emailjs/browser';

// Import your images here
import img1 from "../../assets/images/kiran/kiran1.png";
import img2 from "../../assets/images/kiran/kiran2.png";
import img3 from "../../assets/images/kiran/kiran3.png";
import img4 from "../../assets/images/kiran/kiran4.png";
import img5 from "../../assets/images/kiran/kiran5.png";
import img6 from "../../assets/images/kiran/kiran6.png";
import img7 from "../../assets/images/kiran/kiran7.png";
import img8 from "../../assets/images/kiran/kiran8.png";
import img12 from "../../assets/images/kiran/kiran12.png";
import img13 from "../../assets/images/kiran/kiran13.png";
import img14 from "../../assets/images/kiran/kiran14.png";
import img15 from "../../assets/images/kiran/kiran15.png";
import img16 from "../../assets/images/kiran/kiran16.png";
import img17 from "../../assets/images/kiran/kiran17.png";
import img19 from "../../assets/images/kiran/kiran24.png";
import img20 from "../../assets/images/kiran/kiran25.jpg";
import img21 from "../../assets/images/kiran/kiran26.png";
import img22 from "../../assets/images/kiran/kiran27.jpg";
import personal from "../../assets/images/kiran/ApniPersoanal.jpg";

const BirthdaySurprise = () => {
  const [bookOpen, setBookOpen] = useState(false);

  // Game State
  const [papers, setPapers] = useState([
    { id: 1, text: "Drop Tilted!", x: 0, y: 0, rotation: -5, removed: false },
    { id: 2, text: "Booyah!", x: 0, y: 0, rotation: 8, removed: false },
    { id: 3, text: "GG!", x: 0, y: 0, rotation: -3, removed: false },
    { id: 4, text: "Let's Go!", x: 0, y: 0, rotation: 12, removed: false },
    { id: 5, text: "Winner Winner!", x: 0, y: 0, rotation: -8, removed: false },
  ]);
  const [draggingId, setDraggingId] = useState(null);
  const [showMessage, setShowMessage] = useState(false);
  const [confetti, setConfetti] = useState([]);

  // Carousel State
  const [currentMessage, setCurrentMessage] = useState(0);

  // Egg State
  const [eggClicked, setEggClicked] = useState(false);

  // Refs
  const startPosRef = useRef({ x: 0, y: 0 });
  const papersRef = useRef(papers);

  // Cute messages
  const cuteMessages = [
    {
      title: "Life is a beautiful journey",
      message: "May your birthday be the beginning of a year filled with happy moments and wonderful surprises.",
      icon: <Sparkles size={40} color="#d79921" />
    },
    {
      title: "Chase your dreams fearlessly",
      message: "Another year older, another year wiser. Keep shining and inspiring everyone around you.",
      icon: <Star size={40} color="#b16286" />
    },
    {
      title: "Celebrate every moment",
      message: "Birthdays are nature's way of telling us to eat more cake and create more memories.",
      icon: <Cake size={40} color="#cc241d" />
    },
    {
      title: "You deserve all the happiness",
      message: "Wishing you a day filled with love, laughter, and all the things that make you smile.",
      icon: <Heart size={40} color="#98971a" />
    }
  ];

  // --- SINGLE TIME SCROLL ANIMATION OBSERVER ---
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const hiddenElements = document.querySelectorAll(".reveal-on-scroll");
    hiddenElements.forEach((el) => observer.observe(el));

    return () => hiddenElements.forEach((el) => observer.unobserve(el));
  }, []);

  // --- GAME LOGIC ---
  useEffect(() => {
    papersRef.current = papers;
  }, [papers]);

  useEffect(() => {
    const allRemoved = papers.every(paper => paper.removed);
    if (allRemoved && !showMessage) {
      setShowMessage(true);
      generateConfetti();
    }
  }, [papers, showMessage]);

  const generateConfetti = () => {
    const shapes = ['square', 'circle', 'star', 'diamond'];
    const newConfetti = Array.from({ length: 70 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 0.5,
      duration: 2 + Math.random() * 2,
      shape: shapes[Math.floor(Math.random() * shapes.length)],
      size: 8 + Math.random() * 10
    }));
    setConfetti(newConfetti);
  };

  const handleMouseDown = (e, paperId) => {
    if(e.type === 'touchstart') e.preventDefault();
    setDraggingId(paperId);
    startPosRef.current = {
      x: e.clientX || e.touches?.[0]?.clientX,
      y: e.clientY || e.touches?.[0]?.clientY,
    };
  };

  useEffect(() => {
    if (draggingId === null) return;

    const handleMouseMove = (e) => {
      const currentX = e.clientX || e.touches?.[0]?.clientX;
      const currentY = e.clientY || e.touches?.[0]?.clientY;
      const deltaX = currentX - startPosRef.current.x;
      const deltaY = currentY - startPosRef.current.y;

      setPapers(prevPapers =>
        prevPapers.map(paper =>
          paper.id === draggingId
            ? {
                ...paper,
                x: deltaX,
                y: deltaY,
                rotation: paper.rotation + deltaX * 0.05
              }
            : paper
        )
      );
    };

    const handleMouseUp = () => {
      const paper = papersRef.current.find(p => p.id === draggingId);
      if (paper) {
        const distance = Math.sqrt(paper.x ** 2 + paper.y ** 2);

        if (distance > 150) {
          setPapers(prevPapers =>
            prevPapers.map(p =>
              p.id === draggingId ? { ...p, removed: true } : p
            )
          );
        } else {
          setPapers(prevPapers =>
            prevPapers.map(p =>
              p.id === draggingId ? { ...p, x: 0, y: 0 } : p
            )
          );
        }
      }
      setDraggingId(null);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchmove', handleMouseMove);
    window.addEventListener('touchend', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleMouseMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [draggingId]);

  // --- CAROUSEL AUTO ROTATE ---
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % cuteMessages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [cuteMessages.length]);

  // --- EGG CLICK HANDLER ---
  const handleEggClick = () => {
    if (eggClicked) return;
    setEggClicked(true);
  };

  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    // Replace these with your actual IDs from EmailJS
    // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')

    emailjs.sendForm('service_vl9ebtm', 'template_a08hnxo', form.current, 'JEsyUVWyagUZwW-jz')
      .then((result) => {
          console.log(result.text);
          setLoading(false);
          setSent(true);
          e.target.reset(); // Clear the textarea
      }, (error) => {
          console.log(error.text);
          setLoading(false);
          alert("Oye! Kuch gadbad ho gayi. Message nahi gaya.");
      });
  };

  return (
    <div className="surprise-container">
      {/* SECTION 1: HERO WITH RIBBON EFFECT */}
      <section className="hero-section">

        {/* Random Floating Elements */}
        <div className="hero-floating-elements">
          <div className="float-icon i-1"><Heart size={30} color="#ff8fa3" /></div>
          <div className="float-icon i-2"><Star size={24} color="#fabd2f" /></div>
          <div className="float-icon i-3"><Music size={28} color="#83a598" /></div>
          <div className="float-icon i-4"><Cloud size={40} color="#fff" /></div>
          <div className="float-icon i-5"><Smile size={32} color="#fe8019" /></div>
          <div className="float-icon i-6"><Heart size={20} color="#fb4934" /></div>
          <div className="float-icon i-7"><Zap size={25} color="#d79921" /></div>
          <div className="float-icon i-8"><Sparkles size={35} color="#b16286" /></div>
          <div className="float-icon i-9"><Gift size={28} color="#cc241d" /></div>
          <div className="float-icon i-10"><Cloud size={30} color="#fff" /></div>
          <div className="float-icon i-11"><Star size={22} color="#98971a" /></div>
          <div className="float-icon i-12"><Heart size={26} color="#d65d0e" /></div>
        </div>

        {/* Ribbon Animation */}
        <div className="ribbon-container">
          <div className="ribbon ribbon-1">
            <PartyPopper size={20} style={{marginRight: 10}} /> Happy Birthday
            <Cake size={20} style={{margin: '0 10px'}} /> Happy Birthday
            <PartyPopper size={20} style={{marginLeft: 10}} />
          </div>
          <div className="ribbon ribbon-2">
            <Star size={20} style={{marginRight: 10}} /> Celebrate
            <Gift size={20} style={{margin: '0 10px'}} /> Party Time
            <Star size={20} style={{marginLeft: 10}} />
          </div>
        </div>

        {/* REALISTIC ROPE CONTAINER */}
        <div className="string-container">
          <svg className="rope-svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
            <path d="M0,0 Q500,100 1000,0" fill="transparent" stroke="#8b4513" strokeWidth="3" opacity="0.6" />
          </svg>

          <div className="photo-frame f-1"><img src={img1} alt="memories" /></div>
          <div className="photo-frame f-2"><img src={img2} alt="memories" /></div>
          <div className="photo-frame f-3"><img src={img3} alt="memories" /></div>
          <div className="photo-frame f-4"><img src={img6} alt="memories" /></div>
          <div className="photo-frame f-5"><img src={img5} alt="memories" /></div>
          <div className="photo-frame f-6"><img src={img7} alt="memories" /></div>
        </div>

        {/* FIXED CENTERED TITLE LAYOUT */}
        <div className="title-container">
          <span className="static-text">Happy Birthday</span>
          <span className="dynamic-text">
            <TypeAnimation
              sequence={[
                'Kutte',
                2000,
                'Kiran',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              cursor={true}
            />
          </span>
        </div>

        <div className="wave-divider">
          <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="currentColor"
              fillOpacity="1"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* SECTION: CUTE MESSAGES CAROUSEL */}
      <section className="section cute-messages-section reveal-on-scroll">
        <h2 className="section-title">
          <span className="title-gradient">Some Special Words</span>
          <span className="title-underline"></span>
        </h2>

        <div className="messages-carousel">
          <div className="carousel-container">
            {cuteMessages.map((msg, index) => (
              <div
                key={index}
                className={`message-card ${index === currentMessage ? 'active' : ''}`}
              >
                <div className="message-icon">{msg.icon}</div>
                <h3 className="message-title">{msg.title}</h3>
                <p className="message-text">{msg.message}</p>
              </div>
            ))}
          </div>

          <div className="carousel-dots">
            {cuteMessages.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentMessage ? 'active' : ''}`}
                onClick={() => setCurrentMessage(index)}
                aria-label={`Go to message ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: THE BOOK */}
      <section className="section book-section reveal-on-scroll">
        <h2 className="section-title">
          <span className="title-gradient">Hehe, Apni Pehli aur Only photo.</span>
          <span className="title-underline"></span>
        </h2>
        <div className="book-wrapper" onClick={() => setBookOpen(!bookOpen)}>
          <div className={`book ${bookOpen ? "open" : ""}`}>
            <div className="front">
              <Camera size={48} color="#fbf1c7" style={{marginBottom: 15}} />
              <h3>The Story of Us</h3>
              <p>Click to Open</p>
              <div className="book-shine"></div>
            </div>
            <div className="back">
              <div className="polaroid-content">
                <div className="image-container">
                  <img src={personal} className="book-image-full" alt="Our Story" />
                </div>
                <div className="photo-caption">15 Jul 2025</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: CRUMPLE PAPER GAME */}
      <section className="section game-section reveal-on-scroll">
        <h2 className="section-title">
          <span className="title-gradient">Drag kar ke hata papers ko!</span>
          <span className="title-underline"></span>
        </h2>
        <p className="game-hint">Drag the papers away to reveal your surprise</p>
        <div className="game-container">

          {/* Hidden Message - Only shows when showMessage is true */}
          <div className={`hidden-message-container ${showMessage ? 'visible' : ''}`}>
            <div className="hidden-message">
              <h1 className="birthday-message">
                Happy Birthday Kutte! <PartyPopper size={40} color="#cc241d" style={{display:'inline', verticalAlign:'middle'}} />
              </h1>
              <p className="birthday-submessage">
                Hope your day is as amazing as you are! <Heart size={24} color="#b16286" fill="#b16286" style={{display:'inline', verticalAlign:'middle'}} />
              </p>
            </div>
          </div>

          <div className="papers-container">
            {papers.map(paper => (
              !paper.removed && (
                <div
                  key={paper.id}
                  className={`crumpled-paper ${draggingId === paper.id ? 'dragging' : ''}`}
                  style={{
                    transform: `translate(${paper.x}px, ${paper.y}px) rotate(${paper.rotation}deg)`,
                    zIndex: draggingId === paper.id ? 1000 : papers.length - paper.id,
                  }}
                  onMouseDown={(e) => handleMouseDown(e, paper.id)}
                  onTouchStart={(e) => handleMouseDown(e, paper.id)}
                >
                  <div className="paper-texture"></div>
                  <span className="paper-text">{paper.text}</span>
                </div>
              )
            ))}
          </div>

          {showMessage && (
            <div className="confetti-container">
              {confetti.map(conf => (
                <div
                  key={conf.id}
                  className={`confetti ${conf.shape}`}
                  style={{
                    left: `${conf.x}%`,
                    animationDelay: `${conf.delay}s`,
                    animationDuration: `${conf.duration}s`,
                    width: `${conf.size}px`,
                    height: `${conf.size}px`
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* KINDER JOY EASTER EGG SECTION */}
      <section className="section egg-section reveal-on-scroll">
        <h2 className="section-title">
          <span className="title-gradient">Ek Surprise Aur!</span>
          <span className="title-underline"></span>
        </h2>
        <p className="section-subtitle">Click the Kinder Joy 🥚</p>

        <div className="egg-container">
          {!eggClicked ? (
            <div
              className="kinder-egg"
              onClick={handleEggClick}
            >
              <img
                src="https://cdn3d.iconscout.com/3d/premium/thumb/kinder-surprise-3d-icon-download-png-8529492.png"
                alt="Kinder Joy"
              />
            </div>
          ) : (
            <div className="egg-reveal fade-in">
              <img
                src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXA0MzEwa3ZpOHh0enMyeHI2bG9neXhic3RpN3E0MjNqaXdsemp2diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7bu12GHm4G5frn6U/giphy.gif"
                alt="Funny Reveal"
                className="reveal-gif"
              />
              <p className="warning-text">Bas kr, bhai gift already de diya hai. ab kuch ni hai idhar !!!!</p>
            </div>
          )}
        </div>
      </section>

      {/* SECTION: MEMORIES TIMELINE */}
      <section className="section timeline-section reveal-on-scroll">
        <h2 className="section-title">
          <span className="title-gradient">Our Journey so far...</span>
          <span className="title-underline"></span>
        </h2>

        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-icon"><Smile size={20} color="#b16286" /></div>
              <h3>First Meet</h3>
              <p>Ptaani kaise mil gye bencho!</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-icon"><MessageCircle size={20} color="#cc241d" /></div>
              <h3>First ladaai</h3>
              <p>Jub tune block kra tha.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-icon"><Music size={20} color="#d79921" /></div>
              <h3>Crazy Moments</h3>
              <p>Ldaai lfde aur bkchodi, That's it!</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-icon"><Heart size={20} color="#98971a" /></div>
              <h3>Best mitr</h3>
              <p>Yeah Yeah, Jub tk shadi ni hoti tb tk best friend.!</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: GALLERY */}
      <section className="section gallery-section reveal-on-scroll">
        <h2 className="section-title">
          <span className="title-gradient">Teri khud ki self obsessed pics</span>
          <span className="title-underline"></span>
        </h2>
        <div className="gallery-grid">
          <div className="gallery-item">
            <img src={img21} className="g-img" alt="Selfie 1" />
            <div className="gallery-overlay"><Sparkles color="#fff" /></div>
          </div>
          <div className="gallery-item wide">
            <img src={img12} className="g-img" alt="Selfie 2" />
            <div className="gallery-overlay"><Heart color="#fff" /></div>
          </div>
          <div className="gallery-item tall">
            <img src={img13} className="g-img" alt="Selfie 3" />
            <div className="gallery-overlay"><Star color="#fff" /></div>
          </div>
          <div className="gallery-item tall">
            <img src={img22} className="g-img" alt="Selfie 4" />
            <div className="gallery-overlay"><Camera color="#fff" /></div>
          </div>
          <div className="gallery-item">
            <img src={img15} className="g-img" alt="Selfie 5" />
            <div className="gallery-overlay"><Smile color="#fff" /></div>
          </div>
          <div className="gallery-item">
            <img src={img16} className="g-img" alt="Selfie 6" />
            <div className="gallery-overlay"><Sparkles color="#fff" /></div>
          </div>
          <div className="gallery-item">
            <img src={img20} className="g-img" alt="Selfie 7" />
            <div className="gallery-overlay"><Heart color="#fff" /></div>
          </div>
          <div className="gallery-item">
            <img src={img17} className="g-img" alt="Selfie 8" />
            <div className="gallery-overlay"><Star color="#fff" /></div>
          </div>
        </div>
      </section>

      {/* SECTION: FEEDBACK FORM */}
      <section className="footer-section reveal-on-scroll">
        <div className="form-card">
          <h3>"Kida lagya kutte ?"</h3>

          {/* Wrap inputs in a form tag with ref */}
          <form ref={form} onSubmit={sendEmail}>
            <textarea
              name="message" // This name must match the variable in EmailJS template {{message}}
              placeholder="Kripya apna exprience bhokhne ka kshat karien..."
              required
            ></textarea>

            <button className="submit-btn" type="submit" disabled={loading || sent}>
              <span>
                {loading ? "Sending..." : sent ? "Message Sent! ❤️" : "Submit Review"}
              </span>
              <span className="btn-shine"></span>
            </button>
          </form>

        </div>
        <p className="copyright">
          Created with 💖 by one and only ykyk-: Yadu
        </p>
      </section>
    </div>
  );
};

export default BirthdaySurprise;