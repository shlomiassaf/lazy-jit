# Lazy loading the compiler.

A small POC for lazy loading the compiler while using AOT compilation for the main bundle.

**Either:** 
- Compile the app (`npm run compile`)
- run it in a server (e.g: `cd dist/client` & `http-server`)
- Open it in the browser 

**OR:**
- Go to [AOT compiled demo](https://shlomiassaf.github.com/lazy-jit)

**Then:**
- Open `network` tab on your dev-tools window.
- Click on the **Lazy** menu. 
- See the compiler lazy load in the `network` tab
- Click on the `Add` button to compile and instantiate a component on the fly.

