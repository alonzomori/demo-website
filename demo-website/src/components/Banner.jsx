import RecordingStudio from '../assets/images/recording-studio.jpg'

function Banner() {
    return (
        <div className="h-[80vh] flex items-center justify-center">
    <img src={RecordingStudio} className="pt-15 md:w-900 lg:w-900 max-w-[1000px] max-h-[400px] object-cover rounded" />
        </div>
    )
}

export default Banner