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
    YÊU CẦU:
        1. HIỂN THỊ DANH SÁCH KÍNH BÊN PHẦN NỘI DUNG TRÁI VÀ HIỆN THỊ HÌNH NGƯỜI MẪU NỮ BÊN NỘI DUNG PHẢI
        2. KHI NGƯỜI DÙNG NHẤP VÀO 1 KÍNH BÊN TRÁI, KÍNH ĐÓ SẼ ĐƯỢC GẮN VÀO HÌNH NGƯỜI MẪU NỮ VÀ HIỆN THỊ
        THÔNG TIN VỀ KÍNH Ở BÊN DƯỚI NHƯ: TÊN KÍNH, GIÁ, TÌNH TRẠNG, MÔ TẢ
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
    Đã bóc tách những phần cần lấy ra giờ loading nó lên thôi;
*/
/*------------------------------*/
/*
    fn loadingGlasses là nó chỉ loading toàn bộ ra thôi, không
    có loading cụ thể 1 hình nào cả.
*/
// 

function showimg(idImage) {
    let content = "";
    for (let value of dataGlasses) {
      let { id } = value;
      if (id == idImage) {
        // console.log(value);  
        content += `
          <div style="position: relative; top: 25%; z-index: 1;">
              <img class="" width="100px" src="${value.virtualImg}" alt="..." />
          </div>
          `;
          document.getElementById("avatar").innerHTML = content;
      }
    }
  }

function loadingGlasses() {
    
  let content = "";
  console.log(dataGlasses);
  for (let value of dataGlasses) {
    let { src } = value;
    let { id } = value;
    // console.log(id); //Nó ko nhận clg, nghĩ là ko lấy đc src, id nè!
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
    Khi mà click vô hình đó thì nó link chính xác ngay hình dạng png tương ứng
*/