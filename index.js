import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const freecurrencyapi = new Freecurrencyapi('fca_live_HH9za89dIuxk93uz1RECgx9TkuXXVQpBqVDuq4vZ');

export async function getLatestExchangeRate({fromCurrency, targetCurrency, units}) {
    try {   
        const res = await freecurrencyapi.latest({
            base_currency: fromCurrency,
            currencies: targetCurrency
        })
    const data =  res.data[targetCurrency];
    const exchangeRate = data * units;
    return exchangeRate;
       
    //console.log(`Exchange rate from ${fromCurrency} to ${targetCurrency} for ${units} units: ${exchangeRate}`);
    } catch (error) {
        console.error('Error fetching latest exchange rate:', error);
    }
}
