import React from 'react';
import './Blog.css';
const Blog = () => {
    return (
        <div className='blog-container'>
            <h3 className='blog'>Blogs Here</h3>
             <div>
                <p><strong>1. How does react works?</strong></p>
                <p>React is a declarative efficient and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called components. React has a few different kinds of components but we'll start with React.Component subclasses: class ShoppingList extends React.</p>
             </div>

             {/* blog-2 */}
             <div>
                <p><strong>2. Props vs State ?</strong></p>
                <p>
                State is the local state of the component which cannot be accessed and modified outside of the component. It's equivalent to local variables in a function. Props on the other hand make components reusable by giving components the ability to receive data from their parent component in the form of props.
                </p>
             </div>

             <div>
                <p><strong>3. What does useEffect do?</strong></p>
                <p>
                In the code above we used the useEffect hook. It takes a function as input which is executed after the initial rendering, as well as re-rendering of the component. After each rendering one the DOM has been updated and the function passed to useEffect is invoked.
                </p>
             </div>

        </div>
    );
};

export default Blog;