console.log('Running assignment...');

const transactions = require('./simple-transaction-data').data;

// Assignment 1:
const filterFunction = (data) => {
    return data.filter((transaction) => {

        const newDate = parseInt(transaction.transaction_date.substring(0,4));
        const newPrice = parseInt(transaction.price);

        if (transaction.credit_card_company == 'VISA') {

            if(newDate >= 2015) {

                if(newPrice >= 50) {

                    return transaction;
                    
                }
            }
        }
    });
}

// console.log(filterFunction(transactions));

// Assignment 2:
const aboveAverageFunction = (data) => {

    const sum = data.map(item => parseInt(item.price)).reduce((a, b) => a + b, 0);
    const avg = sum / data.length;


    for (let i = 0; i < data.length; i++) {
        data[i].isPriceAboveAverage = data[i].price >= avg;
    }


    return data;
}

console.log(aboveAverageFunction(transactions));