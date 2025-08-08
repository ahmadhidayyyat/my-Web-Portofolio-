```vue
<script setup>
// Baris ini memberitahu Nuxt untuk menggunakan layout 'article' untuk halaman ini
definePageMeta({
  layout: "article",
});
</script>
<template>
  <div class="container mx-auto px-4 sm:px-8 py-8">
    <NuxtLink
      to="/#articles"
      class="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-12 font-semibold transition-colors"
    >
      <Icon name="mdi:arrow-left" />
      Kembali ke Daftar Artikel
    </NuxtLink>

    <header class="mb-12 text-center">
      <h1
        class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-blue-400 mb-4"
      >
        Rat in Maze
      </h1>
      <p class="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
        Sebuah panduan untuk memecahkan masalah klasik tikus dalam labirin
        menggunakan algoritma pencarian.
      </p>
    </header>

    <main class="max-w-4xl mx-auto space-y-10">
      <section class="bg-slate-800 p-6 sm:p-8 rounded-lg">
        <h2 class="text-3xl font-bold text-purple-400 mb-4">
          Apa Itu Rat in Maze?
        </h2>
        <div class="prose prose-invert prose-lg max-w-none">
          <p>
            Rat in Maze adalah masalah klasik dalam ilmu komputer di mana sebuah
            tikus (atau agen) harus menemukan jalur keluar dari labirin yang
            direpresentasikan sebagai matriks grid. Setiap sel dalam grid
            menunjukkan apakah tikus dapat bergerak ke arah tertentu (misalnya,
            ke atas, bawah, kiri, atau kanan), dengan beberapa sel menjadi
            dinding atau rintangan.
          </p>
          <p>Aplikasi dari masalah ini meliputi:</p>
          <ul>
            <li>
              <strong>Permainan:</strong> Merancang navigasi karakter dalam game
              berbasis grid.
            </li>
            <li>
              <strong>Robotika:</strong> Menentukan jalur optimal untuk robot di
              lingkungan terbatas.
            </li>
            <li>
              <strong>AI dan Simulasi:</strong> Menguji algoritma pencarian
              seperti backtracking atau DFS.
            </li>
          </ul>
        </div>
      </section>

      <section class="bg-slate-800 p-6 sm:p-8 rounded-lg">
        <h2 class="text-3xl font-bold text-purple-400 mb-4">
          Bagaimana Cara Kerjanya?
        </h2>
        <div class="prose prose-invert prose-lg max-w-none">
          <p>
            Rat in Maze biasanya dipecahkan menggunakan pendekatan backtracking,
            yang mirip dengan DFS, tetapi dengan fokus pada pencarian jalur.
            Algoritma ini mencoba semua kemungkinan langkah dan mundur jika
            jalan buntu ditemukan.
          </p>
          <ol>
            <li>
              <strong>Persiapan (Inisialisasi):</strong>
              <ul>
                <li>
                  Tentukan matriks labirin dengan 0 (jalan) dan 1 (dinding),
                  serta posisi awal dan tujuan.
                </li>
                <li>Inisialisasi matriks solusi untuk melacak jalur.</li>
              </ul>
            </li>
            <li>
              <strong>Proses Pencarian:</strong>
              <ul>
                <li>
                  Mulai dari posisi awal, coba semua arah yang memungkinkan
                  (atas, bawah, kiri, kanan).
                </li>
                <li>
                  Jika langkah valid dan belum dikunjungi, tandai dan lanjutkan
                  rekursif.
                </li>
                <li>
                  Jika jalan buntu, kembalikan (*backtrack*) ke langkah
                  sebelumnya.
                </li>
              </ul>
            </li>
            <li>
              <strong>Finalisasi:</strong> Hentikan saat tujuan tercapai atau
              semua kemungkinan telah dicoba.
            </li>
          </ol>
        </div>
      </section>

      <section class="bg-slate-800 p-6 sm:p-8 rounded-lg">
        <h2 class="text-3xl font-bold text-purple-400 mb-4">
          Contoh Implementasi (JavaScript)
        </h2>
        <div class="prose prose-invert prose-lg max-w-none">
          <p>
            Berikut adalah contoh implementasi sederhana menggunakan JavaScript
            untuk menyelesaikan masalah Rat in Maze.
          </p>
          <pre><code class="language-javascript">function solveMaze(maze) {
  const N = maze.length;
  const solution = Array(N).fill().map(() => Array(N).fill(0));

  function isSafe(x, y) {
    return (
      x >= 0 && x < N && y >= 0 && y < N && maze[x][y] === 1 && solution[x][y] === 0
    );
  }

  function solveUtil(x, y) {
    if (x === N - 1 && y === N - 1) {
      solution[x][y] = 1;
      return true;
    }

    if (isSafe(x, y)) {
      solution[x][y] = 1;

      if (solveUtil(x + 1, y)) return true; // Bawah
      if (solveUtil(x, y + 1)) return true; // Kanan
      if (solveUtil(x - 1, y)) return true; // Atas
      if (solveUtil(x, y - 1)) return true; // Kiri

      solution[x][y] = 0;
      return false;
    }
    return false;
  }

  if (solveUtil(0, 0)) {
    console.log("Jalur solusi:");
    for (let i = 0; i < N; i++) {
      console.log(solution[i].join(" "));
    }
  } else {
    console.log("Tidak ada solusi.");
  }
}

// Contoh penggunaan
const maze = [
  [1, 0, 0, 0],
  [1, 1, 0, 1],
  [0, 1, 0, 0],
  [1, 1, 1, 1]
];
solveMaze(maze);
// Output: 
// Jalur solusi:
// 1 0 0 0
// 1 1 0 0
// 0 1 0 0
// 0 1 1 1
</code></pre>
        </div>
      </section>

      <section class="bg-slate-800 p-6 sm:p-8 rounded-lg">
        <h2 class="text-3xl font-bold text-purple-400 mb-6 text-center">
          Kelebihan & Kekurangan
        </h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div>
            <h3 class="text-2xl font-semibold text-green-400 mb-3">
              Kelebihan
            </h3>
            <ul class="list-disc list-inside space-y-2">
              <li>
                <strong>Penemuan Jalur Pasti:</strong> Menjamin solusi jika ada
                jalur yang valid.
              </li>
              <li>
                <strong>Konsep Sederhana:</strong> Mudah dipahami dan
                diimplementasikan.
              </li>
              <li>
                <strong>Fleksibel:</strong> Dapat disesuaikan untuk berbagai
                ukuran labirin.
              </li>
            </ul>
          </div>
          <div>
            <h3 class="text-2xl font-semibold text-red-400 mb-3">Kekurangan</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>
                <strong>Kurang Efisien untuk Labirin Besar:</strong> Membutuhkan
                banyak percobaan pada labirin kompleks.
              </li>
              <li>
                <strong>Penggunaan Memori:</strong> Membutuhkan ruang untuk
                melacak jalur rekursif.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section class="bg-slate-800 p-6 sm:p-8 rounded-lg">
        <h2 class="text-3xl font-bold text-purple-400 mb-4">Kesimpulan</h2>
        <div class="prose prose-invert prose-lg max-w-none">
          <p>
            Rat in Maze adalah masalah menarik yang mengajarkan konsep
            backtracking dalam pencarian jalur. Dengan pendekatan rekursif,
            algoritma ini efektif untuk menyelesaikan labirin sederhana dan
            memberikan wawasan berharga dalam pengembangan permainan dan
            robotika. Meskipun memiliki keterbatasan pada skala besar, pemahaman
            tentang Rat in Maze memperkaya kemampuan pemecahan masalah dalam
            ilmu komputer.
          </p>
        </div>
      </section>
    </main>
  </div>
</template>
```
