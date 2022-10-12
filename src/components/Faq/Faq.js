import { Accordion } from 'flowbite-react';
import React from 'react';

const Faq = () => {
    return (
        <Accordion alwaysOpen={true}>
            <Accordion.Panel>
                <Accordion.Title>
                    <div className='text-rose-600 text-lg'>What is the purpose of React Router?</div>
                </Accordion.Title>
                <Accordion.Content>
                    <p className='text-left'>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL. Needed for Single Page Applications.</p>
                </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
                <Accordion.Title>
                    <div className='text-rose-600 text-lg'>How does Context API works?</div>
                </Accordion.Title>
                <Accordion.Content>
                    <p className='text-left'>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. <br /> <br />
                        React.createContext(defaultValue); Creates a Context object. When React renders a component that subscribes to this Context object it will read the current context value from the closest matching Provider above it in the tree.

                        The defaultValue argument is only used when a component does not have a matching Provider above it in the tree. <br /> <br />
                        Then use a Provider to wrap the child components where we need the context value. Provider is a component that as it's names suggests provides the state to its children. It will hold the 'store' and be the parent of all the components that might need that store. <br /> <br />
                        At last to use context value useContext hook is used.
                    </p>
                </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
                <Accordion.Title>
                    <div className='text-rose-600 text-lg'>Details about useRef hook.</div>
                </Accordion.Title>
                <Accordion.Content>
                    <p className='text-left'>
                        The useRef Hook allows you to persist values between renders.

                        It can be used to store a mutable value that does not cause a re-render when updated.

                        It can be used to access a DOM element directly. <br /><br />
                        useRef( ) only returns one item. It returns an Object called current.

                        When we initialize useRef we set the initial value: useRef(0). <br /><br />
                        In general, we want to let React handle all DOM manipulation.

                        But there are some instances where useRef can be used without causing issues.
                    </p>
                </Accordion.Content>
            </Accordion.Panel>
        </Accordion>
    );
};

export default Faq;