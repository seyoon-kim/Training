tui.util.Enum(itemList)
===============

## 사용예

~~~
//-- #1. Get Module --//
var Enum = require('tui-code-snippet').Enum; // node, commonjs
var Enum = tui.util.Enum; // distribution file

//-- #2. Use property --//
var MYENUM = new Enum('TYPE1', 'TYPE2');
var MYENUM2 = new Enum(['TYPE1', 'TYPE2']);

//usage
if (value === MYENUM.TYPE1) {
     ....
}

//add (If a duplicate name is inputted, will be disregarded.)
MYENUM.set('TYPE3', 'TYPE4');

//get name of a constant by a value
MYENUM.getName(MYENUM.TYPE1); // 'TYPE1'

// In modern browsers (except IE8 and lower), a value can not be changed in constants.
var originalValue = MYENUM.TYPE1;
MYENUM.TYPE1 = 1234; // maybe TypeError
MYENUM.TYPE1 === originalValue; // true
~~~


### new Enum(itemList)
- 유니크한 값을 갖는 상수 리스트를 만듭니다. IE 9이상 브라우저에서 한 번 정의된 값은 변경되지 않습니다.
- parameters
- Name : itemList
- Type : string | Array.<string>
- Description : Constant-list (An array of string is available)


#### getName(value) → {string|undefined}
- 상수의 key값을 받환한다.
- parameters
- Name : value
- Type : number
- Description : A value of the constant.

#### set(itemList)
- 새로운 상수를 추가한다.
- parameters
- Name : itmeList
- Type : string | Array.<string>
- Description : Constant-list (An array of string is available)
