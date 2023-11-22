<template>
  <!-- Newsfeed Content -->
  <!--===================================================-->

  <div>
    <div class="media-block">
      <a class="media-left" href="#"></a>
      <div class="media-body">
        <div class="mar-btm">
          <a @click="$router.push(`/threads/${thread.id}`)" href="#" class="btn-link text-semibold media-heading box-inline"
            >{{thread.User.username}}</a
          >
          <p class="text-muted text-sm">
            <i class="fa fa-globe fa-lg"></i> - {{ formatDate(thread.createdAt) }}
          </p>
        </div>
        <p>
          {{thread.content}}
        </p>
        <img :src="thread.imageUrl" alt="" style="max-height: 500px; max-width: 500px;">
          
        
        <div class="pad-ver mt-3">
          <div class="btn-group">
            <a class="btn btn-sm btn-default btn-hover-success" href="#"
              ><i class="fa-regular fa-pen-to-square"></i
            ></a>
          </div>
          <a @click="deleteThread(thread.id)" class="btn btn-sm btn-default btn-hover-danger" href="#"
            ><i class="fa-solid fa-trash"></i
          ></a>
          <a class="btn btn-sm btn-default btn-hover-primary" href="#"
            >Comment</a
          >
          <hr>
          <!-- Comments -->
          <div class="media-block mt-3 mx-5">
            <a class="media-left" href="#"> </a>
            <div v-for="comment in thread.Comments" :key="comment.id" :comment="comment" class="media-body">
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
</template>

<script>
import { mapActions, mapState } from 'pinia';
import { useCounterStore } from '../stores/counter';
export default {
  props: ["thread"],
  computed: {},
  methods: {

    ...mapActions(useCounterStore,['deleteThread', 'fetchThreads']),
  
    formatDate(value) {
      const originalDate = value;
      const dateObject = new Date(originalDate);
      return `${dateObject.toLocaleDateString("en-US")} ${dateObject.getHours()}:${dateObject.getMinutes()}`;
    },
 
  },
  created(){
    this.fetchThreads()
  }
};
</script>

<style></style>
