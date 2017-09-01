Karma Test Runner
===============

# 소개

- 자스민은 테스트 결과 리포트를 HTML이다. 하지만 테스트 자동화 툴인 카르마 를 이용하면 콘솔에서 그 결과를 확인할 수 있다.
- JavaScript는 브라우저 환경에 따라, 테스트 결과가 달라지기 때문에, 실제 브라우저에서 테스트를 꼭 해야만한다. 테스트 러너는 여러 환경에서 동일 테스트를 호출 할 수 있다.

### 설치

#### node 설치
1. npm install node

#### jasmine 설치
1. npm install -g jasmine
2. jasmine init
3. jasmine

#### karma 설치
1. npm install karma --save-dev
2. npm install karma-jasmine karma-core karma-chrome-launcher --save-dev (karma-jasmine 카르마에서 자스민 사용 가능, karma-chrome-launcher 테스트 브라우저로 chrome 사용 가능, jasmine-core 카르마가 자스민을 사용할수 있도록 하는 어댑터 역할)

@만약 설치가 안된다면 npm install -g 설치

#### conf 파일 만들기 (설정파일)
1. karma init

#### karma conf 파일 설명
- frameworks, 사용할 프레임워크를 명시
- files, 테스트 할 자바스크립트 파일과 테스트 코드 파일
- browsers, 실행 시킬 브라우저
- autoWatch, 테스트 종료 후 계속해서 파일 변화를 감지하면서 테스트를 자동으로 재실행하는 옵션

#### 카르마 실행 및 실행결과
1. karma start


#### ajax 테스트
- 자스민에서는 ajax테스트를 위한 jasmine-ajax라이브러리 제공
- npm install -g karma-jasmine-ajax
- karma.conf.js 파일에서 frameworks 'jasmine-ajax' 추가


#### 실습화면

<img width="" height="" src="https://github.com/seyoon-kim/Training/blob/master/karmatestrunner/img/img01.JPG"></img>

- 테스트 실패 화면

<img width="" height="" src="https://github.com/seyoon-kim/Training/blob/master/karmatestrunner/img/img01.JPG"></img>

- 테스트 실패한 spec, 기대값과 결과값이 다르다.

<img width="" height="" src="https://github.com/seyoon-kim/Training/blob/master/karmatestrunner/img/img01.JPG"></img>

- 기대값 수정후 테스트 성공화면

<img width="" height="" src="https://github.com/seyoon-kim/Training/blob/master/karmatestrunner/img/img01.JPG"></img>

- 크롬 개발자 도구 화면