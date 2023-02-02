import { useDispatch, useSelector } from 'react-redux';

import { setFilter } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';

import { Box } from '../Box';
import { Input, Label } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const changeFilter = evt => {
    console.log(evt.target.value);
    dispatch(setFilter(evt.target.value));
  };

  return (
    <Box mt={10}>
      <Label>
        Find contacts by name
        <Input type="text" value={filter} onChange={changeFilter} />
      </Label>
    </Box>
  );
};
