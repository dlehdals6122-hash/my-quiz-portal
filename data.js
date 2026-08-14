// data.js (게임 문제 저장소)

const quizDatabase = {
    // 세계 국기 퀴즈 데이터 (적당한 난이도 100개국)
    flags: [
        // 🌏 아시아 & 오세아니아 (25개국)
        { imageUrl: "https://flagcdn.com/w320/kr.png", answers: ["한국", "대한민국", "남한"] },
        { imageUrl: "https://flagcdn.com/w320/kp.png", answers: ["북한", "조선민주주의인민공화국"] },
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
        { imageUrl: "https://flagcdn.com/w320/uz.png", answers: ["우즈베키스탄"] },
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
        { imageUrl: "https://flagcdn.com/w320/za.png", answers: ["남아프리카공화국", "남아공"] },
    ],

    // 2. 나중에 추가할 게임을 위한 빈 공간 (미리 만들어 둡니다)
    pokemon: [],
    football: [] 
};