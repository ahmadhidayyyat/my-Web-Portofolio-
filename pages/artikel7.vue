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
      class="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 mb-12 font-semibold transition-colors"
    >
      <Icon name="mdi:arrow-left" />
      Kembali ke Daftar Artikel
    </NuxtLink>

    <header class="mb-12 text-center">
      <h1
        class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-purple-400 mb-4"
      >
        N-Queens Problem
      </h1>
      <p class="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
        Sebuah panduan untuk memahami masalah penempatan ratu pada papan catur
        menggunakan algoritma backtracking.
      </p>
    </header>

    <main class="max-w-4xl mx-auto space-y-10">
      <section class="bg-slate-800 p-6 sm:p-8 rounded-lg">
        <h2 class="text-3xl font-bold text-purple-400 mb-4">
          Apa Itu N-Queens Problem?
        </h2>
        <div class="prose prose-invert prose-lg max-w-none">
          <p>
            N-Queens Problem adalah masalah klasik dalam ilmu komputer di mana
            kita perlu menempatkan N ratu pada papan catur berukuran N×N
            sedemikian rupa sehingga tidak ada dua ratu yang saling menyerang
            (berada pada baris yang sama, kolom yang sama, atau diagonal).
            Masalah ini sering digunakan untuk menguji algoritma backtracking.
          </p>
          <p>Aplikasi dari masalah ini meliputi:</p>
          <ul>
            <li>
              <strong>Pemrograman Permainan:</strong> Merancang strategi
              penempatan dalam permainan catur.
            </li>
            <li>
              <strong>Optimasi:</strong> Menemukan solusi optimal dalam masalah
              penempatan.
            </li>
            <li>
              <strong>Pendidikan:</strong> Mengajarkan konsep backtracking dan
              rekursi.
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
            N-Queens Problem dipecahkan menggunakan pendekatan backtracking,
            yang mencoba menempatkan ratu pada setiap kolom dan mundur jika
            penempatan tidak valid. Algoritma ini memeriksa konflik pada baris,
            kolom, dan diagonal.
          </p>
          <ol>
            <li>
              <strong>Persiapan (Inisialisasi):</strong>
              <ul>
                <li>
                  Buat papan berukuran N×N dan inisialisasi array untuk melacak
                  posisi ratu.
                </li>
                <li>Tentukan aturan penempatan (tidak boleh menyerang).</li>
              </ul>
            </li>
            <li>
              <strong>Proses Pencarian:</strong>
              <ul>
                <li>
                  Tempatkan ratu pada kolom tertentu dan periksa validitas
                  (tanpa konflik).
                </li>
                <li>
                  Jika valid, lanjutkan ke kolom berikutnya secara rekursif.
                </li>
                <li>
                  Jika tidak valid, kembalikan (*backtrack*) dan coba posisi
                  lain.
                </li>
              </ul>
            </li>
            <li>
              <strong>Finalisasi:</strong> Hentikan saat semua ratu ditempatkan
              atau semua kemungkinan telah dicoba.
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
            untuk menyelesaikan N-Queens Problem dengan N = 4.
          </p>
          <pre><code class="language-javascript">function solveNQueens(n) {
  const board = Array(n).fill().map(() => Array(n).fill('.'));
  const solutions = [];

  function isSafe(board, row, col) {
    // Periksa kolom vertikal
    for (let i = 0; i < row; i++) {
      if (board[i][col] === 'Q') return false;
    }
    // Periksa diagonal kiri atas
    for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === 'Q') return false;
    }
    // Periksa diagonal kanan atas
    for (let i = row, j = col; i >= 0 && j < n; i--, j++) {
      if (board[i][j] === 'Q') return false;
    }
    return true;
  }

  function solveUtil(board, row) {
    if (row === n) {
      solutions.push(board.map(row => row.join('')));
      return;
    }

    for (let col = 0; col < n; col++) {
      if (isSafe(board, row, col)) {
        board[row][col] = 'Q';
        solveUtil(board, row + 1);
        board[row][col] = '.'; // Backtrack
      }
    }
  }

  solveUtil(board, 0);
  return solutions;
}

// Contoh penggunaan untuk N = 4
const n = 4;
const result = solveNQueens(n);
console.log("Solusi untuk N-Queens (N = 4):");
result.forEach((solution, index) => {
  console.log(`Solusi ${index + 1}:`);
  console.log(solution.split('').map(row => row.split('').join(' ')).join('\n'));
});
// Output contoh (salah satu solusi):
// Solusi 1:
// . Q . . 
// . . . Q 
// Q . . . 
// . . Q .
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
                <strong>Solusi Pasti:</strong> Menemukan semua kemungkinan
                penempatan yang valid.
              </li>
              <li>
                <strong>Konsep Edukatif:</strong> Mengajarkan backtracking dan
                rekursi.
              </li>
              <li>
                <strong>Fleksibel:</strong> Dapat diterapkan pada berbagai
                ukuran papan.
              </li>
            </ul>
          </div>
          <div>
            <h3 class="text-2xl font-semibold text-red-400 mb-3">Kekurangan</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>
                <strong>Kurang Efisien untuk N Besar:</strong> Waktu eksekusi
                meningkat secara eksponensial.
              </li>
              <li>
                <strong>Penggunaan Memori:</strong> Membutuhkan ruang untuk
                melacak solusi rekursif.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section class="bg-slate-800 p-6 sm:p-8 rounded-lg">
        <h2 class="text-3xl font-bold text-purple-400 mb-4">Kesimpulan</h2>
        <div class="prose prose-invert prose-lg max-w-none">
          <p>
            N-Queens Problem adalah tantangan klasik yang mengilustrasikan
            kekuatan backtracking dalam menyelesaikan masalah penempatan. Dengan
            pendekatan rekursif, algoritma ini efektif untuk papan kecil hingga
            menengah, memberikan wawasan berharga dalam pengembangan algoritma
            dan permainan. Meskipun memiliki keterbatasan pada skala besar,
            pemahaman tentang N-Queens memperkaya kemampuan pemecahan masalah.
          </p>
        </div>
      </section>
    </main>
  </div>
</template>
```
