# 1장 자바스크립트의 개요
자바스크립트 : 웹 브라우저에서 동작하는 프로그래밍 언어

#### 컴파일 언어 vs 인터프리터 언어

컴파일 언어 : 소스 코드[코드] **여러 개를 하나로 묶어서** 컴파일[기계어로 번역하는 행위]한 후에 실행하는 프로그래밍 언어
(예) C, C++, Java, Objective C

장점 : 빠른 실행 속도 / 단점 : 컴파일 시간 오래 걸림

인터프리터 언어 : 프로그램을 **한 줄마다** 기계어로 번역해서 실행하는 프로그래밍 언어
(예) 자바스크립트, LISP, Perl, Ruby, Python

장점 : 프로그램 바로 실행, 동작을 확인해가며 개발 / 단점 : 처리 속도 느림

#### 프로그래밍 언어
1. 절차적 언어  : 절차를 순서대로 처리
2. 객체 지향 언어   : 데이터와 절차를 하나로 묶어 객체 단위로 관리
3. 함수형 언어  : 프로그램을 함수로 조합하여 구현
4. 논리형 언어  : 데이터 사이의 관계와 논리를 설명

####자바스크립트 특징
1. 인터프리터 언어
2. 동적 프로토타입 기반 객체 지향 언어
: 클래스가 아닌 프로토타입을 상속
->> 클래스 X -> 상속 불가능 but, 프로토타입 -> 객체와 상속관계 가능
: 객체를 생성한 후에도 프로퍼티와 메서드를 동적으로 추가하거나 삭제 가능

3. 동적 타입 언어
: 프로그램을 실행하는 도중에 변수에 저장되는 데이터 타입 바뀔 수 있음
4. 함수가 일급 객체
: 함수는 객체, 함수에 함수를 인수로 넘길 수 있음
5. 함수가 클로저(closure)를 정의
> 클로저(closure)란?
: 일반적으로 어떤 함수가 자신의 내부가 아닌 외부에서 선언된 변수에 접근하는 것

---

# 2장 프로그램의 작성법과 실행법
#### HTML 문서에 삽입하여 웹 브라우저로 실행하기
HTML 요소와 CSS 스타일을 제어X[순수자바스크립트] : script 요소를 **body 요소**의 자식 요소로 배치
HTML 요소와 CSS 스타일을 제어O : script 요소를 **head 요소**의 자식 요소로 배치

- 다른 자바스크립트 파일에 작성하기
: <script src="다른 파일의 경로"></script>

#### 프로그램 작성법
1. 문자코드 : 유니코드 문자
> 유니코드 문자란?
: 전 세계의 모든 문자를 다루도록 설계된 표준 문자 전산 처리 방식

