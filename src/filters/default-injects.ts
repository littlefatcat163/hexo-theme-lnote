import path from 'path'

/* hexo.extend.filter.register('before_generate', function () {
    if (hexo.config.__AUTH_LNOTE) {
        return
    }
    process.exit()
}) */

hexo.extend.filter.register(
    'theme_inject',
    function (injects) {
        injects.header.file(
            'default',
            path.join(hexo.theme_dir, 'layout/_partials/header.ejs')
        )
        injects.footer.file(
            'default',
            path.join(hexo.theme_dir, 'layout/_partials/footer.ejs')
        )

        injects.postLeft.file(
            'default',
            path.join(hexo.theme_dir, 'layout/_partials/post/sidebar-left.ejs')
        )
        injects.postRight.file(
            'default',
            path.join(hexo.theme_dir, 'layout/_partials/post/sidebar-right.ejs')
        )
        injects.postMetaTop.file(
            'default',
            path.join(hexo.theme_dir, 'layout/_partials/post/meta-top.ejs')
        )
        injects.postMetaBottom.file(
            'default',
            path.join(hexo.theme_dir, 'layout/_partials/post/meta-bottom.ejs')
        )
    },
    -99
)
