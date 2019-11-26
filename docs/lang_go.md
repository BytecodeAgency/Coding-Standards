---
id: lang_go
title: Go
sidebar_label: Go
---

**We follow the Go conventions, and use the formatter `go fmt` without any modifications**

*The following guidelines are based on [@bahlo's guidelines on GitHub](https://github.com/bahlo/go-styleguide), which are licenced under the Unlicence-licence*

* Use [modules](https://github.com/golang/go/wiki/Modules), since it is the built-in go dependency  management tooling and will be widely supported (available with Go 1.11+).
* Add examples to your test files to demonstrate usage
* Use all the linters included in [golangci-lint](https://github.com/golangci/golangci-lint) to lint your projects before committing.
* Avoid writing code that contains or depends on side effects
* Empty interfaces make code more complex and unclear, avoid them where you can.
* Use internal packages, if you're creating a cmd, consider moving libraries to `internal/` to prevent
import of unstable, changing packages.
* Avoid helper/util: use clear names and try to avoid creating a `helper.go`, `utils.go` or even
package.
* Embed binary data: to enable single-binary deployments, use tools to add templates and other static
assets to your binary (e.g. [github.com/gobuffalo/packr](https://github.com/gobuffalo/packr)).
* Don't under-package, deleting or merging packages is far more easier than splitting big ones up.
When unsure if a package can be split, do it.
* Add context to errors, wrapping errors with a custom message provides context as it gets propagated up
the stack.

```go
// Bad
file, err := os.Open("foo.txt")
if err != nil {
	return err
}

// Good
file, err := os.Open("foo.txt")
if err != nil {
	return fmt.Errorf("open foo.txt failed: %w", err)
}
```

* Add structure to your logging

```go
// Bad
log.Printf("Listening on :%d", port)
http.ListenAndServe(fmt.Sprintf(":%d", port), nil)
// 2017/07/29 13:05:50 Listening on :80

// Good
import "github.com/sirupsen/logrus"
logger.WithField("port", port).Info("Server is listening")
http.ListenAndServe(fmt.Sprintf(":%d", port), nil)
// {"level":"info","msg":"Server is listening","port":"7000","time":"2017-12-24T13:25:31+01:00"}
```

* Avoid global variables

```go
// Bad
var db *sql.DB
func main() {
	db = // ...
	http.HandleFunc("/drop", DropHandler)
	// ...
}
func DropHandler(w http.ResponseWriter, r *http.Request) {
	db.Exec("DROP DATABASE prod")
}

// Good
func main() {
    db := // ...
	handlers := Handlers{DB: db}
	http.HandleFunc("/drop", handlers.DropHandler)
	// ...
}
type Handlers struct {
	DB *sql.DB
}
func (h *Handlers) DropHandler(w http.ResponseWriter, r *http.Request) {
	h.DB.Exec("DROP DATABASE prod")
}
```

* Use structs to encapsulate the variables and make them available only to those functions that actually need them by making them methods implemented for that struct. Alternatively higher-order functions can be used to inject dependencies via closures.

```go
func main() {
	db := // ...
	http.HandleFunc("/drop", DropHandler(db))
	// ...
}

func DropHandler(db *sql.DB) http.HandleFunc {
	return func (w http.ResponseWriter, r *http.Request) {
		db.Exec("DROP DATABASE prod")
	}
}
```

* For larger project with complex testing use an assert libary (when the built in testing library is not sufficient)

```go
// Bad
func TestAdd(t *testing.T) {
	actual := 2 + 2
	expected := 4
	if (actual != expected) {
		t.Errorf("Expected %d, but got %d", expected, actual)
	}
}

// Good
import "github.com/stretchr/testify/assert"
func TestAdd(t *testing.T) {
	actual := 2 + 2
	expected := 4
	assert.Equal(t, expected, actual)
}
```

* Use table driven tests

```go
// Bad
func TestAdd(t *testing.T) {
	assert.Equal(t, 1+1, 2)
	assert.Equal(t, 1+-1, 0)
	assert.Equal(t, 1, 0, 1)
	assert.Equal(t, 0, 0, 0)
}

// Good
func TestAdd(t *testing.T) {
	cases := []struct {
		A, B, Expected int
	}{
		{1, 1, 2},
		{1, -1, 0},
		{1, 0, 1},
		{0, 0, 0},
	}

	for _, tc := range cases {
		t.Run(fmt.Sprintf("%d + %d", tc.A, tc.B), func(t *testing.T) {
			t.Parallel()
			assert.Equal(t, t.Expected, tc.A+tc.B)
		})
	}
}
```

* Avoid mocks (Only use mocks if not otherwise possible, favor real implementations. – [Mitchell Hashimoto at GopherCon 2017](https://youtu.be/8hQG7QlcLBk?t=26m51s))

```go
// Don't
func TestRun(t *testing.T) {
	mockConn := new(MockConn)
	run(mockConn)
}

// Good
func TestRun(t *testing.T) {
	ln, err := net.Listen("tcp", "127.0.0.1:0")
	t.AssertNil(t, err)

	var server net.Conn
	go func() {
		defer ln.Close()
		server, err := ln.Accept()
		t.AssertNil(t, err)
	}()

	client, err := net.Dial("tcp", ln.Addr().String())
	t.AssertNil(err)

	run(client)
}
```

* Avoid DeepEqual

```go
// Bad
type myType struct {
	id         int
	name       string
	irrelevant []byte
}
func TestSomething(t *testing.T) {
	actual := &myType{/* ... */}
	expected := &myType{/* ... */}
	assert.True(t, reflect.DeepEqual(expected, actual))
}

// Good
type myType struct {
	id         int
	name       string
	irrelevant []byte
}
func (m *myType) testString() string {
	return fmt.Sprintf("%d.%s", m.id, m.name)
}
func TestSomething(t *testing.T) {
	actual := &myType{/* ... */}
	expected := &myType{/* ... */}
	if actual.testString() != expected.testString() {
		t.Errorf("Expected '%s', got '%s'", expected.testString(), actual.testString())
	}
	// or assert.Equal(t, actual.testString(), expected.testString())
}
```

* Use meaningful variable names, avoid single-letter variable names (except in cases like `t` in tests, `r` and `w` in http request handlers and `i` in a loop).

```go
// Bad
func findMax(l []int) int {
	m := l[0]
	for _, n := range l {
		if n > m {
			m = n
		}
	}
	return m
}

// Good
func findMax(inputs []int) int {
	max := inputs[0]
	for _, value := range inputs {
		if value > max {
			max = value
		}
	}
	return max
}
```

* Favour pure functions (handle IO in IO helpers)

```go
// Bad
func MarshalAndWrite(some *Thing) error {
	b, err := json.Marshal(some)
	if err != nil {
		return err
	}

	return ioutil.WriteFile("some.thing", b, 0644)
}

// Good
func Marshal(some *Thing) ([]bytes, error) {
	return json.Marshal(some)
}
```

* Don't over-interface

```go
// Bad
type Server interface {
	Serve() error
	Some() int
	Fields() float64
	That() string
	Are([]byte) error
	Not() []string
	Necessary() error
}
func debug(srv Server) {
	fmt.Println(srv.String())
}
func run(srv Server) {
	srv.Serve()
}

// Good
type Server interface {
	Serve() error
}

func debug(v fmt.Stringer) {
	fmt.Println(v.String())
}

func run(srv Server) {
	srv.Serve()
}
```

* Handle signals

```go
// Bad
func main() {
	for {
		time.Sleep(1 * time.Second)
		ioutil.WriteFile("foo", []byte("bar"), 0644)
	}
}

// Good
func main() {
	logger := // ...
	sc := make(chan os.Signal, 1)
	done := make(chan bool)

	go func() {
		for {
			select {
			case s := <-sc:
				logger.Info("Received signal, stopping application",
					zap.String("signal", s.String()))
				done <- true
				return
			default:
				time.Sleep(1 * time.Second)
				ioutil.WriteFile("foo", []byte("bar"), 0644)
			}
		}
	}()

	signal.Notify(sc, os.Interrupt, os.Kill)
	<-done // Wait for go-routine
}
```

* Avoid unadorned return

```go
// bad
func run() (n int, err error) {
	// ...
	return
}

// Good
func run() (n int, err error) {
	// ...
	return n, err
}
```


* Use canonical import path

```go
// Bad
package sub

// Good
package sub // import "github.com/my-package/pkg/sth/else/sub"
```

* If a struct has more than one field include field names when instantiating it

```go
// Bad
params := myStruct{
	1, 
	true,
}

// Good
params := myStruct{
	Foo: 1,
	Bar: true,
}
```

* Avoid `new` keyword

```go
// Bad
s := new(MyStruct)

// Good
s := &MyStruct{}
```
