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
function showAndHide(id) {
    const modal = document.getElementById(id);
    modal.classList.remove("hidden");
    modal.classList.add("flex");
}
function getInnerText(id) {
    const text = document.getElementById(id).innerText;
    return text;
}
