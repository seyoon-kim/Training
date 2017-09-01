Jasmine
===============

### 소개

- Jasmine은 JavaScript code를 테스팅하기 위한 프레임워크이다.


#### describe

- describe는 suite라고 불리우며 두개의 파라미터를 인자로 받는다. 첫번째 인자는 설명문이 들어가고 두번째 인자는 테스트 하고자하는 내용들이 들어간다.
- suite안에는 많은 spec이 들어갈 수 있다.


#### it

- it은 spec이라 불리우며 불리우며 두개의 파라미터를 인자로 받는다. 첫번째 인자는 설명문이 들어가고 두번째 인자는 함수가 무엇을 해야하는지 말해주는 함수이다.
- spec 안에는 1개 이상의 expection으로 구성


#### Expectations

- actual이라고도 불린다.
- expect에는 테스트 하고자 하는 것의 결과값이 들어간다.

#### Matcher

- 기대값을 정의한다.
- Matcher는 expect에서 나온 결과값과 내가 예상하는 값이 맞는지 확인할 수 있다.
- 결과는 true, false, 반대의 값을 원한다면 앞에 not을 붙이면 된다.

#### Matcher Example

<pre><code>
	describe("A suite", function() {
 		it("contains spec with an expectation", function() {
    	expect(true).toEqual(true);
  		});
	});
</code></pre>

- "A suite"라는 suite의 제목이며 결과값과 예상되는 기대값과 같은지 확인하는 spect이다

<pre><code>
	describe("A suite is just a function", function() {
	  var a;

	  it("and so is a spec", function() {
	    a = true;

	    expect(a).toBe(true);
	  });
	});
</code></pre>

- a값이 true값인지 확인., toBe Matcher는 "==="와 같이 타입과 값이 일치해야한다.

<pre><code>
	describe("The 'toBe' matcher compares with ===", function() {
		it("and has a positive case", function() {
			expect(true).toBe(true);
	  	});

	  	it("and can have a negative case", function() {
	    	expect(false).not.toBe(true);
	  	});
	});

	describe("Included matchers:", function() {

	  it("The 'toBe' matcher compares with ===", function() {
	    var a = 12;
	    var b = a;

	    expect(a).toBe(b);
	    expect(a).not.toBe(null);
	  });
	})
</code></pre>

- toBe와 not.toBe 비교, not.toBe의 경우 같지 않은 값이 나와야한다.
- 하나의 spec안에 여러개의 Matcher사용이 가능하다.

<pre><code>
describe("The 'toEqual' matcher", function() {
    it("works for simple literals and variables", function() {
      var a = 12;
      expect(a).toEqual(12);
    });

    it("should work for objects", function() {
      var foo = {
        a: 12,
        b: 34
      };
      var bar = {
        a: 12,
        b: 34
      };

      var bar = foo;
      expect(foo).toEqual(bar);
    });
  });
</code></pre>

- 서로 다른 객체라도 객체안의 프로퍼티가 같으면 같은값으로 

#### fail

<pre><code>
describe("A spec using the fail function", function() {
  var foo = function(x, callBack) {
    if (x) {
      callBack();
    }
  };

  it("should not call the callBack", function() {
    foo(false, function() {
      fail("Callback has been called !!!!");
    });
  });
});
</code></pre>

#### beforeEach and afterEach

<pre><code>
describe("A spec using beforeEach and afterEach", function() {
  var foo = 0;

  beforeEach(function() {
    foo += 1;
  });

  afterEach(function() {
    foo = 0;
  });

  it("is just a function, so it can contain any code", function() {
    expect(foo).toEqual(1);
  });

  it("can have more than one expectation", function() {
    expect(foo).toEqual(1);
    expect(true).toEqual(true);
  });
});
</code></pre>

- beforeEach는 describe 함수내에 spec들이 시작될 때마다 실행
- beforeAll describe 함수내에 spec들이 시작되기 전에 1번만 실행
- afterEach는 describe 함수 내에 spec들이 끝날 때마다 실행
- afterAll describe 함수 내에 spec들이 모두 끝났을때 1번만 실행

