<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/fullSeries">View full book series</router-link> |
      <router-link to="/addBook">Add a book</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
body {
  margin: 5vw;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  font-size: 1.5rem;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a:hover {
  color: #66D9ED;
}

nav a.router-link-exact-active {
  color: #6C91E0;
}
</style>
