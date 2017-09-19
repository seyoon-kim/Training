tui.util.Map(initData)
===============

## 소개
- Map 객체는 간단한 key/value map 이다.
- 만약 브라우저가 ES6를 지원한다면 ES6의 map을 사용한다.

~~~
~~~

### Methods


#### clear()

- Map object의 모든 요소를 제거한다.

#### entries() → {Iterator}

- Map 객체 안의 모든 요소들을 [key, value] 형태의 array 로 집어넣은 순서대로 가지고 있는 Iterator 객체를 반환한다.
- return : A new Iterator object

#### forEach(callback, thisArg)
- Map 객체 안의 [key, value]값을 순서대로 인자로 받은 callback함수를 적용한다.
- parameters
- Name : callback
- Type : function
- Description : Function to execute for each element
- parameters
- Name : thisArg
- Type : thisArg
- Description : Value to use as this when executing callback

#### get(key)
- 인자로 받은 key의 value 값을 반환한다.
- parameters
- Name : key
- Type : *
- Description : The key of the element to return
- return : Element associated with the specified key

#### has(key)
- 인자로 받은 key값이 있는지 확인한다.
- parameters
- Name : key
- Type : *
- Description : The key of the element to test for presence
- return : True if an element with the specified key exists; Otherwise false

#### keys()
- Map 객체 안의 모든 키(Key)들을 집어넣은 순서대로 가지고 있는 Iterator 객체를 반환한다.
- return : A new Iterator object

#### set(key, value)
- Map 객체 안에 새로운 [key, value]를 생성한다.
- parameters
- Name : key
- Type : *
- Description : The key of the element to add to the Map object
- Name : value
- Type : *
- Description : The value of the element to add to the Map object
- return : Map - The Map object

#### values() → {Iterator}
- Map 객체 안의 모든 value 들을 집어넣은 순서대로 가지고 있는 Iterator 객체를 반환한다.
- return : A new Iterator object
