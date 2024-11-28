import { AbstractControl,FormControl,ValidationErrors } from "@angular/forms";

// export const noSpacevalidation=(control:AbstractControl)=>{
//     if(control.value != null && control.value.indexOf(' ') != -1){
//         return {noSpacevalidation:true}
//     }
//     return null;
// }

export class noSpacevalidation{
    static customValidation(control:FormControl):ValidationErrors | null{
        if(control.value != null && control.value.indexOf(' ') != -1){
                    return {noSpacevalidation:true}
                }
                return null; 
    }
}