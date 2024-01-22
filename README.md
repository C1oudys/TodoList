# <div align="center">MIN's TodoList</div>

## 프로젝트 개요 
React 강의를 토대로 나만의 TodoList 만들어보기.<br>
최대한 강의 내용을 활용하여 코드 구성하기.
<br><br><br>
## 구현 해야할 기능
- UI 구현하기
- Todo 추가 하기
- Todo 삭제 하기
- Todo 완료 상태 변경하기 (완료 ↔ 진행중)
<br><br><br>
## 설치 및 시작 가이드
**1. 저장소를 클론합니다:**
>git clone https://github.com/your-username/todo-list.git
>
**2. 프로젝트 디렉토리로 이동합니다:**
>bash
Copy code
cd todo-list
>
**3. 의존성을 설치합니다:**
>bash
Copy code
npm install
>
**4. 애플리케이션을 시작합니다:**
>bash
Copy code
npm start
>
<br><br>
## 사용법 
**1. 웹 브라우저를 엽니다.<br><br>**
**2. 입력란에 새로운 할일의 제목과 내용을 입력합니다.<br><br>**
**3. "Add" 버튼을 클릭하여 목록에 할일을 추가합니다.<br><br>**
**4. 작업 중 및 완료된 할일을 따로 확인할 수 있습니다.<br><br>**
**5. 할일을 삭제하려면 Delete 버튼을 클릭하세요.<br><br>**
**6. Done 또는 Cancel 버튼을 클릭하여 작업 중 및 완료된 상태를 토글하세요.<br><br>**
<br><br>
## 컴포넌트 분리
![Screen Shot 2024-01-22 at 5 38 01 PM](https://github.com/C1oudys/TodoList/assets/153264541/d9c685c0-963d-4177-943c-47aa9180055f)<br><br>
**InputForm 컴포넌트, Todo카드 컴포넌트, Todo Section 컴포넌트 분리**
<br><br><br>
## 문제 및 개선 사항
**<li>새 Todo 생성시 불변성 문제</li><br>**
개선사항: 기존 상태를 변경하지 않고 새로운 상태를 생성. 이를 위해 전개 연산자(...)를 사용하여 이전 배열의 요소들을 새 배열에 복사하고, 새로운 요소를 추가하는 방식으로 불변성을 유지함으로써 문제 해결.<br><br>
**<li>컴포넌트 분리중 import export 경로 및 이름 중복 문제</li>**<br>
개선사항: 경로 재지정 및 상수 선언 이름 수정으로 해결
<br><br><br>
## Screenshot
![Screen Shot 2024-01-22 at 9 07 20 PM](https://github.com/C1oudys/TodoList/assets/153264541/cd89f72a-f3d4-4981-9510-9c0af8cb0bdc)


