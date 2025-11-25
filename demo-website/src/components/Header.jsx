import DueTimeProductions from '../assets/images/dtplogo.png'

function Header() {
    return (
        <div className='fixed top-0 left-0 m-4'>
            <img className='w-20 sm:w-20 md:w-20 lg:w-20 h-auto mb-4' src={DueTimeProductions} alt="Due Time Productions Logo" />
        </div>
    )
}

export default Header