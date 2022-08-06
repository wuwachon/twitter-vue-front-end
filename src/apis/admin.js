import { apiHelper } from './../utils/helpers'
const getToken = () => localStorage.getItem('admin-token')

export default {
  adminLogin({ account, password }) {
    return apiHelper.post('/admin/signin', {
      account,
      password
    })
  },
  getAllUsers() {
    return apiHelper.get('/admin/users', {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  getAllTweets() {
    return apiHelper.get('/admin/tweets', {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  deleteTweet(tweetId) {
    return apiHelper.delete(`/admin/tweets/${tweetId}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  }
}