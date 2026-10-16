/* Denah ke kedai, digambar dengan kapur di papan — motif yang sama dengan
   papan menu. Tidak sesuai skala; hanya patokan yang disebut di "Cara ke sana":
   taman kota di seberang, toko buku bekas di sebelah, halte, dan kantong parkir
   150 m ke utara. */
const KAPUR = '#efeadf';
const KUNING = '#e8c35a';
const huruf = { fontFamily: 'var(--font-caveat), cursive' };

const POHON = [[78, 78, 15], [118, 112, 12], [160, 70, 14], [205, 104, 16], [250, 74, 12], [262, 128, 11], [96, 140, 10]];

export default function DenahKapur() {
  return (
    <figure className="papan p-4 sm:p-6">
      <svg viewBox="0 0 520 350" role="img" aria-labelledby="denah-judul denah-ket" className="h-auto w-full">
        <title id="denah-judul">Denah kapur ke Cissy Coffee</title>
        <desc id="denah-ket">
          Cissy Coffee ada di sisi selatan Jl. Kenari Raya, bersebelahan dengan toko buku bekas dan berseberangan dengan taman kota.
          Dari halte taman kota, menyeberang lalu berjalan sekitar lima menit lewat depan toko buku. Kantong parkir mobil sekitar 150 meter ke utara.
        </desc>

        <g fill="none" stroke={KAPUR} strokeLinecap="round" strokeLinejoin="round">
          {/* Jl. Kenari Raya */}
          <path d="M8 190 C 140 186, 380 193, 512 188" strokeWidth="2.5" opacity="0.85" />
          <path d="M8 250 C 150 254, 370 247, 512 252" strokeWidth="2.5" opacity="0.85" />
          <path d="M24 220 H500" strokeWidth="2" strokeDasharray="16 12" opacity="0.45" />

          {/* Taman kota */}
          <path d="M38 46 C 40 34, 52 30, 64 31 L 282 36 C 296 37, 302 46, 300 58 L 296 156 C 295 168, 286 174, 274 173 L 58 170 C 46 169, 38 160, 39 148 Z" strokeWidth="2.5" strokeDasharray="3 7" />
          {POHON.map(([x, y, r]) => (
            <g key={`${x}-${y}`} opacity="0.75">
              <circle cx={x} cy={y} r={r} strokeWidth="2" />
              <path d={`M${x - r * 0.45} ${y} q ${r * 0.45} ${-r * 0.5} ${r * 0.9} 0`} strokeWidth="1.5" />
            </g>
          ))}

          {/* Kantong parkir, ±150 m ke utara */}
          <rect x="384" y="30" width="96" height="64" rx="6" strokeWidth="2.5" />
          <path d="M432 102 V 182" strokeWidth="2" strokeDasharray="2 8" />
          <path d="M424 112 L432 100 L440 112" strokeWidth="2" />

          {/* Halte taman kota */}
          <rect x="112" y="164" width="56" height="18" rx="3" strokeWidth="2.5" />

          {/* Deretan bangunan di sisi selatan */}
          <rect x="70" y="268" width="104" height="60" rx="4" strokeWidth="2" opacity="0.55" />
          <rect x="190" y="268" width="122" height="60" rx="4" strokeWidth="2.5" />
          <rect x="328" y="264" width="134" height="68" rx="4" strokeWidth="3.5" stroke={KUNING} />

          {/* Jalan kaki dari halte: menyeberang, lewat depan toko buku */}
          <path d="M140 184 C 146 214, 160 248, 190 259 S 300 259, 360 259" strokeWidth="3" strokeDasharray="1 9" stroke={KUNING} />
          <path d="M352 252 L364 259 L352 266" strokeWidth="2.5" stroke={KUNING} />

          {/* Arah utara */}
          <path d="M490 150 V 118" strokeWidth="2" />
          <path d="M483 128 L490 116 L497 128" strokeWidth="2" />
        </g>

        <g style={huruf} fill={KAPUR}>
          <text x="104" y="104" fontSize="26" fontWeight="700">Taman kota</text>
          <text x="398" y="70" fontSize="24" fontWeight="700">Parkir</text>
          <text x="440" y="150" fontSize="17" textAnchor="end" opacity="0.85">±150 m</text>
          <text x="140" y="158" fontSize="18" textAnchor="middle">halte</text>
          <text x="312" y="211" fontSize="20" opacity="0.8">Jl. Kenari Raya</text>
          <text x="122" y="304" fontSize="17" textAnchor="middle" opacity="0.6">rumah</text>
          <text x="251" y="295" fontSize="19" textAnchor="middle">toko buku</text>
          <text x="251" y="315" fontSize="19" textAnchor="middle">bekas</text>
          <text x="395" y="296" fontSize="24" fontWeight="700" textAnchor="middle" fill={KUNING}>Cissy Coffee</text>
          <text x="395" y="320" fontSize="18" textAnchor="middle" fill={KUNING}>No. 27</text>
          <text x="172" y="243" fontSize="17" fill={KUNING}>5 menit jalan kaki</text>
          <text x="490" y="112" fontSize="18" textAnchor="middle">U</text>
        </g>
      </svg>
      <figcaption className="kapur mt-1 text-lg text-[#efeadf]/85">Digambar barista pagi ini — tidak sesuai skala.</figcaption>
    </figure>
  );
}
