import YZRequest from "..";

export function getEntireRoomlistData(offset = 0, size = 20) {
  return YZRequest.get({
    url: "/entire/list",
    params: {
      offset,
      size
    }
  })
}