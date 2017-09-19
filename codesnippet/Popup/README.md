tui.util.Popup()
===============

## 소개
- popup을 관리하는 클래스

~~~
var popup = tui.util.popup;
~~~

### Members

#### closeWithParentPopup :Object

-

#### openedPopup :Object

- 오픈된 팝업창의 window-contexts를 캐싱한것.

#### postBridgeUrl :string

- IE11 팝업 페이지에 데이터를 보내는 bridge

### Methods


#### close(skipBeforeUnloadopt, popupopt)

- 팝업창 닫기
- parameters
- Name : skipBeforeUnload
- Type : boolean
- Description : <optional> If true, the 'window.onunload' will be null and skip unload event.
- Name : popup
- Type : window-contexts
- Description : <optional> Window-context of popup for closing. If omit this, current window-context will be closed.

#### closeAllPopup(closeWithParent)

- 현재 윈도우창에서 모든 팝업창 닫기
- parameters
- Name : closeWithParet
- Type : boolean
- Description : If true, popups having the closeWithParentPopup property as true will be closed.

#### createForm(action, dataopt, methodopt, targetopt, containeropt) → {HTMLElement}

- 인자로 받은 것들로 hidden form을 만들고 그 폼을 반환한다.
- parameters
- Name : action
- Type : string
- Description : URL for form transmission
- Name : data
- Type : Object
- Description : <optional> Data for form transmission
- Name : method
- Type : string
- Description : <optional> Method of transmission
- Name : target
- Type : string
- Description : <optional> Target of transmission
- Name : container
- Type : HTMLElement
- Description : <optional> Container element of form.
- return : Form element

#### focus(popupName)

- 인자로 받은 이름의 팝업창을 focucing 한다.
- parameters
- Name : popupName
- Type : string
- Description : Name of popup for activation

#### getPopupList(keyopt) → {Object}

- 현재 window창에 등록되어진 팝업리스트를 반환한다.
- parameters
- Name : key
- Type : string
- Description : <optional> The key of popup
- return : Object - popup window list object

#### openPopup(url, options)

- 팝업창을 오픈한다. IE11에서 POST를 통해 데이터를 보낼때 반드시 postBridgeUrl을 사용해야 한다.
- parameters
- Name : url
- Type : string
- Description : popup url
- Name : options
- Type : object
- Description : popup options
