class Persona{
    constructor(name,age){
        this.name=name;
        this.age=age;
        this.stomage= [];
    }


    eat(food) {
        if(this.stomage.length<10){
            this.stomage.push(food);
        }
        else
            console.log("Estas lleno");
    }

    poop(){
        this.stomage=[];
    }

    toString(){
        return this.name+", "+this.age;
    }
}


marcos= new Persona("Marcos", 22);

for(let i=0;i<10;i++){
    marcos.eat("Pescado");
}


marcos.eat("Postre");
marcos.poop();
marcos.eat("Postre");


console.log(marcos.toString());

class Vehiculo {
    constructor(model,milesperGallon){
        this.model=model;
        this.milesperGallon=milesperGallon;
        this.tank=0;
        this.odometer=0;
    }


    fill(galoon){
        this.tank+=galoon;
    }

    drive(distance){
        while(distance>0&&this.tank>0){
            this.tank-=this.milesperGallon;
            this.odometer+=1;
            distance--;        
            console.log(this.tank +" gaso."+this.odometer+" km." +distance+" resta.");
        }
        if(this.tank<=0){
            console.log("I ran out ot fuel at "+ this.odometer+" km" );
        }
    }
}

var mercedes= new Vehiculo("mercedes",0.5);

mercedes.fill(10);

mercedes.drive(20);



class Lambdasian{
    constructor(objeto){
        this.name=objeto.name;
        this.age=objeto.age;
        this.location=objeto.location;
    }

    speak(){
        return "Hello my name is "+ this.name + ", I am from "+ this.location;
    }

}

pepe= new Lambdasian(a={name:"pepe",age:12,location:"Spain"});

console.log(pepe.speak());  


class Instructor extends Lambdasian{
    constructor(objeto,specialty,favLanguage,catchPhrase){
        super(objeto);
        this.specialty=specialty;
        this.favLanguage=favLanguage;
        this.catchPhrase=catchPhrase;
    }

    demo(subject){
        return "Today we are learning about "+ subject;
    }

    grade(student,subject){
        return student.name +" receives a perfect score on " +subject;
    }

    gradding(student){
        let maximo=100-student.grade;
        let gradua=Math.round(Math.random()*(2-1)+1);
        if(gradua==1){
        student.setGrade(student.grade+Math.round(Math.random()*(maximo-1)+1));
        }else
            student.setGrade(student.grade-(Math.round(Math.random()*(student.grade-1)+1)));
    }

}

    

mateo=new Instructor(a={name:"Mateo",edad:12,location:"Spain"},"Math","spanish","Matar moscas a cañonazos");
console.log(mateo.demo("MATES"));
console.log(mateo.grade(alumno={name:"Alberto"},"english"));

class Student extends Lambdasian{
    constructor(objeto,previousBackground,className,favSubjects){
        super(objeto);
        this.previousBackground=previousBackground;
        this.className=className;
        this.favSubjects=favSubjects;
        this.grade=Math.floor(Math.random()*(100-1)+1);

    }
    setGrade(grade){
        this.grade=grade;
    }

    listSubjects(){
        return "Loving "+ this.favSubjects.join(",")+"!";
    }
    
    PRAssignment(subject){        
        return this.name +" has submitted a PR for "+ subject;
    }

    sprintChallenge(subject){
        return this.name +" has begun sprint challenge on "+ subject;
    }

    graduate(profesor){
        while(this.grade<70){
            console.log(this.grade);
            profesor.gradding(this);
        }
        console.log("GRADUADO");
    }

}



pablo=new Student(a={name:"pablo",age:8,location:"Malaga"},"AAAAAAA","3ºB",["Html","CSS","JavaScript"]);

console.log(pablo.listSubjects());
console.log(pablo.PRAssignment("HTML"));
console.log(pablo.sprintChallenge("CSS"));


class ProjectManager extends Instructor{
    constructor(objeto,specialty,favLanguage,catchPhrase,gradClassName,favInstructor){
        super(objeto,specialty,favLanguage,catchPhrase);
        this.gradClassName=gradClassName;
        this.favInstructor=favInstructor;
    }

    standUp(channel){
        return this.name +" announces to "+channel+", @"+channel+" standy times!";
    }

    debugsCode(alumno,subject){
        return this.name+" debugs "+alumno.name+"'s code on "+subject;
    }
}


ricardo=new ProjectManager(a={name:"Ricardo",edad:30,location:"Spain"},"Math","spanish","Matar moscas a cañonazos","CS1","Pablo");

console.log(ricardo.standUp("INSTAGRAM"));
console.log(ricardo.debugsCode(pablo,"HTML"));



pablo.graduate(mateo);