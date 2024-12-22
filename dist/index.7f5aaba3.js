window.addEventListener('scroll', ()=>{
    const scrollPosition = window.scrollY; // Posisi scroll saat ini
    const about = document.querySelector('.about'); // Elemen target
    // Menghitung persentase scroll untuk gradien
    const percentageScroll = Math.min(scrollPosition / 2000, 1);
    // Gradien dinamis berdasarkan posisi scroll
    const gradient = `radial-gradient(circle, rgba(42,48,143,${percentageScroll}) 0%, rgba(59,59,112,${percentageScroll}) 11%, rgba(24,24,24,${percentageScroll}) 67%)`;
    // Warna background selalu menyesuaikan
    about.style.background = percentageScroll > 0 ? gradient : '#181818';
});

//# sourceMappingURL=index.7f5aaba3.js.map
