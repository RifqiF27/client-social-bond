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
        </div>
        <div class="panel">
          <div class="panel-body">
            <!-- <DetailItem
              v-for="detail in details"
              :key="detail.id"
              :detail="detail"
            /> -->
            <div>
    <div class="media-block">
      <a class="media-left" href="#"></a>
      <div class="media-body">
        <div class="mar-btm">
          <a href="#" class="btn-link text-semibold media-heading box-inline"
            >{{details.User.username}}</a
          >
          <p class="text-muted text-sm">
            <i class="fa fa-globe fa-lg"></i> - {{formatDate(details.createdAt)}}
          </p>
        </div>
        <p>
          {{details.content}}
        </p>
        <img :src="details.imageUrl" alt="">
          
        
        <div class="pad-ver">
          <div class="btn-group">
            <a class="btn btn-sm btn-default btn-hover-success" href="#"
              ><i class="fa-regular fa-pen-to-square"></i
            ></a>
          </div>
          <a class="btn btn-sm btn-default btn-hover-danger" href="#"
            ><i class="fa-solid fa-trash"></i
          ></a>
          <a class="btn btn-sm btn-default btn-hover-primary" href="#"
            >Comment</a
          >
          <hr>
          <!-- Comments -->
          <div class="media-block mt-3 mx-5">
            <a class="media-left" href="#"> </a>
            <div v-for="comment in details.Comments" :key="comment.id" :comment="comment" class="media-body">
              <div class="mar-btm">
                <a
                  href="#"
                  class="btn-link text-semibold media-heading box-inline"
                  >{{comment.User.username}}</a
                >
                <p class="text-muted text-sm">
                  <i class="fa fa-globe fa-lg"></i> - {{formatDate(comment.createdAt)}}
                </p>
              </div>
              <p>{{comment.text}}</p>
              <div class="pad-ver">
                <a class="btn btn-sm btn-default btn-hover-primary" href="#"
                  ><i class="fa-solid fa-trash"></i
                ></a>
              </div>

              <!-- <div class="btn-group">
                          <a class="btn btn-sm btn-default btn-hover-success" href="#"><i class="fa fa-thumbs-up"></i></a>
                          <a class="btn btn-sm btn-default btn-hover-danger" href="#"><i class="fa fa-thumbs-down"></i></a>
                        </div> -->
              <hr>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
            
          </div>
        </div>
      

        <!--===================================================-->
        <!-- End Newsfeed Content -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import { useCounterStore } from '../stores/counter';
// import DetailItem from '../components/DetailItem.vue';
import NavbarItem from '../components/NavbarItem.vue';
export default {
  components:{
    NavbarItem,
    // DetailItem
},
    computed:{
        ...mapState(useCounterStore,['details'] )
    },
    methods:{
        ...mapActions(useCounterStore, ['detailThread']),
        formatDate(value) {
      const originalDate = value;
      const dateObject = new Date(originalDate);
      return `${dateObject.toLocaleDateString(
        "en-US"
      )} ${dateObject.getHours()}:${dateObject.getMinutes()}`;
    },
    },
    created(){
      this.detailThread(this.$route.params.id)
    }
}
</script>

<style>

</style>