$(function(){
  titleRender();
  // 一级大分类渲染
  function titleRender(callback){
    $.ajax({
      url:'http://127.0.0.1:9090/api/getcategorytitle',
      dataType:'json',
      success:function(info){
        console.log(info);
        var htmlStr = template('titleTpl',info);
        $('.category_title').html(htmlStr);
        var $contentLis = $('[data-titleId]');
        $contentLis.each(function(i,v){
          var id = $(this).data('titleid');
          var element = $(this).parent()[0];
          console.log(element);
          contentRender(id,element);
        })
      }
    });
  }
  // 二级分类渲染方法 参数是对应的ID和要填坑的盒子
  function contentRender(id,element){
    $.ajax({
      url:'http://127.0.0.1:9090/api/getcategory',
      data:{
        titleid:id,
      },
      dataType:'json',
      success:function(info){
        var htmlStr = template('contentTpl',info);
        element.innerHTML+=htmlStr;
      }
    });
  }
    // 注册点击事件
    $('.category_title').on('click','#aCli',function(){
      $(this).find('i').get(0).classList.toggle('fa-chevron-up');
      $(this).find('i').get(0).classList.toggle('fa-chevron-down');
      $(this).next().stop().slideToggle();
      console.log();
    })
  
})