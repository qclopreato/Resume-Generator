document.getElementById(`submit`).addEventListener(`click`, function(){
    if(document.getElementById(`blackText`).checked && document.getElementById(`twelvePx`).checked){
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`name`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`phoneNumber`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`emailAddress`).value;

        document.getElementById(`objectivesOut`).innerHTML = document.getElementById(`objectives`).value;

        document.getElementById(`experienceOut`).innerHTML = document.getElementById(`experience`).value;
        
        document.getElementById(`educationOut`).innerHTML = document.getElementById(`education`).value;
        
        document.getElementById(`outputs`).style.color = `#000000`;
        document.getElementById(`outputs`).style.fontSize = `12px`;
    } 

    else if(document.getElementById(`blackText`).checked && document.getElementById(`twentyPx`).checked){
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`name`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`phoneNumber`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`emailAddress`).value;

        document.getElementById(`objectivesOut`).innerHTML = document.getElementById(`objectives`).value;

        document.getElementById(`experienceOut`).innerHTML = document.getElementById(`experience`).value;
        
        document.getElementById(`educationOut`).innerHTML = document.getElementById(`education`).value;

        document.getElementById(`outputs`).style.color = `#000000`;
        document.getElementById(`outputs`).style.fontSize = `20px`;
    }

    else if(document.getElementById(`redText`).checked && document.getElementById(`twelvePx`).checked){
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`name`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`phoneNumber`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`emailAddress`).value;

        document.getElementById(`objectivesOut`).innerHTML = document.getElementById(`objectives`).value;

        document.getElementById(`experienceOut`).innerHTML = document.getElementById(`experience`).value;
        
        document.getElementById(`educationOut`).innerHTML = document.getElementById(`education`).value;

        document.getElementById(`outputs`).style.color = `#FF0000`;
        document.getElementById(`outputs`).style.fontSize = `12px`;
    }

    else if(document.getElementById(`redText`).checked && document.getElementById(`twentyPx`).checked){
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`name`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`phoneNumber`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`emailAddress`).value;

        document.getElementById(`objectivesOut`).innerHTML = document.getElementById(`objectives`).value;

        document.getElementById(`experienceOut`).innerHTML = document.getElementById(`experience`).value;
        
        document.getElementById(`educationOut`).innerHTML = document.getElementById(`education`).value;

        document.getElementById(`outputs`).style.color = `#FF0000`;
        document.getElementById(`outputs`).style.fontSize = `20px`;
    }

    else if((document.getElementById(`blackText`).checked !== true && document.getElementById(`redText`).checked !== true) || (document.getElementById(`twelvePx`).checked !== true && document.getElementById(`twentyPx`).checked !== true)){
        alert(`Select your styles!`);
        return;
    }
});