import React from 'react';
import Style from './Home.module.scss';
import me from '../../img/self.png';
import classNames from 'classnames';
import EmojiBullet from "./EmojiBullet";
import SocialIcon from "./SocialIcon";
import { Box } from "@mui/material";
import { info } from "../../info/Info";
import Typewriter from 'typewriter-effect';

export default function Home({ innerRef }) {
  return (
    <Box
      ref={innerRef}
      component={'main'}
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      justifyContent={'center'}
      minHeight={'calc(100vh - 175px)'}
      id={'home'}
      gap="2rem"
    >
      {/* Top Section with Image + Text */}
      <Box
        display={'flex'}
        flexDirection={{ xs: 'column', md: 'row' }}
        alignItems={'center'}
        justifyContent={'center'}
        flexWrap="wrap"
        gap="2rem"
      >
        {/* Avatar Image */}
        <Box
          className={classNames(Style.avatar, Style.shadowed)}
          alt={'image of developer'}
          style={{ background: info.gradient }}
          component={'img'}
          src={me}
          width={{ xs: '35vh', md: '40vh' }}
          height={{ xs: '35vh', md: '40vh' }}
          borderRadius={'50%'}
          p={'0.75rem'}
          mb={{ xs: '1rem', sm: 0 }}
          mr={{ xs: 0, md: '2rem' }}
        />

        {/* Intro Text */}
        <Box>
          <h1>
            <Typewriter
              options={{
                strings: [`Hi, I'm ${info.firstName}🤚`],
                autoStart: true,
                loop: true,
                deleteSpeed: 10,
              }}
            />
          </h1>
          <h2>
            <Typewriter
              options={{
                strings: [`I'm ${info.position}.`],
                autoStart: true,
                loop: true,
                deleteSpeed: 10,
              }}
            />
          </h2>
          <Box component={'ul'} p={'0.8rem'}>
            {info.miniBio.map((bio, index) => (
              <EmojiBullet key={index} emoji={bio.emoji} text={bio.text} />
            ))}
          </Box>
          <Box display={'flex'} gap={'1.5rem'} justifyContent={'center'} fontSize={{ xs: '2rem', md: '2.5rem' }}>
            {info.socials.map((social, index) => (
              <SocialIcon key={index} link={social.link} icon={social.icon} label={social.label} />
            ))}
          </Box>
        </Box>
      </Box>

      {/* Elevator Pitch Video */}
      <Box
        mt={4}
        width="100%"
        maxWidth="800px"
        height="500px"
        sx={{
          borderRadius: '1rem',
          boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
          overflow: 'hidden',
        }}
      >
        <Box
          component="iframe"
          src="https://www.youtube.com/embed/X4B37gP9xkk"
          title="Elevator Pitch"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          sx={{
            width: '100%',
            height: '100%',
            border: 0,
            borderRadius: '1rem',
          }}
        />
      </Box>
    </Box>
  );
}
