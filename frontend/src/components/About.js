import React, { useContext, useEffect } from "react";
// import { Container, Row, Col, Card } from "react-bootstrap";

const About = () => {
  return (
    <div className="container my-5">
      <div className="text-center mb-5">
        <h1>About Us</h1>
        <p>
          Welcome to NoteHub, your ultimate destination for organizing,
          managing, and safeguarding your notes. Whether you're a student,
          professional, or creative individual, NoteHub is designed to cater to
          your note-taking needs with efficiency and simplicity. Our platform
          allows you to save notes with a title, description, related title, and
          tag, ensuring that your information is easily accessible and
          well-organized.
        </p>
      </div>

      <div className="mb-5">
        <h2>Our Mission</h2>
        <p>
          At NoteHub, our mission is to provide a seamless and user-friendly
          experience for managing your notes. We aim to empower you to stay
          organized, enhance productivity, and focus on what truly matters.
        </p>
      </div>

      <div className="mb-5">
        <h2>Our Vision</h2>
        <p>
          We envision a world where managing information is effortless and
          intuitive, enabling individuals to unlock their full potential through
          better organization and access to their notes.
        </p>
      </div>

      <div className="mb-5">
        <h2>Key Features</h2>
        <ul>
          <li>
            <strong>Create, Update, Delete, Read Notes: </strong> Effortlessly
            manage your notes with our intuitive interface. Create new notes,
            update existing ones, delete unnecessary information, and read your
            notes whenever you need them.
          </li>
          <li>
            <strong>Title and Description:</strong> Save your notes with clear
            titles and detailed descriptions for better context and
            understanding.
          </li>
          <li>
            <strong>Related Title:</strong> Link related notes for easy
            cross-referencing and better organization.
          </li>
          <li>
            <strong>Tagging System:</strong> Use tags to categorize and quickly
            find your notes based on specific keywords or topics.
          </li>
        </ul>
      </div>

      <div className="mb-5">
        <h2>Use Cases</h2>
        <ul>
          <li>
            <strong>Academic Note-Taking:</strong> Students can use NoteHub to
            organize lecture notes, research materials, and study guides.
            Tagging allows for easy retrieval of information based on subjects
            or topics.
          </li>
          <li>
            <strong>Project Management:</strong> Professionals can manage
            project notes, meeting minutes, and task lists, linking related
            notes to keep all relevant information connected and easily
            accessible.
          </li>
          <li>
            <strong>Creative Writing:</strong> Writers and authors can draft
            ideas, outline plots, and keep track of character development. Tags
            and related titles help in organizing different aspects of their
            stories.
          </li>
          <li>
            <strong>Personal Organization:</strong> Individuals can use NoteHub
            for personal note-taking, such as journaling, to-do lists, and goal
            setting, with the ability to update and refine their notes over
            time.
          </li>
          <li>
            <strong>Research and Development:</strong> Researchers can organize
            their findings, reference materials, and hypotheses. The tagging
            system aids in quickly locating specific information.
          </li>
          <li>
            <strong>Business Planning:</strong> Entrepreneurs can keep track of
            business ideas, strategies, and plans. Linking related notes helps
            in creating a cohesive business plan.
          </li>
          <li>
            <strong>Health and Wellness:</strong> Users can document their
            health journey, fitness routines, and dietary plans. Tags make it
            easy to find specific notes related to different aspects of their
            wellness journey.
          </li>
        </ul>
      </div>

      <div className="text-center">
        <h2>Contact Us</h2>
        <p>
          Have any questions or need support? Feel free to reach out to us at{" "}
          <a href="mailto:support@notehub.com">support@notehub.com</a>. We are
          here to help you make the most out of your note-taking experience.
        </p>
      </div>
    </div>
  );
};

export default About;
