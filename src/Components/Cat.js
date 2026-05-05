const [selectedCategory, setSelectedCategory] = useState("All");

const itemsToDisplay = items.filter((item) => {
  if (selectedCategory === "All") return true;
  return item.category === selectedCategory;
});

// In your JSX:
<select onChange={(e) => setSelectedCategory(e.target.value)}>
  <option value="All">Filter by category</option>
  <option value="Produce">Produce</option>
  <option value="Dairy">Dairy</option>
  <option value="Dessert">Dessert</option>
</select>