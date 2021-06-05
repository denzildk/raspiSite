getClass();

async function getClass() {
    data = await fetch("http://localhost:3000/ClassJson.php")
    console.log($.parseJSON(data.json()))

}
