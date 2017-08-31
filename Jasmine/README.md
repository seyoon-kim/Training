Jasmine
===============

### 소개

- Jasmine JavaScript code를 테스팅하기 위한 프레임워크이다.


#### describe & it

- describe는 suite라고 불리우며 두개의 파라미터를 인자로 받는다. 첫번째 인자는 설명문이 들어가고 두번째 인자는 테스트 하고자하는 내용들이 들어간다.
- it은 spec이라 불리우며 불리우며 두개의 파라미터를 인자로 받는다. 첫번째 인자는 설명문이 들어가고 두번째 인자는 함수가 무엇을 해야하는지 말해주는 함수이다.
- suite안에는 많은 spec이 들어갈 수 있다.

- expect에는 테스트 하고자 하는 것의 결과값이 들어간다.
- Matcher는 expect에서 나온 결과값과 내가 예상하는 값이 맞는지 확인할 수 있다.


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

- beforeEach는 spec이 실행되기 이전에 실행되는 함수
- afterEach spec이 실행된 이후에 실행되는 함수

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

- this는 beforeEach, it, afterEach 사이에서 같은 변수를 공유하도록 한다.
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

#### Nesting Blocks

<pre><code>
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

- 결과를 보류시키고 싶을때 사용한다.