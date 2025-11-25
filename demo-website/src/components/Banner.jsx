import RecordingStudio from '../assets/images/recording-studio.jpg'

function Banner() {
    return (
        <div className="h-screen flex items-center justify-center">
    <img src={RecordingStudio} className="w-full md:w-800 lg:w-900 max-w-[1000px] max-h-[400px] object-cover" />
        </div>
    )
}

export default Banner