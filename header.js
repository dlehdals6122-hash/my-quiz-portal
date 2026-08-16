// header.js
document.addEventListener("DOMContentLoaded", function() {
    // 1. 공통 헤더 HTML (모든 페이지 적용)
    const headerHTML = `
        <header class="w-full max-w-4xl flex justify-between items-center py-4 px-4 sm:px-0 mb-2 shrink-0 mx-auto">
            <!-- 왼쪽 홈 로고 -->
            <a href="index.html" class="flex items-center hover:opacity-90 transition-opacity">
                <img src="images/branding/logo.png" alt="퀴즈팡 로고" class="h-8 sm:h-10 object-contain">
            </a>
            
            <!-- 우측 메뉴 버튼 -->
            <button onclick="toggleMenu()" class="text-white text-2xl sm:text-3xl font-bold p-1 hover:opacity-80 transition-opacity ml-auto">
                ⋮
            </button>
        </header>
    `;

    const headerContainer = document.getElementById('header-container');
    if (headerContainer) {
        headerContainer.innerHTML = headerHTML;
    }

    // 2. 공통 메뉴 팝업 창 생성 (모든 페이지 적용)
    if (!document.getElementById('menu-popup')) {
        const popupHTML = `
            <div id="menu-popup" class="hidden fixed inset-0 bg-black/70 z-[100] flex items-center justify-center p-4 backdrop-blur-sm">
                <div class="bg-white w-64 p-6 rounded-2xl shadow-2xl relative">
                    <button onclick="toggleMenu()" class="absolute top-4 right-4 text-2xl text-slate-500 hover:text-slate-800">&times;</button>
                    <ul class="space-y-4 font-bold text-lg text-center mt-4">
                        <li><a href="notice.html" class="block hover:text-[#4369C6] transition-colors">공지사항</a></li>
                        <li><a href="contact.html" class="block hover:text-[#4369C6] transition-colors">건의사항</a></li>
                        <li><a href="terms.html" class="block hover:text-[#4369C6] transition-colors">약관</a></li>
                    </ul>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', popupHTML);
    }

    // 3. 메인 페이지 전용 검색 기능 연결
    setTimeout(() => {
        const searchInput = document.getElementById('searchInput');
        const cards = document.querySelectorAll('.quiz-card');
        const noResultMsg = document.getElementById('no-result');

        if (searchInput && cards.length > 0) {
            searchInput.addEventListener('input', function(e) {
                const searchTerm = e.target.value.toLowerCase().trim();
                let visibleCount = 0;

                cards.forEach(card => {
                    const tags = card.getAttribute('data-tags').toLowerCase();
                    const title = card.querySelector('h2').innerText.toLowerCase();

                    if (tags.includes(searchTerm) || title.includes(searchTerm)) {
                        card.style.display = 'flex';
                        visibleCount++;
                    } else {
                        card.style.display = 'none';
                    }
                });

                if (noResultMsg) {
                    if (visibleCount === 0) {
                        noResultMsg.classList.remove('hidden');
                    } else {
                        noResultMsg.classList.add('hidden');
                    }
                }
            });
        }
    }, 100);
});

// 메뉴 열고 닫는 공통 함수
function toggleMenu() {
    const popup = document.getElementById('menu-popup');
    if (popup) {
        popup.classList.toggle('hidden');
    }
}