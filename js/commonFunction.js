function getValueById(id){
    const value = document.getElementById(id).value;
    const number = parseFloat(value);
    return number;
}
function getValueByInnerText(id){
    const value = document.getElementById(id).innerText;
    const number = parseFloat(value);
    return number;
}