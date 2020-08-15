const about_me_desc  = document.querySelector('#abt-text');
const education_list = document.querySelector('#education-list');
const org_list       = document.querySelector('#org-list');
const work_list      = document.querySelector('#work-list');
const cont_list      = document.querySelector('#contact_list');

const login_form     = document.querySelector('#login-form');
const intro_form     = document.querySelector('#edit-intro-form');
const edu_form       = document.querySelector('#add-edu-form');
const org_form       = document.querySelector('#add-org-form');
const work_form      = document.querySelector('#add-work-form');
const cont_form      = document.querySelector('#add-contact-form');

function renderAbt(doc){
// displays the details regarding about me section

        // create neccessary elements
        let details = document.createElement("p");
    
        // add classes to elements
        details.className = "intro_text";
        details.id = "introID";
    
        // add the information to corresponding elements
        details.textContent = doc.data().desc;
    
        // append
        about_me_desc.appendChild(details);  

}

function renderEdu(doc){
    // displays the details regarding education
    
        // create neccessary elements
        let table       = document.createElement("table");
        let tr          = document.createElement("tr");
    
        let td_img1     = document.createElement("td");
        let img1        = document.createElement("img");
    
        let td_img2     = document.createElement("td");
        let img2        = document.createElement("img");
    
        let td_eduDeets = document.createElement("td");
    
        let sp_school   = document.createElement("span");
        let h3          = document.createElement("h3");
    
        let sp_level    = document.createElement("span");
        let h6_1        = document.createElement("h6");
    
        let sp_dur      = document.createElement("span");
        let h6_2        = document.createElement("h6");

        let br          = document.createElement("br");
    
        // add classes to elements
        table.className         = "table_main1";
    
        td_img1.className       = "td_main1";
        img1.className          = "img_main1";
        
        td_img2.className       = "td_main1";
        img2.className          = "img_main1";
    
        td_eduDeets.className   = "td_main1";
    
        sp_school.className     = "tr_main1";
        h3.className            = "h3_details1";
    
        sp_level.className      = "tr_main1";
        h6_1.className          = "h6_details1";
    
        sp_dur.className        = "tr_main1";
        h6_2.className          = "h6_details1";
    
        // add id for the table
        table.setAttribute('data-id', doc.id);
    
        // add the information to corresponding elements
        sp_school.textContent = doc.data().school;
    
        // info for level + program*
        if (doc.data().levelEnd == "" && doc.data().program == "")
            sp_level.textContent = doc.data().levelStart;
        else if (doc.data().program == "")
            sp_level.textContent = "".concat(doc.data().levelStart).concat(" - ").concat(doc.data().levelEnd);
        else if (doc.data().levelEnd == "")
            sp_level.textContent = "".concat(doc.data().levelStart).concat(" | ").concat(doc.data().program);
        else
            sp_level.textContent = "".concat(doc.data().levelStart).concat(" - ").concat(doc.data().levelEnd).concat(" | ").concat(doc.data().program);
    
        /* 
            4 cases:
            - only levelstart
            - has levelEnd, no program
            - has no levelEnd, has program
            - has levelEnd and program
        */
    
        // info for duration
        if (isNaN(doc.data().yearEnd))
        sp_dur.textContent = "(".concat(doc.data().yearStart).concat(" - Present)");
        else
            sp_dur.textContent = "(".concat(doc.data().yearStart).concat(" - ").concat(doc.data().yearEnd).concat(")");
    
        if (doc.data().img != ""){
            img1.src = doc.data().img;
            img2.src = doc.data().img;
        }

        /*************** DELETE DATA BUTTON ***************/
        let del = document.createElement("section");
        del.className = "del_button";
        del.textContent = "x";
        tr.appendChild(del);
        /**************************************************/

        // append  
        h3.appendChild(sp_school);
        h6_1.appendChild(sp_level);
        h6_2.appendChild(sp_dur);
    
        td_eduDeets.appendChild(h3);
        td_eduDeets.appendChild(h6_1);
        td_eduDeets.appendChild(h6_2);
    
        td_img1.appendChild(img1);
        td_img2.appendChild(img2);
    
        tr.appendChild(td_img1);
        tr.appendChild(td_eduDeets);
        tr.appendChild(td_img2);
    
        table.appendChild(tr);
    
        education_list.appendChild(table);
        education_list.appendChild(br);

        // deleting data
        del.addEventListener('click', (e) => {
            e.stopPropagation();
            let id_del = e.target.parentElement.parentElement.getAttribute('data-id');
            db.collection('education').doc(id_del).delete();
        })
    }

