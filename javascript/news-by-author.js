// Новости определенного автора

const NewsByAuthor = {
    data() {
        return {
            news: [],
            url: rootUrl + 'news/author/' + this.id,
            authorsUrl: rootUrl + 'authors',
            isAuthorVisible: true,
            author: ''
        }
    },
    props: ['id'],
    mounted() {
        axios.get(this.url).then((response) => {
            this.news = response.data;
        });

        axios.get(this.authorsUrl).then((response) => {
            response.data.forEach((row) => {
                if (row.id == this.id)
                {
                    this.author = row.first_name + ' ' + row.last_name;
                    return false;
                }
            });
        });
    },
    template: '#news-list-template'
}