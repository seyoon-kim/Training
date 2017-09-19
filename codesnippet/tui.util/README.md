tui.util
===============

## 소개
- util과 관련된 함수들

~~~
var util = tui.util;
~~~

### Members

#### browser

- 해당 브라우저가 무엇인지 알려준다.

~~~
util.browser.chrome === true; // chrome
util.browser.firefox === true; // firefox
util.browser.safari === true; // safari
util.browser.msie === true; // IE
util.browser.edge === true; // edge
util.browser.others === true; // other browser
util.browser.version; // browser version
~~~

### Methods


#### bind(fn, obj) → {function}

- 새로운 함수를 만든다. 함수가 호출될때 this 값은 인자로 받은 밸류값으로 적용된다.
- parameters
- Name : fn
- Type : function
- Description : A original function before binding
- Name : obj
- Type : *
- Description : context of function in arguments[0]

#### compareJSON(…object) → {boolean}

- 인자로받은 다수의 json object들이 동일한 값인지 확인한다.
- parameters
- Name : object
- Type : object
- Description : Multiple objects for comparing.

#### createObject(obj) → {Object}

- 인자로 받은 객체를 프로토타입을 갖는 object를 생성한다.
- parameters
- Name : obj
- Type : object
- Description : This object will be a prototype of the newly-created object.

#### debounce(fn, delayopt) → {function}

- 인자로 받은 시간 후에 인자로 받은 콜백함수 실행한다.
- parameters
- Name : fn
- Type : function
- Description : The function to debounce.
- Name : delay
- Type : number
- Description : The number of milliseconds to delay
- return : function - debounced function.

#### decodeHTMLEntity(htmlEntity) → {String}

- HTML Entity string을 일반적인 문자로 변경
- parameters
- Name : htmlEntity
- Type : string
- Description : htmlEntity type string
- return : string - plain string

#### defineClass(parentopt, props) → { * }

- 생성자를 정의하고 인자로 받은 다른 생성자들을 상속받도록 한다.
- parameters
- Name : parent
- Type : *
- Description : <optional> Parent constructor
- Name : props
- Type : object
- Description : members of constructor
- return : constructor

#### defineModule(namespace, moduleDefinition) → {Object}

- 모듈을 정의한다.
- parameters
- Name : namespace
- Type : string
- Description : Namespace of module
- Name : moduleDefinition
- Type : object
- Description : object literal for moduleDefinition
- return : defined moduleDefinition

#### defineNamespace(namespace, props, isOverrideopt) → {object|function}

- namespace 정의한다.
- parameters
- Name : namespace
- Type : string
- Description : Namespace
- Name : props
- Type : object | function
- Description : A set of modules or one modules
- Name : isOverride
- Type : boolean
- Description : Override the props to the namespace.
- return : object | function - Defined namespace

#### encodeHTMLEntity(html) → {String}

- 일반 string을 HTML Entity string으로 변경한다.
- parameters
- Name : html
- Type : string
- Description : string for encoding
- return : string - html Entity

#### extend(target, …objects) → {object}

- 인자로 받은 object들을 target object에 확장시킨다.
- parameters
- Name : target
- Type : object
- Description : object that will be extended
- Name : objects
- Type : object
- Description : objects as sources
- return : object - extended object

#### filter(obj, iteratee, contextopt) → {Object}

- 인자로 받은 object 또는 배열요소 하나하나를 iteratee로 실행시켜 조건을 통과하는 요소만 해당결과에 담기
- parameters
- Name : obj
- Type : object
- Description : Object(plain object or Array) that will be traversed
- Name : iteratee
- Type : function
- Description : Callback function
- Name : context
- Type : object
- Description : Context(this) of callback function
- return : Object - plain object or Array

#### forEachOwnProperties(obj, iteratee, contextopt)

- 인자로 받은 object의 각각의 프로퍼티 마다 해당 iteratee 함수를 호출하여 계산할수있도록 한다.
- parameters
- Name : obj
- Type : object
- Description : The object that will be traversed
- Name : iteratee
- Type : function
- Description : Callback function
- Name : context
- Type : object
- Description : <optional> Context(this) of callback function

#### formatDate(form, date, option) → {boolean|string}

- data로 받은 값들을 해당 form 형식에 맞게 string으로 반환한다.
- parameters
- Name : form
- Type : string
- Description : Date form
- Name : date
- Type : date | object
- Description : Date object
- Name : option
- Type : object
- Description : option
- return : boolean | string - A transformed string or false.

