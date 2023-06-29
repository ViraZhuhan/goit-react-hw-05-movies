import styled from "@emotion/styled";
// import { HiSearch } from "react-icons/hi";

// export const Wrapper = styled.form`
//   display: inline-flex;
//   align-items: center;
//   position: relative;
//   margin-bottom: 16px;
//   text-transform: uppercase;
// `;

// export const Input = styled.input`
//   padding: 8px 32px 8px 8px;
//   border-radius: 4px;
//   font: inherit;
// `;

// export const Icon = styled(HiSearch)`
//   width: 20px;
//   height: 20px;
//   position: absolute;
//   right: 6px;
// `;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;

export const SearchButton = styled.button`
  position: relative;
  display: inline-block;
  width: 48px;
  height: 48px;
  border: solid 0.5px;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  :hover {
    opacity: 1;
  }
  svg {
    position: absolute;
    top: 25%;
    right: 25%;
    width: 24px;
    height: 24px;
  }
`;

export const ButtonLabel = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;

export const Input = styled.input`
  display: inline-block;
  width: 50%;
  height: 44px;
  font: inherit;
  font-size: 20px;
  border: solid 0.5px;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;

  ::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
