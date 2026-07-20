# Folder foto

## Foto profil (Home & About)

```
images/profile.jpg
```

Satu file dipakai di 2 tempat. Rasio persegi (1:1) paling pas karena frame-nya `aspect-ratio:1/1`.

## Foto card project (grid Projects)

```
images/projects/neuroscan.jpg
images/projects/skinmate.jpg
images/projects/nomnom.jpg
images/projects/diabetes-detection.jpg
images/projects/predatoria.jpg
images/projects/birthday-web-animation.jpg
```

Ini cuma SATU foto per project, ditampilin kecil di card grid. Nama file udah di-set di field `image` masing-masing project, di `js/data.js`.

## Foto + video detail project (gallery, bisa banyak)

Field `gallery` di `js/data.js` nentuin apa aja yang muncul pas project-nya diklik (carousel dengan panah & dots). Saran struktur folder, satu folder per project:

```
images/projects/neuroscan/1.jpg
images/projects/neuroscan/2.jpg
images/projects/neuroscan/accuracy.jpg
images/projects/neuroscan/demo.mp4
```

Path & urutannya diatur manual di `gallery` array tiap project — lihat `js/data.js` buat contoh lengkap (termasuk cara pasang video lokal & link YouTube). Belum ada isinya sama sekali? Otomatis fallback ke foto card di atas, terus ke placeholder kalau itu juga belum ada.

Semua foto pakai `object-fit: contain`, jadi composisi aslinya gak kepotong — kalau rasio fotonya beda sama frame, bakal ada sedikit ruang kosong di kiri-kanan/atas-bawah, bukan di-crop paksa.

Format `.jpg` / `.png` / `.webp` buat foto, `.mp4` buat video lokal — tinggal sesuaikan ekstensi di path-nya.
