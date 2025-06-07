//Object Orhented Programing
class student {
    constructor(name, age) {//if we want to pass any parameter into our class then pass the variable the amout which is require then store their value by this keyword now you can use these variable anywhere by keyword this.variableName
        this.namee = name
        this.agee = age
        console.log('this is constructor');

    }


    methodOne() {
        console.log('Method One is here');

    }
    methodTwo() {
        console.log(`this is Method Two Name is ${this.namee} and age is ${this.agee}`);

    }
    static thisIStaticMethod() {//this method can not be access by converting it into object it can be easily excess by class name and then static method name
        /*
        
        student.thisISaticMrhtod()
        */
        console.log('this method cannot be access by converting into object');

    }
}
let ThisObject = new student('ALI HAIDER', 38429834)//here we are passing values into our object which was a class before 
ThisObject('ali',29923)
ThisObject.methodTwo()
student.thisIStaticMethod()
// this is a class and in this way a class is created in Object orihanted progrming 
/*
 for creating a class the class keyword is use after the keyword write the class name and then write different method which are basically functions without function keyword in this way different function or mehtods are created and 


 for calling any method or function we will firstly convert the class into Object by new keyword and wrap it into a veriable 

after then it will behave like the object and we can find out the value of it or find out the method inti 


*/

//============================ Inheritance ================================
class ClassOne {
    constructor(Name) {
        console.log('This is Class ONe');
    }
    myFunk() {
        console.log('this is Funk');
    }
    methodOne() {
    console.log('Method One is here');

    }
}
// let kkk = new ClassOne()
class inhert extends ClassOne {
constructor(){
    
    console.log('EXTENDED CONSTRUCTURE');
    
    super().methodOne()//super is use to gain the mehtod for inhertance
}
methodTwo() {
    
    console.log('THIS NEWWWW');
}

}
let hhh = new inhert
hhh.methodTwo()
//hhh.myFunk()//in this way we can inhert any class into an other class it mean we can access the all properties of other class by inheritance by the keyWord of extends