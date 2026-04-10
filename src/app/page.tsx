"use client";
import { useRef } from "react";

// @ts-ignore - allow importing image asset
import logo from '../../logo.jpg';

// @ts-ignore - allow importing image asset
import pizza from '../../prodcut/pizza.jpg';

function Search({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function Star({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="m12 2.3 2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.9 6.2 20.2l1.1-6.5-4.7-4.6 6.5-.9L12 2.3z" />
    </svg>
  );
}

function Clock({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function ChevronLeft({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRight({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function Store({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 10h18" />
      <path d="M5 10V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3" />
      <path d="M4 10v9a1 1 0 0 0 1 1h3v-6h8v6h3a1 1 0 0 0 1-1v-9" />
    </svg>
  );
}

function ClipboardList({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="8" y="2" width="8" height="4" rx="1" />
      <path d="M9 4H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2" />
      <path d="M8 11h8" />
      <path d="M8 15h8" />
    </svg>
  );
}

function Bike({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="5.5" cy="17.5" r="3.5" />
      <circle cx="18.5" cy="17.5" r="3.5" />
      <path d="M5.5 17.5 9 9h4l2 4h3" />
      <path d="M9 9 8 6" />
      <path d="M14 9h2" />
    </svg>
  );
}

function MapPin({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 21s6-5.4 6-11a6 6 0 1 0-12 0c0 5.6 6 11 6 11z" />
      <circle cx="12" cy="10" r="2" />
    </svg>
  );
}

function Phone({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.3 19.3 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.6a2 2 0 0 1-.5 2.1L8 9.7a16 16 0 0 0 6.3 6.3l1.3-1.3a2 2 0 0 1 2.1-.5c.8.3 1.7.6 2.6.7A2 2 0 0 1 22 16.9z" />
    </svg>
  );
}

function Mail({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

const categories = [
    { name: "بيتزا", icon: "🍕" },
    { name: "برجر", icon: "🍔" },
    { name: "مشروبات", icon: "🥤" },
    { name: "بقالة", icon: "🛒" },
    { name: "حلويات", icon: "🍰" },
    { name: "صحي", icon: "🥗" },
  ];

  const restaurants = [
    {
      name: "بيتزا ميمعة",
      image: pizza.src ?? (pizza as any),
      rating: 4.9,
      time: "20-30 دقيقة",
    },
    {
      name: "برجر المدينة",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=80",
      rating: 4.8,
      time: "15-25 دقيقة",
    },
    {
      name: "مطبخ الطبق الطازج",
      image:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80",
      rating: 4.7,
      time: "18-28 دقيقة",
    },
    {
      name: "سوبرماركت باسل",
      image:
        "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80",
      rating: 4.9,
      time: "25-35 دقيقة",
    },
  ];

  const steps = [
    {
      icon: Store,
      title: "اختر المطعم",
      description: "اختر مطعمك المحلي المفضل خلال ثوانٍ.",
    },
    {
      icon: ClipboardList,
      title: "أكمل الطلب",
      description: "اختر وجباتك وأكد طلبك بسرعة.",
    },
    {
      icon: Bike,
      title: "توصيل سريع",
      description: "مندوبنا يوصّل طلبك ساخنًا وطازجًا.",
    },
  ];

  const footerLinks = ["الرئيسية", "المطاعم", "من نحن", "الدعم", "الخصوصية"];

  export default function HomePage() {
    const scrollRef = useRef<HTMLDivElement | null>(null);

    const scroll = (dir: "left" | "right") => {
      if (!scrollRef.current) return;
      scrollRef.current.scrollBy({
        left: dir === "left" ? -280 : 280,
        behavior: "smooth",
      });
    };

    return (
      <div className="page" dir="rtl">
        <header className="topbar">
          <div className="container nav-wrap">
            <div className="brand">
              <img src={logo.src ?? (logo as any)} alt="دلڤري كريم" className="brand-icon" />
              <span>
                دلڤري <span className="text-[#F17302]">كريم</span>
              </span>
            </div>

            <nav className="nav-links">
              <a href="#">الرئيسية</a>
              <a href="#">الفئات</a>
              <a href="#">العروض</a>
            </nav>

            <button className="btn btn-primary">اطلب الآن</button>
          </div>
        </header>

        <main>
          <section className="hero">
            <img
              src="https://mgx-backend-cdn.metadl.com/generate/images/1104450/2026-04-09/83fbdfad-224b-4a13-b306-dbaed16fedbe.png"
              alt="تشكيلة طعام لذيذة"
              className="hero-bg"
            />
            <div className="hero-overlay" />

            <div className="container hero-content">
              <p className="eyebrow">محلي. سريع. موثوق.</p>
              <h1>توصيل سريع، <span className="accent">طعام طازج</span></h1>
              <p className="sub">
                اطلب من مطاعمك المفضلة القريبة منك
              </p>

              <div className="search-wrap">
                <Search size={20} />
                <input
                  type="text"
                  placeholder="ابحث عن مطاعم أو وجبات..."
                />
                <button className="btn btn-primary">اطلب الآن</button>
              </div>

              <div className="hero-stats">
                <div>
                  <strong>10 دقائق</strong>
                  <span>متوسط استجابة المندوب</span>
                </div>
                <div>
                  <strong>4.9</strong>
                  <span>تقييم العملاء</span>
                </div>
                <div>
                  <strong>محلي</strong>
                  <span>خدمة توصيل شخصية</span>
                </div>
              </div>
            </div>
          </section>

          <section className="section">
            <div className="container">
              <div className="section-head">
                <div>
                  <h2>الفئات الشائعة</h2>
                  <p>وصول سريع لأصنافك المفضلة.</p>
                </div>
                <div className="scroll-actions">
                  <button onClick={() => scroll("left")}
   className="icon-btn" aria-label="تمرير لليسار">
                    <ChevronLeft size={18} />
                  </button>
                  <button onClick={() => scroll("right")}
   className="icon-btn" aria-label="تمرير لليمين">
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>

              <div className="category-row" ref={scrollRef}>
                {categories.map((cat) => (
                  <article className="category-card" key={cat.name}>
                    <div className="emoji">{cat.icon}</div>
                    <h3>{cat.name}</h3>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="section section-muted">
            <div className="container">
              <div className="section-head">
                <div>
                  <h2>مطاعم مميزة</h2>
                  <p>مطاعم محلية مختارة مع توصيل سريع.</p>
                </div>
              </div>

              <div className="grid">
                {restaurants.map((item) => (
                  <article className="restaurant-card" key={item.name}>
                    <img src={item.image} alt={item.name} />
                    <div className="restaurant-body">
                      <h3>{item.name}</h3>
                      <div className="meta">
                        <span>
                          <Star size={14} /> {item.rating}
                        </span>
                        <span>
                          <Clock size={14} /> {item.time}
                        </span>
                      </div>
                      <button className="btn btn-soft">اطلب</button>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="section">
            <div className="container">
              <div className="section-head center">
                <h2>كيف تعمل الخدمة</h2>
                <p>بسيطة، سريعة، وموثوقة في 3 خطوات.</p>
              </div>

              <div className="steps-grid">
                {steps.map((step) => {
                  const Icon = step.icon;
                  return (
                    <article className="step-card" key={step.title}>
                      <div className="step-icon">
                        <Icon size={22} />
                      </div>
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>

          
        </main>

        <footer className="footer">
          <div className="container footer-main">
            <div className="footer-brand">
              <h3>دلڤري كريم</h3>
              <p>
                خدمة توصيل محلية شخصية تركّز على السرعة والجودة والثقة.
              </p>
            </div>

            <div className="footer-links">
              {footerLinks.map((link) => (
                <a href="#" key={link}>
                  {link}
                </a>
              ))}
            </div>

            <div className="footer-contact">
              <div>
                <MapPin size={16} />
                <span>كفل حارس والقرى المجاورة</span>
              </div>
              <div>
                <Phone size={16} />
                <span dir="ltr">+972 598363602</span>
              </div>
              
            </div>

            <div className="socials">
              <a href="https://wa.me/972598363602" aria-label="واتساب" target="_blank" rel="noreferrer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M20.52 3.48A11.95 11.95 0 0012 .5 11.99 11.99 0 000 12c0 2.11.56 4.09 1.62 5.84L0 24l6.36-1.61A11.95 11.95 0 0012 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.48-8.52zM12 21.5a9.5 9.5 0 01-4.93-1.41l-.35-.21L4.5 20.5l1.6-2.19-.22-.35A9.46 9.46 0 012.5 12 9.5 9.5 0 1121.5 12 9.45 9.45 0 0112 21.5z" />
                  <path d="M17.78 14.14c-.28-.14-1.66-.82-1.92-.91-.26-.09-.45-.14-.64.14-.19.28-.73.91-.89 1.1-.16.19-.32.21-.6.07a7.24 7.24 0 01-2.14-1.32 8.05 8.05 0 01-1.5-1.85c-.16-.28 0-.43.12-.57.12-.12.26-.32.38-.48.13-.16.17-.28.26-.47.08-.19.04-.36-.02-.5-.07-.14-.64-1.54-.88-2.11-.23-.55-.47-.47-.64-.48-.16 0-.34 0-.52 0-.19 0-.5.07-.76.36-.26.29-1 1-1 2.44 0 1.44 1.03 2.84 1.17 3.04.14.2 2.02 3.33 4.9 4.67 2.16 1.04 2.96 1.06 3.21 1.05.25-.01.81-.31.93-.61.12-.3.12-.56.09-.61-.03-.05-.11-.09-.23-.15z" />
                </svg>
              </a>
              <a href="https://www.facebook.com/share/18WyPLC9Xs/?mibextid=wwXIfr" aria-label="فيسبوك" target="_blank" rel="noreferrer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M22 12a10 10 0 10-11.5 9.95V14.9h-2.2V12h2.2V9.8c0-2.17 1.3-3.37 3.29-3.37.95 0 1.95.17 1.95.17v2.15h-1.1c-1.08 0-1.42.67-1.42 1.36V12h2.42l-.39 2.9h-2.03v7.05A10 10 0 0022 12z" />
                </svg>
              </a>
            </div>
          </div>

            <div className="footer-bottom">
            © 2026 دلڤري كريم. جميع الحقوق محفوظة.
          </div>
        </footer>

        <style jsx>{`
          .page {
            color: #1a1a1a;
            background: #ffffff;
            font-family: Inter, Poppins, system-ui, -apple-system, sans-serif;
            direction: rtl;
            text-align: right;
          }

          .container {
            width: min(1120px, 92%);
            margin-inline: auto;
          }

          .topbar {
            position: sticky;
            top: 0;
            z-index: 40;
            backdrop-filter: blur(10px);
            background: rgba(255, 255, 255, 0.9);
            border-bottom: 1px solid #f0f0f0;
          }

          .nav-wrap {
            min-height: 72px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 16px;
          }

          .brand {
            display: flex;
            align-items: center;
            gap: 10px;
            font-weight: 800;
            letter-spacing: 0.2px;
          }

          .brand span span {
            color: #f17302;
          }

          .brand-icon {
            width: 36px;
            height: 36px;
            border-radius: 12px;
            display: block;
            object-fit: cover;
          }

          .nav-links {
            display: none;
            gap: 28px;
          }

          .nav-links a {
            color: #4d4d4d;
            text-decoration: none;
            font-weight: 500;
          }

          .nav-links a:hover {
            color: #f17302;
          }

          .btn {
            border: 0;
            border-radius: 999px;
            cursor: pointer;
            font-weight: 700;
            transition: 0.2s ease;
          }

          .btn-primary {
            background: #f17302;
            color: #fff;
            padding: 12px 20px;
            box-shadow: 0 10px 24px rgba(241, 115, 2, 0.22);
          }

          .btn-primary:hover {
            transform: translateY(-1px);
            background: #dc6802;
          }

          .hero {
            position: relative;
            min-height: 680px;
            display: grid;
            align-items: center;
            overflow: hidden;
          }

          .hero-bg {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .hero-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(120deg, rgba(26, 26, 26, 0.88), rgba(26, 26, 26, 0.5));
          }

          .hero-content {
            position: relative;
            z-index: 1;
            color: #fff;
            padding: 64px 0;
          }

          .eyebrow {
            margin: 0 0 10px;
            color: #ffd2ae;
            font-weight: 600;
            font-size: 0.95rem;
          }

          h1 {
            margin: 0;
            font-size: clamp(2rem, 5vw, 4rem);
            line-height: 1.1;
            letter-spacing: -0.02em;
          }
          .accent {
            color: #F17302;
          }

          .sub {
            margin: 14px 0 28px;
            color: #ececec;
            font-size: clamp(1rem, 2vw, 1.2rem);
            max-width: 560px;
          }

          .search-wrap {
            display: grid;
            grid-template-columns: auto 1fr auto;
            align-items: center;
            gap: 10px;
            background: #fff;
            color: #8a8a8a;
            border-radius: 999px;
            padding: 8px 10px 8px 16px;
            box-shadow: 0 14px 36px rgba(0, 0, 0, 0.2);
            max-width: 740px;
          }

          .search-wrap input {
            border: 0;
            outline: none;
            font-size: 1rem;
            color: #1a1a1a;
            background: transparent;
            min-width: 0;
          }

          .hero-stats {
            margin-top: 24px;
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 12px;
          }

          .hero-stats > div {
            background: rgba(255, 255, 255, 0.12);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 14px;
            padding: 12px;
            backdrop-filter: blur(6px);
          }

          .hero-stats strong {
            display: block;
            font-size: 1rem;
          }

          .hero-stats span {
            font-size: 0.82rem;
            color: #f3f3f3;
          }

          .section {
            padding: 74px 0;
          }

          .section-muted {
            background: #f5f5f5;
          }

          .section-head {
            margin-bottom: 28px;
            display: flex;
            align-items: end;
            justify-content: space-between;
            gap: 16px;
          }

          .section-head h2 {
            margin: 0;
            font-size: clamp(1.4rem, 3vw, 2rem);
          }

          .section-head p {
            margin: 8px 0 0;
            color: #6f6f6f;
          }

          .section-head.center {
            text-align: center;
            justify-content: center;
          }

          .scroll-actions {
            display: flex;
            gap: 10px;
          }

          .icon-btn {
            width: 38px;
            height: 38px;
            border-radius: 999px;
            border: 1px solid #dddddd;
            background: #fff;
            display: grid;
            place-items: center;
            cursor: pointer;
          }

          .icon-btn:hover {
            background: #f17302;
            color: #fff;
            border-color: #f17302;
          }

          .category-row {
            display: flex;
            gap: 14px;
            overflow-x: auto;
            padding-bottom: 8px;
            scrollbar-width: none;
          }

          .category-row::-webkit-scrollbar {
            display: none;
          }

          .category-card {
            min-width: 148px;
            border: 1px solid #ececec;
            border-radius: 18px;
            background: #fff;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
            text-align: center;
            padding: 20px 14px;
          }

          .category-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 14px 28px rgba(0, 0, 0, 0.08);
          }

          .emoji {
            font-size: 2rem;
            margin-bottom: 8px;
          }

          .category-card h3 {
            margin: 0;
            font-size: 1rem;
          }

          .grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .restaurant-card {
            border-radius: 18px;
            overflow: hidden;
            background: #fff;
            border: 1px solid #e8e8e8;
            box-shadow: 0 12px 26px rgba(0, 0, 0, 0.06);
          }

          .restaurant-card img {
            width: 100%;
            height: 190px;
            object-fit: cover;
          }

          .restaurant-body {
            padding: 16px;
          }

          .restaurant-body h3 {
            margin: 0 0 10px;
            font-size: 1.05rem;
          }

          .meta {
            display: flex;
            justify-content: space-between;
            color: #686868;
            margin-bottom: 14px;
            font-size: 0.9rem;
          }

          .meta span {
            display: inline-flex;
            align-items: center;
            gap: 5px;
          }

          .btn-soft {
            background: #fff2e8;
            color: #f17302;
            padding: 9px 16px;
            border-radius: 10px;
          }

          .btn-soft:hover {
            background: #f17302;
            color: #fff;
          }

          .steps-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 14px;
          }

          .step-card {
            border: 1px solid #ededed;
            border-radius: 18px;
            padding: 22px;
            background: #fff;
            box-shadow: 0 10px 22px rgba(0, 0, 0, 0.04);
          }

          .step-icon {
            width: 46px;
            height: 46px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            background: #fff2e8;
            color: #f17302;
            margin-bottom: 10px;
          }

          .step-card h3 {
            margin: 0;
          }

          .step-card p {
            margin: 8px 0 0;
            color: #666;
            line-height: 1.6;
          }

          .promo-wrap {
            padding: 0 0 74px;
            background: #f5f5f5;
          }

          .promo {
            border-radius: 20px;
            background: linear-gradient(135deg, #f17302, #de6500);
            color: #fff;
            padding: 24px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 18px;
            box-shadow: 0 16px 30px rgba(241, 115, 2, 0.25);
          }

          .promo-left {
            display: flex;
            align-items: flex-start;
            gap: 12px;
          }

          .promo-left h3 {
            margin: 0;
            font-size: 1.3rem;
          }

          .promo-left p {
            margin: 6px 0 0;
            color: #ffe3cc;
          }

          .btn-white {
            background: #fff;
            color: #f17302;
            padding: 12px 20px;
            white-space: nowrap;
          }

          .footer {
            background: #1a1a1a;
            color: #f4f4f4;
          }

          .footer-main {
            padding: 54px 0 34px;
            display: grid;
            grid-template-columns: 1.5fr 1fr 1fr auto;
            gap: 22px;
            align-items: start;
          }

          .footer-brand h3 {
            margin: 0 0 10px;
            font-size: 1.1rem;
          }

          .footer-brand p {
            margin: 0;
            color: #bbbbbb;
            max-width: 290px;
          }

          .footer-links {
            display: grid;
            gap: 9px;
          }

          .footer-links a {
            color: #cfcfcf;
            text-decoration: none;
          }

          .footer-links a:hover {
            color: #f17302;
          }

          .footer-contact {
            display: grid;
            gap: 10px;
          }

          .footer-contact div {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: #c4c4c4;
            font-size: 0.92rem;
          }

          .socials {
            display: flex;
            gap: 8px;
          }

          .socials a {
            width: 34px;
            height: 34px;
            border-radius: 999px;
            display: grid;
            place-items: center;
            background: #2d2d2d;
            color: #fff;
          }

          .socials a:hover {
            background: #f17302;
          }

          .footer-bottom {
            border-top: 1px solid #2c2c2c;
            color: #9f9f9f;
            text-align: center;
            padding: 16px;
            font-size: 0.88rem;
          }

          @media (max-width: 900px) {
            .nav-links {
              display: none;
            }

            .hero {
              min-height: 610px;
            }

            .search-wrap {
              grid-template-columns: auto 1fr;
              row-gap: 10px;
              border-radius: 18px;
              padding: 12px;
            }

            .search-wrap .btn {
              grid-column: 1 / -1;
              width: 100%;
            }

            .hero-stats {
              grid-template-columns: 1fr;
            }

            .promo {
              flex-direction: column;
              align-items: stretch;
            }

            .btn-white {
              width: 100%;
            }

            .footer-main {
              grid-template-columns: 1fr;
            }
          }

          @media (min-width: 901px) {
            .nav-links {
              display: flex;
            }

            .grid {
              grid-template-columns: repeat(2, minmax(0, 1fr));
            }

            .steps-grid {
              grid-template-columns: repeat(3, minmax(0, 1fr));
            }
          }

          @media (min-width: 1180px) {
            .grid {
              grid-template-columns: repeat(4, minmax(0, 1fr));
            }
          }
        `}</style>
      </div>
    );
  }
