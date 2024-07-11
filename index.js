//Utilizando exchangeratesapi

const axios = require('axios');

// setando endpoint e key
const endpoint = 'convert';
const access_key = 'SuaKey';

// Definindo valores
const from = 'EUR';
const to = 'GBP';
const amount = '10';

// Construção da URL
const url = `https://api.exchangeratesapi.io/v1/${endpoint}?access_key=${access_key}&from=${from}&to=${to}&amount=${amount}`;

// Requisição Axios
axios.get(url)
    .then(response => {
        console.log(response.data.result);
    })
    .catch(error => {
        console.error('Erro na conversão:', error.message);
    });

//Utilizando currencyconverterapi

// const axios = require('axios');


// const endpoint = 'convert';
// const access_key = 'SuaKey'; 


// const from = 'EUR';
// const to = 'GBP';
// const amount = '10';


// const url = `https://free.currconv.com/api/v7/${endpoint}?apiKey=${access_key}&q=${from}_${to}&compact=ultra`;

// axios.get(url)
//     .then(response => {
       
//         const conversionRate = response.data[`${from}_${to}`];
//         if (!conversionRate) {
//             throw new Error(`Não é possível obter a taxa de câmbio para ${from} para ${to}`);
//         }

//         const convertedAmount = amount * conversionRate;
//         console.log(`${amount} ${from} é igual a ${convertedAmount.toFixed(2)} ${to}`);
//     })
//     .catch(error => {
//         console.error('Erro na conversão:', error.message);
//     });

