
const api_url = "https://api.quotable.io/random";

async function getquote(url){
    const response = await fetch(url);
    const data = await response.json();

const quote = document.getElementById("quote");quote.innerHTML = data.content;

const author= document.getElementById("author");author.innerHTML = data.author;

} 
document.addEventListener('DOMContentLoaded',(Event)=>{
    getquote(api_url); // load a quote when the pages loads
     document.querySelector('#new-quote').addEventListener('click', ()=> {
        getquote(api_url); // load a new quote when the button is clicked 
        
     });
});
getquote(api_url);




function tweet() {
    const quote = document.getElementById("quote").innerText;
    const author = document.getElementById("author").innerText;
    const tweetText = `"${quote}" - ${author}`;
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
    window.open(tweetUrl, "Tweet window", "width=600,height=300");
}

