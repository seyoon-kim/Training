// getElementsByClassName*() IE 8 이하 버전 호환
var getElementsByClassNamePolyfil = function(rootEle, selector) {
    var allElements;
    var result;
    var rClasName;
    var i;
    var allElementsLength;

    if (document.getElementsByClassName) {
        return rootEle.getElementsByClassName(selector);
    }

    allElements = rootEle.getElementsByTagName('*');
    rClasName = new RegExp(selector);

    i = 0;
    allElementsLength = allElements.length;
    for (i; i < allElementsLength; i += 1) {
        if (rClasName.test(allElements[i].className)) {
            result.push(allElements[i]);
        }
    }

    return result;
};

var Domutil = (function() {
    /*
     * 1. selector의 앞에 문자열에 따라 id, class, tagName을 구별하여 해당하는 엘리멘트들의 배열을 반환하는 함수
     * 2. rootEle, selector 두 개의 인자를 받는다. rootEle는 이전에 받은 결과값으로서 해당 값으로 다시 다음번째의 selector 값을 이용하여 값을 찾을때 사용한다.
     */
    var _findElementsOfMatchingSelector = function(rootEle, selectors) {
        var result;
        var rClasName = /^\./g;
        var rIdName = /^#/g;

        if (rClasName.test(selectors)) {
            selectors = selectors.replace(rClasName, '');
            result = getElementsByClassNamePolyfil(rootEle, selectors);
            result = Array.prototype.slice.call(result);
        } else if (rIdName.test(selectors)) {
            selectors = selectors.replace(rIdName, '');
            result = rootEle.getElementById(selectors);
            result = [result];
        } else {
            result = rootEle.getElementsByTagName(selectors);
            result = Array.prototype.slice.call(result);
        }

        return result;
    };

    // selector를 만족 시키는 요소들을 담은 배열을 생성하여 반환
    var _makeArrayMatchingToSelctor = function(selectors) {
        var founded; // founded, from 중에서 arrSeletor의 원소에 해당하는 결과를 저장하는 값
        var from; // from, 찾아야 하는 대상이 되는 엘리멘트
        var arrSeletor; // arrSeletor, 무엇을 찾아야 하는지 알려주는 값
        var i;
        var j;
        var arrSeletorLength;
        var fromLength;

        if (!selectors) {
            return [];
        }

        founded = [];
        from = [document];
        arrSeletor = selectors.split(' ');

        i = 0;
        arrSeletorLength = arrSeletor.length;
        for (i; i < arrSeletorLength; i += 1) {
            j = 0;
            fromLength = from.length;
            for (j; j < fromLength; j += 1) {
                founded = founded.concat(_findElementsOfMatchingSelector(from[j], arrSeletor[i]));
            }
            from = founded;
            founded = [];
        }

        return from;
    };

    var querySelector = function(selectors) {
        var from = [];
        var result = [];

        from = _makeArrayMatchingToSelctor(selectors);

        if (from.length < 1) {
            result = [];
        } else {
            result.push(from[0]);
        }

        return result;
    };

    var querySelectorAll = function(selectors) {
        var from = [];
        var result = [];

        from = _makeArrayMatchingToSelctor(selectors);

        if (from.length < 1) {
            result = [];
        } else {
            result = from;
        }

        return result;
    };

    return {
        querySelector: querySelector,
        querySelectorAll: querySelectorAll
    };
})();

