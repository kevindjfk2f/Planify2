document.addEventListener("DOMContentLoaded", () => {
  // 즐겨찾기 버튼 및 섹션 요소 선택
  const bookmarkButton = document.querySelector(".bookmark-button");
  const mainContent = document.getElementById("main-content");
  const bookmarkSection = document.getElementById("bookmark-section");
  const logo = document.getElementById("logo");

  // 즐겨찾기 버튼 클릭 시 이벤트
  bookmarkButton.addEventListener("click", () => {
      // 메인 콘텐츠 숨기기
      mainContent.style.display = "none";
      
      // 북마크 섹션 보이기
      bookmarkSection.style.display = "block";
  });

  // 마이페이지 버튼의 이벤트 추가 (옵션, 다른 콘텐츠로 전환)
  const mypageButton = document.querySelector(".mypage-button");
  if (mypageButton) {
      mypageButton.addEventListener("click", () => {
          alert("마이페이지로 이동 준비 중!");
          // 다른 섹션 표시 로직 또는 페이지 이동 추가 가능
      });
  }
});
