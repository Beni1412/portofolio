# BeNi — Portfolio

Portfolio 1-page (Home / About / Skills / Projects / Contact) yang jalan kayak app — klik nav = ganti tab, gak reload halaman. Klik project card = swap ke halaman detail di section yang sama, ada tombol "Back to all projects" buat balik.

Tema visual: HUD/computer-vision — bounding box biru muda di project card & foto, grid overlay, scanline tipis, font mono buat data/label. Ngikutin bidang lo (CV/ML) biar kerasa personal, bukan template generic.

## Struktur file

```
portfolio/
├── index.html          → struktur halaman (nav + 5 section)
├── css/
│   └── style.css        → semua styling & tokens warna
├── js/
│   ├── data.js           → SEMUA konten project & skill ada di sini
│   └── main.js            → logic: tab switching, render, detail view
└── README.md
```

Kenapa dipisah gini: `data.js` isinya cuma data (gampang diedit, gak ada logic), `main.js` isinya cuma "mesin" yang baca data itu dan render ke halaman. Jadi nambah/edit konten gak pernah nyentuh HTML atau CSS sama sekali.

## Cara buka

Tinggal double-click `index.html`, atau kalau mau lebih aman (font/asset kebaca normal) pake Live Server di VS Code / `npx serve` di folder ini.

## Cara nambah project baru (paling sering dipake)

Buka `js/data.js`, cari array `projects`. Di atasnya ada `PROJECT_TEMPLATE` yang isinya contoh format. Tinggal:

1. Copy satu blok `{ ... }` project yang udah ada
2. Paste di dalam array `projects` (sebelum atau sesudah project lain, urutannya bebas)
3. Ganti isi field-nya:

```js
{
  id: "nama-project-unik",         // dipake internal, gak ditampilin
  title: "Nama Project",
  category: "Kategori · Sub kategori",
  status: "Ongoing / Selesai / Kompetisi / Riset",
  year: "2026",
  blurb: "1 kalimat pendek buat di card grid.",
  description: "Paragraf lengkap buat detail view. Ini yang paling leluasa — bahas masalah, pendekatan, hasil, sepanjang yang lo mau.",
  role: "Peran lo di project ini (opsional, kosongin '' kalau gak perlu)",
  team: "Nama tim kalau kerja bareng (opsional)",
  stack: ["Tech1", "Tech2"],
  features: ["Highlight 1", "Highlight 2"],
  links: { demo: "", github: "" },  // isi URL kalau ada, kosongin "" kalau belum — tombolnya auto ke-hide
  accent: "green"                    // "green" | "amber" | "cyan" (belum kepake di style saat ini, disiapin buat next iteration)
}
```

4. Save → refresh browser. Otomatis muncul card baru di tab Projects + detail view-nya.

Gak ada limit jumlah project — mau nambah 20 project juga tinggal nambah 20 objek di array.

## Cara nambah / edit skill

Sama pattern-nya, di `js/data.js` cari `skillGroups`. Tiap group punya `items` array isi `{ name, level }`. Mau bikin group baru (misal "Design Tools") tinggal tambah objek baru dengan format sama.

## Nambah foto & video ke project (gallery)

Tiap project sekarang punya 2 slot gambar yang beda fungsi:

- **`image`** → satu foto buat card di grid Projects. Cuma 1, biar preview di grid tetep ringkas.
- **`gallery`** → banyak foto (+ video) buat halaman detail. Ini yang dipake pas lo klik project — muncul carousel dengan panah ‹ › dan dots, bisa juga digeser pake tombol panah kiri/kanan di keyboard.

Cara isi `gallery` di `js/data.js`:

```js
gallery: [
  { type: "image", src: "images/projects/neuroscan/1.jpg", caption: "Grad-CAM++ overlay" },
  { type: "image", src: "images/projects/neuroscan/accuracy.jpg", caption: "Accuracy & loss curve" },
  { type: "video", src: "images/projects/neuroscan/demo.mp4", caption: "App walkthrough" },
  { type: "video", src: "https://youtu.be/XXXXXXXXXXX", caption: "YouTube demo" }
]
```

- Urutan array = urutan slide. Bisa campur `image` dan `video` sesuka hati, gak ada limit keras — tapi enaknya di-scan orang sekitar 6–10 item.
- `type: "video"` nerima 2 macem `src`: file lokal (`.mp4`, taruh di folder `images/projects/...`, muncul pake player `<video controls>`) atau link YouTube (`youtube.com/...` atau `youtu.be/...`) — otomatis di-embed jadi iframe, gak perlu ubah apapun.
- `caption` opsional, kosongin `""` kalau gak perlu.
- `gallery: []` (kosong) → otomatis fallback pakai `image` sebagai satu-satunya slide. Kalau `image` juga kosong, tampil placeholder "NO MEDIA SET".
- Foto/video gak ke-crop lagi — pake `object-fit: contain`, jadi komposisi aslinya kejaga, gak kepotong kayak sebelumnya.

Naruh filenya bebas struktur foldernya, tapi biar rapi disaranin per-project punya folder sendiri, misal:

```
images/projects/neuroscan/1.jpg
images/projects/neuroscan/2.jpg
images/projects/neuroscan/accuracy.jpg
images/projects/neuroscan/demo.mp4
```

Foto profil (Home + About) tetep sama kayak sebelumnya:

```
images/profile.jpg
```

## Ganti data pribadi

Yang masih placeholder dan wajib diganti manual di `index.html`:

- Email: cari `youremail@example.com` (ada 2 tempat: About & Contact)
- Link CV: cari `id="cvLink"`, ganti `href="#"` ke link file CV lo
- Social links (GitHub/LinkedIn/Instagram): cari `class="social-link"`, ganti `href="#"` masing-masing
- Lokasi: cari `Malang, Indonesia` kalau mau diganti

## Ganti warna / tema

Semua warna ada di `css/style.css` paling atas, di `:root { ... }`. Ganti `--accent` kalau mau ganti warna aksen utama (defaultnya biru muda), sisanya ngikut otomatis.

## Contact form

Form di tab Contact sekarang cuma front-end (submit = reset + kasih notice, gak kekirim kemana-mana). Kalau mau beneran kekirim, opsinya:

- Pake service kayak [Formspree](https://formspree.io) atau [Web3Forms](https://web3forms.com) — tinggal ganti `action` di `<form>` dan hapus `e.preventDefault()` di `main.js` bagian contact form
- Atau bikin backend sendiri kalau butuh custom logic

## Notes

- Project "Predatoria" sengaja dibiarin sebagai placeholder — isi field-nya kosong/generic karena detail lengkapnya belum ada. Ganti aja kayak project lain kalau udah siap.
- Semua bounding-box corner di card & foto itu murni CSS (`.detect-frame` + `.corner` di `style.css`), gak pake gambar.
- Responsive udah dicek buat mobile (nav jadi hamburger di bawah 720px, grid project jadi 1 kolom).
