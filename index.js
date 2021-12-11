
const frm=document.getElementById('A')
frm.addEventListener('Submit',(e)=>
{
    e.preventDefault()    
    var userState=document.getElementById('inputState').value
    var userCity=document.getElementById('inputCity').value
    console.log(userCity)
    console.log(userState)
    console.log("ayush")

 })
 fetch("http://localhost:3000/find").then((response)=>{  
 response.json().then((data) => {
    const stateind=Object.keys(data)  
    const statedata=Object.values(data)
    const ind1=-1;
    const cnt1=0;
    for(i=0;i<stateind.length;i++)
    {
        if(stateind[i]=userState)
        {
            ind1=i;
            break;
        }
     
    }
    const AllCityData=Object.values(statedata[ind1])
    const AllCityInd=Object.keys(AllCityData[0])
    const ind2=-1;
    const cnt2=0;
    for(i=0;i<AllCityInd.length;i++)
    {
        if(AllCityInd[i]=userCity)
        {
            ind2=i;
            break;
        }
        
    }
    const ReqCityData=Object.values(AllCityData[0]) 
    const details=Object.values(ReqCityData[ind2])  
    const active=details[1]
    const cases=details[2]
    const recovered=details[5] 
 })
})




//e.preventDefault()    