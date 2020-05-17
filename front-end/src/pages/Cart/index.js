import React from 'react';
import { connect } from 'react-redux';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

function Cart({ cart, dispatch }) {
  const handleRemoveProduct = (product) => {
    dispatch({
      type: 'REMOVE_TO_CART',
      payload: product.id,
    });
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
            <tr>
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
                    <MdRemoveCircleOutline size={20} color="#7159c1" />
                  </button>
                  <input type="number" readOnly value={product.amount} />
                  <button type="button">
                    <MdAddCircleOutline size={20} color="#7159c1" />
                  </button>
                </div>
              </td>
              <td>
                <strong>{product.priceFormatted} </strong>
              </td>
              <td>
                <button type="button">
                  <MdDelete
                    size={15}
                    color="#7159c1"
                    onClick={() => handleRemoveProduct(product)}
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
          <strong>R$1920,00</strong>
        </Total>
      </footer>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Cart);