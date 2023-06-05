import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./talentProfile.css";

const Profile = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL}/profile/profiles/${id}`)
      .then((res) => {
        setProfile(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="profile-container">
      {profile && (
        <>
          <div className="profile-picture">
            <img src={profile.picture} alt="Profile" className="profile-image" />
          </div>
          <div className="profile-info">
            <h2 className="profile-h2">{profile.name}</h2>
            <p className="profile-p">{profile.about}</p>

            <h3 className="profile-h3">Experience</h3>
            {profile.experience.length > 0 ? (
              <ul className="experience-list">
                {profile.experience.map((exp) => (
                  <li key={exp._id} className="experience-item">
                    <h4 className="profile-h4">{exp.title}</h4>
                    <p className="profile-p">{exp.company}</p>
                    <p className="profile-p">
                      {exp.startDate} - {exp.endDate}
                    </p>
                    <p className="profile-p">{exp.description}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="profile-p">No experience available</p>
            )}

            <h3 className="profile-h3">Education</h3>
            {profile.education.length > 0 ? (
              <ul className="education-list">
                {profile.education.map((edu) => (
                  <li key={edu._id} className="education-item">
                    <h4 className="profile-h4">{edu.degree}</h4>
                    <p className="profile-p">{edu.institution}</p>
                    <p className="profile-p">
                      {edu.startDate} - {edu.endDate}
                    </p>
                    <p className="profile-p">{edu.description}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="profile-p">No education available</p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
