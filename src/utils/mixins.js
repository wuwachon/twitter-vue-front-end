import moment from "moment"
import "moment/locale/zh-tw"

export const emptyImageFilter = {
  filters: {
    emptyImage(src) {
      return src || require('../assets/pictures/dummyUser.png')
    }
  }
}

export const fromNowFilter = {
  filters: {
    fromNow(datetime) {
      return datetime ? moment(datetime).fromNow() : '-'
    }
  }
}

export const customLongDateFormatter = {
  filters: {
    customLongDateFormat(datetime) {
      return datetime ? moment(datetime).format("a h:mm・ll") : '-'
    }
  }
}