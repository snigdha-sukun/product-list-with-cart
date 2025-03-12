# Frontend Mentor - Product list with cart solution

This is a solution to the [Product list with cart challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-list-with-cart-5MmqLVAp_d). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Add items to the cart and remove them
- Increase/decrease the number of items in the cart
- See an order confirmation modal when they click "Confirm Order"
- Reset their selections when they click "Start New Order"
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Screenshot of the solution](./screenshot.gif)

### Links

- Solution URL: [Github](https://github.com/snigdha-sukun/product-list-with-cart)
- Live Site URL: [Vercel](https://product-list-with-cart-rho-bay.vercel.app)

## My process

### Built with

- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles
- Flexbox

### What I learned

I learned how to format currency using `Intl.NumberFormat`:

```ts
export const showFormattedPrice = (price: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
    }).format(price);
};
```

I learned how to use `interface` to create & `extend` types:

```ts
export interface Product {
 image: {
  thumbnail: string;
  mobile: string;
  tablet: string;
  desktop: string;
 };
 id: number;
 name: string;
 category: string;
 price: number;
}

export interface CartItemType extends Product {
 quantity: number;
}
```

I learned how to create reusable mixins using `styled-components` and use it to style my components:

```ts
type ColorKeys =
 | "red"
 | "green"
 | "rose50"
 | "rose100"
 | "rose300"
 | "rose400"
 | "rose500"
 | "rose900"
 | "darkRed";

export const IconButton = (color: ColorKeys, hoverColor: ColorKeys) => css`
    all: unset;
    cursor: pointer;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.colors[color]};
    transition: all 0.3s ease;

    svg path {
        fill: ${({ theme }) => theme.colors[color]};
    }

    &:hover {
        svg path {
            fill: ${({ theme }) => theme.colors[hoverColor]};
        }
    }
`;

export const IconButtonAdd = styled.button`
    ${IconButton("rose50", "red")};
    padding: 0 0.4rem;

    &:hover {
        background-color: ${({ theme }) => theme.colors.rose50};
    }
`;
```

I learned how to create React Context & Provider:

```tsx
interface CartContextType {
 products: Product[];
 cart: CartItemType[];
 addToCart: (product: Product) => void;
 removeFromCart: (productId: number) => void;
 emptyCart: () => void;
 findCartItem: (productId: number) => CartItemType | undefined;
 reduceQty: (product: Product) => void;
 increaseQty: (product: Product) => void;
 getTotalCost: () => number;
 isModalOpen: boolean;
 openModal: () => void;
 closeModal: () => void;
 resetCart: () => void;
}

export const CartContext = createContext<CartContextType | undefined>(
 undefined,
);


export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
 children,
}) => {
 const { products } = useFetchProducts();

 const [cart, setCart] = useState<CartItemType[]>([]);
 const [isModalOpen, setIsModalOpen] = useState(false);

 const openModal = useCallback(() => setIsModalOpen(true), []);
 const closeModal = useCallback(() => setIsModalOpen(false), []);

 const resetCart = useCallback(() => {
  setCart([]);
  closeModal();
 }, [closeModal]);

 const addToCart = useCallback((product: Product) => {
  setCart((prevCart) => {
   return [...prevCart, { ...product, quantity: 1 }];
  });
 }, []);

 const increaseQty = useCallback((product: Product) => {
  setCart((prevCart) => {
   return prevCart.map((item) =>
    item.id === product.id
     ? { ...item, quantity: item.quantity + 1 }
     : item,
   );
  });
 }, []);

 const reduceQty = useCallback((product: Product) => {
  setCart((prevCart) => {
   const updatedCart = prevCart
    .map((item) => {
     if (item.id === product.id) {
      const qty = item.quantity;
      if (qty === 1) {
       return null;
      }
      return { ...item, quantity: item.quantity - 1 };
     }
     return item;
    })
    .filter((item): item is CartItemType => item !== null);
   return updatedCart;
  });
 }, []);

 const removeFromCart = useCallback((productId: number) => {
  setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
 }, []);

 const emptyCart = useCallback(() => {
  setCart([]);
 }, []);

 const findCartItem = useCallback(
  (productId: number) => {
   return cart.find((item) => item.id === productId);
  },
  [cart],
 );

 const getTotalCost = useCallback(() => {
  return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
 }, [cart]);

 const contextValue = useMemo(
  () => ({
   products,
   cart,
   addToCart,
   removeFromCart,
   emptyCart,
   findCartItem,
   reduceQty,
   increaseQty,
   getTotalCost,
   isModalOpen,
   openModal,
   closeModal,
   resetCart,
  }),
  [
   products,
   cart,
   addToCart,
   removeFromCart,
   emptyCart,
   findCartItem,
   reduceQty,
   increaseQty,
   getTotalCost,
   isModalOpen,
   openModal,
   closeModal,
   resetCart,
  ],
 );

 return (
  <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
 );
};
```

```ts
export const useCart = () => {
 const context = useContext(CartContext);
 if (!context) {
  throw new Error("useCart must be used within a CartProvider");
 }
 return context;
};
```

```tsx
function App() {

 return (
  <ThemeProvider theme={theme}>
   <CartProvider>
    <GlobalStyles />
    <Container>
     <ProductList />
     <Cart />
    </Container>
    <OrderDialog />
   </CartProvider>
  </ThemeProvider>
 );
}
```

I learned how to manipulate UI based on screen-size:

```ts
import { useState, useEffect } from "react";

const useScreenSize = () => {
 const [screenSize, setScreenSize] = useState<"mobile" | "tablet" | "desktop">(
  "desktop",
 );

 useEffect(() => {
  const handleResize = () => {
   if (window.innerWidth <= 480) {
    setScreenSize("mobile");
   } else if (window.innerWidth <= 768) {
    setScreenSize("tablet");
   } else {
    setScreenSize("desktop");
   }
  };

  handleResize();
  window.addEventListener("resize", handleResize);

  return () => window.removeEventListener("resize", handleResize);
 }, []);

 return screenSize;
};

export default useScreenSize;
```

```tsx
const screenSize = useScreenSize();
const imageUrl = product.image[screenSize];
```

I learned how to send parameters to styled components and conditionally render styling:

```ts
export const StyledProductImgContainer = styled.div<{ hasBorder: boolean }>`
    border-radius: 1rem;
    border: 0.25rem solid ${({ hasBorder, theme }) => hasBorder ? theme.colors.red : "transparent"};
    transition: all 0.3s ease;
`;
```

```tsx
<StyledProductImgContainer hasBorder={!!isCartItem}>
```

I learned how to create a Modal using styled components:

```tsx
const OrderDialog = () => {
 const { cart, isModalOpen, closeModal, resetCart, getTotalCost } = useCart();
 const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
  if (e.target === e.currentTarget) {
   closeModal();
  }
 };

 return (
  <Modal isOpen={isModalOpen} onClick={handleOutsideClick}>
   <ModalContent>
    <div>
     <img src="/images/icon-order-confirmed.svg" alt="Order confirmed" />
    </div>
    <h2>Order Confirmed</h2>
    <p>We hope you enjoy your food!</p>
    <OrderDetails>
     <StyledOrderItemList>
      {cart.map((item) => (
       <>
        <OrderItem key={item.id} item={item} />
        <StyledDivider key={item.id} />
       </>
      ))}
     </StyledOrderItemList>
     <StyledOrderTotalContainer>
      <StyledOrderTotalText>Order Total</StyledOrderTotalText>
      <StyledOrderTotal>
       {showFormattedPrice(getTotalCost())}
      </StyledOrderTotal>
     </StyledOrderTotalContainer>
    </OrderDetails>
    <Button text="Start New Order" handleClick={resetCart} />
   </ModalContent>
  </Modal>
 );
};
```

```ts
export const Modal = styled.div<{ isOpen: boolean }>`
    display: ${({ isOpen }) => (isOpen ? "block" : "none")};
    position: fixed;
    z-index: 1;
    padding-top: 10rem;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.4);
    animation: ${fadeIn} 0.3s ease-in-out;

    ${mobile`
      padding-top: 25rem;
    `}
