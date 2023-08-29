function go_to_page(shown_page) {
    document.getElementById('welcome').style.display = "none";
    document.getElementById('event_details').style.display = "none";
    document.getElementById('basic_info').style.display = "none";
    document.getElementById('rules').style.display = "none";
    document.getElementById('further_information').style.display = "none";
    document.getElementById('gallery').style.display = "none";
    if (shown_page == 'gallery') {
        document.getElementById(shown_page).style.display = "grid";
    } else {
        document.getElementById(shown_page).style.display = "block";
    }
}

// welcome 
// event_details
// basic info
// rules
// futher information

addEventListener('load', () => go_to_page("welcome"))