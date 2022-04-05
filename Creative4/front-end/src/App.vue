<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/addBook">Write short story</router-link>
    </nav>
    <router-view/>
    <div class="footer">
      <a id="github" href="https://github.com/HeatherS7/CS260/tree/main/Creative4">Visit Github</a>
    </div>
  </div>
</template>

<style>
body {
  background-color: #E9C9BE;
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
  font-size: 1.125em;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #4B84A3;
}

nav a:hover {
  color: #5FA7F0;
}

.button {
  background-color: #4B84A3;
  border: none;
  border-radius: 30px;
  font-size: 1.125em;
  margin: 1em;
  padding: 0.25em;
}

.button:hover {
  background-color: #5FA7F0;
}

.footer {
  display: flex;
  text-align: center;
  margin: 0 0 0 0;
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
