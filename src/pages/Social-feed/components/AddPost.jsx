import styled from "styled-components";
import { colors } from "../../../ui/colors";
import * as React from "react";


const AddPostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.white};
  width: 90%;
  max-width: 700px;
  gap: 30px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
`;



const AddPost = () => {
  const [text, setText] = React.useState('');
  const addEmoji = (emoji) => () => setText(`${text}${emoji}`);
  return (
    <AddPostContainer> 
      
      
      
    </AddPostContainer>
  );
};

export default AddPost;
