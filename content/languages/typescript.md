# Typescript

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

# Security

* For security reasons try to avoid using FTP, rather use SFTP or connect through SSH and pull from the Git repo (with a deploy key)
* When using SSH, if possible, use an SSH-key and not just a password. This is to improve security
* For deployment using Git, or when setting up Git on a remote server, always use deploy keys, and do not reuse these keys
* When you add any login credentials or keys in a Git repo, even if it's a private repo with limited access, encrypt the files containing the credentials/keys if possible for maximum security, try to avoid having any sensitive information in version control
* Make use of (gitignored) `.env` files to keep environment variables secret, and easy to setup between environments
* Try to avoid writing SQL statements yourself, use a query builder like [KnexJS](https://knexjs.org)
* When writing SQL statements always make use of prepared statements
* Our complete security policy can be found on [security.bytecode.nl](https://security.bytecode.nl)
