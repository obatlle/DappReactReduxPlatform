import * as types from './types'

import {
  AsyncStorage,
} from 'react-native'


export function getScreen(screen){
  return {
    type: types.GET_SCREEN,
    screen,
  }
}

export function getPostingStep(step){
  return {
    type: types.GET_POSTING_STEP,
    step,
  }
}

export function getOriginCity(originCity){
  return {
    type: types.GET_ORIGIN_CITY,
    originCity,
  }
}

export function getDestinationCity(destinationCity){
  return {
    type: types.GET_DESTINATION_CITY,
    destinationCity,
  }
}

export function getTripDate(tripDate){
  return {
    type: types.GET_TRIP_DATE,
    tripDate,
  }
}

export function getTripSeats(tripSeats){
  return {
    type: types.GET_TRIP_SEATS,
    tripSeats,
  }
}
