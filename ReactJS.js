
var _ReactRouter = ReactRouter;
var Router = _ReactRouter.Router;
var Route = _ReactRouter.Route;
var IndexRoute = _ReactRouter.IndexRoute;
var IndexLink = _ReactRouter.IndexLink;
var hashHistory = _ReactRouter.hashHistory;
var Link = _ReactRouter.Link;

var Home = React.createClass({
  displayName: "Home",

  render: function render() {
    return React.createElement(
      "div",
      { className: "content" },
      React.createElement(
        "h2",
        null,
        "About Microservices"
      ),
      React.createElement(
        "p",
        null,
       "The term Microservice Architecture has sprung up over the last few years to describe a particular way of designing software applications as suites of independently deployable services. While there is no precise definition of this architectural style, there are certain common characteristics around organization around business capability, automated deployment, intelligence in the endpoints, and decentralized control of languages and data."
      ),
      React.createElement(
        "p",
        null,
        "Microservices - yet another new term on the crowded streets of software architecture. Although our natural inclination is to pass such things by with a contemptuous glance, this bit of terminology describes a style of software systems that we are finding CssGRID and CssGRID appealing. We've seen many projects use this style in the last few years, and results so far have been positive, so much so that for many of our colleagues this is becoming the default style for building enterprise applications. Sadly, however, there's not much information that outlines what the microservice style is and how to do it.In short, the microservice architectural style [1] is an approach to developing a single application as a suite of small services, each running in its own process and communicating with lightweight mechanisms, often an HTTP resource API. These services are built around business capabilities and independently deployable by fully automated deployment machinery. There is a bare minimum of centralized management of these services, which may be written in different programming languages and use different data storage technologies."
      )
    );
  }
});

var Contact = React.createClass({
  displayName: "Contact",

  render: function render() {
    return React.createElement(
      "div",
      { className: "content" },
      React.createElement(
        "h2",
        null,
        "ReactJS" ),
		
	  React.createElement(
        "p",
        null,
       "React is a JavaScript tool that makes it easy to reason about, construct, and maintain stateless and stateful user interfaces. It provides the means to declaratively define and divide a UI into UI components (a.k.a., React components) using HTML-like nodes called React nodes. React nodes eventually get transformed into a format for UI rendering (e.g., HTML/DOM, canvas, svg, etc.)."
      ),
      React.createElement(
        "p",
        null,
        "React is a UI library developed at Facebook to facilitate the creation of interactive, stateful & reusable UI components. It is used at Facebook in production, and Instagram.com is written entirely in React.One of it's unique selling points is that not only does it perform on the client side, but it can also be rendered server side, and they can work together inter-operably.It also uses a concept called the Virtual DOM that selectively renders subtrees of nodes based upon state changes. It does the least amount of DOM manipulation possible in order to keep your components up to date."

      ),
      React.createElement(
        "p",
        null,
        "To learn and gain CssGRID idea of what ReactJS really mean please visit this tutorial >>> ",
        React.createElement(
          "a",
          { href: "https://www.tutorialspoint.com/reactjs/ " },
          "CLICK ME"
        ),
        "."
      )
    );
  }
});

var CssGRID = React.createClass({
  displayName: "CssGRID",

  render: function render() {
    return React.createElement(
      "div",
      { className: "content" },
      React.createElement(
        "h2",
        null,
        "CssGRID"
      ),
      React.createElement(
        "p",
        null,
        "What is CSS Grid anyway ?"
      ),
      React.createElement(
        "ol",
        null,
        React.createElement(
          "li",
          null,
          "CSS Grid Layout is a CSS layout method designed for the two-dimensional layout of items on a webpage or application. I have been working with the specification over the last five years. On this site is a growing collection of example code, video tutorials and other resources to help you learn the specification."
        ),
        React.createElement(
          "li",
          null,
          "Grid Layout gives us a method of creating grid structures that are described in CSS and not in HTML. It helps us to create layouts that can be redefined using Media Queries and adapt to different contexts.Grid Layout lets us properly separate the order of elements in the source from their visual presentation. As a designer this means you are free to change the location of page elements as is best for your layout at different breakpoints and not need to compromise a sensible structured document for your responsive design."
        ),
        React.createElement(
          "li",
          null,
          "It’s very easy to make grid adapt to the available space. With each element having an area on the grid, things are not in risk of overlapping due to text size change, more content than expected or small viewports.Unlike with an HTML table-based layout, you can layer items on the grid. So one item can overlap another if required."
        ),
        React.createElement(
          "li",
          null,
          "Grid or Flexbox? One of the most common questions I get when talking about Grid is about whether this is a competing specification to Flexbox, and when should you use one or the other (assuming that there was browser support equally for both). I usually defer to this email from Tab Atkins on the www-style list.Flexbox is for one-dimensional layouts - anything that needs to be laid out in a straight line (or in a broken line, which would be a single straight line if they were joined back together). Grid is for two-dimensional layouts. It can be used as a low-powered flexbox substitute (we’re trying to make sure that a single-column/row grid acts very similar to a flexbox), but that’s not using its full power.If you only need to define a layout as a row or a column, and you would like the flexibility to respond to the content of that row then you probably want flexbox. If you want to define a grid and fit content into it in two dimensions - you need grid."
        ),
        React.createElement(
          "li",
          null,
          "There are a few bits of terminology that are introduced by the Grid Layout specification. I’ve explained them here as they will make the examples easier to follow."
        )
      )
    );
  }
});

var destination = document.querySelector("#container");
var App = React.createClass({
  displayName: "App",

  render: function render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "h1",
        null,
        "Short explaination about Microservices architecture and ReactJS-CSSG"
      ),
      React.createElement(
        "ul",
        { className: "header" },
        React.createElement(
          "li",
          null,
          React.createElement(
            IndexLink,
            { to: "/", activeClassName: "active" },
            "Home"
          )
        ),
        React.createElement(
          "li",
          null,
          React.createElement(
            Link,
            { to: "/CssGRID", activeClassName: "active" },
            "CssGRID"
          )
        ),
        React.createElement(
          "li",
          null,
          React.createElement(
            Link,
            { to: "/Contact", activeClassName: "active" },
            "About React"
          )
        )
      ),
      React.createElement(
        "div",
        { className: "content" },
        this.props.children
      )
    );
  }
});

ReactDOM.render(React.createElement(
  Router,
  { history: hashHistory },
  React.createElement(
    Route,
    { path: "/", component: App },
    React.createElement(IndexRoute, { component: Home }),
    React.createElement(Route, { path: "CssGRID", component: CssGRID }),
    React.createElement(Route, { path: "contact", component: Contact })
  )
), destination);