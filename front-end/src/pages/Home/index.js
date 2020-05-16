import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQgENrtW-iqvyOzaASVkuOoDyxLps4Ov7K3V_Ue6iFhZOtQdSZRAWpi4TmPwGZ3xdOJltHZT9g&usqp=CAc"
          alt=""
        />
        <strong>teste</strong>
        <span>$190,00</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>Adicionar ao Carrinho</span>
        </button>
      </li>
      <li>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQgENrtW-iqvyOzaASVkuOoDyxLps4Ov7K3V_Ue6iFhZOtQdSZRAWpi4TmPwGZ3xdOJltHZT9g&usqp=CAc"
          alt=""
        />
        <strong>aaaaa</strong>
        <span>$190,00</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />
          </div>
          <span>adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQgENrtW-iqvyOzaASVkuOoDyxLps4Ov7K3V_Ue6iFhZOtQdSZRAWpi4TmPwGZ3xdOJltHZT9g&usqp=CAc"
          alt=""
        />
        <strong>aaaaa</strong>
        <span>$190,00</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />
          </div>
          <span>adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQgENrtW-iqvyOzaASVkuOoDyxLps4Ov7K3V_Ue6iFhZOtQdSZRAWpi4TmPwGZ3xdOJltHZT9g&usqp=CAc"
          alt=""
        />
        <strong>aaaaa</strong>
        <span>$190,00</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />
          </div>
          <span>adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQgENrtW-iqvyOzaASVkuOoDyxLps4Ov7K3V_Ue6iFhZOtQdSZRAWpi4TmPwGZ3xdOJltHZT9g&usqp=CAc"
          alt=""
        />
        <strong>aaaaa</strong>
        <span>$190,00</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />
          </div>
          <span>adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQgENrtW-iqvyOzaASVkuOoDyxLps4Ov7K3V_Ue6iFhZOtQdSZRAWpi4TmPwGZ3xdOJltHZT9g&usqp=CAc"
          alt=""
        />
        <strong>aaaaa</strong>
        <span>$190,00</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />
          </div>
          <span>adicionar ao carrinho</span>
        </button>
      </li>
    </ProductList>
  );
}
