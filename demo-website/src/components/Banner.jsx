import RecordingStudio from '../assets/images/recording-studio.jpg'

function Banner() {
    return (
        <div className="h-[80vh] flex items-center justify-center">
    <img src={RecordingStudio} className="pt-15 w-145 pl-20 md:w-900 md:pl-45 lg:w-1200 max-w-[1200px] max-h-[400px] object-cover rounded" />
        </div>
    )
}

export default Banner