#### hasEncodableString(string) → {boolean}
- 인자로 주어진 string 값이 plain string으로 변환이 가능한지 boolean 값 반환
- parameters
- Name : string
- Type : string
- Description : test string
- return : boolean

#### hasStamp(obj) → {boolean}

- object에 스탬프로 표시된 ID가 있는지 확인
- parameters
- Name : obj
- Type : object
- Description : adjusted object
- return : boolean

#### inArray(searchElement, array, startIndex) → {number}

- 인자로 받은 array중 해당하는 searchElement와 동일한 값이 있는지 확인하여 일치하는 첫번째 요소의 index값을 반환한다.

#### inherit(subType, superType)

- subType이 superType을 상속하도록 한다.

#### isArraySafe(obj) → {boolean}

- 해당 object가 array인지 확인하는 함수
- 다양한 frame 환경에서 사용가능하다.

#### isBoolean(obj) → {boolean}

- 해당 object가 boolean 타입인지 확인하는 함수

#### isBooleanSafe(obj) → {boolean}

- 해당 object가 boolean 타입인지 확인하는 함수
- 다양한 frame 환경에서 사용가능하다.

#### isDate(obj) → {boolean}

- 해당 object가 Date 생성자의 객체인지 확인하는 함수

#### isDateSafe(obj) → {boolean}

- 해당 object가 Date 생성자의 객체인지 확인하는 함수
- 다양한 frame 환경에서 사용가능하다.

#### isEmpty(obj) → {boolean}

- 해당 객체가 비어있는지 확인하는 함수

#### isExisty(param) → {boolean}

- 인자로 받은 param이 존재하는 값인지 확인하는 함수

#### isFalsy(obj) → {boolean}

- 해당 객체가 존재하지 않는 값인지 확인하는 함수

#### isFunction(obj) → {boolean}

- 해당 객체가 함수인지 확인하는 함수

#### isFunctionSafe(obj) → {boolean}

- 해당 객체가 함수인지 확인하는 함수
- 다양한 frame 환경에서 사용가능하다.

#### isHTMLNode(html) → {boolean}

- 해당 html이 HTML Node의 객체인지 확인하는 함수

#### isHTMLTag(html) → {boolean}

- 해당 html이 HTML Tag인지 확인하는 함수

#### isNotEmpty(obj) → {boolean}

- 해당 객체가 비어있지 않은 객체인지 확인하는 함수

#### isNull(obj) → {boolean}

- 해당 객체가 Null 값인지 확인하는 함수

#### isNumber(obj) → {boolean}

- 해당 객체가 숫자형타입인지 확이하는 함수

#### isNumberSafe(obj) → {boolean}

- 해당 객체가 숫자형타입인지 확이하는 함수
- 다양한 frame 환경에서 사용가능하다.

#### isObject(obj) → {boolean}

- 해당 객체가 객체 타입인지 확인하는 함수

#### isString(obj) → {boolean}

- 해당 객체가 문자형 타입인지 확인하는 함수

#### isStringSafe(obj) → {boolean}

- 해당 객체가 문자형 타입인지 확인하는 함수
- 다양한 frame 환경에서 사용가능하다.

#### isTruthy(obj) → {boolean}

- 해당 객체가 참값인지 확인하는 함

#### isUndefined(obj) → {boolean}

- 해당 객체가 undefind인지 확인하는 함수

#### keys(obj) → {Array}

- 해당 객체에있는 프로퍼티값을 배열로 바꿔주는 함수

#### pick(obj, paths) → { * }

- 주어진 객체나 배열내부에서 중첩된 항목을 검색한다.

#### pluck(arr, property) → {Array}

- 해당 객체에서 paths에 해당하는 key값의 value만 모아서 배열로 반환해주는 함수

#### range(start, stop, step) → {Array}

- start에서 시작해서 stop까지 숫자를 요소로 갖는 배열을 반환한다
- step값이 있다면 해당 값을 계산해서 해당하는 숫자만 갖는 배열을 반환한다.

#### reduce(obj, iteratee, contextopt) → { * }

- 인자로 받은 객체의 요소마다 해당 iteratee 함수를 호출하고 계산된 값을 축적하여 갖는다.

#### static stamp(obj) → {number}

- object에 유니크한 id값을 할당한다.

#### throttle(fn, intervalopt) → {function}

- 인자로 받은 함수를 해당 시간마다 호출한다.

####  timestamp() → {number}
- 현재 시간을 반환한다.

#### toArray(arrayLike) → {Array}

- 유사배열을 배열로 만들어준다.

#### zip() → {Array}

- 인자로 받은 여러개의 배열을 하나의 배열로 만들어준다.
