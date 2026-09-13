# 🚀 ISB2 - Second Choice
**Informatics Summit Bootcamp II · Git Collaboration Exercise**

> Latihan kolaborasi tim menggunakan Git & GitHub — setiap member mengisi card mereka masing-masing via branch sendiri.

---

## 📋 Daftar Isi
- [Tentang Project](#tentang-project)
- [Pembagian Tugas](#pembagian-tugas)
- [Cara Kerja](#cara-kerja)
- [Langkah-Langkah](#langkah-langkah)
- [Aturan Commit](#aturan-commit)
- [Alur Pull Request](#alur-pull-request)

---

## Tentang Project

Project ini adalah latihan kolaborasi tim menggunakan Git & GitHub. Setiap member bertugas mengisi **card milik mereka sendiri** di file `index.html` melalui branch masing-masing, kemudian membuat Pull Request agar bisa di-merge ke `main`.

---

## Pembagian Tugas

| Member | Branch | Card |
|--------|--------|------|
| Member 1 | `feature/card-1` | `id="card-1"` |
| Member 2 | `feature/card-2` | `id="card-2"` |
| Member 3 | `feature/card-3` | `id="card-3"` |
| Member 4 | `feature/card-4` | `id="card-4"` |
| Member 5 | `feature/card-5` | `id="card-5"` |
| Member 6 | `feature/card-6` | `id="card-6"` |

> ⚠️ **Penting:** Setiap member **hanya boleh mengedit card milik mereka sendiri**. Jangan menyentuh card member lain agar tidak terjadi conflict saat merge.

---

## Cara Kerja

```
main (base kosong)
│
├── feature/card-1 → Pull Request → Review → Merge ✅
├── feature/card-2 → Pull Request → Review → Merge ✅
├── feature/card-3 → Pull Request → Review → Merge ✅
├── feature/card-4 → Pull Request → Review → Merge ✅
├── feature/card-5 → Pull Request → Review → Merge ✅
└── feature/card-6 → Pull Request → Review → Merge ✅
                                              │
                                    main (semua card terisi) 🎉
```

---

## Langkah-Langkah

### 1️⃣ Clone Repository

Jalankan perintah berikut di terminal:

```bash
git clone https://github.com/petarra/isb2-SecondChoice.git
cd isb2-SecondChoice
```

---

### 2️⃣ Buat Branch Sesuai Nomor Card Kamu

Ganti `X` dengan nomor card kamu (1 sampai 6):

```bash
git checkout -b feature/card-X
```

Contoh untuk Member 1:
```bash
git checkout -b feature/card-1
```

Pastikan kamu sudah berada di branch yang benar:
```bash
git branch
```

---

### 3️⃣ Edit File `index.html`

Buka file `index.html`, lalu cari card milik kamu berdasarkan `id`.

Contoh untuk Member 1, cari bagian ini:

```html
<!-- CARD 1 — DIKERJAKAN OLEH MEMBER 1 -->
<div class="card" id="card-1">
```

**Hapus** blok placeholder berikut:
```html
<!-- HAPUS BLOK INI DAN GANTI DENGAN KONTEN KAMU -->
<div class="card-empty-icon">👤</div>
<div class="card-empty-label">Menunggu Member 1</div>
<div class="card-empty-hint">feature/card-1</div>
<!-- SAMPAI SINI -->
```

**Ganti** dengan konten kamu (uncomment contoh yang sudah ada):
```html
<div class="card-avatar">A</div>
<div class="card-name">Nama Kamu</div>
<div class="card-role">Role / Posisi</div>
<div class="card-desc">Deskripsi singkat tentang kamu.</div>
```

> 💡 Isi `card-avatar` dengan inisial nama kamu, `card-name` dengan nama lengkap, `card-role` dengan posisi/minat kamu, dan `card-desc` dengan deskripsi singkat.

---

### 4️⃣ Simpan dan Commit Perubahan

Cek file yang berubah:
```bash
git status
```

Tambahkan perubahan:
```bash
git add index.html
```

Commit dengan pesan yang jelas:
```bash
git commit -m "feat: fill card-1 content - Nama Kamu"
```

---

### 5️⃣ Push Branch ke GitHub

```bash
git push origin feature/card-X
```

Contoh untuk Member 1:
```bash
git push origin feature/card-1
```

---

### 6️⃣ Buat Pull Request

1. Buka repository di GitHub: [https://github.com/petarra/isb2-SecondChoice](https://github.com/petarra/isb2-SecondChoice)
2. Klik tombol **"Compare & Pull Request"** yang muncul otomatis
3. Isi detail Pull Request:
   - **Title:** `feat: fill card-X content - Nama Kamu`
   - **Description:** Jelaskan singkat apa yang kamu tambahkan
4. Pilih **minimal 1 member lain** sebagai reviewer di bagian **"Reviewers"**
5. Klik **"Create Pull Request"**

---

### 7️⃣ Review Pull Request Member Lain

Kalau kamu diminta jadi reviewer Pull Request member lain:

1. Buka tab **"Pull Requests"** di repository
2. Klik PR yang perlu direview
3. Buka tab **"Files changed"** untuk melihat perubahan
4. Kalau sudah oke, klik **"Review changes"** → pilih **"Approve"** → **"Submit review"**
5. Kalau ada yang perlu diperbaiki, pilih **"Request changes"** dan tulis komentar

---

### 8️⃣ Sinkronisasi Setelah Merge

Setelah PR kamu atau PR member lain di-merge, selalu sync dulu sebelum kerja lagi:

```bash
git checkout main
git pull origin main
```

---

## Aturan Commit

Gunakan format berikut untuk commit message:

```
feat: fill card-1 content - Nama Kamu
```

| Prefix | Kapan dipakai |
|--------|--------------|
| `feat:` | Menambahkan konten/fitur baru |
| `fix:` | Memperbaiki kesalahan |
| `style:` | Perubahan tampilan/CSS |
| `docs:` | Update dokumentasi |

**Hindari commit message seperti ini:**
```bash
❌ git commit -m "update"
❌ git commit -m "coba"
❌ git commit -m "final"
```

---

## Alur Pull Request

```
Kamu selesai edit card
        │
        ▼
git add → git commit → git push
        │
        ▼
Buat Pull Request di GitHub
        │
        ▼
Minta member lain untuk review
        │
        ▼
Member lain approve ✅
        │
        ▼
Mentor merge ke main 🎉
        │
        ▼
git pull origin main (semua sync)
```

---

## ⚠️ Hal yang Harus Diingat

- **Jangan** langsung push ke `main`
- **Jangan** edit card milik member lain
- Selalu `git pull origin main` sebelum mulai kerja
- PR di-merge **satu per satu**, tidak bersamaan
- Kalau ada conflict, hubungi mentor

---

## 👥 Tim

| Role | Nama | GitHub |
|------|------|--------|
| Mentor | petarra | [@petarra](https://github.com/petarra) |
| Member 1 | - | - |
| Member 2 | - | - |
| Member 3 | - | - |
| Member 4 | - | - |
| Member 5 | - | - |
| Member 6 | - | - |

> Member bisa update tabel ini sekalian pas ngisi card mereka 😄

---

*Informatics Summit Bootcamp II · MIF FT-UNTAN · 2026*