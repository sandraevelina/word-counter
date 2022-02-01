import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import WarningIcon from '@material-ui/icons/Warning';
import analyzeText from '../lib/analysis';

interface AnalyserProps {
  text: string;
}

const Analyser: React.FC<AnalyserProps> = ({ text }): JSX.Element => {
  const [wordAmount, setWordAmount] = useState<number>(0);
  const [letterAmount, setLetterAmount] = useState<number>(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const { numWords, numLetters } = await analyzeText(text);
      setWordAmount(numWords);
      setLetterAmount(numLetters);
    };

    fetchData()
      .then(() => setLoading(false))
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <div className="analyser">
      {!loading &&
        !error &&
        `Your text consists of ${wordAmount} words (${letterAmount} letters)`}
      {loading && (
        <div className="loading-container">
          <CircularProgress />
        </div>
      )}
      {error && (
        <span>
          <WarningIcon /> Something went wrong during analysis
        </span>
      )}
      <div className="actions">
        {!loading && !error && (
          <Button
            variant="contained"
            onClick={() => {
              navigate('/');
            }}
          >
            Analyse new text
          </Button>
        )}
      </div>
    </div>
  );
};

export default Analyser;