function renderOrg(doc){
    // displays the details regarding my orgs
    
        // create neccessary elements
        let table       = document.createElement("table");
        let tr          = document.createElement("tr");
    
        let td_img1     = document.createElement("td");
        let img1        = document.createElement("img");
    
        let td_img2     = document.createElement("td");
        let img2        = document.createElement("img");
    
        let td_orgDeets = document.createElement("td");
    
        let sp_org      = document.createElement("span");
        let h3          = document.createElement("h3");
    
        let sp_position = document.createElement("span");
        let h6_1        = document.createElement("h6");
    
        let sp_dur      = document.createElement("span");
        let h6_2        = document.createElement("h6");
    
    
        let br          = document.createElement("br");
    
        // add classes to elements
        table.className         = "table_main1";
    
        td_img1.className       = "td_main1";
        img1.className          = "img_main1";
        
        td_img2.className       = "td_main1";
        img2.className          = "img_main1";
    
        td_orgDeets.className   = "td_main1";
    
        sp_org.className        = "";
        h3.className            = "h3_details1";
    
        sp_position.className   = "";
        h6_1.className          = "h6_details1";
    
        sp_dur.className        = "";
        h6_2.className          = "h6_details1";
    
        // add id for the table
        table.setAttribute('data-id', doc.id);
    
        // add the information to corresponding elements
        sp_org.textContent = doc.data().org;
        sp_position.textContent = doc.data().position;
    
        // info for duration
        if (isNaN(doc.data().yearEnd))
        sp_dur.textContent = "(".concat(doc.data().yearStart).concat(" - Present)");
        else
            sp_dur.textContent = "(".concat(doc.data().yearStart).concat(" - ").concat(doc.data().yearEnd).concat(")");
    
        if (doc.data().img != ""){
            img1.src = doc.data().img;
            img2.src = doc.data().img;
        }

        /*************** DELETE DATA BUTTON ***************/
        let del = document.createElement("section");
        del.className = "del_button";
        del.textContent = "x";
        tr.appendChild(del);
        /**************************************************/

        // append  
        h3.appendChild(sp_org);
        h6_1.appendChild(sp_position);
        h6_2.appendChild(sp_dur);
    
        td_orgDeets.appendChild(h3);
        td_orgDeets.appendChild(h6_1);
        td_orgDeets.appendChild(h6_2);
    
        td_img1.appendChild(img1);
        td_img2.appendChild(img2);
    
        tr.appendChild(td_img1);
        tr.appendChild(td_orgDeets);
        tr.appendChild(td_img2);
    
        table.appendChild(tr);
    
        org_list.appendChild(table);
        org_list.appendChild(br);

        // deleting data
        del.addEventListener('click', (e) => {
            e.stopPropagation();
            let id_del = e.target.parentElement.parentElement.getAttribute('data-id');
            db.collection('organizations').doc(id_del).delete();
        })
}

