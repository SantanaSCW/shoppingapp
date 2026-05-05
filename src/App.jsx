{filteredItems.length > 0 ? (
  filteredItems.map(item => (
    <div key={item.id}>{item.name}</div>
  ))
) : (
  <p>No products available.</p>
)}