#### beforeAll and afterAll

<pre><code>
describe("A spec using beforeAll and afterAll", function() {
  var foo;

  beforeAll(function() {
    foo = 1;
  });

  afterAll(function() {
    foo = 0;
  });

  it("sets the initial value of foo before specs run", function() {
    expect(foo).toEqual(1);
    foo += 1;
  });

  it("does not reset foo between specs", function() {
    expect(foo).toEqual(2);
  });
});
</code></pre>

- beforeAll describe 함수내에 spec들이 시작되기 전에 1번만 실행
- afterAll describe 함수 내에 spec들이 모두 끝났을때 1번만 실행
- beforeEach와 beforeAll의 차이점은 beforeEach는 각 spec마다 변수가 각각 따로 변하지만 beforeAll은 변수가 각각의 spec과 이어져있다.


#### this

<pre><code>
describe("A spec", function() {
  beforeEach(function() {
    this.foo = 0;
  });

  it("can use the `this` to share state", function() {
    expect(this.foo).toEqual(0);
    this.foo += 1;
    this.bar = "test pollution?";
  });

  it("prevents test pollution by having an empty `this` created for the next spec", function() {
    expect(this.foo).toEqual(0);
    expect(this.bar).toBe(undefined);
  });
});
</code></pre>

- this는 beforeEach, it, afterEach 사이에서 비어있는 object를 공유하도록 한다.
- 다른 spec간에는 같은 변수가 공유안된다.


#### Nesting Blocks

<pre><code>
describe("A spec", function() {
  var foo;

  beforeEach(function() {
    foo = 0;
    foo += 1;
  });

  afterEach(function() {
    foo = 0;
  });

  it("is just a function, so it can contain any code", function() {
    expect(foo).toEqual(1);
  });

  it("can have more than one expectation", function() {
    expect(foo).toEqual(1);
    expect(true).toEqual(true);
  });

  describe("nested inside a second describe", function() {
    var bar;

    beforeEach(function() {
      bar = 1;
    });

    it("can reference both scopes as needed", function() {
      expect(foo).toEqual(bar);
    });
  });
});
</code></pre>

- describe 안에 describe를 작성 가능하며 부모 describe의 변수는 자식 describe에서 사용가능 하다.

#### Disabling Suites & Pending Specs

<pre><code>
	xdescribe("A spec", function() {
	  var foo;

	  beforeEach(function() {
	    foo = 0;
	    foo += 1;
	  });

	  it("is just a function, so it can contain any code", function() {
	    expect(foo).toEqual(1);
	  });
	});

	describe("Pending specs", function() {
		xit("can be declared 'xit'", function() {
	    expect(true).toBe(false);
	  	});

		it("can be declared with 'it' but without a function");

		it("can be declared by calling 'pending' in the spec body", function() {
	    expect(true).toBe(false);
	    pending('this is why it is pending');
	  });
	});
</code></pre>

- 결과를 무시하고 싶을때 사용한다.

#### spies

<pre><code>
describe("A spy", function() {
  var foo, bar = null;

  beforeEach(function() {
    foo = {
      setBar: function(value) {
        bar = value;
      }
    };

    spyOn(foo, 'setBar');
    // spy함수 설정

    foo.setBar(123);
    foo.setBar(456, 'another param');
  });

  it("tracks that the spy was called", function() {
    expect(foo.setBar).toHaveBeenCalled();
  });
  // spy가 호출되었는지

  it("tracks that the spy was called x times", function() {
    expect(foo.setBar).toHaveBeenCalledTimes(2);
  });
  // spy가 몇번 호출 되었는지

  it("tracks all the arguments of its calls", function() {
    expect(foo.setBar).toHaveBeenCalledWith(123);
    expect(foo.setBar).toHaveBeenCalledWith(456, 'another param');
  });
  // spy의 인자가 어떠한 값으로 받았는지 확인
  // 여러개 spy가 호출되어도 그것이 기록되어 각각 어떠한 인자값을 받았는지 확인 가능하다.

  it("stops all execution on a function", function() {
    expect(bar).toBeNull();
  });
  // beforeEach에서 foo.setBar가 호출하였으나 실제로 값이 적용되지 않았다. 호출을 추적하지만 실제로 실행되지않는다.
});
</code></pre>

