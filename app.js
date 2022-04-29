const genBtn = document.querySelector("button");
let quoteBody = document.querySelector("h1");
let author = document.querySelector("p");


async function getQuote(){
    const response = await fetch("https://api.quotable.io/random");
    let data = await response.json();
    quoteBody.textContent = data.content;
    author.textContent = data.author;
}

// const getPerson = async(id) => {
//     const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
//     console.log(res.data.name);
//     return res.data.name;
// }

genBtn.addEventListener('click', getQuote);