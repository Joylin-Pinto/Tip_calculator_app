let no_of_ppl = document.getElementById('people')
let error_mssg = document.getElementById('error')
let bill_amount = document.getElementById('bill-input')
const buttons = document.querySelectorAll('.btns button');
let custom_tax = document.getElementById('custom')
let tip_amount = document.getElementById('tip-amt')
let per_person = document.getElementById('per-person')
let rest = document.getElementById('reset')

let selectedButtonId;
let customTax=0;
let tax_pec, tipAmt , Billamt ,total_per_person ;
 
buttons.forEach(button => {
    button.addEventListener('click', function() {  
        custom_tax.value="";
        selectedButtonId = button.id; 
        buttons.forEach(b => b.classList.remove('selected'));
        button.classList.add('selected');
    });
});
custom_tax.addEventListener('input',function(){
    buttons.forEach(b => b.classList.remove('selected'))
    customTax = custom_tax.value
})

no_of_ppl.addEventListener('keypress',function(e){
    if(e.key === 'Enter'){ 
        if(no_of_ppl.value == 0){ 
            error_mssg.classList.add('error-message')
            no_of_ppl.style.border=' solid red 2px'
            console.log("error")
        }
        else{ 
            error_mssg.classList.remove('error-message')
            no_of_ppl.style.border='#30b0a3' 
            if(customTax===0){
               if(selectedButtonId=="5per"){
                 tax_pec=5;
                }
                else if(selectedButtonId=="10per"){
                    tax_pec=10
                }
                else if(selectedButtonId=="15per"){
                    tax_pec=15
                }
                else if(selectedButtonId=="25per"){
                    tax_pec=25
                }
                else if(selectedButtonId=="50per"){
                    tax_pec=50
                }
        }
        else{
            tax_pec=customTax;
        }
        Billamt = bill_amount.value
         tipAmt = (Billamt*tax_pec)/100
         tip_amount.innerHTML = `$${tipAmt.toFixed(2)}`;

           total_per_person = tipAmt/no_of_ppl.value;
         per_person.innerHTML=`$${total_per_person.toFixed(2)}`
         
        }
    }
})

rest.addEventListener('click',function(){
    bill_amount.value=0
    no_of_ppl.value=0
    buttons.forEach(b => b.classList.remove('selected')) 
    custom_tax.value=""
    no_of_ppl.value=0
    per_person.innerHTML="$0.00"
    tip_amount.innerHTML="$0.00"
})
