<template>
  <div class="col-sm-12 col-md-6 col-lg-4 mb-4">
    <div
      class="card text-light card-has-bg click-col"
      :style="{
        backgroundImage: 'url(' + bookmark.Lodging.imageUrl + ')',
        backgroundSize: 'cover',
      }"
    >
      <img class="card-img d-none" :src="bookmark.Lodging.imageUrl" alt="" />
      <div class="card-img-overlay d-flex flex-column">
        <div class="card-body">
          <small class="card-meta mb-2 text-light">{{ bookmark.Lodging.facility }}</small>
          <h4 class="card-title mt-0">
            <a class="text-light" herf="#">{{ bookmark.Lodging.name }}</a>
          </h4>
          <small
            ><i class="far fa-clock"></i> {{ bookmark.Lodging.status }}</small
          >
        </div>
        <div class="card-footer">
          <div class="media">
            
            <div class="media-body">
              <!-- <a class="card-action" href="#"><i class="fa fa-heart"></i></a> -->
              <h6 class="my-0 text-light d-block">{{ formattedPrice }} </h6>
              <small>{{ bookmark.Lodging.location }}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["bookmark"],
  computed: {
    formattedPrice() {
      return this.formatCurrency(this.bookmark.Lodging.price, "IDR"); 
    }
  },
  methods: {
    formatCurrency(value, currency) {
      const formatter = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: currency
      });
      return formatter.format(value);
    }
  }
};
</script>

<style></style>
