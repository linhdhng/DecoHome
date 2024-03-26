


function AddToList() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    material: '',
    category: '',
    price:''
  });

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const { title, description, material, category, price } = formData

    const handleAddToList = async () => {
      try {
        const response = await axios.post('http://localhost:5000/api/products/:userId/add', formData);
        console.log('Item added:', response.data);
        // Optionally, you can update your UI to reflect the addition of the item to the list
      } catch (error) {
        console.error('Error adding item:', error);
        // Optionally, you can display an error message to the user
      }
    };
  
    return (
      <div>
        <input type="text" placeholder="Name" value={title} onChange={(e) => onChange(e)} />
        <input type="text" placeholder="Description" value={description} onChange={(e) => onChange(e)} />
        <input type="text" placeholder="Category" value={category} onChange={(e) => onChange(e)} />
        <button onClick={handleAddToList}>Add to List</button>
      </div>
    );
  };




export default AddToList
