/**
 * Created by Geekzs on 2018/1/22.
 */

$(function(){

  var url = Route.url;

  var brandtitleid = Getkey('brandtitleid');

  //发送ajax请求渲染品牌列表
  $.ajax({
    type:'get',
    url:url+'api/getbrand',
    data:{brandtitleid:brandtitleid},
    success:function(info){

      console.log(info);
      $('.brandlist').html(template('brandTpl',info));


      //发送ajax请求渲染品牌排行列表
      $.ajax({
        type:'get',
        url:url+'api/getbrandproductlist',
        data:{
          brandtitleid:info.result[0].brandTitleId,
          pagesize:5
        },
        success:function(data){
          console.log(data);
          $('.ranklist').html(template('rankTpl',data));

          //发送ajax请求渲染品牌排行列表
          $.ajax({
            type: 'get',
            url: url + 'api/getproductcom',
            data: {
              productid: data.result[0].productId,
            },
            success: function (com) {

              com.productImg=data.result[0].productImg;
              com.productName=data.result[0].productName;
              console.log(com);
              $('.comlist').html(template('comTpl', com));
            }
          })

        }
      })

    }

  })




})