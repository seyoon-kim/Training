var Domutil = Domutil || {};

Domutil.querySelector = function(selectors){

// 인자로 받은 selectors의 값이 비었을때 빈배열을 반환한다.

  var result = [];
  if(!selectors){
    return [];
  }

// selector의 인자를 나눠 배열로 담는다.

/*
* arrSeletor, 무엇을 찾아야 하는지 알려주는 값
* from, 찾아야 하는 대상이 되는 엘리멘트
* founded, from 중에서 arrSeletor의 원소에 해당하는 결과를 저장하는 값
*/

  var arrSeletor = selectors.split(" ");
  var founded = [];
  var from = [document];

  var i = 0;
  var j = 0;
  var arrSeletorLength = arrSeletor.length;
  var fromLength = from.length;

  for(i; i < arrSeletorLength; i++){
    for(j; j < fromLength; j++){
      founded = founded.concat(findElementsOfSelector(from[j], arrSeletor[i]));
    }
    from = founded;
    founded = [];
  }

  result.push(founded[0]);

  return result;
}

/*
* 1. selector의 앞에 문자열에 따라 id, class, tagName을 구별하여 해당하는 엘리멘트들의 배열을 반환하는 함수
* 2. rootEle, selector 두 개의 인자를 받는다. rootEle는 이전에 받은 결과값으로서 해당 값으로 다시 다음번째의 selector 값을 이용하여 값을 찾을때 사용한다.
*/

function findElementsOfSelector(rootEle, selectors){
  if(/^\./g.test(selectors)){

// 인자로 받은 selectors는 .className이므로 앞에 '.'문자를 제외해야 getElementsByClassName()의 인자로 사용할 수 있다.

  selectors = selectors.replace(/\./g, "");
  result = rootEle.getElementsByClassName(selectors);
  result = Array.prototype.slice.call(result);
  }else if(/^\#/g.test(selectors)){

// 인자로 받은 selectors는 #idName이므로 앞에 '#'문자를 제외해야 getElementById()의 인자로 사용할 수 있다.

  selectors = selectors.replace(/\#/g, "");
  result = rootEle.getElementById(selectors);
  result = [result];
  }else{

// 인자로 받은 selectors는 tagName이므로 getElementsByTagName()을 사용한다.

  result = rootEle.getElementsByTagName(selectors);
  result = Array.prototype.slice.call(result);
  }
  return result;
}

describe("Domutil.querySelector function should be return array ", function(){

// Selector API 요구조건, 배열을 반환해야 한다 테스트 케이스 작성

  it("should be return array", function(){
    expect(Array.isArray(Domutil.querySelector())).toBe(true);
  });


// 셀렉터가 class인 경우, 해당 class를 가지고 있는 엘리멘트 배열을 반환

  it("if selector is class, should be return array class element", function(){
    document.body.innerHTML = '<div class="main">main</div><div>no main</div>';
    expect(Domutil.querySelector(".main").length).toBe(1);
  });


// 셀렉터가 id인 경우, 해당 id를 가지고 있는 엘리멘트 배열을 반환

  it("if selector is id, should be return array id element", function(){
    document.body.innerHTML = '<div class="main">main</div><div id="cont">no main</div>';
    expect(Domutil.querySelector("#cont").length).toBe(1);
  });


// 셀렉터가 tagName인 경우, 해당 tagName을 가지고 있는 엘리멘트 배열을 반환

  it("if selector is tagName, should be return array tagName element", function(){
    document.body.innerHTML = '<div class="main">main</div><div id="cont">no main</div>';
    expect(Domutil.querySelector("div").length).toBe(1);
  });


// 셀렉터가 두 개인 경우, .main div의 해당하는 엘레멘트 배열을 반환

  it("if selector is (.className tagName), should be return array .className tagName element", function(){
    document.body.innerHTML = '<div id="cont" class="main">no main</div><div class="main"><div>.main div</div></div>';
    expect(Domutil.querySelector(".main div").length).toBe(1);
  });

// 셀렉터가 세 개인 경우, .#cont div span의 해당하는 엘레멘트 배열을 반환

  it("if selector is (#id tagName tagName), should be return array #id tagName tagName", function(){
    document.body.innerHTML = '<div id="cont" class="main"><div><span>no main</span></div></div><div class="main"><div><span>.main</span> div</div></div>';
    expect(Domutil.querySelector("#cont div span").length).toBe(1);
  });

// 셀렉터가 세 개인 경우, .main div span의 해당하는 엘레멘트 배열을 반환

  it("if selector is (.className tagName tagName), should be return array .className tagName tagName element", function(){
    document.body.innerHTML = '<div id="cont" class="main"><div><span>no main</span></div></div> <div class="main"><div><span>.main</span></div></div>';
    expect(Domutil.querySelector(".main div span").length).toBe(1);
  });


});
