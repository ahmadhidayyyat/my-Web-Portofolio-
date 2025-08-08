<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import ArticleCard from "~/components/ArticleCard.vue";
import TechScroller from "~/components/TechScroller.vue";

// --- LOGIC UNTUK NAVBAR SCROLL (SUDAH ADA) ---
const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});

// --- LOGIC UNTUK ACTIVE SECTION (SUDAH ADA) ---
const activeSection = ref("home");
let observer;

onMounted(() => {
  const options = { rootMargin: "-30% 0px -70% 0px", threshold: 0 };
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        activeSection.value = entry.target.id;
      }
    });
  }, options);

  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    observer.observe(section);
  });
});

onBeforeUnmount(() => {
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    observer.unobserve(section);
  });
});

// --- DATA LENGKAP UNTUK 10 ARTIKEL (SUDAH ADA) ---
const articles = [
  {
    id: 1,
    title: "Dijkstra's Algorithm",
    date: "27 May",
    description:
      "Pelajari cara kerja algoritma Dijkstra dalam menemukan jalur terpendek pada graf berbobot, fondasi penting dalam pemrograman graf dan jaringan.",
    image: "/articles/1.jpeg",
    path: "/artikel1",
  },
  {
    id: 2,
    title: "Kahn's Algorithm",
    date: "27 May",
    description:
      "Algoritma Kahn digunakan untuk pengurutan topologi dari simpul dalam grafik asiklik terarah (DAG).",
    image: "/articles/2.jpeg",
    path: "/artikel2",
  },
  {
    id: 3,
    title: "Depth-First Search (DFS)",
    date: "27 May",
    description:
      "Depth-first search (DFS) adalah algoritma untuk melintasi atau mencari struktur data pohon atau grafik.",
    image: "/articles/3.jpeg",
    path: "/artikel3",
  },
  {
    id: 4,
    title: "Breadth-First Search (BFS)",
    date: "27 May",
    description:
      "Breadth-first search (BFS) adalah algoritma untuk mencari struktur data pohon dari node yang memenuhi properti yang diberikan.",
    image: "/articles/4.jpeg",
    path: "/artikel4",
  },
  {
    id: 5,
    title: "Rat in Maze",
    date: "27 May",
    description:
      "Algoritma Rat in the Maze dirancang untuk mencari jalan dari mulai labirin dengan menggunakan eksplorasi mendalam, seringkali menggunakan backtracking.",
    image: "/articles/5.jpeg",
    path: "/artikel5",
  },
  {
    id: 6,
    title: "Subset Sum Problem",
    date: "20 May",
    description:
      "Masalah Subset Sum melibatkan pencarian apakah subset dari himpunan non-negatif sama dengan jumlah target yang diberikan.",
    image: "/articles/6.jpeg",
    path: "/artikel6",
  },
  {
    id: 7,
    title: "N-Queens Problem",
    date: "20 May",
    description:
      "Masalah N-Queens adalah masalah menempatkan n ratu di papan catur n x n sehingga tidak ada dua ratu yang saling menyerang.",
    image: "/articles/7.jpeg",
    path: "/artikel7",
  },
  {
    id: 8,
    title: "Huffman Coding",
    date: "20 May",
    description:
      "Pengkodean Huffman adalah metode efisien untuk memampatkan data tanpa kehilangan informasi.",
    image: "/articles/8.jpeg",
    path: "/artikel8",
  },
  {
    id: 9,
    title: "Fractional Knapsack",
    date: "06 May",
    description:
      "Dalam ilmu komputer teoretis, masalah knapsack kontinu (juga dikenal sebagai masalah knapsack fraksional) adalah masalah algoritmik.",
    image: "/articles/9.jpeg",
    path: "/artikel9",
  },
  {
    id: 10,
    title: "Activity Selection Problem",
    date: "06 May",
    description:
      "Masalah pemilihan aktivitas adalah masalah optimasi kombinatorial mengenai pemilihan aktivitas non-konflik untuk dilakukan dalam jangka waktu tertentu.",
    image: "/articles/10.jpeg",
    path: "/artikel10",
  },
];

// --- LOGIC UNTUK COMMENTS (BAGIAN BARU) ---
const comments = ref([
  { id: 1, name: "Budi", text: "Keren banget portofolionya!", likes: 12 },
  { id: 2, name: "Sari", text: "Desainnya rapi dan enak dibaca.", likes: 7 },
  {
    id: 3,
    name: "Andi",
    text: "Semangat terus, tulisannya informatif.",
    likes: 5,
  },
]);

const newComment = ref({ name: "", text: "" });
const showAllReplies = ref({});

const addComment = () => {
  if (newComment.value.name && newComment.value.text) {
    comments.value.push({
      id: Date.now(),
      name: newComment.value.name,
      text: newComment.value.text,
      likes: 0,
    });
    newComment.value.name = "";
    newComment.value.text = "";
  }
};

const toggleReplies = (commentId) => {
  showAllReplies.value[commentId] = !showAllReplies.value[commentId];
};

