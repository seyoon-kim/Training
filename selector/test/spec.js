var Domutil = Domutil || {};

Domutil.querySelector = function(selectors){
/*
* 안자로 받은 selectors의 값이 비었을때 빈배열을 반환한다.
*/
  if(!selectors){
    return [];
  }
/*
* 인자로 받은 selectors는 .className이므로 앞에 '.'문자를 제외해야 getElementsByClassName()의 인자로 사용할 수 있다.
*/
  selectors = selectors.replace(/\./g, "");
  var result = document.getElementsByClassName(selectors);
/*
* HTML Collection은 유사배열이다. 유사배열을 배열로 바꾸기
*/
  result = Array.prototype.slice.call(result);

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
* 셀렉터가 class인 경우, 해당 class를 가지고 있는 엘리멘트를 반환
*/
  it("if selector is class, should be return array class element", function(){
    document.body.innerHTML = '<div class="main">main</div><div>no main</div>';
    expect(Domutil.querySelector(".main").length).toBe(1);
  });

});
