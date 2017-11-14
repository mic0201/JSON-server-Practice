var vm = new Vue({
  el: '#app',
  data: {
    detail: [],
    content: []
  },
  created () {
    
  },
  methods: {
    // 新增
    createContent: () => {
      if( $("input[name='createInput']").val() != '' ){
        $.ajax({
          url: 'http://localhost:3000/content',
          type: 'POST',
          data: {
            info: $("input[name='createInput']").val()
          },
          success: (res) => {
            getData('GET', function(res){
              vm.$nextTick(function(){                
                this.content = res.content;
              })
            });
            $("input[name='createInput']").val("")
          }
        })
      }else{
        alert("不要輸入空值");
      }
    },
    // 修改
    changeContent: (id) => {
      $(`input[name=change${id}]`).attr("type","text");
      $(`[data-sure=${id}]`).show();
    },
    // 修改送出
    sureContent: (id) => {
      $.ajax({
        url: `http://localhost:3000/content/${id}`,
        type: "PUT",
        data: {
          info: $(`input[name=change${id}]`).val()
        },
        success: (res) => {
          console.log(res);
          getData('GET', function(res){
            vm.$nextTick(function(){                
              this.content = res.content;
            })
          });    
          alert("修改成功");
          $(`input[name=change${id}]`).attr("type","hidden");
          $(`[data-sure=${id}]`).hide();
        },
        error: () => {
          console.log("ERROR!")
        }
      })
    },
    // 刪除
    delContent: (id) => {
      $.ajax({
        url: `http://localhost:3000/content/${id}`,
        type: 'DELETE',
        success: (res) => {
          getData('GET', function(res){
            vm.$nextTick(function(){                
              this.content = res.content;
            })
          });      
          alert("刪除成功")
        },
        error: () => {
          alert("ERROR!")
        }
      })
    }
  },
  mounted: function() {
    var self = this;
    // 取得資料
    getData('GET', function(res){
      self.detail = res.detail;
      self.content = res.content;
    });
  }
});

// 取得資料 Public Function
function getData (type, successFunc) {
  $.ajax({
    url: 'http://localhost:3000/db',
    type: type,
    success: (res) => {
      return successFunc(res);
    },
    error: () => {
      console.log("ERROR!");
    }
  })
}