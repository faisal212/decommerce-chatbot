import { useEffect, useRef, useState } from 'react';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import Box from '@mui/material/Box';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import FilterOutlinedIcon from '@mui/icons-material/FilterOutlined';
import SendIcon from '@mui/icons-material/Send';
import Grid from '@mui/material/Grid';
import Grow from '@mui/material/Grow';
import AiTopic from '../AiTopic';
import SyncOutlinedIcon from '@mui/icons-material/SyncOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

// import ReactHtmlParser from 'react-html-parser';
import Collapse from '@mui/material/Collapse';
import AiAgentSingleImageDragAndDrop from '../AiAgentSinglFileDragAndDrop';
import Stack from '@mui/material/Stack';
import Fade from '@mui/material/Fade';
import CloseIcon from '@mui/icons-material/Close';
import AiAgentSinglFileDragAndDrop from '../AiAgentSinglFileDragAndDrop';
import { Html } from '@mui/icons-material';
interface Props {
  type: 'FLOATING' | 'FULL';
}

const MainAiChatBox = (props: Props) => {
  const [currentState, setCurrentState] = useState<'ACTIVE' | 'NONACTIVE'>(
    'ACTIVE'
  );
  const [myMessages, setMyMessages] = useState<string[]>(['I want to']);
  const [text, setText] = useState<string>('');
  const divRef = useRef<HTMLDivElement>(null);
  const divRef2 = useRef<HTMLDivElement>(null);
  const [image, setImage] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [isUploadingMode, setIsUploadingMode] = useState<
    'FILE' | 'IMAGE' | null
  >(null);
  useEffect(() => {
    if (myMessages) {
      if (divRef.current) {
        divRef.current.scrollTop = divRef.current.scrollHeight;
      }
    }
  }, [myMessages]);
  const fileToImgSrc = (file: File): void => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result as string);
    };
  };
  return <>
    <div
      style={{
        alignSelf: 'stretch',
        flex: '1',
        borderRadius: '6px',
        backgroundColor: '#fff',
        overflow: 'hidden',
        display: currentState === 'NONACTIVE' ? 'flex' : 'none',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10px 16px',
        textAlign: 'center',
        fontSize: '16px',
      }}
    >
      <div
        style={{
          alignSelf: 'stretch',
          flex: '1',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '80px',
        }}
      >
        <div
          style={{
            alignSelf: 'stretch',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            gap: '12px',
          }}
        >
          <img
            style={{
              width: '70px',
              position: 'relative',
              height: '70px',
              objectFit: 'cover',
            }}
            alt=""
            src="/images/ai-agents/ai.png"
          />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'flex-start',
              gap: '6px',
            }}
          >
            <div
              style={{
                position: 'relative',
                lineHeight: '24px',
                fontWeight: '500',
              }}
            >
              Hi! What do you want to do today?
            </div>
            <div
              style={{
                position: 'relative',
                fontSize: '12px',
                lineHeight: '16px',
                fontWeight: '300',
              }}
            >
              Select one of my suggestions below or start a typing to begin a
              new chat
            </div>
          </div>
        </div>
        <Grid container spacing={1} margin={'0 auto'} maxWidth={'750px'}>
          <Grid item xs={4}>
            <AiTopic
              type="Community"
              title="Create a room"
              descriptionText="New room based on your users interests (SEO optimized)"
              Icon={ThumbUpOutlinedIcon}
            />
          </Grid>
          <Grid item xs={4}>
            <AiTopic
              type="Community"
              title="Create a room"
              descriptionText="New room based on your users interests (SEO optimized)"
              Icon={ThumbUpOutlinedIcon}
            />
          </Grid>
          <Grid item xs={4}>
            <AiTopic
              type="Community"
              title="Create a room"
              descriptionText="New room based on your users interests (SEO optimized)"
              Icon={ThumbUpOutlinedIcon}
            />
          </Grid>
        </Grid>
      </div>
    </div>
    <Box
      className="main-content"
      sx={{
        width: '100%',
        position: 'relative',
        borderRadius: props.type && props.type === 'FLOATING' ? '0' : '6px',
        backgroundColor: '#fff',
        height: '679px',
        overflow: 'hidden',
        display: currentState === 'ACTIVE' ? 'flex' : 'none',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        boxSizing: 'border-box',
        gap: '10px',
        textAlign: 'left',
        fontSize: '14px',
        color: '#010214',
        fontFamily: "'Readex Pro'",
        transition: 'all linear 300ms',
        '@media (max-width:1440px)': {
          height: isUploadingMode ? '63vh' : '74vh',
        },
        '@media (max-height:720px)': {
          height: isUploadingMode ? '55vh' : '68vh',
        },
      }}
    >
      <div
        id="main-div"
        ref={divRef}
        style={{
          alignSelf: 'stretch',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          padding: '10px 16px',

          gap: '12px',
          overflowY: 'auto',
        }}
      >
        <div
          style={{
            alignSelf: 'stretch',
            position: 'relative',
            fontSize: '10px',
            lineHeight: '14px',
            fontWeight: '300',
            color: '#9799b0',
            textAlign: 'center',
          }}
        >
          Today, 09.04.2024
        </div>
        <div
          style={{
            alignSelf: 'stretch',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-end',
            gap: '4px',
          }}
        >
          <div
            style={{
              alignSelf: 'stretch',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-end',
              justifyContent: 'flex-start',
              padding: '0px 0px 0px 38px',
              gap: '10px',
            }}
          >
            <div
              style={{
                borderRadius: '10px',
                backgroundColor: '#f2f3fb',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                padding: '12px',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  lineHeight: '20px',
                  fontWeight: '300',
                }}
              >
                Hi there! I’m Klaire and I’m here to help you setup ANYTHING
                for your brand ✨
              </div>
            </div>
            <div
              style={{
                flex: '1',
                height: '34px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                justifyContent: 'flex-end',
                gap: '4px',
                textAlign: 'right',
                fontSize: '10px',
                color: '#9799b0',
              }}
            >
              <div
                style={{
                  alignSelf: 'stretch',
                  position: 'relative',
                  lineHeight: '14px',
                  fontWeight: '300',
                  minWidth: '60px',
                }}
              >
                09:59 am
              </div>
            </div>
          </div>
          <div
            style={{
              alignSelf: 'stretch',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-end',
              justifyContent: 'flex-start',
              gap: '10px',
            }}
          >
            <img
              style={{
                width: '28px',
                position: 'relative',
                height: '28px',
                objectFit: 'cover',
              }}
              alt=""
              src="/images/ai-agents/ai.png"
            />
            <div
              style={{
                borderRadius: '10px',
                backgroundColor: '#f2f3fb',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                padding: '12px',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  lineHeight: '20px',
                  fontWeight: '300',
                }}
              >
                Also to suggest you what to do next! So here some suggestions
                for today:
              </div>
            </div>
            <div
              style={{
                flex: '1',
                height: '34px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                justifyContent: 'flex-end',
                gap: '4px',
                textAlign: 'right',
                fontSize: '10px',
                color: '#9799b0',
              }}
            >
              <div
                style={{
                  alignSelf: 'stretch',
                  position: 'relative',
                  lineHeight: '14px',
                  fontWeight: '300',
                  minWidth: '60px',
                }}
              >
                09:59 am
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            alignSelf: 'stretch',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
            gap: '6px',
          }}
        >
          <div
            style={{
              borderRadius: '10px',
              backgroundColor: '#eefdff',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              padding: '12px',
            }}
          >
            <div
              style={{
                position: 'relative',
                lineHeight: '20px',
                fontWeight: '300',
              }}
            >
              I want to
            </div>
          </div>
        </div>

        <div
          style={{
            alignSelf: 'stretch',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-end',
            gap: '4px',
          }}
        >
          <div
            style={{
              alignSelf: 'stretch',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-end',
              justifyContent: 'flex-start',
              padding: '0px 0px 0px 38px',
              gap: '10px',
            }}
          >
            <div
              style={{
                borderRadius: '10px',
                backgroundColor: '#f2f3fb',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                padding: '12px',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  lineHeight: '20px',
                  fontWeight: '300',
                }}
              >
                Great idea! Let me create that for you..
              </div>
            </div>
            <div
              style={{
                flex: '1',
                height: '34px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                justifyContent: 'flex-end',
                gap: '4px',
                textAlign: 'right',
                fontSize: '10px',
                color: '#9799b0',
              }}
            >
              <div
                style={{
                  alignSelf: 'stretch',
                  position: 'relative',
                  lineHeight: '14px',
                  fontWeight: '300',
                  minWidth: '60px',
                }}
              >
                09:59 am
              </div>
            </div>
          </div>
          <div
            style={{
              alignSelf: 'stretch',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-end',
              justifyContent: 'flex-start',
              padding: '0px 0px 0px 38px',
              gap: '10px',
            }}
          >
            <div
              style={{
                borderRadius: '10px',
                backgroundColor: '#f2f3fb',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                padding: '12px',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  lineHeight: '20px',
                  fontWeight: '300',
                }}
              >
                According to your community trends and interest of last 15
                days, I’d suggest you to create this room:
              </div>
            </div>
            <div
              style={{
                flex: '1',
                height: '34px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                justifyContent: 'flex-end',
                gap: '4px',
                textAlign: 'right',
                fontSize: '10px',
                color: '#9799b0',
              }}
            >
              <div
                style={{
                  alignSelf: 'stretch',
                  position: 'relative',
                  lineHeight: '14px',
                  fontWeight: '300',
                  minWidth: '60px',
                }}
              >
                09:59 am
              </div>
            </div>
          </div>
          <div
            style={{
              alignSelf: 'stretch',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-end',
              justifyContent: 'flex-start',
              padding: '0px 0px 0px 38px',
              gap: '10px',
            }}
          >
            <div
              style={{
                borderRadius: '10px',
                backgroundColor: '#f2f3fb',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                padding: '12px',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  lineHeight: '20px',
                  fontWeight: '300',
                }}
              >
                <p style={{ margin: '0' }}>Room name: Golden Briefs</p>
                <p style={{ margin: '0' }}>Category: New product</p>
              </div>
            </div>
            <div
              style={{
                flex: '1',
                height: '34px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                justifyContent: 'flex-end',
                gap: '4px',
                textAlign: 'right',
                fontSize: '10px',
                color: '#9799b0',
              }}
            >
              <div
                style={{
                  alignSelf: 'stretch',
                  position: 'relative',
                  lineHeight: '14px',
                  fontWeight: '300',
                  minWidth: '60px',
                }}
              >
                09:59 am
              </div>
            </div>
          </div>
          <div
            style={{
              alignSelf: 'stretch',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-end',
              justifyContent: 'flex-start',
              padding: '0px 0px 0px 38px',
              gap: '10px',
            }}
          >
            <div
              style={{
                borderRadius: '10px',
                backgroundColor: '#f2f3fb',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                padding: '12px',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  lineHeight: '20px',
                  fontWeight: '300',
                }}
              >
                {` Room description: Latest buzz in men's underwear with the new
                limited edition yellow collection.`}
              </div>
            </div>
            <div
              style={{
                flex: '1',
                height: '34px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                justifyContent: 'flex-end',
                gap: '4px',
                textAlign: 'right',
                fontSize: '10px',
                color: '#9799b0',
              }}
            >
              <div
                style={{
                  alignSelf: 'stretch',
                  position: 'relative',
                  lineHeight: '14px',
                  fontWeight: '300',
                  minWidth: '60px',
                }}
              >
                09:59 am
              </div>
            </div>
          </div>
          <div
            style={{
              alignSelf: 'stretch',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-end',
              justifyContent: 'flex-start',
              padding: '0px 0px 0px 38px',
              gap: '10px',
            }}
          >
            <div
              style={{
                width: '230px',
                borderRadius: '10px',
                backgroundColor: '#f2f3fb',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                padding: '12px',
                boxSizing: 'border-box',
                gap: '10px',
              }}
            >
              <div
                style={{
                  alignSelf: 'stretch',
                  position: 'relative',
                  lineHeight: '20px',
                  fontWeight: '300',
                }}
              >
                Room image:
              </div>
              <img
                style={{
                  alignSelf: 'stretch',
                  position: 'relative',
                  maxWidth: '100%',
                  overflow: 'hidden',
                  height: '206px',
                  flexShrink: '0',
                  objectFit: 'cover',
                }}
                alt=""
                src="/images/ai-agents/room-image.png"
              />
            </div>
            <div
              style={{
                flex: '1',
                height: '34px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                justifyContent: 'flex-end',
                gap: '4px',
                textAlign: 'right',
                fontSize: '10px',
                color: '#9799b0',
              }}
            >
              <div
                style={{
                  alignSelf: 'stretch',
                  position: 'relative',
                  lineHeight: '14px',
                  fontWeight: '300',
                  minWidth: '60px',
                }}
              >
                09:59 am
              </div>
            </div>
          </div>
          <div
            style={{
              alignSelf: 'stretch',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-end',
              justifyContent: 'flex-start',
              gap: '10px',
            }}
          >
            <img
              style={{
                width: '28px',
                position: 'relative',
                height: '28px',
                objectFit: 'cover',
              }}
              alt=""
              src="/images/ai-agents/ai.png"
            />
            <div
              style={{
                borderRadius: '10px',
                backgroundColor: '#f2f3fb',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                padding: '12px',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  lineHeight: '20px',
                  fontWeight: '300',
                }}
              >
                It’s SEO optimized and ready to publish, should I proceed?
              </div>
            </div>
            <div
              style={{
                flex: '1',
                height: '34px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                justifyContent: 'flex-end',
                gap: '4px',
                textAlign: 'right',
                fontSize: '10px',
                color: '#9799b0',
              }}
            >
              <div
                style={{
                  alignSelf: 'stretch',
                  position: 'relative',
                  lineHeight: '14px',
                  fontWeight: '300',
                  minWidth: '60px',
                }}
              >
                09:59 am
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            alignSelf: 'stretch',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'flex-start',
            padding: '0px 0px 0px 38px',
            fontSize: '10px',
          }}
        >
          <div
            style={{
              flex: '1',
              borderRadius: '10px',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              gap: '4px',
            }}
          >
            <InfoOutlinedIcon
              fontSize="small"
              sx={{
                color: '#010214',
                fontSize: '16px',
              }}
            />
            <div
              style={{ flex: '1', position: 'relative', lineHeight: '14px' }}
            >
              <span
                style={{ fontWeight: '300' }}
              >{`You can always edit or delete anything I create for you. Rooms can be found under `}</span>
              <span style={{ fontWeight: '500', color: '#00beda' }}>
                Community/Room
              </span>
            </div>
          </div>
        </div>
        {myMessages.map((item, index) => (
          <Grow in={true} key={index}>
            <Box
              sx={{
                alignSelf: 'stretch',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                justifyContent: 'flex-end',
                gap: '6px',
              }}
            >
              <div
                style={{
                  borderRadius: '10px',
                  backgroundColor: '#eefdff',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  padding: '12px',
                }}
              >
                <div
                  style={{
                    position: 'relative',
                    lineHeight: '20px',
                    fontWeight: '300',
                  }}
                  dangerouslySetInnerHTML={{__html:`
                    
                  ${item.replace(/\r\n|\n/g, '<br/>')}
                  `}}
                />
                  
              </div>
            </Box>
          </Grow>
        ))}
        <div
          style={{
            alignSelf: 'stretch',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
            gap: '8px',
            textAlign: 'right',
          }}
        >
          <div
            style={{
              borderRadius: '8px',
              backgroundColor: '#eefdff',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-end',
              padding: '10px',
            }}
          >
            <div
              style={{
                position: 'relative',
                lineHeight: '20px',
                fontWeight: '300',
              }}
            >
              Yes, create and publish the new room for me
            </div>
          </div>
          <div
            style={{
              borderRadius: '8px',
              backgroundColor: '#eefdff',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-end',
              padding: '10px',
            }}
          >
            <div
              style={{
                position: 'relative',
                lineHeight: '20px',
                fontWeight: '300',
              }}
            >
              Yes, create the new room and let me review it before publishing
            </div>
          </div>
          <div
            style={{
              borderRadius: '8px',
              backgroundColor: '#ffeff9',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-end',
              padding: '10px',
              gap: '4px',
            }}
          >
            <SyncOutlinedIcon fontSize="small" sx={{ color: '#C61A86' }} />
            <div
              style={{
                position: 'relative',
                lineHeight: '20px',
                fontWeight: '300',
              }}
            >
              Regenerate suggestion
            </div>
          </div>
        </div>
      </div>
    </Box>
    <Collapse
      in={true}
      sx={{
        width: '100%',
        '& *': {
          userSelect: 'none',
        },
      }}
    >
      <Box
        ref={divRef2}
        sx={{
          width: '100%',
          backgroundColor: isUploadingMode === 'FILE' ? '#fff' : '#f2f3fb',

          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '12px',
          boxSizing: 'border-box',
          gap: '10px',
          color: '#9799b0',
          borderRadius: props.type && props.type === 'FLOATING' ? '18px' : 0,
          transition: 'all linear 300ms',
          '& svg': {
            transition: 'all linear 300ms',
            '&:hover': {
              color: '#00BEDA',
            },
          },
        }}
      >
        <Stack width={'100%'}>
          <Collapse
            in={!isUploadingMode}
            sx={{ width: '100%' }}
            mountOnEnter
            unmountOnExit
          >
            <Box
              sx={{
                width: '100%',

                '& textarea:focus': {
                  outline: 'none',
                },
              }}
            >
              <textarea
                onKeyDown={(event) => {
                  if (event.key === 'Enter' && !event.shiftKey) {
                    setMyMessages((prev) => [...prev, text]);
                    setImage(null);
                    setFile(null);
                    setIsUploadingMode(null);
                    setTimeout(() => {
                      setText('');
                    }, 100);
                  } else if (event.key === 'Enter' && event.shiftKey) {
                    const textarea = event.target as any;
                    const currentValue = textarea.value;
                    const cursorPosition = textarea.selectionStart;
                    const newlineWithIndentation = '\n    '; // or '\n\t' for a tab
                    setText(
                      `${currentValue.substring(
                        0,
                        cursorPosition
                      )}${newlineWithIndentation}${currentValue.substring(
                        cursorPosition
                      )}`
                    );
                  }
                }}
                value={text}
                onChange={(e) => {
                  setText(e.target.value);
                }}
                style={{
                  display: 'block',
                  width: '100%',
                  border: 'none',
                  background: 'none',
                  resize: 'none',
                }}
                placeholder="Type here..."
              />
            </Box>
          </Collapse>
          <Collapse
            in={isUploadingMode === 'IMAGE' ? true : false}
            sx={{
              width: '100%',
              maxWidth: '500px',
            }}
            mountOnEnter
            unmountOnExit
          >
            {/* <AiAgentSingleImageDragAndDrop
              type={props.type ? props.type : 'FULL'}
              buttonAlign="column"
              onDelete={() => {
                // newQuestions[index].image = URL.createObjectURL(file);
                // console.log(newQuestions)

                // setQuestions(newQuestions);
                setImage(null);
                setFile(null);
              }}
              sx={{
                height:
                  props.type === 'FULL' && image === null ? '60px' : '136px',
              }}
              recommendedSize="SVG, PNG, JPG max 4Mb"
              selectedImage={image ? image : ''}
              onSelectedImage={async (file:any) => {
                const formdata = new FormData();

                formdata.append('file', file);
                fileToImgSrc(file);

                // const result = await uploadImage(formdata).unwrap();
              }}
            /> */}
          </Collapse>

          <Collapse
            in={isUploadingMode === 'FILE' ? true : false}
            sx={{
              width: '100%',
              maxWidth: '500px',
              background: isUploadingMode !== 'FILE' ? '#fff' : '#f2f3fb',
            }}
            mountOnEnter
            unmountOnExit
          >
            <AiAgentSinglFileDragAndDrop
              type={props.type ? props.type : 'FULL'}
              buttonAlign="column"
              onDelete={() => {
                // newQuestions[index].image = URL.createObjectURL(file);
                // console.log(newQuestions)

                // setQuestions(newQuestions);
                setImage(null);
                setFile(null);
              }}
              sx={{
                height:
                  props.type === 'FULL' && image === null ? '60px' : '136px',
              }}
              recommendedSize="SVG, PNG, JPG max 4Mb"
              selectedFile={file}
              onSelectedFile={async (file) => {
                const formdata = new FormData();

                formdata.append('file', file);
                setFile(file);
                // fileToImgSrc(file);

                // const result = await uploadImage(formdata).unwrap();
              }}
            />
          </Collapse>
        </Stack>

        <Stack
          alignItems={'flex-end'}
          height={isUploadingMode ? '100px' : '100%'}
          justifyContent={'space-between'}
        >
          <Fade
            in={isUploadingMode ? true : false}
            mountOnEnter
            unmountOnExit
          >
            <CloseIcon
              fontSize="small"
              sx={{ cursor: 'pointer', color: '#010214' }}
              onClick={() => setIsUploadingMode(null)}
            />
          </Fade>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
              gap: '6px',
            }}
          >
            <Fade in={!isUploadingMode}>
              <DescriptionOutlinedIcon
                fontSize="small"
                sx={{ cursor: 'pointer' }}
                onClick={() => setIsUploadingMode('FILE')}
              />
            </Fade>
            <Fade in={!isUploadingMode}>
              <FilterOutlinedIcon
                fontSize="small"
                sx={{ cursor: 'pointer' }}
                onClick={() => {
                  setIsUploadingMode('IMAGE');
                }}
              />
            </Fade>

            <SendIcon
              fontSize="small"
              sx={{
                cursor: 'pointer',
                color: text.length > 0 || image || file ? '#00BEDA' : '',
              }}
              onClick={() => {
                setMyMessages((prev) => [...prev, text]);
                setText('');
                setImage(null);
                setFile(null);
                setIsUploadingMode(null);
              }}
            />
          </div>
        </Stack>
      </Box>
    </Collapse>
  </>;
};

export default MainAiChatBox;
