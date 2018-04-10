<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
      <router-view/>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',
  data () {
    return {
      msg: 'Instagram trial app'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}
 ul li{
      list-style-type: none;
      float:left;
      margin-right: 2%;
      margin-bottom: 2%;
  }

  img {
    width: 378px;
    height: 416px;
    list-style-type: none;
  }

  .img-thumbnail {
    height: 416px;
  }

h1, h2 {
  font-weight: normal;
  text-align: center;
}
p {
  margin-top: -4.5%;
  margin-right: 8%;
  float: right;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

</style>
