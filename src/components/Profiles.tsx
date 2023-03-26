import { useState, useEffect } from "react";
import { Box, Input, Button } from "@mui/material";
import { styled } from "@mui/system";
import { Search } from "./Search";

const MainContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "var(--white)",
  width: "70rem",
  height: "40rem",
  display: "grid",
  gridColumnStart: "1",
  gridColumnEnd: "3",
  gridRowStart: "2",
  gridRowEnd: "3",
  alignItems: "center",
  justifyContent: "space-between",
  boxShadow: "none",
  padding: "5rem 6rem 7rem 6rem",
}));

const SearchBox = styled(Box)(({ theme }) => ({
  display: "grid",
  backgroundColor: "var(--white)",
  gridRowStart: "1",
  gridRowEnd: "2",
  gridColumnStart: "1",
  gridColumnEnd: "2",
}));

const ProfileStats = styled(Box)(({ theme }) => ({
  display: "grid",
  backgroundColor: "var(--purple)",
  gridRowStart: "1",
  gridRowEnd: "3",
  gridColumnStart: "3",
  gridColumnEnd: "4",
}));

const ProfileInfo = styled(Box)(({ theme }) => ({
  display: "grid",
  backgroundColor: "var(--gray-800)",
  gridRowStart: "2",
  gridRowEnd: "5",
  gridColumnStart: "1",
  gridColumnEnd: "2",
}));

const ProfileRepos = styled(Box)(({ theme }) => ({
  display: "grid",
  backgroundColor: "var(--gray-600)",
  gridRowStart: "4",
  gridRowEnd: "5",
  gridColumnStart: "3",
  gridColumnEnd: "4",
}));

export default function Profiles() {
  const [item, setItem] = useState<string>("");
  const [input, setInput] = useState<string>("");
  const [term, setTerm] = useState<string>("");

  /* useEffect(() => {
    const fetchData = async () => {
      const response = await api.get(term);
      setItem(response?.data.hits);
    };
    fetchData();
  }, [term]); */

  return (
    <MainContainer>
      <SearchBox>
        <Search
          input={input}
          setInput={setInput}
          term={term}
          setTerm={setTerm}
        />
      </SearchBox>
      <ProfileInfo>
        <h3>Profile Info</h3>
      </ProfileInfo>
      <ProfileStats>
        <h3>Profile Stats</h3>
      </ProfileStats>
      <ProfileRepos>
        <h3>Profile Repos</h3>
      </ProfileRepos>
    </MainContainer>
  );
}