- Jasmine은 test double function 라고 불리우는 spies를 갖는다.
- spies는 특별한 메소드를 가진다
- describe, it 내부 어디서든 존재할 수 있다.
- 특정 함수가 호출 되었는지, 결과값을 다르게 바꾼다던지,

#### spies and callThrough

<pre><code>
describe("A spy, when configured to call through", function() {
  var foo, bar, fetchedBar;

  beforeEach(function() {
    foo = {
      setBar: function(value) {
        bar = value;
      },
      getBar: function() {
        return bar;
      }
    };

    spyOn(foo, 'getBar').and.callThrough();
    foo.setBar(123);
    fetchedBar = foo.getBar();
  });

  it("tracks that the spy was called", function() {
    expect(foo.getBar).toHaveBeenCalled();
    // getBar를 spy로 설정하고 한번 불렀기 때문에 true
  });

  it("should not affect other functions", function() {
    expect(bar).toEqual(123);
    // beforeEach앞에 setBar가 실행되었기 때문에 bar의 값이 123변경, 만약 setBar가 spy로 설정되었다면 undefined일것이다
  });

  it("when called returns the requested value", function() {
    expect(fetchedBar).toEqual(123);
  });
  // and.callThrough()으로 함수호출 확인 및 실행까지 되었으므로 fetchedBar의 결과값이 저장된다.
});
</code></pre>

- spies의 의해 함수가 호출되었는지 확인되고 실행까지 된다.

#### spies and return value

<pre><code>
describe("A spy, when configured to fake a return value", function() {
  var foo, bar, fetchedBar;

  beforeEach(function() {
    foo = {
      setBar: function(value) {
        bar = value;
      },
      getBar: function() {
        return bar;
      }
    };

    spyOn(foo, "getBar").and.returnValue(745);

    foo.setBar(123);
    fetchedBar = foo.getBar();
  });

  it("tracks that the spy was called", function() {
    expect(foo.getBar).toHaveBeenCalled();
  });

  it("should not affect other functions", function() {
    expect(bar).toEqual(123);
  });

  it("when called returns the requested value", function() {
    expect(fetchedBar).toEqual(745);
  });
});
</code></pre>

- spy의 설정된 호출 함수의 반환값을 설정할 수 있다.

#### spies and.callFake

<pre><code>
describe("A spy, when configured with an alternate implementation", function() {
  var foo, bar, fetchedBar;

  beforeEach(function() {
    foo = {
      setBar: function(value) {
        bar = value;
      },
      getBar: function() {
        return bar;
      }
    };
    spyOn(foo, "getBar").and.callFake(function(arguments, can, be, received) {
      return 1001;
    });

    foo.setBar(123);
    fetchedBar = foo.getBar();
  });

  it("tracks that the spy was called", function() {
    expect(foo.getBar).toHaveBeenCalled();
  });

  it("should not affect other functions", function() {
    expect(bar).toEqual(123);
  });

  it("when called returns the requested value", function() {
    expect(fetchedBar).toEqual(1001);
  });
});
</code></pre>

- spy에 설정된 함수를 다른 함수로 바꾸어 호출할 수 있다.


#### spies and.throwError

<pre><code>
describe("A spy, when configured to throw an error", function() {
  var foo, bar;

  beforeEach(function() {
    foo = {
      setBar: function(value) {
        bar = value;
      }
    };

    spyOn(foo, "setBar").and.throwError("quux");
  });

  it("throws the value", function() {
    expect(function() {
      foo.setBar(123)
    }).toThrowError("quux");
  });
});
</code></pre>

