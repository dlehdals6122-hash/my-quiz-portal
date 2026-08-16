// data.js (게임 문제 저장소)

const quizDatabase = {
    // 세계 국기 퀴즈 데이터 (적당한 난이도 100개국)
    flags: [
        // 🌏 아시아 & 오세아니아 (25개국)
        { imageUrl: "https://flagcdn.com/w320/kr.png", answers: ["한국", "대한민국", "남한"] },
        { imageUrl: "https://flagcdn.com/w320/kp.png", answers: ["북한"] },
        { imageUrl: "https://flagcdn.com/w320/jp.png", answers: ["일본"] },
        { imageUrl: "https://flagcdn.com/w320/cn.png", answers: ["중국"] },
        { imageUrl: "https://flagcdn.com/w320/tw.png", answers: ["대만", "타이완"] },
        { imageUrl: "https://flagcdn.com/w320/mn.png", answers: ["몽골"] },
        { imageUrl: "https://flagcdn.com/w320/vn.png", answers: ["베트남"] },
        { imageUrl: "https://flagcdn.com/w320/th.png", answers: ["태국", "타이"] },
        { imageUrl: "https://flagcdn.com/w320/ph.png", answers: ["필리핀"] },
        { imageUrl: "https://flagcdn.com/w320/id.png", answers: ["인도네시아"] },
        { imageUrl: "https://flagcdn.com/w320/my.png", answers: ["말레이시아"] },
        { imageUrl: "https://flagcdn.com/w320/sg.png", answers: ["싱가포르", "싱가폴"] },
        { imageUrl: "https://flagcdn.com/w320/in.png", answers: ["인도"] },
        { imageUrl: "https://flagcdn.com/w320/np.png", answers: ["네팔"] },
        { imageUrl: "https://flagcdn.com/w320/bd.png", answers: ["방글라데시"] },
        { imageUrl: "https://flagcdn.com/w320/ir.png", answers: ["이란"] },
        { imageUrl: "https://flagcdn.com/w320/iq.png", answers: ["이라크"] },
        { imageUrl: "https://flagcdn.com/w320/sa.png", answers: ["사우디아라비아", "사우디"] },
        { imageUrl: "https://flagcdn.com/w320/ae.png", answers: ["아랍에미리트", "UAE"] },
        { imageUrl: "https://flagcdn.com/w320/uz.png", answers: ["우즈베키스탄", "우즈벡"] },
        { imageUrl: "https://flagcdn.com/w320/au.png", answers: ["호주", "오스트레일리아"] },
        { imageUrl: "https://flagcdn.com/w320/nz.png", answers: ["뉴질랜드"] },

        // 🌍 유럽 (35개국)
        { imageUrl: "https://flagcdn.com/w320/gb.png", answers: ["영국"] },
        { imageUrl: "https://flagcdn.com/w320/fr.png", answers: ["프랑스"] },
        { imageUrl: "https://flagcdn.com/w320/de.png", answers: ["독일"] },
        { imageUrl: "https://flagcdn.com/w320/it.png", answers: ["이탈리아", "이태리"] },
        { imageUrl: "https://flagcdn.com/w320/es.png", answers: ["스페인"] },
        { imageUrl: "https://flagcdn.com/w320/pt.png", answers: ["포르투갈"] },
        { imageUrl: "https://flagcdn.com/w320/nl.png", answers: ["네덜란드"] },
        { imageUrl: "https://flagcdn.com/w320/be.png", answers: ["벨기에"] },
        { imageUrl: "https://flagcdn.com/w320/ch.png", answers: ["스위스"] },
        { imageUrl: "https://flagcdn.com/w320/at.png", answers: ["오스트리아"] },
        { imageUrl: "https://flagcdn.com/w320/gr.png", answers: ["그리스"] },
        { imageUrl: "https://flagcdn.com/w320/tr.png", answers: ["튀르키예", "터키"] },
        { imageUrl: "https://flagcdn.com/w320/ru.png", answers: ["러시아"] },
        { imageUrl: "https://flagcdn.com/w320/ua.png", answers: ["우크라이나"] },
        { imageUrl: "https://flagcdn.com/w320/pl.png", answers: ["폴란드"] },
        { imageUrl: "https://flagcdn.com/w320/cz.png", answers: ["체코"] },
        { imageUrl: "https://flagcdn.com/w320/hu.png", answers: ["헝가리"] },
        { imageUrl: "https://flagcdn.com/w320/hr.png", answers: ["크로아티아"] },
        { imageUrl: "https://flagcdn.com/w320/rs.png", answers: ["세르비아"] },
        { imageUrl: "https://flagcdn.com/w320/se.png", answers: ["스웨덴"] },
        { imageUrl: "https://flagcdn.com/w320/no.png", answers: ["노르웨이"] },
        { imageUrl: "https://flagcdn.com/w320/fi.png", answers: ["핀란드"] },
        { imageUrl: "https://flagcdn.com/w320/dk.png", answers: ["덴마크"] },
        { imageUrl: "https://flagcdn.com/w320/is.png", answers: ["아이슬란드"] },
        { imageUrl: "https://flagcdn.com/w320/ie.png", answers: ["아일랜드"] },

        // 🌎 아메리카 (25개국)
        { imageUrl: "https://flagcdn.com/w320/us.png", answers: ["미국", "미합중국"] },
        { imageUrl: "https://flagcdn.com/w320/ca.png", answers: ["캐나다"] },
        { imageUrl: "https://flagcdn.com/w320/mx.png", answers: ["멕시코"] },
        { imageUrl: "https://flagcdn.com/w320/co.png", answers: ["콜롬비아"] },
        { imageUrl: "https://flagcdn.com/w320/br.png", answers: ["브라질"] },
        { imageUrl: "https://flagcdn.com/w320/cl.png", answers: ["칠레"] },
        { imageUrl: "https://flagcdn.com/w320/ar.png", answers: ["아르헨티나"] },
        { imageUrl: "https://flagcdn.com/w320/uy.png", answers: ["우루과이"] },

        // 🌍 아프리카 (15개국)
        { imageUrl: "https://flagcdn.com/w320/eg.png", answers: ["이집트"] },
        { imageUrl: "https://flagcdn.com/w320/ma.png", answers: ["모로코"] },
        { imageUrl: "https://flagcdn.com/w320/ke.png", answers: ["케냐"] },
        { imageUrl: "https://flagcdn.com/w320/gh.png", answers: ["가나"] },
        { imageUrl: "https://flagcdn.com/w320/sn.png", answers: ["세네갈"] },
        { imageUrl: "https://flagcdn.com/w320/za.png", answers: ["남아프리카공화국", "남아공"] }
    ],

    // 온라인 게임 이름 맞히기 데이터
    games: [
        { answers: ["메이플스토리", "메이플"], imageUrl: "images/onlinegame/maplestory.png" },
        { answers: ["카트라이더", "카트"], imageUrl: "images/onlinegame/kart.png" },
        { answers: ["리그오브레전드", "리오레", "롤"], imageUrl: "images/onlinegame/lol.png" },
        { answers: ["크레이지아케이드", "크아"], imageUrl: "images/onlinegame/ca.png" },
        { answers: ["바람의나라", "바람"], imageUrl: "images/onlinegame/baram.png" },
        { answers: ["스톤에이지", "스톤"], imageUrl: "images/onlinegame/stoneage.png" },
        { answers: ["배틀그라운드", "배그"], imageUrl: "images/onlinegame/battleground.png" },
        { answers: ["오버워치", "옵치"], imageUrl: "images/onlinegame/overwatch.png" },
        { answers: ["던전앤파이터", "던파"], imageUrl: "images/onlinegame/dnf.png" },
        { answers: ["서든어택", "서든"], imageUrl: "images/onlinegame/suddenattack.png" },
        { answers: ["마비노기", "마비"], imageUrl: "images/onlinegame/mabinogi.png" },
        { answers: ["테일즈런너", "테일즈러너", "테런", "테러"], imageUrl: "images/onlinegame/talesrunner.png" },
        { answers: ["알투비트", "알투", "알비", "알빗"], imageUrl: "images/onlinegame/r2beat.png" },
        { answers: ["천하제일상 거상", "거상"], imageUrl: "images/onlinegame/gusang.png" },
        { answers: ["로스트아크", "로아"], imageUrl: "images/onlinegame/rostark.png" },
        { answers: ["아이온"], imageUrl: "images/onlinegame/aion.png" },
        { answers: ["월드 오브 워크래프트", "와우", "WOW", "월오워"], imageUrl: "images/onlinegame/wow.png" },
        { answers: ["사이퍼즈", "싸이퍼즈", "사퍼", "싸퍼"], imageUrl: "images/onlinegame/cypers.png" },
        { answers: ["원신"], imageUrl: "images/onlinegame/genshin.png" },
        { answers: ["이터널 리턴"], imageUrl: "images/onlinegame/eternalreturn.png" },
        { answers: ["발로란트", "발로"], imageUrl: "images/onlinegame/valo.png" },
        { answers: ["로블록스", "로블"], imageUrl: "images/onlinegame/roblox.png" },
        { answers: ["팰월드", "펠월드"], imageUrl: "images/onlinegame/palworld.png" }
    ], // 👈 쉼표(,) 추가

     // 온라인 게임 이름 맞히기 데이터
    oddipics: [
        { answers: ["메이플스토리", "메이플"], imageUrl: "images/onlinegame/maplestory.png" },
        { answers: ["카트라이더", "카트"], imageUrl: "images/onlinegame/kart.png" },
        { answers: ["리그오브레전드", "리오레", "롤"], imageUrl: "images/onlinegame/lol.png" },
        { answers: ["크레이지아케이드", "크아"], imageUrl: "images/onlinegame/ca.png" },
        { answers: ["바람의나라", "바람"], imageUrl: "images/onlinegame/baram.png" },
        { answers: ["스톤에이지", "스톤"], imageUrl: "images/onlinegame/stoneage.png" },
        { answers: ["배틀그라운드", "배그"], imageUrl: "images/onlinegame/battleground.png" },
        { answers: ["오버워치", "옵치"], imageUrl: "images/onlinegame/overwatch.png" },
        { answers: ["던전앤파이터", "던파"], imageUrl: "images/onlinegame/dnf.png" },
        { answers: ["서든어택", "서든"], imageUrl: "images/onlinegame/suddenattack.png" },
        { answers: ["마비노기", "마비"], imageUrl: "images/onlinegame/mabinogi.png" },
        { answers: ["테일즈런너", "테일즈러너", "테런", "테러"], imageUrl: "images/onlinegame/talesrunner.png" },
        { answers: ["알투비트", "알투", "알비", "알빗"], imageUrl: "images/onlinegame/r2beat.png" },
        { answers: ["천하제일상 거상", "거상"], imageUrl: "images/onlinegame/gusang.png" },
        { answers: ["로스트아크", "로아"], imageUrl: "images/onlinegame/rostark.png" },
        { answers: ["아이온"], imageUrl: "images/onlinegame/aion.png" },
        { answers: ["월드 오브 워크래프트", "와우", "WOW", "월오워"], imageUrl: "images/onlinegame/wow.png" },
        { answers: ["사이퍼즈", "싸이퍼즈", "사퍼", "싸퍼"], imageUrl: "images/onlinegame/cypers.png" },
        { answers: ["원신"], imageUrl: "images/onlinegame/genshin.png" },
        { answers: ["이터널 리턴"], imageUrl: "images/onlinegame/eternalreturn.png" },
        { answers: ["발로란트", "발로"], imageUrl: "images/onlinegame/valo.png" },
        { answers: ["로블록스", "로블"], imageUrl: "images/onlinegame/roblox.png" },
        { answers: ["팰월드", "펠월드"], imageUrl: "images/onlinegame/palworld.png" }
    ], // 👈 쉼표(,) 추가

    // 연예인 이목구비 퀴즈 데이터
    eyes: [ // 👈 대괄호([) 시작
        {
            id: 1,
            imageUrl: "images/eyes/jyy1.png",        // 문제용 (이목구비)
            resultImageUrl: "images/eyes/jyy2.png",  // 결과용 (원본 풀샷)
            answers: ["장원영"]
        }, // 👈 1번 문제 끝에 반드시 쉼표(,)를 찍어주세요!
           {
            id: 2,
            imageUrl: "images/eyes/ty1.png",         // 문제 2 
            resultImageUrl: "images/eyes/ty2.png",   // 결과 2풀샷
            answers: ["태연", "김태연"]
        },
           {
            id: 2,
            imageUrl: "images/eyes/gh1.png",         // 문제 2 
            resultImageUrl: "images/eyes/gh2.png",   // 결과 2풀샷
            answers: ["건호", "안건호"]
        },
           {
            id: 2,
            imageUrl: "images/eyes/pms1.png",         // 문제 2 
            resultImageUrl: "images/eyes/pms2.png",   // 결과 2풀샷
            answers: ["박명수"]
        },
           {
            id: 2,
            imageUrl: "images/eyes/jhi1.png",         // 문제 2 
            resultImageUrl: "images/eyes/jhi2.png",   // 결과 2풀샷
            answers: ["정해인"]
        },
        {
            id: 2,
            imageUrl: "images/eyes/bws1.png",         // 문제 2 
            resultImageUrl: "images/eyes/bws2.png",   // 결과 2풀샷
            answers: ["변우석"]
        },
        {
            id: 2,
            imageUrl: "images/eyes/pjh1.png",         // 문제 2 
            resultImageUrl: "images/eyes/pjh2.png",   // 결과 2풀샷
            answers: ["박지훈"]
        },
        {
            id: 2,
            imageUrl: "images/eyes/woni1.png",         // 문제 2 
            resultImageUrl: "images/eyes/woni2.png",   // 결과 2풀샷
            answers: ["원이", "정원이"]
        },
        {
            id: 2,
            imageUrl: "images/eyes/sz1.png",         // 문제 2 
            resultImageUrl: "images/eyes/sz2.png",   // 결과 2풀샷
            answers: ["수지", "배수지"]
        },
        {
            id: 2,
            imageUrl: "images/eyes/bb1.png",         // 문제 2 
            resultImageUrl: "images/eyes/bb2.png",   // 결과 2풀샷
            answers: ["비비", "김형서", "bb", "BB"]
        },
        {
            id: 2,
            imageUrl: "images/eyes/gyj1.png",         // 문제 2 
            resultImageUrl: "images/eyes/gyj2.png",   // 결과 2풀샷
            answers: ["고윤정"]
        },
        {
            id: 2,
            imageUrl: "images/eyes/kd1.png",         // 문제 2 
            resultImageUrl: "images/eyes/kd2.png",   // 결과 2풀샷
            answers: ["카더가든", "차정원"]
        },
        {
            id: 2,
            imageUrl: "images/eyes/ljh1.png",         // 문제 2 
            resultImageUrl: "images/eyes/ljh2.png",   // 결과 2풀샷
            answers: ["이제훈"]
        },
        {
            id: 2,
            imageUrl: "images/eyes/hrr1.png",         // 문제 2 
            resultImageUrl: "images/eyes/hrr2.png",   // 결과 2풀샷
            answers: ["한로로"]
        },
         {
            id: 2,
            imageUrl: "images/eyes/kge1.png",         // 문제 2 
            resultImageUrl: "images/eyes/kge2.png",   // 결과 2풀샷
            answers: ["김고은"]
        },
         {
            id: 2,
            imageUrl: "images/eyes/cyw1.png",         // 문제 2 
            resultImageUrl: "images/eyes/cyw2.png",   // 결과 2풀샷
            answers: ["추영우"]
        },
         {
            id: 2,
            imageUrl: "images/eyes/sgj1.png",         // 문제 2 
            resultImageUrl: "images/eyes/sgj2.png",   // 결과 2풀샷
            answers: ["서강준"]
        },
         {
            id: 2,
            imageUrl: "images/eyes/cew1.png",         // 문제 2 
            resultImageUrl: "images/eyes/cew2.png",   // 결과 2풀샷
            answers: ["차은우"]
        },
        {
            id: 2,
            imageUrl: "images/eyes/iu1.png",         // 문제 2 
            resultImageUrl: "images/eyes/iu2.png",   // 결과 2풀샷
            answers: ["아이유", "이지은", "iu", "IU"
            ]
        },
        {
            id: 2,
            imageUrl: "images/eyes/hh1.png",         // 문제 2 
            resultImageUrl: "images/eyes/hh2.png",   // 결과 2풀샷
            answers: ["하하", "하동훈"]
        },
        {
            id: 2,
            imageUrl: "images/eyes/ssg1.png",         // 문제 2 
            resultImageUrl: "images/eyes/ssg2.png",   // 결과 2풀샷
            answers: ["신세경"]
        },
        
    ]



};