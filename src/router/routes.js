const routes = [{
        path: '/',
        component: () =>
            import ('layouts/MainLayout.vue'),
        children: [{
                path: '/gameslist',
                component: () =>
                    import ('pages/GamesList.vue')
            },
            {
                path: '/login',
                component: () =>
                    import ('pages/Authorization.vue')
            },
            {
                path: '/register',
                component: () =>
                    import ('pages/Registration.vue')
            },
            {
                path: '/create_game',
                component: () =>
                    import ('pages/CreateGame.vue')
            },
            {
                path: '/join_game',
                component: () =>
                    import ('pages/JoinGame.vue')
            },
            {
                path: '/game',
                component: () =>
                    import ('pages/Game.vue')
            },
            {
                path: '/profile',
                component: () =>
                    import ('pages/profile.vue')
            },
            {
                path: '/table',
                component: () =>
                    import ('pages/table.vue')
            },
            {
                path: '/price',
                component: () =>
                    import ('pages/price.vue')
            },
            {
                path: '/',
                component: () =>
                    import ('pages/landing.vue')
            }
        ]
    },
    // Always leave this as last one,
    // but you can also remove it
    {
        path: '/:catchAll(.*)*',
        component: () =>
            import ('pages/Error404.vue')
    }
]

export default routes