var inviteeList = [
    ["Daan en Marlien", "324bf98"],
    ["(schoon)moeder", "sdg8934"],
    ["Daan en Marlien1", "324bf98"],
    ["Daan en Marlien2", "324bf98"],
    ["Daan en Marlien3", "f293jh5s0"],
    ["Daan en Marlien4", "324bf98"],
    ["Daan en Marlien5", "324bf98"]
];

document.getElementById("inviteeName").textContent = isInvited();
// console.log(isInvited());

function getInviteCode() { // var from URL
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    return vars.InviteCode;
}

function isInvited() {
    for (i in inviteeList) {
        if (inviteeList[i][1] == getInviteCode()) {
            return inviteeList[i][0];
        }
    }
    document.getElementsByTagName("BODY")[0].style.display = "none";
    alert("Er is iets mis met deze uitnodigingslink. Probeer de juiste link te vinden of contacteer Daan en/of Marlien.");
}