// document.addEventListener(`DOMContentLoaded`, () => {
//     const paragraph = document.querySelector("#DOM");
//     paragraph.addEventListener("click", () => {
//       paragraph.innerHTML = "<h1>checked</h1>";
//     });
//   });


  const naming = {"results":[{"gender":"female","name":{"title":"Mrs","first":"Noélie","last":"Dumas"},"location":{"street":{"number":3512,"name":"Rue Barrier"},"city":"Nanterre","state":"Haute-Loire","country":"France","postcode":24297,"coordinates":{"latitude":"-21.3074","longitude":"55.2026"},"timezone":{"offset":"-2:00","description":"Mid-Atlantic"}},"email":"noelie.dumas@example.com","login":{"uuid":"d3765696-2528-4dce-b455-4ddd12964944","username":"goldenfish855","password":"earnhard","salt":"ulF1Y4Cq","md5":"624af5445f5342f2d1666f589e8eee3a","sha1":"a4636f37fb88c0bd0666674e7d159c34469960b3","sha256":"8412c8f6ac0f281ec293bfecb5fb60032e0cc76ae9193dc62f12413b13f5b1a7"},"dob":{"date":"1992-05-20T06:00:03.283Z","age":31},"registered":{"date":"2018-10-10T17:07:45.569Z","age":4},"phone":"01-54-25-23-57","cell":"06-90-64-54-99","id":{"name":"INSEE","value":"2920493089248 18"},"picture":{"large":"https://randomuser.me/api/portraits/women/8.jpg","medium":"https://randomuser.me/api/portraits/med/women/8.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/8.jpg"},"nat":"FR"}],"info":{"seed":"42a91e3d86fdef9a","results":1,"page":1,"version":"1.4"}}

  console.log(naming.results.phone)