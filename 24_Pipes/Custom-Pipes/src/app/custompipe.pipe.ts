import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipe'
})
export class CustompipePipe implements PipeTransform {

  transform(value: any, ...args): any {

    /*
      The VALUE passed is 'Hello'.
      The ARGUEMENT passed is 'message'.
      If the 0th arguement matches with the arguement passed in the HTML file which is custompipe:"message" then it adds the 'str' value.
    */
    
    let str = value;

    if(args[0] == "message")
    {
      str += "This is an example of custom pipe"; 
    }
    console.log(value,args);
    return str;
  }

}
