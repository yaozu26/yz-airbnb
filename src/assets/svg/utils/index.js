function styleStrToObject(styleStr) {
  const obj = {}
  // replace第二个参数的函数：m为第一个参数的RegExp对象，g为匹配到的字符串
  const s = styleStr.toLowerCase().replace(/-(.)/, (m, g) => {
    return g.toUpperCase()
  }).replace(/;\s?$/g, "").split(/:|;/g)

  for(let i = 0; i < s.length; i += 2) {
    obj[s[i].replace(/\s/g, "")] = s[i+1].replace(/^\s+|\s+$/g, "")
  }
  return obj
}

export default styleStrToObject