import { useState } from "react";
import { motion } from "framer-motion";

const EventForm = ({ onAddEvent }) => {
  const [event, setEvent] = useState({ title: "", date: "", category: "Religious", location: "", description: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (event.title && event.date) {
      onAddEvent({ ...event, id: Date.now() });
      setEvent({ title: "", date: "", category: "Religious", location: "", description: "" });
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="mt-6 p-4 border rounded"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="font-bold">Add New Event</h3>
      <motion.input
        whileFocus={{ scale: 1.02 }}
        type="text"
        placeholder="Title"
        value={event.title}
        onChange={(e) => setEvent({ ...event, title: e.target.value })}
        className="border p-2 w-full mt-2"
        required
      />
      <motion.input
        whileFocus={{ scale: 1.02 }}
        type="date"
        value={event.date}
        onChange={(e) => setEvent({ ...event, date: e.target.value })}
        className="border p-2 w-full mt-2"
        required
      />
      <motion.select
        whileFocus={{ scale: 1.02 }}
        value={event.category}
        onChange={(e) => setEvent({ ...event, category: e.target.value })}
        className="border p-2 w-full mt-2"
      >
        <option value="Religious">Religious</option>
        <option value="Social">Social</option>
        <option value="Charity">Charity</option>
      </motion.select>
      <motion.input
        whileFocus={{ scale: 1.02 }}
        type="text"
        placeholder="Location"
        value={event.location}
        onChange={(e) => setEvent({ ...event, location: e.target.value })}
        className="border p-2 w-full mt-2"
      />
      <motion.textarea
        whileFocus={{ scale: 1.02 }}
        placeholder="Description"
        value={event.description}
        onChange={(e) => setEvent({ ...event, description: e.target.value })}
        className="border p-2 w-full mt-2"
      />
      <motion.button
        type="submit"
        className="bg-blue-600 text-white py-2 px-4 rounded mt-4"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Add Event
      </motion.button>
    </motion.form>
  );
};

export default EventForm;
