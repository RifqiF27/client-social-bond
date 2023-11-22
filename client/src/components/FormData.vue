<template>
    <div>
      <form @submit.prevent="">
        <div class="form-group">
          <label for="image">Pilih Gambar:</label>
          <input type="file" id="image" ref="imageInput" >
        </div>
  
        <button type="submit" class="btn btn-primary">Unggah Gambar</button>
      </form>
  
      <!-- Tampilkan gambar yang telah diunggah -->
      <div v-if="uploadedImage">
        <h2>Gambar yang diunggah:</h2>
        <img :src="uploadedImage" alt="Uploaded Image">
      </div>
    </div>
  </template>
  
  <script>
import { mapActions } from 'pinia';
import { useCounterStore } from '../stores/counter';
  export default {
    data() {
      return {
        uploadedImage: null,
      };
    },
    methods: {
        ...mapActions(useCounterStore,['handleAddThread']),
      handleImageChange(event) {
        const file = event.target.files[0];
        if (file) {
          this.uploadedImage = URL.createObjectURL(file);
        }
      },
      uploadImage() {
        // Di sini Anda dapat mengirimkan gambar yang diunggah ke server atau melakukan operasi lainnya
        console.log('Gambar yang diunggah:', this.uploadedImage);
  
        // Reset input file
        this.$refs.imageInput.value = '';
      },
    },
  };
  </script>
<style>
</style>  