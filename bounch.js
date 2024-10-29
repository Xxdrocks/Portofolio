const javascript = document.getElementById('javascript');
const php = document.getElementById('php');
const html = document.getElementById('html');
const css = document.getElementById('css');

let direction = 1; // 1 untuk bergerak ke bawah, -1 untuk ke atas
const moveAmount = 2; // Jumlah piksel untuk bergerak setiap frame
const maxOffset = 20; // Jarak maksimum yang akan ditempuh

// Inisialisasi posisi
let offset = 0;

function animate() {
    // Update posisi
    offset += direction * moveAmount;

    // Jika sudah mencapai batas atas atau bawah, ubah arah
    if (offset >= maxOffset || offset <= -maxOffset) {
        direction *= -1; // Ubah arah
    }

    // Update posisi gambar
    javascript.style.transform = `translateY(${offset}px)`;
    php.style.transform = `translateY(${offset}px)`;
    html.style.transform = `translateY(${offset}px)`;
    css.style.transform = `translateY(${offset}px)`;

    requestAnimationFrame(animate); // Panggil fungsi animasi berikutnya
}

// Mulai animasi
animate();
