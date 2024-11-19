document.addEventListener('DOMContentLoaded', function () {
  // 초기 상태에서 '다음으로 이동' 버튼 숨기기
  const nextButton = document.getElementById('next-button');
  nextButton.style.display = 'none';

  // '다음으로 이동' 버튼 클릭 이벤트 설정
  nextButton.addEventListener('click', function () {
    window.location.href = 'main-info.html'; // 다음 화면으로 이동
  });

  // 지도 초기화
  initMap();

  // Firebase 인증 상태 변화 감지
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // 로그인 상태
      const uid = user.uid;
      sessionStorage.setItem('uid', uid);
      console.log('UID:', uid);
    } else {
      // 로그아웃 상태
      sessionStorage.removeItem('uid');
      console.log('로그아웃 상태');
      location.href = 'masterlogin.html'; // 로그인 페이지로 이동
    }
  });

  // 페이지 이동 버튼 설정
  document.querySelector('.mypage-button').addEventListener('click', navigateToPage1);
  document.querySelector('.bookmark-button').addEventListener('click', navigateToPage3);
});

// 지도 초기화 및 클릭 이벤트 처리
async function initMap() {
  const position = { lat: 35.1795543, lng: 129.0756416 }; // Example: Busan
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  map = new Map(document.getElementById("map"), {
    zoom: 4,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Busan",
  });

  // 지도 클릭 이벤트 등록
  map.addListener("click", (event) => {
    const clickedLatLng = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    };

    // 위치 정보 저장
    localStorage.setItem("clickedLocation", JSON.stringify(clickedLatLng));
    console.log("Location saved to local storage:", clickedLatLng);

    // AI 서버로 위치 전송
    sendLocationToAI(clickedLatLng);

    // '다음으로 이동' 버튼 표시
    document.getElementById('next-button').style.display = 'block';
  });
}

// AI 서버로 위치 데이터 전송
function sendLocationToAI(location) {
  console.log("Sending location data to AI:", location);

  // 예시로 AI 서버로 POST 요청 보내기
  // 실제 API URL로 변경 필요
  fetch('https://your-ai-api-url.com/location', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ location: location }),
  })
  .then(response => response.json())
  .then(data => console.log('Location data sent successfully:', data))
  .catch(error => console.error('Error sending location data:', error));
}

// 페이지 이동 함수
function navigateToPage1() {
  window.location.href = 'mypage.html'; // 마이페이지로 이동
}

function navigateToPage3() {
  window.location.href = 'bookmark.html'; // 북마크 페이지로 이동
}

document.addEventListener('DOMContentLoaded', function () {
  // 즐겨찾기 버튼 클릭 이벤트
  document.querySelector('.bookmark-button').addEventListener('click', function () {
    window.location.href = 'bookmark.html';  // bookmark.html 페이지로 이동
  });

  // 마이페이지 버튼 클릭 이벤트
  document.querySelector('.mypage-button').addEventListener('click', function () {
    window.location.href = 'mypage.html';  // mypage.html로 이동
  });
});

