<template>
  
  <main>
    <header>
        <ul>
            <li>
              <router-link to="/">
                <h2>VIDEO GAMES</h2>
              </router-link>
            </li>
            <li>
              <router-link to="/contact">
                <h2>CONTACT</h2>
              </router-link>
            </li>
        </ul>
    </header>

    <router-view></router-view>
    
  </main>

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Index from './pages/index.vue';

@Component({
  components: {
    Index
  }
})
export default class App extends Vue {}
</script>

<style>
a{
  color:white;
  text-decoration:none;
}
a:hover{
  color:#ddd;
}

/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
