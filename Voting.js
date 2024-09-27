import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const candidates = [
  { id: 1, name: 'Bharatiya Janata Party', symbol: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Bharatiya_Janata_Party_logo.svg'},
  { id: 2, name: 'All India Trinamool Congress', symbol: 'https://upload.wikimedia.org/wikipedia/commons/4/40/All_India_Trinamool_Congress_flag_%282%29.svg' },
  { id: 3, name: 'Bahujan Samaj Party', symbol: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Elephant_Bahujan_Samaj_Party.svg/1200px-Elephant_Bahujan_Samaj_Party.svg.png' },
  { id: 4, name: 'Communist Party of India', symbol: 'https://communistpartyofindia.com/wp-content/uploads/2022/03/CPI-logo-website-272-%C3%97-90px-final-1.png' },
  { id: 5, name: 'Communist Party of India (Marxist)', symbol: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Cpm_election_symbol.svg/1200px-Cpm_election_symbol.svg.png' },
  { id: 6, name: 'Indian National Congress', symbol: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/INC_Logo.png' },
];
{ <img 
  src={candidates.symbol} 
  alt={candidates.name} 
  className="candidate-symbol" 
/> }

const Voting = () => {
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [isVoted, setIsVoted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Prevent going back
    window.history.pushState(null, document.title, window.location.href);
    const handlePopState = () => {
      window.history.pushState(null, document.title, window.location.href);
    };
    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const handleVote = (candidateId) => {
    setSelectedCandidate(candidateId);
    setIsVoted(true);
  };

  const handleSubmit = () => {
    if (selectedCandidate) {
      // Here you would typically send the vote to a server
      console.log(`Submitting vote for candidate ${selectedCandidate}`);
      // After submission, you might want to show a confirmation or redirect
      alert('Your vote has been submitted!');
      // Optionally, redirect to a thank you page or disable further voting
      // navigate('/thank-you');
    } else {
      alert('Please select a candidate before submitting.');
    }
  };

  return (
    <div className="voting-container">
      <h1>Vote for Your Candidate</h1>
      <div className="candidates-list">
        {candidates.map((candidate) => (
          <div key={candidate.id} className="candidate-item">
            <img src={candidate.symbol} alt={candidate.name} className="candidate-symbol" />
            <span className="candidate-name">{candidate.name}</span>
            <button 
              onClick={() => handleVote(candidate.id)} 
              className={`vote-button ${selectedCandidate === candidate.id ? 'selected' : ''}`}
              disabled={isVoted && selectedCandidate !== candidate.id}
            >
              {selectedCandidate === candidate.id ? 'Selected' : 'Vote'}
            </button>
          </div>
        ))}
      </div>
      {isVoted && (
        <button onClick={handleSubmit} className="submit-button">
          Submit Vote
        </button>
      )}
    </div>
  );
};

export default Voting;
