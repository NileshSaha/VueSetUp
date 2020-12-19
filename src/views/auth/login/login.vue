<!-- =========================================================================================
    File Name: Login.vue
    Description: Login Page
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
  <div
    class="h-screen flex w-full bg-img vx-row no-gutter items-center justify-center"
    id="page-login"
  >
    <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 sm:m-0 m-4">
      <div slot="no-body" class="full-page-bg-color">
        <div class="vx-row no-gutter justify-center items-center">
          <div class="vx-col hidden lg:block lg:w-1/2">
            <div class="vx-row no-gutter justify-center items-center">
              <img
                src="@/assets/images/pages/login.png"
                alt="login"
                style="width: 350px"
                class="mx-auto"
              />
              <!-- <img src="@/assets/images/logo/TraqWorx_Logo.svg" alt="login" style="height:50%;width:75%;" class="mx-auto"> -->
            </div>
          </div>

          <div class="vx-col sm:w-full md:w-full lg:w-1/2 d-theme-dark-bg">
            <div class="px-8 pt-8 login-tabs-container">
              <div class="vx-card__title mb-4">
                <h4 class="mb-4">Admin Login</h4>
                <p>Welcome back, please login to your account.</p>
              </div>
              <div class="mt-20">
                <!-- <login-jwt></login-jwt> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vxCard from "@/components/vxCard/vxCard";
import { login } from "@/api/auth/auth";
export default {
  components: {
    vxCard,
  },
  name: "login",
  data() {
    return {
      payload: {
        email: "",
        password: "",
      },
      checkbox_remember_me: false,
    };
  },
  methods: {
    async login() {
      console.log(this.payload);
      try {
        const { data } = await login(this.payload);
        console.log(data);
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style lang="scss">
</style>