describe('Domutil.querySelector function should be return array ', function() {
    // Selector API 요구조건, 배열을 반환해야 한다 테스트 케이스 작성
    it('should be return array', function() {
        expect(Array.isArray(Domutil.querySelector())).toBe(true);
    });

    // 셀렉터가 class인 경우, 해당 class를 가지고 있는 엘리멘트 배열을 반환
    it('if selector is class, should be return array class element', function() {
        document.body.innerHTML = '<div class="main">main</div><div>no main</div>';
        expect(Domutil.querySelector('.main').length).toBe(1);
    });

    // 셀렉터가 id인 경우, 해당 id를 가지고 있는 엘리멘트 배열을 반환
    it('if selector is id, should be return array id element', function() {
        document.body.innerHTML = '<div class="main">main</div><div id="cont">no main</div>';
        expect(Domutil.querySelector('#cont').length).toBe(1);
    });

    // 셀렉터가 tagName인 경우, 해당 tagName을 가지고 있는 엘리멘트 배열을 반환
    it('if selector is tagName, should be return array tagName element', function() {
        document.body.innerHTML = '<div class="main">main</div><div id="cont">no main</div>';
        expect(Domutil.querySelector('div').length).toBe(1);
    });

    // 셀렉터가 두 개인 경우, .main div의 해당하는 엘레멘트 배열을 반환
    it('if selector is (.className tagName), should be return array .className tagName element', function() {
        document.body.innerHTML = '<div id="cont" class="main">no main</div><div class="main"><div>.main div</div></div>';
        expect(Domutil.querySelector('.main div').length).toBe(1);
    });

    // 셀렉터가 세 개인 경우, .#cont div span의 해당하는 엘레멘트 배열을 반환
    it('if selector is (#id tagName tagName), should be return array #id tagName tagName', function() {
        document.body.innerHTML = '<div id="cont" class="main"><div><span>no main</span></div></div><div class="main"><div><span>.main</span> div</div></div>';
        expect(Domutil.querySelector('#cont div span').length).toBe(1);
    });

    // 셀렉터가 세 개인 경우, .main div span의 해당하는 엘레멘트 배열을 반환
    it('if selector is (.className tagName tagName), should be return array .className tagName tagName element', function() {
        document.body.innerHTML = '<div id="cont" class="main"><div><span>no main</span></div></div> <div class="main"><div><span>.main</span></div></div>';
        expect(Domutil.querySelector('.main div span').length).toBe(1);
    });
});

describe('Domutil.querySelectorAll function should be return array ', function() {
    // Selector API 요구조건, 배열을 반환해야 한다 테스트 케이스 작성
    it('should be return array', function() {
        expect(Array.isArray(Domutil.querySelectorAll())).toBe(true);
    });

    // 셀렉터가 class인 경우, 해당 class를 가지고 있는 엘리멘트 배열을 반환
    it('if selector is class, should be return array class element', function() {
        document.body.innerHTML = '<div class="main">main</div><div class="main">no main</div>';
        expect(Domutil.querySelectorAll('.main').length).toBe(2);
    });

    // 셀렉터가 id인 경우, 해당 id를 가지고 있는 엘리멘트 배열을 반환
    it('if selector is id, should be return array id element', function() {
        document.body.innerHTML = '<div class="main">main</div><div id="cont">no main</div>';
        expect(Domutil.querySelectorAll('#cont').length).toBe(1);
    });

    // 셀렉터가 tagName인 경우, 해당 tagName을 가지고 있는 엘리멘트 배열을 반환
    it('if selector is tagName, should be return array tagName element', function() {
        document.body.innerHTML = '<div class="main">main</div><div id="cont"><div>no main</div></div>';
        expect(Domutil.querySelectorAll('div').length).toBe(3);
    });

    // 셀렉터가 두 개인 경우, .main div의 해당하는 엘레멘트 배열을 반환
    it('if selector is (.className tagName), should be return array .className tagName element', function() {
        document.body.innerHTML = '<div id="cont" class="main"><div>no main</div></div><div class="main"><div>.main div</div></div>';
        expect(Domutil.querySelectorAll('.main div').length).toBe(2);
    });

    // 셀렉터가 세 개인 경우, .#cont div span의 해당하는 엘레멘트 배열을 반환
    it('if selector is (#id tagName tagName), should be return array #id tagName tagName', function() {
        document.body.innerHTML = '<div id="cont" class="main"><div><span>no main</span><span>span</span></div></div><div class="main"><div><span>.main</span> div</div></div>';
        expect(Domutil.querySelectorAll('#cont div span').length).toBe(2);
    });

    // 셀렉터가 세 개인 경우, .main div span의 해당하는 엘레멘트 배열을 반환
    it('if selector is (.className tagName tagName), should be return array .className tagName tagName element', function() {
        document.body.innerHTML = '<div id="cont" class="main"><div><span>no main</span></div></div> <div class="main"><div><span>.main</span></div></div>';
        expect(Domutil.querySelectorAll('.main div span').length).toBe(2);
    });
});

describe('getElementsByClassName Pollyfil', function() {
    it('Should be return main class elements', function() {
        document.body.innerHTML = '<div id="cont" class="main"><div><span>no main</span></div></div> <div class="main"><div><span>.main</span></div></div>';
        expect(getElementsByClassNamePolyfil(document, 'main').length).toBe(2);
    });
});
