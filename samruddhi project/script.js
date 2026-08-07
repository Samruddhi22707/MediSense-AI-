let patients = [

{name:"Riya Sharma", age:22, disease:"Diabetes", symptoms:"High sugar, tiredness"},
{name:"Tejas Patil", age:25, disease:"Fever", symptoms:"Cold, headache"},
{name:"Samiksha Tiwari", age:20, disease:"Migraine", symptoms:"Head pain"},
{name:"Aarav Joshi", age:35, disease:"Blood Pressure", symptoms:"Dizziness"},
{name:"Priya Deshmukh", age:28, disease:"Asthma", symptoms:"Breathing problem"},
{name:"Rahul Verma", age:40, disease:"Heart Disease", symptoms:"Chest pain"},
{name:"Sneha Kulkarni", age:24, disease:"Anemia", symptoms:"Weakness"},
{name:"Aditya Singh", age:30, disease:"COVID-19", symptoms:"Cough, fever"},
{name:"Neha Sharma", age:32, disease:"Thyroid", symptoms:"Weight gain"},
{name:"Karan Mehta", age:45, disease:"Arthritis", symptoms:"Joint pain"},

{name:"Aditi Patil", age:21, disease:"Cold", symptoms:"Runny nose"},
{name:"Vivek Joshi", age:50, disease:"Diabetes", symptoms:"High glucose"},
{name:"Pooja Nair", age:27, disease:"Skin Allergy", symptoms:"Rashes"},
{name:"Manish Gupta", age:36, disease:"Kidney Stone", symptoms:"Stomach pain"},
{name:"Anjali More", age:29, disease:"Flu", symptoms:"Fever"},
{name:"Rohan Shah", age:33, disease:"Gastric Problem", symptoms:"Acidity"},
{name:"Kavya Rao", age:23, disease:"Vitamin Deficiency", symptoms:"Fatigue"},
{name:"Sahil Khan", age:31, disease:"Back Pain", symptoms:"Body pain"},
{name:"Meera Joshi", age:55, disease:"Hypertension", symptoms:"High BP"},
{name:"Arjun Yadav", age:26, disease:"Infection", symptoms:"Fever"},


{name:"Pallavi Singh", age:38, disease:"Lung Infection", symptoms:"Cough"},
{name:"Nikhil Patil", age:19, disease:"Fever", symptoms:"Temperature"},
{name:"Isha Sharma", age:22, disease:"Migraine", symptoms:"Headache"},
{name:"Varun Kumar", age:42, disease:"Heart Problem", symptoms:"Chest discomfort"},
{name:"Sonia Gupta", age:34, disease:"Diabetes", symptoms:"Weakness"},
{name:"Raj Malhotra", age:48, disease:"BP", symptoms:"Dizziness"},
{name:"Tanvi Joshi", age:20, disease:"Cold", symptoms:"Sneezing"},
{name:"Omkar Patil", age:27, disease:"Asthma", symptoms:"Breathing issue"},
{name:"Yash Verma", age:39, disease:"Cholesterol", symptoms:"High cholesterol"},
{name:"Priti Naidu", age:30, disease:"Fever", symptoms:"Body ache"},


{name:"Akash More", age:44, disease:"Diabetes", symptoms:"Sugar level"},
{name:"Shreya Nair", age:25, disease:"Allergy", symptoms:"Skin itching"},
{name:"Dev Sharma", age:37, disease:"Pneumonia", symptoms:"Cough"},
{name:"Maya Kulkarni", age:60, disease:"BP", symptoms:"High pressure"},
{name:"Aman Singh", age:29, disease:"Fever", symptoms:"Cold"},
{name:"Kirti Rao", age:33, disease:"Thyroid", symptoms:"Fatigue"},
{name:"Harsh Jain", age:41, disease:"Kidney Disease", symptoms:"Pain"},
{name:"Naina Patil", age:24, disease:"Anemia", symptoms:"Weakness"},
{name:"Siddharth Joshi", age:35, disease:"Liver Problem", symptoms:"Pain"},
{name:"Ravi Kumar", age:52, disease:"Heart Disease", symptoms:"Chest pain"},


{name:"Snehal Naidu", age:26, disease:"Migraine", symptoms:"Headache"},
{name:"Ayush Shah", age:18, disease:"Cold", symptoms:"Cough"},
{name:"Divya More", age:31, disease:"Diabetes", symptoms:"High sugar"},
{name:"Mohit Verma", age:46, disease:"BP", symptoms:"Dizziness"},
{name:"Anushka Rao", age:23, disease:"Allergy", symptoms:"Rashes"},
{name:"Parth Singh", age:28, disease:"Fever", symptoms:"Temperature"},
{name:"Sakshi Patil", age:21, disease:"Vitamin D Deficiency", symptoms:"Tiredness"},
{name:"Vishal Gupta", age:54, disease:"Arthritis", symptoms:"Joint pain"},
{name:"Ritika Sharma", age:32, disease:"Asthma", symptoms:"Breathing issue"},
{name:"Kabir Joshi", age:43, disease:"Heart Problem", symptoms:"Chest pain"}

];



