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

## Custom Hooks
- **useForm**: Manages form state including field values and visibility of guest name.
- **useFormValidation**: Handles form validation logic based on defined rules.

## Additional Notes
- Ensure all dependencies are installed (`react`, `react-dom`, etc.) before running the application.
- The form UI is designed to provide a seamless user experience with clear feedback on errors.

Feel free to customize and expand upon this project as needed. Happy coding!

