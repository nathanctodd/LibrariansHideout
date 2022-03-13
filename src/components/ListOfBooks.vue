<template>
<div class="wrapper">
  <div class="books">
    <div class="book" v-for="book in explore" :key="book.id">
      <div class="info">
        <h1>{{ book.name }}</h1>
        <p>{{ book.author }}</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'ListOfBooks',
  props: {
    explore: Array,
  },
}
</script>


<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.books {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.book {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
}

.book img {
  border: 2px solid #333;
  height: 250px;
  width: 150px;
  object-fit: cover;
  margin: 10px;
}

.book .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  background: #abd9e5;
  color: #000;
  padding: 10px 20px;
  height: 110px;
  border-radius: 10px;
}

.info h1 {
  font-size: 16px;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}


.price {
  display: flex;
}

button {
  height: 50px;
  background: rgb(103, 103, 103);
  color: rgb(57, 12, 12);
  border: none;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 10px;
}

.auto {
  margin-left: auto;
}
</style>

