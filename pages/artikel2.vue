<script setup>
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
        Algoritma Kahn
      </h1>
      <p class="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
        Memahami logika di balik *topological sorting*, sebuah konsep kunci
        untuk menyelesaikan urutan tugas dalam grafik.
      </p>
    </header>

    <main class="max-w-4xl mx-auto space-y-10">
      <section class="bg-slate-800 p-6 sm:p-8 rounded-lg">
        <h2 class="text-3xl font-bold text-purple-400 mb-4">
          Apa Itu Algoritma Kahn?
        </h2>
        <div class="prose prose-invert prose-lg max-w-none">
          <p>
            Algoritma Kahn adalah salah satu cara paling populer untuk melakukan
            **Topological Sorting** (Pengurutan Topologis). Pengurutan ini
            bertujuan untuk menyusun semua titik (node) dari sebuah **Grafik
            Berarah Asiklik (Directed Acyclic Graph - DAG)** dalam urutan
            linear. Urutan ini memastikan bahwa untuk setiap sisi dari node U ke
            node V, maka node U selalu muncul sebelum node V di dalam hasil
            urutan.
          </p>
          <p>
            Analogi sederhananya adalah urutan mata kuliah. Anda harus mengambil
            "Dasar Pemrograman" sebelum bisa mengambil "Struktur Data".
            Algoritma Kahn membantu kita menentukan urutan yang valid untuk
            mengambil semua mata kuliah tanpa melanggar prasyarat. Kegunaannya
            antara lain:
          </p>
          <ul>
            <li>
              <strong>Manajemen Proyek:</strong> Menentukan urutan tugas yang
              memiliki ketergantungan.
            </li>
            <li>
              <strong>Sistem Build:</strong> Mengompilasi file dalam urutan yang
              benar (misalnya, file library dikompilasi sebelum file utama).
            </li>
            <li>
              <strong>Resolusi Dependensi:</strong> Manajer paket seperti `npm`
              atau `yarn` menggunakan konsep ini untuk menginstal paket dalam
              urutan yang benar.
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
            Algoritma Kahn bekerja dengan konsep **"in-degree"**, yaitu jumlah
            sisi yang masuk ke sebuah node. Node yang tidak memiliki prasyarat
            akan memiliki in-degree 0. Algoritma ini secara bertahap memproses
            node-node ini.
          </p>
          <ol>
            <li>
              <strong>Persiapan (Inisialisasi):</strong>
              <ul>
                <li>Hitung in-degree untuk setiap node di dalam graf.</li>
                <li>
                  Siapkan sebuah antrian (queue) dan masukkan semua node yang
                  memiliki in-degree 0. Node-node inilah yang tidak punya
                  dependensi dan bisa dikerjakan pertama kali.
                </li>
              </ul>
            </li>
            <li>
              <strong>Proses Iteratif:</strong>
              <ul>
                <li>
                  Selama antrian tidak kosong, ambil satu node (sebut saja 'N')
                  dari antrian. Tambahkan 'N' ke dalam daftar hasil urutan
                  topologis.
                </li>
                <li>
                  Untuk setiap tetangga 'M' dari 'N' (yaitu, node yang memiliki
                  sisi dari 'N' ke 'M'), kurangi in-degree 'M' sebanyak satu.
                  Ini mensimulasikan bahwa prasyarat 'N' sudah selesai.
                </li>
                <li>
                  Jika in-degree dari 'M' menjadi 0, masukkan 'M' ke dalam
                  antrian karena sekarang ia siap untuk diproses.
                </li>
              </ul>
            </li>
            <li>
              <strong>Finalisasi:</strong> Ulangi proses hingga antrian kosong.
              Jika jumlah node di dalam daftar hasil sama dengan jumlah total
              node di graf, maka Anda berhasil mendapatkan urutan topologis.
              Jika tidak, berarti graf tersebut memiliki siklus (misalnya, A
              butuh B, dan B butuh A) dan tidak bisa diurutkan.
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
            Berikut adalah contoh implementasi Algoritma Kahn dengan JavaScript
            untuk menemukan urutan topologis.
          </p>
          <pre><code class="language-javascript">function kahnAlgorithm(graph) {
    const inDegree = {};
    const queue = [];
    const result = [];
    const nodes = Object.keys(graph);
  
    // Inisialisasi in-degree
    for (const node of nodes) {
      inDegree[node] = 0;
    }
  
    // Hitung in-degree untuk setiap node
    for (const node in graph) {
      for (const neighbor of graph[node]) {
        inDegree[neighbor]++;
      }
    }
  
    // Masukkan semua node dengan in-degree 0 ke antrian
    for (const node in inDegree) {
      if (inDegree[node] === 0) {
        queue.push(node);
      }
    }
  
    // Proses antrian
    while (queue.length > 0) {
      const currentNode = queue.shift();
      result.push(currentNode);
  
      // Kurangi in-degree dari semua tetangga
      for (const neighbor of graph[currentNode]) {
        inDegree[neighbor]--;
        if (inDegree[neighbor] === 0) {
          queue.push(neighbor);
        }
      }
    }
  
    // Cek apakah ada siklus
    if (result.length !== nodes.length) {
      return "Graf memiliki siklus! Tidak bisa diurutkan secara topologis.";
    }
  
    return result;
  }
  
  // Contoh Graf (Prasyarat Mata Kuliah)
  const coursePrerequisites = {
    'CS101': [],
    'CS102': ['CS101'],
    'CS201': ['CS102'],
    'CS202': ['CS102'],
    'CS301': ['CS201', 'CS202'],
  };
  
  console.log(kahnAlgorithm(coursePrerequisites));
  // Output yang mungkin: [ 'CS101', 'CS102', 'CS201', 'CS202', 'CS301' ]
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
                <strong>Deteksi Siklus:</strong> Dapat secara alami mendeteksi
                adanya dependensi melingkar (siklus) dalam sebuah graf.
              </li>
              <li>
                <strong>Intuitif:</strong> Logikanya sangat mirip dengan cara
                kita menyelesaikan masalah prasyarat di dunia nyata.
              </li>
              <li>
                <strong>Paralelisasi:</strong> Konsepnya memungkinkan node-node
                yang tidak saling dependen untuk dieksekusi secara paralel.
              </li>
            </ul>
          </div>
          <div>
            <h3 class="text-2xl font-semibold text-red-400 mb-3">Kekurangan</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>
                <strong>Membutuhkan Modifikasi Graf:</strong> Algoritma ini
                secara konseptual "menghapus" sisi dari graf, yang berarti kita
                perlu menyimpan dan memodifikasi status in-degree.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section class="bg-slate-800 p-6 sm:p-8 rounded-lg">
        <h2 class="text-3xl font-bold text-purple-400 mb-4">Kesimpulan</h2>
        <div class="prose prose-invert prose-lg max-w-none">
          <p>
            Algoritma Kahn adalah alat fundamental untuk pengurutan topologis,
            sebuah masalah yang sering muncul dalam penjadwalan, resolusi
            dependensi, dan analisis alur kerja. Kemampuannya untuk tidak hanya
            mengurutkan tetapi juga mendeteksi siklus menjadikannya pilihan yang
            kuat dan andal untuk memastikan tugas-tugas dieksekusi dalam urutan
            yang logis dan benar.
          </p>
        </div>
      </section>
    </main>
  </div>
</template>