// Show pages

function showPage(page){

let sections=document.querySelectorAll(".container");

sections.forEach(section=>{
section.classList.add("hide");
});


document.getElementById(page).classList.remove("hide");

}



// Display patients

function displayPatients(){

let table=document.getElementById("patientTable");

table.innerHTML="";


patients.forEach(p=>{

table.innerHTML += `

<tr>
<td>${p.name}</td>
<td>${p.age}</td>
<td>${p.disease}</td>
<td>${p.symptoms}</td>
</tr>

`;

});


document.getElementById("count").innerHTML=patients.length;

}


displayPatients();




// Add patient

function addPatient(){


let patient={

name:document.getElementById("pname").value,
age:document.getElementById("page").value,
disease:document.getElementById("pdisease").value,
symptoms:document.getElementById("psymptoms").value

};


patients.push(patient);


displayPatients();


document.getElementById("message").innerHTML=
"✅ Patient Added Successfully";


}



// Search patient

function searchPatient(){


let name=document.getElementById("searchName").value.toLowerCase();


let found=patients.find(p=>
p.name.toLowerCase().includes(name)
);



if(found){


document.getElementById("searchResult").innerHTML=

`
<h3>Patient Found ✅</h3>

<p><b>Name:</b> ${found.name}</p>

<p><b>Age:</b> ${found.age}</p>

<p><b>Disease:</b> ${found.disease}</p>

<p><b>Symptoms:</b> ${found.symptoms}</p>

`;

}

else{


document.getElementById("searchResult").innerHTML=
"❌ Patient not found";


}


}




// AI Analysis

function aiCheck(){


let symptoms=
document.getElementById("aiInput").value.toLowerCase();


let result="";


if(symptoms.includes("fever")){

result="Possible Fever Infection. Doctor consultation recommended.";

}

else if(symptoms.includes("cough")){

result="Possible Respiratory Issue. Monitor breathing.";

}

else if(symptoms.includes("headache")){

result="Possible Migraine or Stress related issue.";

}

else if(symptoms.includes("sugar")){

result="Risk of Diabetes. Check glucose level.";

}

else{

result="AI Analysis: Normal monitoring required.";

}



document.getElementById("aiResult").innerHTML=result;


}
function advancedAI(){


let symptoms =
document.getElementById("newSymptoms").value.toLowerCase();


let prediction="";


if(symptoms.includes("fever") && symptoms.includes("cough")){

prediction="⚠️ Possible Flu / Respiratory Infection";

}

else if(symptoms.includes("headache")){

prediction="⚠️ Possible Migraine or Stress";

}

else if(symptoms.includes("sugar")){

prediction="⚠️ Diabetes Risk Detected. Check glucose level";

}

else if(symptoms.includes("chest")){

prediction="🚨 Heart Risk. Immediate medical check recommended";

}

else{

prediction="✅ No major risk detected. Continue monitoring";

}



document.getElementById("prediction").innerHTML=prediction;


}

function showEmergency(){
    document.getElementById("emergencyPopup").style.display = "block";
}

function closeEmergency(){
    document.getElementById("emergencyPopup").style.display = "none";
}