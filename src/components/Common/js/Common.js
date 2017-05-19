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

}


export default Common;
