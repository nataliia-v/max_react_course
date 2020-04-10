import React from 'react';

import classes from './Person.css';

const person = ({ click, name, age, children, changed }) => {
  return (
    <div className={classes.Person}>
      {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
      <p onClick={click}>
        I am {name} and I am {age} years old!
      </p>
      <p>{children}</p>
      <input type="text" onChange={changed} value={name} />
    </div>
  );
};

export default person;
