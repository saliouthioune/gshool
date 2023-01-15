import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'etudiantFilter'
})
export class EtudiantPipe implements PipeTransform {

  transform(list:any, search:string): any {
    console.log(search);
    if(search){
      return list.filter(row => {
        return (row.email.toLowerCase().includes(search.toLowerCase())
        );
      });
    }
    return list;
  }

}
