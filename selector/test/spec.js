var Domutil = Domutil || {};

Domutil.querySelector = function(selectors){
/*
* 안자로 받은 selectors의 값이 비었을때 빈배열을 반환한다.
*/
  var result;
  if(!selectors){
    return [];
  }

  result = findElementsOfSelector(selectors);

  return result;
}

/*
* selector의 앞에 문자열에 따라 id, class, tagName을 구별하여 해당하는 엘리멘트들의 배열을 반환하는 함수
*/

function findElementsOfSelector(selectors){
  if(/^\./g.test(selectors)){
/*
* 인자로 받은 selectors는 .className이므로 앞에 '.'문자를 제외해야 getElementsByClassName()의 인자로 사용할 수 있다.
*/
  selectors = selectors.replace(/\./g, "");
  result = document.getElementsByClassName(selectors);
  result = Array.prototype.slice.call(result);
  }else if(/^\#/g.test(selectors)){
/*
* 인자로 받은 selectors는 #idName이므로 앞에 '#'문자를 제외해야 getElementById()의 인자로 사용할 수 있다.
*/
  selectors = selectors.replace(/\#/g, "");
  result = document.getElementById(selectors);
  result = [result];
  }else{
/*
* 인자로 받은 selectors는 tagName이므로 getElementsByTagName()을 사용한다.
*/
  result = document.getElementsByTagName(selectors);
  result = Array.prototype.slice.call(result);
  }
  return result;
}

describe("Domutil.querySelector function should be return array ", function(){
/*
* Selector API 요구조건, 배열을 반환해야 한다 테스트 케이스 작성
*/
  it("should be return array", function(){
    expect(Array.isArray(Domutil.querySelector())).toBe(true);
  });

/*
* 셀렉터가 class인 경우, 해당 class를 가지고 있는 엘리멘트 배열을 반환
*/
  it("if selector is class, should be return array class element", function(){
    document.body.innerHTML = '<div class="main">main</div><div>no main</div>';
    expect(Domutil.querySelector(".main").length).toBe(1);
  });

/*
* 셀렉터가 id인 경우, 해당 id를 가지고 있는 엘리멘트 배열을 반환
*/
  it("if selector is id, should be return array id element", function(){
    document.body.innerHTML = '<div class="main">main</div><div id="cont">no main</div>';
    expect(Domutil.querySelector("#cont").length).toBe(1);
  });

/*
* 셀렉터가 tagName인 경우, 해당 tagName을 가지고 있는 엘리멘트 배열을 반환
*/
  it("if selector is tagName, should be return array tagName element", function(){
    document.body.innerHTML = '<div class="main">main</div><div id="cont">no main</div>';
    expect(Domutil.querySelector("div").length).toBe(2);
  });


});
