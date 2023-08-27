 const loadPHone=async(searchText) =>{
    const res=await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data =await res.json();
    const phone=data.data
    displayPhone(phone);

 }
 

 const displayPhone=phones => {
    const phoneContainer=document.getElementById('phone-contaner');
    //clear phone container cards befor adding new cards
    phoneContainer.textContent='';

    //display show all button if there more then 12 phone
    const showAllContainer=document.getElementById('show-all-container');
    if(phones.length > 12){
        showAllContainer.classList.remove('hidden')
    }
    else{
        showAllContainer.classList.add('hidden');
    }
    if(phones.length)
    phones=phones.slice(0,6)
    phones.forEach(phone => { console.log(phone);
        //creat a div 2
        const phoneCard=document.createElement('div');
        phoneCard.classList=`card card-compact  bg-red-100 shadow-xl`;
        //set inner html 3
        phoneCard.innerHTML=`<figure><img src="${phone.image}" /></figure>
        <div class="card-body">
          <h2 class="card-title text-zinc-950">${phone.phone_name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>`;
        // append chind 4
        phoneContainer.appendChild(phoneCard);

        
    });
    //hide loading spninner
    toggleLoadingSpinner(false);
 }

 //handle search
 const handleSearch = () =>{
    toggleLoadingSpinner(true);
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText)
    loadPHone(searchText);
 }

const toggleLoadingSpinner= (isLoading) =>{
    const loadingSpinner=document.getElementById('loading-spinner');
   if(isLoading){
    loadingSpinner.classList.remove('hidden')
   }
   else{
    loadingSpinner.classList.add('hidden');
   }
 
}















// loadPHone()