- 함수가 호출되면 에러를 던집니다.

#### spies and.stub

<pre><code>
describe("A spy", function() {
  var foo, bar = null;

  beforeEach(function() {
    foo = {
      setBar: function(value) {
        bar = value;
      }
    };

    spyOn(foo, 'setBar').and.callThrough();
  });

  it("can call through and then stub in the same spec", function() {
    foo.setBar(123);
    expect(bar).toEqual(123);

    foo.setBar.and.stub();
    bar = null;

    foo.setBar(123);
    expect(bar).toBe(null);
  });
});
</code></pre>

- stub을 이용하여 아직 개발되지 않은 기능을 stub으로 대체하고 개발하고 테스트 할 수 있따.

#### Other tracking properties

<pre><code>
describe("A spy", function() {
  var foo, bar = null;

  beforeEach(function() {
    foo = {
      setBar: function(value) {
        bar = value;
      }
    };

    spyOn(foo, 'setBar');
  });

  it("tracks if it was called at all", function() {
    expect(foo.setBar.calls.any()).toEqual(false);

    foo.setBar();

    expect(foo.setBar.calls.any()).toEqual(true);
  });
  // 한번이라도 불렸으면 true

  it("tracks the number of times it was called", function() {
    expect(foo.setBar.calls.count()).toEqual(0);

    foo.setBar();
    foo.setBar();

    expect(foo.setBar.calls.count()).toEqual(2);
  });
  // 몇번 불렸는지 카운트

  it("tracks the arguments of each call", function() {
    foo.setBar(123);
    foo.setBar(456, "baz");

    expect(foo.setBar.calls.argsFor(0)).toEqual([123]);
    expect(foo.setBar.calls.argsFor(1)).toEqual([456, "baz"]);
  });
  // 호출된 순서가 기록 되어 있고 각각의 함수의 어떠한 인자를 받았는지 확인

  it("tracks the arguments of all calls", function() {
    foo.setBar(123);
    foo.setBar(456, "baz");

    expect(foo.setBar.calls.allArgs()).toEqual([[123],[456, "baz"]]);
  });
  // 호출된 함수의 인자를 한꺼번에 순서대로 확인

  it("can provide the context and arguments to all calls", function() {
    foo.setBar(123);

    expect(foo.setBar.calls.all()).toEqual([jasmine.objectContaining({object: foo, args: [123], returnValue: undefined})]);
  });

  it("has a shortcut to the most recent call", function() {
    foo.setBar(123);
    foo.setBar(456, "baz");

    expect(foo.setBar.calls.mostRecent()).toEqual(jasmine.objectContaining({object: foo, args: [456, "baz"], returnValue: undefined}));
  });
  // 가장 최근의 호출된 함수의 object명 인자값 리턴값 확인

  it("has a shortcut to the first call", function() {
    foo.setBar(123);
    foo.setBar(456, "baz");

    expect(foo.setBar.calls.first()).toEqual(jasmine.objectContaining({object: foo, args: [123], returnValue: undefined}));
  });
  // 처음 호출된 함수의 object명, 인자값, 리턴값 확인

  it("tracks the context", function() {
    var spy = jasmine.createSpy('spy');
    var baz = {
      fn: spy
    };
    var quux = {
      fn: spy
    };
    baz.fn(123);
    quux.fn(456);

    expect(spy.calls.first().object).toBe(baz);
    expect(spy.calls.mostRecent().object).toBe(quux);
  });
  // 

  it("can be reset", function() {
    foo.setBar(123);
    foo.setBar(456, "baz");

    expect(foo.setBar.calls.any()).toBe(true);

    foo.setBar.calls.reset();

    expect(foo.setBar.calls.any()).toBe(false);
  });
  // spy값 초기화
});
</code></pre>

-

#### spies createSpy

