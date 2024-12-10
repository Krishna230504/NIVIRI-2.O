import React from 'react';
import './Feedback.css';

const Feedback = () => {
  const feedbacks = [
    {
      id: 1,
      name: 'Peter Breis',
      date: '3 days ago',
      rating: 4,
      comment:
        'Knowledgeable and easy to work with. They make Instagram easy for those of us who aren’t that savvy. Growth has been great and the followers have been quality. Couldn’t be happier.',
      profileImage: '👤', // Temporary placeholder for profile image
    },
    {
      id: 2,
      name: 'Peter Breis',
      date: '3 days ago',
      rating: 4,
      comment:
        'Knowledgeable and easy to work with. They make Instagram easy for those of us who aren’t that savvy. Growth has been great and the followers have been quality. Couldn’t be happier.',
      profileImage: '👤',
    },
    {
      id: 3,
      name: 'Peter Breis',
      date: '3 days ago',
      rating: 4,
      comment:
        'Knowledgeable and easy to work with. They make Instagram easy for those of us who aren’t that savvy. Growth has been great and the followers have been quality. Couldn’t be happier.',
      profileImage: '👤',
    },
  ];

  return (
    <div className="feedback-container">
      <h1 className="feedback-title">
        See what our happy customers have to say about us
      </h1>
      <div className="feedback-scroll">
        {feedbacks.map((feedback) => (
          <div key={feedback.id} className="feedback-card">
            <div className="feedback-header">
              <div className="profile-image">{feedback.profileImage}</div>
              <div className="feedback-info">
                <h3 className="feedback-name">{feedback.name}</h3>
                <p className="feedback-date">{feedback.date}</p>
              </div>
            </div>
            <div className="feedback-rating">
              {'★'.repeat(feedback.rating)}
              {'☆'.repeat(5 - feedback.rating)}
            </div>
            <p className="feedback-comment">{feedback.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedback;
