// common.js (모든 게임이 함께 쓰는 공통 퀴즈 엔진)

let audioCtx = null;

// [효과음 함수들]
function playTickSound() {
    if (!audioCtx) return;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.frequency.setValueAtTime(1500, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(300, audioCtx.currentTime + 0.05);
    gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.05);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.05);
}

function playCorrectSound() {
    if (!audioCtx) return;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'sine'; 
    osc.frequency.setValueAtTime(600, audioCtx.currentTime); 
    osc.frequency.exponentialRampToValueAtTime(800, audioCtx.currentTime + 0.1); 
    gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.3);
}

function playIncorrectSound() {
    if (!audioCtx) return;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'sawtooth'; 
    osc.frequency.setValueAtTime(300, audioCtx.currentTime); 
    osc.frequency.exponentialRampToValueAtTime(150, audioCtx.currentTime + 0.2); 
    gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.2);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.2);
}

// [게임 상태 변수들]
let gameQuizData = []; 
let currentIndex = 0;  
let score = 0;         
let isAnswerSubmitted = false; 
let isTimerEnabled = false;
let timerInterval = null;
let timeLeft = 10;

function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

function toggleTimerState(checked) { isTimerEnabled = checked; }

function startQuiz() {
    preloadImages();
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === 'suspended') audioCtx.resume();
    
    document.getElementById('quiz-modal').classList.add('hidden');
    
    // HTML에서 선언한 CURRENT_QUIZ_DATA를 가져와서 섞고 20문제 추출
    gameQuizData = shuffleArray(CURRENT_QUIZ_DATA).slice(0, 20);
    currentIndex = 0;
    score = 0;
    
    document.getElementById('end-screen').classList.add('hidden');
    document.getElementById('game-screen').classList.remove('hidden');
    document.getElementById('game-screen').classList.add('flex');
    updateQuestionUI();
}

// 게임 시작할 때 모든 이미지를 미리 메모리에 로드하는 함수
function preloadImages() {
    if (typeof CURRENT_QUIZ_DATA === 'undefined') return;
    CURRENT_QUIZ_DATA.forEach(item => {
        const img = new Image();
        img.src = item.imageUrl; // 👈 여기를 imageUrl로 맞춰주시면 완벽합니다!
    });
}

function startTimer() {
    clearInterval(timerInterval);
    timeLeft = 10;
    document.getElementById('timer-sec').innerText = timeLeft;
    timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById('timer-sec').innerText = timeLeft;
        if (timeLeft <= 5 && timeLeft > 0) playTickSound();
        if (timeLeft <= 0) { clearInterval(timerInterval); handleTimeOut(); }
    }, 1000);
}

function stopTimer() { clearInterval(timerInterval); }

function updateQuestionUI() {
   const currentQuiz = gameQuizData[currentIndex];
    
    document.getElementById('question-number').innerText = `문제 ${currentIndex + 1} / ${gameQuizData.length}`;
    
    const quizImg = document.getElementById('quiz-image');
    quizImg.src = currentQuiz.imageUrl;

    // ⬇️ [핵심] 다음 문제로 갈 때 쪼개졌던 화면을 다시 한 장(w-full)으로 원상 복구!
 const resultFullImg = document.getElementById('result-full-image');
    if (resultFullImg) {
        resultFullImg.classList.add('hidden'); // 우측 풀샷 다시 숨기기
        // 다시 100% 꽉 채우는 화면(object-cover)으로 되돌립니다.
       quizImg.classList.remove('w-1/2', 'object-contain');
        quizImg.classList.add('w-full', 'object-cover');
    }
    const inputArea = document.getElementById('input-area');
    const resultArea = document.getElementById('result-area');
    const inputElement = document.getElementById('answer-input');
    const timerBadge = document.getElementById('timer-badge');
    
    resultArea.classList.remove('flex'); resultArea.classList.add('hidden');
    inputArea.classList.remove('hidden'); inputArea.classList.add('flex');
    inputElement.value = "";
    setTimeout(() => { inputElement.focus(); }, 100);
    isAnswerSubmitted = false; 
    
    if (isTimerEnabled) { timerBadge.classList.remove('hidden'); startTimer(); } 
    else { timerBadge.classList.add('hidden'); }
}

function handleKeypress(event) {
    if (event.isComposing || event.keyCode === 229) return;
    if (event.key === 'Enter') {
        event.preventDefault(); 
        if (!isAnswerSubmitted) checkAnswer(); else moveToNext();
    }
}

function handleTimeOut() {
    if (isAnswerSubmitted) return;
    isAnswerSubmitted = true;
    showResultUI(false, true);
}

function checkAnswer() {
    stopTimer();
    const inputElement = document.getElementById('answer-input');
    const userAnswer = inputElement.value.trim().replace(/\s+/g, ''); 
    if(!userAnswer) return;

    if (userAnswer.toLowerCase() === 'test') {
        document.getElementById('game-screen').classList.remove('flex');
        document.getElementById('game-screen').classList.add('hidden');
        document.getElementById('end-screen').classList.remove('hidden');
        document.getElementById('end-screen').classList.add('flex');
        document.getElementById('final-score').innerText = score;
        return; 
    }

    isAnswerSubmitted = true;
    const currentAnswers = gameQuizData[currentIndex].answers; 
    const isCorrect = currentAnswers.some(ans => ans.replace(/\s+/g, '') === userAnswer);
    showResultUI(isCorrect, false);
}

