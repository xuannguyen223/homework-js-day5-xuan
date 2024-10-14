// COMMON FUNCTION
const getElement = (selector) => document.querySelector(selector);

// ----------------------- BÀI TẬP 1 -------------------------
// Yêu cầu: In tất cả số nguyên dương lẻ,chẵn < 100

let btnPrintNumber = getElement("#printNumber");
btnPrintNumber.onclick = () => {
  let oddNumber = [];
  let evenNumber = [];
  for (i = 0; i < 100; i++) {
    if (i % 2 === 0) {
      evenNumber.push(i);
    } else {
      oddNumber.push(i);
    }
  }

  getElement(
    "#printNumberResult"
  ).innerHTML = `<span class="text-indigo-500">Số lẻ:</span> ${oddNumber.join(
    " , "
  )} 
  <br> <span class="text-orange-500">Số chẵn:</span> ${evenNumber.join(
    " , "
  )} `;
};

// ----------------------- BÀI TẬP 2 -------------------------
// Yêu cầu: Tính tổng các số chẵn từ 1 đến n. Với n nhập từ người dùng

let btnSumEvenNumber = getElement("#sumEvenNumber");

btnSumEvenNumber.onclick = () => {
  let inputUserNumber = getElement("#userNumber").value * 1;
  let arrayEvenNumber = [];
  let sumEvenNumber = 0;
  for (i = 1; i <= inputUserNumber; i++) {
    if (i % 2 === 0) {
      arrayEvenNumber.push(i);
      sumEvenNumber += i;
    }
  }

  getElement(
    "#sumEvenNumberResult"
  ).innerHTML = `Tổng các số chẵn từ 1 đến số bạn chọn 
  (<span class="font-bold">${inputUserNumber}</span>) là: 
  <span class="text-indigo-500 font-bold">${sumEvenNumber}</span> 
  <span class="text-gray-400 text-xs"> (${arrayEvenNumber.join(" + ")})</span>`;
};

// ----------------------- BÀI TẬP 3 -------------------------
// Có bao nhiêu số chia hết cho 3 từ 0-1000

let btnCountNumber = getElement("#countNumber");

btnCountNumber.onclick = () => {
  let listNumber = [];
  let countNumber = 0;
  for (i = 0; i <= 1000; i++) {
    if (i % 3 === 0) {
      listNumber.push(i);
      countNumber++;
    }
  }

  getElement(
    "#countNumberResult"
  ).innerHTML = `Có <span class="text-indigo-500 font-bold">${countNumber}</span> số chia hết cho 3 từ 0-1000, 
  bao gồm: <span class="text-gray-400 text-xs">${listNumber.join(
    " , "
  )}</span>`;
};

// ----------------------- BÀI TẬP 4 -------------------------
// Hãy viết chương trình khi click vào button sẽ in ra 10 thẻ div.
// Nếu div nào vị trí chẵn thì background màu đỏ và lẻ thì background màu xanh
// Note: vị trí chẵn lẻ ở code sẽ ngược với trên giao diện (do bắt đầu từ 0)

let btnCreateDiv = getElement("#createDiv");

btnCreateDiv.onclick = () => {
  for (i = 0; i <= 9; i++) {
    let createDiv = document.createElement("div");
    if (i % 2 === 0) {
      createDiv.classList.add("blue");
      createDiv.innerHTML = ".";
    } else {
      createDiv.classList.add("pink");
      createDiv.innerHTML = ".";
    }
    btnCreateDiv.closest(".area").appendChild(createDiv);
  }
};

// ----------------------- BÀI TẬP 5 -------------------------
// Yêu cầu: Tìm số nguyên dương nhỏ nhất sao cho: 1+2+…+ n > 10000

let btnFoundN = getElement("#foundN");

btnFoundN.onclick = () => {
  let sum = 0;
  // dùng điều kiện sum + i <= 10000 để khi kết thúc vòng lặp i++ = đúng (sum + i > 10000)
  for (i = 1; sum + i <= 10000; i++) {
    sum += i;
  }
  getElement(
    "#foundNResult"
  ).innerHTML = `Số nguyên dương nhỏ nhất (n) sao cho tổng 1+2+…+ n > 10000 là: 
  <span class="text-indigo-500 font-bold">${i}</span>`;
};

// ----------------------- BÀI TẬP 6 -------------------------
// Viết chương trình nhập vào 2 số x, n, tính tổng: S(n)=x+x^2+x^3+…+x^n (Sử dụng vòng lặp và hàm)

let btnSumSn = getElement("#btnSumSn");

btnSumSn.onclick = () => {
  let baseNumber = getElement("#baseNumber").value * 1;
  let termNumber = getElement("#termNumber").value * 1;
  let sumSn = 0;
  for (n = 1; n <= termNumber; n++) {
    // sumSn += baseNumber ** n;
    sumSn += Math.pow(baseNumber, n);
  }

  getElement(
    "#sumSnResult"
  ).innerHTML = `Tổng S(<span class="font-bold">${termNumber}</span>) 
  với x = <span class="text-orange-500 font-bold">${baseNumber}</span> là: <span class="text-indigo-500 font-bold">${sumSn}</span>`;
};

// ----------------------- BÀI TẬP 7 -------------------------
// Yêu cầu: Nhập vào n. Tính giai thừa 1×2×…×n

let formFactorial = getElement("#factorial");

formFactorial.onsubmit = () => {
  let inputNumber = getElement("#number").value * 1;
  let factorial = 1;
  for (i = 1; i <= inputNumber; i++) {
    factorial *= i;
  }

  getElement(
    "#factorialResult"
  ).innerHTML = `Giá trị của <span class="font-bold">${inputNumber}!</span> là:
 <span class="text-indigo-500 font-bold">${factorial}</span> `;
};

// ----------------------- BÀI TẬP 8 -------------------------
// Yêu cầu:  Viết chương trình có một input, một button.
// Khi click vào button thì in ra các số nguyên từ 1 tới giá trị của input
// Note: số nguyên bao gồm: số nguyên âm, số 0 và số nguyên dương

let formInteger = getElement("#integer");

formInteger.onsubmit = () => {
  let inputInteger = getElement("#inputInteger").value * 1;
  let arrayInteger = [];

  if (inputInteger >= 1) {
    for (i = 1; i <= inputInteger; i++) {
      arrayInteger.push(i);
    }
  } else {
    for (inputInteger; inputInteger <= 1; inputInteger++) {
      arrayInteger.push(inputInteger);
    }
    arrayInteger.reverse();
  }

  getElement("#integerResult").innerHTML = arrayInteger.join(" , ");
};
