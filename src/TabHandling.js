export function TabClick(buttonClicked, buttonId){
    let totalTabs = document.getElementsByClassName("TabContainers");
    let totalButtons = document.getElementsByClassName("TabButtons");
    for (let i = 0; i<totalTabs.length; i++){
        if (totalTabs[i].id === buttonClicked){
            totalTabs[i].classList.add("active")
        }
        else{
            totalTabs[i].classList.remove("active")
        }
    }

    for (let i = 0; i<totalButtons.length; i++){
        if (totalButtons[i].id === buttonId)
            ActiveButtonStyle(buttonId)
        else
            InactiveButtonStyle(totalButtons[i].id)
    }

    const textField = document.getElementById("navTextField");
    const linkField = document.getElementById("navTextLink");
    if (buttonClicked === "SPFMap"){
        textField.innerText="SPF or Sender Policy Framework is a record, which contains a list of all IP addresses, that can send emails from a domain"
        linkField.href = "https://dmarcian.com/create-spf-record/"
        linkField.innerText = "Read more about SPF"
    }
    if (buttonClicked === "DMARCMap"){
        textField.innerHTML="DMARC or Domain-based Message Authentication Reporting and Conformance tells the receiving server what to do with an email, from an IP not allowed in the SPF record"
        linkField.href = "https://dmarcian.com/zero-trust/"
        linkField.innerText = "Read more about DMARC"
    }
    if (buttonClicked === "Mixed"){
        textField.innerHTML="A display of SPF and DMARC setup combined, both SPF and DMARC needs to be setup correctly to efficiently protect a domain from being abused, for phishing attacks etc."
        linkField.href = ""
        linkField.innerText = ""
    }
}

export function ActiveButtonStyle(Id){
    let thisButton = document.getElementById(Id);
    thisButton.style.border = "3px solid royalblue"
}

function InactiveButtonStyle(Id){
    let thisButton = document.getElementById(Id);
    thisButton.style.border = "3px solid grey"
}