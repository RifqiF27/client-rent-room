<template>
  <!-- login -->
  <div class="wrapperLogin">
    <div class="logo">
      <img src="../assets/logo.png" alt="" />
    </div>
    <div class="text-center mt-4 name">Login</div>
    <form @submit.prevent="doLogin()" class="p-3 mt-3">
      <div class="form-field d-flex align-items-center">
        <span class="far fa-user"></span>
        <input
          v-model="input.email"
          type="email"
          name="email"
          id="email"
          placeholder="email"
        />
      </div>
      <div class="form-field d-flex align-items-center">
        <span class="fas fa-key"></span>
        <input
          v-model="input.password"
          type="password"
          name="password"
          id="pwd"
          placeholder="Password"
        />
      </div>
      <button class="btn mt-3">Login</button>
    </form>
    <div class="text-center fs-6">
      <p style="font-size: 10px; gap: 0">Don't have an account?</p>
      <a @click="$router.push('/register')" href="#">Sign up</a>
    </div>
  </div>
  <!-- end login -->
</template>

<script>
import { mapActions } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  data() {
    return {
      input: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions(useCounterStore, ["loginHandler"]),
    doLogin() {
      console.log("masuk store");
      this.loginHandler(this.input);
    },
  },
};
</script>

<style></style>
