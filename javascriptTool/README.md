JavaScript 도구 학습
===============

# 학습내용

- 자바스크립트 개발에 사용하는 도구의 사용법을 조사한다.

## 조사 도구
- 정적분석기 : Eslint
- 번들러 : Webpack
- 모듈 스펙 : CommonJS / AMD
- 패키지 매니저 : npm

### Eslint

#### 정적분석기 필요성

- 사람마다 코딩 스타일이 다르기 때문에 여러 사람이 코딩하게 되다 보면 이해하기 힘들어 질 수 있다. Eslint와 같은 정적분석기 는 공통된 문법 규칙을 사용하여 팀끼리 협업할때 효율적으로 할 수 있게 도와준다.

#### Eslint란

- ESLint는 사용자가 직접 정의한대로 코드를 점검하고, 에러가 있으면 표시해주는 도구
- 코딩 스타일규칙도 정의 가능

#### Eslint 특징

- 확장성, 다양한 플러그인 사용 가능 이에따라 새로운 규칙 추가나 다른 회사나 사람의 설정 도입 가능.

#### Eslint 설정방법

##### 설치

1. npm install -g eslint
2. eslint --init 설정파일 생성
3. eslint yourfile.js

##### eslint 설정파일 (.eslintrc)

<pre><code>
module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
		// 프로젝트 사용환경 browser, commonjs, es6
    "extends": "eslint:recommended",
		//eslint의 추천 확장 설정
    "parserOptions": {
				"ecmaVersion": 5,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
		// ecma 5버전, module 사용가능
    "rules": {
        "indent": [
            "error",
            "4"
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-inner-declarations": [
          "error"
        ],
        "no-var": [
          "error"
        ]
        ...

        // 지켜야할 규칙들 선언
    }
};
</code></pre>

- eslint의 기본 설정을 할 수 있는 파일

#### eslint 사용방법

1. eslint [파일명|디렉토리명]

#### eslint 수정
1. eslint [파일명|디렉토리] --fix 사소한에러 수정

#### eslint 동작결과
<img width="" height="" src=""></img>


## 참고자료
- <a href="https://github.com/nhnent/fe.javascript/wiki/%EC%BD%94%EB%94%A9-%EC%BB%A8%EB%B2%A4%EC%85%98#%EB%B8%94%EB%A1%9D-%EA%B5%AC%EB%AC%B8">nhnent 코딩컨벤션</a>
- <a href="https://eslint.org/">eslint</a>

- - -

### Webpack

#### 번들러 사용이유

- 웹 어플리케이션에서 가장 느린 부분은 일반적으로 HTTP Requset. 웹페이지는 수많은 요소(HTML, CSS, JS, Image 등)로 구성되어 있고 http/1.1같은 경우 커넥션 하나를 열어 하나가 전달되면 그 다음 요소를 전달할 수 있기 때문에 비효율적이다. 따라서 가능하면 파일을 나누워서 여러번의 요청 응답을 하는 것보다 하나로 합쳐서 보내는게 현명하다.
- 번들러는 또한 하나로 합쳐진 파일을 유지보수하려면 가독성이 떨어지기 때문에  각각의 파일을 목적에 맞게끔 분리할 수 있도록 하는 역할도 수행한다.
- Webpack은 Requirejs나 Browserify와 같은 자바스크립트 모듈 디펜던시를 관리하는 도구다.


#### 번들러의 역할

- 지정한 단위로 파일들을 하나로 만들어서 요청에 대한 응답으로 전달한다.

#### 번들러의 종류

- RequireJS
- Broswerify

#### webpack이란
- 모듈 로드 및 디펜던시 관리도구

#### 웹팩 특징
- 비교적 최신이며 가장활발하게 업데이트가 이루어진다.

#### 웹팩 설치
- npm install -g webpack

#### 웹팩 wathch모드

- webpack -w
- 프로젝트의 js코드가 수정될때마다 bundle.js파일을 자동으로 만들어준다.

#### webpack.config.js

<pre><code>
module.exports = {
  entry: './src/main.js',
  output: {
    path:__dirname+ ""/dist/"",
    filename: "bundle.js"
  }
};
</code></pre>

#### entry

- 웹팩은 엔트리를 통해서 필요한 모듈을 로딩하고 하나의 파일로 묶는다.
- ./src/main.js가 진입점

#### output

