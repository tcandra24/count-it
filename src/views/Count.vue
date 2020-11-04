<template>
  <div class='home'>
    <div class="w-full py-4 px-2" :class="[sisa < 0 ? 'bg-red-600' : 'bg-blue-600' ]">
      <div class="flex flex-wrap">
        <h1 class="py-2 w-full md:w-1/3 block text-gray-200 font-bold md:w-1/3">Pemasukan : {{ jml_pemasukan | currency }}</h1>
        <h1 class="py-2 w-full md:w-1/3 block font-bold text-gray-200" >Sisa : {{ sisa | currency }}</h1>
        <h1 class="py-2 w-full md:w-1/3 block font-bold text-gray-200">Pengeluaran : {{ jml_pengeluaran | currency }}</h1>
      </div>
    </div>
    <div class='container mx-auto px-5'>
      <div class="flex flex-wrap py-5">
        <div class="w-full md:w-1/6">
          <button
            @click='show'
            class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded float-left rounded-full h-full'
          >
            Tambah Data
          </button>
        </div>
        <div class="w-full md:w-1/6">
          <div class="relative w-32 float-left">
            <select v-model="sort" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded-full leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
              <option value="">Filter</option>
              <option value="nama">Nama</option>
              <option value="tanggal">Tanggal</option>
              <option value="nominal">Nominal</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap">
        <div class="flex-auto max-w-sm rounded block border border-gray-200 mx-2 my-2 overflow-hidden shadow-lg" v-for='(item, index) in countData' :key='index' >
          <img class="w-full h-16 object-cover" :src="`https://picsum.photos/1920/1080?random=${index + 1}`" alt="Just Picture">
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
          <div class="px-6 py-4">
            <button @click="confirmDelete(item.id)" class="inline-block bg-red-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2">
              <svg class="fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
              </svg>
            </button>
            <button @click="editData(item.id)" class="inline-block bg-yellow-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2">
              <svg class="fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                <path d="M2 12.88V16h3.12L14 7.12 10.88 4 2 12.88zm14.76-8.51c.33-.33.33-.85 0-1.18l-1.95-1.95c-.33-.33-.85-.33-1.18 0L12 2.88 15.12 6l1.64-1.63z"/>
              </svg>
            </button>
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
            <!-- <input
              class='appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              id='grid-nominal'
              placeholder='Nominal'
              v-model.trim="$v.nominal.$model"
              @keyup="formatNum"
              :class="{'border-red-500 ' : $v.nominal.$error}"
            /> -->
            <p class="float-left text-red-500 text-xs italic" v-if="!$v.nominal.required && $v.nominal.$error">Nominal Pembayaran Tidak Boleh Kosong.</p>
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
            <button class="shadow float-left bg-gray-500 hover:bg-gray-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-full" @click="hide">
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
    updateId: '',
    tmpUpdate: {},
    sort: 'nama',
    id: null,
    index: null
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
          pengeluaran: this.pengeluaran
        })
      } else {
        this.add({
          id: this.id,
          nama: this.nama,
          tanggal: this.tanggal,
          nominal: this.nominal,
          keterangan: this.keterangan,
          pengeluaran: this.pengeluaran
        })
      }

      this.nama = ''
      this.tanggal = ''
      this.nominal = 0
      this.keterangan = ''
      this.index = null
      this.$v.$reset()
      this.hide()
      this.$swal(
        'Data Berhasil Disimpan!',
        '',
        'success'
      )
    },
    editData (id) {
      this.$modal.show('form-input', { id: id })
    },
    beforeOpen (event) {
      this.updateId = event.params.id
      if (this.updateId !== '') {
        this.tmpUpdate = {}
        this.tmpUpdate = this.countData.find((value, index) => {
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
      } else {
        this.id = `${new Date().getTime()}-${_.uniqueId()}`
        this.nama = ''
        this.tanggal = ''
        this.nominal = 0
        this.keterangan = ''
        this.pengeluaran = false
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
      data = this.countData.find((value, index) => {
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
    }
  },
  computed: {
    ...mapGetters({
      allData: 'transaction/allTransaction',
      jml_pengeluaran: 'transaction/countPengeluaran',
      jml_pemasukan: 'transaction/countPemasukan'
    }),
    countData () {
      if (this.sort !== '') return _.orderBy(this.allData, this.sort)
      return _.orderBy(this.allData, 'nama')
    },
    sisa () {
      return this.jml_pemasukan - this.jml_pengeluaran
    }
  }
}
</script>
<style lang="css">
.toggle__dot {
  top: -.25rem;
  left: -.25rem;
  transition: all 0.3s ease-in-out;
}

input:checked ~ .toggle__dot {
  transform: translateX(100%);
  background-color: #ececec;
}
</style>
