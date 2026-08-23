import { AppStoreBadges } from "./AppStoreBadges";

export function SiteHeader({ simple = false }: { simple?: boolean }) {
  return (
    <header className="site-header">
      <div className="shell nav-shell">
        <a className="brand" href="/" aria-label="Together Notes home">
          <img src="/app-icon.png" alt="" width="42" height="42" />
          <span>Together Notes</span>
        </a>
        {!simple && (
          <nav className="nav-links" aria-label="Main navigation">
            <a href="#how">How it works</a>
            <a href="#pricing">Pricing</a>
            <a href="/support">Support</a>
            <a href="/privacy">Privacy</a>
          </nav>
        )}
        <div className="nav-download">
          <AppStoreBadges compact />
        </div>
      </div>
    </header>
  );
}
