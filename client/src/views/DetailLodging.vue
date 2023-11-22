<template>
  <div>
    <section class="light">
      <div class="container py-2">
        <div class="h1 text-center text-dark" id="pageHeaderTitle"></div>

        <article class="postcard light blue">
          <a class="postcard__img_link" href="#">
            <img
              class="postcard__img"
              :src="detail.imageUrl"
              alt="Image Title"
            />
          </a>

          <div class="postcard__text t-dark">
            <h1 class="postcard__title blue">
              <a href="#">{{ detail.name }}</a>
            </h1>
            <div class="postcard__subtitle small">
              <i class="fas fa-location-arrow mr-2 mb-3"></i
              >{{ detail.location }}

              <div class="qr-code-and-map-container">
                <div class="map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16680683.522642363!2d-109.57799783641649!3d40.43094620743023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sus!4v1697984500338!5m2!1sen!2sus"
                    width="400"
                    height="200"
                    style="border: 0"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
            <div class="postcard__bar"></div>
            <div class="postcard__preview-txt">
              {{ detail.facility }}
            </div>
            <ul class="postcard__tagbox mb-3">
              <li class="tag__item">
                <i class="fas fa-bed mr-2"></i>Room : {{ detail.roomCapacity }}
              </li>
              <li class="tag__item">
                <i class="fas fa-clock mr-2"></i>{{ detail.status }}
              </li>
              <li class="tag__item play blue mr-3">
                <a href="#"
                  ><i class="fas fa-tags mr-2"></i>{{ formattedPrice }}</a
                >
              </li>

              <button
                @click="addBookmark(detail.id)"
                type="button"
                class="btn btn-outline-danger btn-sm"
                data-mdb-ripple-color="dark"
              >
                <i class="far fa-heart"></i>
              </button>
              
            </ul>
            <!-- QR Code -->
            <div class="qr-code">
              <div
                v-html="QrCode.QR_CODE"
                style="width: 120px; height: 120px"
              ></div>
            </div>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "../stores/counter";
export default {
  computed: {
    ...mapState(useCounterStore, ["detail", "QrCode"]),
    formattedPrice() {
      return this.formatCurrency(this.detail.price, "IDR");
    },
  },
  methods: {
    ...mapActions(useCounterStore, ["detailLodging", "addBookmark"]),
    formatCurrency(value, currency) {
      const formatter = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: currency,
      });
      return formatter.format(value);
    },
  },
  created() {
    this.detailLodging(this.$route.params.id);
  },
};
</script>

<style></style>
