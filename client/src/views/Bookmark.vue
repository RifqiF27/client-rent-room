<template>
  <!--========Bookmark========-->
  <section class="wrapper">
    <div class="container">
      <div class="row">
        <div class="col text-center"></div>
      </div>
      <div class="row">
        <BookmarkItem
          @click="$router.push('/lodgings/' + bookmark.Lodging.id)"
          v-for="bookmark in bookmarks"
          :key="bookmark.id"
          :bookmark="bookmark"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "../stores/counter";
import BookmarkItem from "../components/BookmarkItem.vue";
export default {
  components: {
    BookmarkItem,
  },
  computed: {
    ...mapState(useCounterStore, ["bookmarks"]),
  },
  methods: {
    ...mapActions(useCounterStore, ["fetchBookmark"]),
  },
  created() {
    this.fetchBookmark();
  },
};
</script>

<style></style>
