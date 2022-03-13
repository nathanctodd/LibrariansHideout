<template>
    <div>
        <div class="pure-menu pure-menu-horizontal">
        </div>
        <div class="checkedOut">
            Books Checked Out: {{booksInCart}}
        </div>
        <BookView :books="books" />
    </div>
</template>

<script>
    import BookView from "../components/BookView.vue"
    export default {
    name: 'LibraryView',
    components: {
        BookView
    },
    computed: {
        books() {
            console.log(this.$root.$data.books);
            return this.$root.$data.books;
        },
        booksInCart() {
            return this.$root.$data.checkoutList.length;
        }
    }
}
</script>

<style scoped>
.checkedOut {
    display: flex;
    font-size: 30px;
}
</style>