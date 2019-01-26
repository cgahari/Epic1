export const FETCH_WHISKIES = 'FETCH_WHISKYS';
export const FETCH_WHISKIES_SUCCESS = 'FETCH_WHISKYS_SUCCESS';
export const FETCH_WHISKIES_FAILURE = 'FETCH_WHISKYS_FAILURE';
export const FETCH_STOCK_PRICE = 'FETCH_STOCK_PRICE';
export const FETCH_STOCK_PRICE_SUCCESS = 'FETCH_STOCK_PRICE_SUCCESS';
export const FETCH_STOCK_PRICE_FAILLURE = 'FETCH_STOCK_PRICE_FAILLURE';

export const fetchWhiskies = () => ({
    type: FETCH_WHISKIES,
});
export const fetchStockPrice = (symbol) =>({
    type: FETCH_STOCK_PRICE,
    payload: symbol
});

export const fetchWhiskiesSuccess = (whiskies) => ({
    type: FETCH_WHISKIES_SUCCESS,
    payload: whiskies
});

export const fetchStockPriceSuccess = (symbol) =>({
    type: FETCH_STOCK_PRICE_SUCCESS,
    payload: symbol
});

export const fetchWhiskiesFailure = (message) => ({
    type: FETCH_WHISKIES_FAILURE,
    payload: message
});

export const fetchStockPriceFaillure = (message) =>({
    type: FETCH_STOCK_PRICE_FAILLURE,
    payload: message
});