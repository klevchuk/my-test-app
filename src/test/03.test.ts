import {StudentType} from "./02_02";
import {addSkill, doesStudentLiveIn, makeStudentActive} from "./03";

let student: StudentType;
beforeEach(() => {
    student = {
        id: 1,
        name: "Vlad",
        age: 29,
        isActive: false,
        address: {
            streetTitle: "Kommunistitheskaya",
            city: {
                title: "Bender",
                countryTitle: "Moldova",
            }
        },
        technologies: [
            {
                id: 1,
                title: "HTML",
            },
            {
                id: 2,
                title: "CSS"
            },
            {
                id: 3,
                title: "React"
            }
        ]
    }
})

test("new tech skill should be added to student", () => {
    expect(student.technologies.length).toBe(3)

    addSkill(student, "JS");

    expect(student.technologies.length).toBe(4);
    expect(student.technologies[3].title).toBe("JS");
    expect(student.technologies[3].id).toBeDefined();

})

test("student should be made active", () => {
    expect(student.isActive).toBe(false)

    makeStudentActive(student);

    expect(student.isActive).toBe(true);

})

test("student live in city?", () => {


   let result1 =  doesStudentLiveIn(student, "Bender");
   let result2 =  doesStudentLiveIn(student, "Moscow");

    expect(result1).toBe(true);
    expect(result2).toBe(false);

})
