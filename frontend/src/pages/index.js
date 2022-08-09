import { useState } from "react";
import { toast } from "react-toastify";

import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
const Home = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    message: "",
  });

  const { fullname, email, message } = formData;

  // create function that deals with inputs
  const onInputChange = (e) => {
    setFormData((prevForm) => {
      return {
        ...prevForm,
        [e.target.name]: e.target.value,
      };
    });
  };

  // create function that submits get in touch data to api route
  const onSubmitGetInTouch = async (e) => {
    e.preventDefault();
    if (!fullname || !email || !message) {
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
      fullname: "",
      email: "",
      message: "",
    });
  };

  return (
    <div>
      <div className={`container ${styles.header}`}>
        <div className={styles.header_text}>
          <div className={styles.discovery}>
            <Image
              src="/assets/Discovery.svg"
              alt="Discovery Image"
              width={18}
              height={18}
            />
            <p>Discover a new resource for authentication codes here.</p>
          </div>
          <p className={styles.community}>
            Join our ever-growing <br />
            <span>Community</span>
          </p>
          <p className={styles.description}>
            At Auth-Wiki, guest users can view documentation, interact <br />
            and contribute. However, download of code is unavailable <br />
            while fully fledged users have full access, can view code,
            <br />
            interact, make contributions view example usage of
            <br />
            authentication code and download code samples.
          </p>
          <button className={styles.signup}>
            <Link href="/account/register">Sign up for Full Access</Link>
          </button>
        </div>
        <div className={styles.home_image}>
          <Image
            src="/assets/homeImage.svg"
            alt="Home Image"
            width={649}
            height={661.69}
          />
        </div>
      </div>

      <div className={styles.about_wrapper}>
        <div className={`container ${styles.about}`}>
          <div className={styles.about_image}>
            <Image
              src="/assets/aboutImage.svg"
              alt="about image"
              width={584}
              height={370}
            />
          </div>
          <div className={styles.about_text}>
            <Image
              src="/assets/aboutCircle.svg"
              alt="about circle"
              width={209}
              height={107}
            />
            <h2>ABOUT US</h2>

            <p>
              Auth-Wiki is an authentication platform that aims <br /> to
              provide users with different authentication code <br /> samples.
              You can make use of our library of codes <br /> whether you are
              creating an authentication system <br /> or simply browsing
              through. Users can download <br />
              our code samples or just viewing its usage for use <br /> in their
              own application.
            </p>
          </div>
        </div>
      </div>

      <div className={`container ${styles.features}`}>
        <h5 className={styles.feature_title}>Our Core Features</h5>
        {/* <p className={styles.features_subtitle}>
          Auth-Wiki allows users to make use of our library of codes whether you
          are creating an authentication system or simply browsing through.
          Users can download our code samples or just viewing its usage for use
          in their own application
        </p> */}
        <div className={styles.card_container}>
          <div className={styles.card}>
            <div className={styles.feature_icon}>
              <Image
                src="/assets/import.svg"
                alt="download icon"
                width={64}
                height={64}
              />
            </div>
            <p className={styles.feature_header}>Download</p>
            <p className={styles.feature_description}>
              We give you downloadable access to our library of authentication
              codes
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.feature_icon}>
              <Image
                src="/assets/user-edit.svg"
                alt="download icon"
                width={64}
                height={64}
              />
            </div>
            <p className={styles.feature_header}>Contribute</p>
            <p className={styles.feature_description}>
              Collaborate and contribute to our library of aunthentication codes
              with other developers
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.feature_icon}>
              <Image
                src="/assets/eye 2.svg"
                alt="download icon"
                width={64}
                height={64}
              />
            </div>
            <p className={styles.feature_header}>View Code Usage</p>
            <p className={styles.feature_description}>
              View code snippets, comment and engage with the coding community.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.contact}>
        <div className={styles.left}>
          <div className={styles.contact_image}>
            <Image
              src="/assets/contactImage.svg"
              alt="contact  image"
              width={397.96}
              height={461.01}
            />
          </div>
        </div>

        <div className={styles.right}>
          <h2>Get In Touch</h2>
          <p>
            For your enquiries and questions, make use of the form fields below
            to get in touch with us.
          </p>
          <form onSubmit={onSubmitGetInTouch}>
            <input
              type="text"
              placeholder="Full Name"
              value={fullname}
              onChange={onInputChange}
              name="fullname"
            />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={onInputChange}
              name="email"
            />
            <textarea
              placeholder="Message"
              rows={10}
              cols={52}
              name="message"
              value={message}
              onChange={onInputChange}
            ></textarea>
            <div className={styles.contact_button}>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
