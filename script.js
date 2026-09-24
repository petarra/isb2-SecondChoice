// ============================================================
// Pertemuan 3 - ISB (javascript javascript-an)
// ============================================================

document.addEventListener('DOMContentLoaded', function () {

    // ============================================================
    // BAGIAN 1: EVENT DELEGATION (HAPUS, LIKE, FAV, KLIK KARTU)
    // ============================================================
    // Tangkap wadah gedenya, biar gak perlu pasang listener satu-satu di tiap card
    const productContainer = document.getElementById('product-container');

    // Bantuan variabel elemen pop-up modal (bisa kamu uncomment kalau mau pakai):
    // const popupModal = document.getElementById('popup-modal');
    // const btnClosePopup = document.getElementById('btn-close-popup');
    // const popupImg = document.getElementById('popup-img');
    // const popupTitle = document.getElementById('popup-title');
    // const popupDesc = document.getElementById('popup-desc');
    // const popupPrice = document.getElementById('popup-price');
    // const popupBadge = document.getElementById('popup-badge');

    productContainer.addEventListener('click', function (event) {
        const target = event.target; // Ini elemen yang beneran lagi diklik user

        // --------------------------------------------------------
        // FITUR 1: HAPUS CARD (DELETE)
        // --------------------------------------------------------
        // Clue pengerjaan:
        // 1. Cek dulu apakah yang diklik itu tombol delete (.btn-delete), pake .closest()
        // 2. Kalo beneran tombol delete:
        //    - Cari card pembungkus terdekatnya yang punya class .col
        //    - Kasih pop-up konfirmasi pake confirm('Yakin mau hapus?')
        //    - Kalo user klik OK, tendang card-nya dari layar pake .remove()

        // GAS TULIS KODE FITUR 1 DI SINI CUY:
        const delBtn = target.closest('.btn-delete');

        if (delBtn) {
            const delCol = delBtn.closest('.col');
            const delConfirm = confirm("Apakah Anda yakin akan menghapus kolom ini?");
            if (delConfirm) {
                delCol.remove();
                alert("Berhasil dihapus!");
            }
            return;
        }

        // --------------------------------------------------------
        // FITUR 2A: TOMBOL LIKE
        // --------------------------------------------------------
        // Clue pengerjaan:
        // 1. Cek apakah yang diklik itu tombol like (.btn-like)
        // 2. Kalo iya:
        //    - Mainin class-nya pake .classList.toggle() buat class 'btn-danger' sama 'active'
        //    - Cek apakah tombolnya lagi punya class 'active' atau gak:
        //      * Kalo aktif, ubah teks dalem tombolnya (.innerHTML) jadi '❤️ Suka'
        //      * Kalo gak aktif, balikin teksnya jadi '🤍 Suka'

        // GAS TULIS KODE FITUR 2A DI SINI:
        const tombolLike = target.closest('.btn-like');

        if (tombolLike) {
            tombolLike.classList.toggle('btn-danger');
            tombolLike.classList.toggle('active');

            if (tombolLike.classList.contains('active')) {
                tombolLike.innerHTML = '❤️ Suka';
            } else {
                tombolLike.innerHTML = '🤍 Suka';
            }

            return;
        }



        // --------------------------------------------------------
        // FITUR 2B: TOMBOL FAVORIT (FAV)
        // --------------------------------------------------------
        // Clue pengerjaan:
        // 1. Cek apakah yang diklik itu tombol fav (.btn-fav)
        // 2. Kalo iya:
        //    - Cari card terdekatnya (.card), terus toggle class 'is-favorite' biar dapet border emas
        //    - Toggle juga class 'btn-warning' sama 'active' di tombol fav-nya
        //    - Cek status aktifnya:
        //      * Kalo aktif, ganti teks jadi '⭐ Favorit'
        //      * Kalo gak aktif, balikin jadi '⭐ Fav'

        // GAS TULIS KODE FITUR 2B DI SINI:
        const tombolFav = target.closest('.btn-fav');

        if (tombolFav) {
            const kartu = tombolFav.closest('.card');

            kartu.classList.toggle('is-favorite');
            tombolFav.classList.toggle('btn-warning');
            tombolFav.classList.toggle('active');

            if (tombolFav.classList.contains('active')) {
                tombolFav.innerHTML = '⭐ Favorit';
            } else {
                tombolFav.innerHTML = '⭐ Fav';
            }

            return;
        }

        // --------------------------------------------------------
        // FITUR 2C: POP-UP DETAIL PRODUK (KLIK KARTU)
        // --------------------------------------------------------
        // Clue pengerjaan:
        // 1. Cek apakah yang diklik itu area kartu (.card), pake .closest('.card')
        // 2. Kalo iya (dan bukan tombol-tombol di atas):
        //    - Ambil data dari dalem kartu:
        //        * Gambar: card.querySelector('.product-img').src
        //        * Judul: card.querySelector('.fw-semibold').textContent
        //        * Deskripsi: card.querySelector('.small.text-secondary').textContent
        //        * Harga: card.querySelector('.product-price').textContent
        //        * Kategori: card.getAttribute('data-category')
        //    - Masukin data tadi ke elemen pop-up (popupImg.src, popupTitle.textContent, dll.)
        //    - Munculin pop-up modal dengan cara hapus class 'd-none' pake .classList.remove('d-none')

        // Bantuan variabel kartu:
        // const card = target.closest('.card');

        // GAS TULIS KODE FITUR POP-UP DI SINI:



    });


    // ============================================================
    // BAGIAN 2: SEARCH & FILTER SIMPEL
    // ============================================================
    const searchInput = document.getElementById('search-input');   // Input ketikan search
    const filterSelect = document.getElementById('filter-select'); // Dropdown kategori

    function filterProduct() {
        // Clue pengerjaan:
        // 1. Ambil teks yang diketik di searchInput, kecilin semua hurufnya pake .toLowerCase()
        // 2. Ambil opsi kategori yang lagi dipilih di dropdown filterSelect (.value)
        // 3. Ambil semua card produk pake querySelectorAll('.card')
        // 4. Looping tiap card (bisa pake forEach):
        //    - Ambil pembungkus kolomnya (.col)
        //    - Ambil nama produknya (.fw-semibold), kecilin juga hurufnya
        //    - Ambil kategori card dari atribut data-category
        //    - Cek apakah nama produk mengandung kata yang dicari user (pake .includes())
        //    - Cek apakah kategorinya cocok sama pilihan dropdown (kalau 'all' berarti lolos semua)
        //    - Kalo nama DAN kategorinya cocok, tampilin card-nya (style.display = '')
        //    - Kalo gak cocok, umpetin card-nya (style.display = 'none')

        // GAS TULIS KODE FUNGSI filterProduk DI SINI:
      
        const keyword = searchInput.value.toLowerCase();
        const kategori = filterSelect.value;

        document.querySelectorAll('.col > .card').forEach(function (card) {
            const col = card.closest('.col');
            const nama = card.querySelector('.fw-semibold').textContent.toLowerCase();
            const cardKategori = card.dataset.category;

            const cocokNama = nama.includes(keyword);
            const cocokKategori = kategori === 'all' || cardKategori === kategori;

            col.style.display = (cocokNama && cocokKategori) ? '' : 'none';
        });
        }

        searchInput.addEventListener('input', filterProduct);
        filterSelect.addEventListener('change', filterProduct);


            

    // Pasang event listener buat search & dropdown filter:
    // - searchInput dengerin event 'input' (tiap ngetik langsung ngefilter)
    // - filterSelect dengerin event 'change' (pas opsi dropdown diganti)
    // Keduanya tinggal panggil fungsi filterProduk aja cuy!

    // GAS TULIS EVENT LISTENERNYA DI SINI:





    // ============================================================
    // BAGIAN 3: DARK & LIGHT MODE
    // ============================================================
    const btnTheme = document.getElementById('btn-theme'); // Tombol dark mode

    // Clue pengerjaan:
    // 1. Pasang event listener 'click' di tombol btnTheme
    // 2. Di dalem fungsinya:
    //    - Toggle class 'dark-mode' di elemen document.body
    //    - Cek apakah body sekarang lagi ada class 'dark-mode' atau gak:
    //      * Kalo gelap (ada class 'dark-mode'), ubah teks tombol jadi '☀️ Light'
    //      * Kalo terang (gak ada class 'dark-mode'), ubah teks tombol jadi '🌙 Dark'

    // GAS TULIS KODE DARK MODE DI SINI:
    btnTheme.addEventListener('click', function () {
        if (btnTheme.textContent === '🌙 Dark') {
            btnTheme.textContent = '☀️ Light';
            document.body.classList.toggle('dark-mode');
        } else {
            btnTheme.textContent = '🌙 Dark';
            document.body.classList.toggle('dark-mode');
        }
    })




    // ============================================================
    // BAGIAN 4: GANTI WARNA BACKGROUND
    // ============================================================
    const bgColorPicker = document.getElementById('bg-color-picker'); // Kotak pemilih warna

    // Clue pengerjaan:
    // 1. Pasang event listener 'input' di bgColorPicker
    // 2. Di dalem fungsinya:
    //    - Ambil kode warna yang dipilih user lewat bgColorPicker.value
    //    - Langsung tembak warnanya ke document.body.style.backgroundColor

    // GAS TULIS KODE GANTI WARNA DI SINI:
    bgColorPicker.addEventListener('input', function () {
    const warnaDipilih = bgColorPicker.value;
    document.body.style.backgroundColor = warnaDipilih;
});





    // ============================================================
    // BAGIAN 5: TUTUP POP-UP MODAL
    // ============================================================
    // Clue pengerjaan:
    // 1. Pasang event listener 'click' di tombol silang btnClosePopup:
    //    - Tambahin class 'd-none' ke popupModal biar pop-up-nya ketutup
    // 2. Pasang event listener 'click' di popupModal:
    //    - Kalo yang diklik beneran area latar belakang gelap (event.target === popupModal),
    //      tutup pop-up dengan nambahin class 'd-none'
    // 3. (Opsional) Pasang event 'keydown' di document:
    //    - Kalo tombol keyboard 'Escape' ditekan, tutup pop-up modal

    // GAS TULIS KODE TUTUP POP-UP DI SINI:



});
