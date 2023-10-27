const bottle = document.querySelector('.bottle');
const numFrames = 56;

const changeImageWithDelay = () => {
    let frameIndex = 1;

    const changeFrame = () => {
        bottle.style.backgroundImage = `url('assets/04d.60.${frameIndex}.png')`;
        frameIndex = (frameIndex % numFrames) + 1;
    };

    // Change the image every 0.1 seconds (100 milliseconds)
    const imageChangeInterval = setInterval(changeFrame, 100);
};

// Start changing images with delay
changeImageWithDelay();
