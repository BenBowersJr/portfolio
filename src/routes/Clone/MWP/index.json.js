import { client, q } from "$lib/client"

export async function get() {
  let supervisors
  try {
    supervisors = await client.query(
      q.Map(
        q.Paginate(
          q.Union(
            q.Match(q.Index('user_by_role'), 'Supervisor'),
            q.Match(q.Index('user_by_role'), 'Lead'),
          )
        ),
        q.Lambda('ref', q.Get(q.Var('ref')))
      )
    )
  } catch (error) {
    console.log(error.description)
  }

  return {
    status: 200,
    body: {
      ...supervisors
    }
  }
}

export async function post({request}) {
  const req = await request.json()
  let users



  // These are just like get requests, just needs users plant from client.
  if (req.get == 'leads') {
    try {
      users = await client.query(
        q.Map(
          q.Paginate(
            q.Union(
              q.Match(q.Index('user_by_plant_and_role'), req.plant, 'Supervisor'),
              q.Match(q.Index('user_by_plant_and_role'), req.plant, 'Lead'),
            )
          ),
          q.Lambda('ref', q.Get(q.Var('ref')))
        )
      )
    } catch (error) {
      console.log(error.description)
    }
  
    return {
      status: 200,
      body: {...users}
    }
  } 

  if (req.get == 'managers & supervisors') {
    try {
      users = await client.query(
        q.Map(
          q.Paginate(
            q.Union(
              q.Match(q.Index('user_by_plant_and_role'), req.plant, 'Supervisor'),
              q.Match(q.Index('user_by_plant_and_role'), req.plant, 'Manager'),
            )
          ),
          q.Lambda('ref', q.Get(q.Var('ref')))
        )
      )
    } catch (error) {
      console.log(error.description)
    }
  
    return {
      status: 200,
      body: {...users}
    }
  } 
  
  if (req.get == 'team') {
    try {
      users = await client.query(
        q.Map(
          q.Paginate(
              q.Match(q.Index('user_by_plant_and_role'),req.plant, 'Team Member'),
          ),
          q.Lambda('ref', q.Get(q.Var('ref')))
        )
      )
    } catch (error) {
      console.log(error.description)
    }

    return {
      status: 200,
      body: {...users}
    }
  }

}