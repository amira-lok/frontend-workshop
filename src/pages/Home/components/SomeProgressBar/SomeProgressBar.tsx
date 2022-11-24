import {Label, ProgressBar, Button, Flex, ToastContainer, showToast} from "@lokalise/louis"
import {Heading} from './styles'
import {useState} from 'react'

export const SomeProgressBar = () => {

    const step = 13;

    const [progress, setProgress] = useState(10);

    const clearProgress = () => {
        if (progress != 0){
            showToast({
                type: 'info',
                title: 'Resetting progress',
            });
            setProgress(0);
        }
  
    }
    const increaseProgress = () => {
        if (progress < 100){
            if (progress+ step > 100) {
                setProgress(100);
            }
            else {
                setProgress(progress+ step);
            }
            
        }
    }


    return (
        <Flex gap={4} direction="column">
            <Heading>My super progress bar</Heading>
            <Label text={`Progress bar at (${progress}%)`}>
            <ProgressBar progress={progress} height={7}></ProgressBar>        
            </Label>
            <Flex gap={3} alignSelf="flex-end">
                <Button variant="outline" appearance="primary" onClick={clearProgress}>Clear</Button>
                <Button variant="solid" onClick={increaseProgress}>Increase</Button>
            </Flex>
        </Flex>
        )
}

export default SomeProgressBar