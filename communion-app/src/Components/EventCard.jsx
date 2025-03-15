import { motion } from "framer-motion";

const EventCard = ({ event }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.05 }}
      className="border p-4 rounded shadow"
    >
      <h3 className="font-bold">{event.title}</h3>
      <p>{event.date} - {event.location}</p>
      <p className="text-sm text-gray-600">{event.description}</p>
    </motion.div>
  );
};

export default EventCard;
