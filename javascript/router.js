const router = new VueRouter({
    routes: [{
        path: '/',
        name: 'newsList',
        component: NewsList
    },
    {
        path: '/news/:id',
        name: 'newsItem',
        component: NewsItem,
        props: true
    },
    {
        path: '/authors/:id',
        name: 'newsByAuthor',
        component: NewsByAuthor,
        props: true
    },
    {
        path: '/news/add',
        name: 'createForm',
        component: CreateForm
    },
    {
        path: '/news/:id/edit',
        name: 'editForm',
        component: EditForm,
        props: true
    }]
});