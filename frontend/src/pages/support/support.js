import styles from "../../styles/Support.module.css";


const support = () => {
  return (
    <>
  <div className={styles.cnt}>
    <div className={styles.wrapper}>
      <h1>Get Support</h1>
      <p>We are here for you, let's help you solve any technical issues</p>
    </div>
  </div>
  <div>
    <form>
      <div className={styles.frame1}>
        <div className={styles.fname}>
          <label>First Name</label>
          <input type="text" placeholder="Please enter your name" />
        </div>
        <div className={styles.lname}>
          <label>Last Name</label>
          <input type="text" placeholder="Please enter your last name" />
        </div>
      </div>
      <div className={styles.frame2}>
        <div className={styles.em}>
          <label>Email</label>
          <input type="email" placeholder="Please enter your email" />
        </div>
        <div className={styles.phnum}>
          <label>Phone Number</label>
          <input type="text" placeholder="Please enter your number" />
        </div>
      </div>
      <div className={styles.iptfield}>
        <p>How can we help you?</p>
        <textarea defaultValue={""} />
      </div>
      <div className={styles.btncontainer}>
        <button className={styles.btn}>Submit</button>
      </div>
    </form>
  </div>
</>
  )
}

export default support