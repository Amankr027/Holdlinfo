const fetchData = () => {
  const tableBody = document.getElementById("table-data");
  while (tableBody.firstChild) {
    tableBody.removeChild(tableBody.firstChild);
  }

  fetch(`http://localhost:2020/`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      data.forEach((item) => {
        const row = createTableRow(item);
        tableBody.appendChild(row);
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

const createTableRow = (item) => {
  const row = document.createElement("tr");

  const idCell = document.createElement("td");
  idCell.innerText = item.id;
  row.appendChild(idCell);

  const nameCell = document.createElement("td");
  nameCell.innerText = item.crypt_name;
  row.appendChild(nameCell);

  const lastPriceCell = document.createElement("td");
  lastPriceCell.innerText =
    String.fromCharCode(0x20b9) + " " + multipleZeroes(Number(item.last_price));
  row.appendChild(lastPriceCell);

  const priceCell = document.createElement("td");
  priceCell.innerText =
    String.fromCharCode(0x20b9) +
    ` ${multipleZeroes(Number(item.buy))} / ` +
    String.fromCharCode(0x20b9) +
    ` ${multipleZeroes(Number(item.sell))}`;
  row.appendChild(priceCell);

  const volumeCell = document.createElement("td");
  volumeCell.innerText = multipleZeroes(Number(item.volume));
  row.appendChild(volumeCell);

  const baseUnitCell = document.createElement("td");
  baseUnitCell.innerText = item.base_unit;
  row.appendChild(baseUnitCell);

  return row;
};

const multipleZeroes = (num) => {
  if (num % 1 === 0) {
    // Number is an integer, do nothing
  } else if (/\d*\.0+$/.test(num.toString())) {
    // Number has multiple decimal digits of 0 and no significant digits after that
    num = Number(num.toFixed(4));
  }
  return num;
};
var clock = 60;
window.setInterval(() => {
  if (clock > 0) clock--;
  document.getElementById("clock").innerHTML = clock;
  if (clock <= 0) clock = 60;
}, 1000);

fetchData();
setInterval(fetchData, 60000);
