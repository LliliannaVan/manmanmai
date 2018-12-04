//获取地址栏数据的函数
function getData(key){
  var str = location.search;
  var obj = {};
  str = decodeURI(str);
  str = str.slice(1);
  var arr = str.split('&');
  arr.forEach(function(v,i){
    var arr = v.split('=');
    var k = arr[0];
    var val = arr[1];
    obj[k]=val;
  });
  return obj[key];
};