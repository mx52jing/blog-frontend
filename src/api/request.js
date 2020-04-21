import axios from './axios'

/* article */
export const fetchArticleList = (params = {}) => axios.get('/articles', { params })

/* 获取单个文章详情 */
export const fetchArticleContent = id => axios.get(`/articles/${id}`)

/* 获取分类 */
export const fetchCategory = (params = {}) => axios.get('/categories', { params })
