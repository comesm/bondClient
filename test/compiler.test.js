import compiler from './compiler.js';

test('inserts name and outputs js', async () => {
    const stats = await compiler('hello.txt');
    const output = stats.toJson().modules[0].source;
    expect(output).toBe('export default "Hey Alice!\\n"');
})