`;

export const ModalContent = styled.div`
    background-color: ${({ theme }) => theme.colors.rose50};
    margin: auto;
    padding: 2rem;
    width: fit-content;
    border-radius: 1rem;
    text-wrap: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    ${mobile`
      width: 100%;
      margin: 0;
      border-radius: 1rem 1rem 0 0;
    `}
`;
```

I learned the difference between `useState`, `useEffect`, `useContext`, `useMemo` and `useCallback` and how to use each of them:

### **1️⃣ useState – “Remember Things”**

Think of `useState` as a **sticky note** that React keeps track of.

📝 **What it does:**

- It allows you to **store and update values** inside a component.

🔍 **Example:**
Imagine a button that counts how many times it’s clicked.

```tsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // count starts at 0

  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </button>
  );
}
```

📌 **Key Idea:** `useState` lets React **remember** the `count` value, even when the function runs multiple times.

---

### **2️⃣ useEffect – “Do Something When Things Change”**

Think of `useEffect` as **setting up automatic reactions** when something changes.

📝 **What it does:**

- Runs **side effects** (e.g., fetching data, updating the DOM) when a component **renders or updates**.

🔍 **Example:**
Imagine you want to **log a message** every time `count` changes.

```tsx
import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count changed to: ${count}`);
  }, [count]); // Runs whenever 'count' changes

  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </button>
  );
}
```

📌 **Key Idea:** `useEffect` lets you **watch for changes** and react to them.

---

### **3️⃣ useContext – “Share Data Easily”**

Think of `useContext` as a **global walkie-talkie** that lets components talk to each other **without passing props manually**.

📝 **What it does:**

- Allows **multiple components** to access **the same data** without prop-drilling.

🔍 **Example:**
Imagine a **theme switcher** where multiple components need to know the theme (light/dark).

```tsx
import { createContext, useContext } from "react";

