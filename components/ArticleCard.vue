<script setup>
// Komponen ini menerima 'article' sebagai properti (props) dari halaman utama
defineProps({
  article: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <NuxtLink
    :to="article.path"
    class="card-container block bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition-colors duration-300 group h-full flex flex-col"
  >
    <div class="flex-grow">
      <span class="date text-sm text-gray-400">{{ article.date }}</span>
      <h3
        class="title text-2xl font-bold text-white mt-2 mb-4 group-hover:text-purple-400 transition-colors"
      >
        {{ article.title }}
      </h3>
      <div
        class="thumbnail w-full aspect-video bg-slate-700 rounded-md overflow-hidden mb-4"
      >
        <img
          :src="article.image"
          :alt="article.title"
          class="w-full h-full object-cover"
        />
      </div>
      <p class="description text-gray-400 mb-6">{{ article.description }}</p>
    </div>
    <span
      class="read-more text-purple-400 font-semibold flex items-center gap-2 mt-auto"
    >
      Baca Selengkapnya
      <Icon name="mdi:arrow-right" />
    </span>
  </NuxtLink>
</template>
