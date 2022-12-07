// ***********************top card ************************//
var cardDataJson = [
  {
    id: "1",
    title: "개인회원",
    subTitle: "신규 +20명",
    number: "2,000",
    imageIcon: "assets/images/icon/person.svg",
  },
  {
    id: "2",
    title: "법인회원",
    subTitle: "신규 +20명",
    number: "2,000",
    imageIcon: "assets/images/icon/block-icon.svg",
  },
  {
    id: "3",
    title: "개인 DID 재발급/폐기",
    subTitle: "&nbsp",
    number: "20/25",
    imageIcon: "assets/images/icon/block-icon.svg",
  },
  {
    id: "4",
    title: "법인 DID 재발급/폐기",
    subTitle: "&nbsp",
    number: "20/25",
    imageIcon: "assets/images/icon/block-icon.svg",
  },
];

var topCard = document.getElementById("dashboardTopCard");
//console.log(topCard, "hello");

const getCardData = (item) => {
  return `
          <div class="col-12 col-lg-6 col-xl-3">
              <div class="card gradient-deepblue card-height"  >
                  <div class="card-body ">
                      <h5 class="card-title">
                          ${item.title}
                      </h5>
                      <div class="my-3" style="display: flex; flex-direction: row;justify-content: space-between;" >
                          <div class="card-icon"  >
                              <img src="${item.imageIcon}" alt="icon"/>
                          </div>
                          <div class="mt-2">
                              <p class=" card-subtitle text-right small-font"> ${item.subTitle}</p>
                              <p class="card-number">${item.number}</p> 
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      `;
};

topCard.innerHTML = cardDataJson.map(getCardData).join("");

// *****************end of top card*******************//

// ******************pill Content card 1*****************//

// pillContentJson = [
//   {
//     text: `Ut enim ad minim veniam, quis nostrud exercitation
//     ullamco laboris nisi ut aliquip ex ea commodo consequat.`
//   },
//   {
//     text: `It uses a dictionary of over 200 Latin words, combined
//     with a handful of model sentence structures, to generate
//     Lorem Ipsum which looks reasonable. The generated Lorem
//     Ipsum is therefore always free from repetition, injected
//     humour, or non-characteristic words etc.`
//   },
//   ];

//   var pillContentCard = document.getElementById("piil-2");

//   const getPillContent = (item) => {
//     return (`
//             <p>${item.text}</p>
//         `)
//     };

//     pillContentCard.innerHTML = pillContentJson.map(getPillContent).join('');

//   // ******************end of pill Content card 1*****************//

//   // ******************pill Content card 2*****************//

// pillContentJson2 = [
//   {
//     text: `Nemo enim ipsam voluptatem quia voluptas sit aspernatur
//     aut odit aut fugit, sed quia consequuntur magni dolores
//     eos qui ratione voluptatem sequi nesciunt. Neque porro
//     quisquam est, qui dolorem ipsum quia dolor sit amet,
//     consectetur, adipisci velit, sed quia non numquam eius
//     modi tempora incidunt ut labore et dolore magnam aliquam
//     quaerat voluptatem.`
//   },
//   ];

//   var pillContentCard2 = document.getElementById("piil-3");

//   const getPillContent2 = (item) => {
//     return (`
//             <p>${item.text}</p>
//         `)
//     };

//     pillContentCard2.innerHTML = pillContentJson2.map(getPillContent2).join('');

// ******************end of pill Content card 2*****************//

// ******************certification card*****************//

certificationJson = [
  {
    title: "우편",
    number: "2000",
  },
  {
    title: "모바일 우편함 ",
    number: "2000",
  },
  {
    title: "예금",
    number: "2000",
  },
  {
    title: "보험",
    number: "2000",
  },
  {
    title: "쇼핑",
    number: "2000",
  },
  {
    title: "포스트페이",
    number: "2000",
  },
];

var certificationCard = document.getElementById("certification-card");

const getcertificationCard = (item) => {
  return `
          <tr>
            <td>${item.title}</td>
        
            <td style="color:#383838; font-size:15px; font-weight: bold;" align="right">${item.number}</td>
          </tr>
      `;
};

certificationCard.innerHTML = certificationJson
  .map(getcertificationCard)
  .join("");

// ******************end of certification card*****************//

// ******************recent Issuance card*****************//

recentIssuanceJson = [
  {
    division: "통계",
    date: "2021.07.14 12:00:00",
    kpdid: "Oxafn__kdf123",
    State: "통계",
  },
  {
    division: "통계",
    date: "2021.07.14 12:00:00",
    kpdid: "Oxafn__kdf123",
    State: "통계",
  },
  {
    division: "통계",
    date: "2021.07.14 12:00:00",
    kpdid: "Oxafn__kdf123",
    State: "통계",
  },
  {
    division: "통계",
    date: "2021.07.14 12:00:00",
    kpdid: "Oxafn__kdf123",
    State: "통계",
  },
  {
    division: "통계",
    date: "2021.07.14 12:00:00",
    kpdid: "Oxafn__kdf123",
    State: "통계",
  },
];

var recentIssuance = document.getElementById("recent-issuance");

const recentIssuanceCard = (item) => {
  return `
          <tr>
            <td>${item.division}</td>
            <td>${item.date}</td>
            <td>${item.kpdid}</td>
            <td>${item.State}</td>
          </tr>
      `;
};

recentIssuance.innerHTML = recentIssuanceJson.map(recentIssuanceCard).join("");

// ******************end of recent Issuance card*****************//

// ******************notice list card*****************//

noticeCardJson = [
  {
    date: "2021.07.14 12:00:00",
    bulletin: "우체국 통합앱 서비스 오픈 신규가입 이벤트 !!",
  },
  {
    date: "2021.07.14 12:00:00",
    bulletin: "우체국 통합앱 서비스 오픈 신규가입 이벤트 !!",
  },
  {
    date: "2021.07.14 12:00:00",
    bulletin: "우체국 통합앱 서비스 오픈 신규가입 이벤트 !!",
  },
  {
    date: "2021.07.14 12:00:00",
    bulletin: "우체국 통합앱 서비스 오픈 신규가입 이벤트 !!",
  },
  {
    date: "2021.07.14 12:00:00",
    bulletin: "우체국 통합앱 서비스 오픈 신규가입 이벤트 !!",
  },
];

var noticeCard = document.getElementById("notice-card");

const noticeCardList = (item) => {
  return `
          <tr class="table-row-top-padding">
            <td >${item.date}</td>
            <td >${item.bulletin}</td>
          </tr>
      `;
};

noticeCard.innerHTML = noticeCardJson.map(noticeCardList).join("");

// ********************end of notice list card************************//