<pre><code>
describe("A spy, when created manually", function() {
  var whatAmI;

  beforeEach(function() {
    whatAmI = jasmine.createSpy('whatAmI');

    whatAmI("I", "am", "a", "spy");
  });

  it("is named, which helps in error reporting", function() {
    expect(whatAmI.and.identity()).toEqual('whatAmI');
  });

  it("tracks that the spy was called", function() {
    expect(whatAmI).toHaveBeenCalled();
  });

  it("tracks its number of calls", function() {
    expect(whatAmI.calls.count()).toEqual(1);
  });

  it("tracks all the arguments of its calls", function() {
    expect(whatAmI).toHaveBeenCalledWith("I", "am", "a", "spy");
  });

  it("allows access to the most recent call", function() {
    expect(whatAmI.calls.mostRecent().args[0]).toEqual("I");
  });
});
</code></pre>

- spy를 생성한다.

#### spies createSpyObj
<pre><code>
describe("Multiple spies, when created manually", function() {
  var tape;

  beforeEach(function() {
    tape = jasmine.createSpyObj('tape', ['play', 'pause', 'stop', 'rewind']);

    tape.play();
    tape.pause();
    tape.rewind(0);
  });

  it("creates spies for each requested function", function() {
    expect(tape.play).toBeDefined();
    expect(tape.pause).toBeDefined();
    expect(tape.stop).toBeDefined();
    expect(tape.rewind).toBeDefined();
  });

  it("tracks that the spies were called", function() {
    expect(tape.play).toHaveBeenCalled();
    expect(tape.pause).toHaveBeenCalled();
    expect(tape.rewind).toHaveBeenCalled();
    expect(tape.stop).not.toHaveBeenCalled();
  });

  it("tracks all the arguments of its calls", function() {
    expect(tape.rewind).toHaveBeenCalledWith(0);
  });
});
</code></pre>

- spy Object를 생성한다.


#### spies 

<pre><code>
describe("jasmine.any", function() {
  it("matches any value", function() {
    expect({}).toEqual(jasmine.any(Object));
    expect(12).toEqual(jasmine.any(Number));
  });

  describe("when used with a spy", function() {
    it("is useful for comparing arguments", function() {
      var foo = jasmine.createSpy('foo');
      foo(12, function() {
        return true;
      });

      expect(foo).toHaveBeenCalledWith(jasmine.any(Number), jasmine.any(Function));
    });
  });
});
</code></pre>

- 

#### jasmine.any

<pre><code>
describe("jasmine.any", function() {
  it("matches any value", function() {
    expect({}).toEqual(jasmine.any(Object));
    expect(12).toEqual(jasmine.any(Number));
  });

  describe("when used with a spy", function() {
    it("is useful for comparing arguments", function() {
      var foo = jasmine.createSpy('foo');
      foo(12, function() {
        return true;
      });

      expect(foo).toHaveBeenCalledWith(jasmine.any(Number), jasmine.any(Function));
    });
  });
});
</code></pre>

- 값의 타입이 무엇인지 판별해주는 함수로서 true, false를 반환한다.

#### jasmine.anything

<pre><code>
describe("jasmine.anything", function() {
  it("matches anything", function() {
    expect(1).toEqual(jasmine.anything());
  });

  describe("when used with a spy", function() {
    it("is useful when the argument can be ignored", function() {
      var foo = jasmine.createSpy('foo');
      foo(12, function() {
        return false;
      });

      expect(foo).toHaveBeenCalledWith(12, jasmine.anything());
    });
  });
});
</code></pre>

- 값의 타입이 null, undefined가 아니라면 true 반환


#### jasmine.objectContaining

<pre><code>
describe("jasmine.objectContaining", function() {
  var foo;

  beforeEach(function() {
    foo = {
      a: 1,
      b: 2,
      bar: "baz"
    };
  });

  it("matches objects with the expect key/value pairs", function() {
    expect(foo).toEqual(jasmine.objectContaining({
      bar: "baz"
    }));
    expect(foo).not.toEqual(jasmine.objectContaining({
      c: 37
    }));
  });

  describe("when used with a spy", function() {
    it("is useful for comparing arguments", function() {
      var callback = jasmine.createSpy('callback');

      callback({
        bar: "baz"
      });

      expect(callback).toHaveBeenCalledWith(jasmine.objectContaining({
        bar: "baz"
      }));
      expect(callback).not.toHaveBeenCalledWith(jasmine.objectContaining({
        c: 37
      }));
    });
  });
});
</code></pre>

