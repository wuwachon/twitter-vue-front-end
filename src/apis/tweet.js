import { apiHelper } from './../utils/helpers'
const getToken = () => localStorage.getItem('token')


export default {
  getTweets() {
    return apiHelper.get('/tweets', {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  postTweet(content) {
    return apiHelper.post('/tweets', {"description": `${content}`}, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  getSpecTweet(tweetId) {
    return apiHelper.get(`/tweets/${tweetId}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  }
}