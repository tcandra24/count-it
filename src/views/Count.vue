<template>
  <div class='home'>
    <div class="w-full py-4 px-2" :class="[sisa < 0 ? 'bg-red-600' : 'bg-blue-600' ]">
      <div class="flex flex-wrap">
        <h1 class="py-2 w-full md:w-1/3 block text-gray-200 font-bold md:w-1/3">Pemasukan : {{ jml_pemasukan | currency }}</h1>
        <h1 class="py-2 w-full md:w-1/3 block font-bold text-gray-200" >Sisa : {{ sisa | currency }}</h1>
        <h1 class="py-2 w-full md:w-1/3 block font-bold text-gray-200">Pengeluaran : {{ jml_pengeluaran | currency }}</h1>
      </div>
    </div>
    <div class="flex flex-wrap">
      <div class='container px-3 md:w-1/5'>
        <div class="flex-auto lg:max-w-sm rounded block border border-gray-200 mx-1 my-3 sm:w-full">
          <div class="px-6 py-4">
            <div class="mb-1 text-left">
              <p class="my-2">
                Filter :
              </p>
              <div class="relative w-full">
                <select v-model="sort" class="block rounded-md appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                  <option disabled value="">Filter</option>
                  <option value="nama">Nama</option>
                  <option value="tanggal">Tanggal</option>
                  <option value="nominal">Nominal</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
              <hr class="my-4">
              <div class="relative w-full">
                <input
                  class='appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded-md py-3 px-4 mb-1 leading-tight focus:outline-none focus:border-gray-500'
                  id='grid-nama'
                  type='text'
                  placeholder='Cari...'
                  v-model="cari"
                  @input="pageNumber = 0"
                />
              </div>
              <hr class="my-4">
              <div class="relative w-full flex flex-row flex-wrap">
                <datepicker
                  class='appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded-md py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                  id='grid-tanggal'
                  placeholder="Tanggal Awal"
                  v-model="filter.tglAwal"
                >
                </datepicker>
                <p class="text-sm text-gray-600 mx-auto">
                  s/d
                </p>
                <datepicker
                  class='appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded-md py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                  id='grid-tanggal'
                  placeholder="Tanggal Akhir"
                  v-model="filter.tglAkhir"
                >
                </datepicker>
                <input v-model="filter.tglFilter" type="checkbox" class="form-checkbox h-5 w-5 ml-3 mt-2 text-teal-600"><span class="ml-2 mt-2 text-sm text-gray-600">Gunakan</span>
              </div>
              <hr class="my-4">
              <div class="relative w-full">
                <currency-input
                  class='appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                  v-currency="{currency: 'IDR', locale: 'id'}"
                  placeholder='Harga Minimum'
                  v-model="filter.minNominal"
                />
                <currency-input
                  class='appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 mt-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                  v-currency="{currency: 'IDR', locale: 'id'}"
                  placeholder='Harga Maximum'
                  v-model="filter.maxNominal"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class='container px-5 md:w-4/5'>
        <div class="flex py-5">
          <div class="w-full md:w-5/6 sm:w-1/2">
            <button
              @click='show'
              class='text-white font-bold py-2 px-3 rounded float-left rounded-full h-full'
              :disabled="cari !== ''"
              :class="[ cari !== '' ? 'bg-gray-500' : 'bg-blue-500 hover:bg-blue-700' ]"
            >
              <div class="flex">
                <p class="mr-2">Tambah</p>
              <svg fill="rgb(249, 250, 251)" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/></svg>
              </div>
            </button>
          </div>
          <div class="w-full md:w-1/6 sm:w-1/2 flex">
            <h4
              class="my-auto mr-2"
            >Show : </h4>
            <select v-model="size" @change="pageNumber = 0" class="block appearance-none rounded-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="100">100</option>
            </select>
          </div>
        </div>
        <div class="flex flex-wrap">
          <div class="flex flex-wrap" v-if="countData.count.length > 0">
            <div class="flex-auto w-auto rounded block border border-gray-200 mx-2 my-2 overflow-hidden shadow-lg" v-for='(item, index) in countData.count' :key='index' >
              <div class="relative">
                <img class="w-full h-24 object-cover" :src="`https://picsum.photos/1920/1080?grayscale&random=${index + 1}`" alt="Just Picture">
                <div class="w-full h-24 absolute top-0 bg-opacity-25 py-5 px-4 text-white text-opacity-75" :class="dataKategori(item.kategori).warna">
                  <p class="font-bold text-xs uppercase text-left tracking-widest">{{dataKategori(item.kategori).kategori}}</p>
                </div>
              </div>
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-1 text-left">
                  {{ item.nama }}
                </div>
                <p class="text-gray-600 text-sm text-left">
                  {{ item.tanggal | moment("DD-MM-YYYY") }}
                </p>
                <hr class="my-2">
                <p class="text-gray-600 text-base text-left">
                  {{ item.keterangan }}
                </p>
                <p class="text-base text-left font-bold" :class="[ item.pengeluaran === true ? 'text-red-500' : 'text-green-500' ]">
                  {{ item.nominal | currency }}
                </p>
              </div>
              <div class="px-6 py-2">
                <button @click="confirmDelete(item.id)" class="inline-block bg-white border-red-300 border-2 rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2">
                  <svg fill="rgb(245, 101, 101)" class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
                  </svg>
                </button>
                <button @click="editData(item.id)" class="inline-block bg-white border-yellow-500 border-2 rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2">
                  <svg fill="rgb(252, 211, 77)" class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                    <path d="M2 12.88V16h3.12L14 7.12 10.88 4 2 12.88zm14.76-8.51c.33-.33.33-.85 0-1.18l-1.95-1.95c-.33-.33-.85-.33-1.18 0L12 2.88 15.12 6l1.64-1.63z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div v-else>
            <h3 class="text-sm">Data Tidak Ditemukan.</h3>
          </div>
        </div>
        <div class="h-40">
          <div
            class="flex flex-wrap py-5"
            v-show="countData.count.length > 0"
          >
            <button
              :disabled="pageNumber == 0"
              @click="prevPage"
              class="mx-2 py-2 px-2 block text-xl"
              :class="[ pageNumber == 0 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-300' ]"
            >Prev</button>
            <ul class="flex">
              <li
                class="mx-2 py-2 px-4 block text-xl cursor-pointer"
                v-for="(page) in pagingNumber.pageNum"
                :key="page"
                :class="[(pageNumber + 1) == page ? 'bg-gray-300' : 'hover:bg-gray-300' ]"
                :disabled="pageNumber == page"
                @click="pageNumber = (page - 1)"
              >
                <p v-if="page == pagingNumber.start + 1 && pagingNumber.start > 0">
                  ...
                </p>
                <p v-else-if="page == pagingNumber.end && pagingNumber.end < Math.ceil(countData.filtered.length / size)">
                  ...
                </p>
                <p v-else>
                  {{ page }}
                </p>
              </li>
            </ul>
            <button
              :disabled="pageNumber + 1 >= Math.ceil(countData.filtered.length / size)"
              @click="nextPage"
              class="mx-2 py-2 px-2 block text-xl"
              :class="[ pageNumber + 1 >= Math.ceil(countData.filtered.length / size) ? 'text-gray-300 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-300' ]"
            >Next</button>
          </div>
        </div>
      </div>
    </div>
    <modal name='form-input' height="auto" :min-height="500" @before-open="beforeOpen" :scrollable="true">
      <h1 class="py-5 block uppercase text-gray-700 font-bold">Tambah Data</h1>
      <form @submit.prevent="saveData" class='w-full max-w-lg px-5 py-5 ml-10'>
        <div class='flex flex-wrap items-center mx-3 mb-6'>
          <div class='w-full px-3 mb-6 md:mb-0'>
            <label
              class='mb-2 cursor-pointer flex'
              for='checkbox-jenis'
            >
              <div :class="[pengeluaran === false ? 'bg-green-600' : 'bg-gray-600']" class="ml-3 text-white font-medium font-bold rounded-full shadow-inner items-center px-8">
                Pemasukan
              </div>
              <div class="relative ml-3">
                <input
                  id='checkbox-jenis'
                  type='checkbox'
                  class="hidden"
                   v-model.trim="pengeluaran"
                />
                <div class="toggle__line w-10 h-6 bg-gray-400 rounded-full shadow-inner items-center"></div>
                <div class="toggle__dot absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 left-0 items-center"></div>
              </div>
              <div :class="[pengeluaran === true ? 'bg-red-600' : 'bg-gray-600']" class="ml-3 text-white font-medium font-bold rounded-full shadow-inner items-center px-8">
                Pengeluaran
              </div>
             </label>
          </div>
        </div>
        <div class='flex flex-wrap -mx-3 mb-6'>
          <div class='w-full px-3 mb-6 md:mb-0'>
            <label
              class='block uppercase tracking-wide text-gray-700 text-xs text-left font-bold mb-2'
              for='grid-nama'
            >
              Nama Pembayaran
            </label>
            <input
              class='appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:border-gray-500'
              id='grid-nama'
              type='text'
              placeholder='Nama Pembayaran'
              v-model.trim="$v.nama.$model"
              :class="{'border-red-500 ' : $v.nama.$error}"
            />
            <p class="float-left text-red-500 text-xs italic" v-if="!$v.nama.required && $v.nama.$error">Nama Pembayaran Tidak Boleh Kosong.</p>
          </div>
        </div>
        <div class='flex flex-wrap -mx-3 mb-6'>
          <div class='w-full px-3 '>
            <label
              class='block uppercase text-left tracking-wide text-gray-700 text-xs font-bold mb-2'
              for='grid-tanggal'
            >
              Tanggal
            </label>
            <datepicker
              class='appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              id='grid-tanggal'
              placeholder="Tanggal"
              v-model.trim="$v.tanggal.$model" format="d MMM yyyy"
              :class="{'border-red-500 ' : $v.tanggal.$error}">
            </datepicker>
            <p class="float-left text-red-500 text-xs italic" v-if="!$v.tanggal.required && $v.tanggal.$error">Tanggal Pembayaran Tidak Boleh Kosong.</p>
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label class="block uppercase text-left tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-nominal">
              Nominal
            </label>
            <currency-input
              class='appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              id='grid-nominal'
              v-currency="{currency: 'IDR', locale: 'id'}"
              placeholder='Nominal'
              v-model.trim="$v.nominal.$model"
              :class="{'border-red-500 ' : $v.nominal.$error}"
            />
            <p class="float-left text-red-500 text-xs italic" v-if="!$v.nominal.required && $v.nominal.$error">Nominal Pembayaran Tidak Boleh Kosong.</p>
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label class="block uppercase text-left tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-keterangan">
              Kategori
            </label>
            <select
              class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:border-gray-500"
              v-model.trim="$v.idKategori.$model"
              :class="{'border-red-500 ' : $v.idKategori.$error}"
            >
              <option disabled value="">Kategori</option>
              <option v-for="(k, index) in categories" :value="k.id" :key="index">{{ k.nama }}</option>
            </select>
            <p class="float-left text-red-500 text-xs italic" v-if="!$v.idKategori.required && $v.idKategori.$error">Kategori Tidak Boleh Kosong.</p>
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label class="block uppercase text-left tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-keterangan">
              Keterangan
            </label>
            <input
              class='appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              id='grid-keterangan'
              type='text'
              placeholder='Keterangan'
              v-model.trim="$v.keterangan.$model"
              :class="{'border-red-500 ' : $v.keterangan.$error}"
            />
            <p class="float-left text-red-500 text-xs italic" v-if="!$v.keterangan.required && $v.keterangan.$error">Keterangan Pembayaran Tidak Boleh Kosong.</p>
          </div>
        </div>
        <div class="md:flex md:items-center">
          <div class="md:w-1/3"></div>
          <div class="md:w-3/4">
            <button class="shadow float-right bg-blue-500 hover:bg-blue-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-full mr-2" type="submit">
              Save Data
            </button>
          </div>
          <div class="md:w-1/4">
            <button class="shadow float-left bg-gray-500 hover:bg-gray-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-full" type="reset" @click="hide">
              Cancel
            </button>
          </div>
        </div>
      </form>
    </modal>
  </div>
