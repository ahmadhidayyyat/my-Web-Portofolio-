<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

// --- LOGIC UNTUK NAVBAR SCROLL (BAGIAN BARU) ---
// Membuat variabel reaktif untuk melacak status scroll
const isScrolled = ref(false);

// Fungsi yang akan dipanggil setiap kali event scroll terjadi
const handleScroll = () => {
  // Jika posisi scroll vertikal (window.scrollY) lebih dari 0, set isScrolled menjadi true.
  // Jika tidak (di paling atas), set menjadi false.
  isScrolled.value = window.scrollY > 0;
};

// Menambahkan event listener saat komponen pertama kali dimuat di browser
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

// Menghapus event listener saat komponen dihancurkan (penting untuk performa)
onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
// --- AKHIR DARI LOGIC NAVBAR SCROLL ---

// --- LOGIC UNTUK ACTIVE SECTION (TETAP SAMA) ---
const activeSection = ref("home");
let observer;

onMounted(() => {
  const options = { rootMargin: "-30% 0px -70% 0px", threshold: 0 };
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        activeSection.value = entry.target.id;
      }
    });
  }, options);

  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    observer.observe(section);
  });
});

onBeforeUnmount(() => {
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    observer.unobserve(section);
  });
});
</script>

<template>
  <header
    class="sticky top-0 z-50 py-4 transition-all duration-300"
    :class="{
      'bg-slate-900/80 backdrop-blur-sm border-b border-slate-800 shadow-lg':
        isScrolled,
      'bg-transparent': !isScrolled,
    }"
  >
    <nav class="container mx-auto flex justify-between items-center px-8">
      <div class="logo">
        <a href="#home" class="text-xl font-bold text-white">Ahmad Hidayat</a>
      </div>

      <div class="nav-links hidden md:flex items-center gap-x-8">
        <a
          href="#home"
          :class="[
            'transition-colors',
            activeSection === 'home'
              ? 'text-white font-semibold'
              : 'text-gray-400 hover:text-white',
          ]"
        >
          Home
        </a>
        <a
          href="#articles"
          :class="[
            'transition-colors',
            activeSection === 'articles'
              ? 'text-white font-semibold'
              : 'text-gray-400 hover:text-white',
          ]"
        >
          Articles
        </a>
        <a
          href="#comments"
          :class="[
            'transition-colors',
            activeSection === 'about'
              ? 'text-white font-semibold'
              : 'text-gray-400 hover:text-white',
          ]"
        >
          Comments
        </a>
      </div>
    </nav>
  </header>
</template>
