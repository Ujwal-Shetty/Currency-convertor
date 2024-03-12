import{countryList,covcurrency} from "./codes.js"

const BASE_URL ="https://api.exchangerate-api.com/v4/latest/USD";

const dropdowns=document.querySelectorAll(".dropdown select");
const btn=document.querySelector("form button");
const fromCurr=document.querySelector(".from select")
const toCurr=document.querySelector(".to select")




//adding all currency code to select element
for(let select of dropdowns){
    for (let currcode in countryList){
        let newOption=document.createElement("option");
    newOption.innerText=currcode;
    newOption.value=currcode;
    //setting default selection in dropdown menu
    if(select.name==="from" && currcode ==="USD"){
        newOption.selected="selected";
    }
    else if(select.name==="to" && currcode ==="INR"){
        newOption.selected="selected";
    }
    select.append(newOption);

    }
    //
    select.addEventListener("change",(evt)=>{
        updateFlag(evt.target) 
    })
}
const updateFlag =(element)=>{
    let currcode=element.value
    let countryCode= countryList[currcode]
    let newSrc=`https://flagsapi.com/${countryCode}/flat/64.png`
    let img=element.parentElement.querySelector("img")
    img.src=newSrc;     
}

const getValueByKey=(object, row)=> {
    return object[row];
  }
  

btn.addEventListener("click",async(evt)=>{
    evt.preventDefault()   //prevents 
    let amount=document.querySelector(".amount input")
    let amtVal=amount.value;
   
    
    if(amtVal === ""|| amtVal < 1)
    {
        amtVal=1;
        amount.value="1";
    }
    let fromvalue =fromCurr.value
    let tovalue =toCurr.value
    
   let from= getValueByKey(covcurrency,`${fromvalue}`);
   let to= getValueByKey(covcurrency,`${tovalue}`);

   const massage=document.querySelector(".msg")
   
   let mess = `${amtVal} ${fromvalue}  = ${((1/from)*to*amtVal).toFixed(3)}, ${tovalue}`
  
   let finalresult=mess.replace(',', '')

   massage.innerText= finalresult
    
})
 




