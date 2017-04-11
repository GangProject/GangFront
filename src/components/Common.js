import React, {Component} from 'react';

class Common extends Component {
  static back(){
    history.go(-1);
  }

  static getApi(){
    var api = 'http://52.79.215.66:8080/Gang/';
    return api;
  }

  static modDatetime(list){
    for(var i in list){
      var tmp = "";
      var year = list[i].modifiedAt.year;
      var month = list[i].modifiedAt.monthValue;
      var day = list[i].modifiedAt.dayOfMonth;
      tmp += year+"."+month + "." + day;
      list[i].modifiedAt.nano = tmp;
    }
  }
}

export default Common;
