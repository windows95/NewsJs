// Форма создания новости

const formMixin = {
    methods: {
        processForm: function() {
            this.titleIsValid = this.item.title.trim().length > 0;
            this.contentIsValid = this.item.content.trim().length > 0;
            this.authorIsValid = this.item.author != '';

            if (!this.titleIsValid || !this.contentIsValid || !this.authorIsValid) {
                return false;
            }

            this.serverError = false;
            this.isBtnDisabled = true;

            axios[this.httpMethod](this.saveUrl, {
                title: this.item.title,
                content: this.item.content,
                author_id: this.item.author
            })
            .then((response) => {
                this.isBtnDisabled = false;

                if (response.status == this.expectedHttpCode) {
                    this.$router.push({name: 'newsItem', params: {id: response.data.id}});
                }
                else {
                    this.serverError = true;
                }
            })
            .catch((error) => {
                this.isBtnDisabled = false;
                this.serverError = true;
            });
        }
    },
}

const CreateForm = {
    mixins: [formMixin],
    data() {
        return {
            authors: [],
            authorsUrl: rootUrl + 'authors',
            saveUrl: rootUrl + 'news',
            isBtnDisabled: false,
            item: {
                title: '',
                author: '',
                content: ''
            },
            btnTitle: 'Добавить',
            isFirstOptionVisible: true,
            serverError: false,
            titleIsValid: true,
            contentIsValid: true,
            authorIsValid: true,
            expectedHttpCode: 201,
            httpMethod: 'post'
        }
    },
    mounted() {
        this.$refs.firstInput.focus();

        axios.get(this.authorsUrl).then((response) => {
            this.authors = response.data;
        });
    },
    template: '#form-template'
}