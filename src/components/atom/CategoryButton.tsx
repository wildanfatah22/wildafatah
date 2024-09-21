import { motion } from "framer-motion";

interface CategoryButtonProps {
  category: string;
  selectedCategory: string;
  onClick: () => void;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({
  category,
  selectedCategory,
  onClick,
}) => (
  <motion.div
    className={`relative cat-item cursor-pointer ${
      selectedCategory === category ? "text-[#E8BC55]" : ""
    } hover:text-[#E8BC55]`}
    onClick={onClick}
  >
    {category.charAt(0).toUpperCase() + category.slice(1)}

    {/* Framer Motion underline */}
    {selectedCategory === category && (
      <motion.div
        layoutId="underline"
        className="absolute bottom-0 left-0 right-0 h-1 bg-[#E8BC55]"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        exit={{ opacity: 0, scaleX: 0 }}
        transition={{ duration: 0.3 }}
      />
    )}
  </motion.div>
);

export default CategoryButton;
