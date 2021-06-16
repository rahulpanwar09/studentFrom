const obj = (function() {

    function getElementById(id) {

        return document.getElementById(id);
    }

    function getValueFromId(id) {

        return document.getElementById(id).value;
    }

    function setValueFromId(id, value) {

        return getElementById(id).value = value;
    }

    function renderContent(id, { firstName, lastName, age, stream, college }) {
        let content = `<div data-firstName="${firstName}"
            data-lastName="${lastName}" data-age="${age}" data-stream="${stream}" data-college="${college}"
            class="item">Candidate name is ${firstName} ${lastName} whose age is ${age}. 
            He is in ${stream} steam of ${college} college.</div>`;

        getElementById(id).innerHTML += content;

    }

    function hasClass(element, className) {

        return (' ' + element.className + ' ').indexOf(' ' + className + '') > -1;
    }

    return {
        getValueFromId: getValueFromId,
        getElementById: getElementById,
        setValueFromId: setValueFromId,
        renderContent: renderContent,
        hasClass: hasClass,
    }

})()

const list = obj.getElementById('list');
const studentForm = obj.getElementById('student-form');
studentForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const firstName = obj.getValueFromId('first-name');
    const lastName = obj.getValueFromId('last-name');
    const age = obj.getValueFromId('age');
    const stream = obj.getValueFromId('stream');
    const college = obj.getValueFromId('college');
    obj.renderContent('list', {
        firstName,
        lastName,
        age,
        stream,
        college
    });
    this.reset();
})

list.addEventListener("click", function(e) {
    const item = e.target;

    if (!obj.hasClass(item, 'item')) {
        alert("No item selected");
        return false;
    }
    console.log(item.dataset);
    populateForm(item.dataset);
})

function populateForm(formData) {

    obj.setValueFromId('first-name', formData.firstname)
    obj.setValueFromId('last-name', formData.lastname)
    obj.setValueFromId('age', formData.age)
    obj.setValueFromId('stream', formData.stream)
    obj.setValueFromId('college', formData.college)
}