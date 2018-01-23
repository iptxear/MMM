/**
 * Created by Geekzs on 2018/1/20.
 */

$(function(){


  //获取后台请求地址
  var url = Route.url;


  var pageid = 1;

  render();


  function render(){

    //发送ajax请求渲染item列表
    $.ajax({

      type:'get',
      url:url+'api/getmoneyctrl',
      data:{pageid:pageid-1},
      success:function(info){
        console.log(info);
        $('.m_product').html(template('itemTpl',info));

        var pageNum = Math.ceil(info.totalCount/info.pagesize);

        console.log(({page: pageid, num: pageNum}));
        //渲染分页
        $('.paginator').html(template('optTpl',{page:pageid,num:pageNum}));

        $(".paginator").find(".selected").prop("selected",true);

      }

    })

  }


  //点击下拉列表选择分页（根据value值获取id，渲染对应产品列表）
  $('.paginator').on('change','#selector',function(){
    pageid =parseInt($(this).val());
    render();
  });


  //点击上一页，下一页（根据data-page值获取id，渲染对应产品列表）


  $('.paginator').on('click','.prev,.next',function(){

     pageid = $(this).data('page');
    //console.log(pageid);
    render();

  })




})