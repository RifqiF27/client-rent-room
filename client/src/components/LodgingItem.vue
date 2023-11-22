<template>
  <div class="col-lg-4 mb-4">
    <div class="card">
      <img
        :src="lodging.imageUrl"
        alt=""
        class="card-img-top"
        style="height: 300px; object-fit: cover"
      />

      <div class="card-body">
        <h5 class="card-title">{{ lodging.name }}</h5>
        <p class="card-text">
          {{ lodging.facility }}
        </p>
        <p class="card-text">
          {{ formattedPrice }}
        </p>
        <a
          href=""
          @click="this.$router.push('/lodgings/' + lodging.id)"
          class="btn btn-outline-success btn-sm"
          style="margin-right: 10px"
          >Read More</a
        >
        <a
          @click="addBookmark(lodging.id)"
          href="#"
          class="btn btn-outline-danger btn-sm"
          ><i class="far fa-heart"></i
        ></a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  props: ["lodging"],
  computed: {
    formattedPrice() {
      return this.formatCurrency(this.lodging.price, "IDR");
    },
  },
  methods: {
    ...mapActions(useCounterStore, ["addBookmark"]),

    formatCurrency(value, currency) {
      const formatter = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: currency,
      });
      return formatter.format(value);
    },
  },
};
</script>

<style></style>
