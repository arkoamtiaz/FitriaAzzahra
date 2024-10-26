document.addEventListener("DOMContentLoaded", () => {
    const confettiContainer = document.querySelector('.confetti');
    const celebrateButton = document.getElementById('celebrateBtn');
    const surpriseImage = document.getElementById('surpriseImage');

    // Membuat confetti
    function createConfetti() {
        const confettiPiece = document.createElement('div');
        confettiPiece.classList.add('confetti-piece');

        // Mengatur posisi acak dan warna
        confettiPiece.style.left = Math.random() * 100 + 'vw';
        confettiPiece.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confettiPiece.style.animationDuration = Math.random() * 3 + 2 + 's';
        confettiPiece.style.opacity = Math.random() * 0.7 + 0.3; // Transparansi acak

        confettiContainer.appendChild(confettiPiece);

        // Menghapus confetti setelah animasi selesai
        setTimeout(() => {
            confettiPiece.remove();
        }, 5000);
    }

    // Membuat confetti setiap 100ms
    setInterval(createConfetti, 100);

    // Menangani klik tombol
    celebrateButton.addEventListener('click', () => {
        surpriseImage.style.display = 'block'; // Tampilkan gambar surprise
        surpriseImage.classList.add('fadeIn'); // Tambahkan animasi
    });
});
