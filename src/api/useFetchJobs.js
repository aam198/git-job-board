import axios from 'axios';
import { useReducer, useEffect } from 'react';

const BASE_URL = 'https://cors-anywhere.herokuapp.com/https://arbeitnow.com/api/job-board-api'

// const BASE_URL = 'https://arbeitnow.com/api/job-board-api';

const configHeader = {
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
}

// const API_KEY = process.env.REACT_APP_API_KEY;

// const authAxios = axios.create({
//   baseURL: BASE_URL,
//   headers: {
//     Authorization: `${API_KEY}`
//   }
// })

const ACTIONS = {
  MAKE_REQUEST: 'make-request',
  GET_DATA: 'get-data',
  ERROR: 'error',
  UPDATE_HAS_NEXT_PAGE: 'update-has-next-page'
}


function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.MAKE_REQUEST:
      return { loading: true, jobs: [] }
    case ACTIONS.GET_DATA:
      return { ...state, loading: false, jobs: [action.payload.jobs] }
      // Update above back to what it was
    case ACTIONS.ERROR:
      return { ...state, loading: false, error: action.payload.error, jobs: [] }
    case ACTIONS.UPDATE_HAS_NEXT_PAGE:
      return { ...state, hasNextPage: action.payload.hasNextPage }
    default:
      return state
  }
}

export default function useFetchJobs(params, page) {
  const [state, dispatch] = useReducer(reducer, { jobs: [], loading: true })


    //useEffect is used to Reload the page whenever a field on the page is updated or changed, ie. new location or description or page number to repopulate data on the page


    useEffect(() => {
        // So that there aren't a million requests happening or params being searched to bog down performance, cancelToken stops that from happening.
        const cancelToken1 = axios.CancelToken.source()
        
        

        dispatch({ type: ACTIONS.MAKE_REQUEST })

        //axios.get() - a request to the public api url provided, variable was made above, and pass in options / params

        axios.get(BASE_URL, {
          mode: 'no-cors',
          cancelToken: cancelToken1.token,
          params: { markdown: true, page: page, ...params }
        }).then((res) => {
          const data = res.data;
          dispatch({ type: ACTIONS.GET_DATA, 
            payload: {jobs: data.data } }) 
           
            // https://stackoverflow.com/questions/30142361/react-js-uncaught-typeerror-this-props-data-map-is-not-a-function if [res.data] does not work
        }).catch(e => {
          if (axios.isCancel(e)) return
          dispatch({ type: ACTIONS.ERROR, payload: { error: e } }) 
        })

        //Creating New Axios request to organize pages 
        const cancelToken2 = axios.CancelToken.source()
        axios.get(BASE_URL, configHeader,  {
          cancelToken: cancelToken2.token,
          params: { markdown: true, page: page + 1, ...params }
        }).then(res => {
          dispatch({ type: ACTIONS.UPDATE_HAS_NEXT_PAGE, payload: { hasNextPage: res.data.length !== 0 } })  
        }).catch(e => {
          if (axios.isCancel(e)) return
          dispatch({ type: ACTIONS.ERROR, payload: { error: e } }) 
        })

        //Return the cancel function 
        return () => {
          cancelToken1.cancel()
          cancelToken2.cancel()
        }
      }, [params, page])

    return state
}

