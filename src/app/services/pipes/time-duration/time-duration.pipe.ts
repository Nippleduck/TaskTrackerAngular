import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'timeDuration'
})
export class TimeDurationPipe implements PipeTransform {

  transform(dateString: string, args?: any): any {
    return moment.duration(dateString, "minutes").humanize();
  }
}
