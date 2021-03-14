let api0  = `https://api.spaceXdata.com/v3/lau
nches?limit=100`;


async function fetchdata(api){
    const response = await fetch(api);
    const data = await response.json()
    if (response) { 
        hideloader(); 
    } 
    console.log(response);
    console.log(data);
 
    let num ='';
   if(data.length == 0){
    let info =`<h1>NO Information found</h1>`  ;  

    document.getElementById('flights').innerHTML=info;

   }else{
    for(let elment of data){
        if( elment.details == null){
            elment.details = "NO DEATILS ABOUT MISSION";
        }
       num += `
       <div class="card">
    <img src="${elment.links.mission_patch}" alt="Avatar" style="width:100%">
    <div class="container">
      <b>#${ elment.flight_number }</b><br> 
      <b>${ elment.mission_name}</b><br>
       <span>launch success:${ elment.launch_success}</span><br>
       <span>launch year: ${ elment.launch_year}</span><br>
       <span>launch date: ${ elment.launch_date_local}</span><br> 
      <a href="${ elment.links.wikipedia }"  alt="video link"  target="_blank" class="details"> wikipedia</a>
       <a href="${ elment.links.video_link }"  alt="video link"  target="_blank" class="details">
       <img src="youtube.png" width="10px"> video</a>
      <div class="dropdown">
  <span class="details">view details</span>
  <div class="dropdown-content">
  <p>${ elment.details }</p>
  </div>
</div>
    </div>
  </div>
       
       `
    }   
    document.getElementById('flights').innerHTML=num;
    
}
}

fetchdata(api0);

// Function to hide the loader 
function hideloader() { 
    document.getElementById('loading').style.display = 'none'; 
}
 
document.addEventListener('DOMContentLoaded', function() {




    document.getElementById("submit").addEventListener('click', ()=>{

    let year = document.getElementById("year");
    let launch = document.getElementById("launch");
    let land = document.getElementById("landing");
  
   if(year.value ==""){
    let api1 =`https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${launch.value}&land
    _success=${land.value}`;

    fetchdata(api1);

   }else if(year.value !=""){

     let api2 =`https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${launch.value}&land
            _success=${land.value}&launch_year=${year.value}`;

            fetchdata(api2);
   }


    });


    /*

    document.querySelectorAll('button').forEach(function(button) {
        button.onclick = function() {
           // document.querySelector("#hello").style.color = button.dataset.color;
           // let year =button.dataset.year;
            let api1 =`https://api.spaceXdata.com/v3/launches?limit=100&launch_success=flase&land
            _success=false&launch_year=${button.dataset.year}`;


            fetchdata(api1);
                
            }
            
            
        
    });
 */


});
 
 


/*
 let date =document.getElementsByName("date");
 date.addEventListener('click' ,(date)=>{
    let api1 =`https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land
    _success=true&launch_year=${date.value}`;
    fetchdata(api1);
 })
*/
