// FILE: app/router.options.ts

import type { RouterConfig } from "@nuxt/schema";

export default <RouterConfig>{
  scrollBehavior(to, from, savedPosition) {
    // Kita bungkus semuanya dalam Promise agar bisa memberi jeda
    return new Promise((resolve) => {
      // Beri jeda 300 milidetik. Waktu ini cukup bagi Nuxt untuk merender halaman.
      setTimeout(() => {
        // Jika ada hash (#) di URL tujuan
        if (to.hash) {
          resolve({
            el: to.hash,
            // Beri offset dari atas untuk tinggi navbar (6rem = 96px)
            // Ini memastikan judul section tidak terpotong di bawah navbar
            top: 96,
            behavior: "smooth",
          });
        }
        // Jika ada posisi scroll yang tersimpan
        else if (savedPosition) {
          resolve(savedPosition);
        }
        // Jika tidak, scroll ke atas
        else {
          resolve({ top: 0, behavior: "smooth" });
        }
      }, 300);
    });
  },
};
