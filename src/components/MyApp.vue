<template>
  <div id="app">
   <p> <a href="#/miley"> Go to Miley Cyrus </a> </p>
   <ul>
     <li v-for="elem in fulldata" :key="elem.id">
       <a v-bind:href="elem.node.display_url" target="_blank">
         <img :src= "elem.node.display_url" alt="Justinsimage" class="img-thumbnail"/>
       </a>
     </li>
   </ul>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  name: 'App',
  data () {
    return {
      fulldata:[]
    }
  },
  mounted () {
    var fulldata = this;
  		axios.get('https://www.instagram.com/justinbieber/?__a=1&max_id=')
          .then(response =>{
              this.fulldata = response.data.graphql.user.edge_owner_to_timeline_media.edges;
             // var  = result.node;
              console.log("First Response", fulldata)
              return fulldata;
          })
  		.catch(function (e){
  			console.log(e);
      })
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
    height: 400px;
    list-style-type: none;
  }

  .img-thumbnail {
    height: 416px;
  }
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
p {
  margin-top: -4.5%;
  margin-right: 8%;
  float: right;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;

}
</style>
