<template>
  <div class="dog-post">
    <h2>A cool <strong>DOG</strong> image below!</h2>
    <h4><strong>Reload</strong> to see a new one :)</h4>

    <img alt="Dog" :src=posts.message class="dog-image">

  </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "PostsList",

    data() {
        return {
            posts: []
        }
    },

    mounted() {
        axios.get('https://dog.ceo/api/breeds/image/random').then((data) => {
            console.log("data: ", data);
            console.log("data.data: ", data.data);
            console.log("data.data.message: ", data.data.message);
            this.posts = data.data
        });
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.dog-image {
    width: 350px;
    height: 300px;
    box-shadow: 0 0 2px 2px lightgray;
    border-radius: 7%;
}
</style>
