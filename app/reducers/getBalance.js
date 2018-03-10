import createReducer from '../lib/createReducer'
import * as types from '../actions/types'


export const getScreen = createReducer('',{
  [types.GET_SCREEN](state, action){
    console.log('reducer state:'+action.screen)
    return action.screen;
  }
});

export const getPostingStep = createReducer(1,{
  [types.GET_POSTING_STEP](state, action){
    console.log('reducer state:'+action.step)
    return action.step;
  }
});

export const getOriginCity = createReducer('',{
  [types.GET_ORIGIN_CITY](state, action){
    console.log('reducer state:'+action.originCity)
    return action.originCity;
  }
});

export const getDestinationCity = createReducer('',{
  [types.GET_DESTINATION_CITY](state, action){
    console.log('reducer state:'+action.destinationCity)
    return action.destinationCity;
  }
});

export const getTripDate = createReducer('',{
  [types.GET_TRIP_DATE](state, action){
    console.log('reducer state:'+action.tripDate)
    return action.tripDate;
  }
});

export const getTripSeats = createReducer(1,{
  [types.GET_TRIP_SEATS](state, action){
    console.log('reducer state:'+action.tripSeats)
    return action.tripSeats;
  }
});
