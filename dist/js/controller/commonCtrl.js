app.controller("commonCtrl",["$scope","$injector","$location",function(t,o,a){o.invoke(function(){var o=a.search();""!=o.userid&&o.userid?(t.userid="userid="+o.userid,t.activeFootBar=function(){var o=a.path();t.state={footBar_1:!1,footBar_2:!1,footBar_3:!1,footBar_4:!1},"/suggest"==o?t.state.footBar_4=!0:"/task"==o||"/taskDetail"==o?t.state.footBar_1=!0:"/chart"==o?t.state.footBar_2=!0:"/message"!=o&&"/messageDetail"!=o||(t.state.footBar_3=!0)}()):alert("用户标志获取失败，请尝试重新打开页面")})}]);