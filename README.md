# nuxt-sample

> My amazing Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ npm run install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).

## 渲染性能对比
``` bash

# DNS 缓存时间
> appcache: 1

# TCP 建立连接完成握手的时间
> connect: 0
#【重要】解析 DOM 树结构的时间
#【原因】反省下你的 DOM 树嵌套是不是太多了！
> domReady: 328
#【重要】执行 onload 回调函数的时间
#【原因】是否太多不必要的操作都放到 onload 回调函数里执行了，考虑过延迟加载、按需加载的策略么？
> loadEvent: 0
#【重要】页面加载完成的时间
#【原因】这几乎代表了用户等待页面可用的时间
> loadPage:（server）= 347 client = 362
#【重要】DNS 查询时间
#【原因】DNS 预加载做了么？页面内是不是使用了太多不同的域名导致域名查询的时间太长？
# 可使用 HTML5 Prefetch 预查询 DNS ，见：[HTML5 prefetch](http://segmentfault.com/a/1190000000633364)
> lookupDomain: 0
#【重要】重定向的时间
#【原因】拒绝重定向！比如，http://example.com/ 就不该写成 http://example.com
> redirect: 0
#【重要】内容加载完成的时间
#【原因】页面内容经过 gzip 压缩了么，静态资源 css/js 等压缩了么？
> request: （server）= 14 (client) = 30
#【重要】读取页面第一个字节的时间
#【原因】这可以理解为用户拿到你的资源占用的时间，加异地机房了么，加CDN 处理了么？加带宽了么？加 CPU 运算速度了么？
# TTFB 即 Time To First Byte 的意思
# 维基百科：https://en.wikipedia.org/wiki/Time_To_First_Byte
> ttfb: （server）= 18 (client) = 34
# 卸载页面的时间
> unloadEvent: 0
