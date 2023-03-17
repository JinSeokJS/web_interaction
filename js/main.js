// 전역 변수를 사용하지 않기 위해 즉시 호출 함수 사용
(() => {
    
    const sceneInfo =[
        {
            //0
            type: 'sticky', //한 위치에 붙어 애니메이션 실행 -> sticy / 일반 브라우저처럼 스크롤 -> normal
            heightNum: 5, //브라우저 높이의 5배로 scrollHeight 세팅 -> 창 크기 변경에 따른 대응
            scrollHeight: 0, //구간 별 스크롤 높이
            objs: {
                container: document.querySelector('#scroll-section-0')
            }
        },
        {
            //1
            type: 'normal',
            heightNum: 5,
            scrollHeight: 0,
            objs: {
                container: document.querySelector('#scroll-section-1')
            }
        },
        {
            //2
            type: 'sticky',
            heightNum: 5,
            scrollHeight: 0,
            objs: {
                container: document.querySelector('#scroll-section-2')
            }
        },
        {
            //3
            type: 'sticky',
            heightNum: 5,
            scrollHeight: 0,
            objs: {
                container: document.querySelector('#scroll-section-3')
            }
        }
    ];


    function setLayout() {
        //각 스크롤 섹션의 높이 세팅
        for (let i = 0; i < sceneInfo.length; i++) {
            sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
            sceneInfo[i].objs.container.style.height = `${sceneInfo[i].scrollHeight}px`
        }

        console.log(sceneInfo);
    }

    window.addEventListener('resize', setLayout);
    setLayout();

})();