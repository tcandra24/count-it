<template>
  <div class="about">
    <section class="relative py-8 px-4">
      <div class="z-20 relative text-gray-800 container mx-auto text-left">
        <h1 class="mb-4 opacity-75">Count IT</h1>
        <p class="leading-normal opacity-75">Menghitung pengeluaran secara otomatis</p>
        <p class="leading-normal opacity-75">Menggunakan Teknologi Vue, Tailwind</p>
        <a href="/count" class="inline-block bg-blue-500 text-white no-underline hover:opacity-100 mt-4 p-4 rounded opacity-75 cursor-pointer">Mulai!</a>
      </div>
      <div class="absolute inset-0 h-full z-10">
        <img src="http://3.bp.blogspot.com/-OlHVbclWofM/WUHHAo9cZeI/AAAAAAAAGCI/xx9R8nVEnlIOe16iHvUXfsRseYTdgYp5ACHMYBhgL/s1600/tmc18-anime-background-wallpaper-anime-images-in-high-quality.jpg" alt="" class="h-full w-full object-cover">
      </div>
    </section>
    <div class='container mx-auto mt-10'>
      <div class="flex flex-wrap">
        <div class="flex-auto w-full rounded block border border-gray-200 mx-2 my-2 overflow-hidden shadow-lg" >
          <div class="px-6 py-4">
            <div class="text-center mb-1 text-left flex">
              <div class="w-2/5">
                <button @click="prev" class='text-lg text-gray-600 bg-gray-300 hover:bg-gray-500 hover:text-white text-white px-3 py-1 rounded rounded-full'>
                  Prev
                </button>
              </div>
              <div class="w-2/5 font-bold text-xl">
                {{ tahun }}
              </div>
              <div class="w-2/5">
                <button @click="next" class='text-lg text-gray-600 bg-gray-300 hover:bg-gray-500 hover:text-white text-white px-3 py-1 rounded rounded-full'>
                  Next
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
        <div class="flex-auto max-w-sm rounded block border border-gray-200 mx-2 my-2 overflow-hidden shadow-lg" >
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-1 text-left">
              Pengeluaran
            </div>
            <p class="text-gray-600 text-sm text-left">
              Top 10
            </p>
            <hr class="my-2">
            <p class="text-base text-left" v-if="pengeluaranTop.length > 0">
              <ul class="px-0">
                <li class="list-none py-2 px-2 border-b-2 flex" v-for="(topPeng, index) in pengeluaranTop.slice(0, 10)" :key="index">
                  <div class="py-3 px-2 font-bold">
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
                </li>
              </ul>
            </p>
            <p v-else class="text-base text-left">
              Belum ada data transaksi
            </p>
          </div>
        </div>
        <div class="flex-auto max-w-sm rounded block border border-gray-200 mx-2 my-2 overflow-hidden shadow-lg" >
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-1 text-left">
              Pemasukan
            </div>
            <p class="text-gray-600 text-sm text-left">
              Top 10
            </p>
            <hr class="my-2">
            <p class="text-base text-left" v-if="pemasukanTop.length > 0">
              <ul class="px-0">
                <li class="list-none py-2 px-2 border-b-2 flex" v-for="(topPem, index) in pemasukanTop.slice(0, 10)" :key="index">
                  <div class="py-3 px-2 font-bold">
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
                </li>
              </ul>
            </p>
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
    tahun: 2020
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
        responsive: true, maintainAspectRatio: false
      }
    },
    next () {
      this.tahun++
      this.initChart()
    },
    prev () {
      this.tahun--
      this.initChart()
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
    }
  },
  created () {
    this.initChart()
  }
}
</script>
