import { useEffect } from 'react';
import {
  TweaksPanel,
  TweakSection,
  TweakColor,
  TweakToggle,
  TweakRadio,
  useTweaks,
} from './tweaksPanel.jsx';

const TWEAK_DEFAULTS = {
  theme: 'default',
  font: 'warm',
  heroVariant: 'illustration',
  dark: false,
};

export default function SiteTweaks() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', t.dark ? 'midnight' : t.theme);
    document.documentElement.setAttribute('data-font', t.font);
    const card = document.querySelector('.hero-main-card');
    if (card) card.style.display = t.heroVariant === 'illustration' ? '' : 'none';
    const visual = document.querySelector('.hero-visual');
    const grid = document.querySelector('.hero-grid');
    if (visual && grid) {
      if (t.heroVariant === 'none') {
        visual.style.display = 'none';
        grid.style.gridTemplateColumns = '1fr';
      } else {
        visual.style.display = '';
        grid.style.gridTemplateColumns = '';
      }
    }
  }, [t]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Colour palette" />
      <TweakColor
        label="Theme"
        value={t.theme}
        options={[
          ['#1E4FD9', '#E6F0FF', '#B9E8D8'],
          ['#0C7CC4', '#E1F2FB', '#C8EFE5'],
          ['#0E7A6A', '#DCF3EE', '#FFD79A'],
        ]}
        onChange={(v) => {
          const palette = [
            ['#1E4FD9', '#E6F0FF', '#B9E8D8'],
            ['#0C7CC4', '#E1F2FB', '#C8EFE5'],
            ['#0E7A6A', '#DCF3EE', '#FFD79A'],
          ];
          const map = { 0: 'default', 1: 'ocean', 2: 'lagoon' };
          const idx = palette.findIndex((p) => JSON.stringify(p) === JSON.stringify(v));
          setTweak('theme', map[idx] || 'default');
        }}
      />
      <TweakToggle label="Dark mode" value={t.dark} onChange={(v) => setTweak('dark', v)} />

      <TweakSection label="Typography" />
      <TweakRadio
        label="Headings"
        value={t.font}
        options={['warm', 'classic', 'techy']}
        onChange={(v) => setTweak('font', v)}
      />

      <TweakSection label="Hero" />
      <TweakRadio
        label="Visual"
        value={t.heroVariant}
        options={['illustration', 'none']}
        onChange={(v) => setTweak('heroVariant', v)}
      />
    </TweaksPanel>
  );
}
