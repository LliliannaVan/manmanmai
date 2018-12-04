$(function () {
  // 点击更多展示下面的




  navRender();
  discountRender();
  //返回顶部按钮
  $('#backTop').on('click', function () {
    // 原始版
    $('html , body').animate({ scrollTop: 0 }, 'slow');
  })
 

  // 导航的渲染
  function navRender(){
    $.ajax({
      url:'http://127.0.0.1:9090/api/getindexmenu',
      dataType:'json',
      success:function(info){
        console.log(info);
        var htmlStr = template('navTpl',info);
        $('.mmm_nav').html(htmlStr);
        $('.mmm_nav').on('click','[data-id=7]',function(){
          $('.mmm_nav [data-type=1]').toggle();
        })
      }
    });
  }

  //折扣商品的渲染
  function discountRender() {
    $.ajax({
      url: 'http://127.0.0.1:9090/api/getmoneyctrl',
      dataType: 'json',
      success: function (info) {
        var htmlStr = template('disProTpl', info);
        $('.mmm_recommend .content').html(htmlStr);
      }
    });
  };
})