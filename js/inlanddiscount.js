/**
 * Created by Geekzs on 2018/1/20.
 */

$(function(){

  var url = Route.url;

  $.ajax({
    type:'get',
    url:url+'api/getinlanddiscount',
    success:function(info){
      console.log(info);
      $('.prolist').html(template('prolistTpl',info));
    }

  })






})