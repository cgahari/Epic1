import {
    FETCH_WHISKIES,
    FETCH_WHISKIES_FAILURE,
    FETCH_WHISKIES_SUCCESS,
    FETCH_STOCK_PRICE,
    FETCH_STOCK_PRICE_SUCCESS,
    FETCH_STOCK_PRICE_FAILLURE
} from '../actions';

const initialState = {
    whiskies: [],
    stockPrice: 0,
    isLoading: false,
    isFetching: false,
    error: null
};

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_WHISKIES:
        console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~action : ',action)
            return {
                ...state,
                // whenever we want to fetch the whiskies, set isLoading to true to show a spinner
                isLoading: true,
                error: null
            };
        case FETCH_WHISKIES_SUCCESS:
        console.log('action : ',action)
            return {
                whiskies: [...action.payload],
                // whenever the fetching finishes, we stop showing the spinner and then show the data
                isLoading: false,
                error: null
            };
        case FETCH_WHISKIES_FAILURE:
        console.log('action : ',action)
            return {
                whiskies: [],
                isLoading: false,
                // same as FETCH_WHISKIES_SUCCESS, but instead of data we will show an error message
                error: action.payload
            };

        case FETCH_STOCK_PRICE:
        console.log('@@@@@@@@@@@@@@@@@@@@action : ',action)
        return {
                ...state,
                isFetching : true,
                error : null
            };
        case FETCH_STOCK_PRICE_SUCCESS:
        console.log('action : ',action)
        return{
                ...state,
                stockPrice: action.payload,
                isFetching : false,
                error : null
            };
        case FETCH_STOCK_PRICE_FAILLURE:
        console.log('action : ',action)
        return {
            ...state,
            stockPrice: 0,
            error: action.payload
        }

        default:
        console.log('action : ',action)
            return state;
    }
}

