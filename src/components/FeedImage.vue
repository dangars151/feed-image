<template>
  <div>
    <div class="row">
      <div
        class="card col-2"
        v-for="(item, $index) in list"
        :key="$index"
        style="margin-bottom: 30px"
      >
        <img :src="item.image" :alt="item.description" />
        <div class="card-body">
          <router-link to="author">{{ item.username }}</router-link>
          <br />
          <router-link to="detail" class="btn btn-primary">Detail</router-link>
        </div>
      </div>
    </div>
    <infinite-loading @infinite="infiniteHandler"></infinite-loading>
  </div>
</template>

<script>
import axios from "axios";
import InfiniteLoading from "vue-infinite-loading";
//const api = "//hn.algolia.com/api/v1/search_by_date?tags=story";
//const api = "https://secure-caverns-59009.herokuapp.com/photos?all=true";
//const api = "http://192.168.1.120:2020/photos";
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
  mounted() {
    if (this.$route.query.page) {
      this.page = parseInt(this.$route.query.page) - 1;
    }
  },
  methods: {
    infiniteHandler($state) {
      axios
        .get(`http://192.168.1.120:2020/photos?page=${this.page}`)
        .then(({ data }) => {
          if (data.length) {
            this.$router.push({ query: { page: this.page } });
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
  width: 90%;
  height: 300px;
  padding-left: 20px;
}
</style>
