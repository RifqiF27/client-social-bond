<template>
 
    <div>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />

      <!-- Navbar -->
      <NavLandingView />
      <!-- Navbar -->

      <!-- Background image -->
      <div id="intro" class="bg-image shadow-2-strong">
        <div
          class="mask d-flex align-items-center h-100"
          style="background-color: rgba(0, 0, 0, 0.8)"
        >
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-xl-5 col-md-8"></div>
            </div>
            <div class="py-4 text-center">
              <a @click="$router.push('/login')"
                role="button"
                class="btn btn-primary btn-lg m-2 w-25"
                href="#"
                rel="nofollow"
              >
                Login
              </a>
              <a
              @click="$router.push('/register')"
                role="button"
                class="btn btn-primary btn-lg m-2 w-25"
                href="#"
              >
                Register
              </a>
            </div>
          </div>
        </div>
      </div>
      <!-- Background image -->
    </div>

</template>

<script>
import NavLandingView from '../components/NavLandingView.vue';

export default {
    components:{
        NavLandingView

    }
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
