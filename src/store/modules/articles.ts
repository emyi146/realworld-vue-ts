import { Module, VuexModule, getModule, Mutation, Action } from 'vuex-module-decorators';
import store from '@/store';
import { Article } from '../models';
import * as api from '@/store/api';
type FeedType = 'global' | 'user';

@Module({
    namespaced: true,
    dynamic: true,
    name: 'articles',
    store,
})
class ArticlesModule extends VuexModule {
    public feed: Article[] = [];

    @Mutation
    public setFeed(articles: Article[]) {
        this.feed = articles;
    }

    @Action({ commit: 'setFeed' })
    public async refreshFeed(feedType: FeedType) {
        const feed = await api.getFeed();
        return feed.articles;
    }
}

export default getModule(ArticlesModule);
