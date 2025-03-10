import { useState } from "react";
import { motion } from "framer-motion";
import EventCard from "../components/EventCard";

const Events = () => {
  const [filter, setFilter] = useState("All");

  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Charity Drive",
      date: "2025-03-15",
      location: "Community Center",
      description: "A charity drive to support local families.",
      category: "Charity",
    },
    {
      id: 2,
      title: "Community Prayer",
      date: "2025-03-18",
      location: "Local Church",
      description: "Join us for a communal prayer session.",
      category: "Religious",
    },
  ]);

  const [newEvent, setNewEvent] = useState({
    title: "",
    date: "",
    location: "",
    description: "",
    category: "",
  });

  const addEvent = () => {
    if (
      newEvent.title &&
      newEvent.date &&
      newEvent.location &&
      newEvent.description &&
      newEvent.category
    ) {
      setEvents([...events, { ...newEvent, id: events.length + 1 }]);
      setNewEvent({ title: "", date: "", location: "", description: "", category: "" });
    }
  };

  const filteredEvents =
    filter === "All" ? events : events.filter((e) => e.category === filter);

  return (
    <motion.div
      initial={{ opacity: 0, x: "-100vw" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "100vw" }}
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?events,community')" }}
    >
      {/* Dark overlay for better readability */}
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 p-6 max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center text-white">Event Listings</h1>

        {/* Filter Dropdown */}
        <div className="flex justify-center mb-6">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="border border-gray-300 p-2 rounded"
          >
            <option value="All">All Categories</option>
            <option value="Religious">Religious</option>
            <option value="Social">Social</option>
            <option value="Charity">Charity</option>
          </select>
        </div>

        {/* List of Events */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        {/* Add New Event Form */}
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-center">Add New Event</h2>
          <div className="grid grid-cols-1 gap-4">
            <input
              type="text"
              placeholder="Event Title"
              value={newEvent.title}
              onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
              className="border p-3 rounded"
            />
            <input
              type="date"
              value={newEvent.date}
              onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
              className="border p-3 rounded"
            />
            <input
              type="text"
              placeholder="Location"
              value={newEvent.location}
              onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
              className="border p-3 rounded"
            />
            <input
              type="text"
              placeholder="Description"
              value={newEvent.description}
              onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
              className="border p-3 rounded"
            />
            <select
              value={newEvent.category}
              onChange={(e) => setNewEvent({ ...newEvent, category: e.target.value })}
              className="border p-3 rounded"
            >
              <option value="">Select Category</option>
              <option value="Religious">Religious</option>
              <option value="Social">Social</option>
              <option value="Charity">Charity</option>
            </select>
            <button
              onClick={addEvent}
              className="bg-green-500 hover:bg-green-700 text-white py-3 rounded-full transition duration-300"
            >
              Add Event
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Events;
