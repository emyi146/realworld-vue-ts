import { Module, VuexModule, getModule, Mutation, Action } from 'vuex-module-decorators';
import store from '@/store';
import { ArticlesResponse, Article } from '../models';
import * as api from '@/store/api';
@Module({
    namespaced: true,
    dynamic: true,
    name: 'articles',
    store,
})
class ArticlesModule extends VuexModule {
    public globalFeed: Article[] = [];
    public userFeed: Article[] = [];

    @Mutation
    public setGlobalFeed(articles: Article[]) {
        this.globalFeed = articles;
    }

    @Action({ commit: 'setGlobalFeed' })
    public async refreshGlobalFeed() {
        const globalFeed = await api.getGlobalFeed();
        return globalFeed.articles;
    }
}

export default getModule(ArticlesModule);
