# 자바스크립트

### addEventListner
**target.addEventListner(type, listner, useCapture)**

target : 이벤트 리스너를 등록할 DOM노드
type : 이벤트 유형을 뜻하는 문자열
listener : 이벤트가 발생했을 때 처리를 담당하는 콜백 함수의 참조
useCapture : 이벤트 단계

### DOMContentLoaded
- HTML 이 모두 로드되고, DOM 트리가 완성되었지만, 외부 리소스(img etc) 가 아직 로드되어지지 않았을 때
-  DOM 트리가 다 만들어진 후에 돔에 접근이 가능하기때문에, 돔이 생성되기전 돔을 조작하는 자바스크립트 코드가 실행되어 원하지 않는 결과를 내는것을 막을 수 있다.

### removeChild()
- 노드를 삭제하는 것이 아니라, 메모리에 해당 노드는 그대로 존재하며, 부모-자식 관계를 끊어 DOM 트리에서 해제하는 것이다
- 최종적으로 관계를 끊은 해당 노드의 참조를 반환한다.
- 반환 값을 변수에 저장하지 않으면 삭제하는 노드의 참조가 더이상 없기 때문에, 자바스크립트 엔진의 GC(Garbage Collection) 에 의해 잠시 후 메모리에서 삭제된다.
- 반환된 노드 참조를 변수에 담아 다른 DOM 위치에 붙일 수 있다.

(참고) remove()
- remove는 노드를 메모리에서 삭제하고 종료한다
- 제거된 엘리먼트는 자바스크립트 엔진의 GC(Garbage Collection)에 의해 곧 메모리에서 지워진다.

### event.preventDefault()
- 어떤 이벤트를 명시적으로 처리하지 않은 경우, 해당 이벤트에 대한 브라우저의 기본 동작을 실행하지 않도록 지정

### document.createElement()
- HTML 문서에서, Document.createElement() 메서드는 지정한 tagName의 HTML 요소를 만들어 반환합니다.

### Node.textContent
- 'Node'의 속성으로, 해상 노드가 가지고 있는 텍스트 값을 그대로 읽습니다.

(참고) innerHTML 
- 'Element'의 속성으로, 해당 Element의 HTML, XML을 읽어오거나, 설정할 수 있습니다.

(참고) innerText
- 'Element'의 속성으로, 해당 Element 내에서 사용자에게 '보여지는' 텍스트 값을 읽어옵니다.
 
### Element.classList
- 엘리먼트의 클래스 속성의 컬렉션인 활성 DOMTokenList (en-US)를 반환하는 읽기 전용 프로퍼티이다.
(참고) [classList 메서드 종류](https://seokzin.tistory.com/entry/Javascript-classList-%EB%A9%94%EC%84%9C%EB%93%9C-%EC%A2%85%EB%A5%98-remove-add-item-toggle-contains-replace)

### Node.appendChild()
- 한 노드를 특정 부모 노드의 자식 노드 리스트 중 마지막 자식으로 붙입니다.
- DOM 메서드이다
- 문자열로 추가 불가능
- 한 번에 하나의 노드만 추가 가능
- 반환값을 가진다

(참고) append
- 자바스크립트의 함수이다
- 문자열로 추가 가능
- 한 번에 여러 개 문자나 요소 추가 가능
- 반환값을 가지지 않는다

### Element.tagName
- Element (en-US) 인터페이스의 tagName 읽기 전용 속성은 요소에 호출된 태그 명을 가져온다. 예를 들면, 만약 img 요소일 경우, 해당 요소의 tagName 속성의 내용은 "IMG" 가 된다
- HTML 문서에 설계된 DOM 구조에서 가져온 요소는 항시 대소문자로만 이루어진 값을 가져오게 된다.예를 들면, div 객체로 생성한 요소의 tagName 값은 "DIV"가 된다.

---

#HTML

### link rel="stylesheet" href="외부스타일 파일 주소"
- rel은 현재 문서와 링크할 문서의 관계를 뜻한다. 스타일시트를 연결할 때는 stylesheet라고 쓴다.
- href는 링크할 파일 경로. html 문서와 같은 폴더에 있으면 확장자를 포함한 파일명만 써주고, 그렇지 않으면 파일의 주소 전체를 쓴다.

### form
- HTML form 요소는 정보를 제출하기 위한 대화형 컨트롤을 포함하는 문서 구획을 나타냅니다.

### ul
- HTML ul 요소는 정렬되지 않은 목록을 나타냅니다. 보통 불릿으로 표현합니다.

---

#CSS

**Flexbox Layout**
아이템이 배열될 방향인 '주축'을 정할 수 있다.
주축과 수직한 축을 cross axis라 부른다

**justify-content**
flex-start: 요소들을 컨테이너의 왼쪽으로 정렬
flex-end: 요소들을 컨테이너의 오른쪽으로 정렬
center: 요소들을 컨테이너의 가운데로 정렬
space-between: 요소들 사이에 동일한 간격을 둔다.
space-around: 요소들 주위에 동일한 간격을 둔다.

**alighn-items**
flex-start: 요소들을 컨테이너의 꼭대기로 정렬
flex-end: 요소들을 컨테이너의 바닥으로 정렬
center: 요소들을 컨테이너의 세로선 상의 가운데로 정렬
baseline: 요소들을 컨테이너의 시작 위치에 정렬
stretch: 요소들을 컨테이너에 맞도록 늘린다.

**flex-direction**
row: 요소들을 텍스트의 방향과 동일하게 정렬
row-reverse: 요소들을 텍스트의 반대 방향으로 정렬
column: 요소들을 위에서 아래로 정렬
column-reverse: 요소들을 아래에서 위로 정렬

**flex-wrap**
nowrap: 모든 요소들을 한 줄에 정렬
wrap: 요소들을 여러 줄에 걸쳐 정렬
wrap-reverse: 요소들을 여러 줄에 걸쳐 반대로 정렬

**flex-flow**
:flex-direction and flex-wrap 을 간략히 한 속성
예) flex-flow: column wrap;