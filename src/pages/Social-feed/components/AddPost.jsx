import styled from "styled-components";
import { colors } from "../../../ui/colors";
import * as React from "react";
import TextField from '@mui/material/TextField';
import ImageIcon from '@mui/icons-material/Image';
import { createPost } from "../../../service/Posts/createPost";


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

const ButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  gap: 20px;
  @media (max-width: 600px) {
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`;

const CustomTextField = styled(TextField)`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: ${colors.primaryText};
`;

const CustomButton = styled.button`
  background-color: ${colors.contrast};
  color: ${colors.primaryText};
  border-radius: 12px;
  border: none;
  padding: 7px 15px;
  font-size: 1.0rem;
  align-self: flex-end;
  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  }
  &:disabled {
    background-color: ${colors.secondaryText};
    color: ${colors.primaryText};
    cursor: not-allowed;
  }
`;
const CustonButtonImg = styled.label`
  background-color: ${colors.contrast};
  color: ${colors.primaryText};
  border-radius: 12px;
  border: none;
  padding: 7px 11px;
  font-size: 1.0rem;
  align-self: flex-end; 
  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  }
  &:active {
    scale: 0.9;
  }
  `;
  const CustomInputLink = styled(TextField)`
    flex-direction: column;
    color: ${colors.primaryText};
  `;

const ContainerImg = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;


const AddPost = ({ aut , id}) => {
  //console.log("aut", aut)
  const [activeButton, setActiveButton] = React.useState(true);
  const [showButtons, setShowButtons] = React.useState(false);
  const [showImgInput, setShowImgInput] = React.useState(false);

  const [imgSource, setImgSource] = React.useState("");
  const [postText, setPostText] = React.useState("");

  const [post, setPost] = React.useState({});

  const handleButton = (e) => {
    if (e.target.value.length === 0) {
      setActiveButton(true);
    } else if (e.target.value.length > 250) {
      setActiveButton(true);
    } else {
      setActiveButton(false);
    }
  };

  const handlePostTextChange = (e) => {
    setPostText(e.target.value);
  };
  const handleImgSourceChange = (e) => {
    setImgSource(e.target.value);
  };

  const sendPost = async () => {
    await createPost(postText, 0 , imgSource , aut, id);
    setPostText("");
    setShowButtons(false);
    setShowImgInput(false);
  };

  return (
    <AddPostContainer>  
        <CustomTextField
          id="addPost"
          label="Add a new post"
          variant="outlined"
          multiline
          onFocus={() => setShowButtons(true)}
          onChange={handleButton}
          onChangeCapture={handlePostTextChange}
          value={postText}
          max={250}
          sx={{ 
            width: '100%', 
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: `${colors.vibrantBlue}`,
              },
              '&:hover fieldset': {
                borderColor: `${colors.navy}`,
              },
              '&.Mui-focused fieldset': {
                borderColor: `${colors.vibrantBlue}`,
              },
            },
            '& .MuiInputLabel-root': {
              color: `${colors.primaryText}`,
            },
            '& .MuiOutlinedInput-input': {
              color: `${colors.primaryText}`,
            },
            '& .MuiFormHelperText-root': {
              color: `${colors.lightBlue}`,
            },
          }}
          maxRows={10}
          helperText="max 250 characters"
        />
        {showButtons ? (

          <ButtonsContainer>
          <ContainerImg>
            <CustonButtonImg onClick={ (e) => setShowImgInput(!showImgInput) } > <ImageIcon/> </CustonButtonImg>
            {showImgInput ?
              <CustomInputLink 
              type="text" 
              label="Add a link to an image"
              variant="standard"
              value={imgSource}
              onChange={handleImgSourceChange}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: `${colors.new}`,
                  },
                  '&:hover fieldset': {
                    borderColor: `${colors.navy}`,
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: `${colors.vibrantBlue}`,
                  },
                },
                '& .MuiInputLabel-root': {
                  color: `${colors.primaryText}`,
                },
              '& .MuiOutlinedInput-input': {
                color: `${colors.primaryText}`,
              },
              '& .MuiFormHelperText-root': {
                color: `${colors.lightBlue}`,
              },
            }}
            />
            : <></>
          }
          </ContainerImg>
          <CustomButton disabled={activeButton} onClick={sendPost} >Add Post</CustomButton>
        </ButtonsContainer>
        ) : (
          <></>
        )
        }

    </AddPostContainer>
  );
};

export default AddPost;
