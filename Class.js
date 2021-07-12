
params = '{"name": "Ivan"}'

getClass();


async function getClass() {
  data = await fetch("http://localhost:3000/ClassJson.php", {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: { "Content-Type": "text/xml" },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: params,
  })
  response = await data.json()
  console.log(response)
}
