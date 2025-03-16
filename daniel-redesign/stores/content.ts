import { defineStore } from 'pinia';

export const useContentStore = defineStore('content', {
    state: () => ({
        articles: [] as Array<any>,
        articlesPending: false,
        articlesError: null as string | null,
        blogPosts: [] as Array<any>,
        blogPostsPending: false,
        blogPostsError: null as string | null,
        realizations: [] as Array<any>,
        realizationsPending: false,
        realizationsError: null as string | null,
        sessions: [] as Array<any>,
        sessionsPending: false,
        sessionsError: null as string | null,
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
        },
        async fetchRealizations() {
            if (this.realizations.length > 0) return;
            this.realizationsPending = true;
            this.realizationsError = null;
            try {
                const data = await $fetch('/api/realizations');
                this.realizations = data || [];
            } catch (error) {
                this.realizationsError = error.message || 'Error fetching realizations.';
            } finally {
                this.realizationsPending = false;
            }
        },
        async fetchSessions() {
            if (this.sessions.length > 0) return;
            this.sessionsPending = true;
            this.sessionsError = null;
            try {
                const data = await $fetch('/api/sessions');
                this.sessions = data || [];
            } catch (error) {
                this.sessionsError = error.message || 'Error fetching sessions.';
            } finally {
                this.sessionsPending = false;
            }
        }
    },
});