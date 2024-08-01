class CustomArray {
    constructor() {
        this.array = [];
    }
  
    // Splice method
    customSplice(start, deleteCount, ...items) {
        let removed = [];
        let end = start + deleteCount;
        for (let i = start; i < end; i++) {
            removed.push(this.array[i]);
            this.array[i] = this.array[i + deleteCount];
        }
        this.array.length -= deleteCount;
  
        for (let i = this.array.length - 1; i >= start; i--) {
            this.array[i + items.length] = this.array[i];
        }
  
        for (let i = 0; i < items.length; i++) {
            this.array[start + i] = items[i];
        }
  
        return removed;
    }
  
    // Slice method
    customSlice(start, end) {
        let result = [];
        for (let i = start; i < end; i++) {
            result.push(this.array[i]);
        }
        return result;
    }
  
    // Includes method
    customIncludes(element) {
        for (let i = 0; i < this.array.length; i++) {
            if (this.array[i] === element) {
                return true;
            }
        }
        return false;
    }
  
    // ToLowerCase method
    customToLowerCase(str) {
        let result = '';
        for (let i = 0; i < str.length; i++) {
            let charCode = str.charCodeAt(i);
            if (charCode >= 65 && charCode <= 90) {
                result += String.fromCharCode(charCode + 32);
            } else {
                result += str[i];
            }
        }
        return result;
    }
  
    // ToUpperCase method
    customToUpperCase(str) {
        let result = '';
        for (let i = 0; i < str.length; i++) {
            let charCode = str.charCodeAt(i);
            if (charCode >= 97 && charCode <= 122) {
                result += String.fromCharCode(charCode - 32);
            } else {
                result += str[i];
            }
        }
        return result;
    }
  
    // Push method
    customPush(...items) {
        for (let i = 0; i < items.length; i++) {
            this.array[this.array.length] = items[i];
        }
        return this.array.length;
    }
  
    // Pop method
    customPop() {
        if (this.array.length === 0) {
            return undefined;
        }
        let removed = this.array[this.array.length - 1];
        this.array.length -= 1;
        return removed;
    }
  }
  
  // Example console.log uses
  let customArr = new CustomArray();
  customArr.customPush(1, 2, 3, 4, 5);
  console.log(customArr.array); 
  
  console.log(customArr.customSplice(1, 2, 9, 10)); 
  console.log(customArr.array); 
  
  console.log(customArr.customSlice(1, 3)); 
  
  console.log(customArr.customIncludes(4)); 
  console.log(customArr.customIncludes(6)); 
  
  console.log(customArr.customToLowerCase('HELLO WORLD')); 
  console.log(customArr.customToUpperCase('hello world'));
  
  customArr.customPush(6, 7);
  console.log(customArr.array);
  
  console.log(customArr.customPop()); 
  console.log(customArr.array);