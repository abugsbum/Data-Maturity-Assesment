export async function GET() {
  const surveyData = {
    title: "Data Maturity Assessment",
    sections: [
      {
        title: "Section 1: Pre-Survey Demographic Questions",
        questions: [
          {
            question: "Does your organization have a formal data governance framework?",
            options: [
              "No formal governance",
              "Some policies exist, but they are not enforced",
              "A governance team exists, but implementation is inconsistent",
              "A well-defined and enforced governance framework is in place"
            ]
          },
          {
            question: "How is patient identity data managed across different systems?",
            options: [
              "Manual entry, prone to errors and inconsistencies",
              "Some automated validation, but duplicate records still occur",
              "Integrated systems with automated checks to prevent errors",
              "Master Data Management (MDM) solution in place with near-zero errors"
            ]
          }
        ]
      },
      {
        title: "Section 2: Data",
        questions: [
          {
            question: "Does your organization have a formal data governance framework?",
            options: [
              "No formal governance",
              "Some policies exist, but they are not enforced",
              "A governance team exists, but implementation is inconsistent",
              "A well-defined and enforced governance framework is in place"
            ]
          },
          {
            question: "How is patient identity data managed across different systems?",
            options: [
              "Manual entry, prone to errors and inconsistencies",
              "Some automated validation, but duplicate records still occur",
              "Integrated systems with automated checks to prevent errors",
              "Master Data Management (MDM) solution in place with near-zero errors"
            ]
          }
        ]
      }
    ]
  };

  return new Response(JSON.stringify(surveyData), {
    headers: { 'Content-Type': 'application/json' }
  });
}
