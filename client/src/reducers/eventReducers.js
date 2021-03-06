// EVENT REDUCERS
// AUTHENTICATION REDUCERS

export function events(state = {events: [], searchResult: [], userAttendingEvents: [], userEvents: [], createdEvents: []} , action) {
  
  switch(action.type) {
    case "EVENT_CREATED":
      return {...state, userEvents: [...state.userEvents, action.payload], events: [...state.events, action.payload] }
    case "USER_EVENTS":
      return {...state, userEvents: action.payload }
    case "ALL_EVENTS":
      return {...state, events: action.payload }
    case "USER_ATTENDING":
      return {...state, userAttendingEvents: action.payload}
    case "SEARCH": {
      return {...state, searchResult: action.payload}
    }
    case "DELETE_EVENT":
      return {...state, events: state.events.filter(event => event._id !== action.eventId), userEvents: state.userEvents.filter(event => event._id !== action.eventId) }
    case "UPVOTE":
      // check for matching event by Id
      const upArray = state.events.map(event => {
        
        if (event._id === action.eventId) {
          event = action.event
        }

          return event
        })
      // return state with new array
      return { ...state, events: upArray, userEvents: state.userEvents.map(event => {
        if (event._id === action.eventId) {
          event = action.event
        }
        return event
      }), userAttendingEvents: state.userAttendingEvents.map(event => {
        if (event._id === action.eventId) {
          event = action.event
        }
        return event
      }), searchResult: state.searchResult.map(event => {
        if (event._id === action.eventId) {
          event = action.event
        }
        return event
      })
    }
    case "DOWNVOTE":
      return { ...state, events: state.events.map(event => {
        if (event._id === action.eventId) {
           event = action.event
        }
        return event
      }), userEvents: state.userEvents.map(event => {
        if (event._id === action.eventId) {
          event = action.event
        }
        return event
      }), userAttendingEvents: state.userAttendingEvents.map(event => {
        if (event._id === action.eventId) {
          event = action.event
        }
        return event
      }), searchResult: state.searchResult.map(event => {
        if (event._id === action.eventId) {
          event = action.event
        }
        return event
      }) 
    }
    case "UNVOTE":
      // return state with new array of events
      return { ...state, events: state.events.map(event => {
        if (event._id === action.eventId) {
          return action.event
        }
        return event
      }),
      userEvents: state.userEvents.map(event => {
        if (event._id === action.eventId) {
          event = action.event
        }
        return event
      }), userAttendingEvents: state.userAttendingEvents.map(event => {
        if (event._id === action.eventId) {
          event = action.event
        }
        return event
      }), searchResult: state.searchResult.map(event => {
        if (event._id === action.eventId) {
          event = action.event
        }
        return event
      })
    }
    case "ATTEND":
      return { ...state, events: state.events.map(event => {
        if (event._id === action.eventId) {
          event = action.event
        }

        return event
      }),
      userAttendingEvents: [...state.userAttendingEvents, action.event],
      userEvents: state.userEvents.map(event => {
        if (event._id === action.eventId) {
          event = action.event
        }
        
        return event
      }),
      searchResult: state.searchResult.map(event => {
        if (event._id === action.eventId) {
          event = action.event
        }
        return event
      })
    }
    case "UNATTEND":
    return { ...state, events: state.events.map(event => {
      if (event._id === action.eventId) {
        event = action.event
      }

      return event
    }),
    userAttendingEvents: state.userAttendingEvents.filter(event => {
      return event._id !== action.eventId
    }),
    userEvents: state.userEvents.map(event => {
      if (event._id === action.eventId) {
        event = action.event
      }
      
      return event
    }),
    searchResult: state.searchResult.map(event => {
      if (event._id === action.eventId) {
        event = action.event
      }
      return event
    })
  }
    default:
      return state
  }    
}

