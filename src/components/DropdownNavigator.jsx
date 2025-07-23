import { useNavigate } from 'react-router-dom';

function DropdownNavigator() {
  const navigate = useNavigate();

  const handleChange = (e) => {
    navigate(e.target.value);
  };

  return (
    <select onChange={handleChange} defaultValue="/">
      <option value="/">Home</option>
      <option value="/about">About</option>
    </select>
  );
}

export default DropdownNavigator;