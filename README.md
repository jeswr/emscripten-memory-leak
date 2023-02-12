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

0 4.486096 MB
: 16.328ms
(node:25767) MaxListenersExceededWarning: Possible EventEmitter memory leak detected. 11 uncaughtException listeners added to [process]. Use emitter.setMaxListeners() to increase limit
(Use `node --trace-warnings ...` to show where the warning was created)
(node:25767) MaxListenersExceededWarning: Possible EventEmitter memory leak detected. 11 unhandledRejection listeners added to [process]. Use emitter.setMaxListeners() to increase limit

500 32.665376 MB
: 745.318ms

1000 61.585728 MB
: 2.305s

1500 90.90124 MB
: 4.638s

2000 119.42228 MB
: 8.071s

2500 148.33056 MB
: 12.717s

3000 177.366872 MB
: 18.582s

3500 206.171688 MB
: 25.464s

4000 235.057432 MB
: 34.092s

4500 263.98108 MB
: 43.944s

5000 292.894856 MB
: 55.335s

5500 321.83052 MB
: 1:09.503 (m:ss.mmm)

6000 350.73076 MB
: 1:23.811 (m:ss.mmm)

6500 379.54028 MB
: 1:39.728 (m:ss.mmm)

7000 408.387104 MB
: 1:57.191 (m:ss.mmm)

7500 437.351992 MB
: 2:15.944 (m:ss.mmm)

8000 466.241464 MB
: 2:36.535 (m:ss.mmm)

8500 495.097408 MB
: 2:58.345 (m:ss.mmm)

9000 523.949912 MB
: 3:18.765 (m:ss.mmm)

9500 552.847256 MB
: 3:37.916 (m:ss.mmm)
```


Specs:
```
node: v19.3.0
npm: 9.2.0
```

# Using only the `.wasm`

To benchmark just instantiating the `.wasm` file run `npm run test:instantiate`

```
0 4.416976 MB
: 13.359ms

500 3.486304 MB
: 220.566ms

1000 3.435832 MB
: 438.607ms

1500 3.341616 MB
: 643.864ms

2000 3.362256 MB
: 861.728ms

2500 3.373504 MB
: 1.089s

3000 3.368864 MB
: 1.308s

3500 3.365744 MB
: 1.518s

4000 3.337288 MB
: 1.730s

4500 3.4592 MB
: 1.948s

5000 3.35376 MB
: 2.158s

5500 3.460416 MB
: 2.371s

6000 3.355656 MB
: 2.596s

6500 3.457744 MB
: 2.801s

7000 3.33712 MB
: 3.007s

7500 3.336984 MB
: 3.214s

8000 3.336912 MB
: 3.418s

8500 3.375136 MB
: 3.632s

9000 3.378264 MB
: 3.861s

9500 3.37656 MB
: 4.066s
```
