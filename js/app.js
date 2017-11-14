var vm = new Vue({
  el: '#app',
  data: {
    detail: [],
    content: []
  },
  created () {
    $(".newbox").hide();
  },
  methods: {
    // 新增
    newContent: function(id) {
      var self = this;
      var tempArr = []
      $("input[name='content']").map(function(){
        return tempArr.push($(this).val());
      })
      $.ajax({
        url: `http://localhost:3000/detail/${id}`,
        type: 'POST',
        data: {
          title: $("input[name='title']").val(),
          time: $("input[name='time']").val(),
          content: tempArr
        },
        success: (res) => {
          alert("新增成功！")
          self.detail.push(res);
        },
        error: () => {
          alert("錯")
        }
      })
    },
    // 修改
    changeContent: (index) => {
      $(`input[name=change${index}]`).attr("type","text");
      $(`[data-sure=${index}]`).show();
    },
    // 刪除
    delContent: (id) => {
      $.ajax({
        url: `http://localhost:3000/content/${id}`,
        type: 'DELETE',
        success: (res) => {
          $.ajax({
            url: 'http://localhost:3000/db',
            type: 'GET',
            success: (res) => {
              vm.$nextTick(function(){                
                this.content = res.content;
              })
            },
            error: () => {
              console.log("ERROR!")
            }
          })
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
    $.ajax({
      url: 'http://localhost:3000/db',
      type: 'GET',
      success: (res) => {
        self.detail = res.detail;
        self.content = res.content;
      },
      error: () => {
        console.log("ERROR!");
      }
    })
  }
});