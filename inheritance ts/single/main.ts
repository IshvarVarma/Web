class Student{
	name: string;
	rollNo: number
	constructor(name:string,rollNo:number) {
		this.name = name;
		this.rollNo = rollNo;
	}
}
class StudentDetails extends Student{
	display(): void {
		console.log("Student Name: " + this.name);
		console.log("Student Roll Number: " + this.rollNo);
	}
}
var obj = new StudentDetails("Ishvar", 67);
obj.display();