/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      margin:{
        3.5:"15px",
        4.25:"17px",
        7.5:"30px",
        38.5:"154px",
        48.75:"195px"
        
      },
      padding:{
        "h":"9.29px", 
        "ty":"34px",
        "p":"5px",
        "pg":"7px",
        "lg":"45px"
      },
      height:{
        7.5:"30px",
        90:"360px",
        104:"416px",
        27:"108px"
      },
      width:{
        81.75:"327px",
        42:"168px",
        103:"412px",
        40.5:"162px"
      },
      height:{
        90:"360px",
        "bt":"45px"
      },
      borderRadius:{
        "box":"15px"
      },
      backgroundColor:{
        "black-a":"#232A34",
        "black-b":"#181E27",
        "dark-blue":"#262E38",
        "dark-grey":"#969FAD",
        "medium-grey":"#7C8798",
        "orange":"#FC7614"
      },
      colors:{
        "black-a":"#232A34",
        "black-b":"#181E27",
        "dark-blue":"#262E38",
        "dark-grey":"#969FAD",
        "medium-grey":"#7C8798",
        "orange":"#FC7614"
      },
      fontFamily:{
        overpass:"Overpass"
      },fontSize:{
        'p':["14px","22px"],
        'bt':["14px","24px"],
        'sel':"14px",
        'lg-bold':["28px","35px"],
        'mid':["15px","24px"],
        "cl":["16px","24px"],
        'btn':["15px","19px"],
      }
    },
  },
  plugins: [],
}
