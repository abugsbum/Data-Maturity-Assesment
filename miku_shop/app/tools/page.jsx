
'use client';

import { useRouter } from 'next/navigation';

const ToolsPage = () => {
  const router = useRouter();

  const navigateToSurvey = () => {
    // Navigate to the data maturity assessment page
    router.push('/tools/data-maturity');
  };

  return (
    <div>
      <h1>Tools</h1>
      <p>Start the Data Maturity Assessment:</p>
      <button
        onClick={navigateToSurvey}
        className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700"
      >
        Start Assessment
      </button>
    </div>
  );
};

export default ToolsPage;