const likeComment = (commentId) => {
  const comment = comments.value.find((c) => c.id === commentId);
  if (comment) comment.likes += 1;
};
</script>

<template>
  <section id="home">
    <div class="min-h-[85vh] flex items-center justify-center">
      <div class="container mx-auto px-8">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div class="text-center md:text-left">
            <p class="text-xl text-gray-400 mb-2">Hey, I'm Ahmad 👋</p>
            <h1
              class="text-5xl lg:text-7xl font-extrabold text-white leading-tight"
            >
              Frontend
              <span
                class="bg-gradient-to-r from-blue-400 to-indigo-600 bg-clip-text text-transparent"
                >Developer</span
              >
            </h1>
            <p class="text-gray-400 mt-6 text-lg max-w-lg mx-auto md:mx-0">
              I'm a developer based in Indonesia, I'll help you build beautiful
              websites your users will love.
            </p>
            <div
              class="flex items-center justify-center md:justify-start gap-x-6 mt-8"
            >
              <a
                href="https://github.com/ahmadhidayyyat"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                class="text-gray-400 hover:text-blue-300 transition-colors"
              >
                <Icon name="mdi:github" size="36" />
              </a>
              <a
                href="https://instagram.com/ahmadhidayyyat"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                class="text-gray-400 hover:text-blue-300 transition-colors"
              >
                <Icon name="mdi:instagram" size="36" />
              </a>
              <a
                href="https://wa.me/6285283028189"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                class="text-gray-400 hover:text-blue-300 transition-colors"
              >
                <Icon name="mdi:whatsapp" size="36" />
              </a>
            </div>
            <h1
              class="mt-6 text-5xl lg:text-3xl font-extrabold leading-tight bg-gradient-to-r from-blue-400 to-indigo-600 bg-clip-text text-transparent"
            >
              Beginner for
            </h1>
            <div class="mt-8">
              <TechScroller />
            </div>
          </div>
          <div class="flex justify-center md:justify-end">
            <div class="relative w-96 h-96 lg:w-[32rem] lg:h-[32rem]">
              <div
                class="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full blur-xl animate-pulse -z-10"
              ></div>
              <div
                class="w-full h-full bg-gradient-to-br from-blue-500 to-indigo-700 rounded-full p-1"
              >
                <div class="bg-slate-900 w-full h-full rounded-full p-2">
                  <img
                    src="/image/fotoprofil.jpeg"
                    alt="Foto Profil Ahmad Hidayat"
                    decoding="async"
                    width="512"
                    height="512"
                    class="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="articles" class="min-h-screen pt-24">
    <div class="container mx-auto px-8">
      <h2
        class="text-4xl font-bold text-center leading-tight bg-gradient-to-r from-blue-400 to-indigo-600 bg-clip-text text-transparent"
      >
        Kumpulan Artikel Algoritma & Struktur Data
      </h2>
      <p class="text-center text-gray-400 mt-2 mb-12">
        Jelajahi berbagai materi penting dalam ilmu komputer.
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ArticleCard
          v-for="article in articles"
          :key="article.id"
          :article="article"
        />
      </div>
    </div>
  </section>

  <section id="comments" class="min-h-screen pt-24">
    <div class="container mx-auto px-8">
      <h2 class="text-4xl font-bold text-center mb-8">Komentar</h2>
      <p class="text-center text-gray-400 mt-2 mb-12">
        Tinggalkan komentar Anda tentang perjalanan saya.
      </p>
      <div class="max-w-3xl mx-auto">
        <form @submit.prevent="addComment" class="mb-8 space-y-4">
          <div>
            <label for="name" class="block text-gray-300">Nama</label>
            <input
              v-model="newComment.name"
              id="name"
              type="text"
              class="w-full p-2 bg-gray-800 border border-gray-700 rounded"
              placeholder="Nama Anda"
            />
          </div>
          <div>
            <label for="comment" class="block text-gray-300">Komentar</label>
            <textarea
              v-model="newComment.text"
              id="comment"
              class="w-full p-2 bg-gray-800 border border-gray-700 rounded h-24"
              placeholder="Tinggalkan komentar Anda"
            ></textarea>
          </div>
          <button
            type="submit"
            class="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-500"
          >
            Submit
          </button>
        </form>

        <div v-for="comment in comments" :key="comment.id" class="mb-6">
          <div class="bg-gray-800 p-4 rounded-lg">
            <p class="text-gray-300">
              <strong>{{ comment.name }}</strong
              >: {{ comment.text }}
            </p>
            <div class="flex items-center justify-between mt-2">
              <button
                @click="likeComment(comment.id)"
                class="text-blue-400 hover:text-blue-300 flex items-center"
              >
                <span class="mr-1">👍</span> {{ comment.likes }}
              </button>
              <button
                @click="toggleReplies(comment.id)"
                class="text-blue-400 hover:text-blue-300"
              >
                Reply (0)
              </button>
            </div>
            <div v-if="showAllReplies[comment.id]" class="mt-2">
              <p class="text-gray-500">Belum ada balasan.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
section {
  scroll-margin-top: 6rem;
}
</style>
