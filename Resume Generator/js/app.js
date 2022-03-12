let educationCount = 0;
let experienceCount = 0;
document.getElementById(`export`).disabled = true;

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
        document.getElementById(`experienceOne`).innerHTML += `<textarea cols="50" rows="3" id="generatedExperienceOne">•</textarea>`;
        console.log(`Experience` + experienceCount);
    }
    else if(experienceCount === 2){
        document.getElementById(`experienceTwo`).innerHTML += `<textarea cols="50" rows="3" id="generatedExperienceTwo">•</textarea>`;
        console.log(`Experience` + experienceCount);
    }
    else if(experienceCount === 3){
        document.getElementById(`experienceThree`).innerHTML += `<textarea cols="50" rows="3" id="generatedExperienceThree">•</textarea>`;
        console.log(`Experience` + experienceCount);
    }
    else if(experienceCount === 4){
        document.getElementById(`experienceFour`).innerHTML += `<textarea cols="50" rows="3" id="generatedExperienceFour">•</textarea>`;
        console.log(`Experience` + experienceCount);
    }
    else if (experienceCount === 5){
        document.getElementById(`experienceFive`).innerHTML += `<textarea cols="50" rows="3" id="generatedExperienceFive">•</textarea>`;
        document.getElementById(`experienceAdd`).disabled = true;
        console.log(`Experience` + experienceCount);
    }
});

document.getElementById(`educationAdd`).addEventListener(`click`, function(){
    educationCount++;
    if(educationCount === 1){
        document.getElementById(`educationOne`).innerHTML += `<textarea cols="50" rows="3" id="generatedEducationOne">•</textarea>`;
        console.log(`Education` + educationCount);
    } 
    else if(educationCount === 2){
        document.getElementById(`educationTwo`).innerHTML += `<textarea cols="50" rows="3" id="generatedEducationTwo">•</textarea>`;
        console.log(`Education` + educationCount);
    } 
    else if(educationCount === 3){
        document.getElementById(`educationThree`).innerHTML += `<textarea cols="50" rows="3" id="generatedEducationThree">•</textarea>`;
        console.log(`Education` + educationCount);
    } 
    else if(educationCount === 4){
        document.getElementById(`educationFour`).innerHTML += `<textarea cols="50" rows="3" id="generatedEducationFour">•</textarea>`;
        console.log(`Education` + educationCount);
    } 
    else if (educationCount === 5){
        document.getElementById(`educationFive`).innerHTML += `<textarea cols="50" rows="3" id="generatedEducationFive">•</textarea>`;
        document.getElementById(`educationAdd`).disabled = true;
        console.log(`Education` + educationCount);
    }
});


