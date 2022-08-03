import moment from "moment"
export const emptyImageFilter = {
  filters: {
    emptyImage (src) {
      return src || require('../assets/pictures/dummyUser.png')
    }
  }
}

export const fromNowFilter = {
  filters: {
    fromNow (datetime) {
      return datetime ? moment(datetime).fromNow() : '-'
    }
  }
}