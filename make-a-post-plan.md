## As person interested in programming I want to create a blogpost so I can share my ideas

#### What do we need

- X We need a token

- UI

  - X Page to make a blogpost
  - X Route & Link
  - Encourage user to signup / login (make a link)
    - X Make selector for the token
    - X If token is null, show something like: please signup, k thx
  - X Form
  - X Event Handlers & Listeners

- Send a request

  - X Thunk (async action -> we will make a post request)
  - X Dispatch it (just to test)
  - X Make a post request with our token in the Auth header

- Backend stuff (make a route, database logic etc .. already done)

- Handle our response

  - X Response (ok) -> Our post that was created
  - X Create an Action (synchronous, with type & payload)
  - X Dispatch this action
  - X Handle the action in the reducer
    - X Make a reducer if it doesn't exists
    - X Update the state

- X Display the data

  - Add our new post to the feed
  - Display our new post

- BONUS: Redirects for user friendliness
