app.controller("messageCtrl",["$scope","$injector","paramService","$location",function(e,t){t.invoke(["messageLouder","paramService","$location",function(t,i,o){e.userid=o.search(),t.getListinfo().then(function(t){e.messageList=t.data}),e.getDetail=!0,e.showDetail=function(t){i.setResult(t),window.location.href="#!/messageDetail?userid="+e.userid.userid},document.title="消息"}])}]);