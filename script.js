let database = [
  {
    id: 1,
    name: "Michael",
    email: "Michael@gmail.com",
    phone: "08152842872",
    address: "Oxford Road B2398",
    where: "Bali",
    many: 2,
    arrivals: "2024-12-18",
    leaving: "2024-12-19",
  },
  {
    id: 2,
    name: "Michael",
    email: "Michael@gmail.com",
    phone: "08152842872",
    address: "Oxford Road B2398",
    where: "Bali",
    many: 2,
    arrivals: "2024-12-18",
    leaving: "2024-12-19",
  },
  {
    id: 3,
    name: "Michael",
    email: "Michael@gmail.com",
    phone: "08152842872",
    address: "Oxford Road B2398",
    where: "Bali",
    many: 2,
    arrivals: "2024-12-18",
    leaving: "2024-12-19",
  },
  {
    id: 4,
    name: "Michael",
    email: "Michael@gmail.com",
    phone: "08152842872",
    address: "Oxford Road B2398",
    where: "Bali",
    many: 2,
    arrivals: "2024-12-18",
    leaving: "2024-12-19",
  },
  {
    id: 5,
    name: "Michael",
    email: "Michael@gmail.com",
    phone: "08152842872",
    address: "Oxford Road B2398",
    where: "Bali",
    many: 2,
    arrivals: "2024-12-18",
    leaving: "2024-12-19",
  },
];

// slider section
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slider");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

//

render();
function render() {
  const form = document.querySelectorAll("#input-box input");

  for (let i = 0; i < database.length; i++) {
    const tbody = document.getElementById("student-list");
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const td4 = document.createElement("td");
    const td5 = document.createElement("td");
    const td6 = document.createElement("td");
    const td7 = document.createElement("td");
    const td8 = document.createElement("td");

    const deleteButton = document.createElement("button");
    const editButton = document.createElement("button");

    deleteButton.innerHTML = "Delete";
    editButton.innerHTML = "Edit";

    td.innerText = database[i].name;
    td1.innerText = database[i].email;
    td2.innerText = database[i].phone;
    td3.innerText = database[i].address;
    td4.innerText = database[i].where;
    td5.innerText = database[i].many;
    td6.innerText = database[i].arrivals;
    td7.innerText = database[i].leaving;
    td8.append(deleteButton, editButton);

    tr.append(td, td1, td2, td3, td4, td5, td6, td7, td8);

    tbody.append(tr);

    deleteButton.addEventListener("click", () => {
      tr.remove();
    });

    editButton.addEventListener("click", () => {
      const data = document.querySelectorAll("#input-box input");
      // console.log(data);

      data[0].value = td.innerText;
      data[1].value = td1.innerText;
      data[2].value = td2.innerText;
      data[3].value = td3.innerText;
      data[4].value = td4.innerText;
      data[5].value = td5.innerText;
      data[6].value = td6.innerText;
      data[7].value = td7.innerText;

      const button = document.getElementById("submit-btn");
      button.addEventListener("click", () => {
        td.innerText = data[0].value;
        td1.innerText = data[1].value;
        td2.innerText = data[2].value;
        td3.innerText = data[3].value;
        td4.innerText = data[4].value;
        td5.innerText = data[5].value;
        td6.innerText = data[6].value;
        td7.innerText = data[7].value;

        //reset
        data[0].value = "";
        data[1].value = "";
        data[2].value = "";
        data[3].value = "";
        data[4].value = "";
        data[5].value = "";
        data[6].value = "";
        data[7].value = "";

        //alert
        // alert(`Berhasil di edit`);
        tr.remove();
      });
    });
  }
}

const button = document.getElementById("submit-btn");
button.addEventListener("click", (event) => {
  masukan(event);
});

function masukan(event) {
  event.preventDefault();
  const data = document.querySelectorAll(`#input-box input`);
  console.log(data);
  for (let i = 0; i < data.length - 1; i++) {
    if (data[i].value.length === 0) {
      return alert(`Mohon diisi dulu yaa kolom ke- ${i + 1}`);
    }
  }

  const deleteButton = document.createElement("button");
  const editButton = document.createElement("button");

  deleteButton.innerHTML = "Delete";
  editButton.innerHTML = "Edit";

  const tbody = document.getElementById("student-list");
  const tr = document.createElement("tr");
  const td = document.createElement("td");
  const td1 = document.createElement("td");
  const td2 = document.createElement("td");
  const td3 = document.createElement("td");
  const td4 = document.createElement("td");
  const td5 = document.createElement("td");
  const td6 = document.createElement("td");
  const td7 = document.createElement("td");
  const td8 = document.createElement("td");

  td.innerText = data[0].value;
  td1.innerText = data[1].value;
  td2.innerText = data[2].value;
  td3.innerText = data[3].value;
  td4.innerText = data[4].value;
  td5.innerText = data[5].value;
  td6.innerText = data[6].value;
  td7.innerText = data[7].value;
  td8.append(deleteButton, editButton);

  tr.append(td, td1, td2, td3, td4, td5, td6, td7, td8);

  tbody.append(tr);

  // alert(`berhasil dimasukan`);

  //reset
  data[0].value = "";
  data[1].value = "";
  data[2].value = "";
  data[3].value = "";
  data[4].value = "";
  data[5].value = "";
  data[6].value = "";
  data[7].value = "";

  deleteButton.addEventListener("click", () => {
    tr.remove();
  });

  editButton.addEventListener("click", () => {
    const data = document.querySelectorAll("#input-box input");
    // console.log(data);

    data[0].value = td.innerText;
    data[1].value = td1.innerText;
    data[2].value = td2.innerText;
    data[3].value = td3.innerText;
    data[4].value = td4.innerText;
    data[5].value = td5.innerText;
    data[6].value = td6.innerText;
    data[7].value = td7.innerText;

    const button = document.getElementById("submit-btn");
    button.addEventListener("click", () => {
      td.innerText = data[0].value;
      td1.innerText = data[1].value;
      td2.innerText = data[2].value;
      td3.innerText = data[3].value;
      td4.innerText = data[4].value;
      td5.innerText = data[5].value;
      td6.innerText = data[6].value;
      td7.innerText = data[7].value;

      //reset
      data[0].value = "";
      data[1].value = "";
      data[2].value = "";
      data[3].value = "";
      data[4].value = "";
      data[5].value = "";
      data[6].value = "";
      data[7].value = "";

      //alert
      // alert(`Berhasil di edit`);
      tr.remove();
    });

    //reset
  });
}
