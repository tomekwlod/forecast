import { FETCH_WEATHER } from "../actions/index";

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER:

            // below two lines works exactly the same
            // the first one appends new data to an existing state array using concat - concat doesn't mutate the data!
            // the second one is just ES6 oriented and it prepends a new entry to an array

            // return state.concat([ action.payload.data ])
            return [ action.payload.data, ...state ]
    }

    return state
}