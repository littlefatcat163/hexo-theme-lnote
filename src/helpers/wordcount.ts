import { stripHTML } from 'hexo-util'

const getWordCount = (post: any) => {
    if (!post.wordcount) {
        post.wordcount = stripHTML(post.content)
            .replace(/\r?\n|\r/g, '')
            .replace(/\s+/g, '').length
    }
    return post.wordcount
}

const symbolsCount = (count: number) => {
    if (count > 9999) {
        return Math.round(count / 1000) + 'k' // > 9999 => 11k
    }
    if (count > 999) {
        return Math.round(count / 100) / 10 + 'k' // > 999 => 1.1k
    } // < 999 => 111
    return count
}

hexo.extend.helper.register('min2read', (post, { awl, wpm }) => {
    return `${Math.floor(getWordCount(post) / ((awl || 2) * (wpm || 60))) + 1}`
})

hexo.extend.helper.register('wordcount', (post) => {
    return `${symbolsCount(getWordCount(post))}`
})

hexo.extend.helper.register('wordtotal', (site) => {
    let count = 0
    site.posts.forEach((post: any) => {
        count += getWordCount(post)
    })
    return `${symbolsCount(count)}`
})
