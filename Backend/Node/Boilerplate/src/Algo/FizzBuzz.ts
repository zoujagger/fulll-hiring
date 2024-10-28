export class FizzBuzz {

    public  executeFizzBuzz(num: number): string {

        if (num < 1) {
            throw new Error('Number must be greater than 0');
        }

        if (this.isFizzBuzz(num)) return 'FizzBuzz';
        if (this.isFizz(num)) return 'Fizz';
        if (this.isBuzz(num)) return 'Buzz';
        return num.toString();
    }

    private  isFizzBuzz(num: number): boolean {
        return this.isFizz(num) && this.isBuzz(num);
    }

    private  isFizz(num: number): boolean {
        return num % 3 === 0;
    }

    private  isBuzz(num: number): boolean {
        return num % 5 === 0;
    }
}