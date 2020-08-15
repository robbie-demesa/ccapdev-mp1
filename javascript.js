//const about_me_pic   = document.querySelector('#display-pic');
//const about_me_pic   = document.querySelector('#display-pic');
const about_me_desc  = document.querySelector('#abt-text');
const education_list = document.querySelector('#education-list');
const org_list       = document.querySelector('#org-list');
const work_list      = document.querySelector('#work-list');
const cont_list      = document.querySelector('#contact_list');

function renderAbt(doc){
// displays the details regarding about me section

        // create neccessary elements
        let details = document.createElement("p");
    
        // add classes to elements
        details.className = "intro_text";
    
        // add the information to corresponding elements
        details.textContent = doc.data().desc;
        console.log(details);
    
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
    
        sp_school.className     = "";
        h3.className            = "h3_details1";
    
        sp_level.className      = "";
        h6_1.className          = "h6_details1";
    
        sp_dur.className        = "";
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

        // append
        a1.appendChild(img1);
        td.appendChild(a1);
        cont_list.appendChild(td);     
}

db.collection("intro").get().then((snapshot) => {
// loads details on about me

    snapshot.docs.forEach(doc => {
        renderAbt(doc);
    })
})
    
db.collection("education").orderBy("yearStart", "desc").get().then((snapshot) => {
// loads details on education

    snapshot.docs.forEach(doc => {
        renderEdu(doc);
    })
})

db.collection("organizations").orderBy("yearStart", "desc").get().then((snapshot) => {
    // loads details on education
    
    snapshot.docs.forEach(doc => {
        renderOrg(doc);
    })
})

db.collection("works").orderBy("year", "desc").get().then((snapshot) => {
    // loads details on previous works

    snapshot.docs.forEach(doc => {
        renderWorks(doc);
    })
})

db.collection("contacts").get().then((snapshot) => {
    // loads details on contacts
    
    snapshot.docs.forEach(doc => {
        renderContacts(doc);
    })
})