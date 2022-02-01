import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

interface InputterProps {
  sendText: (text: string) => void;
}

const Inputter: React.FC<InputterProps> = ({ sendText }): JSX.Element => {
  const [text, setText] = useState<string>(
    'Write or paste text you want to analyse here'
  );
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <div className="inputter">
      <TextField
        id="outlined-multiline-static"
        error={!text}
        label="Text to analyse"
        multiline
        rows={18}
        value={text}
        onChange={handleChange}
        variant="outlined"
        helperText={!text ? 'You need to add a text to continue.' : ''}
      />
      <div className="actions">
        <Button
          name="submit"
          variant="contained"
          disabled={!text}
          onClick={() => {
            sendText(text);
            navigate('analyse');
          }}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Inputter;
