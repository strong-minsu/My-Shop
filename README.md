# 🛒 Great Developeer Goods Shop

## 💻 프로젝트 소개

React JS의 Context API와 Hook을 이용한 간단한 쇼핑몰 기능 구현

---

## 💻 개발 환경

React 프로젝트 이용

- nvm : 1.1.9.
- npm : 6.14.12
- react : ^18.2.0
- react-dom : ^18.2.0

---

## 💻 주요 기능

1.  상품 데이터 보이기
    - context, provider로 데이터 관리

<br>

2. 상품 쇼핑카트에 담기
   - context, provider에서 useSteate와 hook이용

<br>

3. 쇼핑카트에 담은 상품 보이기
   - addToShoppingCart : (provider) useCallback이용 orders map 돌면서 상품 return

<br>

4. 쇼핑카트에 담긴 상품 한 개 삭제하기
   - remove : (provider) useCallback이용 setOrders에서 map돌면서 새로운 orders return

<br>

5. 쇼핑카트에 담긴 상품 전부 삭제하기
   - removeAll : (provider) useCallback이용 setOrders([])이용, orders clear..(?)

<br>

6. 쇼핑카트에 담긴 상품 가격 확인
   - good.price \* order.quantity 로 상품 종류별로 가격 확인
   - useMemo를 통해 orders map돌면서 total 가격 return

<br>

7. Checkout 버튼

<br>

#

### 📌 주요 개념

#### **1. Context**

관련 React 공식 문서 : [Context](https://ko.reactjs.org/docs/context.html)
<br>

> 쇼핑몰에 보여질 상품 데이터를 context를 이용하여 component들에게 전달하는 방법으로 관리

#### **2. Hook**

관련 React 공식 문서 : [Hook](https://ko.reactjs.org/docs/hooks-intro.html)
<br>

> 상품 데이터(goods), 쇼핑카트 상품 데이터(order), 상품 데이터를 이용하는 기능 (쇼핑 카트에 상품 담기, 쇼핑 카트 상품 삭제, 쇼핑카트 상품 전부 삭제)에서 useContext()를 이용한 Hook 사용

---

## 💻 실행 화면

[DEMO](https://benevolent-crepe-ae2832.netlify.app)
<br>

![DGshop](https://user-images.githubusercontent.com/95047661/228560945-5719e008-1099-4b31-bfb7-9276a7623ce6.png)