</template>

<script>
// @ is an alias to /src

import Datepicker from 'vuejs-datepicker'
import { mapActions, mapGetters } from 'vuex'
import { required } from 'vuelidate/lib/validators'
import warnaChoice from '@/data/warna'
import _ from 'lodash'

export default {
  name: 'Home',
  components: {
    Datepicker
  },
  data: () => ({
    items: [],
    nama: '',
    pengeluaran: false,
    tanggal: '',
    nominal: 0,
    keterangan: '',
    idKategori: null,
    updateId: '',
    tmpUpdate: {},
    sort: 'nama',
    id: null,
    index: null,
    cari: '',
    size: 10,
    pageNumber: 0,
    warnaTemplate: warnaChoice,
    filter: {
      tglAwal: Date.now(),
      tglAkhir: Date.now(),
      tglFilter: false,
      minNominal: null,
      maxNominal: null
    }
  }),
  validations: {
    nama: {
      required
    },
    tanggal: {
      required
    },
    nominal: {
      required
    },
    idKategori: {
      required
    },
    keterangan: {
      required
    }
  },
  methods: {
    ...mapActions({
      add: 'transaction/add',
      update: 'transaction/update',
      delete: 'transaction/delete',
      BudgetEdit: 'transaction/changeBudget'
    }),
    show () {
      this.$modal.show('form-input', { id: '' })
    },
    hide () {
      this.$modal.hide('form-input')
    },
    saveData () {
      this.$v.$touch()
      // if (this.$v.$error) return
      if (this.$v.$invalid) return
      if (this.updateId !== '') {
        this.update({
          id: this.id,
          nama: this.nama,
          tanggal: this.tanggal,
          nominal: this.nominal,
          keterangan: this.keterangan,
          index: this.index,
          pengeluaran: this.pengeluaran,
          kategori: this.idKategori
        })
      } else {
        this.add({
          id: this.id,
          nama: this.nama,
          tanggal: this.tanggal,
          nominal: this.nominal,
          keterangan: this.keterangan,
          pengeluaran: this.pengeluaran,
          kategori: this.idKategori
        })
      }

      this.nama = ''
      this.tanggal = ''
      this.nominal = 0
      this.keterangan = ''
      this.idKategori = null
      this.index = null
      this.$v.$reset()
      this.hide()
      this.$swal(
        'Data Berhasil Disimpan!',
        '',
        'success'
      )
    },
    dataKategori (idKat) {
      const kat = this.categories.find((value, index) => {
        return value.id === idKat
      })

      const classWarna = this.warnaTemplate.find(value => value.id === kat.warna)

      return {
        kategori: kat.nama,
        warna: classWarna.class
      }
    },
    editData (id) {
      this.$modal.show('form-input', { id: id })
    },
    beforeOpen (event) {
      this.updateId = event.params.id
      if (this.updateId !== '') {
        this.tmpUpdate = {}
        this.tmpUpdate = this.countData.filtered.find((value, index) => {
          return value.id === this.updateId
        })

        this.index = this.allData.findIndex((value, index) => {
          return value.id === this.updateId
        })
        this.id = this.tmpUpdate.id
        this.nama = this.tmpUpdate.nama
        this.tanggal = this.tmpUpdate.tanggal
        this.nominal = this.tmpUpdate.nominal
        this.keterangan = this.tmpUpdate.keterangan
        this.pengeluaran = this.tmpUpdate.pengeluaran
        this.idKategori = this.tmpUpdate.kategori
      } else {
        this.id = `${new Date().getTime()}-${_.uniqueId()}`
        this.nama = ''
        this.tanggal = ''
        this.nominal = 0
        this.keterangan = ''
        this.pengeluaran = false
        this.idKategori = null
      }
    },
    changeBudget () {
      this.editBudget = !this.editBudget
    },
    submitBudget () {
      this.editBudget = false
      this.BudgetEdit({
        budget: this.NewBudget
      })
    },
    confirmDelete (idData) {
      let data = {}
      data = this.countData.filtered.find((value, index) => {
        return value.id === idData
      })
      const index = this.allData.findIndex((value, index) => {
        return value.id === idData
      })
      this.$swal({
        title: 'Yakin Hapus?',
        text: `Data "${data.nama}" akan dihapus`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3182ce',
        cancelButtonColor: '#f56565',
        confirmButtonText: 'Yes'
      }).then((result) => {
        if (result.value) {
          this.delete({
            id: index
          })
        }
      })
    },
    formatNum () {
      const num = this.nominal.replace(/[^\d]+/gi, '')
      this.nominal = new Intl.NumberFormat('id', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
      }).format(num)
    },
    nextPage () {
      this.pageNumber++
    },
    prevPage () {
      this.pageNumber--
    }
  },
  computed: {
    ...mapGetters({
      allData: 'transaction/allTransaction',
      categories: 'categories/allData',
      jml_pengeluaran: 'transaction/countPengeluaran',
      jml_pemasukan: 'transaction/countPemasukan'
    }),
    countData () {
      let filteredData = this.allData
      if (this.cari !== '') {
        filteredData = this.allData.filter((data) => {
          return (data.nama.toLowerCase().includes(this.cari.toLowerCase()))
        })
      }

      if (this.filter.tglFilter === true) {
        filteredData = filteredData.filter((data) => {
          return this.$moment(data.tanggal).isBetween(this.filter.tglAwal, this.filter.tglAkhir)
        })
      }

      if (this.filter.minNominal !== null && this.filter.minNominal > 0) {
        filteredData = filteredData.filter((data) => {
          return data.nominal > this.filter.minNominal
        })
      }

      if (this.filter.maxNominal !== null && this.filter.maxNominal > 0) {
        filteredData = filteredData.filter((data) => {
          return data.nominal < this.filter.maxNominal
        })
      }

      const start = this.pageNumber * this.size
      const end = start + this.size

      if (this.sort !== '') {
        return {
          count: _.orderBy(filteredData, this.sort).slice(start, end),
          filtered: filteredData
        }
      } else {
        return {
          count: _.orderBy(filteredData, 'nama').slice(start, end),
          filtered: filteredData
        }
      }
    },
    sisa () {
      return this.jml_pemasukan - this.jml_pengeluaran
    },
    pagingNumber () {
      const arrayPageNum = []

      for (let i = 0; i < Math.ceil(this.countData.filtered.length / this.size); i++) {
        arrayPageNum[i] = i + 1
      }

      const start = (this.pageNumber - 4) <= 0 ? 0 : this.pageNumber - 4
      const end = (this.pageNumber + 5) >= arrayPageNum.length ? arrayPageNum.length : this.pageNumber + 5

      return {
        pageNum: arrayPageNum.slice(start, end),
        start: start,
        end: end
      }
    }
  }
}
</script>
<style lang="css">
.toggle__dot {
  left: -.25rem;
  transition: all 0.3s ease-in-out;
}

input:checked ~ .toggle__dot {
  transform: translateX(100%);
  background-color: #ececec;
}
</style>
