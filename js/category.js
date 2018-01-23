/**
 * Created by Geekzs on 2018/1/19.
 */

$(function(){

  var url = Route.url;
  //发送ajax请求渲染商品列表
  $.ajax({
    type:'get',
    url:url+'api/getcategorytitle',
    success:function(info){
      console.log(info);

      $('.m_cate').html(template('listTpl',info));

      //注册点击事件获取点击商品项的id，根据id发送ajax请求渲染商品项
      $('.m_cate p').on('click',function(){

        var titleid = $(this).data('id')

        $.ajax({
          type:'get',
          url:url+'api/getcategory',
          data:{titleid:titleid},
          success:function(info){
            console.log(info);
            $('.m_item').eq(titleid).html( template('itemTpl',info ) )
            $('.m_item').eq(titleid).toggle();
          }
        })

      })

    }
  })

})