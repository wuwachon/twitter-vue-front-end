import { apiHelper } from './../utils/helpers'
const getToken = () => localStorage.getItem('token')


export default {
  getReplies(tweetId) {
    return apiHelper.get(`/tweets/${tweetId}/replies`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  postReply(tweetId, content) {
    return apiHelper.post(`/tweets/${tweetId}/replies`, { "comment": `${content}` }, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  }
}