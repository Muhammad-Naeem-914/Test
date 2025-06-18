let btn = document.querySelector("button");
let url = "https://colleges/data/target";

let country = Document.querySelector("input").value;
btn.addEventListener("click", async () => {
  let colArr = await getColleges(country);
  show(colArr);
});

function show(colArr) {
  let list = document.querySelector("#list");
  list.innerText = "";
  for (col of colArr) {
    console.log(col.name);

    let li = document.createElement("li");
    li.innerText = col.name;
    list.appendChild(li);
  }
}

async function getColleges() {
  try {
    let res = await axios.get(url + country);
    return res.data;
  } catch (err) {
    console.log("error :", err);
    return [];
  }
}
