브라우저별 도구 소개
===============

# PC 브라우저별 디버깅 도구 소개

- PC버전의 브라우저 IE, Chrome, Firefox의 디버깅 도구를 알아본다.

## IE 

### 도구 열기

- F12 키를 누르거나 톱니모양 단추를 클릭한 다음 F12 도구를 선택하여 사용 가능

### 도구 특성

- 대부분의 보기에서 특성과 변수를 클릭하여 값 변경 가능
- 특정 태그, ID, 요소, 변수 또는 문자열을 검색 상자에 입력하여 해당항목을 찾을수 있음

<img width="" height="" src="https://i-msdn.sec.s-msft.com/dynimg/IC627574.png"></img>

- 항목을 여러개 찾은 경우 Enter 또는 Shift + Enter를 누르거나 다음 또는 이전 단추를 클릭하여 항목 이동 가능
- 디버깅 창에서 해당 요소를 클릭하거나 Ctr+B를 눌러서 페이지 마우스 커서를 올려 놓으면 해당 요소 테두리 생성

<img width="" height="" src="https://i-msdn.sec.s-msft.com/dynimg/IC654501.png"></img>

### 콘솔을 사용하여 오류 및 상태 보기

- 콘솔이 열려 있으면 코드에 오류가 생기는 경우 오류 내용 확인 가능

<img width="" height="" src="https://i-msdn.sec.s-msft.com/dynimg/IC654522.png"></img>

- 코드에서 콘솔 객체를 사용하여 사용자가 원하는 메시지를 생성 할 수 있다.

<pre><code>
	console.log(message)
	// 사용자가 원하는 메시지 출력
	console.warn(message)
	// 경고 메시지를 출력
	console.error(message)
	// 오류 메시지를 출력
</code></pre>

- 코드에서 보고자 하는 변수를 직접 지정하여 출력할 수 있음.

<pre><code>
	var x = 10;
	console.log("var x = " + x);
	// "var x = 10" 출력
</code></pre>

- 콘솔 탭의 맨 하단에서 콘솔 명령 또는 스크립트 문을 실행 가능

<img width="" height="" src="https://i-msdn.sec.s-msft.com/dynimg/IC627622.png"></img>

### JavaScript 오류 디버그 탭

- F12로 도구를 열고 디버거 탭을 클릭하면 왼쪽 화면에 코드가 오른쪽에 콘솔에 표시
- 브레이크 포인트를 설정하고 지역 변수를 보고 일련의 함수로 이루어진 호출 스택을 표시하려면 디버깅 시작 단추 클릭
- 압축된 스크립트의 경우 보기 좋게 출력하려면 디버거 탭 가운데 상단에 "{}" 아이콘 클릭

### 브레이크 포인트 설정방법

- 브레이크 포인트 설정의 경우 디버거 탭의 소스에서 중단하고자 하는 코드 줄의 왼쪽 여백을 클릭하면 설정 가능, 다시 클릭시 해제(코드가 압축 되어 있는 경우 해당 코드에 마우스 우측 클릭을 브레이크 포인트 설정가능)
- 조건부 브레이크 포인트의 경우 속성이나 변수가 특정 값에 도달할 때 중단할 수 있도록 합니다. 사용방법은 중단점 탭을 연 후 마우스 오른쪽 단추로 클릭하고 조건을 클릭 한 후 조건물을 추가하고 조건이 맞을 경우에 중단 발생
- 브레이크 포인트에서 실행이 중지되면 탐색 단추를 사용하여 프로시저 단위 실행(F10)하거나 프로시저 나가기(Shift+F11)할 수 있음

### 조사식 및 지역 탭 
- 조사식 탭에서는 코드에 있는 변수를 설정 및 조사 할 수 있음
- 지역 탭에서는 현재 범위에 있는 변수만 표시

### 호출 스택
- 호출 스택 탭에서는 함수가 코드에서 호출될 때 거치는 경로를 볼 수 있음.

<img width="" height="" src="https://i-msdn.sec.s-msft.com/dynimg/IC627565.png"></img>

### 이전버전 환경 테스트
- 도구탭의 우측 상단의 문서모드 설정을 통하여 IE 이전버전 환경에서 스크립트를 테스트 할 수 있음.

## Chrome

### 도구 열기

- F12 키를 누르거나 Command+Option+I(Mac) 또는 Control+Shift+I(Windows, Linux)를 눌러서 도구를 연다.

### 브레이크 포인트 설정방법

- 브레이크 포인트 설정의 경우 Souces 패널의 소스에서 중단하고자 하는 코드 줄의 왼쪽 여백을 클릭하면 설정 가능, 다시 클릭시 해제(코드가 압축 되어 있는 경우 해당 코드에 마우스 우측 클릭을 브레이크 포인트 설정가능)
- 도구의 Sources 탭에서 Step into next function call을 클릭하여 함수안에 있는 코드를 한줄식 순차 실행한다.
- Step over next function call의 경우 함수 단위로 실행 한다.
- Step out of current function은 현재 함수를 탈출 한다.

### Event listener 브레이크 포인트

- Event Listener Breakpoints를 클릭하여 섹션에서 원하는 이벤트를 클릭하여 설정한다. 그 후 해당 이벤트를 실행하면 해당하는 이벤트 핸들러의 첫줄에서
자동으로 일시 중지한다.

