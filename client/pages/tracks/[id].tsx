import { useRouter } from 'next/router';
import React from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { ITrack } from '../../types/track';

const TrackPreviev = () => {
    const router = useRouter()
    const track: ITrack = {_id: '1', name: 'Antidepressant', artist: 'FACE', text: 'сатань мне антидепрессантом', listens:0, picture: 'http://localhost:3333/image/4637ef5a-3853-4a49-92b2-674d78f36419.png', audio: 'http://localhost/3333/audio/9e3fbd8c-f568-4f2d-9231-25d31076e03a.mp3'}
    return (
      <div>
        <NavigateBeforeIcon onClick={() => router.push("/tracks")} />
        <NavigateNextIcon />
        <div>
          <div>
            <picture>
              <img src={track.picture} />
            </picture>
          </div>
          <div style={{ marginLeft: "10px" }}>
            {track.name}<br/>
            {track.artist}<br/>
            {track.listens}<br/>

        </div>

          <p> play button</p>
          <p>Среди тревог и вечной грусти <br/>
Стань мне антидепрессантом.<br/>
Позволь любить себя допустим,<br/>
Любить меня в ответ не надо.<br/>
Ты можешь не любить совсем,<br/>
Позволь с тобой быть просто рядом.<br/>
Среди тревог и вечной грусти<br/>
Стань мне антидепрессантом.<br/>
Стань мне антидепрессантом.<br/>
Стань мне антидепрессантом.</p>
        </div>
      </div>
    );
};

export default TrackPreviev;