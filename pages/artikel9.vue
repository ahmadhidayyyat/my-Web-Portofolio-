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
        Fractional Knapsack
      </h1>
      <p class="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
        Sebuah panduan untuk memahami masalah knapsack fraksional menggunakan
        algoritma greedy.
      </p>
    </header>

    <main class="max-w-4xl mx-auto space-y-10">
      <section class="bg-slate-800 p-6 sm:p-8 rounded-lg">
        <h2 class="text-3xl font-bold text-purple-400 mb-4">
          Apa Itu Fractional Knapsack?
        </h2>
        <div class="prose prose-invert prose-lg max-w-none">
          <p>
            Fractional Knapsack Problem adalah variasi dari masalah knapsack di
            mana kita dapat mengambil sebagian (fraksi) dari item untuk
            memaksimalkan nilai total dalam kapasitas tertentu. Berbeda dengan
            0/1 Knapsack, fractional knapsack memungkinkan pembagian item, dan
            biasanya dipecahkan menggunakan algoritma greedy.
          </p>
          <p>Aplikasi dari masalah ini meliputi:</p>
          <ul>
            <li>
              <strong>Manajemen Sumber Daya:</strong> Mengoptimalkan penggunaan
              bahan dalam produksi.
            </li>
            <li>
              <strong>Keuangan:</strong> Menentukan alokasi investasi optimal.
            </li>
            <li>
              <strong>Logistik:</strong> Memaksimalkan muatan dalam pengiriman.
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
            Fractional Knapsack dipecahkan dengan pendekatan greedy, yang
            memilih item berdasarkan rasio nilai terhadap berat untuk
            memaksimalkan keuntungan dalam kapasitas terbatas.
          </p>
          <ol>
            <li>
              <strong>Persiapan (Inisialisasi):</strong>
              <ul>
                <li>
                  Tentukan daftar item dengan nilai, berat, dan kapasitas
                  knapsack.
                </li>
                <li>Hitung rasio nilai per unit berat untuk setiap item.</li>
              </ul>
            </li>
            <li>
              <strong>Proses Pemilihan:</strong>
              <ul>
                <li>
                  Urutkan item berdasarkan rasio nilai/berat secara menurun.
                </li>
                <li>
                  Ambil item penuh jika kapasitas memungkinkan, atau ambil
                  fraksi jika kapasitas tidak cukup.
                </li>
              </ul>
            </li>
            <li>
              <strong>Finalisasi:</strong> Kembalikan nilai total maksimum yang
              dapat dicapai.
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
            untuk menyelesaikan Fractional Knapsack Problem.
          </p>
          <pre><code class="language-javascript">function fractionalKnapsack(capacity, items) {
  // Hitung rasio nilai/berat dan urutkan
  items.forEach(item => {
    item.valuePerWeight = item.value / item.weight;
  });
  items.sort((a, b) => b.valuePerWeight - a.valuePerWeight);

  let totalValue = 0;
  let remainingCapacity = capacity;

  for (let item of items) {
    if (remainingCapacity >= item.weight) {
      totalValue += item.value;
      remainingCapacity -= item.weight;
    } else {
      totalValue += item.valuePerWeight * remainingCapacity;
      break;
    }
  }

  return totalValue;
}

// Contoh penggunaan
const items = [
  { value: 60, weight: 10 },
  { value: 100, weight: 20 },
  { value: 120, weight: 30 }
];
const capacity = 50;
const result = fractionalKnapsack(capacity, items);
console.log(`Nilai maksimum yang dapat dicapai: ${result}`);
// Output: Nilai maksimum yang dapat dicapai: 240
// (Ambil 100% item 3, 100% item 2, 50% item 1)
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
                <strong>Efisien:</strong> Kompleksitas waktu O(n log n) dengan
                pengurutan.
              </li>
              <li>
                <strong>Solusi Optimal:</strong> Menjamin nilai maksimum untuk
                kasus fraksional.
              </li>
              <li>
                <strong>Praktis:</strong> Mudah diterapkan pada masalah
                real-world.
              </li>
            </ul>
          </div>
          <div>
            <h3 class="text-2xl font-semibold text-red-400 mb-3">Kekurangan</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>
                <strong>Tidak Berlaku untuk 0/1 Knapsack:</strong> Hanya cocok
                untuk kasus fraksional.
              </li>
              <li>
                <strong>Keterbatasan Data:</strong> Mengasumsikan rasio
                nilai/berat konstan.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section class="bg-slate-800 p-6 sm:p-8 rounded-lg">
        <h2 class="text-3xl font-bold text-purple-400 mb-4">Kesimpulan</h2>
        <div class="prose prose-invert prose-lg max-w-none">
          <p>
            Fractional Knapsack Problem adalah contoh cerdas dari algoritma
            greedy yang mengoptimalkan nilai dalam kapasitas terbatas. Dengan
            pendekatan berdasarkan rasio nilai/berat, algoritma ini efektif
            untuk masalah logistik dan manajemen sumber daya. Meskipun terbatas
            pada kasus fraksional, pemahaman tentang masalah ini memperkaya
            wawasan dalam optimasi.
          </p>
        </div>
      </section>
    </main>
  </div>
</template>
```
