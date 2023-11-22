<template>
  <!-- Pagenation -->
  <div class="d-flex justify-content-center">
    <nav class="pagination-outer" aria-label="Page navigation">
      <ul class="pagination">
        <li class="page-item">
          <a href="#" class="page-link" aria-label="Previous">
            <span @click="doPrev()" aria-hidden="true">Prev</span>
          </a>
        </li>

        <li
          v-for="counter in totalPage"
          :key="counter.id"
          :counter="counter"
          :class="['page-item', counter === params.page ? 'active' : '']"
          @click="goPage(counter)"
        >
          <a class="page-link" href="#">{{ counter }}</a>
        </li>

        <li class="page-item">
          <a @click="doNext()" href="#" class="page-link" aria-label="Next">
            <span aria-hidden="true">Next</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { mapActions, mapState, mapWritableState } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  computed: {
    ...mapWritableState(useCounterStore, ["params"]),
    ...mapState(useCounterStore, ["totalPage"]),
  },
  methods: {
    ...mapActions(useCounterStore, ["fetchLodgings"]),
    doNext() {
      this.params.page++;
      this.fetchLodgings();
      // console.log("masukkkkkk");
    },
    doPrev() {
      if (this.params.page > 1) {
        this.params.page--;
        this.fetchLodgings();
        // console.log("masukkkkkk");
      }
    },
    goPage(page) {
      this.params.page = page;
      this.fetchLodgings();
    },
  },
};
</script>

<style></style>
