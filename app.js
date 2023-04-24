console.log("Let's get this party started!");

const $searchTerm = $('#searchInput');
const $gifList = $('#gifList');

function getGif(res){
    let resultsAmount = res.data.length;

    if(resultsAmount){
        let randAmount = Math.floor(Math.random()*resultsAmount);
        let $newLi = $('<li>', {class: 'gifLi'});
        let $newGif = $('<img>', {src: res.data[randAmount].images.original.url, class: 'gif'});
        
        $newLi.append($newGif);
        $gifList.append($newLi);
    }
}

$("#searchForm").on("submit", async function(e) {
    e.preventDefault();
    let term = $searchTerm.val();
    $searchTerm.val("");

    const res = await axios.get("http://api.giphy.com/v1/gifs/search", {params: {q:term, api_key:"MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"}});

    getGif(res.data);
  });
  
  $("#removeBtn").on("click", function() {
    $gifList.empty();
  });