function showResultUI(isCorrect, isTimeOut = false) {
    const currentQuiz = gameQuizData[currentIndex]; 
    const currentAnswers = currentQuiz.answers; 
    
   // ⬇️ [핵심] 정답 화면에서 이미지를 반반씩 나란히 보여주기
    const quizImg = document.getElementById('quiz-image');
    const resultFullImg = document.getElementById('result-full-image'); 
    
    if (quizImg && currentQuiz.resultImageUrl) {
        if (resultFullImg) {
            // eyes.html 인 경우 (이미지 분할)
            resultFullImg.src = currentQuiz.resultImageUrl;
            resultFullImg.classList.remove('hidden'); // 👈 [추가됨] 숨겨진 오른쪽 풀사진을 짠! 하고 나타나게 하는 핵심 코드입니다.
            
            // w-full과 object-cover(꽉 채우기)를 빼고, w-1/2와 object-contain(풀사진)을 넣습니다.
            // 테두리선(border-r)을 빼고 절반 크기와 비율유지만 남깁니다.
            quizImg.classList.remove('w-full', 'object-cover');       
            quizImg.classList.add('w-1/2', 'object-contain');
        } else {
            // 다른 게임의 경우 (기존처럼 하나만 통째로 바꿈)
            quizImg.src = currentQuiz.resultImageUrl;
        }
    }

    document.getElementById('input-area').classList.remove('flex');
    document.getElementById('input-area').classList.add('hidden');
    document.getElementById('result-area').classList.remove('hidden');
    document.getElementById('result-area').classList.add('flex');
    const resultStatus = document.getElementById('result-status');
    
    if (isCorrect) {
        playCorrectSound();
        resultStatus.innerHTML = `<span class="bg-blue-500 text-white rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-xs sm:text-sm font-black shadow-md">O</span> <span class="text-blue-400">정답!</span>`;
        score++;
    } else if (isTimeOut) {
        playIncorrectSound();
        resultStatus.innerHTML = `<span class="bg-rose-500 text-white rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-xs sm:text-sm font-black shadow-md">X</span> <span class="text-rose-400">시간 초과!</span>`;
    } else {
        playIncorrectSound();
        resultStatus.innerHTML = `<span class="bg-rose-500 text-white rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-xs sm:text-sm font-black shadow-md">X</span> <span class="text-rose-400">오답!</span>`;
    }
    document.getElementById('correct-answer-text').innerText = currentAnswers[0];
    setTimeout(() => { document.getElementById('next-button').focus(); }, 50);
}

function moveToNext() {
    stopTimer();
    currentIndex++;
    if (currentIndex < gameQuizData.length) updateQuestionUI();
    else {
        document.getElementById('game-screen').classList.remove('flex');
        document.getElementById('game-screen').classList.add('hidden');
        document.getElementById('end-screen').classList.remove('hidden');
        document.getElementById('end-screen').classList.add('flex');
        document.getElementById('final-score').innerText = score;
    }
}

// [다시하기 기능]
function resetQuiz() {
    // 종료 화면 숨기기
    document.getElementById('end-screen').classList.remove('flex');
    document.getElementById('end-screen').classList.add('hidden');
    
    // 퀴즈 준비(시작) 모달창 다시 띄우기
    document.getElementById('quiz-modal').classList.remove('hidden');
    
    // 입력창 초기화
    document.getElementById('answer-input').value = "";
}

// [카카오톡 공유 기능]
function shareKakao() {
    // 카카오 SDK가 초기화되지 않았다면 초기화 (본인의 자바스크립트 키 입력 필요!)
    if (!Kakao.isInitialized()) {
        Kakao.init('37145e2d78219a5d4a51baaf7ef0030b'); 
    }

    const shareText = `🌍 ${QUIZ_TITLE}에서 20점 만점에 ${score}점을 받았어요! 당신도 도전해보시겠어요?`;
    // ⬇️ [수정됨] 현재 주소 대신 무조건 index.html로 이동하도록 설정
    const currentPath = window.location.href;
    const shareUrl = currentPath.substring(0, currentPath.lastIndexOf("/")) + "/index.html";

    // ⬇️ [수정됨] 텍스트 영역을 눌러도 링크가 열리도록 'feed' 타입으로 변경
    Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
            title: shareText,
            description: '당신도 지금 도전해보세요!',
            imageUrl: 'https://cdn-icons-png.flaticon.com/512/3407/3407024.png', // 카톡 공유 카드에 뜰 아이콘
            link: {
                mobileWebUrl: shareUrl,
                webUrl: shareUrl,
            },
        },
        buttons: [
            {
                title: '퀴즈 풀러 가기',
                link: {
                    mobileWebUrl: shareUrl,
                    webUrl: shareUrl,
                },
            },
        ],
    });
}