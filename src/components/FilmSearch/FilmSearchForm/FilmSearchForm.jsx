import { useState, useEffect, useRef, useMemo } from 'react';
import { nanoid } from 'nanoid';

export const FilmSearchForm = ({ onSubmit }) => {
  const [state, setState] = useState({
    search: '',
  });

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...state });
    reset();
  };

  const reset = () => {
    setState({
      search: '',
    });
  };

  const searchId = useMemo(() => nanoid(), []);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor={searchId}>Enter search film</label>
        <input
          id={searchId}
          ref={inputRef}
          value={state.search}
          onChange={handleChange}
          required
          type="text"
          name="search"
          placeholder="Enter search film"
        />
      </div>
      <button type="submit">Search</button>
    </form>
  );
};
export default FilmSearchForm;
