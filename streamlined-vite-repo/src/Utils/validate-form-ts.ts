interface FormValues {
  [key: string]: any;
}

interface Errors {
  [key: string]: string | undefined;
}

export const validateForm = (values: FormValues): Errors => {
  const errors: Errors = {};
  
  // Name validation
  if (!values.name) {
    errors.name = 'Name is required';
  } else if (values.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters';
  }
  
  // Email validation
  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  
  // Message validation
  if (!values.message) {
    errors.message = 'Message is required';
  } else if (values.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters';
  }
  
  return errors;
};