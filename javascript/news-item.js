// Выбранная новость

const NewsItem = {
    data() {
        return {
            title: '',
            createdAt: '',
            authorId: 0,
            authorName: '',
            content: '',
            url: rootUrl + 'news/'
        }
    },
    props: ['id'],
    mounted() {
        axios.get(this.url + this.id).then((response) => {
            this.title = response.data.title;
            this.createdAt = response.data.created_at;
            this.authorId = response.data.author.id;
            this.authorName = response.data.author.name;
            this.content = response.data.content;
        });
    },
    template: '#news-item-template'
}