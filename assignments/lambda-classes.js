// CODE here for your Lambda Classes

class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    speak() {
        return `Hello my name is ${this.name} and I am from ${this.location}`
    }
}

class Instructor extends Person {
    constructor(instruct) {
        super(instruct);
        this.specialty = instruct.specialty;
        this.favLang = instruct.favLang;
        this.catchPhrase = instruct.catchPhrase;
    }

    demo(subject) {
        return `Today we are learning about ${subject}`;
    }

    grade(studentObj, subString) {
        return `${studentObj.name} recieves a perfect score on ${subString}`;
    }
}

class Student extends Person {
    constructor(student) {
        super(student);
        this.previousBackground = student.previousBackground;
        this.className = student.className;
        this.favSubjects = student.favSubjects;
    }

    listsSubjects(arr) {
        arr.map((x) => {
            return x;
        });
    };

    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }

    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`
    }
};

class ProjectManagers extends Instructor {
    constructor(project) {
        super(project);
        this.gradClassName = project.gradClassName;
        this.favInstructor = project.favInstructor;
    };

    standUp(slackChannel) {
        return `${this.name} announces to ${slackChannel}, @channel standy times!`
    };

    debugsCode(studentObj, subject) {
        return `${this.name} debugs ${this.name}'s code on ${subject}`;
    };
}

const Teacher = new Instructor({
    name: 'Teacher',
    location: 'Atlantis',
    age: 50,
    gender: 'M',
    favLanguage: 'Java',
    specialty: 'Back-end',
    catchPhrase: `Java is better than Javascript`
  });

  console.log(Teacher.name)
  console.log(Teacher.gender)
  console.log(Teacher.demo('math'))
  

  const Marcelo = new Student({
      name: "Marcelo Laos",
      location: 'Atlanta',
      age: 21,
      gender: 'M',
      previousBackground: "Web Design",
      className: 'FSWPT 14?',
      favSubjects: ['Javascript', 'React', 'CSS3', 'Node.js']
  })

  console.log(Marcelo.listsSubjects(Marcelo.favSubjects))
  console.log(Marcelo.PRAssignment('math'))
  console.log(Marcelo.sprintChallenge('javascript'))

  const John = new ProjectManagers({
      name: 'John',
      location: 'New York, New York',
      age: 98,
      gender: 'M',
      gradClassName: 'FSWPT2',
      favInstructor: 'John'
  })

  console.log(John.standUp('FSWPT 14'))
  console.log(John.debugsCode(Marcelo, 'Javascript'))
  