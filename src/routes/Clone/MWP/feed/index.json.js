import { client, q } from "$lib/client"

export async function get() {

  return {
    status: 200,
    body: {
      foo: 'bar'
    }
  }
}

export async function post({request}) {
  let req = await request.json()
  let MDLs

  console.log(req)

  if (req.onMount) {
    try {
      MDLs = await client.query(
        q.Map(
          q.Paginate(q.Match(q.Index('MWP_by_plant'), req.plant)),
          q.Lambda('ref', q.Get(q.Var('ref')))
        )
      )
    } catch (error) {
      console.log(error.description)
    }
  }

  return {
    status: 200,
    body: {...MDLs}
  }
}