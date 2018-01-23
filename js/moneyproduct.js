/**
 * Created by Geekzs on 2018/1/20.
 */

$(function(){


  var url = Route.url;

  //获取当前URL的跳转携带过来的参数
  var productid =Getkey('productid');
  //console.log(categoryId);

  $.ajax({
    type:'get',
    url:url+'api/getmoneyctrlproduct',
    data:{productid:productid},
    success:function(info){
      console.log(info);
      $('.p_show').html(template('showTpl',info));
      $('.p_city').html(template('cityTpl',info));
    }

  })



})