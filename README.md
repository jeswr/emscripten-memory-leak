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
0 4.416984 MB
: 13.135ms

500 3.492376 MB
: 220.677ms

1000 3.441976 MB
: 423.102ms

1500 3.336768 MB
: 638.71ms

2000 3.364496 MB
: 848.597ms

2500 3.350752 MB
: 1.053s

3000 3.389824 MB
: 1.259s

3500 3.389008 MB
: 1.462s

4000 3.39008 MB
: 1.666s

4500 3.396936 MB
: 1.867s

5000 3.38744 MB
: 2.070s

5500 3.365312 MB
: 2.283s

6000 3.366696 MB
: 2.485s

6500 3.357864 MB
: 2.687s

7000 3.360488 MB
: 2.893s

7500 3.354152 MB
: 3.104s

8000 3.392272 MB
: 3.313s

8500 3.396608 MB
: 3.516s

9000 3.364176 MB
: 3.731s

9500 3.40124 MB
: 3.940s
```
