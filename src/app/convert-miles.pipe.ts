import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertMiles'
})
export class ConvertMiles implements PipeTransform {

  transform(value: number, targetedType: string): any {
    if (!value) {
      return '';
    }
    switch(targetedType){  
      case 'km':
        return value * 1.60934;
      case 'm':
        return value * 1.60934*1000;
      case 'cm':
        return value * 1.60934*100000;
      default:
        throw new Error('Target unit not supported');
    }
  }
}
