var i = 1

async function timedCount() {
  setTimeout('timedCount()', 500)

  const request = await fetch(`https://jsonplaceholder.typicode.com/posts/${i}`)
  const { title } = await request.json()
  console.log(title)
  postMessage(title)
  i++
}

timedCount()
