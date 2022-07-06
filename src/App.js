/* eslint-disable */

import './App.css';
import {useState} from "react";

function App() {
    // let post = '강남 우동 맛집';
    //[작명, 작함수] = useState('변수')
    let [글제목, 글제목변경] = useState(['남자 코트 추천' ,' 강남 우동 맛집', '파이썬 독학']); //자동 재랜더링 된다
    let [따봉, 따봉변경] = useState([0,0,0]);
    let [modal, setModal] = useState(false);
    let [title, setTitle] = useState(0);
    let [입력값, 입력값변경] = useState(''); //빈문자

    //map
    [1,2,3].map(function (){
        console.log(1); //개수만큼 출력
        return '4'; // return문에 적은거 array에 담아줌 3번담아줌
    });

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
     *
     * 컴포넌트 만드는 방법
     * 1.function 만들고
     * 2.return 안에 html담고
     * 3.<함수명></함수명> 쓰기
     *
     * 컴포넌트 언제쓰면 좋은가?
     * 1.반복적인 html축약
     * 2.큰페이지들
     * 3.자주변경되는 것들
     *
     * 컴포넌트 단점
     * 1.state가져다 쓸때 문제생김
     *
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

            {
                글제목.map(function (a,i){
                    return (
                        <div className="list" key={i}>
                            <h4 onClick={()=>{
                                setModal(!modal);
                                setTitle(i)
                            }}>{글제목[i]} <span onClick={(e)=>{
                                e.stopPropagation();
                                let copy = [...따봉];
                                copy[i] = copy[i] + 1;
                                따봉변경(copy)
                            }}>👍</span> {따봉[i]}

                                <button onClick={(e)=>{
                                    let copy = [...글제목];
                                    copy.splice(i, 1); //글삭제하주아~! i 번째 글 삭제하겠다
                                    글제목변경(copy);
                                    e.stopPropagation();
                                }}>삭제</button>
                            </h4>
                            <p>2월 18일 발행</p>

                        </div>
                    )
                })
            }

            {/*<input type="text"></input>*/}
            {/*<input type="range"></input>*/}
            {/*<input type="checkbox"></input>*/}
            <input onChange={(e)=>{ 입력값변경(e.target.value) }}/>
            <button onClick={()=>{
                let copy = [...글제목];
                copy.unshift(입력값);
                글제목변경(copy)
            }}>글발행</button>

            {
                modal == true ? <Modal title={title} 글제목={글제목} color="skyblue"/> : null
            }
        </div>
    );

    function Modal(props){
        return (
            <div className="modal" style={{ background : props.color }}>
                <h4>{ props.글제목[props.title] }</h4>
                <p>날짜</p>
                <p>상세내용</p>
            </div>
        );
    }
}

export default App;

