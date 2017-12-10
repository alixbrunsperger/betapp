import 'isomorphic-fetch';

export const fetchGet = (url) => {
    return fetch(url)
        .then(function(response) {
            if (response.status !== 200) {
                return '{"status":' + response.status + ',"error":"' + response.statusText + '"}';
            }
            return response.json();
        })
        .then(function(data) {
            return data;
        }.bind(this));
};

export const clickBetsHandler = (e, changeBets) => {
    const item = e.target;
    const activeItem = item.className.indexOf('active') >=1;
    const betData = item.id.split("_");
    const bet = {
        match_id: parseInt(betData[0]),
        result: (activeItem ? betData[1] : 0),
        price: 0
    }

    const inputs = e.target.parentNode.querySelectorAll("input");
    for(let i=0;i< inputs.length; i++){
        inputs[i].checked=false;
    }
    const labels = e.target.parentNode.querySelectorAll("label");
    for(let i=0;i< labels.length; i++){
        labels[i].classList.remove('active');
    }


    if(activeItem) {
        item.checked = true;
        item.classList.add('active');
    };

    changeBets(bet);
}

export const changeSimplePrice = (e, changeBets, bet) =>{
    bet.price = parseInt(e.target.value);
    changeBets(bet);
}

export const getTotalPrice = (simpleBets, combinedBets) => {
    let totalPrice = 0;
    if(simpleBets && simpleBets.length > 0){
        simpleBets.map((bet) => {
            totalPrice += parseInt(bet.price);
        })
    }
    totalPrice += parseInt(combinedBets.price);

    return totalPrice;
}

export const getTotalGain =(simpleBets, combinedBets, matches) =>{
    let totalGain = 0;
    if(simpleBets && simpleBets.length > 0){
        simpleBets.map((bet) => {
            totalGain += bet.price*matches.find((match)=> parseInt(bet.match_id) === match.id).odds[bet.result];
        })
    }
    totalGain += combinedBets.price*combinedBets.odd;
    return totalGain;
}

export function showHideMoneyHelper(show){
    console.log(show);
    const moneyHelper = document.querySelector('#money-helper');
    if(show){
        moneyHelper.classList.remove('hide');
    } else {
        moneyHelper.classList.add('hide');
    }
    moneyHelper.focus();
}