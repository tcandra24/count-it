<template>
  <modal name='form-input' :height="600" :draggable="true">
    <h1 class="py-5 block uppercase text-gray-700 font-bold">Form</h1>
    <form class='w-full max-w-lg px-5 py-5 ml-10'>
      <div class='flex flex-wrap -mx-3 mb-6'>
        <div class='w-full px-3 mb-6 md:mb-0'>
          <label
            class='block uppercase tracking-wide text-gray-700 text-xs text-left font-bold mb-2'
            for='grid-nama'
          >
            Nama Pembayaran
          </label>
          <input
            class='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
            id='grid-nama'
            type='text'
            placeholder='Nama Pembayaran'
            v-model="nama"
          />
        </div>
      </div>
      <div class='flex flex-wrap -mx-3 mb-6'>
        <div class='w-full px-3'>
          <label
            class='block uppercase text-left tracking-wide text-gray-700 text-xs font-bold mb-2'
            for='grid-tanggal'
          >
            Tanggal
          </label>
          <datepicker
            class='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
            id='grid-tanggal'
            placeholder="Tanggal"
            v-model="tanggal" format="d MMM yyyy">
          </datepicker>
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label class="block uppercase text-left tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-nominal">
            Nominal
          </label>
          <input
            class='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
            id='grid-nominal'
            type='number'
            placeholder='Nominal'
            v-model="nominal"
          />
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label class="block uppercase text-left tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-keterangan">
            Keterangan
          </label>
          <input
            class='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
            id='grid-keterangan'
            type='text'
            placeholder='keterangan'
            v-model="keterangan"
          />
        </div>
      </div>
      <div class="md:flex md:items-center">
        <div class="md:w-1/3"></div>
        <div class="md:w-2/3">
          <button @click="insertData" class="shadow float-right bg-blue-500 hover:bg-blue-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
            Save Data
          </button>
        </div>
      </div>
    </form>
  </modal>
</template>
<script>
import Datepicker from 'vuejs-datepicker'

export default {
  name: 'modal',
  components: {
    Datepicker
  }
}
</script>
