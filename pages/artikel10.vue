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
        Activity Selection Problem
      </h1>
      <p class="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
        Sebuah panduan untuk memahami masalah pemilihan aktivitas optimal
        menggunakan algoritma greedy.
      </p>
    </header>

    <main class="max-w-4xl mx-auto space-y-10">
      <section class="bg-slate-800 p-6 sm:p-8 rounded-lg">
        <h2 class="text-3xl font-bold text-purple-400 mb-4">
          Apa Itu Activity Selection Problem?
        </h2>
        <div class="prose prose-invert prose-lg max-w-none">
          <p>
            Activity Selection Problem adalah masalah optimasi di mana kita
            perlu memilih aktivitas maksimum dari sekumpulan aktivitas yang
            diberikan, dengan kendala bahwa aktivitas tidak boleh tumpang tindih
            (berdasarkan waktu mulai dan akhir). Masalah ini sering dipecahkan
            menggunakan algoritma greedy.
          </p>
          <p>Aplikasi dari masalah ini meliputi:</p>
          <ul>
            <li>
              <strong>Penjadwalan:</strong> Mengatur jadwal pertemuan atau kelas
              tanpa konflik.
            </li>
            <li>
              <strong>Manajemen Proyek:</strong> Mengoptimalkan penggunaan
              sumber daya dalam proyek.
            </li>
            <li>
              <strong>Algoritma Greedy:</strong> Sebagai contoh dasar untuk
              mempelajari pendekatan greedy.
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
            Activity Selection Problem dipecahkan dengan pendekatan greedy, yang
            memilih aktivitas berdasarkan waktu akhir terkecil untuk
            memaksimalkan jumlah aktivitas yang dapat dilakukan.
          </p>
          <ol>
            <li>
              <strong>Persiapan (Inisialisasi):</strong>
              <ul>
                <li>
                  Daftar aktivitas dengan waktu mulai dan akhir (misalnya,
                  [start, end]).
                </li>
                <li>Urutkan aktivitas berdasarkan waktu akhir.</li>
              </ul>
            </li>
            <li>
              <strong>Proses Pemilihan:</strong>
              <ul>
                <li>
                  Pilih aktivitas pertama (dengan waktu akhir terkecil) dan
                  masukkan ke solusi.
                </li>
                <li>
                  Pilih aktivitas berikutnya yang waktu mulainya lebih besar
                  dari waktu akhir aktivitas sebelumnya.
                </li>
                <li>Ulangi hingga semua aktivitas diperiksa.</li>
              </ul>
            </li>
            <li>
              <strong>Finalisasi:</strong> Kembalikan daftar aktivitas yang
              dipilih.
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
            untuk menyelesaikan Activity Selection Problem.
          </p>
          <pre><code class="language-javascript">function activitySelection(activities) {
  // Urutkan berdasarkan waktu akhir
  activities.sort((a, b) => a[1] - b[1]);

  const selected = [activities[0]]; // Pilih aktivitas pertama
  let lastEndTime = activities[0][1];

  for (let i = 1; i < activities.length; i++) {
    if (activities[i][0] >= lastEndTime) {
      selected.push(activities[i]);
      lastEndTime = activities[i][1];
    }
  }

  return selected;
}

// Contoh penggunaan
const activities = [
  [1, 4], [3, 5], [0, 6], [5, 7], [3, 8], [5, 9], [6, 10], [8, 11]
];
const result = activitySelection(activities);
console.log("Aktivitas yang dipilih:");
result.forEach(activity => {
  console.log(`Mulai: ${activity[0]}, Selesai: ${activity[1]}`);
});
// Output:
// Aktivitas yang dipilih:
// Mulai: 1, Selesai: 4
// Mulai: 5, Selesai: 7
// Mulai: 8, Selesai: 11
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
                <strong>Efisien:</strong> Algoritma greedy memiliki kompleksitas
                waktu O(n log n).
              </li>
              <li>
                <strong>Solusi Optimal:</strong> Menjamin solusi maksimum untuk
                kasus ini.
              </li>
              <li>
                <strong>Sederhana:</strong> Mudah diimplementasikan dan
                dipahami.
              </li>
            </ul>
          </div>
          <div>
            <h3 class="text-2xl font-semibold text-red-400 mb-3">Kekurangan</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>
                <strong>Batasan Kasus:</strong> Hanya optimal untuk aktivitas
                non-tumpang tindih.
              </li>
              <li>
                <strong>Tidak Fleksibel:</strong> Kurang cocok untuk masalah
                dengan bobot atau prioritas.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section class="bg-slate-800 p-6 sm:p-8 rounded-lg">
        <h2 class="text-3xl font-bold text-purple-400 mb-4">Kesimpulan</h2>
        <div class="prose prose-invert prose-lg max-w-none">
          <p>
            Activity Selection Problem adalah contoh menarik dari algoritma
            greedy yang mengoptimalkan penjadwalan aktivitas. Dengan pendekatan
            sederhana berdasarkan waktu akhir, algoritma ini efektif untuk
            menyelesaikan masalah penjadwalan tanpa konflik. Meskipun memiliki
            keterbatasan pada kasus kompleks, pemahaman tentang masalah ini
            memperkaya wawasan dalam teknik optimasi.
          </p>
        </div>
      </section>
    </main>
  </div>
</template>
```
