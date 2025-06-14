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
        Depth-First Search (DFS)
      </h1>
      <p class="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
        Sebuah panduan untuk memahami salah satu algoritma pencarian mendalam
        yang fundamental dalam teori graf.
      </p>
    </header>

    <main class="max-w-4xl mx-auto space-y-10">
      <section class="bg-slate-800 p-6 sm:p-8 rounded-lg">
        <h2 class="text-3xl font-bold text-purple-400 mb-4">
          Apa Itu Depth-First Search (DFS)?
        </h2>
        <div class="prose prose-invert prose-lg max-w-none">
          <p>
            Depth-First Search (DFS) adalah algoritma pencarian berbasis graf
            yang menjelajahi node dan sisi dengan cara mendalami setiap cabang
            sejauh mungkin sebelum mundur (*backtrack*). Diciptakan sebagai
            salah satu pendekatan klasik dalam ilmu komputer, algoritma ini
            sangat berguna untuk menelusuri struktur data seperti graf atau
            pohon.
          </p>
          <p>Kegunaannya sangat luas, di antaranya:</p>
          <ul>
            <li>
              <strong>Pencarian Jalur:</strong> Menemukan jalur dalam labirin
              atau permainan berbasis grid.
            </li>
            <li>
              <strong>Analisis Graf:</strong> Mendeteksi siklus atau menemukan
              komponen terhubung dalam jaringan.
            </li>
            <li>
              <strong>Kecerdasan Buatan:</strong> Digunakan untuk mengeksplorasi
              kemungkinan langkah dalam permainan seperti catur.
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
            DFS bekerja dengan pendekatan "mendalami terlebih dahulu". Algoritma
            ini memulai dari satu node dan terus menjelajahi tetangga secara
            mendalam sebelum kembali ke node sebelumnya untuk mengeksplorasi
            cabang lain. Prosesnya bisa diimplementasikan secara rekursif atau
            dengan tumpukan (*stack*).
          </p>
          <ol>
            <li>
              <strong>Persiapan (Inisialisasi):</strong>
              <ul>
                <li>
                  Pilih node awal, tandai sebagai "sudah dikunjungi", dan
                  inisialisasi struktur data untuk melacak node yang dikunjungi.
                </li>
              </ul>
            </li>
            <li>
              <strong>Proses Iteratif:</strong>
              <ul>
                <li>
                  Dari node saat ini, pilih tetangga yang belum dikunjungi dan
                  jelajahi lebih dalam secara rekursif.
                </li>
                <li>
                  Jika tidak ada tetangga yang belum dikunjungi, lakukan
                  *backtrack* ke node sebelumnya.
                </li>
              </ul>
            </li>
            <li>
              <strong>Finalisasi:</strong> Lanjutkan hingga semua node yang
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

  dfs(startVertex) {
    const visited = new Set();
    const result = [];

    const dfsUtil = (vertex) => {
      visited.add(vertex);
      result.push(vertex);

      const neighbors = this.adjacencyList.get(vertex);
      for (let neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          dfsUtil(neighbor);
        }
      }
    };

    dfsUtil(startVertex);
    console.log("Hasil DFS (dimulai dari node " + startVertex + "):", result);
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

graph.dfs(0);
// Output: Hasil DFS (dimulai dari node 0): [0, 1, 3, 4, 5, 2]
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
                <strong>Efisien untuk Graf Dalam:</strong> DFS sangat cocok
                untuk graf dengan cabang yang panjang.
              </li>
              <li>
                <strong>Penggunaan Memori Rendah:</strong> Hanya membutuhkan
                memori untuk melacak node yang dikunjungi.
              </li>
              <li>
                <strong>Fleksibel:</strong> Dapat digunakan untuk berbagai kasus
                seperti deteksi siklus.
              </li>
            </ul>
          </div>
          <div>
            <h3 class="text-2xl font-semibold text-red-400 mb-3">Kekurangan</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>
                <strong>Tidak Menjamin Jalur Terpendek:</strong> DFS tidak
                mempertimbangkan bobot atau jarak.
              </li>
              <li>
                <strong>Risiko Stack Overflow:</strong> Implementasi rekursif
                bisa gagal pada graf yang sangat besar.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section class="bg-slate-800 p-6 sm:p-8 rounded-lg">
        <h2 class="text-3xl font-bold text-purple-400 mb-4">Kesimpulan</h2>
        <div class="prose prose-invert prose-lg max-w-none">
          <p>
            Depth-First Search (DFS) adalah algoritma pencarian graf yang
            sederhana namun sangat berguna dalam berbagai aplikasi. Dengan
            pendekatan mendalamnya, DFS menjadi dasar untuk memecahkan masalah
            kompleks seperti analisis graf dan pengembangan AI. Meskipun
            memiliki keterbatasan, pemahaman tentang DFS memberikan landasan
            penting untuk mempelajari algoritma graf lainnya.
          </p>
        </div>
      </section>
    </main>
  </div>
</template>
```
