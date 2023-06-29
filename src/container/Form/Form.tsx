import React, { useState } from "react";
import "./Form.scss"
interface FormValues {
  name: string;
  lastName: string;
  email: string;
  text: string;
}

const initialFormValues: FormValues = {
  name: "",
  lastName: "",
  email: "",
  text: "",
};

const Form = () => {
  const [formValues, setFormValues] = useState<FormValues>(initialFormValues);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState<FormValues>(initialFormValues);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
    setFormErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let hasErrors = false;
    const newErrors = { ...initialFormValues };
    for (const key in formValues) {
      if (!formValues[key as keyof FormValues]) {
        hasErrors = true;
        newErrors[key as keyof FormValues] = "This field is required";
      }
    }
    if (hasErrors) {
      setFormErrors(newErrors);
      return;
    }
    setFormSubmitted(true);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formValues.name}
            onChange={handleInputChange}
          />
          {formErrors.name && <div>{formErrors.name}</div>}
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formValues.lastName}
            onChange={handleInputChange}
          />
          {formErrors.lastName && <div>{formErrors.lastName}</div>}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formValues.email}
            onChange={handleInputChange}
          />
          {formErrors.email && <div>{formErrors.email}</div>}
        </div>
        <div>
          <label htmlFor="text">Text:</label>
          <textarea
            id="text"
            name="text"
            value={formValues.text}
            onChange={handleInputChange}
          />
          {formErrors.text && <div>{formErrors.text}</div>}
        </div>
        <button type="submit">Submit</button>
      </form>
      {formSubmitted && (
        <div className="modal-overlay">
          <div className="modal">

          <h2 className="form__h2">Form submitted successfully!</h2>
          <ul>
            {Object.entries(formValues).map(([key, value]) => (
              <li key={key}>
               <p> {key}: {value}</p>
              </li>
            ))}
          </ul>
        <button onClick={()=>setFormSubmitted(false)}>X</button>
            </div>
        </div>
      )}
    </>
  );
};

export default Form;
