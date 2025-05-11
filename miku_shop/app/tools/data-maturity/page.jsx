"use client"; // Tells Next.js this component should run on the client side

import { useState, useEffect } from "react"; // React hooks for state and side-effects
import { useRouter } from 'next/navigation';

const DataMaturityPage = () => {

  // State to hold the survey data fetched from the server
  const [survey, setSurvey] = useState(null);

  // State to store the user's answers across sections
  const [answers, setAnswers] = useState({});

  // State to track which section is currently being shown
  const [currentSection, setCurrentSection] = useState(0);

  const [isSubmitted,setSubmitted] = useState(false);

  // Fetch the survey data from the API only once when the component mounts
  useEffect(() => {
    const fetchSurvey = async () => {
      try {
        const res = await fetch("/api/survey"); // Make request to the API route
        const data = await res.json(); // Parse JSON response
        setSurvey(data); // Store the survey data in state
      } catch (error) {
        console.error("Error fetching survey:", error); // Handle errors
      }
    };

    fetchSurvey(); // Call the function
  }, []); // Empty dependency array ensures this runs once on mount

  // When a user selects an answer, update the answers state
  const handleAnswerChange = (questionId, value) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  // Move to the next section if not at the end
  const nextSection = () => {
    if (currentSection < survey.sections.length - 1) {
      setCurrentSection(currentSection + 1);
    }
  };

  // Move to the previous section if not at the beginning
  const prevSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  //send a post request to the server once the survey is finished
  const handleSubmit = () => {
    console.log(answers)
    setSubmitted(true);
    return (<div>hellooo</div>)

    
  };

  // If survey data hasn’t loaded yet, show a loading message
  if (!survey) return <p>Loading...</p>;

  // Get the current section object from the survey data
  const section = survey.sections[currentSection];

  // decide whether we will render a next or submit button
  // we render a "submit button" if current section is the last section.
  let button;
  if (currentSection < survey.sections.length - 1) {
    button = (
      <button
        onClick={nextSection}
        className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700"
      >
        Next
      </button>
    );
  } else {
    button = (
      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Submit
      </button>
    );
  }


  // Render the page content
  return (
    
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{survey.title}</h1>

      <h2 className="text-xl font-semibold mb-4">{section.title}</h2>

      {/* Loop through the current section's questions */}
      {section.questions.map((q, questionIndex) => {
        const questionId = `s${currentSection}-q${questionIndex}`; // Unique ID per question

        return (
          <div key={questionId} className="mb-4">
            <p className="font-medium">{q.question}</p>

            {/* Render radio buttons for each option */}
            {q.options.map((option, optionIndex) => (
              <label key={optionIndex} className="block mt-1">
                <input
                  type="radio"
                  name={questionId}
                  value={option}
                  checked={answers[questionId] === option}
                  onChange={() => handleAnswerChange(questionId, option)}
                  className="mr-2"
                />
                {option}
              </label>
            ))}
          </div>
        );
      })}

      {/* Navigation buttons */}
      <div className="mt-6 flex justify-left gap-4">
        <button
          onClick={prevSection}
          disabled={currentSection === 0}
          className="bg-gray-300 px-4 py-2 rounded disabled:opacity-50"
        >
          Previous
        </button>

        {button}
      </div>
    </div>
  );
};

export default DataMaturityPage;
