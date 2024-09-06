# Node.js & MongoDB를 이용한 속성 API 프로그램

- `npm init -y` <br>
- `npm i express mongoose body-parser cors dotenv`<br>

## 몽고DB 연결 & 설정

- body-parser를 이용해 json형식 파서하기 <br>
- mongoDB 주소를 입력하여 mongoDB와 연결하기<br>
- `node app.js`로 연결 확인<br>


## Route를 활용한 API 관리

- index.js에<br>
1. 할일 추가 post/tasks<br>
2. 할일 보여주기  get/tasks<br>
3. 할일 수정하기 put/tasks/:id<br>
4. 할일 삭제하기 delete/tasks/:id<br>

- task.api.js에 중복되는 task 관리
- controller로 받은 정보 관리 (req,res)

