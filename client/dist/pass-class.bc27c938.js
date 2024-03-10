/*button改value*/ window.onload = function() {
    var yes = document.getElementById("yes");
    yes.onclick = function() {
        end.value = "已通過";
    };
    var no = document.getElementById("no");
    no.onclick = function() {
        end.value = "未通過";
    };
};
/*upload視窗*/ var modal = document.getElementById("id01");
window.onclick = function(event) {
    if (event.target == modal) modal.style.display = "none";
};
var modal = document.getElementById("id02");
window.onclick = function(event) {
    if (event.target == modal) modal.style.display = "none";
};
var modal = document.getElementById("id03");
window.onclick = function(event) {
    if (event.target == modal) modal.style.display = "none";
};

//# sourceMappingURL=pass-class.bc27c938.js.map
