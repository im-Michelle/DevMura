import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";
import AttachFileIcon from '@mui/icons-material/AttachFile';
import styled from 'styled-components';
import {colors} from '../../../src/ui/colors';
import { createTheme, ThemeProvider  } from '@mui/material/styles';

const MessageInput = styled.input`
    background: ${colors.greenBackground};
    border: 0;
    color: white;
    flex-grow: 1;
    padding: 0 10px;
`;

const MessageInputRow = styled.div`
    background-color: ${colors.greenBackground};
    display: flex;
    justify-content: space-between;
`;

const theme = createTheme({
    palette: {
      neutral: {
        main: '#607D8B'
      },
      primary: {
        main: '#4BCFFA'
      }
    },
  });

const ChatMessageInput = () => {
    return(
        <ThemeProvider theme={theme}>
            <MessageInputRow>               
                <MessageInput/>
                <IconButton>
                    <SendIcon color="primary"/>
                </IconButton>
            </MessageInputRow>
        </ThemeProvider>
    )
};

export default ChatMessageInput;