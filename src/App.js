/* eslint-disable */

import './App.css';
import {useState} from "react";

function App() {
    // let post = '강남 우동 맛집';
    //[작명, 작함수] = useState('변수')
    let [글제목, 글제목변경] = useState(['남자 코트 추천' ,' 강남 우동 맛집', '파이썬 독학']); //자동 재랜더링 된다
    let [따봉, 따봉변경] = useState(0);

    function 함수(){
        console.log(1);
   }
    /** state 언제쓰냐? 변동시 자동으로 html에 반영되게 만들고싶을때
     *
     * 빡대구리식 정리
     * 자주변경될 거같은 html부분은 state로 만들어놓기
     *
     * onclick={함수이름}
     * 함수만드는 문법 ()=>{}
     *
     * state 변경함수
     * array나 object다룰때는 원본데이터를 보존하는게 좋음
     * [...글제목] 이런식으로,, <-화살표바꿔라
     * 그냥 변수에는 화살표만 저장됨
     * */


  return (
    <div className="App">
        <div className="black-nav">
            <h4>ReactBlog</h4>
        </div>

        <button onClick={()=>{
            let copy = [...글제목];
            copy[0] ='여자 코트 추천';
            글제목변경(copy);
        }}>글수정</button>

        <button onClick={()=>{
            let copy = [...글제목];
            copy.sort();
            글제목변경(copy);
        }}>글정렬</button>

        <div className="list">
            <h4>{글제목[0]} <span onClick={()=>{따봉변경(따봉 + 1)}}>👍</span> {따봉}</h4>
            <p>2월 17일 발행</p>
        </div>
        <div className="list">
            <h4>{글제목[1]}</h4>
            <p>2월 17일 발행</p>
        </div>
        <div className="list">
            <h4>{글제목[2]}</h4>
            <p>2월 17일 발행</p>
        </div>
    </div>
  );
}

export default App;
