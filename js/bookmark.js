// 문서가 로드된 후 실행
document.addEventListener("DOMContentLoaded", () => {
    // 북마크 항목을 모두 선택
    const bookmarks = document.querySelectorAll(".bookmark");
  
    // 각 북마크에 클릭 이벤트 추가
    bookmarks.forEach((bookmark) => {
      bookmark.addEventListener("click", () => {
        // 북마크의 data-destination 속성 값을 읽어 해당 페이지로 이동
        const destination = bookmark.getAttribute("data-destination");
        if (destination) {
          window.location.href = destination; // 클릭 시 해당 페이지로 이동
        } else {
          console.error("Destination not defined for this bookmark");
        }
      });
    });
  });
  