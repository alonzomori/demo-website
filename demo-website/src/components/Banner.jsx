import RecordingStudio from '../assets/images/recording-studio.jpg'

function Banner() {
    return (
        <div className="h-[80vh] flex items-center justify-center">
    <img src={RecordingStudio} className="pt-15 w-full md:w-800 lg:w-900 max-w-[750px] max-h-[400px] object-cover" />
        </div>
    )
}

export default Banner