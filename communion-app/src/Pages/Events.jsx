import { useState } from "react";
import { motion } from "framer-motion";
import { Events } from "../data";

const EventListingPage = () => {
  const [events, setEvents] = useState(Events);
  const [filter, setFilter] = useState("All");
  const [newEvent, setNewEvent] = useState({
    title: "",
    date: "",
    category: "",
    image: "",
    free: false,
  });
  
  const [showModal, setShowModal] = useState(false);

  const categories = [
    "All", "Religious", "Sports & Fitness",
    "Technology & Hackathons", "Cultural & Festivals", "Business & Entrepreneurship", "Educational & Career",
    "Free", "Entertainment", "Culinary", "Literature", "National", "Health & Wellness"
  ];

  const filteredEvents =
    filter === "All"
      ? events
      : events.filter(
          (event) =>
            event.category === filter || (filter === "Free" && event.free)
        );

  const addEvent = () => {
    if (newEvent.title && newEvent.date && newEvent.category && newEvent.image) {
      setEvents([
        ...events,
        { ...newEvent, id: events.length + 1 },
      ]);
      setNewEvent({ title: "", date: "", category: "", image: "", free: false });
      setShowModal(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="container mx-auto px-4"
    >
      <h2 className="text-3xl font-bold text-center mb-6 mt-6">
        We Helped Communities Connect & Flourish
      </h2>
      <h3 className="text-xl text-center text-blue-600 font-semibold mb-8">
        ✨ Upcoming Events
      </h3>

      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {categories.map((category) => (
          <motion.button
            key={category}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            className={`px-4 py-2 border rounded-lg shadow-sm hover:bg-gray-100 ${
              filter === category ? "bg-gray-200" : ""
            }`}
            onClick={() => setFilter(category)}
          >
            {category}
          </motion.button>
        ))}
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        {filteredEvents.map((event) => (
          <motion.div
            key={event.id}
            className="bg-white rounded-lg shadow-lg p-4"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            {event.free && (
              <span className="bg-green-200 text-green-700 text-sm px-2 py-1 rounded-full">
                FREE
              </span>
            )}
            <h4 className="text-lg font-bold mt-2">{event.title}</h4>
            <p className="text-gray-600">📅 {event.date}</p>
          </motion.div>
        ))}
      </motion.div>

      <button onClick={() => setShowModal(true)} className="block w-full mt-8 mb-8 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Add Event</button>
      
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-xl font-bold mb-4">Add New Event</h3>
            <input type="text" placeholder="Title" value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} className="block w-full p-2 mb-2 border rounded" />
            <input type="date" value={newEvent.date} onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })} className="block w-full p-2 mb-2 border rounded" />
            <select value={newEvent.category} onChange={(e) => setNewEvent({ ...newEvent, category: e.target.value })} className="block w-full p-2 mb-2 border rounded">
              <option value="">Select Category</option>
              {categories.slice(1).map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            <input type="text" placeholder="Image URL" value={newEvent.image} onChange={(e) => setNewEvent({ ...newEvent, image: e.target.value })} className="block w-full p-2 mb-2 border rounded" />
            <button onClick={() => setShowModal(false)} className="mr-2 px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500">Cancel</button>
            <button onClick={addEvent} className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">Submit</button>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default EventListingPage;