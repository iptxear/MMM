/**
 * Created by Geekzs on 2018/1/21.
 */

$(function(){

  var url = Route.url;

  $.ajax({
    type:'get',
    url:url+'api/getcoupon',
    success:function(info){
      console.log(info);
      $('.coupon_list ul').html(template('listTpl',info));
    }
  })



})