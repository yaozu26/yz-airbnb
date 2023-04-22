import YZRequest from "../request";

export function getHomeGoodPriceData() {
  return YZRequest.get({ url: "/home/goodprice" })
}

export function getHomeHighScoreData() {
  return YZRequest.get({ url: "/home/highscore" })
}

export function getHomeDiscountData() {
  return YZRequest.get({ url: "/home/discount" })
}

export function getHomeHotrecommenddestData() {
  return YZRequest.get({ url: "/home/hotrecommenddest" })
}

export function getHomeLongforData() {
  return YZRequest.get({ url: "/home/longfor" })
}

export function getHomePlusData() {
  return YZRequest.get({ url: "/home/plus" })
}