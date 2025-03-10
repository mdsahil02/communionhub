const EventCard = ({ event }) => {
    return (
      <div className="border rounded-lg shadow-md p-4 hover:shadow-xl transition duration-300 bg-white">
        <h2 className="text-xl font-bold text-gray-800">{event.title}</h2>
        <p className="mt-2 text-gray-600">Date: {event.date}</p>
        <p className="mt-1 text-gray-600">Location: {event.location}</p>
        <p className="mt-1 text-gray-600">Description: {event.description}</p>
        <p className="mt-1 text-gray-600">Category: {event.category}</p>
      </div>
    );
  };
  
  export default EventCard;
  