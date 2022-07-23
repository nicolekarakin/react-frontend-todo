//https://https://www.typescriptlang.org/docs/handbook/2/objects.html
//https://stackoverflow.com/questions/51237668/typescript-declare-that-all-properties-on-an-object-must-be-of-the-same-type

const  doo=()=>{

   type User = {
      Username: string;
      Email?: string;
   }
   const user01 = {} as User;
   //const user02 = <User>{};
   user01.Email = "foo01@bar.com";
   console.log(user01);
//-----------------------------------------
   interface UserType {
      Username: string;
      Email?: string;
   };
   const user11 = {} as UserType;
   // const user12 = <UserType>{};
   //either an empty object or a UserType
   const user13 : UserType | Record<string, string|never> = {};
   user11.Email = "foo11@bar.com";
   // user12.Email = "foo12@bar.com";
   user13.Email = "foo13@bar.com";
   console.log(user11,user13);
   //-----------------------------------------
   const user21 : Record<string, string|never> = {};
   const user22 : Record<string, never> = {};
   const user23 : Record<"name", NonNullable<string> > = {name:""};
   user21.Email = "foo21@bar.com";
   //user22.Email = "foo22@bar.com";
   //user23.Email = "foo23@bar.com";
   console.log(user21,user22,user23);
   //-----------------------------------------
    type User2 = {
       Username: NonNullable<string>;
       Email?: string;
    }
   const user31 = {} as User2;
   // const user32 = <User2>{};
   //either an empty object or a UserType
   const user33 : User2 & Record<"name" , string> = {name:"", Username:""};
   user31.Email = "foo31@bar.com";
   // user32.Email = "foo32@bar.com";
   user33.Email = "foo33@bar.com";
   console.log(user31,user33);
   //-----------------------------------------
   type Animal1 = Record<string, number>;
   const a1: Animal1 = { age: 3, num: 6 };
   type Animal2 = Record<'name' | 'type' | 'age', string | number>;
   const a2: Animal2 = { name: 'Alfred', type: 'dog', age: 3 };
   //--------------------------------------------
   interface EmployeeData {
               role: string;
               salary: number;
   }
   type EmployeeName = 'tom' | 'alice' | 'jeff';
   const employees: Record<EmployeeName, EmployeeData> = {
               tom: { role: 'accountant', salary: 10 },
               alice: { role: 'manager', salary: 15 },
               jeff: { role: 'programmer', salary: 17 },
   };
   // --------------------------------------
   type Colorful ={
      color: string;
   }
   interface Circle {
      radius: number;
   }

   type ColorfulCircle = Colorful & Circle;
   const g1:ColorfulCircle={ color: "blue", radius: 42 }
   //const g2:ColorfulCircle={  }
   // const g3:ColorfulCircle={radius: 42 }

   type ColorfulCircle2={
      color: string;
      radius: number;
   }
   const k1:ColorfulCircle2={ color: "blue", radius: 42 }
   // const k2:ColorfulCircle2={  }
   // const k3:ColorfulCircle2={radius: 42 }
   // --------------------------------------

}

const TypeVariables=()=>{
   return(
       <p>mmm</p>
   )
}
export default TypeVariables