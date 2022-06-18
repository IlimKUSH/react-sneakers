import React from "react";
import "./style.scss";

const App = () => {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between p-40 align-center">
        <div className="d-flex align-center">
          <img
            className="mr-15"
            width={"40px"}
            src="/img/logo.svg"
            alt="Logo"></img>
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="d-flex align-center">
          <li className="mr-30 d-flex align-center">
            <img
              className="mr-10"
              width={"18px"}
              height={"18px"}
              src="/img/cart.svg"
              alt="Cart"></img>
            <span>1205 руб.</span>
          </li>
          <li className="d-flex align-center">
            <img
              width={"18px"}
              height={"18px"}
              src="/img/avatar.svg"
              alt="User"
            />
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <h1 className="mb-40">Все кроссовки</h1>

        <div className="d-flex flex-wrap">
          <div className="card">
            <img
              width={"133px"}
              height={"112"}
              src="/img/sneakers/1.jpg"
              alt=""
            />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img
                  width={"11px"}
                  height={"11px"}
                  src="/img/plus.svg"
                  alt="Plus"
                />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={"133px"}
              height={"112"}
              src="/img/sneakers/2.jpg"
              alt=""
            />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img
                  width={"11px"}
                  height={"11px"}
                  src="/img/plus.svg"
                  alt="Plus"
                />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={"133px"}
              height={"112"}
              src="/img/sneakers/3.jpg"
              alt=""
            />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img
                  width={"11px"}
                  height={"11px"}
                  src="/img/plus.svg"
                  alt="Plus"
                />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={"133px"}
              height={"112"}
              src="/img/sneakers/4.jpg"
              alt=""
            />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img
                  width={"11px"}
                  height={"11px"}
                  src="/img/plus.svg"
                  alt="Plus"
                />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={"133px"}
              height={"112"}
              src="/img/sneakers/5.jpg"
              alt=""
            />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img
                  width={"11px"}
                  height={"11px"}
                  src="/img/plus.svg"
                  alt="Plus"
                />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={"133px"}
              height={"112"}
              src="/img/sneakers/6.jpg"
              alt=""
            />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img
                  width={"11px"}
                  height={"11px"}
                  src="/img/plus.svg"
                  alt="Plus"
                />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={"133px"}
              height={"112"}
              src="/img/sneakers/7.jpg"
              alt=""
            />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img
                  width={"11px"}
                  height={"11px"}
                  src="/img/plus.svg"
                  alt="Plus"
                />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={"133px"}
              height={"112"}
              src="/img/sneakers/8.jpg"
              alt=""
            />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img
                  width={"11px"}
                  height={"11px"}
                  src="/img/plus.svg"
                  alt="Plus"
                />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={"133px"}
              height={"112"}
              src="/img/sneakers/9.jpg"
              alt=""
            />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img
                  width={"11px"}
                  height={"11px"}
                  src="/img/plus.svg"
                  alt="Plus"
                />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={"133px"}
              height={"112"}
              src="/img/sneakers/10.jpg"
              alt=""
            />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img
                  width={"11px"}
                  height={"11px"}
                  src="/img/plus.svg"
                  alt="Plus"
                />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={"133px"}
              height={"112"}
              src="/img/sneakers/11.jpg"
              alt=""
            />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img
                  width={"11px"}
                  height={"11px"}
                  src="/img/plus.svg"
                  alt="Plus"
                />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={"133px"}
              height={"112"}
              src="/img/sneakers/12.jpg"
              alt=""
            />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img
                  width={"11px"}
                  height={"11px"}
                  src="/img/plus.svg"
                  alt="Plus"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
