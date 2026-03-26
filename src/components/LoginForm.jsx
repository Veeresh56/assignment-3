import { useState } from "react";
import styles from "../styles/LoginForm.module.css";

function LoginForm() {
  const [formData, setFormData] = useState({ username: "", password: ""});

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevData) => ({...prevData, [name]: value}));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedData(formData);
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.formCard}>
        <h1 className={styles.title}>Login Form</h1>
        <p className={styles.subtitle}>Welcome to the Login Form!</p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="username" className={styles.label}>
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="password" className={styles.label}>
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>

          <button type="submit" className={styles.button}>
            Submit
          </button>
        </form>

        {submittedData && (
          <div className={styles.resultBox}>
            <h2 className={styles.resultTitle}>Submitted Data</h2>
            <p>
              <strong>Username:</strong> {submittedData.username}
            </p>
            <p>
              <strong>Password:</strong> {submittedData.password}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default LoginForm;