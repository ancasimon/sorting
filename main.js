console.log("hi Hogwarts");

const printToDom = (elementID, textToPrint) => {
    const selectedDiv = document.getElementById(elementID);
    selectedDiv.innerHTML = textToPrint;
};

const buildForm = () => {
    const formContents = `
        <div class="mx-auto" style="width: 1000px;">
            <h3>Enter First Year's Name</h3>
        </div>
        <form class="form-inline mx-auto" onSubmit="checkName('studentName'); getStudentName(); assignHouse(); buildStudent();">
            <label class="my-1 mr-2 mx-auto" for="studentName">Student:</label>
            <input type="text" class="form-control mb-2 mr-sm-2" id="studentName">
            <button type="submit" id="sort-student-button" class="btn btn-primary mb-2 mx-auto">Sort!</button>
        </form>
        `
    printToDom('form', formContents);
    console.log("form");
};

const checkName = (fieldId) => {
    if (document.getElementById(fieldId).value === "") {
        alert("You must enter a name before trying to sort the student!");
    }
};

const getStudentName = () => {
    let name = document.getElementById('studentName'); 
    console.log("it got a name!");
}; 

const assignHouse = () => {
    const houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];
    const randomHouse = houses[Math.floor((Math.random() * houses.length) + 1)];
    console.log(randomHouse);
}; 

const buildStudent = () => {
        let studentInfo = {
            name: document.getElementById('studentName'),
            house: ""
        };
        studentInfo = `
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${studentInfo.name}</h5>
                        <p class="card-text">${studentInfo.house}</p>
                        <button type="submit" id="expel-student-button" class="btn btn-primary mb-2">Expel</button>
                </div>
                </div>
                `
    console.log("printing a student");
        };


const buildStudentArray = () => {
    const studentArray = [];
    studentArray.push(studentInfo);
    printToDom('studentsList', studentArray);
    console.log("added a student");
    }; 
    
document.getElementById('start-sorting-button').addEventListener('click', buildForm);

document.getElementById('sort-student-button').addEventListener('click', buildStudent);


// const assignColors = () => {
//     for (let i = 0; i < studentArray.length; i++) {
//         if (randomHouse === "Gryffindor") {
//             <div class="gryf"></div>;
//         } else if (randomHouse === "Hufflepuff") {
//             <div class="huf"></div>;
//         } else if (randomHouse === "Ravenclaw") {
//             <div class="raven"></div>;
//         } else if (randomHouse === "Slytherin") {
//             <div class="slyth"></div>;
//         }   
//     }
// };




{/* const events = () => {

};

const init = () => {
    events();
};

init(); */}