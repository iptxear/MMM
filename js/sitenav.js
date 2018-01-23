/**
 * Created by Geekzs on 2018/1/21.
 */
$(function(){

  var url = Route.url;

  $.ajax({
    type:'get',
    url:url+'api/getsitenav',
    success:function(info){
      console.log(info);
      $('.list ul').html(template('listTpl',info));
    }

  })






})