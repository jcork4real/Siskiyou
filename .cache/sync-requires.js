
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/FancyNancy/Desktop/siskiyou/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/FancyNancy/Desktop/siskiyou/src/pages/index.js"))
}

