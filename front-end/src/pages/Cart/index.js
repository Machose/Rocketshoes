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

import { Container, ProductTable, Total } from './styles';

function Cart({ cart, removeFromCart }) {
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
          <strong>R$1920,00</strong>
        </Total>
      </footer>
    </Container>
  );
}

//Mapeia os dados contidos no estado do redux para serem utilizados no componente
const mapStateToProps = (state) => ({
  cart: state.cart,
});

//Convert actions do redux em propriedades do componente
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
