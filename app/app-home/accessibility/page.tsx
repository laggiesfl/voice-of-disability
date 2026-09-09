'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from '../app-home.module.css';

const STORAGE_KEY = 'vod-accessibility-preferences';

type Preferences = {
  largeText: boolean;
  highContrast: boolean;
  reducedMotion: boolean;
  largerControls: boolean;
};

const defaults: Preferences = {
  largeText: false,
  highContrast: false,
  reducedMotion: false,
  largerControls: false,
};

export default function AccessibilityScreen() {
  const [prefs, setPrefs] = useState<Preferences>(defaults);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) setPrefs({ ...defaults, ...JSON.parse(stored) });
    } catch {
      // Keep defaults if local storage is unavailable.
    }
  }, []);

  const toggle = (key: keyof Preferences) => {
    setSaved(false);
    setPrefs((current) => ({ ...current, [key]: !current[key] }));
  };

  const save = () => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
      document.documentElement.dataset.vodLargeText = prefs.largeText ? 'true' : 'false';
      document.documentElement.dataset.vodHighContrast = prefs.highContrast ? 'true' : 'false';
      document.documentElement.dataset.vodReducedMotion = prefs.reducedMotion ? 'true' : 'false';
      document.documentElement.dataset.vodLargerControls = prefs.largerControls ? 'true' : 'false';
      setSaved(true);
    } catch {
      setSaved(false);
    }
  };

  const reset = () => {
    setPrefs(defaults);
    setSaved(false);
    try { window.localStorage.removeItem(STORAGE_KEY); } catch {}
  };

  return (
    <div className={styles.shell}>
      <Link href="/app-home" className={styles.back}>← Back to app home</Link>
      <section className={styles.hero} aria-labelledby="access-title">
        <span className={styles.eyebrow}>Accessibility</span>
        <h1 id="access-title">Make the app work for you</h1>
        <p>Choose preferences without needing to disclose a disability or diagnosis.</p>
      </section>

      <section className={styles.section} aria-labelledby="preferences-title">
        <h2 id="preferences-title">Display and interaction preferences</h2>
        <div className={styles.panel}>
          <div className={styles.checks}>
            {([
              ['largeText', 'Use larger text'],
              ['highContrast', 'Use higher contrast'],
              ['reducedMotion', 'Reduce motion and animation'],
              ['largerControls', 'Use larger controls'],
            ] as [keyof Preferences, string][]).map(([key, label]) => (
              <label className={styles.check} key={key}>
                <input type="checkbox" checked={prefs[key]} onChange={() => toggle(key)} />
                <span>{label}</span>
              </label>
            ))}
          </div>
          <div className={styles.actions}>
            <button className={styles.button} type="button" onClick={save}>Save preferences</button>
            <button className={styles.buttonSecondary} type="button" onClick={reset}>Reset</button>
          </div>
          <p className={styles.note} role="status" aria-live="polite">{saved ? 'Accessibility preferences saved on this device.' : 'Your choices stay on this device until you save them.'}</p>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="privacy-title">
        <h2 id="privacy-title">Privacy</h2>
        <div className={styles.status}><p>These first-version preferences are stored only on this device. A later signed-in member version can sync them securely across devices after the member authentication model is completed.</p></div>
      </section>

      <nav className={styles.bottomNav} aria-label="App navigation">
        <Link href="/app-home">Home</Link><Link href="/app-home/rights">My rights</Link><Link href="/app-home/resources">Resources</Link><Link href="/blog">Updates</Link><Link href="/#join">More</Link>
      </nav>
    </div>
  );
}
