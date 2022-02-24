import React from 'react'

import * as S from './Profile.style'
import { Track, User } from '@prisma/client'

import * as anims from '@anims/index'

import { IoCalendar, IoHeart } from 'react-icons/io5'

const Profile: React.FC<{ profile: User; tracks: Track[] }> = ({
  profile,
  tracks,
}) => {
  console.log(tracks)
  return (
    <S.Container
      variants={anims.FadeContainer}
      initial='hidden'
      animate='visible'
      main
    >
      <S.Container>
        <S.Avatar
          src={
            profile.avatar_url.startsWith('https://pbs.twimg.com')
              ? profile.avatar_url.replace('_normal', '')
              : profile.avatar_url
          }
          draggable='false'
          alt='image'
          variants={anims.Image}
        />
        <S.Name text={profile.name} heading='h1' delay={0.5} />
        <S.Username text={`@${profile.username}`} heading='p' />
      </S.Container>
      <S.Grid>
        {tracks.map((track, i) => (
          <S.TrackContainer
            key={i}
            href={`/track/${track.slug}`}
            draggable={false}
            variants={anims.Fade}
          >
            <S.TrackTitle>{track.title}</S.TrackTitle>
            <S.BottomContainer>
              <S.InfoContainer>
                <IoHeart />
                {track.likes}
              </S.InfoContainer>
              <S.InfoContainer>
                <IoCalendar /> {track.createdAt.toDateString()}
              </S.InfoContainer>
            </S.BottomContainer>
          </S.TrackContainer>
        ))}
      </S.Grid>
    </S.Container>
  )
}

export default Profile
