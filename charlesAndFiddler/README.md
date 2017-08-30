Charles & Fiddler
===============

(# 본 설명과 실습은 Fiddler를 이용하였습니다.)

### 도구 소개

- Charles & Fiddler는 인터넷 웹페이지 디버깅 도구 이다.
- 기본적으로 브라우저 디버깅 도구가 내장되어 있지만 원하는 값을 더욱더 찾기 쉽게 하기 위해 만들어졌다.
- Fiddler는 유틸 프로그램으로써 사용자 컴퓨터의 프록시 서버역할을 한다.
- Fiddler가 프록시 서버이기 때문에 모든 패킷을 조작하고 감청할 수 있다. 단, 패킷들이 Fiddler 프록시 서버를 통해서 전송하며, HTTP 서비스 프로토콜을 이용한 통신일 경우에서만 가능하다.(패킷이란, 네트워크에서 한 번에 전송하는 정보의 단위)


#### 사용하는 이유

- 이미 배포되어진 콤퍼넌트가 특정 환경의 웹사이트에서 동작이 되지 않는 경우 이를 수정하기 위해서 그와 동일한 환경을 셋팅하는 일은 번거로운 일이다. 클라이언트와 서버간의 요청이나 응답하는 과정에서 피들러는 프록시 서버 역할을 한다. 서버에서 응답해주는 여러 리소스 중 문제가 있따고 판단되는 리소스를 피들러를 통해 수정되어진 로컬에 있는 리소스로 변경하여 테스트 해볼 수 있다. 


#### 프록시란?
- 클라이언트가 특정 서버를 통해서 다른 네트워크 서비스에 간접적으로 접속할 수 있게 해주는 컴퓨터나 응용 프로그램을 프록시 서버라고 한다.

<img width="" height="" src="http://cfile10.uf.tistory.com/image/27107733583965F5087405"></img>

### 기능 설명

#### 모니터링 및 트래픽 조사

- 실행이 되면 아래와 같은 화면이 나온다.
- 좌측 하단에 캡쳐링이 보인다면 캡쳐가 진행되는 중이다.
- 원하는 부분을 캡쳐 후 분석을 하고 싶다면 File > Capture Traffic(F12키)를 눌러 중지한다.

<img width="" height="" src="http://cfile28.uf.tistory.com/image/2315D0445663D3532FFFDC"></img>

#### Inspectors

- 화면의 우측 섹션에 해당하는 부분에서 클라이언트와 서버간의 요청, 응답과 관련된 사항을 볼 수 있다.
- Inspectors 상단에는 요청정보, 하단에는 응답정보를 볼 수 있다.

<img width="" height="" src="http://cfile8.uf.tistory.com/image/244E08445663D356011A0A"></img>

#### Inspectors 상단 - 요청정보

- Header, 요청의 헤더정보
- TextView, 헤더정보를 제외한 요청 본문을 텍스트 형태로 보여준다.
- SyntaxView, 헤더를 제외한 요청 본문을 구문보기 형대로 보여준다.
- WebForms, 웹사이트에서 파라미터로 입력된 값을 확인 할 수 있다.
- HexView, 요청을 HEX값으로 보여준다.
- Auth, 인증 요청과 관련된 정보를 보여준다.
- Cookies, 쿠키와 관련된 사항 확인 가능.
- JSON, JSON형태를 보여준다.
- XML, XML 형태를 보여준다.

#### Inspectors 하단 - 응답정보

- Transfomer, 응답의 압축 상태 변경한다.
- Header, 응답의 헤더정보
- TextView, 헤더를 제외한 응답의 본문을 텍스트 형태로 보여준다.
- SyntaxView, 헤더를 제외한 응답의 본문을 구문보기 형태로 보여준다.
- ImageView, 응답이 이미지인 경우 이미지를 보여준다.
- HexView, 응답을 Hex값으로 보여준다.
- Cookies, 쿠키와 관련된 사항 확인 가능.
- Rows, 가공되지 않은 응답을 보여준다.
- JSON, JSON형태를 보여준다.
- XML, XML 형태를 보여준다.

#### Statistics

- 해당 웹사이트의 접속시간이나 응답시간을 표시한다.

<img width="" height="" src="http://cfile4.uf.tistory.com/image/2219E4445663D35A2CF7E3"></img>


### Breakpoint

- 요청하는 HTTP 패킷을 중간에 피들러가 잡아두고 해당 HTTP 요청이나 응답을 브라우저에게 주기전에 확인 또는 변조를 할 수 있는 기능


#### Breakpoint 3가지 상태

- Before Requests(F11), HTTP 요청을 보내기전에 Breakpoint를 걸어 Request를 분석, 변조를 할 수 있다.
- After Response(ALT + F11), HTTP 응답이 서버에서 돌아와 브라우저에게 가기전에 Response를 조작할 수 있다.
- Disabled(SHIFT + F11), 기본상태


### 실습예제

#### 1. Whatsup main site logo 바꾸기

### 해결방법

1. 캡처링 시작
2. 해당페이지 열기
3. 바꾸고자 하는 파일의 내용을 복사하여 수정한뒤 로컬에 저장
4. AutoResponder 탭으로 바꾸고자 하는 파일을 드래그 한다.
5. enable rules 체크
6. AutoResponder 탭 하단에서 로컬에 변경하고자 하는 파일의 경로 지정후 Save
7. 해당페이지 리프레쉬 

<img width="" height="" src="https://github.com/seyoon-kim/Training/blob/master/charlesAndFiddler/img/exam01.JPG"></img>