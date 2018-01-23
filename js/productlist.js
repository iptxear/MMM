/**
 * Created by Geekzs on 2018/1/19.
 */

$(function(){

  var url = Route.url;

  //获取当前URL的跳转携带过来的参数
  var categoryId =Getkey('categoryId');
  //console.log(categoryId);

  //发送ajax渲染产品分类
  $.ajax({
    type:'get',
    url:url+'api/getcategorybyid',
    data:{categoryid:categoryId},
    success:function(info){
      console.log(info);
      $('.mm_nav').html(template('navTpl',info));
    }

  })

  //发送ajax渲染产品列表
  var pageid = 1;

  render(pageid);

  function render(pageid){

    $.ajax({
      type:'get',
      url:url+'api/getproductlist',
      data:{
        categoryid:categoryId,
        pageid:pageid
      },
      success:function(info){
        console.log(info);
        $('.m_product').html(template('productTpl',info));

        var pageNum = Math.ceil(info.totalCount/info.pagesize);
        //info.pageNum=pageNum;
        //渲染分页
        $('.paginator').html(template('optTpl',{page:pageid,num:pageNum}));
        //console.log(({page: pageid, num: pageNum}));
        $(".paginator").find(".selected").prop("selected",true);
      }
    })

  }

  //点击下拉列表选择分页（根据value值获取id，渲染对应产品列表）
  $('.paginator').on('change','#selector',function(){
    var pageid =parseInt($(this).val());
    render(pageid);
  });


  //点击上一页，下一页（根据data-page值获取id，渲染对应产品列表）


  $('.paginator').on('click','.prev,.next',function(){

    var pageid = $(this).data('page');
    //console.log(pageid);
    render(pageid);

  })











})