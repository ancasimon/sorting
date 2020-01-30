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
        <form class="form-inline mx-auto">
            <label class="my-1 mr-2 mx-auto" for="studentName">Student:</label>
            <input type="text" class="form-control mb-2 mr-sm-2" id="studentName">
            <button type="submit" id="sort-student-button" class="btn btn-primary mb-2 mx-auto">Sort!</button>
        </form>
        `
    printToDom('form', formContents);
    console.log("form");
};

let name = document.getElementById('studentName'); 

const houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];

const randomHouse = houses[Math.floor((Math.random() * houses.length) + 1)];
console.log(randomHouse);

const buildStudent = (name, house) => {
        let studentInfo = "";
        studentInfo = `
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${name}</h5>
                        <p class="card-text">${randomHouse}</p>
                        <button type="submit" id="expel-student-button" class="btn btn-primary mb-2">Expel</button>
                </div>
                </div>
                `
        printToDom('studentsList', studentInfo);
    console.log("printing a student");
        };

const buildStudentArray = () => {
    const studentArray = [""];
    studentArray.push(studentInfo);
    console.log("added a student");
    }; 
    
document.getElementById('start-sorting-button').addEventListener('click', buildForm);

document.getElementById('sort-student-button').addEventListener('click', buildStudent);






// // const events = () => {
    
// //     };

// // const init = () => {
// //     events();
// //     };

// // init();