<h3>Q2</h3>
Streams are like arrays, and as a result streams are considered as an abstraction. The main differeneces being that streams are controlled over a period of time. And just like arrays, data is broken down into smaller pieces that can be sent, recieved, or transformed. It is good for when you are not sure about the the charactersitics of the data, like what is the size of the data, or the chance that the data will arrive. Meanwhile abstractions allows or better readability and maintenance of streams, while aslo allowing for asychronous data sources to be modelled.

Streams use the observer patterns that enable us to handle asynchronous functionalities (subcribing to data streams). Observers listen to streams for updates.

Streams are used to model asychronous data sources, as well as infinately sized datasets. The use  ranges from variables, datastructures, user inputs, and application properties. By modeling all states as streams and creating a unified abstraction of everything, streams can be used to solve the synchronization issue in Rich Web development. As a result, issues can be reduced by the system architecture to a stream processing issue on a combined set of streams.


<h3>Q2</h3>
Firtsly, by constructing an observable stream and utilizing the numerous functions offered by RxJS, such flatMap(), fromPromise(), and others, it is possible to handle asynchronous network responses to API calls using the RxJS library.

In order to query data from an API when building an interface, I would first create a text input box and a button.When the button's onclick event fires, I would use fromEvent() to build an observable that takes action and apply it to a stream called queryAPI to enable the button to initiate an API request. I would then map the user input to the queryAPI stream by chaining a map() request to the fromEvent observable. Finally, I would use flatMap() to flatten every promise returned into a single observable stream before subscribing the queryAPI to the observable using the fromPromise() method, which returns an observable stream of promises. The response object from the API call would be returned by subscribing to the queryAPI observable to this.

The fact that streams offer more functionality than promises makes them preferable for use. Additionally, whereas promises can only handle one event, streams can manage numerous events concurrently.


<h3>Q3</h3>
Functional programming could not be used with functions that shared a global state. The sharing of global state by these functions would have serious consequences for code maintenance. Function A might alter the global state without the developer's knowledge, which might then have an unintended consequence on functions B and C. Therefore, using a global state with several methods makes it very challenging to maintain and debug code.

It's a good idea to pass any variables or state that a function requires in as parameters to that function in order to minimize issues with global state. This and other pure functional programming notions guarantee that a function will always return the same result when the same input is supplied to it.