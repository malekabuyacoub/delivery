"use client";
import React, { useRef } from "react";
import { Search, MapPin, Phone, Mail } from "lucide-react";
import logo from '../../logo.jpg';

export default function HomePage() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: direction === "left" ? -240 : 240, behavior: "smooth" });
    }
  };

  return (
    <div className="page" dir="rtl">
      <header className="topbar">
        <div className="container nav-wrap">
          <div className="brand">
            <img src={logo.src || logo} alt="دلڤري كريم" className="brand-icon" />
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
            loading="lazy"
          />
          <div className="hero-overlay" />

          <div className="container hero-content">
            <div className="badge">بنوصل السعادة لباب بيتك</div>
            <h1>
              توصيل سريع، <span className="accent">طعام طازج</span>
            </h1>
            <p className="sub">اطلب من مطاعمك المفضلة القريبة منك. وجبات ساخنة تصلك في دقائق، وليس ساعات.</p>

            <div className="search-wrap">
              <Search size={18} />
              <input type="text" placeholder="...ابحث عن مطاعم أو أطباق" />
              <button className="btn btn-primary">اطلب الآن</button>
            </div>

            <div className="hero-stats">
              <div>
                <strong>+500</strong>
                <span>مطعم</span>
              </div>
              <div>
                <strong>30 دقيقة</strong>
                <span>متوسط التوصيل</span>
              </div>
              <div>
                <strong>4.9★</strong>
                <span>تقييم المستخدمين</span>
              </div>
            </div>
          </div>

          <div className="bottom-fade" />
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-main">
          <div className="footer-brand">
            <h3>دلڤري كريم</h3>
            <p>خدمة توصيل محلية شخصية تركّز على السرعة والجودة والثقة.</p>
          </div>

          <div className="footer-contact">
            <div>
              <MapPin size={16} />
              <span>وسط المدينة</span>
            </div>
            <div>
              <Phone size={16} />
              <span dir="ltr">+962 7 9000 1212</span>
            </div>
            <div>
              <Mail size={16} />
              <span dir="ltr">hello@deliveryrider.com</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">© 2026 ديلفري كريم. جميع الحقوق محفوظة.</div>
      </footer>

      <style jsx>{`
        .page { color: #1a1a1a; background: #ffffff; font-family: 'Tajawal', system-ui, -apple-system, sans-serif; direction: rtl; }
        .container { width: min(1280px, 92%); margin-inline: auto; }
        .topbar { position: sticky; top: 0; z-index: 40; backdrop-filter: blur(10px); background: rgba(255,255,255,0.9); border-bottom: 1px solid rgba(0,0,0,0.04); }
        .nav-wrap { min-height: 72px; display:flex; align-items:center; justify-content:space-between; gap: 16px; }
        .brand { display:flex; align-items:center; gap:10px; font-weight:800; }
        .brand-icon { width:36px; height:36px; border-radius:12px; display:block; object-fit:cover; }
        .btn { border:0; border-radius:999px; cursor:pointer; font-weight:700; transition:0.18s ease; }
        .btn-primary { background:#f17302; color:#fff; padding:12px 20px; box-shadow: 0 12px 30px rgba(241,115,2,0.18); }

        .hero { position:relative; min-height:680px; display:grid; align-items:center; overflow:hidden; }
        .hero-bg { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; filter: saturate(0.95) contrast(0.9); }
        .hero-overlay { position:absolute; inset:0; background: linear-gradient(120deg, rgba(26,26,26,0.88), rgba(26,26,26,0.5)); }
        .hero-content { position:relative; z-index:1; color:#fff; padding:64px 0; max-width:640px; margin-inline-start: auto; margin-inline-end: 6vw; }
        .badge { display:inline-block; background: rgba(241,115,2,0.08); border: 1px solid rgba(241,115,2,0.18); color:#f17302; padding:8px 14px; border-radius:999px; font-weight:600; margin-bottom:18px; }
        h1 { margin:0 0 12px; font-size: clamp(2rem, 5vw, 4rem); line-height:1.05; }
        .accent { color:#f17302; }
        .sub { margin:12px 0 26px; color:#e6e6e6; }

        .search-wrap { display:grid; grid-template-columns:auto 1fr auto; gap:10px; background:#fff; color:#6b6b6b; border-radius:999px; padding:10px 14px; box-shadow: 0 18px 48px rgba(0,0,0,0.28); max-width:760px; }
        .search-wrap input { border:0; outline:none; font-size:1rem; color:#1a1a1a; background:transparent; }

        .hero-stats { margin-top:24px; display:grid; grid-template-columns:repeat(3, minmax(0,1fr)); gap:14px; }
        .hero-stats > div { background: rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.12); border-radius:14px; padding:12px; backdrop-filter: blur(6px); }
        .hero-stats strong { display:block; font-size:1.05rem; }
        .hero-stats span { font-size:0.85rem; color:#f3f3f3; }

        .bottom-fade { position:absolute; bottom:0; left:0; right:0; height:120px; background: linear-gradient(180deg, rgba(0,0,0,0) 0%, #fff 100%); pointer-events:none; }

        .footer { background:#1a1a1a; color:#f4f4f4; }
        .footer-main { padding:48px 0; display:flex; gap:20px; align-items:flex-start; justify-content:space-between; }
        .footer-brand h3 { margin:0 0 6px; }
        .footer-contact { display:flex; gap:14px; align-items:center; }
        .footer-bottom { border-top:1px solid rgba(255,255,255,0.04); color:#9f9f9f; text-align:center; padding:16px; }

        @media (max-width:900px) {
          .hero { min-height:620px; }
          .hero-content { margin-inline-end: 4vw; padding:40px 0; }
          .search-wrap { grid-template-columns:auto 1fr; }
          .hero-stats { grid-template-columns:1fr; }
          .footer-main { flex-direction:column; }
        }
      `}</style>
    </div>
  );
}
