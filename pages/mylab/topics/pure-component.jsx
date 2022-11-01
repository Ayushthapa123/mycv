import React from 'react'
import styles from './sass/topic.module.scss';

export default function PureComponent() {
  return (
<div className={styles.topic}>
<h1>Pure Components</h1>
    <div className={styles.pure}>
<li>A React component is said to be pure if it renders the same output for the same state and props.</li>
<li>Pure components are used to increase performance.</li>
<li>props & state change are the only reasons for component re-render in pure component. but in normal component that is not the case so performance decreases because of excessive re-render</li>

<li>Class components that extend the React.PureComponent classes are treated as pure components.</li>
<li>To create a pure functional component in React, React provides a React.memo() API</li>
<li>React.memo() is a <strong>higher-order</strong> component that takes a React component as its first argument and returns a pure React component.</li>
<li>Basically, pure component prevent component to re-render unnecesserely.</li>

</div>

<p>References: <a href="https://www.geeksforgeeks.org/what-is-a-pure-functional-component-in-reactjs/">https://www.geeksforgeeks.org/what-is-a-pure-functional-component-in-reactjs/</a></p>

<p>"export default memo(Index);"</p>


<h2>Higher-Order Components</h2>
<li>Higher-order components or HOC is the advanced method of reusing the component functionality logic. It simply takes the original component and returns the enhanced component.</li>
    <li>Syntax: const EnhancedComponent = higherOrderComponent(OriginalComponent);</li>
    <li>Const ironman=WithSuit(TonyStark)</li>
    
    </div>
  )
}