const ThemeContext = createContext("light"); // Default theme is "light"

function ThemeButton() {
  const theme = useContext(ThemeContext); // Access the theme from context
  return <button style={{ background: theme === "dark" ? "#333" : "#fff" }}>I’m {theme} mode</button>;
}

export default function App() {
  return (
    <ThemeContext.Provider value="dark">
      <ThemeButton />
    </ThemeContext.Provider>
  );
}
```

📌 **Key Idea:** `useContext` lets components **share data without prop drilling**.

---

### **4️⃣ useMemo – “Remember the Expensive Stuff”**

Think of `useMemo` as **pre-calculating** something so you don’t waste time recalculating it every time.

📝 **What it does:**

- **Caches** expensive calculations and only recalculates when necessary.

🔍 **Example:**
Imagine a slow function that takes a long time to compute.

```tsx
import { useState, useMemo } from "react";

function SlowComponent({ num }) {
  const expensiveResult = useMemo(() => {
    console.log("Computing...");
    return num * 2;
  }, [num]); // Only recalculates if 'num' changes

  return <p>Result: {expensiveResult}</p>;
}

function App() {
  const [num, setNum] = useState(1);

  return (
    <>
      <button onClick={() => setNum(num + 1)}>Increase {num}</button>
      <SlowComponent num={num} />
    </>
  );
}
```

📌 **Key Idea:** `useMemo` **saves time** by storing previous results.

---

### **5️⃣ useCallback – “Remember a Function”**

Think of `useCallback` as **keeping a function the same** so it doesn’t unnecessarily change.

📝 **What it does:**

- Prevents functions from being recreated on every render.

🔍 **Example:**
Imagine passing a function to a child component.

```tsx
import { useState, useCallback } from "react";

function Child({ onClick }) {
  console.log("Child re-rendered");
  return <button onClick={onClick}>Click me</button>;
}

function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button clicked!");
  }, []); // Function stays the same between renders

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <Child onClick={handleClick} />
    </>
  );
}
```

📌 **Key Idea:** `useCallback` **prevents unnecessary re-renders** by keeping functions the same.

---

### **🚀 Summary Table**

| Hook        | What It Does | Example Use Case |
|------------|------------|----------------|
| `useState` | Stores and updates values | Counter, form input |
| `useEffect` | Runs side effects when things change | Fetching data, logging, updating the title |
| `useContext` | Shares data globally without prop-drilling | Themes, authentication state |
| `useMemo` | Caches expensive calculations | Avoiding slow computations |
| `useCallback` | Prevents function recreation on each render | Optimizing performance when passing functions |

---

### **🔹 Final Thoughts**

If React hooks were real-life objects:

- **`useState`** → A sticky note
- **`useEffect`** → A security camera watching for changes
- **`useContext`** → A walkie-talkie for shared communication
- **`useMemo`** → A saved shopping cart that remembers expensive calculations
- **`useCallback`** → A phone number that stays the same

### Continued development

I would continue practicing the use of React Context & Providers

## Author

- Frontend Mentor - [@snigdha-sukun](https://www.frontendmentor.io/profile/snigdha-sukun)
