import compiler from './compilerText.js';
import routeCompiler from './compilerRoutes.js';

// test('inserts name and outputs js', async () => {
//     const stats = await compiler('hello.txt');
//     const output = stats.toJson().modules[0].source;
//     expect(output).toBe('export default "Hey mike!\\n"');
// })

test('modifies routes', async () => {
    const stats = await routeCompiler('../src/routes/routes.json');
    console.log(12, 'stats: ', stats);
   // const output = stats.toJson().modules[0].source;
    expect(output).toBe('export default "Hey mike!\\n"');
})