function renderWorks(doc){
    // displays the details regarding prev works
    
        //create neccessary elements
        let table        = document.createElement("table");
        let tr_title     = document.createElement("tr");
        let tr_body      = document.createElement("tr");
        let tr_link      = document.createElement("tr");
    
        let td_title     = document.createElement("td");
        let td_body      = document.createElement("td");
        let td_link      = document.createElement("td");

        let sp_crs       = document.createElement("span");
        let h6_0         = document.createElement("h6");
    
        let sp_work      = document.createElement("span");
        let h3           = document.createElement("h3");
    
        let sp_desc      = document.createElement("span");
        let h6_1         = document.createElement("h6");
    
        let sp_url       = document.createElement("a");
        let h6_2         = document.createElement("h6");

    
        // add classes to elements
        table.className         = "table_work1";

        tr_title.className      = "tr_work1";
        tr_body.className       = "tr_work1";
        tr_link.className       = "tr_work1";
    
        td_title.className      = "td_work_title";
        td_body.className       = "td_work_body";
        td_link.className       = "td_work_link";

        sp_crs.className        = "";
        h6_0.className          = "h6_work1";
    
        sp_work.className       = "";
        h3.className            = "h3_work1";
    
        sp_desc.className       = "";
        h6_1.className          = "h6_work1";
    
        sp_url.className       = "work_link";
        h6_2.className          = "h6_work1";
    
        // add id for the table
        table.setAttribute('data-id', doc.id);
    
        // add the information to corresponding elements
        sp_crs.textContent = "".concat(doc.data().course).concat(" (").concat(doc.data().year).concat(")");
        sp_work.textContent = doc.data().name;
        sp_desc.textContent = doc.data().desc;

        /*************** DELETE DATA BUTTON ***************/
        let del = document.createElement("section");
        del.className = "del_button_work";
        del.textContent = "x";
        /**************************************************/

        // append
        if (doc.data().link != ""){
            sp_url.appendChild(sp_work);
            sp_url.href = doc.data().link;
            h3.appendChild(sp_url);
        }
        else
            h3.appendChild(sp_work);
        

        h6_0.appendChild(sp_crs);
        h6_1.appendChild(sp_desc);
   
        td_title.appendChild(del);
        td_title.appendChild(h6_0);
        td_title.appendChild(h3);
        td_body.appendChild(h6_1);
        td_link.appendChild(h6_2);

        tr_title.appendChild(td_title);
        tr_body.appendChild(td_body);
        tr_link.appendChild(td_link);

        table.appendChild(tr_title);
        table.appendChild(tr_body);
        table.appendChild(tr_link);
    
        work_list.appendChild(table);

        // deleting data
        del.addEventListener('click', (e) => {
            e.stopPropagation();
            let id_del = e.target.parentElement.parentElement.parentElement.getAttribute('data-id');
            db.collection('works').doc(id_del).delete();
        })


}

function renderContacts(doc){
    // displays the details regarding my orgs
    
        // create neccessary elements
        let td          = document.createElement("td");
        let img1        = document.createElement("img");
        let a1          = document.createElement("a");
    
        // add classes to elements
        td.className    = "td_cont";
        img1.className  = "img_cont";

        // add id for the table
        td.setAttribute('data-id', doc.id);
    
        // add the information to corresponding elements
        img1.src = doc.data().img;
        a1.href = doc.data().link;

        /*************** DELETE DATA BUTTON ***************/
        let del = document.createElement("section");
        del.className = "del_button_cont";
        del.textContent = "x";
        /**************************************************/

        // append
        a1.appendChild(img1);
        td.appendChild(a1);
        cont_list.appendChild(td);
        cont_list.appendChild(del);
        
        // deleting data
        del.addEventListener('click', (e) => {
            e.stopPropagation();
            let id_del = e.target.previousSibling.getAttribute('data-id');
            db.collection('contacts').doc(id_del).delete();
            del.className = "d-none";
        })
}

/*********************************************************/
/*                       LOAD DATA                       */
/*********************************************************/
db.collection("intro").onSnapshot(snapshot => {
    // loads and updates intro    
        
    let changes = snapshot.docChanges();
    changes.forEach(change => {
        if (change.type == 'added'){
            renderAbt(change.doc);
        }
        else{
            
            document.querySelector('#introID').className= "d-none";
            document.querySelector('#introID').id = "irr";
            renderAbt(change.doc);
        }
     })   
})
    
db.collection("education").orderBy("yearStart", "desc").onSnapshot(snapshot => {
// loads and updates education    
    
    let changes = snapshot.docChanges();
    changes.forEach(change => {
        if (change.type == 'added'){
            renderEdu(change.doc);
        } else if (change.type == 'removed'){
            let target = education_list.querySelector("[data-id=" + change.doc.id + "]");
            education_list.removeChild(target);
        }
    })
})

db.collection("organizations").orderBy("yearStart", "desc").onSnapshot(snapshot => {
    // loads and updates organization    
        
    let changes = snapshot.docChanges();
    changes.forEach(change => {
        if (change.type == 'added'){
            renderOrg(change.doc);
        } else if (change.type == 'removed'){
            let target = org_list.querySelector("[data-id=" + change.doc.id + "]");
            org_list.removeChild(target);
        }
     })
})

