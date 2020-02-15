<template>
  <v-container>
    <!--v-container fluid 전체 너비를 이용하고자 할 경우-->
    <!-- <v-textarea outlined v-model="ta"> </v-textarea> -->
    <v-layout column>
      <v-layout text-center wrap>
        <v-flex text-left>
          <h2 class="headline font-weight-bold mb-3">
            Most popular videos in ..
          </h2>
          <!-- https://stackoverflow.com/questions/53783455/populate-vuetify-select-from-an-array-of-json/53783677 -->
          <v-select
            v-validate="'required'"
            :items="json_region"
            item-text="Name"
            item-value="Code"
            v-model="selected_regionCode"
            label="Select"
            single-line
            prepend-icon="mdi-flag"
            outlined
          ></v-select>
        </v-flex>
      </v-layout>

      <v-layout row wrap>
        <v-flex
            class='item px-2'
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
      </v-layout>
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
import json_region from "../assets/region_names_codes_categoryid_verysimple.json";
import json_mostPopular_videos from "../assets/mostPopular_videos.json";

export default {
  name: "MostPopularVideos",
  //   mounted() {
  //     this.selected_regionCode = json_region[2].Code;
  //   },
  data: () => ({
    ta: "debug",
    json_region: json_region,
    selected_regionCode: json_region[8].Code,
    json_mostPopular_videos: json_mostPopular_videos

    // ecosystem: [
    //   {
    //     text: "vuetify-loader",
    //     href: "https://github.com/vuetifyjs/vuetify-loader"
    //   },
    //   {
    //     text: "github",
    //     href: "https://github.com/vuetifyjs/vuetify"
    //   },
    //   {
    //     text: "awesome-vuetify",
    //     href: "https://github.com/vuetifyjs/awesome-vuetify"
    //   }
    // ],
    // importantLinks: [
    //   {
    //     text: "Documentation",
    //     href: "https://vuetifyjs.com"
    //   },
    //   {
    //     text: "Chat",
    //     href: "https://community.vuetifyjs.com"
    //   },
    //   {
    //     text: "Made with Vuetify",
    //     href: "https://madewithvuejs.com/vuetify"
    //   },
    //   {
    //     text: "Twitter",
    //     href: "https://twitter.com/vuetifyjs"
    //   },
    //   {
    //     text: "Articles",
    //     href: "https://medium.com/vuetify"
    //   }
    // ],
    // whatsNext: [
    //   {
    //     text: "Explore components",
    //     href: "https://vuetifyjs.com/components/api-explorer"
    //   },
    //   {
    //     text: "Select a layout",
    //     href: "https://vuetifyjs.com/layout/pre-defined"
    //   },
    //   {
    //     text: "Frequently Asked Questions",
    //     href: "https://vuetifyjs.com/getting-started/frequently-asked-questions"
    //   }
    // ]
  }),
  computed: {
    videos_region: function() {
      return this.videos(this.selected_regionCode);
    }
  },
  methods: {
    videos: function(regionCode) {
      var videos = [];
      for (var i = 0; i < this.json_mostPopular_videos.length; i++) {
        var _item = this.json_mostPopular_videos[i];
        if (regionCode === _item.myRegionCode) {
          videos.push(_item);
        }
      }
      this.ta = JSON.stringify(videos[0]);
      return videos;
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
