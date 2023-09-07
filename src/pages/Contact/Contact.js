import React, { useState } from "react";
import axios from "axios";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import "./Contact.css";
import Modal from "./Modal";
import RubberBand from "react-reveal/RubberBand";

const Contact = () => {
  const [formData, setFromData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFromData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post(
        "https://mernportfoliobackend.onrender.com/send-email",
        formData
      );
      console.log("Response Status:", response.status);

      setTimeout(() => {
        setIsSuccessModalOpen(true);
        setModalMessage("Email sent successfully!");
        setIsSubmitting(false);
      }, 1000);
    } catch (error) {
      setIsErrorModalOpen(true);
      setModalMessage("Email sending failed.");
      setIsSubmitting(false);
      console.error(error);
    }
  };

  const closeModal = () => {
    setIsSuccessModalOpen(false);
    setIsErrorModalOpen(false);
    setModalMessage("");
  };

  return (
    <>
      <div className="contact " id="contact">
        <RubberBand>
          <div className="card card0 border-0">
            <div className="row">
              <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
                <div className="card1">
                  <div className="row border-line">
                    <img
                      src="https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg?w=2000"
                      alt="Contact"
                      className="image"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="card2 d-flex card border-0 px-4 py-5">
                  <div className="row">
                    <div className="row">
                      <h6>
                        Contact With
                        <BsLinkedin color="blue" size={30} className="ms-2" />
                        <BsGithub color="black" size={30} className="ms-2" />
                      </h6>
                    </div>

                    <div className="row px-3 mb-4">
                      <div className="line" />
                      <small className="or text-center">OR</small>
                      <div className="line" />
                    </div>
                    <form onSubmit={handleSubmit}>
                      <div className="row px-3">
                        <input
                          type="text"
                          name="name"
                          placeholder="Enter Your Name"
                          className="mb-3"
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="row px-3">
                        <input
                          type="email"
                          name="email"
                          placeholder="Enter Your Email"
                          className="mb-3"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="row px-3">
                        <textarea
                          type="text"
                          name="message"
                          placeholder="Enter Your message"
                          className="mb-3"
                          value={formData.message}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="row px-3">
                        <button
                          className="button"
                          type="submit"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Submitting..." : "Send Message"}
                        </button>
                      </div>
                    </form>
                    <Modal
                      isOpen={isSuccessModalOpen}
                      onClose={closeModal}
                      message={modalMessage}
                      isSuccess={true}
                    />
                    <Modal
                      isOpen={isErrorModalOpen}
                      onClose={closeModal}
                      message={modalMessage}
                      isSuccess={false}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RubberBand>
        {isSuccessModalOpen && (
          <div className="modal">
            <div className="modal-content">
              <p>{modalMessage}</p>
              <button onClick={closeModal}>Close</button>
            </div>
          </div>
        )}

        {isErrorModalOpen && (
          <div className="modal">
            <div className="modal-content">
              <p>{modalMessage}</p>
              <button onClick={closeModal}>Close</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Contact;