> 문자코드 종류
: ASCII 코드, 확장 ASCII, 유니코드, EUC-KR 코드 등
[참고사이트](https://gaeng-stroy.tistory.com/163)

2. 대문자와 소문자 : A와 a는 다른 문자열
3. 토큰 : 프로그램을 구성하는, 의미를 가지는 최소한의 문자 덩어리
4. 문장 : return문, break문, continue문 등을 사용할 때는 줄 바꿈을 하지 말고 모두 한 줄로 작성

---

#3장 변수와 값
####변수
1. 변수란? 값을 담는 상자
2. 변수 선언
    **var sum;**   // → var : 선언자, sum : 변수 이름

    <br>**var 변수1, 변수2;**  // → 쉼표(,)로 여러 개의 변수를 한 번에 선언 가능

    var x;
    console.log(x); // → undefined (이유)변수 정의X
    
    <br>**var x = 5;** // → 변수 선언 동시에 초깃값 설정

<br>

3. 변수 명명 규칙
사용할 수 있는 문자 : 알파벳, 숫자, 밑줄, **달러 기호($)**
    
- 일반적 표기법
  - 상수는 대문자로 표현 (예) MAX_SIZE
  - 논리값을 표현하는 변수에는 이름 앞에 is를 붙인다 (예) isMouseDown
  - 생성자 이름을 붙일 때는 파스칼 표기법을 사용한다


####데이터 타입
- 원시타입 → 불변값
  1. 숫자
  : 정수, 부동소수점 타입 구분X
  : 모든 숫자를 64비트 부동소수점으로 표현
  
  2. 문자열
  3. 논리값
  : true, false
  4. 특수한 값(undefined, null)
  : undefined → 값을 할당하지 않은 결과
  : null → **아무것도 없음**을 값으로 표현한 리터럴
  [undefined와 null의 차이](https://2ssue.github.io/common_questions_for_Web_Developer/docs/Javascript/13_undefined&null.html#undefined)
  5. 심벌
  : 자기 자신을 제외한 그 어떤 값과도 다른 유일무이한 값<br>
    5.1 심벌의 생성
        - Symbol()을 사용해서 생성한다
            **var sym1 = Symbol();**
        - Symbol()은 호출할 때마다 새로운 값을 만든다
            var sym1 = Symbol();
            var sym2 = Symbol();
            console.log(sym1 == sym2); // → false
        - Symbol()에 인수를 전달하면 생성된 심벌의 설명을 덧붙일 수 있다
            var HEART = Symbol("하트");
            console.log(HEART.toString()); // → Symbol(하트)
<br>
- 객체 타입 → 가변값

---

# 4장 객체와 배열, 함수의 기초

객체 : 데이터 여러 개를 하나로 모은 복합 데이터
프로퍼티 : 객체에 포함된 데이터 하나(이름과 값의 쌍)

#### 객체 생성1 : by 객체 리터럴
**var card = {suit: "하트", rank: "A" };**
→ {}, 즉 객체 리터럴을 변수 card에 대입

- 프로퍼티 값 읽기
card.suit   // → 하트
card["rank"]    // → A
card.color  // → undefined 
<br>
- 프로퍼티 추가/삭제
card.value = 14;    // **없는 프로퍼티 이름에 값을 대입**하면 새로운 프로퍼티 추가*
console.log(card);  // → Object {suit: "하트", rank: "A", value: 14 }<br>
delete card.rank;   // **delete 연산자**를 이용해 프로퍼티 삭제*
console.log(card);  // → Object {suit: "하트", value: 14 }

- in 연산자
: true/false 반환
 ※ 조사하는 대상 : 객체가 가진 프로퍼티 & 객체가 상속받은 모든 프로퍼티

#### 함수
**function square(x) { return x * x;}**
→ function 키워드를 사용해서 함수 정의

#### let 선언자
: 블록 유효 범위를 갖는 지역 변수 선언
- let문으로 똑같은 이름을 가진 변수 선언하면 문법 오류
- 변수 끌어올림X

#### const 선언자
: 블록 유효 범위를 가지면서 한 번만 할당할 수 있는 변수(상수) 선언
※ 단, 반드시 초기화 해야 함 (예) const c = 2;
※ 상수 값이 객체 이거나 배열일 경우 프로퍼티 수정 가능

#### 함수 생성 : by 함수 리터럴
**var square function(x) { return x * x;};**
→ function(x) {...} : 함수 리터럴 / 익명 함수 / 무명 함수

#### 객체 생성2 : by 생성자
(예)
function Card(suit, rank){
    this.suit = suit;
    this.rank = rank;
}   // → 생성자

var card = **new** Card("하트", "A"); // → 객체[인스턴스] 생성
console.log(card);  // → Card {suit: "하트", rank: "A"}

#### 객체 분류
1. 네이티브 객체 : ECMAScript 사양에 정의된 객체
2. 호스트 객체 : ECMAScript에는 정의되어 있지 않지만 자바스크립트 실행 환경에 정의된 객체
3. 사용자 정의 객체

#### 배열 생성1 : 배열 리터럴
**var evens = [2, 4, 6, 8];**

#### 배열 생성2 : Array 생성자
**var evens = new Array(2, 4, 6, 8);**
※Array 생성자의 인수가 한 개 & 양의 정수 → 인수만큼의 길이의 배열 생성

#### 희소배열
: 배열의 요소가 연속적으로 이어져 있지 않는 배열

---

# 5장 표현식과 연산자
#### 관계 연산자
|연산자|뜻|
|------|--|
|=== 일치 연산자|값과 타입이 같음|
|!== 불일치 연산자|값과 타입이 다름|

#### 동일 연산자 vs 일치 연산자
1. 동일 연산자
1.1 좌우 피연산자의 타입이 다를때
    - undefined와 null은 같은 것으로 친다
    - 한쪽이 숫자고 다른 한쪽이 문자열이면 **문자열을 숫자로 변환**해서 비교
    - 한쪽이 객체고 다른 한쪽이 숫자 또는 문자열이면 객체를 toString이나 valueOf 메서드를 사용해서 원시 타입으로 변환한 다음에 비교
    - 앞의 규칙에서 벗어나면 모두 '같지 않음'으로 판정 

2. 일치 연산자
: **타입을 변환하지 않은 상태**의 두 값을 비교
※ NaN은 NaN을 포함한 모든 값과 같지 않다고 판정. 즉 NaN === NaN // → false

#### 논리 연산자
|연산자|뜻|예제|예제의 뜻|단락 평가|
|------|--|---|---------|--------|
|&&|논리곱|a && b|a와 b가 모두 true면 true, 그 외에는 false|a가 false면 a값(false) 반환, true면 b값 반환|
|::|논리합|a :: b|a와 b 중 하나라도 true면 true, 모두가 false면 false|a가 true면 a값(true) 반환, false면 b값 반환|
|!|부정|!a|a가 true면 false, false면 true|

#### 조건( ?: ) 연산자
: 주어진 조건의 참/거짓에 따라 값 선택

---

# 6장 웹 브라우저에서의 입출력
#### 대화상자
alert : 경고 대화상자를 표시
prompt : 사용자의 문자열 입력을 받는 대화상자를 표시
confirm : [확인] 버튼과 [취소] 버튼이 있는 대화상자를 표시 // 확인 : true, 취소 : false

#### 함수를 이벤트 처리기로 등록하는 방법
1. HTML 요소의 속성으로 등록하는 방법
2. DOM 요소의 프로퍼티로 등록하는 방법
3. addEventListener 메서드를 사용하는 방법

#### 타이머 
1. **지정된 시간이 흐른 후에 (한 번만 호출되는) 함수 실행하기 : setTimeout**
: setTimeout('실행하고자 하는 함수의 참조', '지연 시간');

※ 지연 시간은 밀리초 단위로 지정 (예) 2000 == 2초
※ 지정된 함수 즉시 실행X, 현재 실행 중인 이벤트 처리기의 작업이 끝나기를 기다렸다가 가능한 빨리 실행

2. **지정된 시간마다 반복해서 실행하기 : setInterval**
: setTimeout('실행하고자 하는 함수의 참조', '시간 간격');

#### Canvas
: 즉시 실행형 저수준 [API](https://blog.wishket.com/api%EB%9E%80-%EC%89%BD%EA%B2%8C-%EC%84%A4%EB%AA%85-%EA%B7%B8%EB%A6%B0%ED%81%B4%EB%9D%BC%EC%9D%B4%EC%96%B8%ED%8A%B8/)

저수준 : 기본적인 기능만 제공 
즉시 실행형 : 호출 즉시 실행, 그림 상태를 저장하는 중간 데이터 계층 없음

#### Canvas 기본 사용법
1. canvas 요소를 배치
2. canvas 요소의 객체 가져오기
3. 렌더링 컨텍스트 가져오기
: getContext 메서드 사용
: 변수 이름 ctx는 관례
4. 그림 그리기

#### 사각형 그리기
- 사각형 테두리 그리기 : strokeRect(x, y, width, height)
- 사각형 채우기 : fillRect(x, y, width, height)
- 사각형 영역을 지우고 투명하게 만들기 : clearRect(x, y, width, height)

#### [패스로 그리기[경로 그리기]](https://developer.mozilla.org/ko/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes)
1. beginPath 메서드 호출
2. 패스를 정의하는 메서드 호출
3. closePath 메서드 호출
4. 패스를 Canvas에 그리기

#### 그래픽스 속성 설정
- 색상 설정 : strokeStyle(선 색상), fillStyle(채우기 색상)
- 투명도 설정 : globalAlpha
    → 모든 도형의 투명도 설정
    → 0~1값 / 0:완전 투명, 1:완전 불투명
- 선 두께 설정 : lineWidth
- 패스 종단점 모양의 설정 : lineCap (butt / square / round)
- 패스 정점의 설정 : lineJoin (miter / round / bevel)

---

# 7장 제어 구문
: 순차적 실행 흐름을 변화시키는 문장

#### 조건문
1. if/else 문
2. switch 문

#### 반복문
1. while 문
2. do/while 문
3. for 문
4. for/in 문
    **for (변수 in 객체 표현식) 문장**
    객체 표현식이 
    → null / undefined : for/in문을 빠져나와 다음 작업으로 이동 
    → 객체 : 객체 프로퍼티 이름이 변수에 할당, 각 프로퍼티에 대해 문장이 한번씩 실행

#### 점프문
1. 라벨문
    **라벨이름 : 문장**

2. break 문
: switch 문과 반복문 안에서만 사용 가능
**break 라벨 이름;**
→ 라벨이 붙은 문장 끝으로 점프

3. continue 문
: 반복문 안에서만 사용 가능
**continue 라벨 이름;**