let container=document.createElement("div");
container.classList.add("container");

let h1=document.createElement("h1");
h1.classList.add("title");
h1.innerHTML="NEWS ARTICLES";

let row=document.createElement("div");
row.classList.add("row");

container.append(h1,row);
document.body.append(container);

async function getNewsData(){
    try {
        let response=await fetch("https://inshorts.deta.dev/news?category=politics");
        let jsonResponse=await response.json();
        let value=jsonResponse.data;
        return newsInCard(value);
    } catch (error) {
        console.log(error);
    }
}
getNewsData();

function newsInCard(value){
    for(i=0;i<value.length;i++){ 
        row.innerHTML+=`
        <div class="col-lg-4">
        <div class="card mt-3 cardhover">
        <div class="card card-body">
        <img src="${value[i].imageUrl}" class="card-img-top image">
        <div class="cardTitle">${value[i].title}</div>
        <p class="date">${value[i].date}</p>
        <div class="conAuth">
        <div class="content">${value[i].content}</div>
        <div class="author">-${value[i].author}</div>
        </div>
        <div class="readMore">
        <a href="${value[i].readMoreUrl}" target="_blank">Read More</a>
        </div>
        </div>
        </div>
        </div>`;
    }
}