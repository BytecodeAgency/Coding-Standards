---
id: lang_typescript
title: Typescript and Javascript
sidebar_label: Typescript and Javascript
---

## React

* With React, we loosly follow the [Fractal structure](https://hackernoon.com/fractal-a-react-app-structure-for-infinite-scale-4dab943092af) guidelines (which is comparable to [Atomic Design](https://cheesecakelabs.com/blog/rethinking-atomic-design-react-projects/))
* With our React structure, we use the layers `pages` (web) or `screens` (native), `sections`, `containers` and `components` (in this order)
* To create React(-Native) folders according to the Bytecode Coding Standards, you can use the [Bytecode React CLI](https://github.com/BytecodeAgency/Bytecode-React-CLI)

## Typescript

* Unless working with untyped legacy Javascript-code, don't use implicit any

```ts
// Bad
const example = (array: any[]) => {}

// Good
const example = (array: SomeType[]) => {}
```

* Use PascalCase for classes, types, namespaces, enums and enum members

```ts
// Bad
enum something {
    MEMBER_OF_ENUM = "MEMBER_OF_ENUM"
}

// Good
enum Something {
    MemberOfEnum = "MemberOfEnum"
}
```

* Don’t use the types Number, String, Boolean, as these types refer to non-primitive boxed object, use the lower case variants

```ts
// Bad
type Example = Number | String | Boolean

// Good
type Example = number | string | boolean
```

* Unless needing to use generics, prefer arrow functions over regular function declarations

```ts
// Bad
function exampleFun (argument: DefinedType) {}

// Good
const exampleFun = (argument: DefinedType): DefinedType => {}
function exampleFun<T> (argument: T) {}
```

* Annotate arrays as `members: Member[]`, rather than `members: Array<Member>`

```ts
// Bad
const examples: Array<Example> = someValue;

// Good
const examples: Example[] = someValue;
```

* The use of `async await` is prefered over generator functions or using promises

```ts
// Bad
somePromise.then(val => val.data).catch(err => handleErr(err));

// Good
try {
    const { data } = await somePromise();
    return data
} catch (err) {
    handleErr(err);
}
```

* For React in Typescript (TSX), type your functional components using `React.FC<PropsInterface>`

```ts
// Bad
const ExampleComponent = ({ text }: { text: string }) => (<div>{text}</div>)

// Good
const ExampleComponent: React.FC<ExampleCompomentProps> = ({ text }) => (<div>{text}</div>)
interface ExampleCompomentProps { // Note: put me in the ExampleCompomentProps.types.ts file!
    text: string;
}
```

* Do not prefix your interfaces with "I", so use `interface Member{}` over  `Interface IMember {}`

```ts
// Bad
interface IExample {}

// Good
interface Example {}
```

* Prefer using functional components over class-based components (classes transpiled to ES5 generate a much larger bundle!)

```ts
// Bad
class Example extends React.Component {
    constructor () {
        this.setState({ count: 0 });
        this.increment = this.increment.bind(this)
    }
    increment() { this.setState({ count: this.state.count + 1 }) }
    render() {
        return (
            <div>
                <button onClick={this.increment}>Plus one!</button>
                {count}
            </div>
        )
    }
}

// Good
const Example = () => {
    const [count, setCount] = useState(0);
    const increment = setCount(count + 1);
    return (
        <div>
            <button onClick={increment}>Plus one!</button>
            {count}
        </div>
    );
}
```

* Try to avoid using `object` but define an interface
* For objects, use `foo: {}` or a typed interface over `foo: object`
* Try to avoid using the `any` type, for generics, use a type variable like `<T>`
* For React component files (and folders), use `PascalCaseComponent.tsx` for filenames, otherwise don't use capital letters in filenames
* Prefer interface over type, use type when you need a union or intersection
* Only use the `.tsx` file extension if JSX is actually used
* For tests, we prefer `file.test.ts` over `file.spec.ts`
* End-to-end tests should be put in a `tests/` (not `__tests__`)-directory at the root of the repository
* For a single export, prefer `export default` over `export const foo = () => {}` unless it's unconventional (f.e. Redux exports)
* Prefer absolute imports (`import costCalculator from '@projectname/helpers/calculations/costs'`) over relative imports (`import costCalculator from '../../helpers/calculations/costs'`)
* For absolute imports, use the `@projectname` prefix
* Don't create `index.ts` files to export default other files, we prefer the longer import path (`import Button from 'components/Button/Button'`) over `index.ts(x)` files everywhere
* Put related files in subfolders, together with test files, for example:

```
/src/components/Button/Button.tsx
/src/components/Button/Button.components.ts
/src/components/Button/Button.types.ts
/src/components/Button/Button.test.tsx
```

## Javascript

*Our guidelines are mostly based on the Airbnb ESLint config, with a few a couple of modifications*

* The usage of Typescript is encouraged to ensure type safety, try to avoid Javascript where possible
* Only use `let` (only for mutable values, try to avoid) and `const` (immutable, prefered), not `var`
* For websites not built on a Javascript-framework, try to work just with vanilla Javascript, and try to avoid jQuery
* Use Yarn as a package manager: [it's better than NPM](https://www.sitepoint.com/yarn-vs-npm/)
* If your code is used in lots of places, comment it following the [ESDoc](https://esdoc.org/) notation, it's understood by (almost) every code editor and IDE