- 엔트리에 설정한 자바스크립트 파일을 시작으로 의존되어 있는 모든 모듈을 하나로 묶는다.
- 번들된 결과물을 처리할 위치 지정
- 위의 경우 a.js, b.js 파일을 읽어 드린 후 ./src/main.js라는 결과물 생성

#### 로더

- 웹팩은 모든 파일을 모듈로 관리한다고 했다. 자바스크립트 파일 뿐만 아니라 이미지, 폰트, 스타일시트도 전부 모듈로 관리한다. 그러나 웹팩은 자바스크립트 밖에 모른다. 비 자바스크립트 파일을 웹팩이 이해하게끔 변경해야하는데 로더가 그런 역할을 한다.

- test에 로딩할 파일 지정
- use에 적용할 로더를 설정

- npm i --save-dev babel-loader babel-core babel-preset-env 설치

<pre><code>
module: {
  rules: [{
    test: /\.js$/,
    exclude: 'node_modules',
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['env']
      }
    }
  }]
}
</code></pre>

-test에 자바스크립트 확장자를 갖는 파일을 정규표현식으로 지정했다. node_moudles 폴더는 패키지 폴더이므로 제외하기 위해서 exclude에 설정한다. use에 로더를 설정하는데 babel-loader 를 추가했다.

## 참고자료

- <a href="https://www.zerocho.com/category/Webpack/post/58aa916d745ca90018e5301d">https://www.zerocho.com/category/Webpack/post/58aa916d745ca90018e5301d</a>
- <a href="https://hyunseob.github.io/2016/04/03/webpack-practical-guide/">https://hyunseob.github.io/2016/04/03/webpack-practical-guide/</a>
- <a href="http://blog.jeonghwan.net/js/2017/05/15/webpack.html">http://blog.jeonghwan.net/js/2017/05/15/webpack.html</a>
- <a href="https://webpack.js.org/">https://webpack.js.org/</a>


- - -

### CommonJS / AMD

#### 등장이유

- 모듈이라는 개념이 부족하여 각 모듈(또는 파일)간의 의존성 처리에 제한이 있다. 고전적인 웹 프로젝트에서 자바스크립트를 사용하는 방법을 살펴보면 HTML 파일내부에 <script> 태그를 삽입하여 모듈을 로드하고 있다. 하지만 이런 방식은 한가지 문제가 있는데, 자바스크립트 파일(또는 모듈)끼리 서로 모듈을 공유하는데 제약이 없다는점이다. 그 이유는 script 태그로 로드된 모듈은 모두 window 객체의 속성이기 때문에 서로 다른 파일에 위치하면서도 모든 객체를 공유할 수 있기 때문이다. 이처럼 각 자바스크립트 파일이 독립적으로 존재하지 못해 발생하는 여러 문제들(예를들어 다른 파일에서 같은 이름의 변수를 사용하는 경우) 때문에 하나의 모듈로 관리하기위한 다양한 패턴(모듈패턴, 즉시실행함수 등)을 사용하여 의존성을 관리할 수 밖에 없었다.

- 이를 해결하기 위한 수단으로 모듈이라는 개념을 도입하여 정의한 방법(또는 표준)이 CommonJs와 AMD이다.

#### CommonJS, AMD 비교

##### CommonJs
<pre><code>
// 종속성을 갖는 모듈인 "package/lib" 는 아래와 같이 require 를 통해 호출해서 변수에 담을 수 있다.
var lib = require( "package/lib" );

// 로드된 종속 모듈은 아래와 같이 사용할 수 있다.
function foo(){
    lib.log( "hello world!" );
}

// 생성된 foo 라는 함수는 exports 라는 명령을 통해 foobar 라는 다른 모듈로 추출될 수 있다.
exports.foobar = foo;
</code></pre>

##### AMD
<pre><code>
// 종속성을 갖는 모듈인 "package/lib" 는 아래와 같이 모듈 선언부 안에
// 종속 라이브러리를 선언하는 첫번째 파라메터에 넣어서 호출할 수 있다.
// 호출된 "package/lib" 는 콜백 함수의 lib 라는 변수에 담긴다.
define(["package/lib"], function (lib) {

    // 로드된 종속 모듈은 아래와 같이 사용할 수 있다.
    function foo() {
        lib.log( "hello world!" );
    }

    // 생성된 foo 라는 함수는 return을 통해 foobar 라는 다른 모듈로 추출될 수 있다.
    return {
        foobar: foo
    }
});
</code></pre>

