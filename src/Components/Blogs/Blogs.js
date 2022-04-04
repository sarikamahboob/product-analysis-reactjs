import React from "react";

const Blogs = () => {
  return (
    <div className="container mx-auto mt-8">
      <div className="mb-10">
        <h1 className="font-bold text-blue-700 text-2xl mb-4">
          <span className="font-bold text-fuchsia-700 text-2xl mr-2">
            Question:
          </span>
          What is the purpose of Context API?
        </h1>
        <p className="text-xl mb-8 text-gray-600 text-justify">
          <span className="font-bold text-fuchsia-700 text-2xl mr-2">
            Answer:
          </span>
          Context API is a React API that can solve a number of difficulties
          regarding state management and how state is passed to components in
          modern apps. The Context API is a React structure that lets us share
          unique details and helps us to solve prop-drilling problems at various
          levels of our project. A React app can use the React Context API to
          generate global variables that can be passed around. This is an
          alternative to "prop drilling," which entails passing props from
          grandparent to child to parent and so on. Context is also marked as a
          simpler, lighter way to Redux state management. Context API is a new
          feature in React 16.3 that allows us to easily and lightly communicate
          state across the entire project or part of it.
        </p>
      </div>
      <div className="mb-10">
        <h1 className="font-bold text-blue-700 text-2xl mb-4">
          <span className="font-bold text-fuchsia-700 text-2xl mr-2">
            Question:
          </span>
          What is a Semantic Tag?
        </h1>
        <p className="text-xl mb-8 text-gray-600 text-justify">
          <span className="font-bold text-fuchsia-700 text-2xl mr-2">
            Answer:
          </span>
          Both the browser and the developer can understand the meaning of a
          semantic element. Semantic HTML5 defines particular tags to explicitly
          describe what purpose the content included in those tags plays. This
          explicit information aids robots/crawlers such as Google and Bing in
          determining which content is important, which is a subset, which is
          for navigation, and so on. Semantic HTML is HTML that adds meaning to
          a web page rather than just making it seem pretty. A {"<header>"} tag,
          for example, indicates that the contained content is a header. Because
          people understand what a header is and how to display it, this is both
          semantic and presentational. In HTML, there are many semantic tags:
          <li>{"<article>"}</li>
          <li>{"<details>"}</li>
          <li>{"<aside>"}</li>
          <li>{"<figcaption>"}</li>
          <li>{"<figure>"}</li>
          <li>{"<footer>"}</li>
          <li>{"<main>"}</li>
          <li>{"<div>"}</li>
        </p>
      </div>
      <div className="mb-10">
        <h1 className="font-bold text-blue-700 text-2xl mb-4">
          <span className="font-bold text-fuchsia-700 text-2xl mr-2">
            Question:
          </span>{" "}
          What are the differences between inline, block and inline-block?
        </h1>
        <p className="text-xl mb-8 text-gray-600 text-justify">
          <span className="font-bold text-fuchsia-700 text-2xl mb-4 mr-2">
            Answer:
          </span>
          <li>
            Inline elements take up only as much space as they need, allowing
            inline elements to be placed next to them. Regardless of their
            sufficiency, block items utilize the entire width provided.
          </li>
          <li>
            Unlike block elements, inline elements do not begin from a new line
            and do not have top and bottom margins. Block elements have top and
            bottom margins and always start on a new line. It is not surrounded
            by any other elements. 
          </li>
          <li>
            Inline-block elements introduced a new technique to create
            side-by-side boxes that collapse and wrap appropriately based on the
            amount of space available in the contained element.
          </li>
          <li>
            The main difference between inline-block elements and inline
            elements is that inline-block allows us to choose the element's
            width and height. Also, top and bottom margins and paddings are
            ignored with inline elements, but they are respected with
            inline-block elements.
          </li>
        </p>
      </div>
    </div>
  );
};

export default Blogs;
