import RecordingStudio from '../assets/images/recording-studio.jpg'

function Banner() {
    return (
        <div className="h-screen flex items-center justify-center">
    <img src={RecordingStudio} className="w-full max-w-[1200px] max-h-[500px] object-cover" />
        </div>
    )
}

export default Banner