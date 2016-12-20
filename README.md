# Lazy loading the compiler.

A small POC for lazy loading the compiler while using AOT compilation for the main bundle.

See [the blog post](http://blog.assaf.co/angular-2-harmony-aot-compilation-with-lazy-jit-2/) this repo was built for.

**Either:** 
- Compile the app (`npm run compile`)
- run it in a server (e.g: `cd dist/client` & `http-server`)
- Open it in the browser 

**OR:**
- Go to [AOT compiled demo](https://shlomiassaf.github.io/lazy-jit)

**Then:**
- Open `network` tab on your dev-tools window.
- Click on the **Lazy** menu. 
- See the compiler lazy load in the `network` tab
- Click on the `Add` button to compile and instantiate a component on the fly.

On the right, the lazy loaded module, with the compiler bundled in.
On the left, the main bundle, no compiler.

![image](https://cloud.githubusercontent.com/assets/5377501/21351744/d5264a58-c6c6-11e6-830e-43a83d455068.png)