- 기대값의 객체안에 해당 key:value가 있는지 확인

#### jasmine.arrayContaining

<pre><code>
describe("jasmine.arrayContaining", function() {
  var foo;

  beforeEach(function() {
    foo = [1, 2, 3, 4];
  });

  it("matches arrays with some of the values", function() {
    expect(foo).toEqual(jasmine.arrayContaining([3, 1]));
    expect(foo).not.toEqual(jasmine.arrayContaining([6]));
  });

  describe("when used with a spy", function() {
    it("is useful when comparing arguments", function() {
      var callback = jasmine.createSpy('callback');

      callback([1, 2, 3, 4]);

      expect(callback).toHaveBeenCalledWith(jasmine.arrayContaining([4, 2, 3]));
      expect(callback).not.toHaveBeenCalledWith(jasmine.arrayContaining([5, 2]));
    });
  });
});
</code></pre>

- 기대값의 배열 프로퍼티 인 경우 안에 해당 원소가 있는지 확인

#### jasmine.stringMatching

<pre><code>
describe('jasmine.stringMatching', function() {
  it("matches as a regexp", function() {
    expect({foo: 'bar'}).toEqual({foo: jasmine.stringMatching(/^bar$/)});
    expect({foo: 'foobarbaz'}).toEqual({foo: jasmine.stringMatching('bar')});
  });

  describe("when used with a spy", function() {
    it("is useful for comparing arguments", function() {
      var callback = jasmine.createSpy('callback');

      callback('foobarbaz');

      expect(callback).toHaveBeenCalledWith(jasmine.stringMatching('bar'));
      expect(callback).not.toHaveBeenCalledWith(jasmine.stringMatching(/^bar$/));
    });
  });
});
</code></pre>

- 객체의 key:value에서 원하는 string으로 검색

#### Custom asymmetric equality tester

<pre><code>
describe("custom asymmetry", function() {
  var tester = {
    asymmetricMatch: function(actual) {
      var secondValue = actual.split(',')[1];
      return secondValue === 'bar';
    }
  };

  it("dives in deep", function() {
    expect("foo,bar,baz,quux").toEqual(tester);
  });

  describe("when used with a spy", function() {
    it("is useful for comparing arguments", function() {
      var callback = jasmine.createSpy('callback');

      callback('foo,bar,baz');

      expect(callback).toHaveBeenCalledWith(tester);
    });
  });
});
</code></pre>

- 

#### clock and Mocking the Date

<pre><code>
describe("Manually ticking the Jasmine Clock", function() {
  var timerCallback;

  beforeEach(function() {
    timerCallback = jasmine.createSpy("timerCallback");
    jasmine.clock().install();
  });
  // clock함수 설치

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  // clock함수 uninstall 반드시 사용후에 uninstall 해야한다.

  it("causes a timeout to be called synchronously", function() {
    setTimeout(function() {
      timerCallback();
    }, 100);
    // 100ms 후에 timerCallback() 호출하는 setTimeout 호출

    expect(timerCallback).not.toHaveBeenCalled();
    // 시간이 100ms 아직 경과하기 전이다

    jasmine.clock().tick(101);
    // 시간이 101ms 경과한 후

    expect(timerCallback).toHaveBeenCalled();
  });

  it("causes an interval to be called synchronously", function() {
    setInterval(function() {
      timerCallback();
    }, 100);

    expect(timerCallback).not.toHaveBeenCalled();

    jasmine.clock().tick(101);
    expect(timerCallback.calls.count()).toEqual(1);

    jasmine.clock().tick(50);
    expect(timerCallback.calls.count()).toEqual(1);

    jasmine.clock().tick(50);
    expect(timerCallback.calls.count()).toEqual(2);
  });

  describe("Mocking the Date object", function(){
    it("mocks the Date object and sets it to a given time", function() {
      var baseTime = new Date(2013, 9, 23);

      jasmine.clock().mockDate(baseTime);

      jasmine.clock().tick(50);
      expect(new Date().getTime()).toEqual(baseTime.getTime() + 50);
    });
  });
});

