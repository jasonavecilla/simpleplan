# Project info

## How to start project

run in your terminal

```
cd client
npm i
npm run dev
```

## Rules for naming branches
Each branch should carry the type of functionality being implemented

`feature/number of task from backlog or name of task` (TBD)
`doc/number of task from backlog or name of task`
`bugfix/number of task from backlog or name of task`

## Rules for commits
Each commit should contain the name of the branch and a brief description of the implemented functionality, which allows you to understand what changes have been made in the code
Commit examples:

```
[feature/number of task from backlog or name of task]: Add phone number input field validation
```

Before committing you code run formalin script to keep code styling for all team the same:

```
npm run format
```

## Source Directory

- **app:** Folder for smart components containing business logic.

- **assets:** Folder for icons and images.

- **components:** Folder for dumb components responsible only for displaying content and unaware of the environment.

  - **name-of-component:** Folder for each component and its stylesheet. Use kebab-case for naming the folder. Follow the example in `client/src/components/counter-example` for reference.

    - **index.jsx:** Main file for the component. Always use `index.jsx`.

    - **style.css:** Stylesheet for the component. Always use `style.css`.

- **redux:** Folder for the Redux store.
- **util:** Folder for helper functions.

## Class names rule
Use BEM (Block Element Modifier) methodology for naming classes in your JSX and CSS.

Examle: 
```
<div className='Counter'>
	<p className='Counter__text'>Count: {count}</p>
	<button className='Counter__text' onClick={callbacks.handleIncrement}>
		Increment
	</button>
	<button
		className='Counter__button Counter__button-disabled'
		onClick={callbacks.handleDecrement}
	>
		Decrement
	</button>
</div>
```

Here's an explanation of the classes:

Counter: This is the main block or component.
Counter__text: This is an element inside the Counter block for styling text.
Counter__button: This is an element inside the Counter block for styling buttons.
Counter__button-disabled: This is a modifier for the Counter__button element, indicating a disabled state.

## Documentation
Use JSDoc syntax for documenting components an function:

Example: 

```
/**
 * Functional component representing a simple counter.
 *
 * @component
 * @example
 * // Example usage of Counter component
 * <Counter initialCount={0} />
 *
 * @param {Object} props - React component props.
 * @param {number} props.initialCount - Initial count value.
 * @returns {JSX.Element} - Rendered Counter component.
 */
function Counter({initialCount}) {...
```