document.getElementById(`submit`).addEventListener(`click`, function(){
document.getElementById(`export`).disabled = false;
if(document.getElementById(`nameAdd`).disabled === true && document.getElementById(`phoneAdd`).disabled === true && document.getElementById(`emailAdd`).disabled === true && document.getElementById(`objectiveAdd`).disabled === true && experienceCount >= 5 && educationCount >= 5){
    if(document.getElementById(`blackText`).checked && document.getElementById(`twelvePx`).checked){
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

        document.getElementById(`experienceOutTwo`).innerHTML = document.getElementById(`generatedExperienceTwo`).value;

        document.getElementById(`experienceOutThree`).innerHTML = document.getElementById(`generatedExperienceThree`).value;

        document.getElementById(`experienceOutFour`).innerHTML = document.getElementById(`generatedExperienceFour`).value;

        document.getElementById(`experienceOutFive`).innerHTML = document.getElementById(`generatedExperienceFive`).value;

        /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;

        document.getElementById(`educationOutTwo`).innerHTML = document.getElementById(`generatedEducationTwo`).value;

        document.getElementById(`educationOutThree`).innerHTML = document.getElementById(`generatedEducationThree`).value;

        document.getElementById(`educationOutFour`).innerHTML = document.getElementById(`generatedEducationFour`).value;
        
        document.getElementById(`educationOutFive`).innerHTML = document.getElementById(`generatedEducationFive`).value;
        
        document.getElementById(`outputs`).style.color = `#000000`;
        document.getElementById(`outputs`).style.fontSize = `12px`;
    } 

    else if(document.getElementById(`blackText`).checked && document.getElementById(`twentyPx`).checked){
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

        document.getElementById(`experienceOutTwo`).innerHTML = document.getElementById(`generatedExperienceTwo`).value;

        document.getElementById(`experienceOutThree`).innerHTML = document.getElementById(`generatedExperienceThree`).value;

        document.getElementById(`experienceOutFour`).innerHTML = document.getElementById(`generatedExperienceFour`).value;

        document.getElementById(`experienceOutFive`).innerHTML = document.getElementById(`generatedExperienceFive`).value;

        /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;

        document.getElementById(`educationOutTwo`).innerHTML = document.getElementById(`generatedEducationTwo`).value;

        document.getElementById(`educationOutThree`).innerHTML = document.getElementById(`generatedEducationThree`).value;

        document.getElementById(`educationOutFour`).innerHTML = document.getElementById(`generatedEducationFour`).value;
        
        document.getElementById(`educationOutFive`).innerHTML = document.getElementById(`generatedEducationFive`).value;

        document.getElementById(`outputs`).style.color = `#000000`;
        document.getElementById(`outputs`).style.fontSize = `20px`;
    }

    else if(document.getElementById(`redText`).checked && document.getElementById(`twelvePx`).checked){
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

        document.getElementById(`experienceOutTwo`).innerHTML = document.getElementById(`generatedExperienceTwo`).value;

        document.getElementById(`experienceOutThree`).innerHTML = document.getElementById(`generatedExperienceThree`).value;

        document.getElementById(`experienceOutFour`).innerHTML = document.getElementById(`generatedExperienceFour`).value;

        document.getElementById(`experienceOutFive`).innerHTML = document.getElementById(`generatedExperienceFive`).value;

        /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;

        document.getElementById(`educationOutTwo`).innerHTML = document.getElementById(`generatedEducationTwo`).value;

        document.getElementById(`educationOutThree`).innerHTML = document.getElementById(`generatedEducationThree`).value;

        document.getElementById(`educationOutFour`).innerHTML = document.getElementById(`generatedEducationFour`).value;
        
        document.getElementById(`educationOutFive`).innerHTML = document.getElementById(`generatedEducationFive`).value;

        document.getElementById(`outputs`).style.color = `#FF0000`;
        document.getElementById(`outputs`).style.fontSize = `12px`;
    }

    else if(document.getElementById(`redText`).checked && document.getElementById(`twentyPx`).checked){
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

        document.getElementById(`experienceOutTwo`).innerHTML = document.getElementById(`generatedExperienceTwo`).value;

        document.getElementById(`experienceOutThree`).innerHTML = document.getElementById(`generatedExperienceThree`).value;

        document.getElementById(`experienceOutFour`).innerHTML = document.getElementById(`generatedExperienceFour`).value;

        document.getElementById(`experienceOutFive`).innerHTML = document.getElementById(`generatedExperienceFive`).value;

        /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;

        document.getElementById(`educationOutTwo`).innerHTML = document.getElementById(`generatedEducationTwo`).value;

        document.getElementById(`educationOutThree`).innerHTML = document.getElementById(`generatedEducationThree`).value;

        document.getElementById(`educationOutFour`).innerHTML = document.getElementById(`generatedEducationFour`).value;
        
        document.getElementById(`educationOutFive`).innerHTML = document.getElementById(`generatedEducationFive`).value;

        document.getElementById(`outputs`).style.color = `#FF0000`;
        document.getElementById(`outputs`).style.fontSize = `20px`;
    }

    else if((document.getElementById(`blackText`).checked !== true && document.getElementById(`redText`).checked !== true) || (document.getElementById(`twelvePx`).checked !== true && document.getElementById(`twentyPx`).checked !== true)){
        alert(`Select your styles!`);
        return;
    }
}

if(document.getElementById(`nameAdd`).disabled === true && document.getElementById(`phoneAdd`).disabled === true && document.getElementById(`emailAdd`).disabled === true && document.getElementById(`objectiveAdd`).disabled === true && experienceCount >= 5 && educationCount === 4){
    if(document.getElementById(`blackText`).checked && document.getElementById(`twelvePx`).checked){
        
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

        document.getElementById(`experienceOutTwo`).innerHTML = document.getElementById(`generatedExperienceTwo`).value;

        document.getElementById(`experienceOutThree`).innerHTML = document.getElementById(`generatedExperienceThree`).value;

        document.getElementById(`experienceOutFour`).innerHTML = document.getElementById(`generatedExperienceFour`).value;

        document.getElementById(`experienceOutFive`).innerHTML = document.getElementById(`generatedExperienceFive`).value;

        /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;

        document.getElementById(`educationOutTwo`).innerHTML = document.getElementById(`generatedEducationTwo`).value;

        document.getElementById(`educationOutThree`).innerHTML = document.getElementById(`generatedEducationThree`).value;

        document.getElementById(`educationOutFour`).innerHTML = document.getElementById(`generatedEducationFour`).value;
        
        document.getElementById(`outputs`).style.color = `#000000`;
        document.getElementById(`outputs`).style.fontSize = `12px`;
    } 

    else if(document.getElementById(`blackText`).checked && document.getElementById(`twentyPx`).checked){
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

        document.getElementById(`experienceOutTwo`).innerHTML = document.getElementById(`generatedExperienceTwo`).value;

        document.getElementById(`experienceOutThree`).innerHTML = document.getElementById(`generatedExperienceThree`).value;

        document.getElementById(`experienceOutFour`).innerHTML = document.getElementById(`generatedExperienceFour`).value;

        document.getElementById(`experienceOutFive`).innerHTML = document.getElementById(`generatedExperienceFive`).value;

        /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;

        document.getElementById(`educationOutTwo`).innerHTML = document.getElementById(`generatedEducationTwo`).value;

        document.getElementById(`educationOutThree`).innerHTML = document.getElementById(`generatedEducationThree`).value;

        document.getElementById(`educationOutFour`).innerHTML = document.getElementById(`generatedEducationFour`).value;

        document.getElementById(`outputs`).style.color = `#000000`;
        document.getElementById(`outputs`).style.fontSize = `20px`;
    }

    else if(document.getElementById(`redText`).checked && document.getElementById(`twelvePx`).checked){
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

        document.getElementById(`experienceOutTwo`).innerHTML = document.getElementById(`generatedExperienceTwo`).value;

        document.getElementById(`experienceOutThree`).innerHTML = document.getElementById(`generatedExperienceThree`).value;

        document.getElementById(`experienceOutFour`).innerHTML = document.getElementById(`generatedExperienceFour`).value;

        document.getElementById(`experienceOutFive`).innerHTML = document.getElementById(`generatedExperienceFive`).value;

        /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;

        document.getElementById(`educationOutTwo`).innerHTML = document.getElementById(`generatedEducationTwo`).value;

        document.getElementById(`educationOutThree`).innerHTML = document.getElementById(`generatedEducationThree`).value;

        document.getElementById(`educationOutFour`).innerHTML = document.getElementById(`generatedEducationFour`).value;

        document.getElementById(`outputs`).style.color = `#FF0000`;
        document.getElementById(`outputs`).style.fontSize = `12px`;
    }

    else if(document.getElementById(`redText`).checked && document.getElementById(`twentyPx`).checked){
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

        document.getElementById(`experienceOutTwo`).innerHTML = document.getElementById(`generatedExperienceTwo`).value;

        document.getElementById(`experienceOutThree`).innerHTML = document.getElementById(`generatedExperienceThree`).value;

        document.getElementById(`experienceOutFour`).innerHTML = document.getElementById(`generatedExperienceFour`).value;

        document.getElementById(`experienceOutFive`).innerHTML = document.getElementById(`generatedExperienceFive`).value;

        /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;

        document.getElementById(`educationOutTwo`).innerHTML = document.getElementById(`generatedEducationTwo`).value;

        document.getElementById(`educationOutThree`).innerHTML = document.getElementById(`generatedEducationThree`).value;

        document.getElementById(`educationOutFour`).innerHTML = document.getElementById(`generatedEducationFour`).value;

        document.getElementById(`outputs`).style.color = `#FF0000`;
        document.getElementById(`outputs`).style.fontSize = `20px`;
    }

    else if((document.getElementById(`blackText`).checked !== true && document.getElementById(`redText`).checked !== true) || (document.getElementById(`twelvePx`).checked !== true && document.getElementById(`twentyPx`).checked !== true)){
        alert(`Select your styles!`);
        return;
    }
}

if(document.getElementById(`nameAdd`).disabled === true && document.getElementById(`phoneAdd`).disabled === true && document.getElementById(`emailAdd`).disabled === true && document.getElementById(`objectiveAdd`).disabled === true && experienceCount >= 5 && educationCount === 3){
    if(document.getElementById(`blackText`).checked && document.getElementById(`twelvePx`).checked){
        
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

        document.getElementById(`experienceOutTwo`).innerHTML = document.getElementById(`generatedExperienceTwo`).value;

        document.getElementById(`experienceOutThree`).innerHTML = document.getElementById(`generatedExperienceThree`).value;

        document.getElementById(`experienceOutFour`).innerHTML = document.getElementById(`generatedExperienceFour`).value;

        document.getElementById(`experienceOutFive`).innerHTML = document.getElementById(`generatedExperienceFive`).value;

        /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;

        document.getElementById(`educationOutTwo`).innerHTML = document.getElementById(`generatedEducationTwo`).value;

        document.getElementById(`educationOutThree`).innerHTML = document.getElementById(`generatedEducationThree`).value;
        
        document.getElementById(`outputs`).style.color = `#000000`;
        document.getElementById(`outputs`).style.fontSize = `12px`;
    } 

    else if(document.getElementById(`blackText`).checked && document.getElementById(`twentyPx`).checked){
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

        document.getElementById(`experienceOutTwo`).innerHTML = document.getElementById(`generatedExperienceTwo`).value;

        document.getElementById(`experienceOutThree`).innerHTML = document.getElementById(`generatedExperienceThree`).value;

        document.getElementById(`experienceOutFour`).innerHTML = document.getElementById(`generatedExperienceFour`).value;

        document.getElementById(`experienceOutFive`).innerHTML = document.getElementById(`generatedExperienceFive`).value;

        /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;

        document.getElementById(`educationOutTwo`).innerHTML = document.getElementById(`generatedEducationTwo`).value;

        document.getElementById(`educationOutThree`).innerHTML = document.getElementById(`generatedEducationThree`).value;

        document.getElementById(`outputs`).style.color = `#000000`;
        document.getElementById(`outputs`).style.fontSize = `20px`;
    }

    else if(document.getElementById(`redText`).checked && document.getElementById(`twelvePx`).checked){
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

        document.getElementById(`experienceOutTwo`).innerHTML = document.getElementById(`generatedExperienceTwo`).value;

        document.getElementById(`experienceOutThree`).innerHTML = document.getElementById(`generatedExperienceThree`).value;

        document.getElementById(`experienceOutFour`).innerHTML = document.getElementById(`generatedExperienceFour`).value;

        document.getElementById(`experienceOutFive`).innerHTML = document.getElementById(`generatedExperienceFive`).value;

        /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;

        document.getElementById(`educationOutTwo`).innerHTML = document.getElementById(`generatedEducationTwo`).value;

        document.getElementById(`educationOutThree`).innerHTML = document.getElementById(`generatedEducationThree`).value;

        document.getElementById(`outputs`).style.color = `#FF0000`;
        document.getElementById(`outputs`).style.fontSize = `12px`;
    }

    else if(document.getElementById(`redText`).checked && document.getElementById(`twentyPx`).checked){
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

        document.getElementById(`experienceOutTwo`).innerHTML = document.getElementById(`generatedExperienceTwo`).value;

        document.getElementById(`experienceOutThree`).innerHTML = document.getElementById(`generatedExperienceThree`).value;

        document.getElementById(`experienceOutFour`).innerHTML = document.getElementById(`generatedExperienceFour`).value;

        document.getElementById(`experienceOutFive`).innerHTML = document.getElementById(`generatedExperienceFive`).value;

        /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;

        document.getElementById(`educationOutTwo`).innerHTML = document.getElementById(`generatedEducationTwo`).value;

        document.getElementById(`educationOutThree`).innerHTML = document.getElementById(`generatedEducationThree`).value;

        document.getElementById(`outputs`).style.color = `#FF0000`;
        document.getElementById(`outputs`).style.fontSize = `20px`;
    }

    else if((document.getElementById(`blackText`).checked !== true && document.getElementById(`redText`).checked !== true) || (document.getElementById(`twelvePx`).checked !== true && document.getElementById(`twentyPx`).checked !== true)){
        alert(`Select your styles!`);
        return;
    }
}
    
if(document.getElementById(`nameAdd`).disabled === true && document.getElementById(`phoneAdd`).disabled === true && document.getElementById(`emailAdd`).disabled === true && document.getElementById(`objectiveAdd`).disabled === true && experienceCount >= 5 && educationCount === 2){
    if(document.getElementById(`blackText`).checked && document.getElementById(`twelvePx`)){
        
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

        document.getElementById(`experienceOutTwo`).innerHTML = document.getElementById(`generatedExperienceTwo`).value;

        document.getElementById(`experienceOutThree`).innerHTML = document.getElementById(`generatedExperienceThree`).value;

        document.getElementById(`experienceOutFour`).innerHTML = document.getElementById(`generatedExperienceFour`).value;

        document.getElementById(`experienceOutFive`).innerHTML = document.getElementById(`generatedExperienceFive`).value;

        /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;

        document.getElementById(`educationOutTwo`).innerHTML = document.getElementById(`generatedEducationTwo`).value;
        
        document.getElementById(`outputs`).style.color = `#000000`;
        document.getElementById(`outputs`).style.fontSize = `12px`;
    } 

    else if(document.getElementById(`blackText`).checked && document.getElementById(`twentyPx`).checked){
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

        document.getElementById(`experienceOutTwo`).innerHTML = document.getElementById(`generatedExperienceTwo`).value;

        document.getElementById(`experienceOutThree`).innerHTML = document.getElementById(`generatedExperienceThree`).value;

        document.getElementById(`experienceOutFour`).innerHTML = document.getElementById(`generatedExperienceFour`).value;

        document.getElementById(`experienceOutFive`).innerHTML = document.getElementById(`generatedExperienceFive`).value;

        /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;

        document.getElementById(`educationOutTwo`).innerHTML = document.getElementById(`generatedEducationTwo`).value;

        document.getElementById(`outputs`).style.color = `#000000`;
        document.getElementById(`outputs`).style.fontSize = `20px`;
    }

    else if(document.getElementById(`redText`).checked && document.getElementById(`twelvePx`).checked){
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

        document.getElementById(`experienceOutTwo`).innerHTML = document.getElementById(`generatedExperienceTwo`).value;

        document.getElementById(`experienceOutThree`).innerHTML = document.getElementById(`generatedExperienceThree`).value;

        document.getElementById(`experienceOutFour`).innerHTML = document.getElementById(`generatedExperienceFour`).value;

        document.getElementById(`experienceOutFive`).innerHTML = document.getElementById(`generatedExperienceFive`).value;

        /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;

        document.getElementById(`educationOutTwo`).innerHTML = document.getElementById(`generatedEducationTwo`).value;

        document.getElementById(`outputs`).style.color = `#FF0000`;
        document.getElementById(`outputs`).style.fontSize = `12px`;
    }

    else if(document.getElementById(`redText`).checked && document.getElementById(`twentyPx`).checked){
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

        document.getElementById(`experienceOutTwo`).innerHTML = document.getElementById(`generatedExperienceTwo`).value;

        document.getElementById(`experienceOutThree`).innerHTML = document.getElementById(`generatedExperienceThree`).value;

        document.getElementById(`experienceOutFour`).innerHTML = document.getElementById(`generatedExperienceFour`).value;

        document.getElementById(`experienceOutFive`).innerHTML = document.getElementById(`generatedExperienceFive`).value;

        /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;

        document.getElementById(`educationOutTwo`).innerHTML = document.getElementById(`generatedEducationTwo`).value;

        document.getElementById(`outputs`).style.color = `#FF0000`;
        document.getElementById(`outputs`).style.fontSize = `20px`;
    }

    else if((document.getElementById(`blackText`).checked !== true && document.getElementById(`redText`).checked !== true) || (document.getElementById(`twelvePx`).checked !== true && document.getElementById(`twentyPx`).checked !== true)){
        alert(`Select your styles!`);
        return;
    }
}

if(document.getElementById(`nameAdd`).disabled === true && document.getElementById(`phoneAdd`).disabled === true && document.getElementById(`emailAdd`).disabled === true && document.getElementById(`objectiveAdd`).disabled === true && experienceCount >= 5 && educationCount === 1){
    if(document.getElementById(`blackText`).checked && document.getElementById(`twelvePx`).checked){
        
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

        document.getElementById(`experienceOutTwo`).innerHTML = document.getElementById(`generatedExperienceTwo`).value;

        document.getElementById(`experienceOutThree`).innerHTML = document.getElementById(`generatedExperienceThree`).value;

        document.getElementById(`experienceOutFour`).innerHTML = document.getElementById(`generatedExperienceFour`).value;

        document.getElementById(`experienceOutFive`).innerHTML = document.getElementById(`generatedExperienceFive`).value;

        /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;
        
        document.getElementById(`outputs`).style.color = `#000000`;
        document.getElementById(`outputs`).style.fontSize = `12px`;
    } 

    else if(document.getElementById(`blackText`).checked && document.getElementById(`twentyPx`).checked){
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

        document.getElementById(`experienceOutTwo`).innerHTML = document.getElementById(`generatedExperienceTwo`).value;

        document.getElementById(`experienceOutThree`).innerHTML = document.getElementById(`generatedExperienceThree`).value;

        document.getElementById(`experienceOutFour`).innerHTML = document.getElementById(`generatedExperienceFour`).value;

        document.getElementById(`experienceOutFive`).innerHTML = document.getElementById(`generatedExperienceFive`).value;

        /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;

        document.getElementById(`outputs`).style.color = `#000000`;
        document.getElementById(`outputs`).style.fontSize = `20px`;
    }

    else if(document.getElementById(`redText`).checked && document.getElementById(`twelvePx`).checked){
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

        document.getElementById(`experienceOutTwo`).innerHTML = document.getElementById(`generatedExperienceTwo`).value;

        document.getElementById(`experienceOutThree`).innerHTML = document.getElementById(`generatedExperienceThree`).value;

        document.getElementById(`experienceOutFour`).innerHTML = document.getElementById(`generatedExperienceFour`).value;

        document.getElementById(`experienceOutFive`).innerHTML = document.getElementById(`generatedExperienceFive`).value;

        /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;

        document.getElementById(`outputs`).style.color = `#FF0000`;
        document.getElementById(`outputs`).style.fontSize = `12px`;
    }

    else if(document.getElementById(`redText`).checked && document.getElementById(`twentyPx`).checked){
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

        document.getElementById(`experienceOutTwo`).innerHTML = document.getElementById(`generatedExperienceTwo`).value;

        document.getElementById(`experienceOutThree`).innerHTML = document.getElementById(`generatedExperienceThree`).value;

        document.getElementById(`experienceOutFour`).innerHTML = document.getElementById(`generatedExperienceFour`).value;

        document.getElementById(`experienceOutFive`).innerHTML = document.getElementById(`generatedExperienceFive`).value;

        /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;

        document.getElementById(`outputs`).style.color = `#FF0000`;
        document.getElementById(`outputs`).style.fontSize = `20px`;
    }

    else if((document.getElementById(`blackText`).checked !== true && document.getElementById(`redText`).checked !== true) || (document.getElementById(`twelvePx`).checked !== true && document.getElementById(`twentyPx`).checked !== true)){
        alert(`Select your styles!`);
        return;
    }
}

if(document.getElementById(`nameAdd`).disabled === true && document.getElementById(`phoneAdd`).disabled === true && document.getElementById(`emailAdd`).disabled === true && document.getElementById(`objectiveAdd`).disabled === true && experienceCount === 4 && educationCount >= 5){
    if(document.getElementById(`blackText`).checked && document.getElementById(`twelvePx`).checked){
        
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

        document.getElementById(`experienceOutTwo`).innerHTML = document.getElementById(`generatedExperienceTwo`).value;

        document.getElementById(`experienceOutThree`).innerHTML = document.getElementById(`generatedExperienceThree`).value;

        document.getElementById(`experienceOutFour`).innerHTML = document.getElementById(`generatedExperienceFour`).value;

        /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;

        document.getElementById(`educationOutTwo`).innerHTML = document.getElementById(`generatedEducationTwo`).value;

        document.getElementById(`educationOutThree`).innerHTML = document.getElementById(`generatedEducationThree`).value;

        document.getElementById(`educationOutFour`).innerHTML = document.getElementById(`generatedEducationFour`).value;
        
        document.getElementById(`educationOutFive`).innerHTML = document.getElementById(`generatedEducationFive`).value;
        
        document.getElementById(`outputs`).style.color = `#000000`;
        document.getElementById(`outputs`).style.fontSize = `12px`;
    } 

    else if(document.getElementById(`blackText`).checked && document.getElementById(`twentyPx`).checked){
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

        document.getElementById(`experienceOutTwo`).innerHTML = document.getElementById(`generatedExperienceTwo`).value;

        document.getElementById(`experienceOutThree`).innerHTML = document.getElementById(`generatedExperienceThree`).value;

        document.getElementById(`experienceOutFour`).innerHTML = document.getElementById(`generatedExperienceFour`).value;

        /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;

        document.getElementById(`educationOutTwo`).innerHTML = document.getElementById(`generatedEducationTwo`).value;

        document.getElementById(`educationOutThree`).innerHTML = document.getElementById(`generatedEducationThree`).value;

        document.getElementById(`educationOutFour`).innerHTML = document.getElementById(`generatedEducationFour`).value;
        
        document.getElementById(`educationOutFive`).innerHTML = document.getElementById(`generatedEducationFive`).value;

        document.getElementById(`outputs`).style.color = `#000000`;
        document.getElementById(`outputs`).style.fontSize = `20px`;
    }

    else if(document.getElementById(`redText`).checked && document.getElementById(`twelvePx`).checked){
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

        document.getElementById(`experienceOutTwo`).innerHTML = document.getElementById(`generatedExperienceTwo`).value;

        document.getElementById(`experienceOutThree`).innerHTML = document.getElementById(`generatedExperienceThree`).value;

        document.getElementById(`experienceOutFour`).innerHTML = document.getElementById(`generatedExperienceFour`).value;

        /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;

        document.getElementById(`educationOutTwo`).innerHTML = document.getElementById(`generatedEducationTwo`).value;

        document.getElementById(`educationOutThree`).innerHTML = document.getElementById(`generatedEducationThree`).value;

        document.getElementById(`educationOutFour`).innerHTML = document.getElementById(`generatedEducationFour`).value;
        
        document.getElementById(`educationOutFive`).innerHTML = document.getElementById(`generatedEducationFive`).value;

        document.getElementById(`outputs`).style.color = `#FF0000`;
        document.getElementById(`outputs`).style.fontSize = `12px`;
    }

    else if(document.getElementById(`redText`).checked && document.getElementById(`twentyPx`).checked){
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

        document.getElementById(`experienceOutTwo`).innerHTML = document.getElementById(`generatedExperienceTwo`).value;

        document.getElementById(`experienceOutThree`).innerHTML = document.getElementById(`generatedExperienceThree`).value;

        document.getElementById(`experienceOutFour`).innerHTML = document.getElementById(`generatedExperienceFour`).value;

        /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;

        document.getElementById(`educationOutTwo`).innerHTML = document.getElementById(`generatedEducationTwo`).value;

        document.getElementById(`educationOutThree`).innerHTML = document.getElementById(`generatedEducationThree`).value;

        document.getElementById(`educationOutFour`).innerHTML = document.getElementById(`generatedEducationFour`).value;
        
        document.getElementById(`educationOutFive`).innerHTML = document.getElementById(`generatedEducationFive`).value;

        document.getElementById(`outputs`).style.color = `#FF0000`;
        document.getElementById(`outputs`).style.fontSize = `20px`;
    }

    else if((document.getElementById(`blackText`).checked !== true && document.getElementById(`redText`).checked !== true) || (document.getElementById(`twelvePx`).checked !== true && document.getElementById(`twentyPx`).checked !== true)){
        alert(`Select your styles!`);
        return;
    }
}

if(document.getElementById(`nameAdd`).disabled === true && document.getElementById(`phoneAdd`).disabled === true && document.getElementById(`emailAdd`).disabled === true && document.getElementById(`objectiveAdd`).disabled === true && experienceCount === 4 && educationCount === 4){
    if(document.getElementById(`blackText`).checked && document.getElementById(`twelvePx`).checked){
        
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

        document.getElementById(`experienceOutTwo`).innerHTML = document.getElementById(`generatedExperienceTwo`).value;

        document.getElementById(`experienceOutThree`).innerHTML = document.getElementById(`generatedExperienceThree`).value;

        document.getElementById(`experienceOutFour`).innerHTML = document.getElementById(`generatedExperienceFour`).value;

        /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;

        document.getElementById(`educationOutTwo`).innerHTML = document.getElementById(`generatedEducationTwo`).value;

        document.getElementById(`educationOutThree`).innerHTML = document.getElementById(`generatedEducationThree`).value;

        document.getElementById(`educationOutFour`).innerHTML = document.getElementById(`generatedEducationFour`).value;
                
        document.getElementById(`outputs`).style.color = `#000000`;
        document.getElementById(`outputs`).style.fontSize = `12px`;
    } 

    else if(document.getElementById(`blackText`).checked && document.getElementById(`twentyPx`).checked){
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

        document.getElementById(`experienceOutTwo`).innerHTML = document.getElementById(`generatedExperienceTwo`).value;

        document.getElementById(`experienceOutThree`).innerHTML = document.getElementById(`generatedExperienceThree`).value;

        document.getElementById(`experienceOutFour`).innerHTML = document.getElementById(`generatedExperienceFour`).value;

        /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;

        document.getElementById(`educationOutTwo`).innerHTML = document.getElementById(`generatedEducationTwo`).value;

        document.getElementById(`educationOutThree`).innerHTML = document.getElementById(`generatedEducationThree`).value;

        document.getElementById(`educationOutFour`).innerHTML = document.getElementById(`generatedEducationFour`).value;

        document.getElementById(`outputs`).style.color = `#000000`;
        document.getElementById(`outputs`).style.fontSize = `20px`;
    }

    else if(document.getElementById(`redText`).checked && document.getElementById(`twelvePx`).checked){
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

        document.getElementById(`experienceOutTwo`).innerHTML = document.getElementById(`generatedExperienceTwo`).value;

        document.getElementById(`experienceOutThree`).innerHTML = document.getElementById(`generatedExperienceThree`).value;

        document.getElementById(`experienceOutFour`).innerHTML = document.getElementById(`generatedExperienceFour`).value;

        /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;

        document.getElementById(`educationOutTwo`).innerHTML = document.getElementById(`generatedEducationTwo`).value;

        document.getElementById(`educationOutThree`).innerHTML = document.getElementById(`generatedEducationThree`).value;

        document.getElementById(`educationOutFour`).innerHTML = document.getElementById(`generatedEducationFour`).value;

        document.getElementById(`outputs`).style.color = `#FF0000`;
        document.getElementById(`outputs`).style.fontSize = `12px`;
    }

    else if(document.getElementById(`redText`).checked && document.getElementById(`twentyPx`).checked){
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

        document.getElementById(`experienceOutTwo`).innerHTML = document.getElementById(`generatedExperienceTwo`).value;

        document.getElementById(`experienceOutThree`).innerHTML = document.getElementById(`generatedExperienceThree`).value;

        document.getElementById(`experienceOutFour`).innerHTML = document.getElementById(`generatedExperienceFour`).value;

        /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;

        document.getElementById(`educationOutTwo`).innerHTML = document.getElementById(`generatedEducationTwo`).value;

        document.getElementById(`educationOutThree`).innerHTML = document.getElementById(`generatedEducationThree`).value;

        document.getElementById(`educationOutFour`).innerHTML = document.getElementById(`generatedEducationFour`).value;

        document.getElementById(`outputs`).style.color = `#FF0000`;
        document.getElementById(`outputs`).style.fontSize = `20px`;
    }

    else if((document.getElementById(`blackText`).checked !== true && document.getElementById(`redText`).checked !== true) || (document.getElementById(`twelvePx`).checked !== true && document.getElementById(`twentyPx`).checked !== true)){
        alert(`Select your styles!`);
        return;
    }
}

if(document.getElementById(`nameAdd`).disabled === true && document.getElementById(`phoneAdd`).disabled === true && document.getElementById(`emailAdd`).disabled === true && document.getElementById(`objectiveAdd`).disabled === true && experienceCount === 4 && educationCount === 3){
    if(document.getElementById(`blackText`).checked && document.getElementById(`twelvePx`).checked){
        
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

        document.getElementById(`experienceOutTwo`).innerHTML = document.getElementById(`generatedExperienceTwo`).value;

        document.getElementById(`experienceOutThree`).innerHTML = document.getElementById(`generatedExperienceThree`).value;

        document.getElementById(`experienceOutFour`).innerHTML = document.getElementById(`generatedExperienceFour`).value;

        /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;

        document.getElementById(`educationOutTwo`).innerHTML = document.getElementById(`generatedEducationTwo`).value;

        document.getElementById(`educationOutThree`).innerHTML = document.getElementById(`generatedEducationThree`).value;

        document.getElementById(`outputs`).style.color = `#000000`;
        document.getElementById(`outputs`).style.fontSize = `12px`;
    } 

    else if(document.getElementById(`blackText`).checked && document.getElementById(`twentyPx`).checked){
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

        document.getElementById(`experienceOutTwo`).innerHTML = document.getElementById(`generatedExperienceTwo`).value;

        document.getElementById(`experienceOutThree`).innerHTML = document.getElementById(`generatedExperienceThree`).value;

        document.getElementById(`experienceOutFour`).innerHTML = document.getElementById(`generatedExperienceFour`).value;

        /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;

        document.getElementById(`educationOutTwo`).innerHTML = document.getElementById(`generatedEducationTwo`).value;

        document.getElementById(`educationOutThree`).innerHTML = document.getElementById(`generatedEducationThree`).value;

        document.getElementById(`outputs`).style.color = `#000000`;
        document.getElementById(`outputs`).style.fontSize = `20px`;
    }

    else if(document.getElementById(`redText`).checked && document.getElementById(`twelvePx`).checked){
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

        document.getElementById(`experienceOutTwo`).innerHTML = document.getElementById(`generatedExperienceTwo`).value;

        document.getElementById(`experienceOutThree`).innerHTML = document.getElementById(`generatedExperienceThree`).value;

        document.getElementById(`experienceOutFour`).innerHTML = document.getElementById(`generatedExperienceFour`).value;

        /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;

        document.getElementById(`educationOutTwo`).innerHTML = document.getElementById(`generatedEducationTwo`).value;

        document.getElementById(`educationOutThree`).innerHTML = document.getElementById(`generatedEducationThree`).value;

        document.getElementById(`outputs`).style.color = `#FF0000`;
        document.getElementById(`outputs`).style.fontSize = `12px`;
    }

    else if(document.getElementById(`redText`).checked && document.getElementById(`twentyPx`).checked){
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

        document.getElementById(`experienceOutTwo`).innerHTML = document.getElementById(`generatedExperienceTwo`).value;

        document.getElementById(`experienceOutThree`).innerHTML = document.getElementById(`generatedExperienceThree`).value;

        document.getElementById(`experienceOutFour`).innerHTML = document.getElementById(`generatedExperienceFour`).value;

        /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;

        document.getElementById(`educationOutTwo`).innerHTML = document.getElementById(`generatedEducationTwo`).value;

        document.getElementById(`educationOutThree`).innerHTML = document.getElementById(`generatedEducationThree`).value;

        document.getElementById(`outputs`).style.color = `#FF0000`;
        document.getElementById(`outputs`).style.fontSize = `20px`;
    }

    else if((document.getElementById(`blackText`).checked !== true && document.getElementById(`redText`).checked !== true) || (document.getElementById(`twelvePx`).checked !== true && document.getElementById(`twentyPx`).checked !== true)){
        alert(`Select your styles!`);
        return;
    }
}

if(document.getElementById(`nameAdd`).disabled === true && document.getElementById(`phoneAdd`).disabled === true && document.getElementById(`emailAdd`).disabled === true && document.getElementById(`objectiveAdd`).disabled === true && experienceCount === 4 && educationCount === 2){
    if(document.getElementById(`blackText`).checked && document.getElementById(`twelvePx`).checked){
        
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

        document.getElementById(`experienceOutTwo`).innerHTML = document.getElementById(`generatedExperienceTwo`).value;

        document.getElementById(`experienceOutThree`).innerHTML = document.getElementById(`generatedExperienceThree`).value;

        document.getElementById(`experienceOutFour`).innerHTML = document.getElementById(`generatedExperienceFour`).value;

        /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;

        document.getElementById(`educationOutTwo`).innerHTML = document.getElementById(`generatedEducationTwo`).value;
                
        document.getElementById(`outputs`).style.color = `#000000`;
        document.getElementById(`outputs`).style.fontSize = `12px`;
    } 

    else if(document.getElementById(`blackText`).checked && document.getElementById(`twentyPx`).checked){
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

        document.getElementById(`experienceOutTwo`).innerHTML = document.getElementById(`generatedExperienceTwo`).value;

        document.getElementById(`experienceOutThree`).innerHTML = document.getElementById(`generatedExperienceThree`).value;

        document.getElementById(`experienceOutFour`).innerHTML = document.getElementById(`generatedExperienceFour`).value;

        /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;

        document.getElementById(`educationOutTwo`).innerHTML = document.getElementById(`generatedEducationTwo`).value;

        document.getElementById(`outputs`).style.color = `#000000`;
        document.getElementById(`outputs`).style.fontSize = `20px`;
    }

    else if(document.getElementById(`redText`).checked && document.getElementById(`twelvePx`).checked){
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

        document.getElementById(`experienceOutTwo`).innerHTML = document.getElementById(`generatedExperienceTwo`).value;

        document.getElementById(`experienceOutThree`).innerHTML = document.getElementById(`generatedExperienceThree`).value;

        document.getElementById(`experienceOutFour`).innerHTML = document.getElementById(`generatedExperienceFour`).value;

        /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;

        document.getElementById(`educationOutTwo`).innerHTML = document.getElementById(`generatedEducationTwo`).value;

        document.getElementById(`outputs`).style.color = `#FF0000`;
        document.getElementById(`outputs`).style.fontSize = `12px`;
    }

    else if(document.getElementById(`redText`).checked && document.getElementById(`twentyPx`).checked){
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

        document.getElementById(`experienceOutTwo`).innerHTML = document.getElementById(`generatedExperienceTwo`).value;

        document.getElementById(`experienceOutThree`).innerHTML = document.getElementById(`generatedExperienceThree`).value;

        document.getElementById(`experienceOutFour`).innerHTML = document.getElementById(`generatedExperienceFour`).value;

        /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;

        document.getElementById(`educationOutTwo`).innerHTML = document.getElementById(`generatedEducationTwo`).value;

        document.getElementById(`outputs`).style.color = `#FF0000`;
        document.getElementById(`outputs`).style.fontSize = `20px`;
    }

    else if((document.getElementById(`blackText`).checked !== true && document.getElementById(`redText`).checked !== true) || (document.getElementById(`twelvePx`).checked !== true && document.getElementById(`twentyPx`).checked !== true)){
        alert(`Select your styles!`);
        return;
    }
}

if(document.getElementById(`nameAdd`).disabled === true && document.getElementById(`phoneAdd`).disabled === true && document.getElementById(`emailAdd`).disabled === true && document.getElementById(`objectiveAdd`).disabled === true && experienceCount === 4 && educationCount === 1){
    if(document.getElementById(`blackText`).checked && document.getElementById(`twelvePx`).checked){
        
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

        document.getElementById(`experienceOutTwo`).innerHTML = document.getElementById(`generatedExperienceTwo`).value;

        document.getElementById(`experienceOutThree`).innerHTML = document.getElementById(`generatedExperienceThree`).value;

        document.getElementById(`experienceOutFour`).innerHTML = document.getElementById(`generatedExperienceFour`).value;

        /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;
                
        document.getElementById(`outputs`).style.color = `#000000`;
        document.getElementById(`outputs`).style.fontSize = `12px`;
    } 

    else if(document.getElementById(`blackText`).checked && document.getElementById(`twentyPx`).checked){
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

        document.getElementById(`experienceOutTwo`).innerHTML = document.getElementById(`generatedExperienceTwo`).value;

        document.getElementById(`experienceOutThree`).innerHTML = document.getElementById(`generatedExperienceThree`).value;

        document.getElementById(`experienceOutFour`).innerHTML = document.getElementById(`generatedExperienceFour`).value;

        /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;

        document.getElementById(`outputs`).style.color = `#000000`;
        document.getElementById(`outputs`).style.fontSize = `20px`;
    }

    else if(document.getElementById(`redText`).checked && document.getElementById(`twelvePx`).checked){
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

        document.getElementById(`experienceOutTwo`).innerHTML = document.getElementById(`generatedExperienceTwo`).value;

        document.getElementById(`experienceOutThree`).innerHTML = document.getElementById(`generatedExperienceThree`).value;

        document.getElementById(`experienceOutFour`).innerHTML = document.getElementById(`generatedExperienceFour`).value;

        /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;

        document.getElementById(`outputs`).style.color = `#FF0000`;
        document.getElementById(`outputs`).style.fontSize = `12px`;
    }

    else if(document.getElementById(`redText`).checked && document.getElementById(`twentyPx`).checked){
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

        document.getElementById(`experienceOutTwo`).innerHTML = document.getElementById(`generatedExperienceTwo`).value;

        document.getElementById(`experienceOutThree`).innerHTML = document.getElementById(`generatedExperienceThree`).value;

        document.getElementById(`experienceOutFour`).innerHTML = document.getElementById(`generatedExperienceFour`).value;

        /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;

        document.getElementById(`outputs`).style.color = `#FF0000`;
        document.getElementById(`outputs`).style.fontSize = `20px`;
    }

    else if((document.getElementById(`blackText`).checked !== true && document.getElementById(`redText`).checked !== true) || (document.getElementById(`twelvePx`).checked !== true && document.getElementById(`twentyPx`).checked !== true)){
        alert(`Select your styles!`);
        return;
    }
}

if(document.getElementById(`nameAdd`).disabled === true && document.getElementById(`phoneAdd`).disabled === true && document.getElementById(`emailAdd`).disabled === true && document.getElementById(`objectiveAdd`).disabled === true && experienceCount === 3 && educationCount >= 5){
    if(document.getElementById(`blackText`).checked && document.getElementById(`twelvePx`).checked){
        
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

        document.getElementById(`experienceOutTwo`).innerHTML = document.getElementById(`generatedExperienceTwo`).value;

        document.getElementById(`experienceOutThree`).innerHTML = document.getElementById(`generatedExperienceThree`).value;

        /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;

        document.getElementById(`educationOutTwo`).innerHTML = document.getElementById(`generatedEducationTwo`).value;

        document.getElementById(`educationOutThree`).innerHTML = document.getElementById(`generatedEducationThree`).value;

        document.getElementById(`educationOutFour`).innerHTML = document.getElementById(`generatedEducationFour`).value;
        
        document.getElementById(`educationOutFive`).innerHTML = document.getElementById(`generatedEducationFive`).value;
        
        document.getElementById(`outputs`).style.color = `#000000`;
        document.getElementById(`outputs`).style.fontSize = `12px`;
    } 

    else if(document.getElementById(`blackText`).checked && document.getElementById(`twentyPx`).checked){
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

        document.getElementById(`experienceOutTwo`).innerHTML = document.getElementById(`generatedExperienceTwo`).value;

        document.getElementById(`experienceOutThree`).innerHTML = document.getElementById(`generatedExperienceThree`).value;

        /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;

        document.getElementById(`educationOutTwo`).innerHTML = document.getElementById(`generatedEducationTwo`).value;

        document.getElementById(`educationOutThree`).innerHTML = document.getElementById(`generatedEducationThree`).value;

        document.getElementById(`educationOutFour`).innerHTML = document.getElementById(`generatedEducationFour`).value;
        
        document.getElementById(`educationOutFive`).innerHTML = document.getElementById(`generatedEducationFive`).value;

        document.getElementById(`outputs`).style.color = `#000000`;
        document.getElementById(`outputs`).style.fontSize = `20px`;
    }

    else if(document.getElementById(`redText`).checked && document.getElementById(`twelvePx`).checked){
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

        document.getElementById(`experienceOutTwo`).innerHTML = document.getElementById(`generatedExperienceTwo`).value;

        document.getElementById(`experienceOutThree`).innerHTML = document.getElementById(`generatedExperienceThree`).value;

        /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;

        document.getElementById(`educationOutTwo`).innerHTML = document.getElementById(`generatedEducationTwo`).value;

        document.getElementById(`educationOutThree`).innerHTML = document.getElementById(`generatedEducationThree`).value;

        document.getElementById(`educationOutFour`).innerHTML = document.getElementById(`generatedEducationFour`).value;
        
        document.getElementById(`educationOutFive`).innerHTML = document.getElementById(`generatedEducationFive`).value;

        document.getElementById(`outputs`).style.color = `#FF0000`;
        document.getElementById(`outputs`).style.fontSize = `12px`;
    }

    else if(document.getElementById(`redText`).checked && document.getElementById(`twentyPx`).checked){
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

        document.getElementById(`experienceOutTwo`).innerHTML = document.getElementById(`generatedExperienceTwo`).value;

        document.getElementById(`experienceOutThree`).innerHTML = document.getElementById(`generatedExperienceThree`).value;

        /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;

        document.getElementById(`educationOutTwo`).innerHTML = document.getElementById(`generatedEducationTwo`).value;

        document.getElementById(`educationOutThree`).innerHTML = document.getElementById(`generatedEducationThree`).value;

        document.getElementById(`educationOutFour`).innerHTML = document.getElementById(`generatedEducationFour`).value;
        
        document.getElementById(`educationOutFive`).innerHTML = document.getElementById(`generatedEducationFive`).value;

        document.getElementById(`outputs`).style.color = `#FF0000`;
        document.getElementById(`outputs`).style.fontSize = `20px`;
    }

    else if((document.getElementById(`blackText`).checked !== true && document.getElementById(`redText`).checked !== true) || (document.getElementById(`twelvePx`).checked !== true && document.getElementById(`twentyPx`).checked !== true)){
        alert(`Select your styles!`);
        return;
    }
}

if(document.getElementById(`nameAdd`).disabled === true && document.getElementById(`phoneAdd`).disabled === true && document.getElementById(`emailAdd`).disabled === true && document.getElementById(`objectiveAdd`).disabled === true && experienceCount === 3 && educationCount === 4){
    if(document.getElementById(`blackText`).checked && document.getElementById(`twelvePx`).checked){
        
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

        document.getElementById(`experienceOutTwo`).innerHTML = document.getElementById(`generatedExperienceTwo`).value;

        document.getElementById(`experienceOutThree`).innerHTML = document.getElementById(`generatedExperienceThree`).value;

        /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;

        document.getElementById(`educationOutTwo`).innerHTML = document.getElementById(`generatedEducationTwo`).value;

        document.getElementById(`educationOutThree`).innerHTML = document.getElementById(`generatedEducationThree`).value;

        document.getElementById(`educationOutFour`).innerHTML = document.getElementById(`generatedEducationFour`).value;
          
        document.getElementById(`outputs`).style.color = `#000000`;
        document.getElementById(`outputs`).style.fontSize = `12px`;
    } 

    else if(document.getElementById(`blackText`).checked && document.getElementById(`twentyPx`).checked){
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

        document.getElementById(`experienceOutTwo`).innerHTML = document.getElementById(`generatedExperienceTwo`).value;

        document.getElementById(`experienceOutThree`).innerHTML = document.getElementById(`generatedExperienceThree`).value;

        /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;

        document.getElementById(`educationOutTwo`).innerHTML = document.getElementById(`generatedEducationTwo`).value;

        document.getElementById(`educationOutThree`).innerHTML = document.getElementById(`generatedEducationThree`).value;

        document.getElementById(`educationOutFour`).innerHTML = document.getElementById(`generatedEducationFour`).value;

        document.getElementById(`outputs`).style.color = `#000000`;
        document.getElementById(`outputs`).style.fontSize = `20px`;
    }

    else if(document.getElementById(`redText`).checked && document.getElementById(`twelvePx`).checked){
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

        document.getElementById(`experienceOutTwo`).innerHTML = document.getElementById(`generatedExperienceTwo`).value;

        document.getElementById(`experienceOutThree`).innerHTML = document.getElementById(`generatedExperienceThree`).value;

        /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;

        document.getElementById(`educationOutTwo`).innerHTML = document.getElementById(`generatedEducationTwo`).value;

        document.getElementById(`educationOutThree`).innerHTML = document.getElementById(`generatedEducationThree`).value;

        document.getElementById(`educationOutFour`).innerHTML = document.getElementById(`generatedEducationFour`).value;

        document.getElementById(`outputs`).style.color = `#FF0000`;
        document.getElementById(`outputs`).style.fontSize = `12px`;
    }

    else if(document.getElementById(`redText`).checked && document.getElementById(`twentyPx`).checked){
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

        document.getElementById(`experienceOutTwo`).innerHTML = document.getElementById(`generatedExperienceTwo`).value;

        document.getElementById(`experienceOutThree`).innerHTML = document.getElementById(`generatedExperienceThree`).value;

        /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;

        document.getElementById(`educationOutTwo`).innerHTML = document.getElementById(`generatedEducationTwo`).value;

        document.getElementById(`educationOutThree`).innerHTML = document.getElementById(`generatedEducationThree`).value;

        document.getElementById(`educationOutFour`).innerHTML = document.getElementById(`generatedEducationFour`).value;

        document.getElementById(`outputs`).style.color = `#FF0000`;
        document.getElementById(`outputs`).style.fontSize = `20px`;
    }

    else if((document.getElementById(`blackText`).checked !== true && document.getElementById(`redText`).checked !== true) || (document.getElementById(`twelvePx`).checked !== true && document.getElementById(`twentyPx`).checked !== true)){
        alert(`Select your styles!`);
        return;
    }
}

if(document.getElementById(`nameAdd`).disabled === true && document.getElementById(`phoneAdd`).disabled === true && document.getElementById(`emailAdd`).disabled === true && document.getElementById(`objectiveAdd`).disabled === true && experienceCount === 3 && educationCount === 3){
    if(document.getElementById(`blackText`).checked && document.getElementById(`twelvePx`).checked){
        
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

        document.getElementById(`experienceOutTwo`).innerHTML = document.getElementById(`generatedExperienceTwo`).value;

        document.getElementById(`experienceOutThree`).innerHTML = document.getElementById(`generatedExperienceThree`).value;

        /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;

        document.getElementById(`educationOutTwo`).innerHTML = document.getElementById(`generatedEducationTwo`).value;

        document.getElementById(`educationOutThree`).innerHTML = document.getElementById(`generatedEducationThree`).value;
        
        document.getElementById(`outputs`).style.color = `#000000`;
        document.getElementById(`outputs`).style.fontSize = `12px`;
    } 

    else if(document.getElementById(`blackText`).checked && document.getElementById(`twentyPx`).checked){
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

        document.getElementById(`experienceOutTwo`).innerHTML = document.getElementById(`generatedExperienceTwo`).value;

        document.getElementById(`experienceOutThree`).innerHTML = document.getElementById(`generatedExperienceThree`).value;

        /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;

        document.getElementById(`educationOutTwo`).innerHTML = document.getElementById(`generatedEducationTwo`).value;

        document.getElementById(`educationOutThree`).innerHTML = document.getElementById(`generatedEducationThree`).value;

        document.getElementById(`outputs`).style.color = `#000000`;
        document.getElementById(`outputs`).style.fontSize = `20px`;
    }

    else if(document.getElementById(`redText`).checked && document.getElementById(`twelvePx`).checked){
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

        document.getElementById(`experienceOutTwo`).innerHTML = document.getElementById(`generatedExperienceTwo`).value;

        document.getElementById(`experienceOutThree`).innerHTML = document.getElementById(`generatedExperienceThree`).value;

        /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;

        document.getElementById(`educationOutTwo`).innerHTML = document.getElementById(`generatedEducationTwo`).value;

        document.getElementById(`educationOutThree`).innerHTML = document.getElementById(`generatedEducationThree`).value;

        document.getElementById(`outputs`).style.color = `#FF0000`;
        document.getElementById(`outputs`).style.fontSize = `12px`;
    }

    else if(document.getElementById(`redText`).checked && document.getElementById(`twentyPx`).checked){
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

        document.getElementById(`experienceOutTwo`).innerHTML = document.getElementById(`generatedExperienceTwo`).value;

        document.getElementById(`experienceOutThree`).innerHTML = document.getElementById(`generatedExperienceThree`).value;

        /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;

        document.getElementById(`educationOutTwo`).innerHTML = document.getElementById(`generatedEducationTwo`).value;

        document.getElementById(`educationOutThree`).innerHTML = document.getElementById(`generatedEducationThree`).value;

        document.getElementById(`outputs`).style.color = `#FF0000`;
        document.getElementById(`outputs`).style.fontSize = `20px`;
    }

    else if((document.getElementById(`blackText`).checked !== true && document.getElementById(`redText`).checked !== true) || (document.getElementById(`twelvePx`).checked !== true && document.getElementById(`twentyPx`).checked !== true)){
        alert(`Select your styles!`);
        return;
    }
}

if(document.getElementById(`nameAdd`).disabled === true && document.getElementById(`phoneAdd`).disabled === true && document.getElementById(`emailAdd`).disabled === true && document.getElementById(`objectiveAdd`).disabled === true && experienceCount === 3 && educationCount === 2){
    if(document.getElementById(`blackText`).checked && document.getElementById(`twelvePx`).checked){
        
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

        document.getElementById(`experienceOutTwo`).innerHTML = document.getElementById(`generatedExperienceTwo`).value;

        document.getElementById(`experienceOutThree`).innerHTML = document.getElementById(`generatedExperienceThree`).value;

        /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;

        document.getElementById(`educationOutTwo`).innerHTML = document.getElementById(`generatedEducationTwo`).value;
        
        document.getElementById(`outputs`).style.color = `#000000`;
        document.getElementById(`outputs`).style.fontSize = `12px`;
    } 

    else if(document.getElementById(`blackText`).checked && document.getElementById(`twentyPx`).checked){
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

        document.getElementById(`experienceOutTwo`).innerHTML = document.getElementById(`generatedExperienceTwo`).value;

        document.getElementById(`experienceOutThree`).innerHTML = document.getElementById(`generatedExperienceThree`).value;

        /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;

        document.getElementById(`educationOutTwo`).innerHTML = document.getElementById(`generatedEducationTwo`).value;

        document.getElementById(`outputs`).style.color = `#000000`;
        document.getElementById(`outputs`).style.fontSize = `20px`;
    }

    else if(document.getElementById(`redText`).checked && document.getElementById(`twelvePx`).checked){
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

        document.getElementById(`experienceOutTwo`).innerHTML = document.getElementById(`generatedExperienceTwo`).value;

        document.getElementById(`experienceOutThree`).innerHTML = document.getElementById(`generatedExperienceThree`).value;

        /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;

        document.getElementById(`educationOutTwo`).innerHTML = document.getElementById(`generatedEducationTwo`).value;

        document.getElementById(`outputs`).style.color = `#FF0000`;
        document.getElementById(`outputs`).style.fontSize = `12px`;
    }

    else if(document.getElementById(`redText`).checked && document.getElementById(`twentyPx`).checked){
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

        document.getElementById(`experienceOutTwo`).innerHTML = document.getElementById(`generatedExperienceTwo`).value;

        document.getElementById(`experienceOutThree`).innerHTML = document.getElementById(`generatedExperienceThree`).value;

        /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;

        document.getElementById(`educationOutTwo`).innerHTML = document.getElementById(`generatedEducationTwo`).value;

        document.getElementById(`outputs`).style.color = `#FF0000`;
        document.getElementById(`outputs`).style.fontSize = `20px`;
    }

    else if((document.getElementById(`blackText`).checked !== true && document.getElementById(`redText`).checked !== true) || (document.getElementById(`twelvePx`).checked !== true && document.getElementById(`twentyPx`).checked !== true)){
        alert(`Select your styles!`);
        return;
    }
}

if(document.getElementById(`nameAdd`).disabled === true && document.getElementById(`phoneAdd`).disabled === true && document.getElementById(`emailAdd`).disabled === true && document.getElementById(`objectiveAdd`).disabled === true && experienceCount === 3 && educationCount === 2){
    if(document.getElementById(`blackText`).checked && document.getElementById(`twelvePx`).checked){
        
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

        document.getElementById(`experienceOutTwo`).innerHTML = document.getElementById(`generatedExperienceTwo`).value;

        document.getElementById(`experienceOutThree`).innerHTML = document.getElementById(`generatedExperienceThree`).value;

        /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;

        document.getElementById(`educationOutTwo`).innerHTML = document.getElementById(`generatedEducationTwo`).value;
     
        document.getElementById(`outputs`).style.color = `#000000`;
        document.getElementById(`outputs`).style.fontSize = `12px`;
    } 

    else if(document.getElementById(`blackText`).checked && document.getElementById(`twentyPx`).checked){
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

        document.getElementById(`experienceOutTwo`).innerHTML = document.getElementById(`generatedExperienceTwo`).value;

        document.getElementById(`experienceOutThree`).innerHTML = document.getElementById(`generatedExperienceThree`).value;

        /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;

        document.getElementById(`educationOutTwo`).innerHTML = document.getElementById(`generatedEducationTwo`).value;

        document.getElementById(`outputs`).style.color = `#000000`;
        document.getElementById(`outputs`).style.fontSize = `20px`;
    }

    else if(document.getElementById(`redText`).checked && document.getElementById(`twelvePx`).checked){
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

        document.getElementById(`experienceOutTwo`).innerHTML = document.getElementById(`generatedExperienceTwo`).value;

        document.getElementById(`experienceOutThree`).innerHTML = document.getElementById(`generatedExperienceThree`).value;

        /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;

        document.getElementById(`educationOutTwo`).innerHTML = document.getElementById(`generatedEducationTwo`).value;

        document.getElementById(`outputs`).style.color = `#FF0000`;
        document.getElementById(`outputs`).style.fontSize = `12px`;
    }

    else if(document.getElementById(`redText`).checked && document.getElementById(`twentyPx`).checked){
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

        document.getElementById(`experienceOutTwo`).innerHTML = document.getElementById(`generatedExperienceTwo`).value;

        document.getElementById(`experienceOutThree`).innerHTML = document.getElementById(`generatedExperienceThree`).value;

        /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;

        document.getElementById(`educationOutTwo`).innerHTML = document.getElementById(`generatedEducationTwo`).value;

        document.getElementById(`outputs`).style.color = `#FF0000`;
        document.getElementById(`outputs`).style.fontSize = `20px`;
    }

    else if((document.getElementById(`blackText`).checked !== true && document.getElementById(`redText`).checked !== true) || (document.getElementById(`twelvePx`).checked !== true && document.getElementById(`twentyPx`).checked !== true)){
        alert(`Select your styles!`);
        return;
    }
}

if(document.getElementById(`nameAdd`).disabled === true && document.getElementById(`phoneAdd`).disabled === true && document.getElementById(`emailAdd`).disabled === true && document.getElementById(`objectiveAdd`).disabled === true && experienceCount === 3 && educationCount === 1){
    if(document.getElementById(`blackText`).checked && document.getElementById(`twelvePx`).checked){
        
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

        document.getElementById(`experienceOutTwo`).innerHTML = document.getElementById(`generatedExperienceTwo`).value;

        document.getElementById(`experienceOutThree`).innerHTML = document.getElementById(`generatedExperienceThree`).value;

        /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;
        
        document.getElementById(`outputs`).style.color = `#000000`;
        document.getElementById(`outputs`).style.fontSize = `12px`;
    } 

    else if(document.getElementById(`blackText`).checked && document.getElementById(`twentyPx`).checked){
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

        document.getElementById(`experienceOutTwo`).innerHTML = document.getElementById(`generatedExperienceTwo`).value;

        document.getElementById(`experienceOutThree`).innerHTML = document.getElementById(`generatedExperienceThree`).value;

        /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;

        document.getElementById(`outputs`).style.color = `#000000`;
        document.getElementById(`outputs`).style.fontSize = `20px`;
    }

    else if(document.getElementById(`redText`).checked && document.getElementById(`twelvePx`).checked){
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

        document.getElementById(`experienceOutTwo`).innerHTML = document.getElementById(`generatedExperienceTwo`).value;

        document.getElementById(`experienceOutThree`).innerHTML = document.getElementById(`generatedExperienceThree`).value;

        /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;

        document.getElementById(`outputs`).style.color = `#FF0000`;
        document.getElementById(`outputs`).style.fontSize = `12px`;
    }

    else if(document.getElementById(`redText`).checked && document.getElementById(`twentyPx`).checked){
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

        document.getElementById(`experienceOutTwo`).innerHTML = document.getElementById(`generatedExperienceTwo`).value;

        document.getElementById(`experienceOutThree`).innerHTML = document.getElementById(`generatedExperienceThree`).value;

        /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;

        document.getElementById(`outputs`).style.color = `#FF0000`;
        document.getElementById(`outputs`).style.fontSize = `20px`;
    }

    else if((document.getElementById(`blackText`).checked !== true && document.getElementById(`redText`).checked !== true) || (document.getElementById(`twelvePx`).checked !== true && document.getElementById(`twentyPx`).checked !== true)){
        alert(`Select your styles!`);
        return;
    }
}

if(document.getElementById(`nameAdd`).disabled === true && document.getElementById(`phoneAdd`).disabled === true && document.getElementById(`emailAdd`).disabled === true && document.getElementById(`objectiveAdd`).disabled === true && experienceCount === 2 && educationCount >= 5){
    if(document.getElementById(`blackText`).checked && document.getElementById(`twelvePx`).checked){
        
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

        document.getElementById(`experienceOutTwo`).innerHTML = document.getElementById(`generatedExperienceTwo`).value;

        /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;

        document.getElementById(`educationOutTwo`).innerHTML = document.getElementById(`generatedEducationTwo`).value;

        document.getElementById(`educationOutThree`).innerHTML = document.getElementById(`generatedEducationThree`).value;

        document.getElementById(`educationOutFour`).innerHTML = document.getElementById(`generatedEducationFour`).value;
        
        document.getElementById(`educationOutFive`).innerHTML = document.getElementById(`generatedEducationFive`).value;
        
        document.getElementById(`outputs`).style.color = `#000000`;
        document.getElementById(`outputs`).style.fontSize = `12px`;
    } 

    else if(document.getElementById(`blackText`).checked && document.getElementById(`twentyPx`).checked){
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

        document.getElementById(`experienceOutTwo`).innerHTML = document.getElementById(`generatedExperienceTwo`).value;

        /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;

        document.getElementById(`educationOutTwo`).innerHTML = document.getElementById(`generatedEducationTwo`).value;

        document.getElementById(`educationOutThree`).innerHTML = document.getElementById(`generatedEducationThree`).value;

        document.getElementById(`educationOutFour`).innerHTML = document.getElementById(`generatedEducationFour`).value;
        
        document.getElementById(`educationOutFive`).innerHTML = document.getElementById(`generatedEducationFive`).value;

        document.getElementById(`outputs`).style.color = `#000000`;
        document.getElementById(`outputs`).style.fontSize = `20px`;
    }

    else if(document.getElementById(`redText`).checked && document.getElementById(`twelvePx`).checked){
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

        document.getElementById(`experienceOutTwo`).innerHTML = document.getElementById(`generatedExperienceTwo`).value;

        /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;

        document.getElementById(`educationOutTwo`).innerHTML = document.getElementById(`generatedEducationTwo`).value;

        document.getElementById(`educationOutThree`).innerHTML = document.getElementById(`generatedEducationThree`).value;

        document.getElementById(`educationOutFour`).innerHTML = document.getElementById(`generatedEducationFour`).value;
        
        document.getElementById(`educationOutFive`).innerHTML = document.getElementById(`generatedEducationFive`).value;

        document.getElementById(`outputs`).style.color = `#FF0000`;
        document.getElementById(`outputs`).style.fontSize = `12px`;
    }

    else if(document.getElementById(`redText`).checked && document.getElementById(`twentyPx`).checked){
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

        document.getElementById(`experienceOutTwo`).innerHTML = document.getElementById(`generatedExperienceTwo`).value;

        /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;

        document.getElementById(`educationOutTwo`).innerHTML = document.getElementById(`generatedEducationTwo`).value;

        document.getElementById(`educationOutThree`).innerHTML = document.getElementById(`generatedEducationThree`).value;

        document.getElementById(`educationOutFour`).innerHTML = document.getElementById(`generatedEducationFour`).value;
        
        document.getElementById(`educationOutFive`).innerHTML = document.getElementById(`generatedEducationFive`).value;

        document.getElementById(`outputs`).style.color = `#FF0000`;
        document.getElementById(`outputs`).style.fontSize = `20px`;
    }

    else if((document.getElementById(`blackText`).checked !== true && document.getElementById(`redText`).checked !== true) || (document.getElementById(`twelvePx`).checked !== true && document.getElementById(`twentyPx`).checked !== true)){
        alert(`Select your styles!`);
        return;
    }
}

if(document.getElementById(`nameAdd`).disabled === true && document.getElementById(`phoneAdd`).disabled === true && document.getElementById(`emailAdd`).disabled === true && document.getElementById(`objectiveAdd`).disabled === true && experienceCount === 2 && educationCount === 4){
    if(document.getElementById(`blackText`).checked && document.getElementById(`twelvePx`).checked){
        
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

        document.getElementById(`experienceOutTwo`).innerHTML = document.getElementById(`generatedExperienceTwo`).value;

        /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;

        document.getElementById(`educationOutTwo`).innerHTML = document.getElementById(`generatedEducationTwo`).value;

        document.getElementById(`educationOutThree`).innerHTML = document.getElementById(`generatedEducationThree`).value;

        document.getElementById(`educationOutFour`).innerHTML = document.getElementById(`generatedEducationFour`).value;
                
        document.getElementById(`outputs`).style.color = `#000000`;
        document.getElementById(`outputs`).style.fontSize = `12px`;
    } 

    else if(document.getElementById(`blackText`).checked && document.getElementById(`twentyPx`).checked){
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

        document.getElementById(`experienceOutTwo`).innerHTML = document.getElementById(`generatedExperienceTwo`).value;

        /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;

        document.getElementById(`educationOutTwo`).innerHTML = document.getElementById(`generatedEducationTwo`).value;

        document.getElementById(`educationOutThree`).innerHTML = document.getElementById(`generatedEducationThree`).value;

        document.getElementById(`educationOutFour`).innerHTML = document.getElementById(`generatedEducationFour`).value;

        document.getElementById(`outputs`).style.color = `#000000`;
        document.getElementById(`outputs`).style.fontSize = `20px`;
    }

    else if(document.getElementById(`redText`).checked && document.getElementById(`twelvePx`).checked){
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

        document.getElementById(`experienceOutTwo`).innerHTML = document.getElementById(`generatedExperienceTwo`).value;

        /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;

        document.getElementById(`educationOutTwo`).innerHTML = document.getElementById(`generatedEducationTwo`).value;

        document.getElementById(`educationOutThree`).innerHTML = document.getElementById(`generatedEducationThree`).value;

        document.getElementById(`educationOutFour`).innerHTML = document.getElementById(`generatedEducationFour`).value;

        document.getElementById(`outputs`).style.color = `#FF0000`;
        document.getElementById(`outputs`).style.fontSize = `12px`;
    }

    else if(document.getElementById(`redText`).checked && document.getElementById(`twentyPx`).checked){
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

        document.getElementById(`experienceOutTwo`).innerHTML = document.getElementById(`generatedExperienceTwo`).value;

        /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;

        document.getElementById(`educationOutTwo`).innerHTML = document.getElementById(`generatedEducationTwo`).value;

        document.getElementById(`educationOutThree`).innerHTML = document.getElementById(`generatedEducationThree`).value;

        document.getElementById(`educationOutFour`).innerHTML = document.getElementById(`generatedEducationFour`).value;

        document.getElementById(`outputs`).style.color = `#FF0000`;
        document.getElementById(`outputs`).style.fontSize = `20px`;
    }

    else if((document.getElementById(`blackText`).checked !== true && document.getElementById(`redText`).checked !== true) || (document.getElementById(`twelvePx`).checked !== true && document.getElementById(`twentyPx`).checked !== true)){
        alert(`Select your styles!`);
        return;
    }
}

if(document.getElementById(`nameAdd`).disabled === true && document.getElementById(`phoneAdd`).disabled === true && document.getElementById(`emailAdd`).disabled === true && document.getElementById(`objectiveAdd`).disabled === true && experienceCount === 2 && educationCount === 3){
    if(document.getElementById(`blackText`).checked && document.getElementById(`twelvePx`).checked){
        
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

        document.getElementById(`experienceOutTwo`).innerHTML = document.getElementById(`generatedExperienceTwo`).value;

        /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;

        document.getElementById(`educationOutTwo`).innerHTML = document.getElementById(`generatedEducationTwo`).value;

        document.getElementById(`educationOutThree`).innerHTML = document.getElementById(`generatedEducationThree`).value;
                
        document.getElementById(`outputs`).style.color = `#000000`;
        document.getElementById(`outputs`).style.fontSize = `12px`;
    } 

    else if(document.getElementById(`blackText`).checked && document.getElementById(`twentyPx`).checked){
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

        document.getElementById(`experienceOutTwo`).innerHTML = document.getElementById(`generatedExperienceTwo`).value;

        /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;

        document.getElementById(`educationOutTwo`).innerHTML = document.getElementById(`generatedEducationTwo`).value;

        document.getElementById(`educationOutThree`).innerHTML = document.getElementById(`generatedEducationThree`).value;

        document.getElementById(`outputs`).style.color = `#000000`;
        document.getElementById(`outputs`).style.fontSize = `20px`;
    }

    else if(document.getElementById(`redText`).checked && document.getElementById(`twelvePx`).checked){
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

        document.getElementById(`experienceOutTwo`).innerHTML = document.getElementById(`generatedExperienceTwo`).value;

        /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;

        document.getElementById(`educationOutTwo`).innerHTML = document.getElementById(`generatedEducationTwo`).value;

        document.getElementById(`educationOutThree`).innerHTML = document.getElementById(`generatedEducationThree`).value;

        document.getElementById(`outputs`).style.color = `#FF0000`;
        document.getElementById(`outputs`).style.fontSize = `12px`;
    }

    else if(document.getElementById(`redText`).checked && document.getElementById(`twentyPx`).checked){
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

        document.getElementById(`experienceOutTwo`).innerHTML = document.getElementById(`generatedExperienceTwo`).value;

        /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;

        document.getElementById(`educationOutTwo`).innerHTML = document.getElementById(`generatedEducationTwo`).value;

        document.getElementById(`educationOutThree`).innerHTML = document.getElementById(`generatedEducationThree`).value;

        document.getElementById(`outputs`).style.color = `#FF0000`;
        document.getElementById(`outputs`).style.fontSize = `20px`;
    }

    else if((document.getElementById(`blackText`).checked !== true && document.getElementById(`redText`).checked !== true) || (document.getElementById(`twelvePx`).checked !== true && document.getElementById(`twentyPx`).checked !== true)){
        alert(`Select your styles!`);
        return;
    }
}

if(document.getElementById(`nameAdd`).disabled === true && document.getElementById(`phoneAdd`).disabled === true && document.getElementById(`emailAdd`).disabled === true && document.getElementById(`objectiveAdd`).disabled === true && experienceCount === 2 && educationCount === 2){
    if(document.getElementById(`blackText`).checked && document.getElementById(`twelvePx`).checked){
        
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

        document.getElementById(`experienceOutTwo`).innerHTML = document.getElementById(`generatedExperienceTwo`).value;

        /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;

        document.getElementById(`educationOutTwo`).innerHTML = document.getElementById(`generatedEducationTwo`).value;
                
        document.getElementById(`outputs`).style.color = `#000000`;
        document.getElementById(`outputs`).style.fontSize = `12px`;
    } 

    else if(document.getElementById(`blackText`).checked && document.getElementById(`twentyPx`).checked){
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

        document.getElementById(`experienceOutTwo`).innerHTML = document.getElementById(`generatedExperienceTwo`).value;

        /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;

        document.getElementById(`educationOutTwo`).innerHTML = document.getElementById(`generatedEducationTwo`).value;

        document.getElementById(`outputs`).style.color = `#000000`;
        document.getElementById(`outputs`).style.fontSize = `20px`;
    }

    else if(document.getElementById(`redText`).checked && document.getElementById(`twelvePx`).checked){
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

        document.getElementById(`experienceOutTwo`).innerHTML = document.getElementById(`generatedExperienceTwo`).value;

        /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;

        document.getElementById(`educationOutTwo`).innerHTML = document.getElementById(`generatedEducationTwo`).value;

        document.getElementById(`outputs`).style.color = `#FF0000`;
        document.getElementById(`outputs`).style.fontSize = `12px`;
    }

    else if(document.getElementById(`redText`).checked && document.getElementById(`twentyPx`).checked){
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

        document.getElementById(`experienceOutTwo`).innerHTML = document.getElementById(`generatedExperienceTwo`).value;

        /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;

        document.getElementById(`educationOutTwo`).innerHTML = document.getElementById(`generatedEducationTwo`).value;

        document.getElementById(`outputs`).style.color = `#FF0000`;
        document.getElementById(`outputs`).style.fontSize = `20px`;
    }

    else if((document.getElementById(`blackText`).checked !== true && document.getElementById(`redText`).checked !== true) || (document.getElementById(`twelvePx`).checked !== true && document.getElementById(`twentyPx`).checked !== true)){
        alert(`Select your styles!`);
        return;
    }
}

if(document.getElementById(`nameAdd`).disabled === true && document.getElementById(`phoneAdd`).disabled === true && document.getElementById(`emailAdd`).disabled === true && document.getElementById(`objectiveAdd`).disabled === true && experienceCount === 2 && educationCount === 2){
    if(document.getElementById(`blackText`).checked && document.getElementById(`twelvePx`).checked){
        
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

        document.getElementById(`experienceOutTwo`).innerHTML = document.getElementById(`generatedExperienceTwo`).value;

        /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;

        document.getElementById(`educationOutTwo`).innerHTML = document.getElementById(`generatedEducationTwo`).value;
                
        document.getElementById(`outputs`).style.color = `#000000`;
        document.getElementById(`outputs`).style.fontSize = `12px`;
    } 

    else if(document.getElementById(`blackText`).checked && document.getElementById(`twentyPx`).checked){
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

        document.getElementById(`experienceOutTwo`).innerHTML = document.getElementById(`generatedExperienceTwo`).value;

        /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;

        document.getElementById(`educationOutTwo`).innerHTML = document.getElementById(`generatedEducationTwo`).value;

        document.getElementById(`outputs`).style.color = `#000000`;
        document.getElementById(`outputs`).style.fontSize = `20px`;
    }

    else if(document.getElementById(`redText`).checked && document.getElementById(`twelvePx`).checked){
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

        document.getElementById(`experienceOutTwo`).innerHTML = document.getElementById(`generatedExperienceTwo`).value;

        /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;

        document.getElementById(`educationOutTwo`).innerHTML = document.getElementById(`generatedEducationTwo`).value;

        document.getElementById(`outputs`).style.color = `#FF0000`;
        document.getElementById(`outputs`).style.fontSize = `12px`;
    }

    else if(document.getElementById(`redText`).checked && document.getElementById(`twentyPx`).checked){
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

        document.getElementById(`experienceOutTwo`).innerHTML = document.getElementById(`generatedExperienceTwo`).value;

        /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;

        document.getElementById(`educationOutTwo`).innerHTML = document.getElementById(`generatedEducationTwo`).value;

        document.getElementById(`outputs`).style.color = `#FF0000`;
        document.getElementById(`outputs`).style.fontSize = `20px`;
    }

    else if((document.getElementById(`blackText`).checked !== true && document.getElementById(`redText`).checked !== true) || (document.getElementById(`twelvePx`).checked !== true && document.getElementById(`twentyPx`).checked !== true)){
        alert(`Select your styles!`);
        return;
    }
}

if(document.getElementById(`nameAdd`).disabled === true && document.getElementById(`phoneAdd`).disabled === true && document.getElementById(`emailAdd`).disabled === true && document.getElementById(`objectiveAdd`).disabled === true && experienceCount === 2 && educationCount === 1){
    if(document.getElementById(`blackText`).checked && document.getElementById(`twelvePx`).checked){
        
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

        document.getElementById(`experienceOutTwo`).innerHTML = document.getElementById(`generatedExperienceTwo`).value;

        /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;
                
        document.getElementById(`outputs`).style.color = `#000000`;
        document.getElementById(`outputs`).style.fontSize = `12px`;
    } 

    else if(document.getElementById(`blackText`).checked && document.getElementById(`twentyPx`).checked){
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

        document.getElementById(`experienceOutTwo`).innerHTML = document.getElementById(`generatedExperienceTwo`).value;

        /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;

        document.getElementById(`outputs`).style.color = `#000000`;
        document.getElementById(`outputs`).style.fontSize = `20px`;
    }

    else if(document.getElementById(`redText`).checked && document.getElementById(`twelvePx`).checked){
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

        document.getElementById(`experienceOutTwo`).innerHTML = document.getElementById(`generatedExperienceTwo`).value;

        /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;

        document.getElementById(`outputs`).style.color = `#FF0000`;
        document.getElementById(`outputs`).style.fontSize = `12px`;
    }

    else if(document.getElementById(`redText`).checked && document.getElementById(`twentyPx`).checked){
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

        document.getElementById(`experienceOutTwo`).innerHTML = document.getElementById(`generatedExperienceTwo`).value;

        /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;

        document.getElementById(`outputs`).style.color = `#FF0000`;
        document.getElementById(`outputs`).style.fontSize = `20px`;
    }

    else if((document.getElementById(`blackText`).checked !== true && document.getElementById(`redText`).checked !== true) || (document.getElementById(`twelvePx`).checked !== true && document.getElementById(`twentyPx`).checked !== true)){
        alert(`Select your styles!`);
        return;
    }
}

if(document.getElementById(`nameAdd`).disabled === true && document.getElementById(`phoneAdd`).disabled === true && document.getElementById(`emailAdd`).disabled === true && document.getElementById(`objectiveAdd`).disabled === true && experienceCount === 1 && educationCount >= 5){
    if(document.getElementById(`blackText`).checked && document.getElementById(`twelvePx`).checked){
        
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

         /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;

        document.getElementById(`educationOutTwo`).innerHTML = document.getElementById(`generatedEducationTwo`).value;

        document.getElementById(`educationOutThree`).innerHTML = document.getElementById(`generatedEducationThree`).value;

        document.getElementById(`educationOutFour`).innerHTML = document.getElementById(`generatedEducationFour`).value;
        
        document.getElementById(`educationOutFive`).innerHTML = document.getElementById(`generatedEducationFive`).value;
        
        document.getElementById(`outputs`).style.color = `#000000`;
        document.getElementById(`outputs`).style.fontSize = `12px`;
    } 

    else if(document.getElementById(`blackText`).checked && document.getElementById(`twentyPx`).checked){
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

         /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;

        document.getElementById(`educationOutTwo`).innerHTML = document.getElementById(`generatedEducationTwo`).value;

        document.getElementById(`educationOutThree`).innerHTML = document.getElementById(`generatedEducationThree`).value;

        document.getElementById(`educationOutFour`).innerHTML = document.getElementById(`generatedEducationFour`).value;
        
        document.getElementById(`educationOutFive`).innerHTML = document.getElementById(`generatedEducationFive`).value;

        document.getElementById(`outputs`).style.color = `#000000`;
        document.getElementById(`outputs`).style.fontSize = `20px`;
    }

    else if(document.getElementById(`redText`).checked && document.getElementById(`twelvePx`).checked){
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

         /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;

        document.getElementById(`educationOutTwo`).innerHTML = document.getElementById(`generatedEducationTwo`).value;

        document.getElementById(`educationOutThree`).innerHTML = document.getElementById(`generatedEducationThree`).value;

        document.getElementById(`educationOutFour`).innerHTML = document.getElementById(`generatedEducationFour`).value;
        
        document.getElementById(`educationOutFive`).innerHTML = document.getElementById(`generatedEducationFive`).value;

        document.getElementById(`outputs`).style.color = `#FF0000`;
        document.getElementById(`outputs`).style.fontSize = `12px`;
    }

    else if(document.getElementById(`redText`).checked && document.getElementById(`twentyPx`).checked){
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

         /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;

        document.getElementById(`educationOutTwo`).innerHTML = document.getElementById(`generatedEducationTwo`).value;

        document.getElementById(`educationOutThree`).innerHTML = document.getElementById(`generatedEducationThree`).value;

        document.getElementById(`educationOutFour`).innerHTML = document.getElementById(`generatedEducationFour`).value;
        
        document.getElementById(`educationOutFive`).innerHTML = document.getElementById(`generatedEducationFive`).value;

        document.getElementById(`outputs`).style.color = `#FF0000`;
        document.getElementById(`outputs`).style.fontSize = `20px`;
    }

    else if((document.getElementById(`blackText`).checked !== true && document.getElementById(`redText`).checked !== true) || (document.getElementById(`twelvePx`).checked !== true && document.getElementById(`twentyPx`).checked !== true)){
        alert(`Select your styles!`);
        return;
    }
}

if(document.getElementById(`nameAdd`).disabled === true && document.getElementById(`phoneAdd`).disabled === true && document.getElementById(`emailAdd`).disabled === true && document.getElementById(`objectiveAdd`).disabled === true && experienceCount === 1 && educationCount === 4){
    if(document.getElementById(`blackText`).checked && document.getElementById(`twelvePx`).checked){
        
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

         /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;

        document.getElementById(`educationOutTwo`).innerHTML = document.getElementById(`generatedEducationTwo`).value;

        document.getElementById(`educationOutThree`).innerHTML = document.getElementById(`generatedEducationThree`).value;

        document.getElementById(`educationOutFour`).innerHTML = document.getElementById(`generatedEducationFour`).value;
                
        document.getElementById(`outputs`).style.color = `#000000`;
        document.getElementById(`outputs`).style.fontSize = `12px`;
    } 

    else if(document.getElementById(`blackText`).checked && document.getElementById(`twentyPx`).checked){
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

         /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;

        document.getElementById(`educationOutTwo`).innerHTML = document.getElementById(`generatedEducationTwo`).value;

        document.getElementById(`educationOutThree`).innerHTML = document.getElementById(`generatedEducationThree`).value;

        document.getElementById(`educationOutFour`).innerHTML = document.getElementById(`generatedEducationFour`).value;

        document.getElementById(`outputs`).style.color = `#000000`;
        document.getElementById(`outputs`).style.fontSize = `20px`;
    }

    else if(document.getElementById(`redText`).checked && document.getElementById(`twelvePx`).checked){
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

         /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;

        document.getElementById(`educationOutTwo`).innerHTML = document.getElementById(`generatedEducationTwo`).value;

        document.getElementById(`educationOutThree`).innerHTML = document.getElementById(`generatedEducationThree`).value;

        document.getElementById(`educationOutFour`).innerHTML = document.getElementById(`generatedEducationFour`).value;

        document.getElementById(`outputs`).style.color = `#FF0000`;
        document.getElementById(`outputs`).style.fontSize = `12px`;
    }

    else if(document.getElementById(`redText`).checked && document.getElementById(`twentyPx`).checked){
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

         /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;

        document.getElementById(`educationOutTwo`).innerHTML = document.getElementById(`generatedEducationTwo`).value;

        document.getElementById(`educationOutThree`).innerHTML = document.getElementById(`generatedEducationThree`).value;

        document.getElementById(`educationOutFour`).innerHTML = document.getElementById(`generatedEducationFour`).value;

        document.getElementById(`outputs`).style.color = `#FF0000`;
        document.getElementById(`outputs`).style.fontSize = `20px`;
    }

    else if((document.getElementById(`blackText`).checked !== true && document.getElementById(`redText`).checked !== true) || (document.getElementById(`twelvePx`).checked !== true && document.getElementById(`twentyPx`).checked !== true)){
        alert(`Select your styles!`);
        return;
    }
}

if(document.getElementById(`nameAdd`).disabled === true && document.getElementById(`phoneAdd`).disabled === true && document.getElementById(`emailAdd`).disabled === true && document.getElementById(`objectiveAdd`).disabled === true && experienceCount === 1 && educationCount === 3){
    if(document.getElementById(`blackText`).checked && document.getElementById(`twelvePx`).checked){
        
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

         /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;

        document.getElementById(`educationOutTwo`).innerHTML = document.getElementById(`generatedEducationTwo`).value;

        document.getElementById(`educationOutThree`).innerHTML = document.getElementById(`generatedEducationThree`).value;
              
        document.getElementById(`outputs`).style.color = `#000000`;
        document.getElementById(`outputs`).style.fontSize = `12px`;
    } 

    else if(document.getElementById(`blackText`).checked && document.getElementById(`twentyPx`).checked){
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

         /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;

        document.getElementById(`educationOutTwo`).innerHTML = document.getElementById(`generatedEducationTwo`).value;

        document.getElementById(`educationOutThree`).innerHTML = document.getElementById(`generatedEducationThree`).value;

        document.getElementById(`outputs`).style.color = `#000000`;
        document.getElementById(`outputs`).style.fontSize = `20px`;
    }

    else if(document.getElementById(`redText`).checked && document.getElementById(`twelvePx`).checked){
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

         /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;

        document.getElementById(`educationOutTwo`).innerHTML = document.getElementById(`generatedEducationTwo`).value;

        document.getElementById(`educationOutThree`).innerHTML = document.getElementById(`generatedEducationThree`).value;

        document.getElementById(`outputs`).style.color = `#FF0000`;
        document.getElementById(`outputs`).style.fontSize = `12px`;
    }

    else if(document.getElementById(`redText`).checked && document.getElementById(`twentyPx`).checked){
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

         /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;

        document.getElementById(`educationOutTwo`).innerHTML = document.getElementById(`generatedEducationTwo`).value;

        document.getElementById(`educationOutThree`).innerHTML = document.getElementById(`generatedEducationThree`).value;

        document.getElementById(`outputs`).style.color = `#FF0000`;
        document.getElementById(`outputs`).style.fontSize = `20px`;
    }

    else if((document.getElementById(`blackText`).checked !== true && document.getElementById(`redText`).checked !== true) || (document.getElementById(`twelvePx`).checked !== true && document.getElementById(`twentyPx`).checked !== true)){
        alert(`Select your styles!`);
        return;
    }
}

if(document.getElementById(`nameAdd`).disabled === true && document.getElementById(`phoneAdd`).disabled === true && document.getElementById(`emailAdd`).disabled === true && document.getElementById(`objectiveAdd`).disabled === true && experienceCount === 1 && educationCount === 2){
    if(document.getElementById(`blackText`).checked && document.getElementById(`twelvePx`).checked){
        
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

         /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;

        document.getElementById(`educationOutTwo`).innerHTML = document.getElementById(`generatedEducationTwo`).value;
                
        document.getElementById(`outputs`).style.color = `#000000`;
        document.getElementById(`outputs`).style.fontSize = `12px`;
    } 

    else if(document.getElementById(`blackText`).checked && document.getElementById(`twentyPx`).checked){
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

         /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;

        document.getElementById(`educationOutTwo`).innerHTML = document.getElementById(`generatedEducationTwo`).value;

        document.getElementById(`outputs`).style.color = `#000000`;
        document.getElementById(`outputs`).style.fontSize = `20px`;
    }

    else if(document.getElementById(`redText`).checked && document.getElementById(`twelvePx`).checked){
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

         /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;

        document.getElementById(`educationOutTwo`).innerHTML = document.getElementById(`generatedEducationTwo`).value;

        document.getElementById(`outputs`).style.color = `#FF0000`;
        document.getElementById(`outputs`).style.fontSize = `12px`;
    }

    else if(document.getElementById(`redText`).checked && document.getElementById(`twentyPx`).checked){
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

         /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;

        document.getElementById(`educationOutTwo`).innerHTML = document.getElementById(`generatedEducationTwo`).value;

        document.getElementById(`outputs`).style.color = `#FF0000`;
        document.getElementById(`outputs`).style.fontSize = `20px`;
    }

    else if((document.getElementById(`blackText`).checked !== true && document.getElementById(`redText`).checked !== true) || (document.getElementById(`twelvePx`).checked !== true && document.getElementById(`twentyPx`).checked !== true)){
        alert(`Select your styles!`);
        return;
    }
}

if(document.getElementById(`nameAdd`).disabled === true && document.getElementById(`phoneAdd`).disabled === true && document.getElementById(`emailAdd`).disabled === true && document.getElementById(`objectiveAdd`).disabled === true && experienceCount === 1 && educationCount === 1){
    if(document.getElementById(`blackText`).checked && document.getElementById(`twelvePx`).checked){
        
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

         /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;
                
        document.getElementById(`outputs`).style.color = `#000000`;
        document.getElementById(`outputs`).style.fontSize = `12px`;
    } 

    else if(document.getElementById(`blackText`).checked && document.getElementById(`twentyPx`).checked){
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

         /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;

        document.getElementById(`outputs`).style.color = `#000000`;
        document.getElementById(`outputs`).style.fontSize = `20px`;
    }

    else if(document.getElementById(`redText`).checked && document.getElementById(`twelvePx`).checked){
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

         /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;

        document.getElementById(`outputs`).style.color = `#FF0000`;
        document.getElementById(`outputs`).style.fontSize = `12px`;
    }

    else if(document.getElementById(`redText`).checked && document.getElementById(`twentyPx`).checked){
        document.getElementById(`nameOut`).innerHTML = `Name: ` + document.getElementById(`generatedName`).value;

        document.getElementById(`phoneOut`).innerHTML = document.getElementById(`generatedPhone`).value;

        document.getElementById(`emailOut`).innerHTML = document.getElementById(`generatedEmail`).value;

        document.getElementById(`objectiveOut`).innerHTML = document.getElementById(`generatedObjective`).value;

        /*Experience Section*/
        
        document.getElementById(`experienceOutOne`).innerHTML = document.getElementById(`generatedExperienceOne`).value;

         /*Education Section*/
        
        document.getElementById(`educationOutOne`).innerHTML = document.getElementById(`generatedEducationOne`).value;

        document.getElementById(`outputs`).style.color = `#FF0000`;
        document.getElementById(`outputs`).style.fontSize = `20px`;
    }

    else if((document.getElementById(`blackText`).checked !== true && document.getElementById(`redText`).checked !== true) || (document.getElementById(`twelvePx`).checked !== true && document.getElementById(`twentyPx`).checked !== true)){
        alert(`Select your styles!`);
        return;
    }
}

else if(document.getElementById(`nameAdd`).disabled !== true || document.getElementById(`phoneAdd`).disabled !== true || document.getElementById(`emailAdd`).disabled !== true || document.getElementById(`objectiveAdd`).disabled !== true || experienceCount === 0 || educationCount === 0){
    alert(`Add your information!`);
    document.getElementById(`export`).disabled = true;
    return;
}
});
