tui.util.HashMap(object)
===============

## 소개
- HashMap 객체는 간단한 key/value map 이다.
- HashMap으로 생성된 객체는 length값은 갖지만 배열은 아니다.
- parameters
- Name : obj
- Type : object
- Description : A initial data for creation.


~~~
var hm = new tui.util.HashMap({
  'mydata': {
    'hello': 'imfine'
  },
  'what': 'time'
});
~~~

### Members

#### length
- hashmap의 사이즈

### Methods

#### each(iteratee)

- hasmap에 저장되어있는 key, value값을 이용하여 인자로 받은 callback함수를 적용한다.
- parameters
- Name : iteratee
- Type : function
- Description : Callback function

#### find(condition) → {Array}

- hasmap에 저장되어있는 key, value값을 이용하여 인자로 받은 callback함수 내부에서 조건을 만족시킨 value값만 저장하는 배열을 반환한다.
- parameters
- Name : condition
- Type : function
- Description : A string for key
- return : The value from a key

#### has(key) → {boolean}

- 인자로 받은 key값이 있는지 확인하여 boolean값 반환
- parameters
- Name : Key
- Type : string
- Description : A string for key
- return : boolean - Indicating whether a value exists or not.

#### keys() → {Array}

- key값만 가지는 list 배열을 반환
- return : a key list

#### merge(hashmap)

- 인자로 받은 hashmap을 병합한다.
- parameters
- Name : hashmap
- Type : hashmap
- Description : Another hashMap instance

#### remove(key) → {string|Array.<string>}

- key 또는 key list에 해당하는 데이터를 삭제한다.
- parameters
- Name : key
- Type : string | Array.<string>
- Description : A removed data

#### removeAll()

- 모든 데이터 삭제

#### removeByKey(key) → * | null

- key값에 해당하는 데이터를 삭제한다.
- parameters
- Name : key
- Type : string
- Description : A string for key
- return : null

#### removeByKeyArray(keyArray) → {Array.<string>}

- key list에 해당하는 데이터를 삭제한다.
- parameters
- Name : keyArray
- Type : Array.<string>
- Description : An array of keys
- return : Array.<string> - A removed data

#### set(key, valueopt)

- {'key' : 'value'} 데이터 저장
- parameters
- Name : key
- Type : sting | object
- Description : A string or object for key
- Name : value
- Type : *
- Description : A data

#### setKeyValue(key, value)

- key값이 string 타입만 저장
- parameters
- Name : key
- Type : sting
- Description : A string for key
- Name : value
- Type : *
- Description : A data

#### setObject(obj)

- key값이 object 타입만 저장
- parameters
- Name : object
- Type : sting
- Description : A object for data

#### toArray() -> {Array}

- 가지고있는 모든 value값을 배열로 반환
- return : A new array having all values
