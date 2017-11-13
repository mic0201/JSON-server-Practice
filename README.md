# RESTfulAPI
學習筆記

## 目錄
* [RESTful API定義](#RESTful API定義)
* [RESTful API好處](#RESTful API好處)
* [RESTful API範例](#RESTful API範例)
* [使用JSON Server建立假RESTful API](#使用JSON Server建立假RESTful API)


## 資料來源：
* 從無到有打造 RESTful API service 系列 https://ithelp.ithome.com.tw/articles/10157431

### RESTful API定義
> 一般API
``` bash
取得：
  /getDataAll
  /getData/:id
送出：
  /createData
  /updateData/:id
刪除：
  /delete/:id
```
> RESTful API
``` bash
取得：
  /GET/AllData
  /GET/Data/:id
送出：
  /POST/Data    ==> 新增
  /PUT/Data/:id ==> 更新
刪除：
  /delete/:id
```
結論：   
> RESTful 是 API 的一種(設計風格？)

### RESTful API好處
* 使用 HTTP 協定, 各平台都支援
<!-- 備份 -->
<!-- RESTful 的優點如下所列:

瀏覽器即可以作為 client 端
可以更高效地利用 cache 來達到更快的回應速度
界面與資料分離
節省伺服器的計算資源
可重用! web/android/ios 都可以用, 無痛轉換!
RESTful 的要求:

client - server 架構
分層系統
利用快取機制增加效能
server-side: 在 GET 資源時，若該資源並沒有被變更，就可以利用 cache 機制減少 query，並且加快回應速度
client-side: 透過 client 端 cache 記錄 cache 版本，
若向 server 要求資源時發現 server 最新版與 cache 相同，
則 client 端直接取用本地資源即可，不需要再做一次查詢
省機器運算及流量 = 省錢
通訊協定具有無狀態性
不能讓兩隻 API 做同一個動作!
假設完成轉賬手續必須先 call A 再 call B 的話，
若做完 A 後斷線導致 B 無法執行，後續要處理 A -> B 的方式會很麻煩
且不應該假設伺服器知道目前的狀態!
因此設計出來的 API 不能有狀態性
統一界面
使用 HTTP Verb: GET/POST/PUT/DELETE -->

### RESTful API範例
* Twitter Public API https://developer.twitter.com/en/docs/tweets/post-and-engage/overview

### 使用JSON Server建立假RESTful API
