# Lab 4 - Answers

## Q1 - What is meant by Props adn State in React JS?

---

Properties are referred to as "<b>props</b>". These are the properties that React's unidirectional data flow passes into a component.

Example:

- Component and props:

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
const element = <Welcome name="Sara" />;
root.render(element);
/>
```


React component's state tracking mechanism is called <b>state</b>. It is used to keep track of and manage a component's data, which could include an array of objects to be shown.

Example:

- State being updated

```jsx
handleClick() {
  this.setState((prevState) => {
    return {
      counter: prevState.counter + 1
    };
  });

  console.log("counter", this.state.counter);
}
```

---

## Q2 - What is meant by a functor in function programming (JS) ?

---

A Functor is a type of container (data object) that may be mapped over by a function in functional programming.
Simply put, a Functor is any type that defines a map function and, ideally, a "identity function."
It can hold any type of data, and implementes the map operation.
A functor of the same size will always result from mapping over given data item.

- Example:

```javascript
[1, 2, 3].map(val => val * 2); 
//generates [2, 4, 6]
```
This example contains an array which is a functor, as it respects the same type and the connections as well.

---

## Q3 - Advantages and disadvantags of promises, callbacks and streams.

---

## Promises 
  - Promises are considerably easier to comprehend and debug than nested callbacks and may be chained together to perform the same function.
  - It can't handle data sources that have multiple values, such mouse motions.

## Callbacks
  - Callbacks can access both their own scope and the scope from which they are called because they are higher order functions.
  - They become nested if a callback must be made utilizing the output of another. If this happens a few times, the callbacks become excessively nested and are hard to comprehend.

## Streams
  - Data can be accessed by streams as it is supplied. As a result they don't have to wait until all the data has loaded.
  - For straightforward interactions, they are frequently excessive, and the limited value they offer justifies the additional implementation burden.

---

## Q4 - Describe the Cascading StyleSheets (CSS) Box Model and show how it can be used to space DOM elements.

---

The website's design and layout are discussed in the box model. The box model is a container that contains each HTML element. The margin, border, padding, and content make up the box model's four components.

The <b>content</b> of the box, where text, images or other content appear. <b>Padding</b> clears an area around the content. The padding is transparent. A <b>border</b> that goes around the padding and content. <b>Margin</b> clears an area outside the border. The margin is transparent.

Code Example:

```html
<!DOCTYPE html>
<html>
    <head>
        <style>
            div {
                padding: 70px;
                border: 1px solid #4CAF50;
            }
        </style>
    </head>

    <body>
        <h2>CSS Padding</h2>
            <div>
                This element has a padding of 70px.
            </div>
    </body>
</html>

<!-- This displays 2 boxes with content, padding, border and margin in a box showing the space between them -->
```

---

![CSS Box Model](https://miro.medium.com/max/1400/1*E_YuB8x1B3T3h6PIJ_I9qQ.png)

We can use the margins between elements to separate them from one another by particular values. Padding allows us to expand an element by adding space inside its own border. This is essential for things like search boxes because it allows the element to be larger. To add greater space between elements, borders can be utilized to establish a barrier between the inner and outside spaces of the pieces.

Basically padding can be used to create a larger element, while margin creates like a white space between elements.

---

## Q5 How does the browser load and bootstrap a rich web application from initial URL?

---

The user opens the browser and navigates to the original URL. To determine the server IP address associated with the URL, the browser sends a DNS request. The DNS Server provides the browser with the IP address. The retrieved server IP address and assigned port related to that URL are connected to by the browser via TCP/IP. The protocol will let the browser know where to find the necessary files. The connection from the browser is accepted by an application server or HTTP proxy that is listening at the server's IP address. Over the now-open TCP/IP connection, the browser sends an HTTP request. The required files are delivered to the browser over the same open TCP/IP connection after the application server has processed the request and parsed it. These files will include the initial resources needed to launch the website (HTML, CSS, JS, Multimedia). The browser parses these assets as they load and executes any commands they contain. Up up until the final asset has been collected, this procedure is repeated.