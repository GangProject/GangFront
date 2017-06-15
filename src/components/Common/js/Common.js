import React, {Component} from 'react';

class Common extends Component {
  static back(){
    history.go(-1);
  }

  // static redir(addr){
  //   location.href=addr;
  // }

  static getApi(){
    var api = 'http://52.79.215.66:8080/Gang/';
    return api;
  }


  static getCoreApi(){
    var api = 'http://52.79.215.66:8080/core/';
    return api;
  }

  static getUserName(){
      var url = decodeURIComponent(location.href);
      url.replace(/,/gi, '');
      var userNameArr = url.split("userName=");
      userNameArr.splice(0,1);
      var userName = userNameArr[0];
      return userName;
  }

  static getPageCount(totalCount){
    var pageSize = 10;
    var tmp = totalCount/pageSize;
    var tmp2 = totalCount%pageSize;
    if(tmp2!=0)
      tmp++;
    return tmp;
  }

  static modDatetime(list){
    for(var i in list){
      var tmp = "";
      var year = list[i].article.createdAt.year;
      var month = list[i].article.createdAt.monthValue;
      var day = list[i].article.createdAt.dayOfMonth;
      var today = new Date();
      if(today.getFullYear()==year&&(today.getMonth()+1)==month&&today.getDate()==day){
        var hour = list[i].article.createdAt.hour;
        var min = list[i].article.createdAt.minute;
        if(hour.toString().length==1){
          tmp+="0"+hour+":";
        } else {
          tmp+=hour+":";
        }
        if(min.toString().length==1){
          tmp+="0"+min;
        } else {
          tmp+=min;
        }
      } else {
        tmp += year+"."+month + "." + day;
      }
      list[i].article.createdAt.nano = tmp;
    }
  }

  static modDatetime2(list){
    for(var i in list){
      var tmp = "";
      var year = list[i].createdAt.year;
      var month = list[i].createdAt.monthValue;
      var day = list[i].createdAt.dayOfMonth;
      var today = new Date();
      if(today.getFullYear()==year&&(today.getMonth()+1)==month&&today.getDate()==day){
        var hour = list[i].createdAt.hour;
        var min = list[i].createdAt.minute;
        if(hour.toString().length==1){
          tmp+="0"+hour+":";
        } else {
          tmp+=hour+":";
        }
        if(min.toString().length==1){
          tmp+="0"+min;
        } else {
          tmp+=min;
        }
      } else {
        tmp += year+"."+month + "." + day;
      }
      list[i].createdAt.nano = tmp;
    }
  }

  static modDatetime3(list){
    var tmp = "";
    var year = list.year;
    var month = list.monthValue;
    var day = list.dayOfMonth;
    var today = new Date();
    if(today.getFullYear()==year&&(today.getMonth()+1)==month&&today.getDate()==day){
      var hour = list.hour;
      var min = list.minute;
      if(hour.toString().length==1){
        tmp+="0"+hour+":";
      } else {
        tmp+=hour+":";
      }
      if(min.toString().length==1){
        tmp+="0"+min;
      } else {
        tmp+=min;
      }
    } else {
      tmp += year+"."+month + "." + day;
    }
    list.nano = tmp;
  }

  static modContent(content){
    var result = content.split('\n');
    return result;
  }

  static modCommentCount(list){
    for(var i in list){
      if(list[i].commentCount!=0){
        var tmp = "[";
        tmp += list[i].commentCount;
        tmp += "]";
        list[i].commentCount = tmp;
      } else {
        list[i].commentCount = null;
      }
    }
  }

}


export default Common;