</code></pre>

- clock 함수로 setTimeout, setInterval 함수와 같이 일정시간 이후에 작동되는 함수들이 제대로 실행되었는지 확인가능

- - -

Jasmine ajax.js
===============

### Jasmine ajax 테스트

#### 사용순서
1. Test responses를 작성한다.
2. mock-ajax.js을 설치한다
3. ajax 요청코드를 트리거한다
4. 각 요청의 응답을 정의한다.
5. ajax 요청을 살펴보고 기대값을 설정

<pre><code>
describe("mocking ajax", function() {
	describe("suite wide usage", function() {
 		beforeEach(function() {
      		jasmine.Ajax.install();
    	});
    	afterEach(function() {
      		jasmine.Ajax.uninstall();
    	});
    	// 사용하기 전후 ajax install, uninstall

    	it("specifying response when you need it", function() {
      		var doneFn = jasmine.createSpy("success");
      		// spy를 설정한다

      		var xhr = new XMLHttpRequest();
	    	xhr.onreadystatechange = function(args) {
	        	if (this.readyState == this.DONE) {
	        		doneFn(this.responseText);
	        	}
	    	};
	    	// 설정한 spy에 응답된 텍스트를 인자로 받는다.

	    	xhr.open("GET", "/some/cool/url");
    		xhr.send();

    		expect(jasmine.Ajax.requests.mostRecent().url).toBe('/some/cool/url');
    		// ajax 호출한 최신 url
    		expect(doneFn).not.toHaveBeenCalled();
    		// 아직 sucess라는 spy가 호출되지 않았다.

    		jasmine.Ajax.requests.mostRecent().respondWith({
    			"status": 200,
    			"contentType": 'text/plain',
    			"responseText": 'awesome response'
    		});
    		// ajax로 호출한다.
    		// 제일 첫번째 요청을 받는다.
    		// 응답한 응답텍스트의 콘텐츠 유형을 지정할수 있다.

    		expect(doneFn).toHaveBeenCalledWith('awesome response');
   		});

   		it("allows responses to be setup ahead of time", function () {
      		var doneFn = jasmine.createSpy("success");
      		jasmine.Ajax.stubRequest('/another/url').andReturn({
        		"responseText": 'immediate response'
      		});
      		// stubRequset 곧바로 ajax응답을 요청한다.
      		// 그리고 응답 결과값을 수정할 수 있다.

      		var xhr = new XMLHttpRequest();
		    xhr.onreadystatechange = function(args) {
		    	if (this.readyState == this.DONE) {
		          doneFn(this.responseText);
		        }
		    };
		    xhr.open("GET", "/another/url");
    		xhr.send();

    		expect(doneFn).toHaveBeenCalledWith('immediate response');
    	});

    	it("allows use in a single spec", function() {
		    var doneFn = jasmine.createSpy('success');
		    jasmine.Ajax.withMock(function() {
		      var xhr = new XMLHttpRequest();
		      xhr.onreadystatechange = function(args) {
		        if (this.readyState == this.DONE) {
		          doneFn(this.responseText);
		        }
		      };

		      xhr.open("GET", "/some/cool/url");
		      xhr.send();

		      expect(doneFn).not.toHaveBeenCalled();

		      jasmine.Ajax.requests.mostRecent().respondWith({
		        "status": 200,
		        "responseText": 'in spec response'
		      });

		      expect(doneFn).toHaveBeenCalledWith('in spec response');
		    });
		});

		// single spec안에서 ajax를 사용하는 경우 withMock함수를 사용하라.


   	});

</code></pre>