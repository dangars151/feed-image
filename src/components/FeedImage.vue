<template>
  <div>
    <div v-for="(item, $index) in list" :key="$index">{{ item }}</div>

    <infinite-loading @infinite="infiniteHandler"></infinite-loading>
  </div>
</template>

<script>
import axios from "axios";
import InfiniteLoading from "vue-infinite-loading";
//const api = "//hn.algolia.com/api/v1/search_by_date?tags=story";
//const api = "https://secure-caverns-59009.herokuapp.com/photos?all=true";
const api = "http://192.168.1.120:1337/photos?all=true";

export default {
  name: "FeedImage",
  data() {
    return {
      page: 1,
      list: [],
    };
  },
  components: {
    InfiniteLoading,
  },
  methods: {
    infiniteHandler($state) {
      axios
        .get(api, {
          query: {
            page: this.page,
          },
        })
        .then(({ data }) => {
          if (data.length) {
            this.page += 1;
            this.list.push(...data);
            $state.loaded();
          } else {
            $state.complete();
          }
        });
    },
  },
};
</script>

<style>
img {
  width: 300px;
  height: 300px;
}
</style>
