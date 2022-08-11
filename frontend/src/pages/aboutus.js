import styles from "../styles/Aboutus.module.css";
import Link from "next/link";
import AppLayout from "../components/Layouts/AppLayout";

const AboutUs = () => {
  const TEAM_MEMBERS = [
    {
      profilePicture: "/assets/Image (6).svg",
      name: "Keme-ebi Remember Bolou",
      position: "Fullstack",
    },
    {
      profilePicture: "/assets/Image (7).svg",
      name: "Timothy Kwesi",
      position: "Fullstack",
    },
    {
      profilePicture: "/assets/Image (8).svg",
      name: "Chioma Nwocha",
      position: "Fullstack",
    },
    {
      profilePicture: "/assets/Image (9).svg",
      name: "Latunde Oluwanifemi",
      position: "Fullstack",
    },
    {
      profilePicture: "/assets/Image (10).svg",
      name: "Oyetimehin Ayomide",
      position: "Backend",
    },
    {
      profilePicture: "/assets/Image (11).svg",
      name: "Kojo Kwofie",
      position: "Backend",
    },
    {
      profilePicture: "/assets/Image (12).svg",
      name: "Ngozi Okwuosa",
      position: "Backend",
    },
    {
      profilePicture: "/assets/Image (13).svg",
      name: "Jonathan Ibezim-Okoro",
      position: "Backend",
    },
    {
      profilePicture: "/assets/Image (14).svg",
      name: "Badrudeen Islamiyat",
      position: "Product Design",
    },
    {
      profilePicture: "/assets/Image (15).svg",
      name: "Olotu Jeremiah",
      position: "Product Design",
    },
    {
      profilePicture: "/assets/Image (16).svg",
      name: "Olivia Udoh",
      position: "Product Design",
    },
    {
      profilePicture: "/assets/Image (17).svg",
      name: "Favour Jubilee",
      position: "Product Design",
    },
    {
      profilePicture: "/assets/Image (18).svg",
      name: "Chiamaka Ibiam",
      position: "Product Design",
    },
    {
      profilePicture: "/assets/Image (19).svg",
      name: "Caleb Stanley",
      position: "Product Design",
    },
    {
      profilePicture: "/assets/Image (20).svg",
      name: "Mark Benard",
      position: "Product Design",
    },
    {
      profilePicture: "/assets/Image (21).svg",
      name: "Toyeeb Amusan",
      position: "Product Design",
    },
    {
      profilePicture: "/assets/Image (22).svg",
      name: "Uche Alexander Aniegboka",
      position: "Frontend",
    },
    {
      profilePicture: "/assets/Image (23).svg",
      name: "Edward Ogunwole",
      position: "Frontend",
    },
  ];
  return (
    <AppLayout>
      <div className="container">
        <div className={styles.wrapper}>
          <section>
            <div className={styles.team_img}>
              {TEAM_MEMBERS.map((member, index) => (
                <div className={styles.grid_card}>
                  <div key={index} className={styles.frame1}>
                    <img src={member.profilePicture} alt="profile picture" />
                  </div>
                  <p className={styles.a1}>{member.name}</p>
                  <p className={styles.b1}>{member.position}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </AppLayout>
  );
};

export default AboutUs;
