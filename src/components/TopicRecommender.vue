<template>
  <v-container>
    <!--v-container fluid 전체 너비를 이용하고자 할 경우-->
    <!-- <v-textarea outlined v-model="ta"> </v-textarea> -->
    <v-layout column>
      <v-layout text-center wrap>
        <div>
          <p>
            isTyping {{ isTyping }}<br />
            searchQuery {{ searchQuery }}<br />
            isLoading {{ isLoading }} <br />
            top_topics {{ top_topics }}
          </p>
          <textarea
            id="w3mission"
            v-model="searchResult"
            rows="4"
            cols="50"
          ></textarea>
          <textarea id="w3mission2" v-model="msg" rows="4" cols="50"></textarea>
        </div>

        <v-flex text-left>
          <h1 class="headline font-weight-bold mb-2">
            Youtube Topic Recommender
          </h1>
          <h2 class="headline mb-4">
            Brainstorming on Youtube Topics
          </h2>
          <v-spacer></v-spacer>

          <!-- https://stackoverflow.com/questions/53783455/populate-vuetify-select-from-an-array-of-json/53783677 -->
          <v-text-field
            id="topic-tf"
            v-model="searchQuery"
            @input="isTyping = true"
            label="Solo"
            placeholder="Input Youtube Topic.."
            solo
          ></v-text-field>
          <v-chip-group column active-class="primary--text">
            <v-chip v-for="topic in top_topics" :key="topic">
              {{ topic }}
            </v-chip>
          </v-chip-group>

          <h3 class="headline mb-4"></h3>
          <v-data-table
            :headers="headers"
            :items="desserts"
            :items-per-page="5"
            class="elevation-1"
          ></v-data-table>

          <!-- <v-select
            v-validate="'required'"
            :items="json_region"
            item-text="Name"
            item-value="Code"
            v-model="selected_regionCode"
            label="Select"
            single-line
            prepend-icon="mdi-flag"
            outlined
          ></v-select> -->
        </v-flex>
      </v-layout>

      <!-- <v-layout row wrap>
        <v-flex
          class="item px-2"
          xs12
          sm6
          md4
          lg3
          xl2
          v-for="(video, i) in videos_region"
          v-bind:key="i"
        >
          <v-card>
            <img
              width="100%"
              :src="video.snippet.thumbnails.medium.url"
              alt="video.title"
            />
            <div>
              <h2 class="title font-weight-bold mb-3">
                {{ video.snippet.title }}
              </h2>
            </div>
            <div>view : {{ video.statistics.viewCount }}</div>
            <div>like : {{ video.statistics.likeCount }}</div>
            <div>comment : {{ video.statistics.commentCount }}</div>
          </v-card>
        </v-flex>
      </v-layout> -->
    </v-layout>

    <!-- <v-flex xs12>
        <div v-for="data in json_region" v-bind:key="data.Code">
          {{ data.Name }}
        </div>
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        ></v-img>
    </v-flex>-->

    <!-- <v-flex mb-4> -->
    <!-- <h1 class="display-2 font-weight-bold mb-3">
          Welcome to Vuetify
    </h1>-->
    <!-- <p class="subheading font-weight-regular">
          For help and collaboration with other Vuetify developers,
          <br />please join our online
          <a href="https://community.vuetifyjs.com" target="_blank"
            >Discord Community</a
          >
        </p>
    <v-btn small color="primary">Normal</v-btn>-->
    <!-- </v-flex> -->
    <!-- <v-flex mb-5 xs12>
        <h2 class="headline font-weight-bold mb-3">What's next?</h2>
        <v-layout justify-center>
          <a
            v-for="(next, i) in whatsNext"
            :key="i"
            :href="next.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ next.text }}
          </a>
        </v-layout>
    </v-flex>-->

    <!-- <v-flex xs12 mb-5>
        <h2 class="headline font-weight-bold mb-3">Important Links</h2>
        <v-layout justify-center>
          <a
            v-for="(link, i) in importantLinks"
            :key="i"
            :href="link.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ link.text }}
          </a>
        </v-layout>
    </v-flex>-->

    <!-- <v-flex xs12 mb-5>
        <h2 class="headline font-weight-bold mb-3">Ecosystem</h2>
        <v-layout justify-center>
          <a
            v-for="(eco, i) in ecosystem"
            :key="i"
            :href="eco.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ eco.text }}
          </a>
        </v-layout>
    </v-flex>-->
  </v-container>
</template>

<script>
// import json_region from "../assets/region_names_codes_categoryid_verysimple.json";
// import json_mostPopular_videos from "../assets/mostPopular_videos.json";
import _ from "lodash";

export default {
  name: "TopicRecommender",
  mounted() {
    this.$http
      .get(
        "https://s3.ap-northeast-2.amazonaws.com/youtube.data.public/top/top_topics.json"
      )
      .then(
        response => {
          this.top_topics = response.data;
        },
        error => {
          this.msg = error;
        }
      );
  },
  data() {
    return {
      msg: "",
      searchQuery: "",
      isTyping: false,
      searchResult: [],
      isLoading: false,
      headers: [
        {
          text: "Dessert (100g serving)",
          align: "start",
          sortable: false,
          value: "name"
        },
        { text: "Calories", value: "calories" },
        { text: "Fat (g)", value: "fat" },
        { text: "Carbs (g)", value: "carbs" },
        { text: "Protein (g)", value: "protein" },
        { text: "Iron (%)", value: "iron" }
      ],
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: "1%"
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: "1%"
        },
        {
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: "7%"
        },
        {
          name: "Cupcake",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: "8%"
        },
        {
          name: "Gingerbread",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: "16%"
        },
        {
          name: "Jelly bean",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: "0%"
        },
        {
          name: "Lollipop",
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: "2%"
        },
        {
          name: "Honeycomb",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: "45%"
        },
        {
          name: "Donut",
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: "22%"
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: "6%"
        }
      ],

      top_topics: []
    };
  },

  computed: {
    // videos_region: function() {
    //   return this.videos(this.selected_regionCode);
    // }
  },
  methods: {
    // videos: function(regionCode) {
    //   var videos = [];
    //   for (var i = 0; i < this.json_mostPopular_videos.length; i++) {
    //     var _item = this.json_mostPopular_videos[i];
    //     if (regionCode === _item.myRegionCode) {
    //       videos.push(_item);
    //     }
    //   }
    //   this.ta = JSON.stringify(videos[0]);
    //   return videos;
    // }
    searchUser: function(searchQuery) {
      this.isLoading = true;
      this.$http
        .get("https://api.github.com/search/users?q=" + searchQuery)
        .then(response => {
          this.isLoading = false;
          this.searchResult = response.data.items;
        });
    }
  },
  watch: {
    searchQuery: _.debounce(function() {
      this.isTyping = false;
    }, 1000),
    isTyping: function(value) {
      if (!value) {
        this.searchUser(this.searchQuery);
      }
    }
  }
  //   watch: {
  //     selected_regionCode: function() {
  //       this.videos(this.selected_regionCode);
  //     }
  //   }
};
</script>

<style lang="scss">
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.item {
  //   width: 32%;
  padding-bottom: 8%; /* 32:18, i.e. 16:9 */

  margin-bottom: 2%; /* (100-32*3)/2 */
  //   background-color: red;
}
</style>
