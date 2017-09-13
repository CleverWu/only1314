var article = {
  state: {
    article:  sessionStorage.getItem('article'),
    articleId:sessionStorage.getItem('articleId')
  },
  mutations: {
    setArticle(state, info) {
      state.article=info;
      sessionStorage.setItem('article', info);
    },
    setArticleId(state,info){
      state.articleId=info;
      sessionStorage.setItem('articleId', info);
    }

  }
}
export default article
