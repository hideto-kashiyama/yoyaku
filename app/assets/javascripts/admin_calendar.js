

 $(function () {
     
     var $selectable = true;
       
      $("#admin_calendar").fullCalendar({
      
    　 　defaultView: 'agendaWeek',  
    　   //defaultView: 'month',  
    　   
         header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
          },
            //sunday: false,
            navLinks: true,
            selectable: true,
            selectHelper: true,
            lang: 'ja',
            minTime: "09:00:00", //スケジュールの開始時間
    　　　	maxTime: "18:00:00", //スケジュールの最終時間
    　　　	
    　　　	
            allDaySlot: false,   
           // firstDay:"today",
     
           //events: '/events.json?time=' + new Date().getTime(),
           events: '/events.json',
         
              editable: true,
        
      select: function (start, end, jsEvent, view) {
          
          if (!$selectable){
              return;
          }
           console.log(new Date());
         
               //var dObj = new Date(start);//日付取得
               //var wDay = dObj.getDay();//曜日取得
               var wDay = start.day();//曜日取得
               
               console.log(new Date(start));
　　　　　　　　　
　　　　　　　　　if ( wDay==0 ) {//日曜日
　　　　　　　　　    console.log(wDay);
　　　　　　　　　    alert("お休みです");
　　　　　　　　　 setTimeout(function() { 
                	location.reload();
                  },1);
　　　　　　　　　 return;
　　　　　　　　　 
　　　　　　　　　} else if ( wDay==4 ) { //木曜日
　　　　　　　　　    console.log(wDay);
　　　　　　　　　    alert("お休みです");
　　　　　　　　　    
　　　　　　　　　     setTimeout(function() {
                		location.reload();
                       },1);
                	
　　　　　　　　　 return;
　　　　　　　　　    
　　　　　　　　　}
　　　　　　　　　
　　　　　　　　　if (wDay==6) {　//土曜日の12時以降
　　　　　　　　　    console.log(wDay);
　　　　　　　　　    var tm =moment(start).format("H");
　　　　　　　　　  
　　　　　　　　　    　if (tm>=12) {
　　　　　　　　　    　    console.log(tm);
　　　　　　　　　    　    alert("お休みです");
　　　　　　　　　    
    　　　　　　        　　　     setTimeout(function() {
                    		location.reload();
                        	},1);
                	
　　　　　　　　　        return;
　　　　　　　　　    
　　　　　　　　　    　}
　　　　　　　　　    
　　　　　　　　　}
　　　　　　　　　
　　　　　　　　　if (wDay!=6 && wDay!=0) {　//休日以外のの12時-14時半
　　　　　　　　　    　　　    
            　　　　var th =String(moment(start).format("H"));
                    var tm =String(moment(start).format("mm"));
                    var s = th + tm;
                    
                    if (s >=1200 && s<=1400) {
　　　　　　　　　    　    
　　　　　　　　　    　    alert("お昼休みです");
　　　　　　　　　    
    　　　　　　        　　　     setTimeout(function() {
                    		location.reload();
                        	},1);
                	
　　　　　　　　　        return;
                    }
                    
　　　　　　　　　}
　　　　　
　　　　　//cookieを書きこむ
　　　　　 　//$.cookie("st_cookie", moment(start).format("YYYY/MM/DD HH:mm"), {path:'/'});
　　　         // console.log($.cookie( 'st_cookie' ));
　　　          
　　　      // $.cookie("en_cookie", moment(end).format("YYYY/MM/DD HH:mm"), {path:'/'});  
　　　       
　　　　　　 location.href = $("#url").val()+"?st="+moment(start).format("YYYY-MM-DD-HH:mm")+"&en="+moment(end).format("YYYY-MM-DD-HH:mm");
　　　　　　
　　　　　　　
         
              
                   //jquery からview へ値を渡す。
                 // $('#start').val(moment(start).format("YYYY/MM/DD HH:mm")); 
                  
                  //$('#end').val(moment(end).format("YYYY/MM/DD HH:mm")); 
                
                  
                    //viewの値をサーバーへ送信する
                 // $("#reserve_admin").submit(); 
                  
              
                
            },
            
       eventClick: function(event)  {
           
         if (!$selectable){
              return;
            }
            
            console.log(event.title)
      
         //alert(event.user_id+"："+event.title);
         if(window.confirm(event.user_id+"："+event.title+ " さらに詳細なユーザー情報を表示しますか？")) {
         
         /*
                < $('#usrid').val(event.user_id);
                 
                 $('#usershow').on('click',function(){
                        //alert("ユーザー情報を表示します");
                  });
                 
                 $('#usershow').trigger("click");
        */
                 location.href = $("#url").val() + "/" + event.user_id;
         
         }
        　
         console.log(new Date());  
         console.log(event.start);
          
                 console.log(moment(event.start).format("YYYY/MM/DD HH:mm" ));
                 console.log(moment(event.end).format("YYYY/MM/DD HH:mm" ));
                 
                
               /*   $('#start').val(moment(event.start).format("YYYY/MM/DD HH:mm")); 
                  
                  $('#end').val(moment(event.end).format("YYYY/MM/DD HH:mm")); 
                 
                    //viewの値をサーバーへ送信する
                  $("#reserve").submit(); */
                  
             
            },
            
            
        viewRender: function(view, element){
            //月表示では予約入力不可
            if (view.currentRangeUnit == "month"){
                $selectable = false;
            } else {
                $selectable = true;
            }
            
           /* var wDay = start.day();//曜日取得
    　     
             
             　　if (wDay!=6 && wDay!=0) {　//休日以外のの12時-14時半
　　　　　　　　　    　　　    
            　　　　var th =String(moment(start).format("H"));
                    var tm =String(moment(start).format("mm"));
                    var s = th + tm;
                    
                    if (s >=1200 && s<=1400) {
　　　　　　　　　    　    
　　　　　　　　　    　    
　　　　　　　　　  }
                    
　　　　　　　　　}*/　　　　
　　　　　　　　　
            
        }
   
        });
        
    　//　$("[data-date = '2018-05-04']").css("background", "red");
    　
    　
    });
    
　　
   
     
   
        
      