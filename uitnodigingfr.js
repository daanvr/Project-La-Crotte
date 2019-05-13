var inviteeList = [
    ["Daan en Marlien", "halloikbendaan"],
    ["Andrea en Leo", "123hkjlh432"],
    ["Kristine", "58734fdf74"],
    ["Maartje, Laurens en Saga", "67fd5had3"],
    ["(schoon)moeder", "5420jfbh07"],
    ["Pim", "20562hbfg3f"],
    ["Toon en Elodie", "7hfj38fh"],
    ["Jim", "hfs873jamdn"],
    ["Casper en Stephanie", "heyr21732jf"],
    ["Tom", "hfgag301238"],
    ["Cyril", "bcshagdq93"],
    ["Justine", "ghfs649jg"],
    ["Elodie", "75fjjakn03"],
    ["Lucas", "bfgh3917g4"],
    ["Lisa", "hfba49284"],
    ["Aline en Pierre", "jbahr89001"],
    ["Ines en Cyril", "8rhwbrfaf"], //let op e werkt niet
    ["Maaike en Matthijs", "hrj43726hf"],
    ["Myriam", "282hfjs291"],
    ["Bert en Heleen", "nvhsfj134jg"],
    ["(schoon)papa en (schoon)mama", "743h2dj2"],
    ["Carolien", "cbag6271jfd"],
    ["Christine en Quintijn", "hfs7103fc"],
    ["Judith", "672fnshe433"],
    ["Willemijn, Rene, Mae-Lynn en Yinthe", "324hfb2348"],// let op e werkt niet
    ["Hanneke", "gd62dbha7"],
    ["Joanne en Thomas", "hfv6728ad"],
    ["Liezeke en Peter-Jan", "cbhda29rhlaw"],
    ["Lianne", "hdyqh78ajc0"],
    ["Merle en Merijn", "87fg2h105dg"],
    ["Willem Jan en Sylvia", "4fds32h7ons"],
    ["Willemijn en Victor", "4562gfgt319o"],
    ["Marion", "643h5nmjdp568"]
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

