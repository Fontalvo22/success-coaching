import React from 'react';
import { Player, CurrentTimeDisplay, TimeDivider, ControlBar, PlaybackRateMenuButton, ReplayControl, ForwardControl } from 'video-react';

import './Video.scss';



function Videos() {

    return (
        <div className="Videos">
            <div className="row align-items-center justify-content-center">
                <div className="col-xs-12 col-md-3 col-lg-3 col-xl-3 p-3">
                    <Player className="video" playsInline poster="https://picsum.photos/600/360" src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
                        <ControlBar>
                            <CurrentTimeDisplay disabled />
                            <TimeDivider disabled />
                            <ForwardControl disabled />
                            <PlaybackRateMenuButton disabled />

                            <ReplayControl disabled />

                        </ControlBar>
                    </Player>
                </div>
                <div className="col-xs-12 col-md-3 col-lg-3 col-xl-3 p-3">
                    <Player className="video" playsInline poster="https://picsum.photos/600/360" src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
                        <ControlBar>
                            <CurrentTimeDisplay disabled />
                            <TimeDivider disabled />
                            <ForwardControl disabled />
                            <PlaybackRateMenuButton disabled />

                            <ReplayControl disabled />

                        </ControlBar>
                    </Player>
                </div>
                <div className="col-xs-12 col-md-3 col-lg-3 col-xl-3 p-3">
                    <Player className="video" playsInline poster="https://picsum.photos/600/360" src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
                        <ControlBar>
                            <CurrentTimeDisplay disabled />
                            <TimeDivider disabled />
                            <ForwardControl disabled />
                            <PlaybackRateMenuButton disabled />

                            <ReplayControl disabled />

                        </ControlBar>
                    </Player>
                </div>


            </div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/video.js/7.11.7/video-js.min.css" integrity="sha512-fteJK9ZlHSFXwfkV3ASsRd6CLzPIK1C5wCpbDfYJaRmjUiezOU28xJwrALF+agINF8c6do/EOXXOqI2IDPUwQw==" crossorigin="anonymous" />
        </div>

    );

}
Videos.propTypes = {
}

export default Videos;