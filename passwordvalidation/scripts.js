const passwordInput=document.querySelector(".pass-field input");
const eyeIcon=document.querySelector('.pass-field i');
const requirmentList=document.querySelector(".requirement-list li");


const requirements=[
    {regex: /.{8,}/,index:0},
    {regex: /[0-9]/,index:1},
    {regex: /[a-z]/,index:2},
    {regex: /[^A-Za-z0-9]/,index:3},
    {regex: /[A-Z]/,index:4}
]

passwordInput.addEventListener("keyup",(e)=>{
    requirements.forEach(item =>{
        const isValid=item.regex.test(e.target.value);
        const requirmentItem=requirmentList[item.index];

        if(isValid){
            requirmentItem.firstElementChild.className = "fa-solid fa-check";
            requirmentItem.classList.add("valid");
        }
        else{
            requirmentItem.firstElementChild.className = "fa-solid fa-circle";
        }
    });
});

eyeIcon.addEventListener(
    "click",()=>{
        passwordInput.type=passwordInput.type==="password" ? "text":"password";

        eyeIcon.className=`fa-solid fa-eye${passwordInput.type==="password"? "":"-slash"}`;
})
