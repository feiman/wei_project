app.factory("indexLouder",["transformRequest","$http","$location",function(t,n,o){return{getListinfo:function(e){var i="",r=o.search();return"task"!=e&&""!=e&&e?"todo"==e?i="/MobileApi/api/MyToDo/":"done"==e&&(i="/MobileApi/api/MyDone/"):i="/MobileApi/api/MyTask/",n.get(i+"?"+t(r)).then(function(t){return t},function(t){return t})}}}]);