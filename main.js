console.log("hi Hogwarts");

const printToDom = (elementID, textToPrint) => {
    const selectedDiv = document.getElementById(elementID);
    selectedDiv.innerHTML = textToPrint;
};

const buildForm = () => {
    const formContents = `
        <div class="indented">
            <h3>Enter First Year's Name</h3>
        </div>
        <form class="form-inline centered">
            <label class="my-1 mr-2" for="studentName">Student: </label>
            <input type="text" class="form-control mb-2 mr-sm-2" id="studentName">
            <button type="submit" id="add-button" class="btn btn-primary mb-2">Sort!</button>
        </form>
        `
    printToDom('form', formContents);
};

const houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];

const randomHouse = houses[Math.floor((Math.random() * houses.length) + 1)];
console.log(randomHouse);

const buildStudent = () => {
    const studentInfo = 
    {
        name: studentName.value,
        house: randomHouse
    };
    console.log(studentInfo);
};

const buildArray = () => {
    const studentArray = [studentInfo];
    studentInfo = `
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${studentName}</h5>
                    <p class="card-text">${houses.name}</p>
                    <a href="#" class="btn btn-primary">Expel</a>
            </div>
            `

    studentArray.push(studentInfo);
    printToDom('studentsList', "studentArray");
}; 

const events = () => {
    document.getElementById('sorting-button').addEventListener('click', buildForm);
    // document.getElementById('add-button').addEventListener('click', addStudent);
};

const init = () => {
    events();
};

init();