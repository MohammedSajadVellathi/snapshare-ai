function Footer() {
  return (
    <footer className="footer">
      {/* Column 1: Brand */}
      <div className="footer-col">
        <div className="footer-logo">
          Snapshare<span className="star">*</span>
        </div>
        <p className="footer-tagline">Every Moment Delivered</p>

        <p className="footer-desc">
          Professional, branded client galleries for photographers,
          with AI-assisted delivery and analytics.
        </p>

        <div className="social-icons">
          <span>in</span>
          <span>X</span>
          <span>f</span>
          <span>ig</span>
        </div>

      </div>

      {/* Column 2: Locations */}
      <div className="footer-col">
        <p className="footer-title">Locations</p>

        <p>
          BCIT, Bengaluru,<br />
          India – 560064 <span className="link">Get Location</span>
        </p>

        <p>
          Farmington Hills,<br />
          MI, USA – 48335
        </p>
      </div>

      {/* Column 3: Links */}
      <div className="footer-col">
        <p className="footer-title">Company</p>
        <p>About us</p>
        <p>Contact us</p>
        <p>Case Studies</p>
        <p>Blogs</p>
      </div>

      {/* Column 4: Legal */}
      <div className="footer-col">
        <p className="footer-title">Legal</p>
        <p>Privacy</p>
        <p>Legal</p>
        <p>Cookies</p>
        <p>Guide</p>
      </div>

      {/* Column 5: Contact */}
      <div className="footer-col">
        <p className="footer-title">Let’s keep in touch</p>

        <p>📞 IND: +91 799 663 3770</p>
        <p>📞 USA: +1 (248) 832-0123</p>
        <p>📞 UAE: +971 56 270 1018</p>

        <p>🌐 snapshare.ai</p>
        <p>✉ founders@snapshare.ai</p>

        <button className="whatsapp-btn">
          💬 Message us on WhatsApp
        </button>
      </div>
    </footer>
  );
}

export default Footer;
