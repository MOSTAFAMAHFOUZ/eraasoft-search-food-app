const APP_KEY = "17b32d2194ce894774dd5ecc2053f805";
const APP_ID ="9810e877";
const loading = document.getElementById("loading");
const contData = document.getElementById("cont-data");
const searchForm = document.getElementById("search-form");


searchForm.onsubmit = (e)=>{
    e.preventDefault();
    let textValue = document.getElementById("text-search").value;
    if(textValue == '')
    {
        textValue = "chicken";
    }
    console.log(textValue);
    const APP_URL = `https://api.edamam.com/search?q=${textValue}&app_id=${APP_ID}&app_key=${APP_KEY}`;
    contData.innerHTML = '';



$.ajax({
    type:"GET",
    url:APP_URL,
    beforeSend:function(){
        loading.classList.remove("d-none")
    },
    success:function(data)
    {
        loading.classList.add("d-none");
        data.hits.map((item)=>
        {
        console.log(item.recipe);

            contData.innerHTML += `
                <div class="col-md-4 col-sm-6 my-3">

                    <div class="card">
                    <img src="${item.recipe.image}" class="card-img-top" alt="...">
        
                    <div class="card-body">
                        <h5 class="card-title">${item.recipe.label}</h5>
                        <p class="card-text">
                         <strong> calories : </strong> ${item.recipe.calories}
                        </p>
                    </div>
                    </div>

                </div>
            `

        })
        document.getElementById("text-search").value = '';
    },
    error:function(error)
    {
        console.log(error)
    }
})

}