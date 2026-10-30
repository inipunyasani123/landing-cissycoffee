import Link from 'next/link';
import Navigasi from './Navigasi';

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-roast/10 bg-crema/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6">
        <Link href="/" className="inline-flex min-h-11 items-center font-[family-name:var(--font-dmserif)] text-2xl whitespace-nowrap text-roast">
          Cissy <span className="kapur text-[1.6rem] text-[#8a6610]">Coffee</span>
        </Link>
        <Navigasi>
          <Link href="/kontak" className="inline-flex h-11 items-center bg-roast px-4 text-sm font-semibold whitespace-nowrap text-crema hover:bg-roast-2">
            Arah ke kedai
          </Link>
        </Navigasi>
      </div>
    </header>
  );
}
