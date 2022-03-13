

<template>
  <div class="home">
    <div class="about">
      <div class="photowelcome">
        <h3>Welcome to the Librarian's Hideout</h3>
        <img class="photooo" src="../../public/images/BookCovers/LibraryPhoto2.png">
      </div>
      <div style="margin: 150px;"></div>
      <div class="aboutus">
        <div class="text">Welcome! The Librarian's Hideout is meant to be a one-stop shop for all of your book needs. Need a new book suggestion? Or perhabs you want to buy or checkout a book online? You've come to the right place! Our mission is to create a place where people, locals and foreigners, can come together and be able to research books and be able to communicate together, further forming a strong community in the reading world. Checkout our selection online for more information and details!</div>
        <img class="newiamge" src="../../public/images/BookCovers/Library3.jpg">
      </div>
      <div class="links">
        <router-link to="/library">
          <p>Library</p>
        </router-link>
        <router-link to="/explore">
          <p>Explore</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style> 
.text {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  padding-right: 50px;
  font-size: 20px;
}

.aboutus {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}

.newiamge {
  display: flex;
  width: 50%;
  height: auto;
  border-radius: 20px;
  margin-bottom: 100px;
}

h3 {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 80px;
  font-family: "Lucida Console", "Courier New", monospace;
  text-align: center;
}

h1 {
    font-family: "Lucida Console", "Courier New", monospace;
    font-size: 30px;
}

.photowelcome {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.photooo {
  display: flex;
  border-radius: 20px;
  width: 80%;
  height: auto;
}

p {
  display: flex;
  font-family: "Lucida Console", "Courier New", monospace;
  font-size: 50px;
  margin: 70px;
  color: black;
  
}

.links {
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
}

</style>
