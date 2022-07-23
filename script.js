function myFunction(){
    var movie=document.getElementById("input").value;
    // console.log(data);
    let url=`http://www.omdbapi.com/?t=${movie}&apikey=b14d5547`;
    console.log('1')
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        document.getElementById("one").innerHTML=`
        <h1>${data.Title}</h1>
        <span>${data.Year}</span>
        <h4>Genre: ${data.Genre}</h4>
        <h5>Language: ${data.Language}</h5>
        <p>${data.Plot}</p>
        `
    })

}