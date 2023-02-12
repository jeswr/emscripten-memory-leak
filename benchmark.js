const helloWorld = require('./dist')

async function main() {
  console.time('')

  for (let i = 0; i < 10_000; i += 1) {
    if (i % 500 === 0) {
      // Force time for garbage collection
      await new Promise(res => setTimeout(res, 10));
      console.log()
      console.log(i, process.memoryUsage().heapUsed / 1000000, 'MB');
      console.timeLog('')
    }
    await helloWorld();
  }
}

main()
