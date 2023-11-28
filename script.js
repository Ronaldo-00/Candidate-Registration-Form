
//Adding and deleting table for work experience form function

const WorkAdd = document.getElementById("table-group-work-add")
const WorkeDel = document.getElementById("table-group-work-del")
const Work_duraion_form = document.getElementById("work-duraion-form")

function add_Work_Row(){
    Work_duraion_form.style.display= "block";
    WorkAdd.style.display = "none"
}

function del_Work_Row(){
    Work_duraion_form.style.display= "none";
    WorkAdd.style.display = "block"
}

//Adding and deleting table for Educational details form function

const EduAdd = document.getElementById("table-group-edu-add")
const EduDel = document.getElementById("table-group-edu-del")
const Education_form = document.getElementById("Education-detail-form")

function add_Edu_Row(){
    Education_form.style.display= "block";
    EduAdd.style.display = "none"
}

function del_Edu_Row(){
    Education_form.style.display= "none";
    EduAdd.style.display = "block"
}