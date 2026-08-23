export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <a className="brand brand--footer" href="/">
            <img src="/app-icon.png" alt="" width="38" height="38" />
            <span>Together Notes</span>
          </a>
          <p className="footer-privacy">
            Together Notes collects no data. Your notes sync between your devices and the git
            host you choose. <a href="/privacy">Full policy →</a>
          </p>
        </div>
        <div className="footer-links" aria-label="Footer links">
          <a href="mailto:feedback@togethernotes.com">feedback@togethernotes.com</a>
          <a href="/support">Support</a>
          <a href="/privacy">Privacy</a>
        </div>
      </div>
      <div className="shell legal-row">
        <span>© 2026 Dmitry Kuznetsov</span>
        <span>
          Apple, the Apple logo, App Store, Mac, iPhone, and iPad are trademarks of Apple Inc.
        </span>
      </div>
    </footer>
  );
}
