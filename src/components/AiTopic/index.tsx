import React from 'react';
import { SvgIconProps } from '@mui/material/SvgIcon';

type AiTopicProps = {
  type: string;
  title: string;
  descriptionText: string;
  Icon: React.ComponentType<SvgIconProps>;
};

const AiTopic: React.FC<AiTopicProps> = ({
  type,
  title,
  descriptionText,
  Icon,
}) => {
  return (
    <div
      style={{
        maxWidth: '240px',
        width: '100%',
        borderRadius: '8px',
        border: '1px solid #f2f3fb',
        boxSizing: 'border-box',
        height: '116px',
        overflow: 'hidden',
        flexShrink: '0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        padding: '10px',
        gap: '8px',
      }}
    >
      <div
        style={{
          borderRadius: '17px',
          backgroundColor: '#eefdff',
          height: '20px',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          padding: '2px 8px 3px 4px',
          boxSizing: 'border-box',
          gap: '4px',
        }}
      >
        <Icon fontSize="small" />
        <div
          style={{
            position: 'relative',
            lineHeight: '14px',
            fontWeight: '300',
          }}
        >
          {type}
        </div>
      </div>
      <div
        style={{
          alignSelf: 'stretch',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          gap: '4px',
          textAlign: 'left',
          fontSize: '14px',
        }}
      >
        <div
          style={{
            alignSelf: 'stretch',
            position: 'relative',
            lineHeight: '20px',
            fontWeight: '500',
          }}
        >
          {title}
        </div>
        <div
          style={{
            alignSelf: 'stretch',
            position: 'relative',
            fontSize: '12px',
            lineHeight: '16px',
            fontWeight: '300',
            color: '#3f4051',
          }}
        >
          {descriptionText}
        </div>
      </div>
    </div>
  );
};

export default AiTopic;
