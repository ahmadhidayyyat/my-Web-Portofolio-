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
        Breadth-First Search (BFS)
      </h1>
      <p class="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
        Sebuah panduan untuk memahami algoritma pencarian lebar yang digunakan
        dalam teori graf untuk menjelajahi node secara berlapis.
      </p>
    </header>

    <main class="max-w-4xl mx-auto space-y-10">
      <section class="bg-slate-800 p-6 sm:p-8 rounded-lg">
        <h2 class="text-3xl font-bold text-purple-400 mb-4">
          Apa Itu Breadth-First Search (BFS)?
        </h2>
        <div class="prose prose-invert prose-lg max-w-none">
          <p>
            Breadth-First Search (BFS) adalah algoritma pencarian berbasis graf
            yang menjelajahi semua node pada tingkat yang sama sebelum
            melanjutkan ke tingkat berikutnya. Algoritma ini menggunakan
            pendekatan *level-by-level* dan sering diterapkan pada struktur data
            seperti graf atau pohon yang tidak memiliki bobot negatif.
          </p>
          <p>Kegunaannya sangat beragam, di antaranya:</p>
          <ul>
            <li>
              <strong>Pencarian Jalur Terpendek:</strong> Menemukan jalur
              terpendek tanpa bobot pada graf tidak berarah.
            </li>
            <li>
              <strong>Jaringan Komputer:</strong> Mengidentifikasi komponen
              terhubung dalam jaringan.
            </li>
            <li>
              <strong>Permainan:</strong> Mengoptimalkan pergerakan karakter
              dalam lingkungan berbasis grid.
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
            BFS bekerja dengan pendekatan "lebar terlebih dahulu" menggunakan
            antrian (*queue*) untuk menjelajahi node secara berlapis. Algoritma
            ini memastikan bahwa semua tetangga dari node saat ini dieksplorasi
            sebelum melangkah ke node yang lebih jauh.
          </p>
          <ol>
            <li>
              <strong>Persiapan (Inisialisasi):</strong>
              <ul>
                <li>
                  Pilih node awal, tandai sebagai "sudah dikunjungi", dan
                  masukkan ke antrian.
                </li>
                <li>
                  Siapkan struktur data untuk melacak node yang sudah
                  dikunjungi.
                </li>
              </ul>
            </li>
            <li>
              <strong>Proses Iteratif:</strong>
              <ul>
                <li>
                  Ambil node dari antrian, lalu eksplorasi semua tetangga yang
                  belum dikunjungi dan masukkan ke antrian.
                </li>
                <li>Ulangi hingga antrian kosong.</li>
              </ul>
            </li>
            <li>
              <strong>Finalisasi:</strong> Proses selesai ketika semua node yang
              terhubung telah dikunjungi.
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
            yang relevan dengan ekosistem web development.
          </p>
          <pre><code class="language-javascript">class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList.get(vertex1).push(vertex2);
    this.adjacencyList.get(vertex2).push(vertex1); // Untuk graf tidak berarah
  }

  bfs(startVertex) {
    const visited = new Set();
    const queue = [startVertex];
    const result = [];

    while (queue.length > 0) {
      const vertex = queue.shift();
      if (!visited.has(vertex)) {
        visited.add(vertex);
        result.push(vertex);
        const neighbors = this.adjacencyList.get(vertex);
        for (let neighbor of neighbors) {
          if (!visited.has(neighbor)) {
            queue.push(neighbor);
          }
        }
      }
    }

    console.log("Hasil BFS (dimulai dari node " + startVertex + "):", result);
    return result;
  }
}

// Contoh penggunaan
const graph = new Graph();
graph.addVertex(0);
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addVertex(5);
graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 3);
graph.addEdge(2, 4);
graph.addEdge(3, 4);
graph.addEdge(3, 5);
graph.addEdge(4, 5);

graph.bfs(0);
// Output: Hasil BFS (dimulai dari node 0): [0, 1, 2, 3, 4, 5]
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
                <strong>Jalur Terpendek pada Graf Tanpa Bobot:</strong> Menjamin
                jalur terpendek pada graf tidak berarah.
              </li>
              <li>
                <strong>Eksplorasi Terstruktur:</strong> Menjelajah secara
                berlapis, mudah dipahami.
              </li>
              <li>
                <strong>Aplikatif:</strong> Berguna dalam berbagai aplikasi
                jaringan dan permainan.
              </li>
            </ul>
          </div>
          <div>
            <h3 class="text-2xl font-semibold text-red-400 mb-3">Kekurangan</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>
                <strong>Penggunaan Memori Tinggi:</strong> Membutuhkan antrian
                yang bisa besar untuk graf kompleks.
              </li>
              <li>
                <strong>Kurang Efisien untuk Graf Dalam:</strong> Tidak optimal
                untuk graf dengan cabang panjang.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section class="bg-slate-800 p-6 sm:p-8 rounded-lg">
        <h2 class="text-3xl font-bold text-purple-400 mb-4">Kesimpulan</h2>
        <div class="prose prose-invert prose-lg max-w-none">
          <p>
            Breadth-First Search (BFS) adalah algoritma pencarian graf yang
            sangat efektif untuk menjelajahi node secara berlapis, terutama
            untuk menemukan jalur terpendek pada graf tanpa bobot. Dengan
            pendekatan yang terstruktur menggunakan antrian, BFS menjadi alat
            penting dalam analisis jaringan dan pengembangan permainan. Meskipun
            memiliki keterbatasan dalam penggunaan memori, pemahaman tentang BFS
            memperkaya wawasan dalam dunia algoritma graf.
          </p>
        </div>
      </section>
    </main>
  </div>
</template>
```
