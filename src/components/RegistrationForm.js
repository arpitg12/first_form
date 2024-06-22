import React, { useState } from 'react';
import styled from 'styled-components';
import useForm from '../AppContainer/useForm';

const FormContainer = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
`;

const Title = styled.h2`
  text-align: center;
  color: #333;
`;

const FormField = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #666;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 0.875rem;
  margin-top: 0.5rem;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const Summary = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  background-color: #e9ecef;
  border-radius: 4px;
`;

function RegistrationForm() {
  const { values, errors, handleChange, handleSubmit, showSummary } = useForm();

  
  return (
    <FormContainer>
      <Title>Event Registration</Title>
      <form onSubmit={handleSubmit}>
        <FormField>
          <Label>Name</Label>
          <Input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
          />
          {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
        </FormField>
        <FormField>
          <Label>Email</Label>
          <Input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
        </FormField>
        <FormField>
          <Label>Age</Label>
          <Input
            type="number"
            name="age"
            value={values.age}
            onChange={handleChange}
          />
          {errors.age && <ErrorMessage>{errors.age}</ErrorMessage>}
        </FormField>
        <FormField style={{display:'flex'}}>
          <Label style={{width:'550px'}}>Are you attending with a guest?</Label>
          <Input
            style={{height:'15px'}}
            type="checkbox"
            name="isAttendingWithGuest"
            checked={values.isAttendingWithGuest}
            onChange={handleChange}
          />
        </FormField>
        {values.isAttendingWithGuest && (
          <FormField>
            <Label>Guest Name</Label>
            <Input
              type="text"
              name="guestName"
              value={values.guestName}
              onChange={handleChange}
            />
            {errors.guestName && <ErrorMessage>{errors.guestName}</ErrorMessage>}
          </FormField>
        )}
        <SubmitButton type="submit">Register</SubmitButton>
      </form>
      {showSummary && (
        <Summary>
          <h3>Summary</h3>
          <p><strong>Name:</strong> {values.name}</p>
          <p><strong>Email:</strong> {values.email}</p>
          <p><strong>Age:</strong> {values.age}</p>
          <p><strong>Attending with a guest:</strong> {values.isAttendingWithGuest ? 'Yes' : 'No'}</p>
          {values.isAttendingWithGuest && <p><strong>Guest Name:</strong> {values.guestName}</p>}
        </Summary>
      )}
    </FormContainer>
  );
}

export default RegistrationForm;
