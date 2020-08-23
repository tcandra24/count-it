<template>
  <div class="about">
    <section class="relative py-8 px-4">
      <div class="z-20 relative text-gray-800 container mx-auto text-left">
        <h1 class="mb-4 opacity-75">Count IT</h1>
        <p class="leading-normal opacity-75">Menghitung pengeluaran secara otomatis</p>
        <p class="leading-normal opacity-75">Menggunakan Teknologi Vue, Tailwind</p>
        <a href="#" class="inline-block bg-blue-500 text-white no-underline hover:opacity-100 mt-4 p-4 rounded opacity-75">Get Started</a>
      </div>
      <div class="absolute inset-0 h-full z-10">
        <img src="http://3.bp.blogspot.com/-OlHVbclWofM/WUHHAo9cZeI/AAAAAAAAGCI/xx9R8nVEnlIOe16iHvUXfsRseYTdgYp5ACHMYBhgL/s1600/tmc18-anime-background-wallpaper-anime-images-in-high-quality.jpg" alt="" class="h-full w-full object-cover">
      </div>
    </section>
    <div class='container mx-auto mt-10'>
      <h1 class="font-bold text-gray-700 py-3 text-left">Welcome To Count IT</h1>
    </div>
  </div>
</template>
<script>
export default {
  created () {
    console.log(this.$route.path)
  }
}
</script>
