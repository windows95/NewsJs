// Редактирование новости

const EditForm = {
    mixins: [formMixin],
    data() {
        return {
            authors: [],
            authorsUrl: rootUrl + 'authors',
            saveUrl: rootUrl + 'news/' + this.id,
            getUrl: rootUrl + 'news/' + this.id,
            isBtnDisabled: false,
            item: {
                title: '',
                author: '',
                content: ''
            },
            btnTitle: 'Сохранить',
            isFirstOptionVisible: false,
            serverError: false,
            titleIsValid: true,
            contentIsValid: true,
            authorIsValid: true,
            expectedHttpCode: 200,
            httpMethod: 'put'
        }
    },
    props: ['id'],
    mounted() {
        axios.get(this.authorsUrl).then((response) => {
            this.authors = response.data;
        });

        axios.get(this.getUrl).then((response) => {
            this.item.title = response.data.title;
            this.item.content = response.data.content;
            this.item.author = response.data.author.id;
        })
    },
    template: '#form-template'
}