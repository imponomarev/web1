
addEventListener('load', (event) => {

    if (window.sessionStorage.getItem('table_data') != null){
        console.log("placeholder");
        console.log(window.sessionStorage.getItem('table_data'));
        $('#result-table tr:last').after(window.sessionStorage.getItem('table_data'));
    }
});
