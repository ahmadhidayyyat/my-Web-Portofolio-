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
        Huffman Coding
      </h1>
      <p class="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
        Sebuah panduan untuk memahami algoritma kompresi data berbasis pohon
        Huffman.
      </p>
    </header>

    <main class="max-w-4xl mx-auto space-y-10">
      <section class="bg-slate-800 p-6 sm:p-8 rounded-lg">
        <h2 class="text-3xl font-bold text-purple-400 mb-4">
          Apa Itu Huffman Coding?
        </h2>
        <div class="prose prose-invert prose-lg max-w-none">
          <p>
            Huffman Coding adalah algoritma kompresi data tanpa kehilangan
            (lossless) yang dikembangkan oleh David A. Huffman pada tahun 1952.
            Algoritma ini menggunakan pohon biner untuk menetapkan kode prefix
            berdasarkan frekuensi kemunculan karakter, sehingga data dapat
            dikompresi dengan efisien.
          </p>
          <p>Aplikasi dari algoritma ini meliputi:</p>
          <ul>
            <li>
              <strong>Kompresi File:</strong> Digunakan dalam format seperti ZIP
              dan GZIP.
            </li>
            <li>
              <strong>Transmisi Data:</strong> Mengurangi ukuran data dalam
              komunikasi jaringan.
            </li>
            <li>
              <strong>Pemrosesan Teks:</strong> Mengoptimalkan penyimpanan teks
              dalam aplikasi.
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
            Huffman Coding bekerja dengan membangun pohon Huffman berdasarkan
            frekuensi karakter, lalu menetapkan kode biner (0 dan 1) berdasarkan
            jalur dalam pohon tersebut.
          </p>
          <ol>
            <li>
              <strong>Persiapan (Inisialisasi):</strong>
              <ul>
                <li>Hitung frekuensi kemunculan setiap karakter dalam data.</li>
                <li>Buat daftar node dengan karakter dan frekuensinya.</li>
              </ul>
            </li>
            <li>
              <strong>Pembangunan Pohon:</strong>
              <ul>
                <li>
                  Ambil dua node dengan frekuensi terendah, gabungkan menjadi
                  satu node dengan frekuensi total.
                </li>
                <li>Ulangi hingga semua node menjadi satu pohon (akar).</li>
              </ul>
            </li>
            <li>
              <strong>Penghasilan Kode:</strong>
              <ul>
                <li>
                  Tetapkan kode 0 dan 1 berdasarkan arah kiri (0) dan kanan (1)
                  dari akar ke daun.
                </li>
                <li>Gunakan kode ini untuk mengkodekan data.</li>
              </ul>
            </li>
            <li>
              <strong>Finalisasi:</strong> Simpan pohon dan data terkode untuk
              dekompresi.
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
            untuk membangun pohon Huffman dan menghasilkan kode.
          </p>
          <pre><code class="language-javascript">class Node {
  constructor(char, freq) {
    this.char = char;
    this.freq = freq;
    this.left = null;
    this.right = null;
  }
}

function buildHuffmanTree(chars, freqs) {
  const nodes = chars.map((char, index) => new Node(char, freqs[index]));

  while (nodes.length > 1) {
    nodes.sort((a, b) => a.freq - b.freq);
    const left = nodes.shift();
    const right = nodes.shift();
    const parent = new Node(null, left.freq + right.freq);
    parent.left = left;
    parent.right = right;
    nodes.push(parent);
  }
  return nodes[0];
}

function generateCodes(root, currentCode = '', codes = {}) {
  if (root) {
    if (root.char) codes[root.char] = currentCode;
    generateCodes(root.left, currentCode + '0', codes);
    generateCodes(root.right, currentCode + '1', codes);
  }
  return codes;
}

// Contoh penggunaan
const chars = ['a', 'b', 'c', 'd'];
const freqs = [5, 9, 12, 13];
const root = buildHuffmanTree(chars, freqs);
const huffmanCodes = generateCodes(root);
console.log("Kode Huffman:");
for (let char in huffmanCodes) {
  console.log(`${char}: ${huffmanCodes[char]}`);
}
// Output contoh:
// Kode Huffman:
// a: 111
// b: 110
// c: 10
// d: 0
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
                <strong>Kompresi Efisien:</strong> Mengurangi ukuran data
                berdasarkan frekuensi.
              </li>
              <li>
                <strong>Tanpa Kehilangan Data:</strong> Menjaga integritas
                informasi asli.
              </li>
              <li>
                <strong>Aplikasi Luas:</strong> Digunakan dalam berbagai format
                kompresi.
              </li>
            </ul>
          </div>
          <div>
            <h3 class="text-2xl font-semibold text-red-400 mb-3">Kekurangan</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>
                <strong>Kurang Efisien untuk Data Kecil:</strong> Overhead pohon
                meningkatkan ukuran pada data pendek.
              </li>
              <li>
                <strong>Kompleksitas Dekompresi:</strong> Membutuhkan pohon
                untuk rekonstruksi.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section class="bg-slate-800 p-6 sm:p-8 rounded-lg">
        <h2 class="text-3xl font-bold text-purple-400 mb-4">Kesimpulan</h2>
        <div class="prose prose-invert prose-lg max-w-none">
          <p>
            Huffman Coding adalah algoritma kompresi data yang cerdas dan
            efisien, memanfaatkan pohon biner untuk mengoptimalkan penyimpanan.
            Dengan pendekatan berbasis frekuensi, algoritma ini menjadi fondasi
            penting dalam teknologi kompresi modern. Meskipun memiliki
            keterbatasan pada data kecil, pemahaman tentang Huffman Coding
            memperkaya wawasan dalam pengolahan data.
          </p>
        </div>
      </section>
    </main>
  </div>
</template>
```
