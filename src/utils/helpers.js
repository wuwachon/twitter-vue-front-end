// todo: 嘗試 sweetalert2 更改樣式
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'

import axios from 'axios'

// 🚨 heroku 尚未建置完成，先以 localhost 替代
const baseURL = 'http://localhost:3000/api'

export const apiHelper = axios.create({
  baseURL
})

export const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
})

