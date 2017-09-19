tui.util.CustomEvents()
===============

## 사용예

~~~
// node, commonjs
var CustomEvents = require('tui-code-snippet').CustomEvents;
// distribution file, script
<script src='path-to/tui-code-snippt.js'></script>
<script>
var CustomEvents = tui.util.CustomEvents;
</script>
~~~


### Methods

~~~
var model;
function Model() {
    this.name = '';
}
CustomEvents.mixin(Model);

model = new Model();
model.on('change', function() { this.name = 'model'; }, this);
model.fire('change');
alert(model.name); // 'model';
~~~

#### Mixed(func)
- 인자로 받는 함수를 생성자로 생성된 객체가 사용할수 있도록 한다.
- parameters
- Name : func
- Type : function
- Description : constructor

#### fire(eventName)
- Mixed 함수로 생성된 CustomEvent를 실행시킨다.
- parameters
- Name : eventName
- Type : string
- Description : name of custom eventName

#### getListenerLength(eventName) → {number}
- Mixed 함수로 생성된 CustomEvent의 갯수를 리턴한다.
- parameters
- Name : eventName
- Type : string
- Description : name of custom eventName
- return
- number of event

#### hasListener(eventName) → {boolean}
- Mixed 함수로 생성된 CustomEvent이 최소한 한개 이상 있는지 확인
- parameters
- Name : eventName
- Type : string
- Description : name of custom eventName
- return
- boolean

#### invoke(eventName, …data) → {boolean}

~~~
var map = new Map();
map.on({
    'beforeZoom': function() {
        // It should cancel the 'zoom' event by some conditions.
        if (that.disabled && this.getState()) {
            return false;
        }
        return true;
    }
});

if (this.invoke('beforeZoom')) {    // check the result of 'beforeZoom'
    // if true,
    // doSomething
}
~~~

- 이벤트를 발생시키고 boolean And 연산의 결과값을 반환한다.
- parameters
- Name : eventNameData
- Type : string
- Description : Custom event name Data for event
- return
- boolean - The result of operation 'boolean AND'

#### off(eventName, handler)

- custom events들을 unbind한다.
- parameters
- Name : eventName
- Type : string | object | function
- Description : event name or context or {name: handler} pair object or handler function
- Name : handler
- Type : function
- Description : handler function

#### on(eventName, handleropt, contextopt)

- custom events들을 bind한다.
- parameters
- Name : eventName
- Type : string | object | function
- Description : custom event name or an object {eventName: handler}
- Name : handler
- Type : function | object
- Description : handler function or context
- Name : context
- Type : object
- Description : context for binding

#### once(eventName, handleropt, contextopt)

- 하나의 custom event를 bind한다.
- parameters
- Name : eventName
- Type : string | object | function
- Description : custom event name or an object {eventName: handler}
- Name : handler
- Type : function | object
- Description : handler function or context
- Name : context
- Type : object
- Description : context for binding
