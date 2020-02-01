console.log("hi Hogwarts");

const printToDom = (elementID, textToPrint) => {
    const selectedDiv = document.getElementById(elementID);
    selectedDiv.innerHTML = textToPrint;
};

const activateEventListener = () => {
    document.getElementById('sort-student-button').addEventListener('click', buildStudent);
};

const buildForm = () => {
    const formContents = `
        <div class="mx-auto" style="width: 1000px;">
            <h3>Enter First Year's Name</h3>
        </div>
        <form class="form-inline mx-auto">
            <label class="my-1 mr-2 mx-auto" for="studentName">Student:</label>
            <input type="text" class="form-control mb-2 mr-sm-2" id="studentName">
            <button type="submit" id="sort-student-button" class="btn btn-primary mb-2 mx-auto">Sort!</button>
        </form>
        `
    printToDom('form', formContents);
    console.log("the form to collect student name is working");
    activateEventListener();
};

const checkName = (fieldId) => {
    if (document.getElementById(fieldId).value === "") {
        alert("You must enter a name before trying to sort the student!");
    } else {
        return false;
    }
};

const checkFirst = () => {
    if (checkName() === false) {
       buildStudent();
    }
};

const getStudentName = () => {
    let name = document.getElementById('studentName').value; 
    return name;
    // console.log(`this is the new student name: ${studentName}`);
}; 


const assignHouse = () => {
    const houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];
    const randomHouse = houses[Math.floor((Math.random() * houses.length))];
    return randomHouse;
    // console.log("a new house has been assigned");
};

const studentArray = [];

const buildStudent = (e) => {
    const studentInfo = {
        id: Date.now(),
        name: getStudentName(),
        house: assignHouse()
    };
    studentArray.push(studentInfo);
    buildStudentArray(studentArray);
};

const activateExpelEventListener = () => {
    document.getElementById('expel-student-button').addEventListener('click', expel);
};

const buildStudentArray = (list) => {
    let domString = '';
    for (let i=0; i < list.length; i++) {
        domString += '<div class="card row col-md-6 col-lg-4 mx-5 my-5 w-25" style="width: 18rem;">';
        domString += '<div class="card-body">';
        domString += `<h5 class="card-title">${list[i].name}</h5>`;
        domString += `<p class="card-text">${list[i].house}</p>`;
        domString += `<button type="submit" id="expel-student-button" class="btn btn-primary mb-2">Expel</button>`;
        domString += '</div>';
        domString += '</div>';
    };
    printToDom('studentsList', domString);
    console.log("added a student");
    }; 
    
const expel = () => {
    console.log("testign expel button");
    studentArray.slice();
}

document.getElementById('start-sorting-button').addEventListener('click', buildForm);

document.getElementsByName('expel').addEventListener('click', expel);





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




const events = () => {

 };

const init = () => {
   events();
};

init();