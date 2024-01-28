import { useState, useEffect, useRef, useMemo } from 'react';
import { nanoid } from 'nanoid';
import { Button, FormSearch, Input } from './FilmSearchForm.styled';

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
    <FormSearch onSubmit={handleSubmit}>
      <div>
        <label htmlFor={searchId}></label>
        <Input
          id={searchId}
          ref={inputRef}
          value={state.search}
          onChange={handleChange}
          required
          type="text"
          name="search"
          placeholder="Enter movie title"
        />
      </div>
      <Button type="submit">Search</Button>
    </FormSearch>
  );
};
export default FilmSearchForm;
