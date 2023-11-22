<template>
  
  <div>
    <NavLandingView />  
 <div id="intro" class="bg-image shadow-2-strong">
      <div class="mask d-flex align-items-center h-100" style="background-color: rgba(0, 0, 0, 0.8);">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-5 col-md-8">
              <form @submit.prevent="doRegis()" class="bg-white rounded shadow-5-strong p-5">
                <!-- Username input -->
                <div class="form-outline border-bottom mb-4">
                  <input v-model="input.username" type="text" id="formExample" class="form-control" />
                  <label class="form-label" for="formExample"><span><i class="fa-solid fa-user"></i></span>Username</label>
                </div>

                <!-- Email input -->
                <div class="form-outline border-bottom mb-4">
                  <input v-model="input.email" type="email" id="form1Example1" class="form-control" />
                  <label class="form-label" for="form1Example1"><span><i class="fa-solid fa-envelope"></i></span>Email address</label>
                </div>

                <!-- Password input -->
                <div class="form-outline border-bottom mb-4">
                  <input v-model="input.password" type="password" id="form1Example2" class="form-control" />
                  <label class="form-label" for="form1Example2"><span><i class="fa-solid fa-lock"></i></span>Password</label>
                </div>  

                <!-- Submit button -->
                <button type="submit" class="btn btn-primary btn-block mb-3">Sign Up</button>
                <div class="text-center fs-6">
                  <p style="font-size: 10px; gap: 0">Don't have an account?</p>
                  <a @click="$router.push('/login')" href="#">Sign In</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavLandingView from '../components/NavLandingView.vue';
import { mapActions } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
    components:{
        NavLandingView

    },
    data() {
    return {
      input: {
        username: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions(useCounterStore, ["registerHandler"]),
    doRegis() {
      console.log('register view');
      this.registerHandler(this.input);
    },
  },
};
</script>

<style scoped>
#intro {
  background-image: url(https://mdbootstrap.com/img/new/fluid/city/008.jpg);
  height: 100vh;
}

/* Height for devices larger than 576px */
@media (min-width: 992px) {
  #intro {
    margin-top: -58.59px;
  }
}

.navbar .nav-link {
  color: #fff !important;
}
</style>
