window.addEventListener("load",()=>{
    const grid = new Isotope("section",{ //배치할 요소들을 감싼 부모요소명
        itemSelector : "article", // 배치할 요소명
        columWidth : "article", // 너비값 구할 요소명
        transitionDuration : "0.5s",// 화면 재배치시 요소가 움직이는 속도
    })

});
// 1단계 :  플러그인 적용하기




//2단계 :  정렬기능 구현하기
const btns = document.querySelectorAll("main ul li");

for(let el of btns){
    el.addEventListener("click", function(e){
        e.preventDefault();

        //클릭한 버튼의 a테그에서 href 속성값을 변수로 저장

        const sort = e.currentTarget.querySelector("a").getAttribute("href");
        
        gird.arrange({
            filter : sort
        });

        
    //모든 버튼을 반복을 돌면서 순간적으로 비활성화하고
        for(let ele of btns){
        ele.classList.remove("on");
    }
    //클릭한 그 대상의 버튼만 활성화시킨다
    e.currentTarget.classList.add("on");

    })
}

