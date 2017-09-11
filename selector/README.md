SelectorAPI 구현하기
===============

# 소개

- Selector API의 구현인 querySelector와 querySelectorAll를 직접 구현한다.
- 실제 구현 전에 요구사항에 맞는 TC를 우선 작성 후 공유한다.

## 요구사항
- getElementById, getElementByTagName을 이용해 구현한다. (특정 IE에서 이슈가 있는 getElementByClassName도 직접 구현한다.)
- .class, #id, tag 3개의 셀렉터만 이용할 수 있다.
- 셀렉터의 조합으로 엘리먼트를 찾을 수 있다
- 배열로 엘리먼트를 직접 반환함.

## 고려해야할 사항

### domutil.querySelector()

1. 인자로 검색되어진 엘리멘트 중 해당하는 첫번째 엘리멘트 반환
2. 인자로 검색되어진 엘리멘트가 없는 경우 null 반환

3. 인자가 클래스인 경우 첫번째 엘리멘트 반환
4. 인자가 아이디인 경우 문서내에 아이디가 중복된 경우 첫번째 엘리멘트 반환
5. 인자가 태그이름인 경우 첫번째 엘리멘트 반환

6. (arg01, arg02) 인자가 ','로 구분 되는 경우 첫번쨰 인자 arg01에 해당하는 엘리멘트의 첫번째 엘리멘트만 반환
7. (.class div #id)의 경우 첫번째 class의 엘리멘트의 첫번째 tag의 엘리멘트의 첫번째 ID 값을 반환

### domutil.querySelectorAll()

1. 인자로 검색되어진 엘리멘트 중 해당하는 모든 엘리멘트를 배열로 반환
2. 인자로 검새되어진 엘리멘트가 없는 경우 빈 배열로 반환

3. 인자가 클래스인 경우 모든 엘리멘트를 배열로 반환
4. 인자가 아이디인 경우 문서내에 아이디가 중복된 경우 첫번째 엘리멘트만 배열로 반환
5. 인자가 태그이름인 경우 모든 엘리멘트를 배열로 반환

6. (arg01, arg02) 인자가 ','로 구분 되는 경우 첫번째 인자의 결과물을 배열 값으로 넣어두고 순서대로 결과물을 배열에 넣어둔다.

- - -