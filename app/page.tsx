import type { Metadata } from "next";
import { AppStoreBadges } from "./components/AppStoreBadges";
import { PlatformShowcase } from "./components/PlatformShowcase";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";

export const metadata: Metadata = {
  title: "Together Notes — Markdown notes in a git repo your agents can use",
  description:
    "A native Mac & iPhone notes app that stores everything as plain Markdown in a git repository you own — so your AI agents can read and write your notes.",
};

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="simple-landing">
        <section className="landing-screen screen-hero">
          <div className="shell hero-grid hero-grid--quiet">
            <div className="hero-message">
              <img className="hero-app-icon" src="/app-icon.png" alt="" width="72" height="72" />
              <h1>The notes app your agents already know how to use.</h1>
              <p className="hero-copy">
                Plain Markdown in a git repository you own. Native on Mac, iPhone, and iPad.
              </p>
              <div className="hero-actions-simple">
                <AppStoreBadges />
              </div>
            </div>
          </div>
        </section>

        <section className="landing-screen screen-how" id="how">
          <div className="shell visual-how">
            <div className="visual-heading">
              <div>
                <p className="eyebrow">How it works</p>
                <h2>Your agent pushes. Together Notes pulls.</h2>
              </div>
              <p>Switch between Mac, iPad, and iPhone to see the same repository become a native notes app.</p>
            </div>
            <PlatformShowcase />
            <div className="visual-flow" aria-label="Three-step sync flow">
              <span><b>1</b> Agent writes Markdown</span>
              <i aria-hidden="true">→</i>
              <span><b>2</b> Git keeps the history</span>
              <i aria-hidden="true">→</i>
              <span><b>3</b> Your devices show the note</span>
            </div>
          </div>
        </section>

        <section className="landing-screen screen-price" id="pricing">
          <div className="shell price-screen-grid">
            <div className="simple-price">
              <p className="eyebrow">One purchase</p>
              <h2>$19.99.<br />Once.</h2>
              <p>Editing forever on Mac, iPhone, and iPad. Family Sharing included. No subscription and no sync fee.</p>
              <AppStoreBadges />
              <small>Try everything free for 3 days. No account or card required.</small>
            </div>
            <div className="simple-faq" aria-label="Frequently asked questions">
              <article>
                <h3>Do I need to know git?</h3>
                <p>No. Together Notes handles syncing and conflicts automatically.</p>
              </article>
              <article>
                <h3>Where are my notes?</h3>
                <p>On your devices and on the git remote you choose. There is no Together Notes cloud.</p>
              </article>
              <article>
                <h3>Can I use it without an agent or remote?</h3>
                <p>Yes. It is a complete local notes app on its own.</p>
              </article>
              <nav className="help-links" aria-label="Help and legal">
                <a href="/support">Support →</a>
                <a href="/privacy">Privacy →</a>
              </nav>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
