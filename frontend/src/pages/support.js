import { useState } from "react";
import { toast } from "react-toastify";
import AppLayout from "../components/Layouts/AppLayout";

import styles from "../styles/Support.module.css";

const support = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
    phone: "",
  });

  const { firstname, lastname, email, phone, message } = formData;

  function onChange(e) {
    setFormData((prevForm) => {
      return {
        ...prevForm,
        [e.target.name]: e.target.value,
      };
    });
  }

  async function onSubmit(e) {
    e.preventDefault();
    if (!firstname || !lastname || !email || !message || !phone) {
      toast.error("Please you cannot send an empty message");
      return;
    }

    const res = await fetch("/api/getInTouch", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    if (res.ok) {
      toast.success(data.message);
    }

    if (!res.ok) {
      toast.error(data.message);
    }
    setFormData({
      firstname: "",
      lastname: "",
      phone: "",
      email: "",
      message: "",
    });
  }
  return (
    <AppLayout>
      <>
        <div className={styles.cnt}>
          <div className={styles.wrapper}>
            <h1>Get Support</h1>
            <p>
              We are here for you, let's help you solve any technical issues
            </p>
          </div>
        </div>
        <div className={`container ${styles.support_form}`}>
          <form onSubmit={onSubmit}>
            <div className={styles.frame1}>
              <div className={styles.fname}>
                <label>First Name</label>
                <input
                  type="text"
                  placeholder="Please enter your 
                name"
                  name="firstname"
                  value={firstname}
                  onChange={onChange}
                />
              </div>
              <div className={styles.lname}>
                <label>Last Name</label>
                <input
                  type="text"
                  placeholder="Please enter your last name"
                  name="lastname"
                  value={lastname}
                  onChange={onChange}
                />
              </div>
            </div>
            <div className={styles.frame2}>
              <div className={styles.em}>
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Please enter your email"
                  name="email"
                  value={email}
                  onChange={onChange}
                />
              </div>
              <div className={styles.phnum}>
                <label>Phone Number</label>
                <input
                  type="number"
                  placeholder="Please enter your number"
                  name="phone"
                  value={phone}
                  onChange={onChange}
                />
              </div>
            </div>
            <div className={styles.iptfield}>
              <p>How can we help you?</p>
              <textarea name="message" value={message} onChange={onChange} />
            </div>
            <div className={styles.btncontainer}>
              <button className={styles.btn} type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </>
    </AppLayout>
  );
};

export default support;
