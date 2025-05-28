import React from "react";

const Thank_you = () => {
  return (
    <>
      <style>
        {`
          body {
            margin: 0;
            font-family: Arial, sans-serif;
            background-color: #fa5872;
          }

          .thank-you-box {
            background: white;
            max-width: 600px;
            margin: 134px auto;
            padding: 78px;
            border-radius: 20px;
            text-align: center;
            box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
            position: relative;
            height: auto;
          }

          .thank-you-box::before {
            content: "";
            background-image: url('guiter.png');
            background-repeat: no-repeat;
            background-position: center;
            background-size: contain;
            opacity: 0.1;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 0;
          }

          .checkmark {
            font-size: 80px;
            color: green;
            z-index: 1;
          }

          h2 {
            margin: 18px 0 29px;
            font-size: 24px;
            z-index: 1;
          }

          p {
            font-size: 16px;
            margin: 12px 0;
            line-height: 1.5;
            z-index: 1;
          }

          .thank-you-box > * {
            position: relative;
            z-index: 1;
          }

          @media (max-width: 600px) {
            .thank-you-box {
              padding: 40px 20px;
              margin: 100px 20px;
              width: auto;
            }

            .checkmark {
              font-size: 60px;
            }

            h2 {
              font-size: 20px;
            }

            p {
              font-size: 14px;
              line-height: 1.4;
            }
          }
        `}
      </style>

      <div className="thank-you-box">
        <div className="checkmark">✔</div>
        <h2>Thank You For Registering!</h2>
        <p>
          You’re one step closer to the stage. Our team will <br />
          review your submission and reach out with further details.
        </p>
        <p>
          Follow us on Instagram&nbsp;
          <a href="https://instagram.com/chordifiers.studio" target="_blank" rel="noopener noreferrer">
            <strong>@chordifiers.studio</strong>
          </a>{' '}
          for event updates, line-ups, and behind-the-scenes drops!
        </p>

      </div>
    </>
  );
};

export default Thank_you;
