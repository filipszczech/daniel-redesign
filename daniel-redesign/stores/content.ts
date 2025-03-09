import { defineStore } from 'pinia';

export const useContentStore = defineStore('content', {
    state: () => ({
        articles: [] as Array<any>,
        articlesPending: false,
        articlesError: null as string | null,
        blogPosts: [] as Array<any>,
        blogPostsPending: false,
        blogPostsError: null as string | null,
    }),
    
    actions: {
        async fetchArticles() {
            if (this.articles.length > 0) return;
            this.articlesPending = true;
            this.articlesError = null;
            try {
                const data = await $fetch('/api/articles');
                this.articles = data || [];
            } catch (error) {
                this.articlesError = error.message || 'Error fetching articles.';
            } finally {
                this.articlesPending = false;
            }
        },
        async fetchBlogPosts() {
            if (this.blogPosts.length > 0) return;
            this.blogPostsPending = true;
            this.blogPostsError = null;
            try {
                const data = await $fetch('/api/blog_posts');
                this.blogPosts = data || [];
            } catch (error) {
                this.blogPostsError = error.message || 'Error fetching blog posts.';
            } finally {
                this.blogPostsPending = false;
            }
        }
    },
});