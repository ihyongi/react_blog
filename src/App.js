import './App.css';
import {useState} from "react";

function App() {
    // let post = '강남 우동 맛집';
    //[작명, 작함수] = useState('변수')
    let [글제목,b] = useState(['남자 코트 추천' ,' 강남 우동 맛집', '파이썬 독학']); //자동 재랜더링 된다
    /** state 언제쓰냐? 변동시 자동으로 html에 반영되게 만들고싶을때
     *
     * 빡대가리식 정리
     * 자주변경될 거같은 html부분은 state로 만들어놓기
     * */

  return (
    <div className="App">
        <div className="black-nav">
            <h4>ReactBlog</h4>
        </div>
        <div className="list">
            <h4>{글제목[0]}</h4>
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
