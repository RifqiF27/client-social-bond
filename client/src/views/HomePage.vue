<template>
  <div>
    <NavbarItem class="mb-8" />
    <link
      href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
      rel="stylesheet"
    />
    <div class="container bootdey">
      <div class="col-md-12 bootstrap snippets">
        <div class="panel">
          <form @submit.prevent="doAdd" enctype="multipart/form-data">
            <div class="panel-body">
              <textarea
                v-model="input.content"
                class="form-control mb-1"
                rows="2"
                placeholder="What are you thinking?"
                style="height: 15vh"
              ></textarea>
              <div class="mar-top clearfix mb-3">
                <button class="btn btn-sm btn-primary pull-right" type="submit">
                  <i class="fa fa-pencil fa-fw"></i> Share
                </button>
                <!-- <FormData /> -->
                <!-- <a
                class="btn btn-trans btn-icon fa fa-video-camera add-tooltip"
                href="#"
                ></a> -->
                <div class="form-group">
                  <!-- <label for="image">Pilih Gambar:</label> -->
                  <span
                    type="file"
                    id="imageUrl"
                    class="btn btn-trans btn-icon fa fa-camera add-tooltip"
                    href="#"
                  ></span>
                  <input type="file" id="imageUrl" ref="imageInput" />
                </div>
                <!-- <a
              class="btn btn-trans btn-icon fa fa-file add-tooltip"
              href="#"
              ></a> -->
              </div>
            </div>
          </form>
          <div v-if="input.imageUrl">
            <h2>Gambar yang diunggah:</h2>
            <img :src="input.imageUrl" alt="Uploaded Image" />
          </div>
        </div>
        <div class="panel">
          <div class="panel-body">
            <ThreadItem
              v-for="thread in threads"
              :key="thread.id"
              :thread="thread"
            />
          </div>
        </div>

        <!--===================================================-->
        <!-- End Newsfeed Content -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "../stores/counter";
import NavbarItem from "../components/NavbarItem.vue";
import ThreadItem from "../components/ThreadItem.vue";
export default {
  components: {
    NavbarItem,
    ThreadItem,
  },
  data() {
    return {
      imageUrl: null,
      input: {
        content: "",
      },
    };
  },
  computed: {
    ...mapState(useCounterStore, ["threads"]),
  },
  methods: {
    ...mapActions(useCounterStore, ["fetchThreads", "handleAddThread"]),
    async doAdd() {
      const formData = new FormData();

      formData.append("imageUrl", this.$refs.imageInput.files[0]); // ambil form data index ke 0 nya
      formData.append("content", this.input.content); // append yg dari v-model
      // formData.append("password", this.dataRegist.password);
      // await this.Register(formData); // kirim ke handlernya
      await this.handleAddThread(formData);
      await this.fetchThreads();
      this.input.content = "";
    },

    // handleImageChange(event) {
    //   const file = event.target.files[0];
    //   console.log(file);
    //     if (file) {
    //       this.input.imageUrl = URL.createObjectURL(file);
    //     }
    //   },
    uploadImage() {
      console.log("Gambar yang diunggah:", this.input.imageUrl);

      this.$refs.imageInput.value = "";
    },
  },
  created() {
    // console.log(this.threads);
    this.fetchThreads();
  },
};
</script>

<style></style>
