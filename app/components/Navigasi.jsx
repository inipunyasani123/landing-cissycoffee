'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

const NAV = [
  ['/menu', 'Menu'],
  ['/tentang', 'Tentang'],
  ['/acara', 'Kopi untuk acara'],
  ['/kontak', 'Kontak'],
];

/* Navigasi utama + menu ponsel. Di ponsel panelnya berupa papan kapur berbingkai kayu, sama seperti papan menu: nama halaman dalam huruf serif krem, tanda kapur kuning di kirinya.
   Menu tertutup sendiri saat pindah halaman, menekan Escape (fokus kembali ke
   tombol), atau mengetuk di luar panel. */
export default function Navigasi({ children }) {
  const path = usePathname();
  const [buka, setBuka] = useState(false);
  const tombol = useRef(null);
  const panel = useRef(null);

  useEffect(() => setBuka(false), [path]);

  useEffect(() => {
    if (!buka) return undefined;
    const tutup = (e) => {
      if (e.type === 'keydown' && e.key !== 'Escape') return;
      if (e.type === 'pointerdown' && (panel.current?.contains(e.target) || tombol.current?.contains(e.target))) return;
      setBuka(false);
      if (e.type === 'keydown') tombol.current?.focus();
    };
    document.addEventListener('keydown', tutup);
    document.addEventListener('pointerdown', tutup);
    return () => {
      document.removeEventListener('keydown', tutup);
      document.removeEventListener('pointerdown', tutup);
    };
  }, [buka]);

  const aktif = (href) => (!href.includes('#') && href !== '/' && path.startsWith(href) ? 'page' : undefined);

  return (
    <>
      <nav aria-label="Navigasi utama" className="hidden items-center gap-8 md:flex">
        {NAV.map(([href, label]) => (
          <Link key={href} href={href} aria-current={aktif(href)} className="menu-label text-bean/80 transition-colors hover:text-roast aria-[current=page]:text-roast aria-[current=page]:underline aria-[current=page]:decoration-2 aria-[current=page]:underline-offset-8">
            {label}
          </Link>
        ))}
      </nav>
      <div className="flex items-center gap-2">
        {children}
        <button
          ref={tombol}
          type="button"
          aria-expanded={buka}
          aria-controls="menu-ponsel"
          onClick={() => setBuka((b) => !b)}
          className="menu-label inline-flex h-10 min-w-[4.75rem] items-center justify-center border border-roast/25 px-3 text-roast md:hidden"
        >
          {buka ? 'Tutup' : 'Menu'}
        </button>
      </div>
      <nav id="menu-ponsel" ref={panel} aria-label="Navigasi ponsel" hidden={!buka} className="absolute inset-x-0 top-full bg-crema/95 px-4 pt-3 pb-4 backdrop-blur-md md:hidden">
        <ol className="papan mx-auto max-w-6xl px-6 py-3">
          {NAV.map(([href, label], i) => (
            <li key={href} className="kapur-garis first:border-t-0">
              <Link href={href} onClick={() => setBuka(false)} aria-current={aktif(href)} className="flex items-baseline gap-4 py-3.5 text-[#efeadf] aria-[current=page]:text-[#e8c35a]">
                <span aria-hidden="true" className="kapur w-6 text-2xl text-[#e8c35a]">{i + 1}.</span>
                <span className="font-[family-name:var(--font-dmserif)] text-2xl">{label}</span>
              </Link>
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
