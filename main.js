const search_input = document.querySelector('#search_input').value;

const API_KEY = "WfXZgy5VyrhNFs5tGQPEo7kz4dlrwzA5";


async function fetchGiphyAPI(){
    let response = await fetch("https://api.giphy.com/v1/gifs/search?api_key=${WfXZgy5VyrhNFs5tGQPEo7kz4dlrwzA5}&q=${search_input}");
    let data = await response.json();
    console.log(data)
}
fetchGiphyAPI();