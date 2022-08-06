import { apiHelper } from './../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  // 帶入需要的參數
  login({ account, password }) {
    // 這裡 return 的會是一個 Promise
    return apiHelper.post('/users/signin', {
      account,
      password
    })
  },
  register({ account, name, email, password, checkPassword }) {
    // 這裡 return 的會是一個 Promise
    return apiHelper.post('/users', {
      account,
      name,
      email,
      password,
      checkPassword
    })
  },
  editUserData(userId, { account, name, email, password, checkPassword }) {
    return apiHelper.patch(`/users/${userId}/setting`, {
      account,
      name,
      email,
      password,
      checkPassword
    }, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  }
}