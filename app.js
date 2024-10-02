const btns = document.querySelectorAll('.petrol-cat-btn');
const main2 = document.querySelector('#main2');

const inptLitr = document.querySelector('#inptLitr');
const inptAmount = document.querySelector('#inptAmount');
const BtnCash = document.querySelector('#Cash');
const BtnCard = document.querySelector('#Card');
const endBtn  = document.querySelector('#endBtn');
const btnsPayment = document.querySelectorAll('#cards');
let chek = {};
let petrolPrice = 1;
chek.Name = "92";

btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        chek.Name = btn.textContent;
        inptAmount.value = '';
        inptLitr.value = '';
        btns.forEach((item) => {
            item.classList.remove('active');
        });

        petrolPrice = +btn.value;
        btn.classList.add('active');
    });
});

inptAmount.addEventListener('input', () => {
    let amount = +inptAmount.value;
    let litr = amount / petrolPrice;
    inptLitr.value = litr.toFixed(2);
});

inptLitr.addEventListener('input', () => {
    let litr = +inptLitr.value;
    let amount = litr * petrolPrice; 
    inptAmount.value = amount.toFixed(2);
});

function formatWithLeadingZero(value) {
    return value < 10 ? '0' + value : value;
}

let date = new Date();
let formattedDate = `${formatWithLeadingZero(date.getDate())}/${formatWithLeadingZero(date.getMonth() + 1)}/${date.getFullYear()} ${formatWithLeadingZero(date.getHours())}:${formatWithLeadingZero(date.getMinutes())}:${formatWithLeadingZero(date.getSeconds())}`;

btnsPayment.forEach((btn1) => {
    btn1.addEventListener('click', () => {
        chek.Payment = btn1.textContent;
        btnsPayment.forEach((item) => {
            item.classList.remove('active');
        });
        btn1.classList.add('active');
    });
});

endBtn.addEventListener('click', () => {
    main2.innerHTML = '';

    chek.Date = formattedDate;

    chek.Litr = parseFloat(inptLitr.value).toFixed(2) + " Litr";
    chek.Total = parseFloat(inptAmount.value).toFixed(2) + " Azn";

    for (const key in chek) {
        const span = document.createElement("span");
        span.innerText = ` ${key} : ${chek[key]} `;
        main2.appendChild(span);
    }
});
