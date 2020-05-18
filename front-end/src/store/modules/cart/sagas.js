import { call, put, all, takeLatest } from 'redux-saga/effects';

// call -> chama metodos asincronos que retornam promises
// put -> dispara uma action do redux
// all -> cadastra varios listeners (Verifica quando uma action e disparada)
// takeLatest -> pega sempre a ultima chamada, descartando as anteriores (Counterar usuários que clicam muitas vezes)

import { addToCartSuccess } from './actions';

import api from '../../../services/api';

//funtion* === generator  ->  async funtion
function* addToCart(action) {
  const { payload: id } = action;
  const response = yield call(api.get, `/products/${id}`); // yield === await

  yield put(addToCartSuccess(response.data));
}

export default all([takeLatest('@cart/ADD_REQUEST', addToCart)]);
