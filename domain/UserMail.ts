export class UserMail {
    value: string;
    constructor(value: string) {
        this.value = value;
    }

    private mailIsValid() {
        if (!this.value.includes('@') || !this.value.includes('.') || this.value.length < 5 || this.value.includes(" ")) {
            throw new Error('Invalid mail');
        }
    }
}