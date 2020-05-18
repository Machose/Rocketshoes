import { call, select, put, all, takeLatest } from 'redux-saga/effects';

// call -> chama metodos asincronos que retornam promises
// put -> dispara uma action do redux
// all -> cadastra varios listeners (Verifica quando uma action e disparada)
// takeLatest -> pega sempre a ultima chamada, descartando as anteriores (Counterar usuários que clicam muitas vezes)
// select -> busca informações dentro do state

import { addToCartSuccess, updateProductAmountFromCart } from './actions';

import api from '../../../services/api';
import { formatPrice } from '../../../util/format';

//funtion* === generator  ->  async funtion
function* addToCart(action) {
  const { payload: id } = action;

  const productExists = yield select((state) =>
    state.cart.find((p) => p.id === id)
  );

  if (productExists) {
    const amount = productExists.amount + 1;
    yield put(updateProductAmountFromCart(id, amount));
  } else {
    const response = yield call(api.get, `/products/${id}`); // yield === await

    const { data: product } = response;

    const data = {
      ...product,
      amount: 1,
      priceFormatted: formatPrice(product.price),
    };

    yield put(addToCartSuccess(data));
  }
}

export default all([takeLatest('@cart/ADD_REQUEST', addToCart)]);
