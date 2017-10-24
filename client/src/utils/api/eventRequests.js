import axios from "axios";

export default {
  //------------------------------
  //These are for User API calls
  //------------------------------

  //This function returns the User object along with a "populated" array of their createdEvents. Pass in the user ID.
  getUserEvents: function(id) {
    return axios.get("/api/user/" + id);
  },

  //------------------------------
  //These are for Event API calls
  //------------------------------

  //Creates an event and then pushes that event into the User's "createdEvents" array. id refers to user ID.
  createEvent: function(eventData, id) {
    return axios.post("/api/event/createEvent/" + id, eventData)
  },

  //This gets every event.
  getAllEvents: function() {
    return axios.get("/api/event");
  },

  //Deletes an event. Pass in event ID.
  deleteEvent: function(id) {
    return axios.delete("/api/event/" + id);
  },

  //Gets the info for a single event. Pass in event ID.
  getSingleEvent: function(id) {
    return axios.get("/api/event/" + id);
  },

  //This call allows you to get all the events posted by a single user. Pass in user ID.
  findAllByUser: function(id) {
    return axios.get("/api/event/find/" + id);
  },

  //This will toggle the upvotes. id is the User ID. All you need to pass in through the eventData is the ID of the event using "_id" format.
  upvote: function(eventData, id) {
    return axios.post("/api/event/upvote/" + id, eventData);
  },

  //Same as the upvote. Just make sure to have the event id formatted with the key "_id".
  downvote: function(eventData, id) {
    return axios.post("/api/event/downvote/" + id, eventData);
  },

  //This function is to attend an event. Similar to upvote. id is the User ID. Pass in through the eventData is the ID of the event using "_id" format.
  attendEvent: function(eventData, id) {
    return axios.post("/api/event/attend/" + id, eventData);
  }

};