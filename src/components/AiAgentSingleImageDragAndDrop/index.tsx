import React, { useEffect, useMemo, useState } from 'react';
import { styled } from '@mui/material/styles';
import FilterOutlinedIcon from '@mui/icons-material/FilterOutlined';
import { Button, CircularProgress, LinearProgress, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import IconButton from '@mui/material/IconButton';
import { BoxProps } from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import UploadIcon from '@mui/icons-material/FileUploadOutlined';
const AiAgentSingleImageDragAndDropContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  border: '2.6px dashed #00BEDA',
  borderRadius: 8,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  cursor: 'pointer',
  transition: 'border-color 0.2s ease-in-out',
}));

const ImagePreview = styled('img')({
  position: 'absolute',
  width: '100%',
  height: '100%',
  objectFit: 'scale-down',
  borderRadius: 8,
  background: '#cdcdd1',
});

const IconContainer = styled('div')({
  marginBottom: 8,
});

const Text = styled('div')({
  fontSize: 12,
  textAlign: 'center',
  color: '#555',
});

const ProgressBar = styled(LinearProgress)(({ theme }) => ({
  width: '100%',
  borderRadius: 4,
  marginTop: 8,
  '& .MuiLinearProgress-bar': {
    borderRadius: 4,
    backgroundColor: theme.palette.primary.main,
  },
}));

interface AiAgentSingleImageDragAndDropProps extends BoxProps {
  onSelectedImage: (file: any) => Promise<void> | void;
  selectedImage: string;
  recommendedSize?: string;
  buttonAlign?: 'row' | 'column';
  showUploadIcon?: boolean;
  type: 'FLOATING' | 'FULL';

  onDelete?: () => void;
}

const AiAgentSingleImageDragAndDrop: React.FC<
  AiAgentSingleImageDragAndDropProps
> = ({ ...props }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<number | null>(null);

  const [jsonData, setJsonData] = useState(null);

  const [isUploading, setIsUploading] = useState(false);

  const isJson = props.selectedImage.slice(-4).toLowerCase() === 'json';

  useEffect(() => {
    if (isJson && props.selectedImage) {
      fetch(props.selectedImage)
        .then((response) => response.json())
        .then((data) => {
          setJsonData(data);
        })
        .catch((error) => console.error('Error fetching JSON:', error));
    }
  }, [isJson, props.selectedImage]);

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = async (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const file = files[0];
      await uploadFile(file);
    }
  };

  const handleFileInputChange = async (e: any) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      await uploadFile(file);
    }
  };

  const openFileDialog = () => {
    const inputElement = document.createElement('input');
    inputElement.type = 'file';
    inputElement.accept = 'image/*, application/json';
    inputElement.style.display = 'none';

    inputElement.addEventListener('change', handleFileInputChange);

    document.body.appendChild(inputElement);
    inputElement.click();
    document.body.removeChild(inputElement);
  };

  const uploadFile = async (file: File) => {
    try {
      setIsUploading(true);
      await props.onSelectedImage(file);
      setIsUploading(false);
    } catch (error) {
      console.error('Upload failed', error);
    }
  };

  const defaultOptions = useMemo(() => {
    return {
      loop: true,
      autoplay: true,
      animationData: jsonData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    };
  }, [jsonData]);
  return (
    <AiAgentSingleImageDragAndDropContainer
      onClick={openFileDialog}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      sx={{
        position: 'relative',
        zIndex: '1',
        width: '100%',
        maxWidth: '500px',
        height: ' 140px',
        borderColor: isDragging
          ? 'primary.main'
          : props.selectedImage
          ? 'transparent'
          : '#ccc',
        ':hover': {
          borderColor: 'primary.main',
        },
        ...props.sx,
      }}
    >
      <Fade
        in={props.selectedImage?.length > 0 && !isJson && !isUploading}
        mountOnEnter
        unmountOnExit
      >
        <ImagePreview src={props.selectedImage} alt="Uploaded" />
      </Fade>
    

      {props.selectedImage.length === 0 && !isUploading && (
        <Stack
          direction={props.type === 'FULL' ? 'row' : 'column'}
          alignItems={'center'}
          justifyContent={'space-between'}
          padding={'20px'}
          gap="20px"
        >
          <Stack
            gap={'10px'}
            direction={props.type === 'FULL' ? 'row' : 'column'}
            alignItems={'center'}
            width={'100%'}
            sx={{}}
          >
            <div>
              <FilterOutlinedIcon
                sx={{
                  color: '#9799B0',
                }}
                color={isDragging ? 'primary' : 'inherit'}
                fontSize="medium"
              />
            </div>
            <div>
              <Typography
                fontSize="12"
                fontWeight="500"
                color="#9799B0"
                style={{ width: '100%' }}
              >
                Drag your image here
              </Typography>
              <div style={{height:"4px"}}>

              </div>
              {props.recommendedSize && props.type === 'FLOATING' && (
                <Typography fontSize="10" fontWeight="300" color="#9799B0">
                  {props.recommendedSize}
                </Typography>
              )}
            </div>
          </Stack>
          {!props.showUploadIcon && (
         <Button size='small'>
         or Choose  a file
        </Button>
          )}
          {props.showUploadIcon && (
            <div
              style={{
                cursor: 'pointer',
                position: 'relative',
                borderRadius: '4px',
                backgroundColor: '#37dbf3',
                width: '28px',
                height: '28px',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '6px',
                boxSizing: 'border-box',
                textAlign: 'center',
                fontSize: '10px',
                color: '#010214',
                fontFamily: "'Readex Pro'",
              }}
            >
              <UploadIcon fontSize="small" />
            </div>
          )}
        </Stack>
      )}
      {uploadProgress !== null && (
        <Stack direction={'row'} justifyContent={'center'} padding={'20px'}>
          <ProgressBar variant="determinate" value={uploadProgress} />
        </Stack>
      )}
      {isUploading && (
        <Stack
          direction={'column'}
          justifyContent={'center'}
          alignItems="center"
          padding={'20px'}
          gap="10px"
        >
          <LinearProgress color="secondary" style={{ width: '120px' }} />
          Uploading
        </Stack>
      )}
      {props.onDelete && (
        <div
          onClick={props.onDelete}
          style={{
            position: 'absolute',
            borderRadius: '4px',
            backgroundColor: '#fff',
            width: '30px',
            height: '28px',
            display: props.selectedImage.length > 5 ? 'flex' : 'none',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '6px',
            boxSizing: 'border-box',
            top: '4px',
            right: '4px',
            cursor: 'pointer',
          }}
        >
          <DeleteOutlineOutlinedIcon fontSize="small" />
        </div>
      )}
    </AiAgentSingleImageDragAndDropContainer>
  );
};

export default AiAgentSingleImageDragAndDrop;
