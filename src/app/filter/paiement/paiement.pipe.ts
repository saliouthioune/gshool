import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paiement'
})
export class PaiementPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
