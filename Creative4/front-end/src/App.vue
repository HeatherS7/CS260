<template>
  <div id="app">
    <div class="header">
      <h1>SHARE A STORY</h1>
    </div>
    <nav>
      <router-link to="/">View all stories</router-link> |
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
  background-image: url("../public/images/booksBackground.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
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
  text-align: right;
  color: #9FEB46;
}

nav a {
  font-weight: bold;
  color: #6F9E37;
  background-color: #555;
  padding: 0.125em;
  border-radius: 5px;
}

nav a.router-link-exact-active {
  color: #9FEB46;
}

nav a:hover {
  color: #9FEB46;
}

.button {
  background-color: #6F9E37;
  border: none;
  border-radius: 5px;
  font-size: 1.125em;
  margin: 1em;
  padding: 0.3em;
}

.button:hover {
  background-color: #9FEB46;
}

.footer {
  display: flex;
  text-align: center;
  margin: 0 0 0 0;
  position: fixed;
  bottom: 0;
  background-color: black;
  color: #CCC;
  min-width: 100vw;
  font-size: 1.25rem;
  height: 2.5rem;
  text-decoration: none;
  /* border-radius: 20px 20px 0px 0px; */
  align-items: center;
  justify-content: space-evenly;
}

#github {
  text-decoration: none !important;
  color: #6F9E37 !important;
}

#github:hover {
  color: white !important;
}

.header {
  min-width: 90vw;
  background-color: white;
  align-items: center;
  text-align: center;
  padding: 1em;
  border-radius: 5px;
}

h1 {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 2em;
}

</style>
