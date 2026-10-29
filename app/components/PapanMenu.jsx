import Image from 'next/image';
import { MENU, rp, slugItem } from '@/lib/kedai';

/* Papan menu kapur. `ringkas` hanya menampilkan item bertanda favorit/baru
   dan dua item pertama tiap kategori — untuk beranda. */
export default function PapanMenu({ ringkas = false, tingkat = 'h3' }) {
  const H = tingkat;
  const data = ringkas
    ? MENU.slice(0, 3).map((k) => ({ ...k, item: k.item.filter((x, i) => x[3] || i < 2).slice(0, 3) }))
    : MENU;
  return (
    <div className={`papan grid grid-cols-[minmax(0,1fr)] gap-x-12 gap-y-9 p-5 sm:gap-y-10 sm:p-10 ${ringkas ? 'md:grid-cols-3' : 'md:grid-cols-2'}`}>
      {data.map((k) => (
        <section key={k.kategori} aria-label={k.kategori}>
          <H className="kapur text-4xl leading-none font-bold text-[#e8c35a]">{k.kategori}</H>
          {!ringkas && <p className="mt-2 text-sm text-[#efeadf]/80">{k.catatan}</p>}
          <ul className="kapur-garis mt-4 space-y-4 pt-4">
            {k.item.map(([nama, harga, ket, tanda]) => (
              <li key={nama} className="flex items-start gap-3 sm:gap-4">
                <Image src={`/images/menu/${slugItem(nama)}.jpg`} alt={`Foto ${nama}`} width={480} height={480} sizes="80px" className="mt-1 h-14 w-14 shrink-0 rounded-sm border-2 border-[#efeadf]/70 object-cover sm:h-20 sm:w-20" />
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline gap-3">
                    <span className="min-w-0 text-lg leading-snug font-semibold">
                      {nama}
                      {tanda && <span className="kapur ml-2 inline-block rounded-full border border-[#e8c35a]/60 px-2 align-[0.1em] text-base leading-tight font-normal whitespace-nowrap text-[#e8c35a]">{tanda}</span>}
                    </span>
                    <span aria-hidden="true" className="titik-harga" />
                    <span className="shrink-0 font-semibold whitespace-nowrap tabular-nums">{rp(harga)}</span>
                  </div>
                  <p className="kapur mt-0.5 text-xl leading-snug text-[#efeadf]/85">{ket}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
