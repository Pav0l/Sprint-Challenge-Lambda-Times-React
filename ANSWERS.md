## Self-Study/Essay Questions

- [ ] What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

PropTpyes are a form of Typechcking. That means a way to check the type of data beying passed between components. JavaScript is a dynamicly typed language,
however with large scale apps this can be an issue and source of many bugs (when you pass wrong data type into certain variables/functions/...). With PropTypes,
you can prevent these bugs by defining specific data type some data should have.

- [ ] Describe a life-cycle event in React?

The life-cycle event can be described in several phases:
  1. Mounting - in this phase the component is beying build "from scratch". Whatever initial data is defined in `constructor`. `Render` method is invoked 
  and `componentDidMount` method is called at the end of this phase.
  2. Updating - in this phase the component can be updated. `setState` can be used to manipulate state, forcing a `render` call. Once the component is updated `componentDidUpdate` gets called.
  3. Unmounting - is a phase where the component is removed from the screen. `componentWillUnmount` can be called and used to clean up any side-effects the component might have invoked.

- [ ] Explain the details of a Higher Order Component?

Higher-Order-Components (HOC) are similar to higher order functions. They take a component as an argument and return another 'modified' component without changing the component passed in 
argument. This allows us to share functionality of components passed in as arguments in multiple other components, achieving higher reusability.

- [ ] What are three different ways to style components in React? Explain some of the benefits of each.

  1. Inline styling - styles the components with HTML inline `style` tag, giving them high specificity. The benefit of this method is that you don't need any additional library. Often use with React Native applications.
  2. Styled Components - is a library for writing CSS in our JS files. You can customize styles yourself and keep them with your components, achieving great reusability. You can also utilize components functionality like props and use conditional styling depending on user interactions with the app.
  3. Reactstrap - Bootstrap Styling library for React Components. Good if you need to mock up quick landing page with lots of predefined styles for lots of elements. Has a lot of downside,
  when you want to customize the styles yourself.