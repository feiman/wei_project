app.factory("suggestLouder",["$http","$location","transformRequest",function(t,n,r){return{submitSuggest:function(e){var o=n.search();o.Content=e;return t.post("/MobileApi/api/TaskInfo?"+r(o)).then(function(t){return t},function(t){return t})}}}]);