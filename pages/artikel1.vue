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
        Algoritma Dijkstra
      </h1>
      <p class="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
        Sebuah panduan untuk memahami salah satu algoritma pencarian rute
        terpendek yang paling fundamental di dunia ilmu komputer.
      </p>
    </header>

    <main class="max-w-4xl mx-auto space-y-10">
      <section class="bg-slate-800 p-6 sm:p-8 rounded-lg">
        <h2 class="text-3xl font-bold text-purple-400 mb-4">
          Apa Itu Algoritma Dijkstra?
        </h2>
        <div class="prose prose-invert prose-lg max-w-none">
          <p>
            Algoritma Dijkstra adalah sebuah metode klasik dan efisien dalam
            teori graf yang berfungsi untuk menemukan jalur terpendek antara
            satu titik (disebut *node sumber*) dengan semua titik lain dalam
            sebuah graf yang memiliki bobot (jarak atau biaya) non-negatif.
            Diciptakan oleh seorang ilmuwan komputer legendaris asal Belanda,
            Edsger W. Dijkstra pada tahun 1956, algoritma ini menjadi fondasi
            bagi banyak aplikasi modern yang kita gunakan sehari-hari.
          </p>
          <p>Kegunaannya sangat luas, di antaranya:</p>
          <ul>
            <li>
              <strong>Sistem Navigasi GPS:</strong> Menentukan rute tercepat
              dari lokasimu ke tujuan.
            </li>
            <li>
              <strong>Jaringan Komputer:</strong> Membantu router menemukan
              jalur pengiriman data yang paling efisien di internet.
            </li>
            <li>
              <strong>Desain Game:</strong> Mengarahkan karakter non-pemain
              (NPC) untuk bergerak menuju tujuannya dengan cara paling optimal.
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
            Intuisi di balik Dijkstra adalah pendekatan "rakus" (greedy). Pada
            setiap langkah, algoritma ini dengan cerdas selalu memilih jalur
            terpendek berikutnya yang bisa dijangkau. Prosesnya bisa dibayangkan
            seperti menyebarkan gelombang dari titik awal, di mana gelombang
            tersebut selalu mencapai titik terdekat terlebih dahulu.
          </p>
          <ol>
            <li>
              <strong>Persiapan (Inisialisasi):</strong>
              <ul>
                <li>
                  Tentukan titik awal, jarak ke titik ini adalah 0. Jarak ke
                  semua titik lain diatur sebagai "tak terhingga".
                </li>
                <li>
                  Siapkan dua set: satu untuk node yang "belum dikunjungi" dan
                  satu untuk yang "sudah dikunjungi" (awalnya kosong).
                </li>
              </ul>
            </li>
            <li>
              <strong>Proses Iteratif:</strong>
              <ul>
                <li>
                  Selama masih ada node di set "belum dikunjungi", pilih node
                  dengan jarak terpendek yang tercatat.
                </li>
                <li>Pindahkan node terpilih ke set "sudah dikunjungi".</li>
                <li>
                  Untuk setiap tetangga dari node yang baru saja dikunjungi,
                  hitung jaraknya dari titik awal. Jika jarak baru ini lebih
                  pendek dari yang tercatat sebelumnya, perbarui jaraknya.
                </li>
              </ul>
            </li>
            <li>
              <strong>Finalisasi:</strong> Ulangi proses hingga set "belum
              dikunjungi" kosong. Hasil akhirnya adalah peta jarak terpendek
              dari titik awal ke semua titik lain yang terjangkau.
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
          <pre><code class="language-javascript">class PriorityQueue {
    constructor() {
      this.values = [];
    }
    enqueue(val, priority) {
      this.values.push({ val, priority });
      this.sort();
    }
    dequeue() {
      return this.values.shift();
    }
    sort() {
      this.values.sort((a, b) => a.priority - b.priority);
    }
  }
  
  function dijkstra(graph, start) {
    const distances = {};
    const previous = {};
    const pq = new PriorityQueue();
    let path = [];
    let smallest;
  
    // Inisialisasi
    for (let vertex in graph) {
      if (vertex === start) {
        distances[vertex] = 0;
        pq.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        pq.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }
  
    while (pq.values.length) {
      smallest = pq.dequeue().val;
  
      if (smallest) {
        for (let neighbor in graph[smallest]) {
          let nextNode = graph[smallest][neighbor];
          let candidate = distances[smallest] + nextNode.weight;
          let nextNeighbor = nextNode.node;
  
          if (candidate < distances[nextNeighbor]) {
            distances[nextNeighbor] = candidate;
            previous[nextNeighbor] = smallest;
            pq.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }
    return distances;
  }
  
  const graph = {
    A: [{node: 'B', weight: 1}, {node: 'D', weight: 5}],
    B: [{node: 'A', weight: 1}, {node: 'C', weight: 4}, {node: 'E', weight: 2}],
    C: [{node: 'B', weight: 4}, {node: 'F', weight: 1}],
    D: [{node: 'A', weight: 5}, {node: 'E', weight: 3}],
    E: [{node: 'B', weight: 2}, {node: 'D', weight: 3}, {node: 'F', weight: 1}],
    F: [{node: 'C', weight: 1}, {node: 'E', weight: 1}]
  };
  
  console.log(dijkstra(graph, 'A'));
  // Output: { A: 0, B: 1, C: 5, D: 4, E: 3, F: 4 }
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
                <strong>Optimal:</strong> Dijamin menemukan jalur terpendek jika
                tidak ada bobot negatif.
              </li>
              <li>
                <strong>Intuitif:</strong> Konsepnya relatif mudah dipahami
                dengan pendekatan "greedy".
              </li>
              <li>
                <strong>Aplikatif:</strong> Menjadi dasar untuk banyak algoritma
                dan aplikasi di dunia nyata.
              </li>
            </ul>
          </div>
          <div>
            <h3 class="text-2xl font-semibold text-red-400 mb-3">Kekurangan</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>
                <strong>Bobot Negatif:</strong> Tidak dapat bekerja dengan benar
                jika graf memiliki sisi berbobot negatif.
              </li>
              <li>
                <strong>Kinerja:</strong> Untuk graf yang sangat padat, bisa
                lebih lambat dibandingkan algoritma lain seperti A*.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section class="bg-slate-800 p-6 sm:p-8 rounded-lg">
        <h2 class="text-3xl font-bold text-purple-400 mb-4">Kesimpulan</h2>
        <div class="prose prose-invert prose-lg max-w-none">
          <p>
            Algoritma Dijkstra adalah alat yang sangat kuat dan esensial dalam
            kotak peralatan seorang programmer. Dengan memahami cara kerjanya,
            Anda tidak hanya belajar tentang teori graf, tetapi juga mendapatkan
            wawasan tentang bagaimana masalah optimasi rute dipecahkan dalam
            skala besar, dari internet hingga peta digital.
          </p>
        </div>
      </section>
    </main>
  </div>
</template>
