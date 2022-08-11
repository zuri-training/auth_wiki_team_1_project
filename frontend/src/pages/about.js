import styles from "../styles/About.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import AppLayout from "../components/Layouts/AppLayout";

const About = () => {
  const router = useRouter();

  const TEAM_MEMBERS = [
    {
      profilePicture: "/assets/Image (1).svg",
      name: "Mfon Etuk",
      position: "Team Lead (Backend)",
    },
    {
      profilePicture: "/assets/Image (2).svg",
      name: "Olaiya Olayinka",
      position: "Asst. Team Lead (Product Design",
    },
    {
      profilePicture: "/assets/Image (3).svg",
      name: "Mudassir Adili Ahmad",
      position: "Group Lead - Backend",
    },
    {
      profilePicture: "/assets/Image (4).svg",
      name: "Nsikanabasi Ekong",
      position: "Group Lead - Product Design",
    },
    {
      profilePicture: "/assets/Image (5).svg",
      name: "Onyedika Azubuike-Ufelle",
      position: "Group Lead - Front-End",
    },
  ];

  return (
    <AppLayout>
      <div className="container">
        <div className={styles.wrapper}>
          <section className={styles.add}>
            <div className={styles.hero_content}>
              <h1> About Us</h1>
              <p>
                AuthWiki is an authentication platform that aims to provide
                users with different authentication code samples. You can make
                use of our library of codes whether you are creating an
                authentication system or simply browsing through. Users can
                download our code samples or just viewing its usage for use in
                their own application
              </p>
              <div className={styles.hero_image1}>
                <img src="/assets/aboutUs.svg" alt="about Image" />
              </div>
              <p className={styles.marge}>
                At AuthWiki, guest users can view documentations, interact and
                contribute, however, download of codes is unavailable while
                fully fledged users have full access, can view code, interact,
                make contributions, view example usage of authentication codes
                and download code samples.
              </p>
            </div>
            <div className={styles.hero_image}>
              <img src="/assets/aboutUs.svg" alt="about Image" />
            </div>
          </section>
        </div>

        <div className={styles.wrapper}>
          <section>
            <div className={styles.team_content}>
              <h1>
                Meet the minds behind <span>Auth</span>Wiki
              </h1>
              <p>
                Team Authwiki is comprised of 28 young and vibrant members
                ranging from developers to designers who activitely contributed
                to the development of this platform
              </p>
            </div>

            <div className={styles.team_img}>
              {TEAM_MEMBERS.map((member, index) => (
                <div key={index} className={styles.grid_card}>
                  <div className={styles.frame1}>
                    <img src={member.profilePicture} alt="profile picture" />
                  </div>
                  <p className={styles.a1}>{member.name}</p>
                  <p className={styles.b1}>{member.position}</p>
                </div>
              ))}

              <div className={styles.grid_card}>
                <div className={styles.frame6}>
                  <Link href="/aboutus">
                    <div className={styles.frame6a}>
                      <div className={styles.subframe}>
                        <img src="/assets/Group 658.svg" alt="see more" />
                        <p>Discover the rest of the team</p>
                      </div>
                    </div>
                  </Link>
                  <img
                    className={styles.see_more}
                    src="/assets/Image (6).svg"
                    alt="profile picture"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </AppLayout>
  );
};

export default About;
