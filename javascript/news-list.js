// Новости на главной странице

const NewsList = {
    data() {
        return {
            news: [],
            url: rootUrl + 'news'
        }
    },
    mounted() {
        axios.get(this.url).then((response) => {
            this.news = response.data;
        });
    },
    template: '#news-list-template'
}