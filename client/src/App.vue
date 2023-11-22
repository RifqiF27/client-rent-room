<template>
  <div>
    <NavbarItem />
   <router-view></router-view>

  </div>
</template>

<script>
import NavbarItem from './components/NavbarItem.vue';

export default {
  components:{
    NavbarItem,
  },
  
};
</script>

<style></style>
