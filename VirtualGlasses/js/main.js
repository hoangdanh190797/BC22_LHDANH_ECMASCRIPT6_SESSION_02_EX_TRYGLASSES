let dataGlasses = [
  {
    id: "G1",
    src: "./img/g1.jpg",
    virtualImg: "./img/v1.png",
    brand: "Armani Exchange",
    name: "Bamboo wood",
    color: "Brown",
    price: 150,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? ",
  },
  {
    id: "G2",
    src: "./img/g2.jpg",
    virtualImg: "./img/v2.png",
    brand: "Arnette",
    name: "American flag",
    color: "American flag",
    price: 150,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio.",
  },
  {
    id: "G3",
    src: "./img/g3.jpg",
    virtualImg: "./img/v3.png",
    brand: "Burberry",
    name: "Belt of Hippolyte",
    color: "Blue",
    price: 100,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    id: "G4",
    src: "./img/g4.jpg",
    virtualImg: "./img/v4.png",
    brand: "Coarch",
    name: "Cretan Bull",
    color: "Red",
    price: 100,
    description: "In assumenda earum eaque doloremque, tempore distinctio.",
  },
  {
    id: "G5",
    src: "./img/g5.jpg",
    virtualImg: "./img/v5.png",
    brand: "D&G",
    name: "JOYRIDE",
    color: "Gold",
    price: 180,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?",
  },
  {
    id: "G6",
    src: "./img/g6.jpg",
    virtualImg: "./img/v6.png",
    brand: "Polo",
    name: "NATTY ICE",
    color: "Blue, White",
    price: 120,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    id: "G7",
    src: "./img/g7.jpg",
    virtualImg: "./img/v7.png",
    brand: "Ralph",
    name: "TORTOISE",
    color: "Black, Yellow",
    price: 120,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam.",
  },
  {
    id: "G8",
    src: "./img/g8.jpg",
    virtualImg: "./img/v8.png",
    brand: "Polo",
    name: "NATTY ICE",
    color: "Red, Black",
    price: 120,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim.",
  },
  {
    id: "G9",
    src: "./img/g9.jpg",
    virtualImg: "./img/v9.png",
    brand: "Coarch",
    name: "MIDNIGHT VIXEN REMIX",
    color: "Blue, Black",
    price: 120,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet.",
  },
];

/*
    data:
            id
            src
            virtualImg
            brand
            name
            color
            price
            description
*/
/*
    dataGlasses - array [{obj1, obj2,...}]
*/
// console.log(dataGlasses[0]); //=> log 1 obj
/*
    Y??U C???U:
        1. HI???N TH??? DANH S??CH K??NH B??N PH???N N???I DUNG TR??I V?? HI???N TH??? H??NH NG?????I M???U N??? B??N N???I DUNG PH???I
        2. KHI NG?????I D??NG NH???P V??O 1 K??NH B??N TR??I, K??NH ???? S??? ???????C G???N V??O H??NH NG?????I M???U N??? V?? HI???N TH???
        TH??NG TIN V??? K??NH ??? B??N D?????I NH??: T??N K??NH, GI??, T??NH TR???NG, M?? T???
*/
/*------------------------------*/
/*  
    first run array and get src
    get src by destructuring
*/
// for (let value of dataGlasses){
//     let {src} = value;
//     console.log(src);
// }
/*
    ???? b??c t??ch nh???ng ph???n c???n l???y ra gi??? loading n?? l??n th??i;
*/
/*------------------------------*/
/*
    fn loadingGlasses l?? n?? ch??? loading to??n b??? ra th??i, kh??ng
    c?? loading c??? th??? 1 h??nh n??o c???.
*/
//

function showimg(idImage) {
  let content = "";
  let content2 = "";
  for (let value of dataGlasses) {
    let { id } = value;
    if (id == idImage) {
      // console.log(value);
      content += `
          <div style="position: relative; top: 25%; z-index: 1;">
              <img class="" width="100px" src="${value.virtualImg}" alt="..." />
          </div>
          `;
      content2 += `
          <div>
            <h3>${value.name} - (${value.color})</h3>
            <h3>${value.price}</h3>
            <p>${value.description}</p>
          </div>
        `;
      document.getElementById("avatar").innerHTML = content;
      document.getElementById("glassesInfo").innerHTML = content2;
    }
  }
}

function loadingGlasses() {
  let content = "";
  console.log(dataGlasses);
  for (let value of dataGlasses) {
    let { src } = value;
    let { id } = value;
    // console.log(id); //N?? ko nh???n clg, ngh?? l?? ko l???y ??c src, id n??!
    //let { virtualImg } = value;
    content += `
        <div>
            <button class="btn btn-light" onclick="showimg('${id}')">
                <img class="img-thumbnail" width="100px" src="${src}" alt="..." />
            </button>
        </div>
        `;
  }
  document.getElementById("vglassesList").innerHTML = content;
}
loadingGlasses();
/*------------------------------*/

/*
    Khi m?? click v?? h??nh ???? th?? n?? link ch??nh x??c ngay h??nh d???ng png t????ng ???ng
*/
