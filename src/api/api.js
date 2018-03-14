/**
 * api集合
 */
import axios from 'axios'

export const inTheaters = function (options) {
  return axios.get('/douban/movie/in_theaters', options)
}

export const getDetail = function (options) {
  return axios.get(`/douban/movie/subject/${options.movieID}`, options)
}

export default {
  inTheaters,
  getDetail
}
