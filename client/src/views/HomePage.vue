<template>
  <!-- ===========HomePAge=========== -->
  <div>

    <HomeAutoSlide style="margin-bottom: 30px;"/>
    <FilterType />
    <section id="gallery">
      <div class="container">
        <div class="row">
          <LodgingItem v-for="lodging in lodgings" :key="lodging.id" :lodging="lodging"/>
        </div>
      </div>
    </section>

    <PageNation />

  </div>
</template>

<script>
import LodgingItem from '../components/LodgingItem.vue';
import { mapActions, mapState } from 'pinia';
import { useCounterStore } from '../stores/counter';
import PageNation from '../components/PageNation.vue';
import HomeAutoSlide from '../components/HomeAutoSlide.vue';
import FilterType from '../components/FilterType.vue';
export default {
  components:{
    LodgingItem,
    PageNation,
    HomeAutoSlide,
    FilterType
  },
  computed:{
    ...mapState(useCounterStore, ['lodgings', 'page'])
  },
  methods:{
    ...mapActions(useCounterStore, ['fetchLodgings'])
  },
  created(){
    this.fetchLodgings(this.page)
  }
};
</script>

<style></style>
