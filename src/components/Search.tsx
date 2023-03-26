import { MagnifyingGlass } from "phosphor-react";

import { Box, Input, Button } from "@mui/material";
import { styled } from "@mui/system";

interface SearchProps {
  input?: string;
  term?: string;
  setInput?: (arg: string) => void;
  setTerm?: (arg: string) => void;
}

export const Search = ({ input, term, setInput, setTerm }: SearchProps) => {
  /* let Look = () => {
    setTerm(input);
  }; */

  return (
    <Box>
      <input
        type="text"
        className="input"
        /* placeholder="O que você deseja?" */
        value={input}
        /* onChange={(evt) => setInput(evt.target.value)} */
      />

      <button type="button" className="button" /* onClick={Look} */>
        {" "}
        <MagnifyingGlass size={32} />{" "}
      </button>
    </Box>
  );
};
