import React from 'react';
import styled from 'react-emotion';

export const Ul = styled('ul')`
  padding: 0;
  margin: 0;
  width: 100%;
`;

export const Item = styled('li')`
  list-style: none;
  padding: 5px;
  margin: 0;
  display: flex;
  align-items: center;
  font-size: 22px;
  color: white;
  position: relative;
  border-bottom: 1px solid rgb(62, 49, 74);

  &:last-child {
    border: none;
  }

  svg {
    display: none;
    position: absolute;
    right: 5px;
  }

  &:hover {
    svg {
      display: block;
      cursor: pointer;
    }
  }
`;

export const Checkbox = styled('input')`
  zoom: 3;
`;

export const Label = styled('span')`
  margin-left: 5px;
`;

export const FilterContainer = styled('div')`
  background-color: rgb(62, 49, 74);
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  border-radius: 0 0 5px 5px;
  border: none;
  box-sizing: border-box;
  color: white;
  font-size: 30px;
`;

export const Button = styled('button')`
  padding: 10px 20px;
  width: 90px;
  margin: 0 20px;
  box-sizing: border-box;
  background-color: #ffffff;
  font-size: 15px;
  border: none;
  border-radius: 5%;
  &:hover {
    cursor: pointer;
  }

  ${props =>
    `background-color: ${props.active ? 'rgb(36,40,42)' : '#ffffff'};`} ${props =>
    `color: ${props.active ? '#ffffff' : 'black'};`};
`;

export const Input = styled('input')`
  background-color: rgb(62, 49, 74);
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  padding: 20px 10px;
  border-radius: 5px 5px 0 0;
  border: none;
  box-sizing: border-box;
  color: white;
  font-size: 30px;
`;

export const BaseContainer = styled('div')`
  background-color: rgb(36, 40, 42);
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 80vw;
  max-width: 600px;
  margin: 50px auto 0;
  border-radius: 5px;
`;

export const CloseIcon = props => (
  <svg
    style={{ width: 30, height: 30, marginLeft: 10 }}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      fill="tomato"
      d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm1.41-1.41A8 8 0 1 0 15.66 4.34 8 8 0 0 0 4.34 15.66zm9.9-8.49L11.41 10l2.83 2.83-1.41 1.41L10 11.41l-2.83 2.83-1.41-1.41L8.59 10 5.76 7.17l1.41-1.41L10 8.59l2.83-2.83 1.41 1.41z"
    />
  </svg>
);
