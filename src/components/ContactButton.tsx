import { useRouter } from 'next/navigation'

export default function ContactButton({ className = "", ...props }) {
  const router = useRouter()
  return (
    <button
      type="button"
      className={`flex justify-center gap-2 items-center mx-auto text-lg bg-white border-2 border-[#fc0404] text-[#fc0404] font-extrabold relative z-10 px-6 py-2 overflow-hidden rounded-full group transition-all duration-300 hover:text-white hover:bg-[#fc0404] ${className}`}
      onClick={() => router.push('/contact')}
      {...props}
    >
      <span className="relative z-10">Book a Demo</span>
      <svg
        className="w-7 h-7 ml-1 group-hover:rotate-90 ease-linear duration-300 rounded-full border border-[#fc0404] group-hover:!border-white p-1 rotate-45 bg-white group-hover:!bg-[#fc0404] relative z-20"
        viewBox="0 0 16 19"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
          className="fill-[#fc0404] group-hover:!fill-white transition-all duration-300"
        />
      </svg>
      <span className="absolute inset-0 rounded-full bg-[#fc0404] transition-all duration-300 scale-x-0 group-hover:scale-x-100 origin-left z-0 group-hover:!bg-[#fc0404]" />
    </button>
  )
}
