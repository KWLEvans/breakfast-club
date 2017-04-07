import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'memberFilter'
})
export class MemberFilterPipe implements PipeTransform {

  transform(input, sortType: string) {
    if (input) {
      if (sortType !== "all") {
        let output = [];
        input.forEach(member => {
          if (member.type === sortType) {
            output.push(member);
          }
        });
        return output;
      } else {
        return input;
      }
    }
  }
}
