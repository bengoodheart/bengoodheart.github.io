<template lang="">
  <div class="donate">
    <b-container>
      <b-card text-variant="primary">
        <span style="font-size: 12px">
          Created by
          <a :href="GH_LINK" target="_blank"> Benjamin Goodheart. </a> &nbsp;
          &#128075;
          <br />
          If you enjoy this tool, please consider
          <a :href="PAYPAL_LINK" target="_blank"> donating </a> a small amount to keep the
          overhead bills paid and my coffee cup full. &#9749;
          <br />
          Thanks for stopping by!! &#128516; LGM!!!! &#9918;
        </span>
      </b-card>
      <b-card v-if="showMore == true">
        <span style="font-size: 10px">
          <p>
            Created using <a :href="VUE_LINK" target="_blank">Vue 3 CLI </a>,
            <a :href="BS_LINK" target="_blank"> Bootstrap-Vue </a>, and
            <a :href="PINIA_LINK" target="_blank">Pinia </a>.
            <br />
            API provided by
            <a :href="BBAPI_LINK" target="_blank">Baseball-API</a>
            <br />
            Image generation by <a :href="DALLE_LINK">DALL-E 2</a>. Special
            thanks to Mike and Brien for the access.
          </p>
        </span>
      </b-card>
      <b-button size="sm" @click="showMore = !showMore">
        <span v-if="showMore == false">More credits </span>
        <span v-if="showMore == true"> Hide </span>
      </b-button>
    </b-container>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  name: "DonateFooter",
  setup() {
    const PAYPAL_LINK = ref(
      "https://www.paypal.com/donate/?business=DZQG7DBS8M96U&no_recurring=0&item_name=If+you+enjoy+metsinfirst.com%2C+please+consider+donating+to+keep+the+services+up+and+running.+Thanks%21&currency_code=USD"
    );
    const GH_LINK = ref("https://github.com/bengoodheart");
    const VUE_LINK = ref("https://cli.vuejs.org/");
    const BS_LINK = ref("https://bootstrap-vue.org/");
    const PINIA_LINK = ref("https://pinia.vuejs.org/");
    const DALLE_LINK = ref("https://openai.com/dall-e-2/");
    const BBAPI_LINK = ref("https://rapidapi.com/api-sports/api/api-baseball/");

    const showMore = ref(false);

    return {
      PAYPAL_LINK,
      GH_LINK,
      VUE_LINK,
      BS_LINK,
      PINIA_LINK,
      DALLE_LINK,
      BBAPI_LINK,
      showMore,
    };
  },
};
</script>
<style lang=""></style>
