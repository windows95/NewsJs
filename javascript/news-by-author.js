// Новости определенного автора

const NewsByAuthor = {
    data() {
        return {
            news: [],
            url: rootUrl + 'news/author/'
        }
    },
    props: ['id'],
    mounted() {
        axios.get(this.url + this.id).then((response) => {
            this.news = response.data;
        });
    },
    template: '#news-list-template'
}