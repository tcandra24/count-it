<template>
  <nav class="flex items-center justify-between flex-wrap bg-gray-800 p-6 bg-teal-600">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <!-- <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg> -->
      <span class="font-semibold text-xl tracking-tight">{{ appName }}</span>
    </div>
    <div class="block lg:hidden">
      <button @click="toggleMenu" class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
        </svg>
      </button>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto" :class="showMenu ? 'block': 'hidden' ">
      <div class="text-sm lg:flex-grow">
        <router-link :class="[ $route.path === '/' ? 'text-white' : 'text-gray-400' ]" class="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4" to="/">
          <div class="text-lg">
            Dashboard
          </div>
        </router-link>
        <router-link :class="[ $route.path === '/count' ? 'text-white' : 'text-gray-400' ]" class="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4" to="/count">
          <div class="text-lg">
            Count
          </div>
        </router-link>
        <router-link :class="[ $route.path === '/categories' ? 'text-white' : 'text-gray-400' ]" class="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4" to="/categories">
          <div class="text-lg">
            Categories
          </div>
        </router-link>
        <router-link :class="[ $route.path === '/about' ? 'text-white' : 'text-gray-400' ]" class="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4" to="/about">
          <div class="text-lg">
            About
          </div>
        </router-link>
      </div>
      <!-- <div>
        <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Download</a>
      </div> -->
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Nav',
  data: () => ({
    showMenu: false
  }),
  methods: {
    toggleMenu () {
      this.showMenu = !this.showMenu
    }
  }
}
</script>
