import { Routes, Route } from 'react-router-dom';
import Oneshow from './Oneshow';
// import SubmissionSuccess from './SubmissionSuccess'; // example

function App() {
  return (
    <Routes>
      <Route path="/" element={<Oneshow />} />
      {/* <Route path="/submission-successfully" element={<SubmissionSuccess />} /> */}
    </Routes>
  );
}

export default App;
