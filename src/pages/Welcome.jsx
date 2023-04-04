import { NavBar, Squares } from "../components"


export const Welcome = () => {    
    

    return (
        <div className="w-screen min-h-screen bg-[#171941] relative overflow-hidden bg-index">
            <NavBar/>
            <Squares/>
            <div className="min-h-screen sm:h-screen w-full flex flex-col lg:flex-row justify-center items-center gap-4 px-4 lg:pl-8 pt-16 sm:pt-32 sm:pb-24 lg:py-32 overflow-auto">
                <div className="flex flex-col justify-center items-start w-full sm:max-w-2xl z-40">
                    <h1 className="text-white text-3xl font-semibold flex flex-col">
                        Fernando Escobar
                        <strong className="text-blue-400 font-bold">Full Stack Developer</strong>
                    </h1>
                    <p className="text-white text-lg text-justify mt-2">
                        Desde que inicié en el desarrollo de software en 2021, me ha apasionado 
                        el mundo de la programación. Disfruto enfrentándome a desafíos, resolviendo 
                        problemas y creando soluciones ingeniosas. Me enfoco en aprender constantemente 
                        y trabajar bien en equipo, lo que me permite entregar resultados sólidos.
                    </p>
                </div>
                <div className="relative h-5/6 w-full sm:w-96 md:w-[672px] flex justify-center items-center z-40">
                    <img
                        alt="..."
                        className="absolute opacity-[0.08] w-full"
                        src="img/shape-s.png"
                    />
                    <figure className="w-[80%]">
                        <svg
                            className=" injected-svg js-svg-injector"
                            style={{ enableBackground: "new 10 12 878.9 907" }}
                            viewBox="10 12 878.9 907"
                            x="0px"
                            y="0px"
                            xmlSpace="preserve"
                        >
                            <g>
                            <defs>
                                <path
                                d="M300.34,75.35C379.42-7.43,305.86,185.78,540.87,98.95,647.68,46,677,219,674.65,258.55c-11,185-132.32,65-13.89,317.66,56.86,121.32-94.88,256-155.89,151.41-55.11-94.48-151.56-85.1-189-90.54-311-45.27-9.33-148.52-125.21-256.78C9.7,211.2,190.5,100.86,306.34,70.35Z"
                                id="shape1"
                                />
                            </defs>
                            <clipPath id="shape2">
                                <use
                                style={{ overflow: "visible" }}
                                xlinkHref="#shape1"
                                />
                            </clipPath>
                            <g clipPath="url(#shape2)">
                                <image
                                height="900"
                                id="imageShape1"
                                style={{ overflow: "visible" }}
                                transform="matrix(0.9488 0 0 0.9488 25 53.1187)"
                                width="800"
                                xlinkHref="img/perfil.png"
                                />
                            </g>
                            </g>
                            <g>
                            <defs>
                                <path
                                d="M186.26,647.36c7,1,14,1.87,21.11,2.4,42.73,3.24,173.84,9.32,234.51,60.15,72.83,61,105.38,80.19,37.4,96.45C388.73,828,438.49,724,312,749.28c-167.3,33.46-210.61-70.86-181.08-90.54C151.8,644.8,174.69,645.67,186.26,647.36Z"
                                id="shape3"
                                />
                            </defs>
                            <clipPath id="shape4">
                                <use
                                style={{ overflow: "visible" }}
                                xlinkHref="#shape3"
                                />
                            </clipPath>
                            <g
                                clipPath="url(#shape4)"
                                transform="matrix(1 0 0 1 0 0)"
                            >
                                <image
                                height="900"
                                id="imageShape2"
                                style={{ overflow: "visible" }}
                                transform="matrix(0.9488 0 0 0.9488 25 53.1187)"
                                width="900"
                                xlinkHref="img/perfil.png"
                                />
                            </g>
                            </g>
                        </svg>
                    </figure>
                </div>
            </div>
        </div>
    )
}
