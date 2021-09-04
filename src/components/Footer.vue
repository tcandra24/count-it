<template>
  <footer class="py-2 bg-gray-200 text-center mt-2 text-gray-500 h-15 mt-10 bottom-0 w-full">
    <p class="my-3">
      {{ appName }} {{ versionApp }} | {{ new Date() | moment('YYYY') }}
    </p>
  </footer>
</template>
<script>
export default {}
</script>
