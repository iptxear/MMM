/**
 * Created by Geekzs on 2018/1/22.
 */

$(function(){

  var url = Route.url;
  //发送ajax请求渲染品牌列表
  $.ajax({
    type:'get',
    url:url+'api/getbrandtitle',
    success:function(info){
      console.log(info);

      $('.m_cate').html(template('listTpl',info));


    }
  })

})