<img width="" height="" src="https://developers.google.com/web/tools/chrome-devtools/javascript/imgs/dom-change-breakpoint.png?hl=ko"></img>

### DOM change 브레이크 포인트

- DOM이 변경될 떄 브레이크포인트가 발생 하도록 한다.
- Elements tab에서 브레이크 포인트를 발생시키고자 하는 엘리멘트에서 마우스 우클릭 후 각 상황에 맞는 브레이크 포인트를 설정한다
- Subtree modifications, 선택되어진 엘리멘트의 자식이 삭제되거나 추가된 경우 중단
- Attributes modifications, 선택되어진 엘리멘트의 속성이 변경되거나 추가, value값이 변경된 경우 중단
- Node Removal, 선택되어진 엘리멘트가 삭제된 경우 중단

<img width="" height="" src="https://developers.google.com/web/tools/chrome-devtools/javascript/imgs/event-listener-breakpoint.png?hl=ko"></img>

### XHR 브레이크 포인트

- XHR의 URL이 특정 문자열과 일치할 때 중단하려면 Sources 패널의 XHR Breakpoints 창을 사용한다.

<img width="" height="" src="https://developers.google.com/web/tools/chrome-devtools/javascript/imgs/xhr-breakpoint.png?hl=ko"></img>

### 예외 브레이크 포인트

- 예외가 발생한 경우 중단 시키도록 한다.
- Pause on exceptions 버튼 클릭 후 파란색 일 경우 예외 중단 설정

<img width="" height="" src="https://developers.google.com/web/tools/chrome-devtools/javascript/imgs/uncaught-exception.png?hl=ko"></img>


### 변수값 확인

- Watch Expression을 사용하여 시간에 따라 변수 값을 모니터링 가능
- Sources 패널에서 Watch를 클릭, Add Expression을 클릭하여 원하는 변수명을 입력 하면 해당 변수가 변화하는 모습을 볼 수 있음.

<img width="" height="" src="https://developers.google.com/web/tools/chrome-devtools/javascript/imgs/get-started-watch-expression.png?hl=ko"></img>
- Console 탭에서 원하는 변수명을 입력하면 그시점의 변수값을 표시

<img width="" height="" src="https://developers.google.com/web/tools/chrome-devtools/javascript/imgs/get-started-console.png?hl=ko"></img>

## Firefox

### 도구열기

- F12 키를 누르거나 Ctrl + Shift + S(Command+Option+S on OS X)를 눌러서 도구를 연다.

### 브레이크 포인트 설정방법

- 브레이크 포인트 설정의 경우 디버거 탭의 소스에서 중단하고자 하는 코드 줄의 왼쪽 여백을 클릭하면 설정 가능, 다시 클릭시 해제(코드가 압축 되어 있는 경우 해당 코드에 마우스 우측 클릭을 브레이크 포인트 설정가능)
- Play 버튼(F8) 다음 브레이크 포인트 실행
- Step over 버튼(F10) 함수 단위로 실행 한다.
- Step in 버튼(F11) 함수안에 있는 코드를 한줄식 순차 실행한다.
- Step out 버튼(Shift + F11) 현재 함수를 탈출 한다.
- 조건부 브레이크 포인트의 경우 속성이나 변수가 특정 값에 도달할 때 중단할 수 있도록 합니다. 사용방법은 중단점 탭을 연 후 마우스 오른쪽 단추로 클릭하고 조건을 클릭 한 후 조건물을 추가하고 조건이 맞을 경우에 중단 발생

<img width="" height="" src="https://mdn.mozillademos.org/files/14404/debugger-stepping.png"></img>


### DOM 이벤트 브레이크 포인트

- 이벤트 패널을 오픈한 후 DOM과 관련된 이벤트 중 원하는 이벤트를 체크 한 뒤 실행 시키면 해당 이벤트 발생시 코드를 중단한다.

<img width="" height="" src="https://mdn.mozillademos.org/files/13210/debugger-events-pane-annotated.png"></img>

# Mobile 브라우저별 디버깅 도구 소개

## Chrome remote Debugging

### 안드로이드 PC 연결 순서
1. 안드로이드에서 크롬을 설치한다.
2. USB로 PC에 연결한다.
3. 안드로이드 환경설정에서 개발자옵션을 켜고, USB디버깅을 활성화
4. PC에 설치된 크롬에서 기기를 찾는다. (PC의 크롬을 실행한 후 주소창에 chrome://inspect 입력)

### DevTools에서 WebView 열기

- chrome://inspect 페이지는 기기에 디버그 지원 WebView 목록을 표시한다.
- 디버깅을 시작하려면 디버그하려는 WebView 아래에서 inspect를 클릭 후 원격 브라우저 탭에서와 마찬가지로 DevTools를 사용한다.

<img width="" height="" src="https://developers.google.com/web/tools/chrome-devtools/remote-debugging/imgs/webview-debugging.png?hl=ko"></img>


## 참고자료
- <a href="https://msdn.microsoft.com/ko-kr/library/gg699336(v=vs.85).aspx">IE</a>
- <a href="https://developers.google.com/web/tools/chrome-devtools/javascript/?hl=ko">Chrome</a>
- <a href="https://developer.mozilla.org/ko/docs/%EB%8F%84%EA%B5%AC%EB%93%A4/Debugger">Firefox</a>
- <a href="https://developers.google.com/web/tools/chrome-devtools/remote-debugging/?hl=ko">Chrome remote Debugging</a>