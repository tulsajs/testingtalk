import React, { Component } from 'react';
import { FilterContainer, Button } from './Styled';

export default class TodoFilter extends Component {
  render() {
    const { onFilterUpdate, filter } = this.props;
    return (
      <FilterContainer>
        <Button active={filter === 'all'} onClick={() => onFilterUpdate('all')}>
          All
        </Button>
        <Button active={filter === 'active'} onClick={() => onFilterUpdate('active')}>
          Active
        </Button>
        <Button active={filter === 'done'} onClick={() => onFilterUpdate('done')}>
          Done
        </Button>
      </FilterContainer>
    );
  }
}
