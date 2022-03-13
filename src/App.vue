<template>
  <div id="app">
    <div id="menu">
      <div id="brand">
        <router-link to="/">
          <h1>Librarian Hideout</h1>
          <img class="logo" src="../public/images/BookCovers/BookLogo.jpg">
        </router-link>
      </div>
      <div id="side">
        <router-link to="/library">
          <div class="menu-item browse">
            <img src="../public/images/BookCovers/Book.png">
            <p>Browse Book Selection</p>
          </div>
        </router-link>
        <router-link to="/explore">
          <div class="menu-item">
            <img src="../public/images/BookCovers/Magnify.png">
            <p>Explore</p>
          </div>
        </router-link>
      </div>
    </div>
      <router-view />
  </div>
</template>




<style>
* {
  box-sizing: border-box;
}

body {
  margin: 50px 100px;
}

#menu {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "none brand side";
  margin-bottom: 50px;
  justify-content: center;
}

#menu a {
  color: #2b3d65;
  font-size: 20px;
  padding: 50px;
  justify-content: center;
}

#brand {
  grid-area: brand;
  display: flex;
  justify-content: center;
}

.logo{
  display: flex;
  justify-content: center;
  width: 300px;
  height: 300px;
}

#brand img {
  height: 200px;
}

#side {
  grid-area: side;
  display: flex;
  justify-content: flex-end;
}

#side img {
  width: 50px;
}

.menu-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.menu-item p {
  margin: 0px;
}

.browse {
  margin-right: 50px;
}

p {
  text-align: center;
}

</style>
