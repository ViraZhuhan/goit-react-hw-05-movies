import { useState } from 'react';
import { toast } from 'react-toastify';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { SearchForm, SearchButton, Input } from './MovieSearchForm.styled';
import PropTypes from 'prop-types';

const MovieSearchForm = ({ setSearchParams }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSumbit = e => {
    e.preventDefault();

    if (searchQuery.trim() === '') {
      return toast.error('Please enter the query!');
    }

    setSearchParams({ searchQuery });
    setSearchQuery('');
  };

  // const UpdateSearchQueryString = e => {
  //   setSearchQuery(e.target.value);
  //   if (e.target.value === '') {
  //     return setSearchParams({});
  //   }
  //   setSearchParams({ searchQuery: e.target.value });
  // };

  const handleChange = e => {
    setSearchQuery(e.target.value);
  };

  return (
    <SearchForm onSubmit={handleSumbit}>
      <Input
        type="text"
        autoComplete="off"
        placeholder="Search movies"
        name="searchQuery"
        value={searchQuery}
        onChange={handleChange}
      />
      <SearchButton type="submit">
        <MagnifyingGlassIcon />
      </SearchButton>
    </SearchForm>
  );
};

export default MovieSearchForm;


MovieSearchForm.propTypes = {
  setSearchParams: PropTypes.func
}