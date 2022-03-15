<template>
  <div id="app">
    <h1>Favorite Book Series</h1>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/fullSeries">View full book series</router-link> |
      <router-link to="/addBook">Add a book</router-link>
    </nav>
    <router-view/>
    <div class="footer">
      <a id="github" href="https://github.com/HeatherS7/CS260/tree/main/creative-project-3">Visit Github</a>
    </div>
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

.footer {
  display: flex;
  margin: 0 7vw 0 0;
  position: fixed;
  bottom: 0;
  background-color: black;
  color: white;
  width: 90%;
  font-size: 1.25rem;
  height: 2.5rem;
  text-decoration: none;
  border-radius: 20px 20px 0px 0px;
  align-items: center;
  justify-content: space-evenly;
}

#github {
  text-decoration: none !important;
  color: #6A72F7 !important;
}

#github:hover {
  color: white !important;
}
</style>

<style scoped>
h1 {
  font-size: 3em;
  text-align: center;
  color: #0001D1;
}
</style>
