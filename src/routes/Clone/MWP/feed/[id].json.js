import {client, q} from '$lib/client'

export async function get({params}) {
  let id = params.id

  let mwpData
  try {
    mwpData = await client.query(
      q.Get(q.Match(q.Index('MWP_by_id'), id))
    )
  } catch (error) {
    console.log(error.description)
  }

  return {
    status: 200,
    body: {...mwpData}
  }
}