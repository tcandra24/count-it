<template>
  <div>
    <!-- <div class="bg-cover bg-center h-auto text-white py-24 px-10 object-fill" style="background-image: url(https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)">
       <div class="md:w-1/2">
        <p class="font-bold text-sm uppercase">Services</p>
        <p class="text-3xl font-bold">Multimedia products</p>
        <p class="text-2xl mb-10 leading-none">Atractive designs for your brand</p>
        <a href="#" class="bg-purple-800 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800">Contact us</a>
      </div>
    </div> -->
    <div class='container mx-auto w-full'>
      <div class="flex py-5 w-full">
        <button
          @click="show"
          class='text-white font-bold py-5 px-5 rounded-full float-left h-full bg-blue-500 hover:bg-blue-700 ml-2'
        >
          <svg fill="rgb(249, 250, 251)" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/></svg>
        </button>
      </div>
      <div class="flex flex-wrap">
        <div class="flex flex-wrap" v-if="categories.length > 0">
          <div class="flex-auto w-max-sm rounded block border border-gray-200 mx-2 my-2 shadow-lg relative" v-for='(item, index) in categories' :key='index' >
            <div class="bg-cover bg-center h-full text-white py-3 px-6 object-cover rounded" :style="{'background-image': `url(https://picsum.photos/1920/1080?random=${index + 1}`}">
              <div class="float-right mr-3">
                <button @click="confirmDelete(item.id)" class="absolute z-10 block rounded focus:outline-none hover:bg-red-400">
                  <svg class="h-6 w-6 text-white" stroke="currentColor" fill="none" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                    <path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z"/>
                  </svg>
                </button>
              </div>
              <div @click="editData(item.id)" class="w-auto bg-gray-700 bg-opacity-25 text-white text-opacity-75 p-2 mt-10 cursor-pointer hover:underline">
                <p class="font-bold text-2xl uppercase text-left">{{item.nama}}</p>
                <p class="text-xl mb-5 leading-none text-left">{{ item.keterangan }}</p>
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <h3 class="text-sm">Data Tidak Ditemukan</h3>
        </div>
      </div>
    </div>
    <modal name='form-input' height="auto" :min-height="500" @before-open="beforeOpen" :scrollable="true">
      <h1 class="py-5 block uppercase text-gray-700 font-bold">Tambah Category</h1>
      <form @submit.prevent="saveData" class='w-full max-w-lg px-5 py-5 ml-10'>
        <div class='flex flex-wrap -mx-3 mb-6'>
          <div class='w-full px-3 mb-6 md:mb-0'>
            <label
              class='block uppercase tracking-wide text-gray-700 text-xs text-left font-bold mb-2'
              for='grid-nama'
            >
              Nama
            </label>
            <input
              class='appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:border-gray-500'
              id='grid-nama'
              type='text'
              placeholder='Nama'
              v-model.trim="$v.nama.$model"
              :class="{'border-red-500 ' : $v.nama.$error}"
            />
            <p class="float-left text-red-500 text-xs italic" v-if="!$v.nama.required && $v.nama.$error">Nama Tidak Boleh Kosong.</p>
          </div>
        </div>
        <div class='flex flex-wrap -mx-3 mb-6'>
          <div class='w-full px-3 mb-6 md:mb-0'>
            <label
              class='block uppercase tracking-wide text-gray-700 text-xs text-left font-bold mb-2'
              for='grid-nama'
            >
              Keterangan
            </label>
            <input
              class='appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:border-gray-500'
              id='grid-keterangan'
              type='text'
              placeholder='Keterangan'
              v-model.trim="$v.keterangan.$model"
              :class="{'border-red-500 ' : $v.keterangan.$error}"
            />
            <p class="float-left text-red-500 text-xs italic" v-if="!$v.keterangan.required && $v.keterangan.$error">Keterangan Tidak Boleh Kosong.</p>
          </div>
        </div>
        <div class='flex flex-wrap -mx-3 mb-6'>
          <div class='w-full px-3 mb-6 md:mb-0'>
            <label
              class='block uppercase tracking-wide text-gray-700 text-xs text-left font-bold mb-2'
              for='grid-nama'
            >
              Warna
            </label>
            <select
              class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:border-gray-500"
              v-model.trim="$v.warna.$model"
              :class="{'border-red-500 ' : $v.warna.$error}"
            >
              <option disabled value="">Warna</option>
              <option v-for="(w, index) in warnaTemplate" :value="w.id" :key="index">{{ w.nama }}</option>
            </select>
            <p class="float-left text-red-500 text-xs italic" v-if="!$v.warna.required && $v.warna.$error">Warna Tidak Boleh Kosong.</p>
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
import { mapActions, mapGetters } from 'vuex'
import { required } from 'vuelidate/lib/validators'
import _ from 'lodash'
import warnaChoice from '@/data/warna'

export default {
  data: () => ({
    nama: '',
    keterangan: '',
    warna: null,
    id: null,
    updateId: '',
    index: null,
    warnaTemplate: warnaChoice
  }),
  validations: {
    nama: {
      required
    },
    keterangan: {
      required
    },
    warna: {
      required
    }
  },
  methods: {
    ...mapActions({
      add: 'categories/add',
      update: 'categories/update',
      delete: 'categories/delete'
    }),
    show () {
      this.$modal.show('form-input', { id: '' })
    },
    hide () {
      this.$v.$reset()
      this.$modal.hide('form-input')
    },
    saveData () {
      this.$v.$touch()

      if (this.$v.$invalid) return
      if (this.updateId !== '') {
        this.update({
          id: this.id,
          nama: this.nama,
          keterangan: this.keterangan,
          warna: this.warna,
          index: this.index
        })
      } else {
        this.add({
          id: this.id,
          nama: this.nama,
          keterangan: this.keterangan,
          warna: this.warna
        })
      }

      this.nama = ''
      this.keterangan = ''
      this.warna = null
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
    confirmDelete (idData) {
      let data = {}
      data = this.categories.find((value, index) => {
        return value.id === idData
      })
      const index = this.categories.findIndex((value, index) => {
        return value.id === idData
      })
      console.log(index)
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
    beforeOpen (event) {
      this.updateId = event.params.id
      if (this.updateId !== '') {
        this.tmpUpdate = {}
        this.tmpUpdate = this.categories.find((value, index) => {
          return value.id === this.updateId
        })

        this.index = this.categories.findIndex((value, index) => {
          return value.id === this.updateId
        })
        this.id = this.tmpUpdate.id
        this.nama = this.tmpUpdate.nama
        this.keterangan = this.tmpUpdate.keterangan
        this.warna = this.tmpUpdate.warna
      } else {
        this.id = `${new Date().getTime()}-${_.uniqueId()}`
        this.nama = ''
        this.keterangan = ''
        this.warna = null
      }
    }
  },
  computed: {
    ...mapGetters({
      categories: 'categories/allData'
    })
  }
}
</script>
