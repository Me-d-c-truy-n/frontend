import Slider from "../../components/Slider"
import admin_01 from "../../assets/images/admin/admin_01.jpg"
import admin_02 from "../../assets/images/admin/admin_02.jpg"
import admin_03 from "../../assets/images/admin/admin_03.jpg"
import admin_04 from "../../assets/images/admin/admin_04.jpg"
import TitleTabScroll from "../../components/TitleTabScroll"
import MyHelmet from "../../components/MyHelmet"

interface Props {
  name: string;
  imageURL: string;
  githubUrl: string;
  facebookUrl: string;
  border: string;
  shadow: string;
  color_1: string;
  color_2: string;
  hover_color_2: string;
  isEnd: boolean;
}

const UserCard = ({name, imageURL, githubUrl, facebookUrl, border, shadow, color_1, color_2, isEnd, hover_color_2}:Props) => {
  return (
    <section className={`mt-1 flex ${isEnd && 'justify-end'}`}>
    <div className="w-full md:w-7/12 flex flex-col md:flex-row items-center justify-center text-center">
        <img className={`inline-flex object-cover border-4 ${border} rounded-full shadow-[5px_5px_0_0_rgba(0,0,0,1)] ${shadow} bg-indigo-50 !h-32 !w-32 mb-4 md:mb-0 ml-0 md:mr-5`}
        src={imageURL} alt={name}/>
        <div className="flex flex-col">
            <div className="md:text-justify mb-3">
                <div className="flex flex-col mb-5">
                    <p className={`${color_1} font-bold text-xl`}>
                      {name}
                    </p>

                    <ul className="mt-2 flex flex-row items-center justify-center md:justify-start ">
                        <li className="mr-3">
                            <a href={githubUrl} target="_blank" aria-label="GitHub">
                                <svg className={`h-6 ${color_1} ${hover_color_2}`} fill="currentColor" role="img"
                                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <title>GitHub</title>
                                    <path
                                        d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12">
                                    </path>
                                </svg>
                            </a>
                        </li>
                        <li className="mr-3">
                            <a href={facebookUrl} target="_blank" aria-label="Facebook">
                                <svg className={`h-6 ${color_1} ${hover_color_2}`} fill="currentColor" role="img"
                                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <title>Facebook</title>
                                    <path d="M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z"/>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>

                <p className={`${color_2} font-semibold text-center md:text-left`}>
                  Sinh viên năm 3 khoa công nghệ thông tin trường Đại học Khoa học tự nhiên - TPHCM
                </p>
            </div>
        </div>
    </div>
    </section>
  )
}

const AboutUs = () => {
  return (
    <div className="font-sans flex flex-col text-black dark:text-white">
      <MyHelmet 
        title={'Nhóm Phát Triển'}
        description={'Web tổng hợp và đọc tiểu thuyết trực tuyến'}
      />
      <Slider/>
      <TitleTabScroll id="about_us" title="NHÓM PHÁT TRIỂN"/>
      <div className="flex justify-center items-center text-center" >
        <h1 className="text-decoration md:text-5xl text-3xl relative w-[max-content] font-mono before:absolute before:inset-0 before:animate-typewriter dark:before:bg-stone-950 before:bg-white mb-5 font-black pb-1"
        >Software Design&nbsp;</h1>
      </div>

      <div className="flex flex-col gap-2 text-lg md:mt-6 mt-2">
        <UserCard 
          name="Nguyễn Nhật Hào"
          imageURL={admin_01}
          githubUrl= "https://github.com/nxhawk"
          facebookUrl="https://www.facebook.com/"
          border="border-sky-600"
          shadow="shadow-sky-600/100"
          color_1="text-sky-700"
          color_2="text-sky-500"
          hover_color_2="hover:text-sky-500"
          isEnd={false}
        />
        <UserCard 
          name="Tô Phương Hiếu"
          imageURL={admin_02}
          githubUrl= "https://github.com/phuonghieuto"
          facebookUrl="https://www.facebook.com/"
          border="border-red-600"
          shadow="shadow-red-600/100"
          color_1="text-red-700"
          color_2="text-red-500"
          hover_color_2="hover:text-red-500"
          isEnd={true}
        />
        <UserCard 
          name="Trương Văn Hoài"
          imageURL={admin_03}
          githubUrl= "https://github.com/hcdman"
          facebookUrl="https://www.facebook.com/"
          border="border-indigo-600"
          shadow="shadow-indigo-600/100"
          color_1="text-indigo-700"
          color_2="text-indigo-500"
          hover_color_2="hover:text-indigo-500"
          isEnd={false}
        />
        <UserCard 
          name="Lê Minh Hoàng"
          imageURL={admin_04}
          githubUrl= "https://github.com/mihoag"
          facebookUrl="https://www.facebook.com/"
          border="border-green-600"
          shadow="shadow-green-600/100"
          color_1="text-green-700"
          color_2="text-green-500"
          hover_color_2="hover:text-green-500"
          isEnd={true}
        />
      </div>
    </div>
  )
}

export default AboutUs