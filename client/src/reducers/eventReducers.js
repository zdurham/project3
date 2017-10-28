// EVENT REDUCERS
// AUTHENTICATION REDUCERS

export function events(state = [], action) {
  
  switch(action.type) {
    case "EVENT_CREATED":
      return {...state, events: action.payload }
    case "USER_EVENTS":
      return {...state, userEvents: action.payload }
    case "ALL_EVENTS":
      return {...state, events: action.payload }
    case "DELETE_EVENT":
      return {...state, events: action.payload}
    case "UPVOTE":
      // check for matching event by Id
      const upArray = state.events.map(event => {
        
        if (event._id === action.eventId) {
          event = action.event
        }

          return event
        })

      // return state with new array
      return { ...state, events: upArray }
    case "DOWNVOTE":
      // check for matching event by Id
      const downArray = state.events.map(event => {
        if (event._id === action.eventId) {
          event = action.event
        }
        return event
      })
      // return state with new array
      return { ...state, events: downArray }
    case "UNVOTE":
      // return state with new array of events
      return { ...state, events: state.events.map(event => {
        if (event._id === action.eventId) {
          event = action.event
        }
        return event
      })}
    case "ATTEND":
      return { ...state, events: state.events.map(event => {
        if (event._id === action.eventId) {
          event = action.event
        }

        return event
      })}
    default:
      return state
  }    
}

