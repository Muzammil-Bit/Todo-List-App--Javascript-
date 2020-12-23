const plustBtn = document.getElementById('plus-btn');
const inputText = document.getElementById('input-text')
const addItems = document.getElementById('items');
const trashBtn = document.querySelectorAll('.trash-btn');
const createdItems = document.getElementById('items');
const filter = document.getElementById('filter');

function createElement(){
    if(inputText.value !== ''){
        //Crete all the elements that are needed
    const li = document.createElement('li');
    const p = document.createElement('p');
    const btnCheck = document.createElement('button');
    const btnTrash = document.createElement('button');

    //Set Paragraph text
    p.innerText = inputText.value;
    //Set Buttons Text
    btnCheck.innerHTML = '<i class="fas fa-check"></i>';
    btnTrash.innerHTML = '<i class="fas fa-trash"></i>';
    //set Button classes so that we can add event listeners to it
    btnCheck.classList.add('check-btn');
    btnTrash.classList.add('trash-btn');
    //add Elements
    
    li.appendChild(p);
    li.appendChild(btnCheck);
    li.appendChild(btnTrash);
    addItems.appendChild(li);

    inputText.value = '';
    }


}

//Deletes the element
function checkDelete(e){
    if(e.target.classList.contains('fa-trash')){
        const item = e.target.parentElement.parentElement;
        item.classList.toggle('transition');
        //Animation
        item.ontransitionend = () => {
            //Remover li
            item.remove();
          };
        
        
    }

    if(e.target.classList.contains('fa-check')){
        e.target.parentElement.parentElement.classList.toggle('checked');
    }

}

//Filter Items
function filterItems(){
    const childOfLi = createdItems.childNodes;
    if(filter.value === 'not-completed'){
        childOfLi.forEach(element =>{
            if(element.nodeType === 1){
                if(element.classList.contains('checked')){
                    element.style.display = 'none';
                }else{
                    element.style.display = 'flex';
                }
            }
        });
    }

    if(filter.value === 'completed'){
        childOfLi.forEach(element =>{
            if(element.nodeType === 1){
                if(!element.classList.contains('checked')){
                    element.style.display = 'none';
                }else{
                    element.style.display = 'flex';
                }
            }
        });
    }

    if(filter.value === 'all'){
        childOfLi.forEach(element =>{
            if(element.nodeType === 1){
                element.style.display = 'flex';
            }
        });
    }
    
}


//Event Listeners
plustBtn.addEventListener('click', createElement)
createdItems.addEventListener('click', checkDelete)
filter.addEventListener('change', filterItems)