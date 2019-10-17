---
id: typescript
title: Typescript and Javascript
sidebar_label: Typescript and Javascript
---

## Typescript

* Unless working with untyped legacy Javascript-code, don't use implicit any
* Use PascalCase for classes, types, namespaces, enums and enum members
* Don’t use the types Number, String, Boolean, or Object, as these types refer to non-primitive boxed object, use the lower case variants
* Try to avoid using the `any` type, for generics, use a type variable like `<T>`
* Annotate arrays as `members: Member[]`, rather than `members: Array<Member>`
* For objects, use `foo: {}` over `foo: object`
* The use of `async await` is prefered over generator functions
* For React in Typescript (TSX), type your functional components using `React.FC`
* For React component files, use `PascalCaseComponent.tsx` for filenames, otherwise don't use capital letters in filenames
* Do not prefix your interfaces with "I", so use `interface Member{}` over  `Interface IMember {}`
* Prefer interface over type, use type when you need a union or intersection
* Only use the `.tsx` file extension if JSX is used
* For tests, we prefer `file.test.ts` over `file.spec.ts`
* Integration and end-to-end tests should be put in a `tests/` (not `__tests__`)-directory at the root of the repository
* For a single export, prefer `export default` over `export const foo = () => {}`
* Prefer absolute imports (`import costCalculator from 'helpers/calculations/costs'`) over relative imports (`import costCalculator from '../../helpers/calculations/costs'`)
* Don't create `index.ts` files to export default other files, we prefer the longer import path (`import Button from 'components/Button/Button'`) over `index.ts(x)` files everywhere
* Put related files in subfolders, together with test files, for example:

```
/src/components/Button/Button.tsx
/src/components/Button/Button.types.ts
/src/components/Button/Button.test.tsx
```

## Javascript

*Our guidelines are mostly based on the Airbnb ESLint config, with a few a couple of modifications*

* The usage of Typescript is encouraged to ensure type safety, try to avoid Javascript
* Only use `let` and `const`, not `var`, and try to not use classes
* For websites not built on a Javascript-framework, try to work just with vanilla Javascript, and try to avoid jQuery
* Use Yarn as a package manager: [it's better than NPM](https://www.sitepoint.com/yarn-vs-npm/)
* Use arrow functions (`const foo = () => bar()`) where possible, avoid `function foo() {}`
* Comment your code following the [ESDoc](https://esdoc.org/) notation, it's understood by (almost) every code editor and IDE
