import { defineStore } from "pinia";
import axios from "axios";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

const BASE_URL = "https://hck-63-c3.rifqif.my.id";
export const useCounterStore = defineStore("counter", {
  state: () => ({
    username: '',
    lodgings: [],
    bookmarks: [],
    detail: {},
    QrCode: {},
    page: 1,
    totalPage: 0,
    params: {
      location: "",
      name: "",
      itemPerPage: 8,
      page: 1,
    },
  }),
  getters: {},
  actions: {
    async registerHandler(input) {
      try {
        const { data } = await axios({
          url: BASE_URL + "/pub/register",
          method: "POST",
          data: input,
        });
        // console.log(data);
        this.router.push("/login");
        this.showToastSuccess("Register Success");
      } catch (err) {
        console.log(err);
        this.showToastError(err.response.data.message);
      }
    },
    async loginHandler(input) {
      try {
        const { data } = await axios({
          url: BASE_URL + "/pub/login",
          method: "POST",
          data: input,
        });
        console.log(data);
        localStorage.access_token = data.access_token;
        localStorage.username = data.data.email.split("@")[0];
        this.username = data.data.email.split("@")[0];
        this.router.push("/");
        this.showToastSuccess("Welcome");
      } catch (err) {
        console.log(err);
        this.showToastError(err.response.data.message);
      }
    },
    logoutHandler() {
      localStorage.clear();
      this.username = ''
      this.router.push("/");
    },

    async fetchLodgings() {
      try {
        const { data } = await axios({
          url: BASE_URL + "/pub/lodgings",
          // ?page=" + this.page
          method: "GET",
          params: this.params,
        });
        this.lodgings = data.data.rows;
        this.totalPage = data.totalPage;

        // console.log(data);
      } catch (err) {
        console.log("🚀 ~ file: counter.js:39 ~ fetchLodgings ~ err:", err);
        this.showToastError(err.response.data.message);
      }
    },
    filterLocation(input) {
      this.params.location = input.location;
      console.log(input);
    },
    async detailLodging(id) {
      try {
        const { data } = await axios({
          url: BASE_URL + "/pub/lodgings/" + id,
          method: "GET",
        });
        console.log(data.data);
        this.detail = data.data;
        this.QrCode = data;
      } catch (err) {
        console.log("🚀 ~ file: counter.js:107 ~ detailLodging ~ err:", err);
        this.showToastError(err.response.data.message);
      }
    },
    async fetchBookmark() {
      try {
        const { data } = await axios({
          url: BASE_URL + "/pub/bookmarks",
          method: "GET",
          headers: { access_token: localStorage.getItem("access_token") },
        });
        console.log(data.data);
        this.bookmarks = data.data;
      } catch (err) {
        console.log("🚀 ~ file: counter.js:67 ~ fetchBookmark ~ err:", err);
        this.showToastError(err.response.data.message);
      }
    },
    async addBookmark(id) {
      try {
        const { data } = await axios({
          url: BASE_URL + "/pub/bookmarks/" + id,
          method: "POST",
          headers: { access_token: localStorage.getItem("access_token") },
        });
        console.log(data);
        this.showToastSuccess("Add Success");
      } catch (err) {
        console.log("🚀 ~ file: counter.js:92 ~ addBookmark ~ err:", err);
        this.showToastError(err.response.data.message);
      }
    },

    showToastSuccess(message) {
      toast.success(message, { autoClose: 3000 });
    },
    showToastError(message) {
      toast.error(message, { autoClose: 3000 });
    },
  },
});
