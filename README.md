<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>True Apex Ventures – Agriculture Exports & Bio Fertilizers</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="description" content="True Apex Ventures is an export-focused agriculture company supplying quality agri products and advanced bio fertilizers to global partners." />

  <style>
    :root {
      --primary: #14532d;
      --primary-dark: #052e16;
      --accent: #fbbf24;
      --accent-soft: #fef3c7;
      --text: #111827;
      --muted: #6b7280;
      --bg: #f3f4f6;
      --white: #ffffff;
      --border-subtle: #e5e7eb;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      color: var(--text);
      background-color: var(--bg);
      line-height: 1.6;
    }

    a {
      text-decoration: none;
      color: inherit;
    }

    img {
      max-width: 100%;
      display: block;
    }

    .container {
      max-width: 1140px;
      margin: 0 auto;
      padding: 0 1.25rem;
    }

    /* Header & Navigation */
    header {
      background:
        linear-gradient(135deg, rgba(5, 46, 22, 0.94), rgba(22, 101, 52, 0.96)),
        url("https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1600&q=80")
          center/cover no-repeat;
      color: var(--white);
      position: relative;
      overflow: hidden;
    }

    header::after {
      content: "";
      position: absolute;
      inset: 0;
      background: radial-gradient(circle at top left, rgba(251, 191, 36, 0.28), transparent 55%);
      pointer-events: none;
    }

    .nav {
      position: relative;
      z-index: 1;
      padding: 1.25rem 0 0.75rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1.5rem;
    }

    .logo {
      display: flex;
      align-items: center;
      gap: 0.55rem;
      font-weight: 700;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      font-size: 0.95rem;
    }

    .logo-mark {
      width: 34px;
      height: 34px;
      border-radius: 999px;
      border: 2px solid var(--accent);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.85rem;
      background: rgba(15, 23, 42, 0.85);
    }

    .nav-links {
      display: flex;
      gap: 1.75rem;
      font-size: 0.9rem;
    }

    .nav-links a {
      opacity: 0.9;
    }

    .nav-links a:hover {
      opacity: 1;
    }

    .nav-cta {
      padding: 0.6rem 1.2rem;
      border-radius: 999px;
      background-color: var(--accent);
      color: #1f2933;
      font-weight: 600;
      font-size: 0.9rem;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.18);
      white-space: nowrap;
    }

    /* Hero */
    .hero {
      position: relative;
      z-index: 1;
      padding: 4.2rem 0 4rem;
    }

    .hero-grid {
      display: grid;
      grid-template-columns: minmax(0, 1.6fr) minmax(0, 1.05fr);
      gap: 2.8rem;
      align-items: center;
    }

    .hero-kicker {
      text-transform: uppercase;
      font-size: 0.78rem;
      letter-spacing: 0.18em;
      color: #bbf7d0;
      font-weight: 600;
      margin-bottom: 0.85rem;
    }

    .hero h1 {
      font-size: 2.5rem;
      line-height: 1.22;
      margin-bottom: 1rem;
      max-width: 32rem;
    }

    .hero h1 span {
      color: var(--accent);
    }

    .hero-subtitle {
      max-width: 34rem;
      font-size: 0.98rem;
      color: #d1fae5;
      margin-bottom: 1.6rem;
    }

    .hero-badges {
      display: flex;
      flex-wrap: wrap;
      gap: 0.7rem;
      margin-bottom: 1.7rem;
    }

    .badge {
      padding: 0.32rem 0.9rem;
      border-radius: 999px;
      border: 1px solid rgba(255, 255, 255, 0.25);
      font-size: 0.78rem;
      backdrop-filter: blur(8px);
      background: radial-gradient(circle at top left, rgba(251, 191, 36, 0.15), rgba(15, 23, 42, 0.7));
    }

    .hero-cta-group {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      align-items: center;
    }

    .btn-primary {
      background-color: var(--accent);
      color: #111827;
      padding: 0.85rem 1.6rem;
      border-radius: 999px;
      font-weight: 600;
      font-size: 0.95rem;
      border: none;
      cursor: pointer;
      box-shadow: 0 12px 32px rgba(0, 0, 0, 0.35);
    }

    .btn-outline {
      background: transparent;
      border-radius: 999px;
      border: 1px solid rgba(255, 255, 255, 0.7);
      color: var(--white);
      padding: 0.78rem 1.4rem;
      font-size: 0.9rem;
      font-weight: 500;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 0.45rem;
    }

    .btn-outline span {
      font-size: 1.1rem;
      line-height: 0;
    }

    .hero-meta {
      font-size: 0.78rem;
      color: #dcfce7;
      opacity: 0.92;
    }

    /* Hero card */
    .hero-card {
      background-color: rgba(15, 23, 42, 0.86);
      border-radius: 1.3rem;
      padding: 1.9rem 1.6rem;
      box-shadow: 0 26px 60px rgba(0, 0, 0, 0.55);
      backdrop-filter: blur(18px);
      border: 1px solid rgba(148, 163, 184, 0.45);
    }

    .hero-card-header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 0.75rem;
      margin-bottom: 1.15rem;
    }

    .hero-card h2 {
      font-size: 1.05rem;
      margin-bottom: 0.25rem;
      color: #e5e7eb;
    }

    .hero-card p {
      font-size: 0.85rem;
      color: #d1d5db;
    }

    .hero-card-logo {
      width: 40px;
      height: 40px;
      border-radius: 999px;
      border: 1px solid rgba(251, 191, 36, 0.8);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.85rem;
      font-weight: 600;
      background: linear-gradient(135deg, #064e3b, #10b981);
      color: #fef3c7;
    }

    .key-stats {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 0.75rem;
      margin-bottom: 1.35rem;
      font-size: 0.78rem;
      color: #e5e7eb;
    }

    .key-stat-label {
      opacity: 0.8;
    }

    .key-stat-value {
      font-weight: 600;
      font-size: 0.9rem;
    }

    .hero-form label {
      display: block;
      font-size: 0.78rem;
      margin-bottom: 0.3rem;
      color: #e5e7eb;
    }

    .hero-form input,
    .hero-form select,
    .hero-form textarea {
      width: 100%;
      border-radius: 0.5rem;
      border: 1px solid rgba(148, 163, 184, 0.95);
      background-color: rgba(15, 23, 42, 0.94);
      color: var(--white);
      font-size: 0.85rem;
      padding: 0.58rem 0.7rem;
      margin-bottom: 0.7rem;
      outline: none;
    }

    .hero-form textarea {
      min-height: 72px;
      resize: vertical;
    }

    .hero-form input::placeholder,
    .hero-form textarea::placeholder {
      color: #9ca3af;
      font-size: 0.8rem;
    }

    .hero-form button {
      width: 100%;
      margin-top: 0.25rem;
    }

    .hero-form-note {
      margin-top: 0.4rem;
      font-size: 0.72rem;
      color: #9ca3af;
    }

    /* Sections */
    .section {
      padding: 3.7rem 0 0;
    }

    .section-header {
      max-width: 46rem;
      margin-bottom: 2.1rem;
    }

    .section-kicker {
      text-transform: uppercase;
      font-size: 0.78rem;
      letter-spacing: 0.18em;
      color: var(--primary);
      font-weight: 600;
      margin-bottom: 0.4rem;
    }

    .section-header h2 {
      font-size: 1.65rem;
      margin-bottom: 0.55rem;
    }

    .section-header p {
      font-size: 0.92rem;
      color: var(--muted);
    }

    .grid-3 {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 1.8rem;
    }

    .card {
      background-color: var(--white);
      border-radius: 1rem;
      padding: 1.45rem 1.35rem 1.55rem;
      box-shadow: 0 18px 40px rgba(15, 23, 42, 0.06);
      border: 1px solid var(--border-subtle);
      position: relative;
      overflow: hidden;
    }

    .card::before {
      content: "";
      position: absolute;
      inset-inline-end: -30px;
      inset-block-start: -30px;
      width: 80px;
      height: 80px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(251, 191, 36, 0.16), transparent 60%);
      pointer-events: none;
    }

    .pill {
      display: inline-flex;
      align-items: center;
      padding: 0.18rem 0.65rem;
      border-radius: 999px;
      background-color: #ecfdf3;
      color: #166534;
      font-size: 0.7rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      margin-bottom: 0.75rem;
    }

    .pill-alt {
      background-color: #fef3c7;
      color: #92400e;
    }

    .pill-blue {
      background-color: #eff6ff;
      color: #1d4ed8;
    }

    .card h3 {
      font-size: 1rem;
      margin-bottom: 0.4rem;
    }

    .card p {
      font-size: 0.87rem;
      color: var(--muted);
      margin-bottom: 0.8rem;
    }

    ul.feature-list {
      list-style: none;
      margin-top: 0.25rem;
      font-size: 0.82rem;
      color: var(--muted);
    }

    ul.feature-list li {
      position: relative;
      padding-left: 1.1rem;
      margin-bottom: 0.3rem;
    }

    ul.feature-list li::before {
      content: "•";
      position: absolute;
      left: 0;
      color: var(--primary);
      font-size: 1.1rem;
      line-height: 1;
    }

    .section-visual-row {
      display: grid;
      grid-template-columns: minmax(0, 1.15fr) minmax(0, 1fr);
      gap: 2.3rem;
      align-items: center;
      margin-top: 3rem;
    }

    .image-frame {
      position: relative;
      border-radius: 1.4rem;
      overflow: hidden;
      box-shadow: 0 22px 50px rgba(15, 23, 42, 0.2);
    }

    .image-frame img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transform: scale(1.02);
    }

    .image-caption {
      position: absolute;
      left: 1.1rem;
      bottom: 1.1rem;
      padding: 0.55rem 0.9rem;
      border-radius: 999px;
      background-color: rgba(15, 23, 42, 0.8);
      color: #e5e7eb;
      font-size: 0.78rem;
      display: inline-flex;
      align-items: center;
      gap: 0.45rem;
      backdrop-filter: blur(8px);
    }

    .image-caption-dot {
      width: 8px;
      height: 8px;
      border-radius: 999px;
      background: #22c55e;
    }

    .two-column {
      display: grid;
      grid-template-columns: minmax(0, 1.2fr) minmax(0, 1.05fr);
      gap: 2.3rem;
      align-items: flex-start;
    }

    .highlights {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 0.95rem;
      margin-top: 0.9rem;
    }

    .highlight {
      background-color: var(--white);
      border-radius: 0.9rem;
      padding: 0.95rem 0.95rem;
      border: 1px dashed #d1d5db;
      font-size: 0.8rem;
      color: var(--muted);
    }

    .highlight strong {
      display: block;
      font-size: 0.86rem;
      color: var(--text);
      margin-bottom: 0.18rem;
    }

    .markets {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 0.7rem;
      margin-top: 0.9rem;
      font-size: 0.82rem;
    }

    .market-tag {
      border-radius: 999px;
      padding: 0.38rem 0.75rem;
      background-color: #ecfeff;
      color: #0369a1;
      border: 1px solid #bae6fd;
      text-align: center;
      white-space: nowrap;
    }

    .clients-strip {
      margin-top: 2.4rem;
      padding: 0.85rem 1.2rem;
      border-radius: 1rem;
      background: linear-gradient(to right, #dcfce7, #fef9c3);
      display: flex;
      flex-wrap: wrap;
      gap: 1.2rem;
      align-items: center;
      justify-content: space-between;
      font-size: 0.8rem;
      color: #166534;
    }

    .footer {
      margin-top: 3.7rem;
      padding: 2.4rem 0 2.6rem;
      background-color: #020617;
      color: #9ca3af;
    }

    .footer-inner {
      display: grid;
      grid-template-columns: minmax(0, 1.5fr) minmax(0, 1.1fr);
      gap: 2.3rem;
      align-items: flex-start;
      font-size: 0.85rem;
    }

    .footer-logo {
      display: flex;
      align-items: center;
      gap: 0.55rem;
      margin-bottom: 0.7rem;
      color: #e5e7eb;
    }

    .footer-logo .logo-mark {
      border-color: #4ade80;
      background: radial-gradient(circle at top left, #22c55e, #16a34a);
    }

    .footer p {
      max-width: 26rem;
    }

    .footer-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 1.4rem;
    }

    .footer-heading {
      font-size: 0.86rem;
      font-weight: 600;
      color: #e5e7eb;
      margin-bottom: 0.45rem;
    }

    .footer ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .footer li {
      margin-bottom: 0.28rem;
    }

    .footer a {
      color: #e5e7eb;
      font-size: 0.82rem;
    }

    .footer a:hover {
      text-decoration: underline;
    }

    .footer-bottom {
      margin-top: 1.85rem;
      border-top: 1px solid #111827;
      padding-top: 0.95rem;
      font-size: 0.78rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 0.8rem;
    }

    /* Floating contact bar */
    .floating-contact {
      position: fixed;
      left: 50%;
      bottom: 16px;
      transform: translateX(-50%);
      display: flex;
      gap: 0.75rem;
      z-index: 999;
    }

    .floating-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.4rem;
      padding: 0.6rem 1.1rem;
      border-radius: 999px;
      color: #ffffff;
      font-size: 0.88rem;
      font-weight: 600;
      box-shadow: 0 14px 30px rgba(15, 23, 42, 0.35);
      cursor: pointer;
      border: none;
      text-decoration: none;
      white-space: nowrap;
    }

    .floating-btn span.icon {
      font-size: 1.1rem;
      line-height: 1;
    }

    .floating-btn.whatsapp {
      background-color: #22c55e;
    }

    .floating-btn.call {
      background-color: #0ea5e9;
    }

    @media (max-width: 640px) {
      .floating-contact {
        bottom: 12px;
        flex-direction: column;
        align-items: center;
      }
    }

    @media (max-width: 900px) {
      .hero-grid {
        grid-template-columns: minmax(0, 1fr);
        padding-top: 0.6rem;
      }

      .hero-card {
        margin-top: 0.7rem;
      }

      .grid-3 {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      .section-visual-row {
        grid-template-columns: minmax(0, 1fr);
      }

      .two-column {
        grid-template-columns: minmax(0, 1fr);
      }

      .markets {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      .footer-inner {
        grid-template-columns: minmax(0, 1fr);
      }
    }

    @media (max-width: 640px) {
      .nav {
        flex-direction: column;
        align-items: flex-start;
      }

      .nav-links {
        display: none;
      }

      .hero {
        padding: 3.1rem 0 3rem;
      }

      .hero h1 {
        font-size: 2.05rem;
      }

      .grid-3 {
        grid-template-columns: minmax(0, 1fr);
      }

      .highlights {
        grid-template-columns: minmax(0, 1fr);
      }

      .markets {
        grid-template-columns: minmax(0, 1fr);
      }

      .clients-strip {
        border-radius: 1rem;
      }
    }
  </style>
</head>
<body>
  <!-- HERO -->
  <header id="top">
    <div class="container">
      <div class="nav">
        <div class="logo">
          <div class="logo-mark">TA</div>
          <div>True Apex Ventures</div>
        </div>
        <nav class="nav-links">
          <a href="#about">About</a>
          <a href="#products">Agri Products</a>
          <a href="#bio">Bio Fertilizers</a>
          <a href="#markets">Markets</a>
        </nav>
        <a href="#contact" class="nav-cta">Request Export Quote</a>
      </div>

      <section class="hero">
        <div class="hero-grid">
          <div>
            <div class="hero-kicker">Export-focused agriculture partner</div>
            <h1>
              Reliable agri exports and bio fertilizers for <span>growth-ready markets</span>
            </h1>
            <p class="hero-subtitle">
              True Apex Ventures connects growers and distributors with consistent export-grade agriculture products
              and science-backed bio fertilizers designed for sustainable yield and resilient soil health.
            </p>
            <div class="hero-badges">
              <div class="badge">End-to-end export documentation</div>
              <div class="badge">Residue-compliant sourcing</div>
              <div class="badge">Program-based input support</div>
            </div>
            <div class="hero-cta-group">
              <button class="btn-primary" onclick="document.getElementById('contact').scrollIntoView({behavior:'smooth'})">
                Share your requirement
              </button>
              <button class="btn-outline" onclick="document.getElementById('products').scrollIntoView({behavior:'smooth'})">
                <span>⟶</span> View key product lines
              </button>
              <span class="hero-meta">
                Response within 1 business day for export and distributor enquiries.
              </span>
            </div>
          </div>

          <aside class="hero-card" id="contact">
            <div class="hero-card-header">
              <div>
                <h2>Tell us what you need</h2>
                <p>
                  Share your target market, product specs, and shipment volumes for a structured export proposal.
                </p>
              </div>
              <div class="hero-card-logo">TA</div>
            </div>

            <div class="key-stats">
              <div>
                <div class="key-stat-label">Product focus</div>
                <div class="key-stat-value">Agri commodities & bio fertilizers</div>
              </div>
              <div>
                <div class="key-stat-label">Engagements</div>
                <div class="key-stat-value">Bulk & long-term contracts</div>
              </div>
              <div>
                <div class="key-stat-label">Support</div>
                <div class="key-stat-value">End-to-end export support</div>
              </div>
            </div>

            <!-- FORM sending to WhatsApp -->
            <form class="hero-form" id="enquiryForm">
              <label for="name">Full name*</label>
              <input id="name" name="name" type="text" placeholder="Your name" required />

              <label for="company">Company / Organization*</label>
              <input id="company" name="company" type="text" placeholder="Import house, distributor, FPO, etc." required />

              <label for="email">Work email*</label>
              <input id="email" name="email" type="email" placeholder="name@company.com" required />

              <label for="market">Target market*</label>
              <select id="market" name="market" required>
                <option value="">Select region</option>
                <option value="Middle East & GCC">Middle East & GCC</option>
                <option value="South & South East Asia">South & South East Asia</option>
                <option value="Africa">Africa</option>
                <option value="Europe">Europe</option>
                <option value="Americas">Americas</option>
                <option value="India (domestic)">India (domestic)</option>
              </select>

              <label for="requirement">Requirement overview*</label>
              <textarea id="requirement" name="requirement" placeholder="Agri products / bio fertilizers, approximate volume, shipment timelines..." required></textarea>

              <button type="submit" class="btn-primary">Submit enquiry</button>
              <div class="hero-form-note">
                Enquiry opens a WhatsApp chat with your filled details for quick response.
              </div>
            </form>
          </aside>
        </div>
      </section>
    </div>
  </header>

  <!-- ABOUT -->
  <section class="section" id="about">
    <div class="container">
      <div class="section-header">
        <div class="section-kicker">About true apex ventures</div>
        <h2>Export-grade agriculture, backed by agronomy</h2>
        <p>
          True Apex Ventures is an export-driven agriculture company that brings together reliable commodity sourcing
          and modern bio fertilizer inputs to support buyers who prioritize quality, traceability, and sustainability.
        </p>
      </div>

      <div class="grid-3">
        <div class="card">
          <span class="pill">Agri exports</span>
          <h3>Consistent export supply</h3>
          <p>
            Structured procurement from vetted producer networks enables consistent quality, documentation accuracy,
            and shipment reliability for long-term buyers.
          </p>
          <ul class="feature-list">
            <li>Commodity-wise specifications and grading</li>
            <li>Containerized and bulk shipment options</li>
            <li>Export documentation and compliance support</li>
          </ul>
        </div>

        <div class="card">
          <span class="pill pill-alt">Bio fertilizers</span>
          <h3>Soil and crop focused inputs</h3>
          <p>
            Bio fertilizers are formulated to improve soil structure, nutrient availability, and long-term productivity
            for growers and institutional buyers.
          </p>
          <ul class="feature-list">
            <li>Microbial consortia and organic formulations</li>
            <li>Cropping-pattern aligned recommendations</li>
            <li>Support for demonstration and trials</li>
          </ul>
        </div>

        <div class="card">
          <span class="pill pill-blue">Partnerships</span>
          <h3>Built for recurring demand</h3>
          <p>
            The model prioritizes recurring and program-based partnerships with importers, distributors, cooperatives,
            and value-chain integrators.
          </p>
          <ul class="feature-list">
            <li>Framework agreements for multiple seasons</li>
            <li>Collaborative planning for volumes and SKUs</li>
            <li>Aligned quality and sustainability objectives</li>
          </ul>
        </div>
      </div>

      <div class="section-visual-row">
        <div class="image-frame">
          <!-- About visual: farmer inspecting crops -->
          <img src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1400&q=80"
               alt="Farmer inspecting crops in a green agricultural field" />
          <div class="image-caption">
            <span class="image-caption-dot"></span>
            <span>From Indian farms to global buyers</span>
          </div>
        </div>
        <div>
          <h3>Designed for professional agri buyers</h3>
          <p style="font-size:0.9rem; color: var(--muted); margin-top:0.45rem;">
            The focus is on buyers who value structured engagements – from importers and distributors to
            agribusinesses, FPOs, and input organizations seeking dependable partners in India.
          </p>
          <ul class="feature-list" style="margin-top:0.7rem;">
            <li>Clarity on specifications, documentation, and certifications</li>
            <li>Alignment with market requirements on residues and quality</li>
            <li>Program-based support for portfolio and category expansion</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- PRODUCTS & BIO FERTILIZERS -->
  <section class="section" id="products">
    <div class="container">
      <div class="section-header">
        <div class="section-kicker">What we supply</div>
        <h2>Agri product and input lines</h2>
        <p>
          Product lines are curated to match export market expectations on quality, food safety, and traceability
          while maintaining commercially viable supply chains.
        </p>
      </div>

      <div class="two-column">
        <div>
          <h3>Key agriculture product categories</h3>
          <p style="font-size:0.9rem; color: var(--muted); margin-top:0.4rem;">
            Core export categories focus on high-demand staples and value-added agri products with clear grading
            and packaging standards.
          </p>
          <div class="highlights" style="margin-top:1rem;">
            <div class="highlight">
              <strong>Grains & pulses</strong>
              Rice, wheat, maize, millets, lentils, chickpeas, and other pulses in export-ready grades and pack sizes.
            </div>
            <div class="highlight">
              <strong>Spices & oilseeds</strong>
              Chilli, turmeric, coriander, cumin, groundnut, sesame, and other spice and oilseed lines as per destination norms.
            </div>
            <div class="highlight">
              <strong>Fruits & vegetables</strong>
              Fresh, semi-processed, or dehydrated produce based on buyer requirement and cold-chain feasibility.
            </div>
            <div class="highlight">
              <strong>Value-added agri</strong>
              Region-specific niche crops and processed agri products structured for specialty buyers and private labels.
            </div>
          </div>

          <!-- Grains / pulses visual -->
          <div class="image-frame" style="margin-top:1.4rem;">
            <img src="https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=1200&q=80"
                 alt="Assorted grains and pulses in sacks ready for export" />
          </div>
        </div>

        <div id="bio">
          <h3>Bio fertilizer and input portfolio</h3>
          <p style="font-size:0.9rem; color: var(--muted); margin-top:0.4rem;">
            Bio fertilizer solutions are designed to complement existing nutrient programs while enabling more sustainable,
            residue-aware cultivation.
          </p>
          <div class="highlights" style="margin-top:1rem;">
            <div class="highlight">
              <strong>Microbial bio fertilizers</strong>
              Nitrogen-fixing, phosphate-solubilizing, and potash-mobilizing consortia tailored to major crops and soils.
            </div>
            <div class="highlight">
              <strong>Organic and bio-stimulant inputs</strong>
              Organic manures, seaweed-based formulations, and plant growth enhancers for root and canopy development.
            </div>
            <div class="highlight">
              <strong>Soil health programs</strong>
              Multi-season soil health interventions to improve structure, organic carbon, and nutrient-use efficiency over time.
            </div>
            <div class="highlight">
              <strong>Private label options</strong>
              White-label and co-branded programs for distributors and institutional partners in key export markets.
            </div>
          </div>

          <!-- Bio / soil health visual -->
          <div class="image-frame" style="margin-top:1.4rem;">
            <img src="https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&w=900&q=80"
                 alt="Hands holding fertile soil with a small plant" />
            <div class="image-caption">
              <span class="image-caption-dot"></span>
              <span>Soil health at the core of bio inputs</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Spices & value-added visual -->
      <div class="section-visual-row" style="margin-top:3.2rem;">
        <div>
          <h3>Value-added and specialty portfolios</h3>
          <p style="font-size:0.9rem; color: var(--muted); margin-top:0.4rem;">
            Specialty and value-added product lines are curated for buyers seeking differentiated portfolios and private label opportunities.
          </p>
          <ul class="feature-list" style="margin-top:0.7rem;">
            <li>Destination-specific spice and seasoning ranges</li>
            <li>Custom packing and labeling options</li>
            <li>Support for category introductions in new markets</li>
          </ul>
        </div>
        <div class="image-frame">
          <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1400&q=80"
               alt="Assorted spices and seasonings displayed in bowls" />
          <div class="image-caption">
            <span class="image-caption-dot"></span>
            <span>Spices and specialty agri products</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- MARKETS & LOGISTICS / WIDE FIELD -->
  <section class="section" id="markets">
    <div class="container">
      <div class="section-header">
        <div class="section-kicker">Markets & engagement</div>
        <h2>Structured to work with global buyers</h2>
        <p>
          Engagements are designed for importers, distributors, and institutional partners seeking predictable supply,
          transparent specifications, and aligned agronomy support.
        </p>
      </div>

      <div class="two-column">
        <div>
          <h3>How True Apex Ventures works with you</h3>
          <ul class="feature-list" style="margin-top:0.55rem;">
            <li>Requirement discovery covering products, markets, regulatory and certification expectations</li>
            <li>Sourcing and technical teams align on feasible product baskets and logistics plans</li>
            <li>Samples, technical dossiers, and commercial offers structured for clarity and speed</li>
            <li>Post-shipment support for repeat programs, market feedback, and product optimization</li>
          </ul>
        </div>
        <div>
          <h3>Primary focus regions</h3>
          <p style="font-size:0.9rem; color: var(--muted); margin-top:0.4rem;">
            Priority markets include regions with strong demand for value-driven, quality-aligned agri imports
            and sustainable inputs.
          </p>
          <div class="markets">
            <div class="market-tag">Middle East &amp; GCC</div>
            <div class="market-tag">Africa</div>
            <div class="market-tag">South &amp; South East Asia</div>
            <div class="market-tag">Europe</div>
            <div class="market-tag">United Kingdom</div>
            <div class="market-tag">North America</div>
          </div>
        </div>
      </div>

      <!-- Wide field / scale of operations -->
      <div class="section-visual-row" style="margin-top:3rem;">
        <div class="image-frame">
          <img src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1400&q=80"
               alt="Aerial view of large agricultural fields" />
          <div class="image-caption">
            <span class="image-caption-dot"></span>
            <span>Field-scale sourcing to serve global demand</span>
          </div>
        </div>
        <div>
          <h3>Scale matched with market requirements</h3>
          <p style="font-size:0.9rem; color: var(--muted); margin-top:0.4rem;">
            Procurement is structured to balance field-level realities with the scale and consistency that
            international buyers expect across seasons.
          </p>
          <ul class="feature-list" style="margin-top:0.7rem;">
            <li>Aggregation from multiple producing regions</li>
            <li>Seasonal and multi-season supply planning</li>
            <li>Volume commitments aligned with market programs</li>
          </ul>
        </div>
      </div>

      <!-- Seedling / agronomy support -->
      <div class="section-visual-row" style="margin-top:2.5rem;">
        <div>
          <h3>Agronomy and grower engagement</h3>
          <p style="font-size:0.9rem; color: var(--muted); margin-top:0.4rem;">
            Partnerships extend to field practices, ensuring bio inputs and product expectations are reflected
            on farms through clear protocols and agronomy support.
          </p>
          <ul class="feature-list" style="margin-top:0.7rem;">
            <li>Structured programs with growers and FPOs</li>
            <li>Protocols for quality and sustainability outcomes</li>
            <li>Feedback loops from market to field</li>
          </ul>
        </div>
        <div class="image-frame">
          <img src="https://images.unsplash.com/photo-1473445730015-841f29a9490b?auto=format&fit=crop&w=1400&q=80"
               alt="Hands planting a young seedling into soil" />
          <div class="image-caption">
            <span class="image-caption-dot"></span>
            <span>Field practices aligned to your markets</span>
          </div>
        </div>
      </div>

      <div class="clients-strip">
        <span>Ideal for bulk importers, distributors, retail chains, FPOs, and agri-input organizations.</span>
        <span>Discuss structured annual and seasonal programs for agri products and bio fertilizer portfolios.</span>
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer class=".footer">
    <div class="container">
      <div class="footer-inner">
        <div>
          <div class="footer-logo">
            <div class="logo-mark">TA</div>
            <div>True Apex Ventures</div>
          </div>
          <p>
            Export-driven agriculture company supporting buyers and partners with consistent agri product supply
            and bio fertilizer programs aligned with sustainable growth.
          </p>
        </div>
        <div class="footer-grid">
          <div>
            <div class="footer-heading">Contact</div>
            <ul>
              <li>Corporate: Bangalore, India</li>
              <li>Email: <a href="mailto:bensunthomas@gmail.com">bensunthomas@gmail.com</a></li>
              <li>Phone: <a href="tel:+919481805942">+91 9481805942</a></li>
            </ul>
          </div>
          <div>
            <div class="footer-heading">Quick links</div>
            <ul>
              <li><a href="#products">Agri products</a></li>
              <li><a href="#bio">Bio fertilizers</a></li>
              <li><a href="#markets">Markets</a></li>
              <li><a href="#top">Back to top</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© <span id="year"></span> True Apex Ventures. All rights reserved.</span>
        <span>Designed for professional buyers and partners.</span>
      </div>
    </div>
  </footer>

  <!-- FLOATING WHATSAPP & CALL BUTTONS -->
  <div class="floating-contact">
    <a href="tel:+919481805942" class="floating-btn call">
      <span class="icon">📞</span>
      <span>Call</span>
    </a>
    <a href="https://wa.me/919481805942" target="_blank" rel="noopener" class="floating-btn whatsapp">
      <span class="icon">🟢</span>
      <span>WhatsApp</span>
    </a>
  </div>

  <script>
    // Set current year
    document.getElementById("year").textContent = new Date().getFullYear();

    // Handle form submission -> open WhatsApp with pre-filled message
    document.getElementById("enquiryForm").addEventListener("submit", function (e) {
      e.preventDefault();

      var name = document.getElementById("name").value.trim();
      var company = document.getElementById("company").value.trim();
      var email = document.getElementById("email").value.trim();
      var market = document.getElementById("market").value;
      var requirement = document.getElementById("requirement").value.trim();

      var lines = [
        "New export / bio fertilizer enquiry from True Apex website:",
        "",
        "Name: " + name,
        "Company / Organization: " + company,
        "Work email: " + email,
        "Target market: " + market,
        "Requirement overview:",
        requirement
      ];

      var message = lines.join("\n");
      var phone = "919481805942"; // no +
      var url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);

      window.open(url, "_blank");
    });
  </script>
</body>
</html>
# trueapexventures
