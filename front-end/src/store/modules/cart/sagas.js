import { call, select, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

// call -> chama metodos asincronos que retornam promises
// put -> dispara uma action do redux
// all -> cadastra varios listeners (Verifica quando uma action e disparada)
// takeLatest -> pega sempre a ultima chamada, descartando as anteriores (Counterar usuários que clicam muitas vezes)
// select -> busca informações dentro do state

import { addToCartSuccess, updateAmountSuccess } from './actions';

import api from '../../../services/api';
import history from '../../../services/history';
import { formatPrice } from '../../../util/format';

//funtion* === generator  ->  async funtion
function* addToCart(action) {
  const { payload: id } = action;

  const productExists = yield select((state) =>
    state.cart.find((p) => p.id === id)
  );

  const stock = yield call(api.get, `/stock/${id}`);

  const stockAmount = stock.data.amount;
  const currentAmount = productExists ? productExists.amount : 0;

  const amount = currentAmount + 1;

  if (amount > stockAmount) {
    toast.error('Quantidade solicitada fora de stock');
    return;
  }

  if (productExists) {
    yield put(updateAmountSuccess(id, amount));
  } else {
    const response = yield call(api.get, `/products/${id}`); // yield === await

    const { data: product } = response;

    const data = {
      ...product,
      amount: 1,
      priceFormatted: formatPrice(product.price),
    };

    yield put(addToCartSuccess(data));

    history.push('/cart');
  }
}

function* updateAmount(action) {
  const { id, amount } = action.payload;

  if (amount <= 0) return;

  const stock = yield call(api.get, `stock/${id}`);
  const stockAmount = stock.data.amount;

  if (amount > stockAmount) {
    toast.error('Quantidade solicitada fora de stock');
    return;
  }

  yield put(updateAmountSuccess(id, amount));
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
