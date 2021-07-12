
window.addEventListener('load', function () {
    add_event_listener("about", "nav-link-about");
    add_event_listener("experience", "nav-link-experience");
    add_event_listener("education" ,"nav-link-education");
    add_event_listener("skills" ,"nav-link-skills");
    add_event_listener("projects" ,"nav-link-projects");
    add_event_listener("hobbies" ,"nav-link-hobbies");
});


function add_event_listener(id, link) {
    const section_el = document.getElementById(id);
    // Set height statically after the page fully loads so animations work. (They don't if it's dynamic height)
    const orig_height = document.getElementById(id).offsetHeight;
    const section = section_el.getElementsByClassName("section-container")[0];
    section.style.maxHeight = orig_height.toString() + "px";

    const chevron = section_el.getElementsByTagName("h2")[0].getElementsByTagName("svg")[0];
    const link_el = document.getElementById(link);
    chevron.addEventListener('click', function() {toggle_collapse(section_el, orig_height, chevron);});
    link_el.addEventListener('click', function() {open_link_target(section_el, orig_height, chevron);});
}


function toggle_collapse(section_el, orig_height, chevron) {
    // Rotate the chevron
    chevron.classList.toggle("toggled")

    let cards = section_el.getElementsByClassName("card");
    for (let i = 0; i < cards.length; i++)
    {
        let class_list = cards[i].classList;
        if (! class_list.contains("collapse") && ! class_list.contains("uncollapse"))
        {
            class_list.toggle("collapse");
        }
        else
        {
            class_list.toggle("collapse");
            class_list.toggle("uncollapse");
        }
    }

    let section = section_el.getElementsByClassName("section-container")[0];
    let section_header_height = section.getElementsByTagName("h2")[0].offsetHeight;
    let section_container_class_list = section.classList;

    if (section_container_class_list.contains("margin-off"))
    {
        section.style.maxHeight = orig_height.toString() + "px";
        section_container_class_list.toggle("margin-off");
    }
    else
    {
        section_container_class_list.toggle("margin-off");
        setTimeout(() => {  section.style.maxHeight = section_header_height.toString() + "px"; }, 400);
    }
}


function open_link_target(section_el, orig_height, chevron)
{
    if (chevron.classList.contains("toggled"))
    {
        chevron.classList.toggle("toggled")
    }


    let cards = section_el.getElementsByClassName("card");
    for (let i = 0; i < cards.length; i++)
    {
        let class_list = cards[i].classList;
        if (class_list.contains("collapse"))
        {
            class_list.toggle("collapse");
            class_list.toggle("uncollapse");
        }
    }

    let section = section_el.getElementsByClassName("section-container")[0];
    let section_container_class_list = section.classList;

    if (section_container_class_list.contains("margin-off"))
    {
        section.style.maxHeight = orig_height.toString() + "px";
        section_container_class_list.toggle("margin-off");
    }
}
const nav_toggle = document.getElementById("nav-toggle");
nav_toggle.addEventListener('click', function () {document.getElementById("nav").classList.toggle("nav-collapse");});