- 필요한 파일이 모두 로컬 디스크에 있어 바로 불러 쓸 수 있는 상황, 즉 서버사이드에서는 CommonJS 명세가 AMD 방식보다 간결하다. 반면 필요한 파일을 네트워크를 통해 내려받아야 하는 브라우저와 같은 환경에서는 AMD가 CommonJS보다 더 유연한 방법을 제공한다.

- CommonJS는 특유의 동기적인 특성으로 인해 서버사이드 개발 적합, Node.js에서 사용하고 있는 방식
- AMD 비동기적 특성으로 인해 클라이언트 사이드 개발에 더 적합

- CommonJS방식의 대표적인 예는 Browserify
- AMD 방식은 RequireJS

#### CommonJS 문법

##### 정의하기
<pre><code>
// 모듈 전체를 export
module.exports = module;

// 모든 속성을 export
// (아시는 분 알려주세요)

// 함수를 직접 export
exports.moduleFunc = function() {};
</code></pre>

##### 가져오기
<pre><code>
// 모듈 전체를 import
var module = require('./someModule.js');

// 모든 속성 import
// (위의 module 객체에 모든 속성이 담아져 온다.)

// 특정 멤버(함수 등)만 import, 위의 module을 이용한다.
module.moduleFunc
</code></pre>


##### require 실행시 경로를 찾아가는 우선순위

- Y 라는 경로에 있는 모듈에서 require(X) 를 호출했을 경우
  1. 만약 X 가 코어 모듈인 경우, 코어 모듈을 리턴한다. 끝.
  2. 만약 X 가 './' 또는 '/' 또는 '../' 로 시작할 경우
    a. LOAD_AS_FILE(Y + X) 를 시도한다.
	  b. LOAD_AS_DIRECTORY(Y + X) 를 시도한다.
  3. LOAD_NODE_MODULES(X, dirname(Y)) 를 시도한다.
  4. 여기까지 해도 없으면 "not found" 를 던진다.

- LOAD_AS_FILE(X)
  1. 만약 X 가 파일이라면, X 를 자바스크립트 텍스트로 불러온다. 끝.
  2. 만약 X.js 가 파일이면, X.js 를 자바스크립트 텍스트로 불러온다. 끝.
  3. 만약 X.json 이 파일이면, X.json 을 자바스크립트 객체로 불러온다. 끝.
  4. 만약 X.node 가 파일이라면, X.node 를 바이너리로써 추가한다. 끝.

- LOAD_AS_DIRECTORY(X)
  1. 만약 X 라는 이름의 폴더 아래에 package.json 이란 파일이 있으면,
    a. X/package.json 파일을 파싱해서, "main" 필드가 있는지 찾는다.
		b. M = X + 메인 필드
		c. LOAD_AS_FILE(M) 을 시도한다.
  2. 만약 X 라는 이름의 폴더 아래에 index.js 이란 파일이 있으면, X/index.js 파일을 자바스크립트 텍스트로 불러온다. 끝.
  3. 만약 X 라는 이름의 폴더 아래에 index.json 이란 파일이 있으면, X/index.json 파일을 자바스크립트 객체로 불러온다. 끝.
  4. 만약 X 라는 이름의 폴더 아래에 index.node 란 파일이 있으면, X/index.node 파일을 바이너리로써 추가한다. 끝.

- LOAD_NODE_MODULES(X, START)
  1. DIRS = NODE_MODULES_PATHS(START)
  2. DIRS 의 각 DIR 에 대해서,
    a. LOAD_AS_FILE(DIR/X) 를 시도한다.
		b. LOAD_AS_DIRECTORY(DIR/X) 를 시도한다.

- NODE_MODULES_PATHS(START)
  1. PARTS = 전체 경로를 단계별로 분리
  2. I = PARTS 의 갯수
  3. while I >= 0,
    a. 만약 PARTS[I] 가 "node_modules" 이면, I = I - 1 수행 후 CONTINUE
		b. 아니면 DIR = PARTS[0 .. I] 의 경로를 합친 것 + "node_modules"
		c. DIRS = DIRS + DIR
		d. I = I - 1
  4. DIRS 를 리턴한다.


## 참고자료

