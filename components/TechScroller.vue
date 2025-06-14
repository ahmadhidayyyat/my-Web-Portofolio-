<script setup>
// Daftar teknologi yang Anda kuasai.
// Bagian ini sudah diubah sesuai permintaan Anda.
const techStack = [
  { name: "JavaScript", icon: "mdi:language-javascript" },
  { name: "Python", icon: "mdi:language-python" },
  { name: "Tailwind CSS", icon: "mdi:tailwind" },
  { name: "HTML5", icon: "mdi:language-html5" },
  { name: "CSS3", icon: "mdi:language-css3" },
  { name: "Node.js", icon: "mdi:nodejs" },
  { name: "TypeScript", icon: "mdi:language-typescript" },
  { name: "Git", icon: "mdi:git" },
];
</script>

<template>
  <div
    class="tech-scroller w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
  >
    <div class="flex gap-12 animate-scroll">
      <div
        v-for="tech in techStack"
        :key="tech.name"
        class="flex items-center gap-3 flex-shrink-0 text-gray-400"
      >
        <Icon :name="tech.icon" size="40" />
        <span class="text-xl font-semibold">{{ tech.name }}</span>
      </div>

      <div
        v-for="tech in techStack"
        :key="`${tech.name}-duplicate`"
        class="flex items-center gap-3 flex-shrink-0 text-gray-400"
      >
        <Icon :name="tech.icon" size="40" />
        <span class="text-xl font-semibold">{{ tech.name }}</span>
      </div>
    </div>
  </div>
</template>

<style>
/* Bagian ini tidak perlu diubah */
@keyframes scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

.animate-scroll {
  animation: scroll 40s linear infinite;
  width: max-content;
}
</style>
