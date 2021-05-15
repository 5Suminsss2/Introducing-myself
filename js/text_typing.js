let target= document.querySelector("#dynamic");


function randomString(){
    let stringArr = ["FullStack_Dev","Imaginative","Diligent","Nonquitter"]

    let selectString = stringArr[Math.floor(Math.random()*stringArr.length)];
    let selectStringArr = selectString.split(""); /* 하나씩 쪼개서 배열에 넣기 */

    return selectStringArr; 
}


//타이핑 리셋
function resetTyping() {
    target.textContent = ""; /* target에 있는 문자를 공백처리 */
    dynamic(randomString())
}


//한글자씩 텍스트 출력 함수
function dynamic(randomArr) {

    if(randomArr.length>0){
        target.textContent += randomArr.shift(); /*shift()는 배열에 앞부분 부터 뽑아내는 함수 */
        /*재귀함수로 다 빠져 나갈때까지 출력하게 함 */
        setTimeout(function () {
            dynamic(randomArr);
        },80);
    } else { /*다빠져나가면 호출*/
        setTimeout(resetTyping,3000);
    }
    
}

dynamic(randomString());

/*깜박거리게 할 수 있는 함수 */
function blink(){
    target.classList.toggle("active");
}
/*blink함수를  0.5초마다 실행하라*/
setInterval(blink,500);