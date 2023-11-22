<template>
  <!--======Nav======-->
  <nav class="navbar navbar-expand-xl navbar-dark bg-dark">
    <a href="#" class="navbar-brand"
      ><i class="fa fa-cube"></i>Rent<b>Room</b></a
    >
    <button
      type="button"
      class="navbar-toggler"
      data-toggle="collapse"
      data-target="#navbarCollapse"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <!-- Collection of nav links, forms, and other content for toggling -->
    <div
      id="navbarCollapse"
      class="collapse navbar-collapse justify-content-start"
    >
      <!-- <form class="navbar-form form-inline">
        <div class="input-group search-box">
          <input
            type="text"
            id="search"
            class="form-control"
            placeholder="Search here..."
          />
          <span class="input-group-addon"
            ><i class="material-icons">&#xE8B6;</i></span
          >
        </div>
      </form> -->

      <div class="navbar-nav ml-auto">
        <a href="#" class="nav-item nav-link active"
          ><i @click="$router.push('/')" class="fa fa-home"></i
          ><span>Home</span></a
        >
        <a href="#" class="nav-item nav-link"
          ><i
            @click="$router.push('/bookmarks')"
            class="fa fa-bookmark"
            aria-hidden="true"
          ></i
          ><span>Bookmark</span></a
        >
        <!-- <a href="#" class="nav-item nav-link"><i class="fa fa-users"></i><span>Team</span></a>
          <a href="#" class="nav-item nav-link"><i class="fa fa-pie-chart"></i><span>Reports</span></a>
          <a href="#" class="nav-item nav-link"><i class="fa fa-briefcase"></i><span>Careers</span></a>
          <a href="#" class="nav-item nav-link"><i class="fa fa-envelope"></i><span>Messages</span></a>		
          <a href="#" class="nav-item nav-link"><i class="fa fa-bell"></i><span>Notifications</span></a> -->

        <div class="nav-item dropdown">
          <a
            href=""
            data-toggle="dropdown"
            class="nav-item nav-link dropdown-toggle user-action"
            ><img src="../assets/logo.png" class="avatar" alt="Avatar" />
            {{ username }} <i class="fa fa-hand-o-up" aria-hidden="true"></i>
            <b class="caret"></b
          ></a>
          <div class="dropdown-menu">
            <a href="" class="dropdown-item"
              ><i @click="$router.push('/login')" class="fa fa-user-o"></i>Sign
              In</a
            >
            <!-- <a href="" class="dropdown-item"
              ><i @click="$router.push('/register')" class="fa-solid fa-right-to-bracket"></i>Sign Up</a
            > -->
            <!-- <a href="#" class="dropdown-item"
              ><i class="fa fa-user-o"></i> Profile</a
            > -->
            <!-- <a href="#" class="dropdown-item"><i class="fa fa-calendar-o"></i> Calendar</a>
              <a href="#" class="dropdown-item"><i class="fa fa-sliders"></i> Settings</a> -->
            <div class="divider dropdown-divider"></div>
            <a href="#" class="dropdown-item"
              ><i @click="doLogout()" class="material-icons">&#xE8AC;</i>
              Logout</a
            >
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapActions, mapWritableState } from "pinia";
import { useCounterStore } from "../stores/counter";
export default {
  methods: {
    // props: ['username'],
    // data() {
    //   return {
    //     username: "",
    //   };
    // },
    ...mapActions(useCounterStore, [
      "logoutHandler",
      "loginHandler",
      "registerHandler",
    ]),
    doLogout() {
      this.logoutHandler();
    },
  },
  computed: {
    ...mapWritableState(useCounterStore, ['username'])
  },
  created() {
    this.username = localStorage.username;
  },
  // updated() {
  //   console.log(this.username)
  // },
  // watch: {
  //   ['$route'](){
  //     console.log(localStorage.username);
  //     // if(localStorage.username){
  //       this.username = localStorage.username;
  //       console.log(this.username, '<<>>')
  //     // }else{
  //     //   this.username = ''
  //     // }
  //   }
  // }
};
</script>

<style></style>
