---
id: elixir
title: Elixir
sidebar_label: Elixir
---

*These guidelines are based on [The Elixir Style Guide](https://github.com/christopheradams/elixir_style_guide) and [Elixir Style Guide](https://github.com/lexmag/elixir-style-guide)*

* Make use of the Elixir v1.6 code formatter, that will take care of most of the syntactical stuff
* Instead of the usual 4 space indentation, use 2 space indentation
* Use snake_case for filenames for CamelCase module names
* Use snake_case for atoms, functions and variables
* Use parentheses when a `def` has arguments, and omit them when it doesn't
* Don't put a blank line after `defmodule`
* List module attributes and directives in the following order:
    1. @moduledoc
    2. @behaviour
    3. use
    4. import
    5. alias
    6. require
    7. defstruct
    8. @type
    9. @module_attribute
    10. @callback
    11. @macrocallback
    12. @optional_callbacks
* Make exception names end with a trailing `Error`
* Try to include `@type` and `@spec` declarations
* Use Dialyzer/Dialyxir to analyze your code
* Use Logger, rather than `IO.puts` in production code
* Parentheses are a must for local or imported zero-arity function calls
* Add underscores to decimal literals that have six or more digits (`1_000_000`)
* Don't try to setup concurrency all by yourself, rather use OTP for that (that's the reason you're using Elixir in the first place, right?)
* Even though Elixir allows it, never, ever, reassign variables!
* Represent each level of nesting within a module name as a directory, example:

```elixir
# file is called parser/core/xml_parser.ex

defmodule Parser.Core.XMLParser do
end
```

* Dont use parentheses for one-arity functions when using the pipe operator (`|>`)

```elixir
# Bad
some_string |> String.downcase |> String.trim

# Good
some_string |> String.downcase() |> String.trim()
```

* Use parentheses in function calls, especially inside a pipeline

```elixir
# Bad
f 3
2 |> rem 3 |> g

# Good
f(3)
2 |> rem(3) |> g
```

* Use the pipe operator to chain functions together.

```elixir
# Bad
String.trim(String.downcase(some_string))

# Good
f(3)
some_string |> String.downcase() |> String.trim()
```

* Use *bare* variables in the first part of a function chain

```elixir
# Bad
String.trim(some_string) |> String.downcase() |> String.codepoints()

# Good
f(3)
some_string |> String.trim() |> String.downcase() |> String.codepoints()
```
