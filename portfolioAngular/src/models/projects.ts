export interface Project {
    titleProject: string;
    imgProject: string;
    descriptionProject: string;
    position: string;
}

export const Projects: Project[] = [
    {
        titleProject:
            "Wofory",
        imgProject:
            "./assets/wofory.png",
        descriptionProject: "El proyecto es una página web que sirve como intermediario entre trabajadores del hogar (como plomeros, electricistas, etc.) y usuarios que necesitan soluciones rápidas para sus hogares. La aplicación ha sido desarrollada utilizando Angular para el FrontEnd y C#/ASP.NET para el BackEnd. La plataforma cuenta con funciones como registro de usuarios, un calendario para gestionar citas, búsqueda por proximidad, chat en tiempo real, entre otras características.",
        position: "row"
    },
    {
        titleProject:
            "Buscador",
        imgProject:
            "./assets/indexador.png",
        descriptionProject: "El proyecto consiste en la indexación de una cantidad determinada de archivos de texto, para luego permitir la búsqueda de palabras o conjuntos de palabras específicas dentro de dichos archivos. Este proceso se lleva a cabo de manera similar a un buscador convencional que utilizamos a diario. El proyecto ha sido desarrollado utilizando JAVA/SpringBoot en la parte del servidor, y Bootstrap en la interfaz de usuario (FrontEnd). La aplicación es fácil de usar y se basa en una tecnología robusta que garantiza una búsqueda rápida y precisa en los archivos indexados.",
        position: "row-reverse"
    },
    {
        titleProject:
            "NetflixClone",
        imgProject:
            "./assets/netflixClone.png",
        descriptionProject: "El proyecto es una interfaz visual similar a la de Netflix, desarrollada en Angular. Los usuarios pueden navegar por diferentes categorías de contenido y ver detalles de cada elemento. Es altamente interactiva y responsiva, proporcionando una experiencia de usuario fluida y envolvente.",
        position: "row"
    },
    {
        titleProject:
            "IPAdressTracker",
        imgProject:
            "./assets/iPAdressTracker.png",
        descriptionProject: "El proyecto es una interfaz visual desarrollada con Angular que te permite localizar en un mapa la ubicación asociada a una dirección IP pública. Esta aplicación es útil para obtener información geográfica sobre una dirección IP, lo que puede ser útil en el análisis de datos o en la identificación de problemas de seguridad. La interfaz es sencilla e intuitiva",
        position: "row-reverse"
    },
    

]


