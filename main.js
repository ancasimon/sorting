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
            <button type="submit" class="btn btn-primary mb-2">Sort!</button>
        </form>
        `
    printToDom('form', formContents);
};


const addStudent = () => {

}; 

const events = () => {
    document.getElementById('sorting-button').addEventListener('click', buildForm);
    // document.getElementById(ID).addEventListener('click', addStudent);
};

const init = () => {
    events();
};

init();