function execKobis(sdate) {

  fetch(
    `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=${sdate}`
  )
    .then((Response) => Response.json())
    .then((Kobis) => {
      let showKobis = Kobis.boxOfficeResult;
      let showKobisRankList = Kobis.boxOfficeResult.dailyBoxOfficeList;
      const movieList = `
  <ul>
    <li>박스오피스 타입 - ${showKobis.boxofficeType}</li>  
    <li>박스오피스 일자 - ${showKobis.showRange}</li>  
  </ul>
<table border = 1>
  <tr> 
    <th>순위</th>
    <th>제목</th>
    <th>개봉일</th>
    <th>누적관객수</th>
    <th>누적매출액</th>
  </tr>
  ${showKobisRankList
    .map(
      (
        movie // {} 기능적인 구현을 할때는 중괄호 사용, 지금은 출력만을 위해 작성했기 때문에 {} 사용 x
      ) =>
        `<tr>
      <td>${movie.rank}</td>
      <td>${movie.movieNm}</td>
      <td>${movie.openDt}</td>
      <td>${movie.audiAcc}</td>
      <td>${movie.salesAcc}</td>
    </tr>
    `
    )
    .join("\n")}
  </table>
`;

      //document.getElementById('kobisContent').innerHtML = movieList
      //$('#kobisContent)
      document.querySelector("#kobisContent").innerHTML = movieList;
    }); //
  //.catch() // 에러잡는 함수


  //일별 박스오피스 출력 - 순위, 영화제목, 개봉일, 누적관객수, 누적매출액
  /* console.log(kobis.boxOfficeResult.dailyBoxOfficeList[0].rank);
console.log(kobis.boxOfficeResult.dailyBoxOfficeList[0].movieNm);
console.log(kobis.boxOfficeResult.dailyBoxOfficeList[0].openDt);
console.log(kobis.boxOfficeResult.dailyBoxOfficeList[0].audiAcc);
console.log(kobis.boxOfficeResult.dailyBoxOfficeList[0].salesAcc); */
} // execKobis

/* console.log(`박스오피스 타입 - ${showKobis.boxofficeType}`);
console.log(`일자 - ${showKobis.showRange}`); */

document.addEventListener("DOMContentLoaded", () => {
  execKobis('20230901');

  document.querySelector('#search').addEventListener('click', button => {
    let userNumber = document.querySelector('#searchDate').value
    //button 클릭했을때 active 실행되게 찾아서 해보기
    //연습 방법, 클론코딩 x, 혼자 하다가 막히면 막힌부분만 보고 
    //json으로 바꿔서 해보기 
    execKobis(userNumber);
    
  })
}); //DOM 객체 생성 후 execKobis 함수 호출 -> html 메모리 저장 후 js 실행
