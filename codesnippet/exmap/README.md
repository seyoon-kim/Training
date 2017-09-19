tui.util.ExMap(initData)
===============

## 소개
- ExMap은 the tui.util.Map의 확장된 버전이다.
- parameters
- name : initData
- Type : Array
- Description : Array of key-value pairs (2-element Arrays). Each key-value pair will be added to the new Map


### Methods

#### deleteByKeys(keys)

- key 값이 담겨있는 배열에 해다하는 요소를 지운다.
- parameters
- Name : keys
- Type : Array
- Description : Array that contains keys of the element to remove

#### filter(predicate) → {ExMap}

- 인자로 받은 함수에서 조건에 해당하는 key, value 값만 갖는 exMap object를 반환한다.
- parameters
- Name : predicate
- Type : function
- Description : Function to test each key-value pair of the Map object. Invoked with arguments (value, key). Return true to keep the element, false otherwise.

#### merge(map)

- 인자로 받은 map을 병합한다.
- parameters
- Name : map
- Type : map
- Description : Map object to be merged into this Map object

#### setObject(object)

- object 형식으로된 key, value값을 map에 저장한다
- parameters
- Name : object
- Type : object
- Description : Plain object that has a key-value pair
