# Usage

After cloning the repo run

```
npm i

# Generate the WebAssembly Module
npm run build

# Run the benchmark
npm t
```

# Output

The output of running the above is:

```bash
0 4.009176 MB
(node:19203) MaxListenersExceededWarning: Possible EventEmitter memory leak detected. 11 uncaughtException listeners added to [process]. Use emitter.setMaxListeners() to increase limit
(Use `node --trace-warnings ...` to show where the warning was created)
(node:19203) MaxListenersExceededWarning: Possible EventEmitter memory leak detected. 11 unhandledRejection listeners added to [process]. Use emitter.setMaxListeners() to increase limit
500 32.66416 MB
1000 61.583528 MB
1500 90.697 MB
2000 119.509136 MB
2500 148.349216 MB
3000 177.320288 MB
3500 206.178688 MB
4000 235.117816 MB
4500 263.962832 MB
5000 292.856584 MB
5500 321.706136 MB
6000 350.706224 MB
6500 379.498472 MB
7000 408.274304 MB
7500 437.271784 MB
8000 466.122048 MB
```


Specs:
```
node: v19.3.0
npm: 9.2.0
```
