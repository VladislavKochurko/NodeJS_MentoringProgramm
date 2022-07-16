export function task1_1(): void {
    process.stdin.on('data', (data: string) => {
        const reversedString = data.toString().split('').reverse().join('');
        process.stdout.write(reversedString + '\n');
    });
}

task1_1();
