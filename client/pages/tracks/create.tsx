import { useRouter } from 'next/router';
import React, { useState } from 'react';
import StepWrapper from '../../components/StepWraper';
import {Card, Container, Grid, TextField, Button, Stepper} from '@mui/material'
import FileUpload from '../../components/FileUpload';
import {useInput} from '../../hooks/useInput'
import axios from 'axios';

const Create = () => {

    const [activeStep, setActiveStep] = useState(0)
    const [picture, setPicture] = useState(null)
    const [audio, setAudio] = useState(null)
    const name = useInput('')
    const artist = useInput('')
    const text = useInput('')
    const router = useRouter()

    console.log(name.value, artist.value, text.value, "!!!!!!!!!!!!")


    const next = () => {
    if (activeStep !== 2) {
        setActiveStep(prev => prev + 1)
    } else {
        const formData = new FormData()
        formData.append('name', name.value)
        formData.append('text', text.value)
        formData.append('artist', artist.value)
        formData.append('picture', picture)
        formData.append('audio', audio)
        axios.post('http://localhost:3333/tracks', formData)
            .then(resp => router.push('/tracks'))
            .catch(e => console.log(e))
    }
}

const back = () => {
    setActiveStep(prev => prev - 1);
}

return (   
        <StepWrapper activeStep={activeStep}>
            {activeStep === 0 &&
            <Grid container direction={"column"} style={{padding: 20}}>
                <TextField
                    {...name}
                    style={{marginTop: 10}}
                    label={"Название трека"}
                />
                <TextField
                    {...artist}
                    style={{marginTop: 10}}
                    label={"Имя исполнителя"}
                />
                <TextField
                    {...text}
                    style={{marginTop: 10}}
                    label={"Слова к треку"}
                    multiline
                    rows={3}
                />
            </Grid>
            }
            {activeStep === 1 &&
            <FileUpload setFile={setPicture} accept="image/*">
                <Button>Загрузить изображение</Button>
            </FileUpload>
            }
            {activeStep === 2 &&
            <FileUpload setFile={setAudio} accept="audio/*">
                <Button>Загрузить аудио</Button>
            </FileUpload>
            }
        
        <Grid container justifyContent='space-between'>
            <Button disabled={activeStep === 0} onClick={back}>Назад</Button>
            <Button onClick={next}>Далее</Button>
        </Grid>
        </StepWrapper>
    );
};

export default Create;