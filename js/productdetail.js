/**
 * Created by Geekzs on 2018/1/20.
 */
$(function(){

  var url = Route.url;

  //获取当前URL的跳转携带过来的参数
  var productid =Getkey('productid');
  //console.log(productid);

  //发送ajax渲染产品分类
  $.ajax({

    type:'get',
    url:url+'api/getproduct',
    data:{productid:productid},
    success:function(info1){
      //获取分类id，根据id渲染出导航栏里2级分类分类名称
      var categoryid = info1.result[0].categoryId;

      $.ajax({

        type:'get',
        url:url+'api/getcategorybyid',
        data:{categoryid:categoryid},
        success:function(info2){
          info1.category = info2.result[0].category
          info1.navName = info1.result[0].productName.split(' ')[0];
          console.log(info1);
          $('.mm_nav').html(template('navTpl',info1));
          $('.m_show').html(template('showTpl',info1));

        }

      })


    }

  })



  //发送ajax渲染评论

  $.ajax({

    type:'get',
    url:url+'api/getproductcom',
    data:{productid:productid},
    success:function(info){
      console.log(info);
      $('.c_items').html(template('comTpl',info));
    }

  })




})