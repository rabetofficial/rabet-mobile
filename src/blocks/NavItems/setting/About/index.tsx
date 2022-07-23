import React from 'react';

import config from 'config';
import * as Icons from 'svgs/ContactusLinks';

import * as S from './styles';

const About = () => (
  <>
    <div className="content">
      <div style={{ marginTop: '24px' }}>
        <S.ItemHead>Version</S.ItemHead>
        <S.DifItem>{config.VERSION}</S.DifItem>
      </div>

      <S.Hr />

      <div>
        <S.ItemHead>Links</S.ItemHead>

        <S.Item>
          <a
            href="https://rabet.io/privacy-policy"
            target="_blank"
            rel="norefferer noreferrer"
          >
            Privacy policy
          </a>
        </S.Item>

        <S.Item>
          <a
            href="mailto:support@rabet.io"
            target="_blank"
            rel="norefferer noreferrer"
          >
            Support
          </a>
        </S.Item>

        <S.Item>Contact</S.Item>
      </div>

      <S.Hr />

      <S.ItemHead>Join us</S.ItemHead>

      <S.ContactLinksContainer>
        <S.Circle>
          <a
            href=" https://twitter.com/rabetofficial"
            target="_blank"
            rel="norefferer"
          >
            <Icons.Twitter />
          </a>
        </S.Circle>

        <S.Circle>
          <a
            href="https://discord.com/invite/VkYdnRKUtZ"
            target="_blank"
            rel="noreferrer"
          >
            <Icons.Discord />
          </a>
        </S.Circle>

        <S.Circle>
          <a
            href="https://t.me/rabet_community"
            target="_blank"
            rel="norefferer noreferrer"
          >
            <Icons.Telegram />
          </a>
        </S.Circle>
      </S.ContactLinksContainer>
    </div>
  </>
);

export default About;
