export class Random {

    /**
     * Generates Unique Random Integers Within The Range(Min,Max)
     * Sorted in Ascending Order
     */
    integers(min: number, max: number, count = 1): string[] {
        let randomIntegers: string[] = [];
        if (min > max) {
            throw 'Random Integers : Min > Max';
        }
        else if (max - min < count) {
            throw 'Random Integers : Max-Min < Count';
        }
        else {
            while (randomIntegers.length < count) {
                let randomInteger = Math.floor(Math.random() * (1 + max - min) + min).toString();
                if (randomIntegers.indexOf(randomInteger) == -1) {
                    randomIntegers.push(randomInteger);
                }
            }
        }
        return randomIntegers.sort(function (a, b) { return Number(a) - Number(b) });
    }

    /**
     * Generates Unique Random Floats Within The Range(Min,Max) & Fixed To The Decimal Places Provided
     * Sorted in Ascending Order
     */
    floats(min: number, max: number, count = 1, decimalPlaces = 4): string[] {
        let randomFloats: string[] = [];
        if (min > max) {
            throw 'Random Floats : Min > Max';
        }
        else if (max - min < count) {
            throw 'Random Floats : Max-Min < Count';
        }
        else {
            while (randomFloats.length < count) {
                let randomFloatNo = parseFloat((Math.random() * (1 + max - min) + min).toFixed(decimalPlaces));
                let randomFloat = randomFloatNo.toString().replace('0.0', '0.1');
                if (randomFloats.indexOf(randomFloat) == -1) {
                    randomFloats.push(randomFloat);
                }
            }
        }
        return randomFloats.sort(function (a, b) { return Number(a) - Number(b) });
    }

    /**
     * Generates Unique Strings Of Array. Duplicate Values Are Removed. Empty Value '' is replaced by Space
     */
    strings(length = 255, specialCharacters = true, count = 1): string[] {
        let randomStr = [];
        for (let i = 0; i < count; i++) {
            let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            let result = '';
            if (specialCharacters == true) {
                characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789 ~!@#$%^&*()_+:{}[]<>';
            }
            let stringLength = Number(this.integers(1, length)[0]);
            for (let j = 0; j < stringLength; j++) {
                result += characters.charAt(Math.floor(Math.random() * characters.length));
            }
            if (result.trim() == '') {
                result = result.replace('', 'space' + i).trim();
            }
            randomStr.push(result.trim().replace(/  +/g, ' '));
        }
        return [...new Set(randomStr.sort())];
    }

}
