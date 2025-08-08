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
        Subset Sum Problem
      </h1>
      <p class="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
        Sebuah panduan untuk memahami masalah pemrograman dinamis yang mencari
        subset dengan jumlah tertentu.
      </p>
    </header>

    <main class="max-w-4xl mx-auto space-y-10">
      <section class="bg-slate-800 p-6 sm:p-8 rounded-lg">
        <h2 class="text-3xl font-bold text-purple-400 mb-4">
          Apa Itu Subset Sum Problem?
        </h2>
        <div class="prose prose-invert prose-lg max-w-none">
          <p>
            Subset Sum Problem adalah masalah dalam ilmu komputer di mana kita
            perlu menentukan apakah ada subset dari sekumpulan bilangan bulat
            yang jumlahnya sama dengan nilai target tertentu. Masalah ini sering
            digunakan untuk menguji konsep pemrograman dinamis dan backtracking.
          </p>
          <p>Aplikasi dari masalah ini meliputi:</p>
          <ul>
            <li>
              <strong>Optimasi:</strong> Menemukan kombinasi terbaik dalam
              masalah anggaran atau sumber daya.
            </li>
            <li>
              <strong>Kriptografi:</strong> Digunakan dalam algoritma enkripsi
              tertentu.
            </li>
            <li>
              <strong>Pemrograman Dinamis:</strong> Sebagai dasar untuk
              mempelajari teknik optimasi.
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
            Subset Sum Problem dapat dipecahkan menggunakan pendekatan rekursif
            dengan backtracking atau pemrograman dinamis. Dalam pendekatan
            rekursif, kita mencoba semua kemungkinan subset dan memeriksa apakah
            jumlahnya sesuai dengan target.
          </p>
          <ol>
            <li>
              <strong>Persiapan (Inisialisasi):</strong>
              <ul>
                <li>
                  Tentukan himpunan bilangan dan nilai target yang ingin
                  dicapai.
                </li>
                <li>Inisialisasi variabel untuk melacak subset saat ini.</li>
              </ul>
            </li>
            <li>
              <strong>Proses Pencarian:</strong>
              <ul>
                <li>
                  Untuk setiap bilangan, pilih untuk memasukkannya ke subset
                  atau melewatkannya.
                </li>
                <li>
                  Jika jumlah subset mencapai target, catat solusi; jika tidak,
                  lanjutkan rekursif.
                </li>
                <li>Jika semua kemungkinan gagal, kembalikan (*backtrack*).</li>
              </ul>
            </li>
            <li>
              <strong>Finalisasi:</strong> Hentikan saat solusi ditemukan atau
              semua kombinasi telah dicoba.
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
            untuk menyelesaikan Subset Sum Problem.
          </p>
          <pre><code class="language-javascript">function isSubsetSum(arr, n, sum) {
  if (sum === 0) return true;
  if (n === 0 && sum !== 0) return false;

  if (arr[n - 1] > sum) {
    return isSubsetSum(arr, n - 1, sum);
  }

  return (
    isSubsetSum(arr, n - 1, sum) ||
    isSubsetSum(arr, n - 1, sum - arr[n - 1])
  );
}

// Contoh penggunaan
const set = [3, 34, 4, 12, 5, 2];
const sum = 9;
const n = set.length;

if (isSubsetSum(set, n, sum)) {
  console.log(`Terdapat subset dengan jumlah ${sum}.`);
} else {
  console.log(`Tidak ada subset dengan jumlah ${sum}.`);
}
// Output: Terdapat subset dengan jumlah 9.
// (Misalnya, subset [4, 5] atau [2, 3, 4] bisa membentuk jumlah 9)
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
                <strong>Konsep Dasar Pemrograman Dinamis:</strong> Membantu
                memahami pendekatan rekursif.
              </li>
              <li>
                <strong>Fleksibel:</strong> Dapat disesuaikan untuk berbagai
                ukuran himpunan.
              </li>
              <li>
                <strong>Aplikasi Praktis:</strong> Berguna dalam optimasi dan
                kriptografi.
              </li>
            </ul>
          </div>
          <div>
            <h3 class="text-2xl font-semibold text-red-400 mb-3">Kekurangan</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>
                <strong>Kurang Efisien untuk Himpunan Besar:</strong> Waktu
                eksekusi meningkat secara eksponensial.
              </li>
              <li>
                <strong>Penggunaan Memori:</strong> Membutuhkan rekursi mendalam
                untuk kasus kompleks.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section class="bg-slate-800 p-6 sm:p-8 rounded-lg">
        <h2 class="text-3xl font-bold text-purple-400 mb-4">Kesimpulan</h2>
        <div class="prose prose-invert prose-lg max-w-none">
          <p>
            Subset Sum Problem adalah tantangan menarik yang mengintroduksi
            konsep pemrograman dinamis dan backtracking. Dengan pendekatan
            rekursif, algoritma ini efektif untuk menyelesaikan masalah subset
            pada skala kecil hingga menengah. Meskipun memiliki keterbatasan
            dalam efisiensi untuk data besar, pemahaman tentang masalah ini
            memperkaya kemampuan analisis dan pengembangan algoritma.
          </p>
        </div>
      </section>
    </main>
  </div>
</template>
```
