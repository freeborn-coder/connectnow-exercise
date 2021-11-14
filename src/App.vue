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

<script>

export default {
  name: 'App'
}
</script>

<style>
a{
  color:white;
  text-decoration:none;
}
a:hover{
  color:#ddd;
}

</style>
