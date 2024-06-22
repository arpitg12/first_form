# Event Registration Form

## Objective
This project implements a dynamic event registration form using React, featuring conditional fields and form validation.

## Features
- **Dynamic Fields**: Conditional display of the "Guest Name" field based on user selection.
- **Validation**: Ensures all required fields are filled out correctly before submission.
- **Summary Display**: Shows a summary of the entered data upon form submission.

## Form Fields
- **Name**: Required text input for participant's name.
- **Email**: Required email input for participant's email address.
- **Age**: Required number input for participant's age.
- **Are you attending with a guest?**: Radio buttons for Yes/No selection.
- **Guest Name**: Required text input, visible only if attending with a guest.

## Technologies Used
- React
- Custom Hooks (`useForm`, `useFormValidation`)
- HTML/CSS for styling

## Setup Instructions
1. Clone the repository.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.
4. Start the development server with `npm start`.
5. Open your browser and go to `http://localhost:3000` to view the form.

## Project Structure
