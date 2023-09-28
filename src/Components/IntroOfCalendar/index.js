import "./index.css";

const IntroModal = ({ onClose }) => {
  return (
    <div className="intro-modal">
      <div className="intro-modal-content">
        <button
          className="closeIntromodal"
          id="closeModalButton"
          onClick={onClose}
        >
          &times;
        </button>
        <h1>Event Calendar App</h1>
        <p>
          <strong>Description:</strong> The Event Calendar App is a powerful
          tool to help you manage your events and appointments efficiently.
          Whether you're a busy professional or simply want to keep track of
          important dates, our calendar app has you covered.
        </p>
        <p>
          <strong>Features:</strong>
        </p>
        <ul>
          <li>Can add new events to the calendar</li>
          <li>Edit events directly on the calendar</li>
          <li>Delete events with ease</li>
          <li>
            No conflicts between events to ensure a smooth user experience.
          </li>
        </ul>
        <h3>How to Add an Event:</h3>
        <p>
          Adding an event to the calendar is simple. Click the "Add an Event"
          button.
        </p>
        <div className="image-outer">
          <img
            src={
              "https://res.cloudinary.com/drtn2t6gm/image/upload/v1695899618/image1_s4bxnt.png"
            }
            alt="image1"
            className="images-intro-modal"
          />
        </div>
        <p>
          Specify the event details such as event name, date (auto set), time
          (auto set), and background color, and save it to your calendar.
        </p>
        <div className="image-outer2">
          <img
            src={
              "https://res.cloudinary.com/drtn2t6gm/image/upload/v1695899668/image-2_pikyd6.png"
            }
            alt="image2"
            className="images-intro-modal2"
          />
        </div>
        <p>
          After filling up the required details, the event is ready to be
          displayed on the calendar. Click the 'Add Event' button.
        </p>
        <div className="image-outer3">
          <img
            src={
              " https://res.cloudinary.com/drtn2t6gm/image/upload/v1695899668/image-3_av6mpt.png"
            }
            alt="image3"
            className="images-intro-modal3"
          />
        </div>
        <p>
          After adding the event to the calendar, it will appear like this.👆
        </p>
        <h3>How to Edit an Event:</h3>
        <p>
          To edit an existing event, simply click or hover over the event in the
          calendar view. A transition will appear in front of it, providing both
          'delete' and 'edit' options.
        </p>

        <div className="image-outer4">
          <img
            src={
              "https://res.cloudinary.com/drtn2t6gm/image/upload/v1695899668/image-4_fikcsf.png"
            }
            alt="image4"
            className="images-intro-modal4"
          />
        </div>
        <p>Click the 'Delete' button to remove the event.</p>
        <div className="image-outer2">
          <img
            src={
              "https://res.cloudinary.com/drtn2t6gm/image/upload/v1695899669/image-5_crbyv1.png"
            }
            alt="image2"
            className="images-intro-modal2"
          />
        </div>

        <p>
          First, make the necessary changes to the event details as per your
          requirements. Then, click the 'Edit' button to apply your edits to the
          event.
        </p>
        <div className="image-outer2">
          <img
            src={
              "https://res.cloudinary.com/drtn2t6gm/image/upload/v1695899669/image-6_thvggq.png"
            }
            alt="image2"
            className="images-intro-modal2"
          />
        </div>

        <h3>Effortless Day Planning with Day Events Indicator</h3>
        <p>
          Our Event Calendar application features a dynamic "Day Events
          Indicator" that simplifies your daily planning. This indicator
          provides a clear visual cue, letting you know at a glance if there are
          any events remaining for a specific day.
        </p>
        <div className="image-outer2">
          <img
            src={
              "https://res.cloudinary.com/drtn2t6gm/image/upload/v1695899721/image-7_cjqyyo.png"
            }
            alt="image2"
            className="images-intro-modal2"
          />
        </div>

        <h3>Navbar</h3>
        <p>Helps to navigate between weeks with ease</p>
        <div className="image-outer5">
          <img
            src={
              " https://res.cloudinary.com/drtn2t6gm/image/upload/v1695899721/image-8_fugpwr.png"
            }
            alt="image8"
            className=""
          />
        </div>
        <p>Helps to navigate between months and years with ease</p>
        <div className="image-outer5">
          <img
            src={
              "https://res.cloudinary.com/drtn2t6gm/image/upload/v1695899721/image-9_pyuvv7.png"
            }
            alt="image8"
            className=""
          />
        </div>
        <div className="image-outer5">
          <img
            src={
              "https://res.cloudinary.com/drtn2t6gm/image/upload/v1695899721/image-10_t11x9y.png"
            }
            alt="image8"
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default IntroModal;
