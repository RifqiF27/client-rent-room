<template>
  <form @submit.prevent="sendFilter">
    <div class="container d-flex justify-content-end">
      <div class="row col-4 p-2">
        <div class="input-group mb-2">
          <input
            v-model="input.location"
            type="text"
            class="form-control"
            placeholder="Location..."
          />
          <div class="input-group-append">
            <button @click.prevent="sendFilter" class="btn btn-primary">
              <i class="fas fa-search"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </form>
  <!-- filter by type -->
  <!-- <div class="container mt-4">
    <div class="row d-flex justify-content-center">
      <div class="col-md-9">
        <div class="card p-4 mt-3">
          <h3 class="heading mt-5 text-center">Hi! How can we help You?</h3> -->
  <!-- <div class="d-flex justify-content-end px-5">
            <div class="search">
              <input v-model="input.location"
                type="text"
                class="search-input"
                placeholder="Search by location..."
                name=""
              />
              <a @click.prevent="sendFilter" href="#" class="search-icon"> <i class="fa fa-search"></i> </a>
            </div>
          </div> -->
  <!-- <div class="row mt-4 g-1 px-4 mb-5">
            <div class="col-md-2">
              <div class="card-inner p-3 d-flex flex-column align-items-center">
                <img src="https://i.imgur.com/Mb8kaPV.png" width="50" />
                <div class="text-center mg-text">
                  <span class="mg-text">Account</span>
                </div>
              </div>
            </div>
            <div class="col-md-2">
              <div class="card-inner p-3 d-flex flex-column align-items-center">
                <img src="https://i.imgur.com/ueLEPGq.png" width="50" />
                <div class="text-center mg-text">
                  <span class="mg-text">Payments</span>
                </div>
              </div>
            </div>
            <div class="col-md-2">
              <div class="card-inner p-3 d-flex flex-column align-items-center">
                <img src="https://i.imgur.com/tmqv0Eq.png" width="50" />
                <div class="text-center mg-text">
                  <span class="mg-text">Delivery</span>
                </div>
              </div>
            </div>
            <div class="col-md-2">
              <div class="card-inner p-3 d-flex flex-column align-items-center">
                <img src="https://i.imgur.com/D0Sm15i.png" width="50" />
                <div class="text-center mg-text">
                  <span class="mg-text">Product</span>
                </div>
              </div>
            </div>
            <div class="col-md-2">
              <div class="card-inner p-3 d-flex flex-column align-items-center">
                <img src="https://i.imgur.com/Z7BJ8Po.png" width="50" />
                <div class="text-center mg-text">
                  <span class="mg-text">Return</span>
                </div>
              </div>
            </div>
            <div class="col-md-2">
              <div class="card-inner p-3 d-flex flex-column align-items-center">
                <img src="https://i.imgur.com/YLsQrn3.png" width="50" />
                <div class="text-center mg-text">
                  <span class="mg-text">Guarantee</span>
                </div>
              </div>
            </div>
          </div> -->
  <!-- </div>
      </div>
    </div>
  </div> -->
  <!-- End filter by Type -->
</template>

<script>
import { mapActions } from "pinia";
import { useCounterStore } from "../stores/counter";
export default {
  data() {
    return {
      input: {
        location: "",
      },
    };
  },
  methods: {
    ...mapActions(useCounterStore, ["filterLocation", "fetchLodgings"]),
    sendFilter() {
      this.filterLocation(this.input);
      this.fetchLodgings();
    },
  },
  created() {
    this.fetchLodgings();
  },
};
</script>

<style scoped>
body {
  background-color: blue;
}

.card {
  border: none;
  background: #eee;
}
.search {
  width: 100%;
  margin-bottom: auto;
  margin-top: 20px;
  height: 50px;
  background-color: #fff;
  padding: 10px;
  border-radius: 5px;
}

.search-input {
  color: white;
  border: 0;
  outline: 0;
  background: none;
  width: 0;
  margin-top: 5px;
  caret-color: transparent;
  line-height: 20px;
  transition: width 0.4s linear;
}

.search .search-input {
  padding: 0 10px;
  width: 100%;
  caret-color: #536bf6;
  font-size: 19px;
  font-weight: 300;
  color: black;
  transition: width 0.4s linear;
}

.search-icon {
  height: 34px;
  width: 34px;
  float: right;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: #536bf6;
  font-size: 10px;
  bottom: 30px;
  position: relative;
  border-radius: 5px;
}

.search-icon:hover {
  color: #fff !important;
}

a:link {
  text-decoration: none;
}

.card-inner {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  border: none;
  cursor: pointer;
  transition: all 2s;
}

.card-inner:hover {
  transform: scale(1.1);
}

.mg-text span {
  font-size: 12px;
}

.mg-text {
  line-height: 14px;
}
</style>
