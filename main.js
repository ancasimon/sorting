console.log("hi Hogwarts");

const printToDom = (elementID, textToPrint) => {
    const selectedDiv = document.getElementById(elementID);
    selectedDiv.innerHTML = textToPrint;
};

const activateEventListenerSort = () => {
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
    activateEventListenerSort();
};

// const checkName = (fieldId) => {
//     if (document.getElementById(fieldId).value === "") {
//         alert("You must enter a name before trying to sort the student!");
//     } else {
//         buildStudent();
//     }
// };

// const checkFirst = (fieldID) => {
//     if (checkName(studentName) === false) {
//        buildStudent();
//     }
// };

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

const buildStudentArray = (list) => {
    let domString = '';
    for (let i=0; i < list.length; i++) {
        domString += '<div class="col-md-6 col-lg-4 mb-5 h-100">';
        domString += '<div class="card text-white" style="width: 18rem;">';
        if (list[i].house === "Gryffindor") {
            domString += '<div class="card-body gryffindor">';
            } else if (list[i].house === "Hufflepuff") {
                domString += '<div class="card-body hufflepuff">';
            } else if (list[i].house === "Ravenclaw") {
                domString += '<div class="card-body ravenclaw">';
            } else if (list[i].house === "Slytherin") {
                domString += '<div class="card-body slytherin">';
            }   
        domString += `<h5 class="card-title">${list[i].name}</h5>`;
        domString += `<p class="card-text">${list[i].house}</p>`;
        domString += `<button type="submit" id="expel-student-button" class="expel btn btn-primary mb-2 expel">Expel</button>`;
        domString += '</div>';
        domString += '</div>';
        domString += '</div>';
    }
    printToDom('studentsList', domString);
    console.log("added a student");
    document.getElementById('studentName').value='';
    activateEventListenerExpel();
}; 

console.log(studentArray);

const activateEventListenerExpel = () => {
    let listeners = document.getElementsByClassName('expel');
    for (let i = 0; i < listeners.length; i++) {
      listeners[i].addEventListener ('click', (e) => {
        e.target.parentElement.parentElement.remove();
      })
    }
  };

const events = () => {
    document.getElementById('start-sorting-button').addEventListener('click', buildForm);
 };

const init = () => {
   events();
};

init();