- <a href="http://d2.naver.com/helloworld/12864">http://d2.naver.com/helloworld/12864</a>
- <a href="http://blog.pigno.se/post/157992405313/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%AA%A8%EB%93%88-%EC%A0%9C%EA%B3%B5%EC%9D%84-%EC%9C%84%ED%95%9C-amd-commonjs-%EA%B7%B8%EB%A6%AC%EA%B3%A0-requirejs-%EC%86%8C%EA%B0%9C">http://blog.pigno.se/post/157992405313/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%AA%A8%EB%93%88-%EC%A0%9C%EA%B3%B5%EC%9D%84-%EC%9C%84%ED%95%9C-amd-commonjs-%EA%B7%B8%EB%A6%AC%EA%B3%A0-requirejs-%EC%86%8C%EA%B0%9C</a>
- <a href="https://blueshw.github.io/2017/05/16/ES-require-vs-import/">https://blueshw.github.io/2017/05/16/ES-require-vs-import/</a>
- <a href="http://programmingsummaries.tistory.com/346">모듈 로딩 순서</a>

- - -

### npm

#### npm이란

- Node.js 로 만든 모듈들을 중앙 저장소에 올려서 공유하는 시스템을 말한다.
- npm install 명령어에는 지역(local) 설치와 전역(global) 설치 옵션이 존재한다.

#### pakage.json

- Node.js 프로젝트에서는 많은 의존 패키지를 사용하게 되고 패키지의 버전도 빈번하게 업데이트되기 때문에 프로젝트가 의존하고 있는 패키지의 관리가 필요하다. npm은 package.json 파일을 통해서 프로젝트 정보와 패키지의 의존성(dependency)을 관리한다.
- 이미 작성된 package.json은 팀 내에 배포하여 동일한 개발 환경을 빠르게 구축할 수 있는 장점을 가진다.

##### name, version

- 가장 중요한 항목으로서 필수
- name과 version을 통해 각 패키지의 고유성을 판별

##### description

- pakage에 대한 설명

##### main
- 프로그램이 시작점이 되는 모듈의 ID
- 즉 'foo'라는 패키지가 있다면, 이 패키지를 사용자가 설치 한 뒤 require("foo")를 실행 했을때 "main"으로 지정한 모듈의 exports 객체가 반환

##### scripts
- 패키지의 생명주기 중 다양한 타이밍에서 실행되는 script 명령들을 포함하고 있는 사전

##### dependencies
- 패키지의 이름과 해당패키지의 버전 범위를 나타낸다.

##### devDependencies
- 테스트관련 모듈이나 트랜스파일러 모듈은 dependencies에 추가하면 안된다. 운영이 아닌 개발단계에서만 필요한 의존성 모듈들은 devDependencies에 설치해야 한다.
- npm install <package> --save-dev

#### npm 주요 CLI 명령어

- npm help, 도움말
- npm init, package.json을 만드는 명령어, 새로운 프로젝트나 패키지를 만들 때 사용.
- npm install
  1. npm install 패키지@버전하면 특정한 버전을 설치
  2. npm install 주소하면 특정한 저장소에 있는 패키지를 설치
  3. 옵션, 뒤에 --save 또는 -S를 하면 dependencies에, --save-dev 또는 -D하면 devDependencies에 추가
  4. -g를 하면 글로벌 패키지에 추가
- npm update, 설치한 패키지를 업데이트
- npm dedupe, npm의 중복된 패키지들을 정리
- npm docs, 패키지에 대한 설명
- npm root, node_modules의 위치
- npm ls, 패키지를 조회하는 명령어

- npm start, package.json의 scripts에 있는 start 명령어를 실행. 만약 start 명령어를 따로 설정하지 않았다면 node server.js가 실행
- npm stop
- npm run, 그 이외의 scripts를 실행하는 명령어. 예를 들어 scripts에 build 명령어가 있다하면, npm run build

#### npm scripts

- pakage.json

<pre><code>
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "build" : "webpack",
  "dev" : "webpack -w"
},
</code></pre>

- npm run build, webpack으로 지정된 파일 번들링

#### SourceMap 개념

- 소스맵은 원본 소스와 난독화된 소스를 매핑해주는 방법 중 하나이다.

##### Webpack SourceMap 설정

- webpack.config.js, devtool: 'source-map' 추가

#### 틸드(~), 캐럿(^)의 용도

##### 틸드(~)
- package.json 의존성 버전 명시를 하는 기호
- 현재 지정한 버전의 마지막 자리 내의 범위에서만 자동으로 업데이트한다.
- ~(틸트)는 패치 버전 범위 내에서 업데이트한다.

1. ~0.0.1 : 0.0.1 <= version < 0.1.0
2. ~0.1.1 : 0.1.1 <= version < 0.2.0

