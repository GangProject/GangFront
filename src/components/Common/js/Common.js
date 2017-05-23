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

  static getDomain(){
    var dom = 'http://0.0.0.0:7777/';
    return dom;
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
        // console.log(hour.toString().length);
        // console.log(list[i].article.createdAt.hour);
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
      tmp += year+"."+month + "." + day;
      list[i].createdAt.nano = tmp;
    }
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
