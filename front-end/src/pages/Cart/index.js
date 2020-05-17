import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

// import { removeFromCart } from '../../store/modules/cart/actions'; //exemplo 01
import * as CartActions from '../../store/modules/cart/actions';

import { formatPrice } from '../../util/format';

import { Container, ProductTable, Total } from './styles';

function Cart({
  cart,
  totalFormatted,
  removeFromCart,
  updateProductAmountFromCart,
}) {
  function increment(product) {
    updateProductAmountFromCart(product.id, product.amount + 1);
  }

  function decrement(product) {
    updateProductAmountFromCart(product.id, product.amount - 1);
  }

  const handleRemoveProduct = (id) => {
    // dispatch(removeFromCart(id)); //exemplo 01
    removeFromCart(id);
  };
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>Produto</th>
            <th>Quantidade</th>
            <th>Subtotal</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {cart.map((product) => (
            <tr key={product.id}>
              <td>
                <img src={product.image} alt="" />
              </td>
              <td>
                <strong>{product.title}</strong>
                <span>{product.priceFormatted}</span>
              </td>

              <td>
                <div>
                  <button type="button">
                    <MdRemoveCircleOutline
                      size={20}
                      color="#7159c1"
                      onClick={() => decrement(product)}
                    />
                  </button>
                  <input type="number" readOnly value={product.amount} />
                  <button type="button">
                    <MdAddCircleOutline
                      size={20}
                      color="#7159c1"
                      onClick={() => increment(product)}
                    />
                  </button>
                </div>
              </td>
              <td>
                <strong>{product.subTotalFormatted} </strong>
              </td>
              <td>
                <button type="button">
                  <MdDelete
                    size={15}
                    color="#7159c1"
                    onClick={() => handleRemoveProduct(product.id)}
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar pedido</button>

        <Total>
          <span>Total</span>
          <strong>{totalFormatted}</strong>
        </Total>
      </footer>
    </Container>
  );
}

//Mapeia os dados contidos no estado do redux para serem utilizados no componente
const mapStateToProps = (state) => ({
  cart: state.cart.map((product) => ({
    ...product,
    subTotalFormatted: formatPrice(product.price * product.amount),
  })),
  totalFormatted: formatPrice(
    state.cart.reduce(
      (total, product) => total + product.price * product.amount,
      0
    )
  ),
});

//Convert actions do redux em propriedades do componente
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
