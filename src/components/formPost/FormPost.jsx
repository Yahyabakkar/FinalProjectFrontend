import React, { useEffect } from "react";
import "./FormPost.css";
import { useState } from "react";
import axios from "axios";
import { useAuthHeader } from "react-auth-kit";

const FormPost = ({ data }) => {
  console.log(data);

  const [formData, setFormData] = useState({
    name: "",
    about: "",
    experience: [],
    education: [],
    picture: "",
    userId: "",
  });
  const [image, setImage] = useState();
  const headers = useAuthHeader();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleExperienceChange = (index, e) => {
    const updatedExperience = [...formData.experience];
    updatedExperience[index][e.target.name] = e.target.value;
    setFormData({ ...formData, experience: updatedExperience });
  };

  const handleEducationChange = (index, e) => {
    const updatedEducation = [...formData.education];
    updatedEducation[index][e.target.name] = e.target.value;
    setFormData({ ...formData, education: updatedEducation });
  };

  const handleAddExperience = () => {
    setFormData({
      ...formData,
      experience: [
        ...formData.experience,
        { title: "", company: "", startDate: "", endDate: "", description: "" },
      ],
    });
  };

  const handleAddEducation = () => {
    setFormData({
      ...formData,
      education: [
        ...formData.education,
        {
          institution: "",
          degree: "",
          startDate: "",
          endDate: "",
          description: "",
        },
      ],
    });
  };
  console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataImage = new FormData();
    formDataImage.append("image", image);
    fetch(
      "https://api.imgbb.com/1/upload?key=fb1fc67a8176a3591988df7e83203b40",
      {
        method: "POST",
        body: formDataImage,
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        console.log(response)
        const url = response.data.data.url;
        const data = { ...formData, picture: url };
        axios
          .post(`${process.env.REACT_APP_URL}/profile/profiles`, data, {
            headers: { Authorization: headers() },
          })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    if (data) {
      setFormData(data);
    }
  }, [data]);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="about">About:</label>
        <textarea
          id="about"
          name="about"
          value={formData.about}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <div>
        <h3>Experience</h3>
        {formData.experience.map((exp, index) => (
          <div key={index}>
            <label htmlFor={`title`}>Title:</label>
            <input
              type="text"
              id={`title`}
              value={exp.title}
              name={`title`}
              onChange={(e) => handleExperienceChange(index, e)}
              required
            />

            <label htmlFor={`description`}>Description:</label>
            <textarea
              id={`description`}
              value={exp.description}
              name={`description`}
              onChange={(e) => handleExperienceChange(index, e)}
              required
            ></textarea>

            <label htmlFor={`company`}>Company:</label>
            <input
              type="text"
              id={`company`}
              value={exp.company}
              name={`company`}
              onChange={(e) => handleExperienceChange(index, e)}
              required
            />

            <label htmlFor={`startDate`}>Start Date:</label>
            <input
              type="date"
              id={`startDate`}
              value={exp.startDate.split("T")[0]}
              name={`startDate`}
              onChange={(e) => handleExperienceChange(index, e)}
              required
            />

            <label htmlFor={`endDate`}>End Date:</label>
            <input
              type="date"
              id={`endDate`}
              value={exp.endDate.split("T")[0]}
              name={`endDate`}
              onChange={(e) => handleExperienceChange(index, e)}
              required
            />
          </div>
        ))}

        <button type="button" onClick={handleAddExperience}>
          Add Experience
        </button>
      </div>
      <div>
        <h3>Education</h3>
        {formData.education.map((edu, index) => (
          <div key={index}>
            <label htmlFor={`institution`}>Institution:</label>
            <input
              type="text"
              id={`institution`}
              value={edu.institution}
              name={`institution`}
              onChange={(e) => handleEducationChange(index, e)}
              required
            />

            <label htmlFor={`degree`}>Degree:</label>
            <input
              type="text"
              id={`degree`}
              name={`degree`}
              value={edu.degree}
              onChange={(e) => handleEducationChange(index, e)}
              required
            />

            <label htmlFor={`description`}>Description:</label>
            <textarea
              id={`description`}
              name={`description`}
              value={edu.description}
              onChange={(e) => handleEducationChange(index, e)}
              required
            ></textarea>

            <label htmlFor={`startDate`}>Start Date:</label>
            <input
              type="date"
              id={`startDate`}
              name={`startDate`}
              value={edu.startDate}
              onChange={(e) => handleEducationChange(index, e)}
              required
            />

            <label htmlFor={`endDate`}>End Date:</label>
            <input
              type="date"
              id={`endDate`}
              name={`endDate`}
              value={edu.endDate}
              onChange={(e) => handleEducationChange(index, e)}
              required
            />
          </div>
        ))}

        <button type="button" onClick={handleAddEducation}>
          Add Education
        </button>
      </div>
      <div>
        <label htmlFor="picture">Picture:</label>
        <input
          type="file"
          id="picture"
          name="picture"
          onChange={(e) => setImage(e.target.files[0])}
        />
      </div>
      <div></div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormPost;