##### 캐럿(^)
- 캐럿(^)은 Node.js 모듈이 이 SemVer의 규약을 따른다는 것을 신뢰한다는 가정하에서 동작한다. 그래서 MINOR나 PATCH버전은 하위호환성이 보장되어야 하므로 업데이트를 한다.
- 틸드와 비교해 보면 차이점은 명확한데 1.x.x내에서는 하위호환성이 보장되므로 그 내에서는 모두 업데이트하겠다는 의미이다.
- ^(캐럿)는 마이너 버전 범위 내에서 업데이트한다.

1. ^0.1.2 : 0.1.2 <= version < 0.2.0
2. ^1.0.2 : 1.0.2 <= version < 2.0

#### Semantic Versioning

##### Versioning 개념
- 여러 사람에게 이용되는 패키지가 새롭게 업데이트될 때, 생각보다 다양한 문제에 직면하게 되었다. 기능의 사용법을 바꾸어버리거나 동작 방식의 변경 같은 변화들은 그에 의존하는 다른 소프트웨어를 의도대로 동작하지 못하게 하므로, 새로운 변화와 기존의 것을 구분할 필요가 생겼다. 버전이라는 개념은 이러한 패키지의 변화를 구분하기 위해 사용하기 시작하였다.

##### Semantic Versioning 개념

- 버전 명의 작성 방식에 관한 기준이 패키지마다 제각각 다른 것이 문제. 0.x와 1.x의 차이, 1.0.0 혹은 1.000. 선행 배포와 정식 버전의 구분 방법 등 모든 소프트웨어, 패키지는 저마다의 기준을 가지고 있었으며, 이는 어느 정도의 적당한 공통점이 있었지만, 그 점이 미묘하게 모두 차이가 있어 버전에 따른 의미 해석을 어렵게 하였다. Semantic Versioning은 위의 문제를 해결하기 위해 기존의 현안을 모아 만든 제안

##### 규칙
1. Semantic Versioning을 쓰는 소프트웨어는 반드시 공개 API를 정의해야 한다.

2. 일반 버전 명은 반드시 X.Y.Z 형태를 보여야 하며 X, Y, Z는 음이 아닌 정수이다. X는 주요한 버전이며, Y는 작은 버전, Z는 패치버전이다. 각 요소는 1씩 차례로 증가해야 한다. 예: 1.9.0 -> 1.10.0 -> 1.11.0.

3. 주요 버전 숫자가 올라갈 때, 작은 버전 숫자와 패치 버전 숫자는 0으로 재설정되어야 한다. 작은 버전 숫자가 올라갈 때, 패치 버전 숫자는 0으로 재설정되어야 한다. 예: 1.1.3 -> 2.0.0, 2.1.7 -> 2.2.0

4. 버전 명이 주어진 패키지가 한번 공개되면, 해당 버전의 내용은 절대 수정되어선 안된다. 어떤 수정도 반드시 새로운 버전으로 공개되어야 한다.

5. 주요 버전 0 (0.y.z)은 초기 개발을 위한 것이다. 언제든 변경될 수 있다. 공개 API는 안전하지 않다고 여긴다.

6. 버전 1.0.0은 공개 API를 정의한다. 이 공개 이후의 버전 숫자가 바뀌는 방법은 공개 API와 변경 방법에 따라 결정된다.


7. Patch, 하위호환을 하지만 버그 수정이 있을 때 올라간다. 버그 수정은 내부적으로 잘못 처리되고 있는 것을 고치는 것을 의미한다.

8. Minor, 새로운 기능이 추가되었지만 기존의 공개 API가 하위호환되고 있을 때 올라간다. 공개 API가 하나 이상 deprecated될 시에도 올라가야 한다. 부가적인 새 기능이나 개선이 내부 코드 (private code)에 있을 시에도 올릴 수 있다. 이는 패치 수준의 변화를 포함할 수 있으나, 작은 버전이 올라가면 패치 버전은 꼭 0이 되어야 한다.

9. Major, 하위호환되지 않는 변화가 추가될 때 반드시 올라가야 한다. 이는 패치 수준과 작은 수준의 변화를 포함할 수 있으나, 주요 버전이 올라가면 작은 버전과 패치 버전은 꼭 0이 되어야 한다.

## 참고자료

- <a href="http://programmingsummaries.tistory.com/385">http://programmingsummaries.tistory.com/385</a>
- <a href="https://spoqa.github.io/2012/12/18/semantic-versioning.html">https://spoqa.github.io/2012/12/18/semantic-versioning.html</a>
- <a href="https://blog.outsider.ne.kr/1041">https://blog.outsider.ne.kr/1041</a>
