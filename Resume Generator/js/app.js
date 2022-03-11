let educationCount = 0;
let experienceCount = 0;

document.getElementById(`nameAdd`).addEventListener(`click`, function(){
        document.getElementById(`name`).innerHTML += `<textarea cols="20" rows="1" id="generatedName"></textarea>`;
        document.getElementById(`nameAdd`).disabled = true;
});

document.getElementById(`phoneAdd`).addEventListener(`click`, function(){
        document.getElementById(`phoneNumber`).innerHTML += `<textarea cols="20" rows="1" id="generatedPhone"></textarea>`;
        document.getElementById(`phoneAdd`).disabled = true;
});

document.getElementById(`emailAdd`).addEventListener(`click`, function(){
        document.getElementById(`emailAddress`).innerHTML += `<textarea cols="20" rows="1" id="generatedEmail"></textarea>`;
        document.getElementById(`emailAdd`).disabled = true;
});

document.getElementById(`objectiveAdd`).addEventListener(`click`, function(){
        document.getElementById(`objective`).innerHTML += `<textarea cols="50" rows="3" id="generatedObjective"></textarea>`;
        document.getElementById(`objectiveAdd`).disabled = true;
});

document.getElementById(`experienceAdd`).addEventListener(`click`, function(){
    experienceCount++;
    if(experienceCount === 1){
        document.getElementById(`experienceOne`).innerHTML += `<textarea cols="50" rows="3" id="generatedExperience">•</textarea>`;
    }
    else if(experienceCount === 2){
        document.getElementById(`experienceTwo`).innerHTML += `<textarea cols="50" rows="3" id="generatedExperience">•</textarea>`;
    }
    else if(experienceCount === 3){
        document.getElementById(`experienceThree`).innerHTML += `<textarea cols="50" rows="3" id="generatedExperience">•</textarea>`;
    }
    else if(experienceCount === 4){
        document.getElementById(`experienceFour`).innerHTML += `<textarea cols="50" rows="3" id="generatedExperience">•</textarea>`;
    }
    else if (experienceCount === 5){
        document.getElementById(`experienceFive`).innerHTML += `<textarea cols="50" rows="3" id="generatedExperience">•</textarea>`;
        document.getElementById(`experienceAdd`).disabled = true;
    }
    else if(experienceCount > 5){
        return;
    }
});

document.getElementById(`educationAdd`).addEventListener(`click`, function(){
    educationCount++;
    if(educationCount === 1){
        document.getElementById(`educationOne`).innerHTML += `<textarea cols="50" rows="3" id="generatedEducation">•</textarea>`;
    } 
    else if(educationCount === 2){
        document.getElementById(`educationTwo`).innerHTML += `<textarea cols="50" rows="3" id="generatedEducation">•</textarea>`;
    } 
    else if(educationCount === 3){
        document.getElementById(`educationThree`).innerHTML += `<textarea cols="50" rows="3" id="generatedEducation">•</textarea>`;
    } 
    else if(educationCount === 4){
        document.getElementById(`educationFour`).innerHTML += `<textarea cols="50" rows="3" id="generatedEducation">•</textarea>`;
    } 
    else if (educationCount === 5){
        document.getElementById(`educationFive`).innerHTML += `<textarea cols="50" rows="3" id="generatedEducation">•</textarea>`;
        document.getElementById(`educationAdd`).disabled = true;
    }
    else if(educationCount > 5){
        return;
    }
});


document.getElementById(`submit`).addEventListener(`click`, function(){
    if(document.getElementById(`blackText`).checked && document.getElementById(`twelvePx`).checked){
        
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        document.getElementById(`experienceOut`).innerHTML = document.getElementById(`generatedExperience`).value;
        
        document.getElementById(`educationOut`).innerHTML = document.getElementById(`generatedEducation`).value;
        
        document.getElementById(`outputs`).style.color = `#000000`;
        document.getElementById(`outputs`).style.fontSize = `12px`;
    } 

    else if(document.getElementById(`blackText`).checked && document.getElementById(`twentyPx`).checked){
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        document.getElementById(`experienceOut`).innerHTML = document.getElementById(`generatedExperience`).value;
        
        document.getElementById(`educationOut`).innerHTML = document.getElementById(`generatedEducation`).value;

        document.getElementById(`outputs`).style.color = `#000000`;
        document.getElementById(`outputs`).style.fontSize = `20px`;
    }

    else if(document.getElementById(`redText`).checked && document.getElementById(`twelvePx`).checked){
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        document.getElementById(`experienceOut`).innerHTML = document.getElementById(`generatedExperience`).value;
        
        document.getElementById(`educationOut`).innerHTML = document.getElementById(`generatedEducation`).value;

        document.getElementById(`outputs`).style.color = `#FF0000`;
        document.getElementById(`outputs`).style.fontSize = `12px`;
    }

    else if(document.getElementById(`redText`).checked && document.getElementById(`twentyPx`).checked){
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        document.getElementById(`experienceOut`).innerHTML = document.getElementById(`generatedExperience`).value;
        
        document.getElementById(`educationOut`).innerHTML = document.getElementById(`generatedEducation`).value;

        document.getElementById(`outputs`).style.color = `#FF0000`;
        document.getElementById(`outputs`).style.fontSize = `20px`;
    }

    else if((document.getElementById(`blackText`).checked !== true && document.getElementById(`redText`).checked !== true) || (document.getElementById(`twelvePx`).checked !== true && document.getElementById(`twentyPx`).checked !== true)){
        alert(`Select your styles!`);
        return;
    }
});