db.collection("works").orderBy("year", "desc").onSnapshot(snapshot => {
    // loads and updates past works    
        
    let changes = snapshot.docChanges();
    changes.forEach(change => {
        if (change.type == 'added'){
            renderWorks(change.doc);
        } else if (change.type == 'removed'){
            let target = work_list.querySelector("[data-id=" + change.doc.id + "]");
            work_list.removeChild(target);
        }
    })
})

db.collection("contacts").onSnapshot(snapshot => {
    // loads and updates contacts    
        
    let changes = snapshot.docChanges();
    changes.forEach(change => {
        if (change.type == 'added'){
            renderContacts(change.doc);
        } else if (change.type == 'removed'){
            let target = cont_list.querySelector("[data-id=" + change.doc.id + "]");
            cont_list.removeChild(target);
        }
    })
})

/********************************************************/
/*                       ADD DATA                       */
/********************************************************/
intro_form.addEventListener('submit', (e) => {
    
    e.preventDefault();

    db.collection('intro').doc('description1').update({
        "desc": intro_form.description.value
    })

    // clear form input fields
    intro_form.description.value = "";
})

edu_form.addEventListener('submit', (e) => {
    
    e.preventDefault();

    db.collection('education').add({
        school:     edu_form.school.value,
        levelStart: edu_form.levelStart.value,
        levelEnd:   edu_form.levelEnd.value,
        program:    edu_form.program.value,
        yearStart:  parseInt(edu_form.yearStart.value),
        yearEnd:    parseInt(edu_form.yearEnd.value),
        img:        edu_form.img.value
    })

    // clear form input fields
    edu_form.school.value = "";
    edu_form.levelStart.value = "";
    edu_form.levelEnd.value = "";
    edu_form.program.value = "";
    edu_form.yearStart.value = "";
    edu_form.yearEnd.value = "";
    edu_form.img.value = "";
})

org_form.addEventListener('submit', (e) => {
    
    e.preventDefault();

    db.collection('organizations').add({
        org:        org_form.org.value,
        position:   org_form.position.value,
        yearStart:  parseInt(org_form.yearStart.value),
        yearEnd:    parseInt(org_form.yearEnd.value),
        img:        org_form.img.value
    })

    // clear form input fields
    org_form.org.value = "";
    org_form.position.value = "";
    org_form.yearStart.value = "";
    org_form.yearEnd.value = "";
    org_form.img.value = "";
})

work_form.addEventListener('submit', (e) => {
    
    e.preventDefault();

    db.collection('works').add({
        name:   work_form.project.value,
        course: work_form.course.value,
        year:   parseInt(work_form.year.value),
        desc:   work_form.description.value,
        link:   work_form.link.value
    })

    // clear form input fields
    work_form.project.value = "";
    work_form.course.value = "";
    work_form.year.value = "";
    work_form.description.value = "";
    work_form.link.value = "";
})

cont_form.addEventListener('submit', (e) => {
    
    e.preventDefault();

    db.collection('contacts').add({
        img:  cont_form.img.value,
        link: cont_form.link.value
    })

    // clear form input fields
    cont_form.img.value = "";
    cont_form.link.value = "";
})

/*******************************************************/
/*                       SIGN IN                       */
/*******************************************************/

login_form.addEventListener('submit', (e) => {
    
    e.preventDefault();
    var email = login_form.email.value;
    var pass  = login_form.password.value;

    firebase.auth().signInWithEmailAndPassword(email, pass).then(function(){
        
        console.log(login_form.email.value + "has successfully signed in.");
        document.querySelector("#loginDiv").className="d-none";
        document.querySelector("#mainDiv").className="";

        login_form.email.value = "";
        login_form.password.value ="";

    }).catch(function(error){
        if(error.code == "auth/wrong-password")
            alert("incorrect password");
        else
            alert(error.message);
    });


})

/********************************************************/
/*                       SIGN OUT                       */
/********************************************************/
function logout(){
    firebase.auth().signOut().then(function(){
        console.log("signout successful.");
        document.querySelector("#loginDiv").className="";
        document.querySelector("#mainDiv").className="d-none";
    }).catch(function(error){
        let errorCode = error.code;
        let errorMessage = error.message;
        window.alert("ERROR: " + errorMessage + "(" + errorCode + ")");
    });
}