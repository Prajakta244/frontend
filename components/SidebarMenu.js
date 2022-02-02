import { useRouter } from 'next/router'

const SidebarMenu = ({icon,page}) => {
    const router = useRouter()
    return (
        <div className="mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
            
            {console.log(page)}
            <a onClick={() => router.push('/Syllabus')}className="text-gray-200 text-lg capitalize font-semibold rounded py-2 m-2 text-center space-x-2">{icon}</a>
            {/* <span className="text-[20px] ml-4 text-gray-200">{icon}</span> */}
        </div>
    )
}

export default SidebarMenu
