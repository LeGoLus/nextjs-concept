async function getBlog(slug) {
  const res = await fetch(`https://66e15505c831c8811b548c93.mockapi.io/blogs/${slug}`)
  
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Page({ params }) {
  const blog = await getBlog(params.slug)

  return (
    <div>
      My Post: {params.slug}
      <div>{blog.name}</div>
    </div>
  )
}