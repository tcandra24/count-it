<template>
  <div class="home">
    <!-- <section class="relative py-8 px-4">
      <div class="z-20 relative text-gray-800 container mx-auto text-left">
        <h1 class="mb-4 opacity-75">Count IT</h1>
        <p class="leading-normal opacity-75">Menghitung pengeluaran secara otomatis</p>
        <p class="leading-normal opacity-75">Menggunakan Teknologi Vue, Tailwind</p>
        <a href="/count" class="inline-block bg-blue-500 text-white no-underline hover:opacity-100 mt-4 p-4 rounded opacity-75 cursor-pointer">Mulai!</a>
      </div>
      <div class="absolute inset-0 h-full z-10">
        <img src="http://3.bp.blogspot.com/-OlHVbclWofM/WUHHAo9cZeI/AAAAAAAAGCI/xx9R8nVEnlIOe16iHvUXfsRseYTdgYp5ACHMYBhgL/s1600/tmc18-anime-background-wallpaper-anime-images-in-high-quality.jpg" alt="" class="h-full w-full object-cover">
      </div>
    </section> -->
    <div class='container mx-auto mt-10'>
      <div class="flex flex-wrap">
        <div class="flex-auto w-full rounded block border border-gray-200 mx-2 my-2 overflow-hidden shadow-lg" >
          <div class="px-6 py-4">
            <div class="text-center mb-1 text-left flex">
              <div class="w-2/5">
                <button @click="prev" class='text-lg text-gray-600 text-white px-1 py-1 rounded rounded-full'>
                  <svg fill="rgb(75, 85, 99)" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>
                </button>
              </div>
              <div class="w-2/5 font-bold text-xl">
                {{ tahun }}
              </div>
              <div class="w-2/5">
                <button @click="next" class='text-lg text-gray-600 text-white px-1 py-1 rounded rounded-full'>
                  <svg fill="rgb(75, 85, 99)" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>
                </button>
              </div>
            </div>
            <p class="text-gray-600 text-sm text-left">
              Pemasukan dan Pengeluaran
            </p>
            <hr class="my-2">
            <chart :chart-data="chartData" :options="options" />
          </div>
        </div>
        <div class="flex w-full mx-2 my-2">
          <div class="flex flex-wrap justify-between">
            <div class="mb-1 overflow-hidden shadow-lg rounded block lg:w-1/4 w-1/2">
              <div class="flex flex-column">
                <div class="font-bold text-xl text-left bg-green-500 w-1/3 text-gray-200 py-6 justify-center items-center flex">
                  <svg class="w-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <div class="w-3/4 my-auto">
                  <h4 class="text-gray-600">Total Pemasukan ({{ TotPemasukan.jumlah.length }})</h4>
                  <p class="font-bold">{{ TotPemasukan.jumlahRp | currency }}</p>
                </div>
              </div>
            </div>
            <div class="mb-1 overflow-hidden shadow-lg rounded block lg:w-1/4 w-1/2">
              <div class="flex flex-column">
                <div class="font-bold text-xl text-left bg-red-500 w-1/3 text-gray-200 py-6 justify-center items-center flex">
                  <svg class="w-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
                </div>
                <div class="w-3/4 my-auto">
                  <h4 class="text-gray-600">Total Pengeluaran ({{ TotPengeluaran.jumlah.length }})</h4>
                  <p class="font-bold">{{ TotPengeluaran.jumlahRp | currency }}</p>
                </div>
              </div>
            </div>
            <div class="mb-1 overflow-hidden shadow-lg rounded block lg:w-1/4 w-1/2">
              <div class="flex flex-column">
                <div class="font-bold text-xl text-left bg-blue-500 w-1/3 text-gray-200 py-6 justify-center items-center flex">
                  <svg class="w-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                </div>
                <div class="w-3/4 my-auto">
                  <h4 class="text-gray-600">Total Transaksi ({{ allData.length }})</h4>
                  <p class="font-bold">{{ (TotPemasukan.jumlahRp + TotPengeluaran.jumlahRp) | currency }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex-auto max-w-sm rounded block border border-gray-200 mx-2 my-2 overflow-hidden shadow-lg" >
          <div class="border-b border-gray-300">
            <div class="px-6 py-2 flex">
              <div class="p-4 mr-4 text-red-500 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-500">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
              </div>
              <div class="font-bold text-lg text-left my-auto">
                Pengeluaran Per Bulan
              </div>
            </div>
          </div>
          <div class="border-b border-gray-300">
            <div class="text-base text-left" v-if="pengeluaranTop.length > 0">
              <table class="table-fixed w-full">
                <thead>
                  <tr class="bg-gray-200">
                    <th class="w-1/4 text-center">Bulan</th>
                    <th class="w-2/5 text-center">Nominal</th>
                    <th class="w-1/3 text-center">Jumlah Pengeluaran</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(data, index) in pengeluaranTable" :key="index" class="border-b-2 text-gray-600">
                    <td class="text-center py-2">{{ data.bln }} {{ data.tahun }} </td>
                    <td class="py-2 px-2">{{ data.nominal | currency }}</td>
                    <td class="text-center py-2"> {{ data.jumlah }} </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p class="text-base text-left" v-else>
              Belum ada data transaksi
            </p>
          </div>
        </div>
        <div class="flex-auto max-w-sm rounded block border border-gray-200 mx-2 my-2 overflow-hidden shadow-lg" >
          <div class="border-b border-gray-300">
            <div class="px-6 py-2 flex">
              <div class="p-4 mr-4 text-green-500 bg-green-100 rounded-full dark:text-green-100 dark:bg-green-500">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <div class="font-bold text-lg text-left my-auto">
                Pemasukan Per Bulan
              </div>
            </div>
          </div>
          <div class="border-b border-gray-300">
            <div class="text-base text-left" v-if="pemasukanTop.length > 0">
              <table class="table-fixed w-full">
                <thead>
                  <tr class="bg-gray-200">
                    <th class="w-1/4 text-center">Bulan</th>
                    <th class="w-2/5 text-center">Nominal</th>
                    <th class="w-1/3 text-center">Jumlah Pemasukan</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(data, index) in pemasukanTable" :key="index" class="border-b-2 text-gray-600">
                    <td class="text-center py-2">{{ data.bln }} {{ data.tahun }} </td>
                    <td class="py-2 px-2">{{ data.nominal | currency }}</td>
                    <td class="py-2 text-center"> {{ data.jumlah }} </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p class="text-base text-left" v-else>
              Belum ada data transaksi
            </p>
          </div>
        </div>
        <div class="flex-auto max-w-sm flex-row h-full rounded block border border-gray-200 mx-2 my-2 overflow-hidden shadow-lg" >
          <div class="px-6 py-4">
            <div class="font-bold mb-1 text-left flex">
              <div class="text-xl w-2/3">
                Statistik
              </div>
              <select v-model="typeStat" class="block text-base appearance-none rounded-full w-1/3 bg-gray-200 border border-gray-200 text-gray-700 py-2 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                <option disabled value="">Statistik</option>
                <option value="hari">Harian</option>
                <option value="bulan">Bulanan</option>
                <option value="tahun">Tahunan</option>
              </select>
            </div>
            <hr class="my-2">
            <p class="text-gray-600 text-sm text-left">
              Pengeluaran
            </p>
            <div class="py-2 px-2">
              <div
                class="text-base text-left flex"
              >
                <div
                  class="p-3 font-bold"
                  >
                  <div v-if="stats.pengeluaran.jmlBlnSekarang > stats.pengeluaran.jmlBlnLalu">
                    <svg fill="rgb(245, 101, 101)" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M24 22h-24l12-20z"/></svg>
                  </div>
                  <div v-else-if="stats.pengeluaran.jmlBlnSekarang < stats.pengeluaran.jmlBlnLalu">
                    <svg fill="rgb(72, 187, 120)" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M12 21l-12-18h24z"/></svg>
                  </div>
                  <div v-else>
                    <svg fill="rgb(252, 211, 77)" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M21 12l-18 12v-24z"/></svg>
                  </div>
                </div>
                <div
                  class="flex-auto ml-3"
                  :class="{ 'text-red-500': stats.pengeluaran.jmlBlnSekarang > stats.pengeluaran.jmlBlnLalu,
                            'text-green-500': stats.pengeluaran.jmlBlnSekarang < stats.pengeluaran.jmlBlnLalu,
                            'text-yellow-500': stats.pengeluaran.jmlBlnSekarang === stats.pengeluaran.jmlBlnLalu }"
                >
                  <div class="py-1 font-bold">
                    {{stats.pengeluaran.jmlBlnSekarang | currency}}
                  </div>
                  <hr class="py-1">
                  <div class="text-sm p-1">
                    {{ stats.pengeluaran.selisihRp | currency }} ({{ stats.pengeluaran.selisihPersen() }} %)
                  </div>
                </div>
              </div>
            </div>
            <div class="p-2">
              <table class="table-fixed w-full text-gray-600">
                <thead>
                  <tr class="border-b-2">
                    <th class="w-1/2 justify-between">{{firstUpper(typeStat)}}</th>
                    <th class="w-1/2 justify-between">Nominal</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(data, index) in stats.listPengeluaran" :key="index" class="border-b-2">
                    <td class="text-left py-2">{{ data.bln }}</td>
                    <td class="text-left py-2"> {{ data.nominal | currency }} </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p class="text-gray-600 text-sm text-left mt-4">
              Pemasukan
            </p>
            <div class="py-2 px-2">
              <div
                class="text-base text-left flex"
              >
                <div
                  class="p-3 font-bold"
                  >
                  <div v-if="stats.pemasukan.jmlBlnSekarang > stats.pemasukan.jmlBlnLalu">
                    <svg fill="rgb(72, 187, 120)" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M24 22h-24l12-20z"/></svg>
                  </div>
                  <div v-else-if="stats.pemasukan.jmlBlnSekarang < stats.pemasukan.jmlBlnLalu">
                    <svg fill="rgb(245, 101, 101)" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M12 21l-12-18h24z"/></svg>
                  </div>
                  <div v-else>
                    <svg fill="rgb(252, 211, 77)" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M21 12l-18 12v-24z"/></svg>
                  </div>
                </div>
                <div
                  class="flex-auto ml-3"
                  :class="{ 'text-red-500': stats.pemasukan.jmlBlnSekarang < stats.pemasukan.jmlBlnLalu,
                            'text-green-500': stats.pemasukan.jmlBlnSekarang > stats.pemasukan.jmlBlnLalu,
                            'text-yellow-500': stats.pemasukan.jmlBlnSekarang === stats.pemasukan.jmlBlnLalu }"
                >
                  <div class="py-1 font-bold">
                    {{stats.pemasukan.jmlBlnSekarang | currency}}
                  </div>
                  <hr class="py-1">
                  <div class="text-sm p-1">
                    {{ stats.pemasukan.selisihRp | currency }} ({{ stats.pemasukan.selisihPersen() }} %)
                  </div>
                </div>
              </div>
            </div>
            <div class="p-2">
              <table class="table-fixed w-full text-gray-600">
                <thead>
                  <tr class="border-b-2">
                    <th class="w-1/2 justify-between">{{firstUpper(typeStat)}}</th>
                    <th class="w-1/2 justify-between">Nominal</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(data, index) in stats.listPemasukan" :key="index" class="border-b-2">
                    <td class="text-left py-2">{{ data.bln }}</td>
                    <td class="text-left py-2"> {{ data.nominal | currency }} </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="py-1">
              <p class="text-gray-600 text-xs text-left italic">
                *Statistik ini membandingan pengeluaran dan pemasukan {{typeStat}} ini dan {{typeStat}} kemarin
              </p>
            </div>
          </div>
        </div>
        <div class="flex-auto max-w-sm rounded block border border-gray-200 mx-2 my-2 overflow-hidden shadow-lg mb-24" >
          <div class="border-b border-gray-300">
            <div class="px-6 py-2 flex">
              <div class="p-4 mr-4 text-red-500 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-500">
                <svg class="w-6 h-6" fill="none" stroke="currentColor"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.408 18c.498-3.947 5.592-7.197 5.592-17h-14c0 9.803 5.105 13.053 5.604 17h2.804zm-3.614-11.472l1.46-.202.643-1.326.643 1.326 1.46.202-1.063 1.021.26 1.451-1.3-.695-1.3.695.26-1.451-1.063-1.021zm-3.803 4.128c.286.638.585 1.231.882 1.783-4.065-1.348-6.501-5.334-6.873-9.439h4.077c.036.482.08.955.139 1.405h-2.689c.427 2.001 1.549 4.729 4.464 6.251zm10.009 10.963v1.381h-8v-1.381c1.941 0 2.369-1.433 2.571-2.619h2.866c.193 1.187.565 2.619 2.563 2.619zm8-18.619c-.372 4.105-2.808 8.091-6.873 9.438.297-.552.596-1.145.882-1.783 2.915-1.521 4.037-4.25 4.464-6.251h-2.688c.059-.45.103-.922.139-1.405h4.076z"/></svg>
              </div>
              <div class="font-bold text-lg text-left my-auto">
                Pengeluaran
              </div>
            </div>
          </div>
          <div class="border-b border-gray-300">
            <div class="w-full pt-12">
              <div class="overflow-hidden rounded-full w-20 -mt-16 mx-auto bg-white border border-gray-300">
                Top 10
              </div>
            </div>
            <p class="text-base text-left" v-if="pengeluaranTop.length > 0">
              <ul class="px-0">
                <li class="list-none py-2 px-2 border-b-2 flex" v-for="(topPeng, index) in pengeluaranTop.slice(0, 10)" :key="index">
                  <div class="py-3 px-5 font-bold rounded-full text-gray-600 bg-gray-100">
                    {{ index + 1 }}
                  </div>
                  <div class="flex-auto ml-3">
                    <div>
                      {{ topPeng.nama }}
                    </div>
                    <div class="text-gray-600 text-sm">
                      {{ topPeng.nominal | currency }}
                    </div>
                  </div>
                  <div class="py-2 px-2" v-if="index >= 0 && index <= 2">
                    <div class="p-1" :class="[index === 0 ? 'text-yellow-600' : index === 1 ? 'text-gray-600' : 'text-yellow-800' ]">
                      <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" width="24" height="24" viewBox="0 0 24 24"><path d="M12 10c-3.865 0-7 3.134-7 7s3.135 7 7 7 7-3.134 7-7-3.135-7-7-7zm0 12c-2.762 0-5-2.239-5-5s2.238-5 5-5 5 2.239 5 5-2.238 5-5 5zm1.484-4.315l1.516-1.457-2.083-.287-.917-1.892-.917 1.892-2.083.287 1.516 1.457-.369 2.07 1.853-.992 1.854.992-.37-2.07zm1.62-9.822l-2.48-3.329 3.376-4.534h5l-5.896 7.863zm-2.974.137h1.828l-5.958-8h-1.869l5.999 8zm-7.249-8h-1.881l6 8h1.881l-6-8z"/></svg>
                    </div>
                  </div>
                </li>
              </ul>
            </p>
            <p v-else class="text-base text-left">
              Belum ada data transaksi
            </p>
          </div>
        </div>
        <div class="flex-auto max-w-sm rounded block border border-gray-200 mx-2 my-2 overflow-hidden shadow-lg mb-24" >
          <div class="border-b border-gray-300">
            <div class="px-6 py-2 flex">
              <div class="p-4 mr-4 text-green-500 bg-green-100 rounded-full dark:text-green-100 dark:bg-green-500">
                <svg class="w-6 h-6" fill="none" stroke="currentColor"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.408 18c.498-3.947 5.592-7.197 5.592-17h-14c0 9.803 5.105 13.053 5.604 17h2.804zm-3.614-11.472l1.46-.202.643-1.326.643 1.326 1.46.202-1.063 1.021.26 1.451-1.3-.695-1.3.695.26-1.451-1.063-1.021zm-3.803 4.128c.286.638.585 1.231.882 1.783-4.065-1.348-6.501-5.334-6.873-9.439h4.077c.036.482.08.955.139 1.405h-2.689c.427 2.001 1.549 4.729 4.464 6.251zm10.009 10.963v1.381h-8v-1.381c1.941 0 2.369-1.433 2.571-2.619h2.866c.193 1.187.565 2.619 2.563 2.619zm8-18.619c-.372 4.105-2.808 8.091-6.873 9.438.297-.552.596-1.145.882-1.783 2.915-1.521 4.037-4.25 4.464-6.251h-2.688c.059-.45.103-.922.139-1.405h4.076z"/></svg>
              </div>
              <div class="font-bold text-lg text-left my-auto">
                Pemasukan
              </div>
            </div>
          </div>
          <div class="border-b border-gray-300">
            <div class="w-full pt-12">
              <div class="overflow-hidden rounded-full w-20 -mt-16 mx-auto bg-white border border-gray-300">
                Top 10
              </div>
            </div>
            <div class="text-base text-left" v-if="pemasukanTop.length > 0">
              <ul class="px-0 transform">
                <li
                  class="list-none py-2 px-2 border-b-2 flex items"
                  v-for="(topPem, index) in pemasukanTop.slice(0, 10)"
                  :key="index"
                >
                  <div class="py-3 px-5 font-bold rounded-full text-gray-600 bg-gray-100">
                    {{ index + 1 }}
                  </div>
                  <div class="flex-auto ml-3">
                    <div>
                      {{ topPem.nama }}
                    </div>
                    <div class="text-gray-600 text-sm">
                      {{ topPem.nominal | currency }}
                    </div>
                  </div>
                  <div class="py-2 px-2" v-if="index >= 0 && index <= 2">
                    <div class="p-1" :class="[index === 0 ? 'text-yellow-600' : index === 1 ? 'text-gray-600' : 'text-yellow-800' ]">
                      <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" width="24" height="24" viewBox="0 0 24 24"><path d="M12 10c-3.865 0-7 3.134-7 7s3.135 7 7 7 7-3.134 7-7-3.135-7-7-7zm0 12c-2.762 0-5-2.239-5-5s2.238-5 5-5 5 2.239 5 5-2.238 5-5 5zm1.484-4.315l1.516-1.457-2.083-.287-.917-1.892-.917 1.892-2.083.287 1.516 1.457-.369 2.07 1.853-.992 1.854.992-.37-2.07zm1.62-9.822l-2.48-3.329 3.376-4.534h5l-5.896 7.863zm-2.974.137h1.828l-5.958-8h-1.869l5.999 8zm-7.249-8h-1.881l6 8h1.881l-6-8z"/></svg>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <p class="text-base text-left" v-else>
              Belum ada data transaksi
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import _ from 'lodash'
import chart from '@/plugins/chart.js'
export default {
  data: () => ({
    chartData: {},
    options: {},
    tahun: 2020,
    typeStat: 'bulan',
    pemasukanTable: [],
    pengeluaranTable: []
  }),
  components: {
    chart
  },
  methods: {
    initChart () {
      const pengeluaranSum = []
      const pemasukanSum = []
      const sort = _.sortBy(this.allData, 'tanggal')

      sort.reduce((res, value) => {
        const tgl = this.$moment(value.tanggal)

        if (parseInt(tgl.format('YYYY')) === this.tahun) {
          if (!res[tgl.format('MMM')]) {
            res[tgl.format('MMM')] = {
              nominal: 0,
              bln: tgl.format('MMM')
            }
            pengeluaranSum.push(res[tgl.format('MMM')])
          }
          if (value.pengeluaran === true) res[tgl.format('MMM')].nominal += value.nominal
        }
        return res
      }, {})

      sort.reduce((res, value) => {
        const tgl = this.$moment(value.tanggal)
        if (parseInt(tgl.format('YYYY')) === this.tahun) {
          if (!res[tgl.format('MMM')]) {
            res[tgl.format('MMM')] = {
              nominal: 0,
              bln: tgl.format('MMM')
            }
            pemasukanSum.push(res[tgl.format('MMM')])
          }
          if (value.pengeluaran === false) res[tgl.format('MMM')].nominal += value.nominal
        }
        return res
      }, {})

      const arrayBlnPengeluaran = pengeluaranSum.map((data) => {
        return data.bln
      })
      const arrayBlnPemasukan = pemasukanSum.map((data) => {
        return data.bln
      })

      this.chartData = {
        labels: arrayBlnPengeluaran.length > arrayBlnPemasukan.length ? arrayBlnPengeluaran : arrayBlnPemasukan,
        datasets: [
          {
            label: 'Pengeluaran',
            backgroundColor: 'rgb(245, 101, 101)',
            data: pengeluaranSum.map(data => data.nominal)
          },
          {
            label: 'Pemasukan',
            backgroundColor: 'rgb(72, 187, 120)',
            data: pemasukanSum.map(data => data.nominal)
          }
        ]
      }

      this.options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [{
            ticks: {
              callback: (value, index, values) => {
                return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
              }
            }
          }]
        },
        tooltips: {
          enabled: true,
          callbacks: {
            label: (tooltipItems, data) => {
              return tooltipItems.yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
            }
          }
        }
      }
    },
    initTable () {
      const sort = _.sortBy(this.allData, 'tanggal')

      sort.reduce((res, value) => {
        const tgl = this.$moment(value.tanggal)
        if (!res[tgl.format('MMM/YYYY')]) {
          res[tgl.format('MMM/YYYY')] = {
            nominal: 0,
            bln: tgl.format('MMM'),
            tahun: tgl.format('YYYY'),
            jumlah: 0,
            detail: {
              nama: []
            }
          }
          this.pemasukanTable.push(res[tgl.format('MMM/YYYY')])
        }
        if (value.pengeluaran === false) {
          res[tgl.format('MMM/YYYY')].nominal += value.nominal
          res[tgl.format('MMM/YYYY')].jumlah += 1
          res[tgl.format('MMM/YYYY')].detail.nama.push(value.nama)
        }
        return res
      }, {})

      sort.reduce((res, value) => {
        const tgl = this.$moment(value.tanggal)
        if (!res[tgl.format('MMM/YYYY')]) {
          res[tgl.format('MMM/YYYY')] = {
            nominal: 0,
            bln: tgl.format('MMM'),
            tahun: tgl.format('YYYY'),
            jumlah: 0,
            detail: {
              nama: []
            }
          }
          this.pengeluaranTable.push(res[tgl.format('MMM/YYYY')])
        }
        if (value.pengeluaran === true) {
          res[tgl.format('MMM/YYYY')].nominal += value.nominal
          res[tgl.format('MMM/YYYY')].jumlah += 1
          res[tgl.format('MMM/YYYY')].detail.nama.push(value.nama)
        }
        return res
      }, {})
    },
    next () {
      this.tahun++
      this.initChart()
    },
    prev () {
      this.tahun--
      this.initChart()
    },
    detailTable (bln, thn, array) {
      const detailArray = array.filter(data => data.bln === bln && data.tahun === thn)
      console.log(...detailArray[0].detail.nama)
    }
  },
  computed: {
    ...mapGetters({
      allData: 'transaction/allTransaction'
    }),
    pengeluaranTop () {
      const getDataPengeluaran = this.allData.filter((data) => {
        return data.pengeluaran === true && parseInt(this.$moment(data.tanggal).format('YYYY')) === this.tahun
      })

      return _.orderBy(getDataPengeluaran, 'nominal', 'desc')
    },
    pemasukanTop () {
      const getDataPemasukan = this.allData.filter((data) => {
        return data.pengeluaran === false && parseInt(this.$moment(data.tanggal).format('YYYY')) === this.tahun
      })

      return _.orderBy(getDataPemasukan, 'nominal', 'desc')
    },
    stats () {
      let type
      let formatDate
      if (this.typeStat === 'bulan') {
        type = 'months'
        formatDate = 'MMM/YYYY'
      } else if (this.typeStat === 'tahun') {
        type = 'years'
        formatDate = 'YYYY'
      } else {
        type = 'days'
        formatDate = 'DD/MMM/YYYY'
      }

      const blnNow = this.$moment(Date.now()).format(formatDate)
      const blnPrev = this.$moment(Date.now()).subtract(1, type).format(formatDate)
      const statsPengeluaran = [{
        nominal: 0,
        bln: blnPrev
      }, {
        nominal: 0,
        bln: blnNow
      }]
      const statsPemasukan = [{
        nominal: 0,
        bln: blnPrev
      }, {
        nominal: 0,
        bln: blnNow
      }]

      const getDataPengeluaran = this.allData.filter((data) => {
        return data.pengeluaran === true && (this.$moment(data.tanggal).format(formatDate) === blnNow || this.$moment(data.tanggal).format(formatDate) === blnPrev)
      })

      const getDataPemasukan = this.allData.filter((data) => {
        return data.pengeluaran === false && (this.$moment(data.tanggal).format(formatDate) === blnNow || this.$moment(data.tanggal).format(formatDate) === blnPrev)
      })

      for (let i = 0; i < getDataPengeluaran.length; i++) {
        if (statsPengeluaran[0].bln === this.$moment(getDataPengeluaran[i].tanggal).format(formatDate)) {
          statsPengeluaran[0].nominal += getDataPengeluaran[i].nominal
        } else {
          statsPengeluaran[1].nominal += getDataPengeluaran[i].nominal
        }
      }

      for (let i = 0; i < getDataPemasukan.length; i++) {
        if (statsPemasukan[0].bln === this.$moment(getDataPemasukan[i].tanggal).format(formatDate)) {
          statsPemasukan[0].nominal += getDataPemasukan[i].nominal
        } else {
          statsPemasukan[1].nominal += getDataPemasukan[i].nominal
        }
      }
      // Object container for pengeluaran and pemasukan
      const pengeluaran = {
        jmlBlnLalu: (statsPengeluaran[0].tgl) === blnPrev ? statsPengeluaran[0].nominal : 0,
        jmlBlnSekarang: statsPengeluaran[1].nominal,
        selisihRp: statsPengeluaran[0].nominal - statsPengeluaran[1].nominal,
        selisihPersen: () => {
          if (statsPengeluaran[0].nominal > 0 && statsPengeluaran[1].nominal > 0) {
            return (((statsPengeluaran[0].nominal - statsPengeluaran[1].nominal) / statsPengeluaran[1].nominal) * 100).toFixed(4)
          } else {
            return 0
          }
        }
      }

      const pemasukan = {
        jmlBlnLalu: statsPemasukan[0].nominal,
        jmlBlnSekarang: statsPemasukan[1].nominal,
        selisihRp: statsPemasukan[0].nominal - statsPemasukan[1].nominal,
        selisihPersen: () => {
          if (statsPemasukan[0].nominal > 0 && statsPemasukan[1].nominal > 0) {
            return (((statsPemasukan[0].nominal - statsPemasukan[1].nominal) / statsPemasukan[1].nominal) * 100).toFixed(4)
          } else {
            return 0
          }
        }
      }

      // Method toFixed untuk menampilkan 2 angka dibelakang koma
      // console.log(selisihPersen.toFixed(4))

      return {
        pengeluaran: pengeluaran,
        pemasukan: pemasukan,
        listPengeluaran: statsPengeluaran,
        listPemasukan: statsPemasukan
      }
    },
    TotPengeluaran () {
      return {
        jumlah: this.allData.filter(data => data.pengeluaran === true),
        jumlahRp: _.sumBy(this.pengeluaranTable, function (data) { return data.nominal })
      }
    },
    TotPemasukan () {
      return {
        jumlah: this.allData.filter(data => data.pengeluaran === false),
        jumlahRp: _.sumBy(this.pemasukanTable, function (data) { return data.nominal })
      }
    }
  },
  created () {
    this.initChart()
    this.initTable()
  }
}
</script>
