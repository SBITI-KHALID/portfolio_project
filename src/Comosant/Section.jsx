import { useState } from "react"

export default function Section(props){
    const {them} = props
    const [display,setDesplay]=useState('d-none')
    const handleDownload = () => {
        // Replace "path-to-your-cv.pdf" with the actual path to your CV file
        const link = document.createElement('a');
        link.href = 'CV_KHALID_SBITI.pdf';
        link.download = 'CV_KHALID_SBITI.pdf';
        link.click();
    };
    return(
        <div className="py-3">
            <div className='imageProfile d-flex aligne-items-center justify-content-center'>
                <div></div>
            </div>
            <br />
            <h4 className='txt w-100 text text-center'>KHALID SBITI</h4>
            <h6 className='txt w-100 text text-center'>Web Developer</h6>
            <div className="d-flex aligne-items-center justify-content-center">
                <a className="mx-1"  target="_blank" href="https://www.linkedin.com/in/sbiti-khalid/">
                {them === "clear"?
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAntJREFUWEftl89LVFEUxz/nqYi0q6CgRZtK2ghCEFLgIoKaO68ookDbRgRSRjqjWTFS4bwXWpsg2pYIQZvmh0ZEJmTgIggrqDb9ATFBVAtr3o03ocx0XzMPcSbBuct7z73fz/uecw/vCqtsyCrjoQ5UKSPBDl2cbCOvzyG6FU/egozhHnxf6bCVWDeBBrLtaO8FSMuSgCZHAx2MqA8rIVruDBMolr6PSLexSXMHV52pPVA88wpoDxCewVGd/wNoHOgyHZK7uJHTtQeKZXYhMgu6qUj8K7+kg9HIu9oD+Yo+FLoXkVbgDTCGo+arDeOfv8YaY39mM41sBb7Q/P0TieMLlVwOuPaZ/VgMGRvFG2TEflmYH0ptIW/5xV86PC+Ga88Ry3Yj+gqwoyggj+YJom/hRB//C8wEiqdPgtwzN8ghnEiqMD8wtQ2d/xgQEwHvCMipsk5oPYob7QuKCQ/kYXNDpcsD6acg+yqlpbAuHCOpHv4dGx5I68O40UflgUKhLAbN4ajdywciTMqWjs8hzKMLt3gvYAWiLjRs4OaBXPFaeIdCpcxPhR7np+5l1P5cEBrM7sHTfhGvC4DqxFEzywMK5ZD+RoveRML+USIezw5D4daVDqGLpJqoIhAPcNQJQzietUH/qb/S0YOjblcPSOQ6ycglQ3Yw1YFnzQYAXcZR16oIxDBJlTCE+ybbaPBeB6TMiA9f1MXXvj+1Hcsy/x5FXyUZNWsllt6JiPmnIOYH1IFK0lZ3aNGOeg0tOrE2bpnfxBq9o0YT86yJpef0+an1NOfPmjH6OW70mTF/IbWRJqvH7NTeNEl7unynDujvtZxaY6+OZVi76hz6DbiQWjT79nAzAAAAAElFTkSuQmCC"/>
                    :
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAhtJREFUWEftl8+LjVEYxz8fZSE7FGVh40c2SilN1Cxko4ZIqWErqYlZSMmPTFiSjdJs0ZSywUaSMYWahZIfhY0/QJRkofS4Z3pH1ztn5r13zJ17695n+Z7nnOfzfs/zPOcc6TCzw3joAVXtSFahiNgCnAQ2Ae+Aa+qHqsUWYnwGUERsBZ4Dy+oCfAX61I8LEXSuNXJAt4HDmUk31ePtAHoFJJXKNqH2twPoDjCYCTyqHmsH0DbgBbC0Lvj3IofeLzpQChgRCWq4qLK3RZW9aTVMWr+7GmNErAHW1XraN+Cz+qtK5VzZ7wbOZiaeUV8WW7oWSMlfttPqZESktnEB2Fjn8Bt4DFxXH80GlgM6AtzKTNirPiiA1td61aeMzx5gP3C0Qomr6qmcTzNAA+rDCqAnwK6qbSnGD6r3yr7NAO1T71cANcgy5Tapbv8foEa2bHr9dPalNpF+eCewZBbSlWry/WvNKNTIlqWFU7IPq18KNXfUmmpK4uUZqH51Yr5AjSj0A1it/qwPEhEjRdWVmQbVsVYC3VUPlaNGxAAwlX8lG1JvtBLoinouA9RXnI/lofPq5VYCjagXM0DpBvo6o9AM/2aSur7sN9SuKLnb4yU1deh/LCI2A7mbQg9oSqmeQnUJ08uh6cO1u6ssNbEDmSY2Nv2cjogVwImMz7Pa2+1ppg+tAoYy/uPq+JydOjNpUT9116tjPtJ2nEJ/AFlwPjRZvXVZAAAAAElFTkSuQmCC"/>
                    }
                </a>
                <a target="_blank" className="mx-1"  href="https://github.com/SBITI-KHALID">
                {them === "clear"?
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAA2dJREFUWEftmFmoTlEUx3/XmPEFmSKU+cWQmSSEDMnsQRIiQyREMstMhjIrJZJIhoQomWeRMmeIFHmRzNP+3/bRubt9hu9+38NN1tt3zl5r/fbaa6+1zpdHEZO8IsbDPwPUGhgGtAOqA1WAYsBb4B1wHdgDXMj0BDKJUElgNDDNOKuf0tFzYD2wGfiaRict0CBgI1AtjVHPGkVOG1HUYiUN0HRgJeQk3+YAS+OIkoAEMiNpVxm+1xFOjdKJA5qdtJsMQcLL5wJLfPpRQIOB/Y5CX5OcVYFJQLOUMI9s7j0ATjnHPtTjw5sXuk0yVCfk9L5RbhL6PQAYBbwCngLPgO/29tUDagN7gX3Ab6t3FVC5COSFXS+9v+KL0BhguxMB7a5HyqhELTsE9HdejgV2JAE9NLtr4CjeBlpkCXQZaOvYkK9GcUBNgXsexzLWPkugY6aC9/bYEJDA8sU9snnm2UJH6ZfdxeMsgWqYvFPelHDs6DYvjwI6Aug2heWM6UndsoQJ1I8CfRxbh8O55UboGtDKUVgFzMwR0AJz6+bH5acLpJDqyoZFBUyFLBeifrbGMfQeqBx1ZC+BWo6COvWEXNDYyq+cCcsnoFwU0C2guaNwEuiZI6ADwEDHlkaUulFAx4FejsI3U/4rAR+zhCpth7cKjp2LQMcoIOXKIo9jlYPFWQJpatD04EqBS+MmtYqfiF35AnQxR3elkFAtgfNAGY++WpJaU764QPqtSh00UjXExkBFe2RTTNPdBahYppHipvmOsB2/vEfhCdAwbM/XXEdap9JXo91tG6AMS1QaTttOv9aMph8cR2UNvKZMTQsqqO6tDS8fbz4StoYf+ID07EaomU60QGftV0agr9FieESYtgHq5HFy1/r4mQSk923MuKGGKrjPZhypacO6DBhi5yVF4VKER81LB2NoNCN1sD4KLIsbYScDG+zqFcCsNElj13QCzsWsVy4GtlMDaaHKvMq9ROVgC/AmBVhnQEfsk9VxHw5JXx0yqN2s81juB6h7+6SrTfzwOx2T5vFNcRtKAyR91aedznQXB6TaciLkWKVEN1ZlJFbSAslIKXNc4+yV1kTQ3ROFwJm++ZXwr21D1YxeYJiPosoEKLChPxXUgG8mbFbV+Q7wIykq4feFAcrEfsZr/wMlhewPsfWUJfen6EsAAAAASUVORK5CYII="/>
                    :
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAA8RJREFUWEftmGvo3mMYxz9fxxzfIKcIhZk3Rs4koZFDcpwXkmwR07RGljan5UxGOY1SmiTSkFiUMHMWKeaQESnyRnLm677W/azf//7/Ts+e58WS693z+93XdX9+132d7kesZ6L1jIf/BpDtg4AZwKHAjsB2wAbA98APwNvAUkmvDXsCvT1ke2PgAmBu2mzPnhutBhYD90r6vY9OLyDbZwB3Azv0MVqzJjw3V9LSLv1OINvzgFtgLPF2laQb2qBagWwHyOVdXzXk+8WSLmvSaQSyPR9o/ZohQarLF0haVKdfC2T7TODxQuHkFJzbA7OB/XrCfJpj7xNgeXHsZ0sq95gcFzmbwtBulU0/TspTB79tnwacD3wDfAF8CfyZs28PYFfgUeAxSQ49228CUS4G8lWslxR6a2WSh2zPBJYUHlguaXpPr9Qus/0UcGrxcpakB7uAVqWv26tQfF/S/iMCrQQOKWyskjSlEcj2vsBHNRuvlHTYiEDPpgp+Yo2NKZLCCWtkwpHZXpieXVso/ZNiIZQ+GxFopxR3ETcbFXbmS7qpCehpILKpKi+lnnTsKDADXdvPACcVtpZJWhtbpYfeAg4sFG6VdMWYgK5JCXd1W3yWQOHSSNmqLJK0YExA0ZhvL2z9KGnbpiP7GtilUIhOffGYgKLyRweoyi+StmgCeg+YVii8IOn4MQE9AZxe2FotafcmoOeAEwqFP1L530bSz6NA2d40D29bFXZWSDqiCShi5bqajRdKun5EoJgaYnooZULSlEEdxW9FjdJvwNHp6N5YF6iU7gcArwKb1ehPT0U3Gu8aKYHid1TqQSONhrgPsDUQRzYnNd2HJUWx7BTbG6bme27u+FvWKHwO7F21V9dcz4tNs3I02keAaIBhOCRKw4u5098h6afqRmmo2zzBx5QZ00IU1DJrq8svknR/9UEdUDx7Bxg000sy0Mv5ljHQj9HinDo32X4AmNXhwg9jj1Tj/m4Fipe2DwaiOwfcr2kc2RmIY7oROAuIeWmepNcbgGJeerIFKGakw9NIE3tMkLYR9lLgrrz6ZklXdgZNXmD7SOCVlvVzJA1s9wPKnooyH+U+JMrBfZK+6wKzfRQQR1wnt0lqvDj0uQZFZt1ZY/kUSdG9J4ntY3LgV9/FMc2WdE/bB3UCZU9FfXoo5qKKsTagGHefr6yNUjJTUpSRVukFlKE2AS7MKR0TwXGp5Ef613ko7vwR8N/mq9SScphvouoNNDBgO/5UmCbp3bZPzdX5A0l/dXml+n5ooGGMr8va/4G6vPYvuC82NL08Uo8AAAAASUVORK5CYII="/>
                    }
                </a>
                </div>
                <table className=" infor w-100 txt text text-center my-4">
        <tbody id="infoTableBody">
            <tr>
                <td className="icon">
                    {them === "clear"?
                    <img  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAfRJREFUSEvN1cvLTWEUx/HPS0kuZUBIihBC7gPlMqAkMaCM3OMfUEaMlBFmjEQMxEAyMDATSRISEZFLEWWgFAOEZ2mdOu92zpu9T2/Zders55z9+z7Pb631230G+eobZH3dABNwBb+wAR+abqQTYBxuYXqKvsCKppAqIMRvYBZeJ2AKnmNlE0gVELasxxssT4uuYxriJAF5X8euKuAHhmIy3qZQ1ONanuoBFvYC+IzRGIUvHQB3sbQXwCPMzc/jFLqfu47fVuNjL4DTxf9dpcA7cTaFokXHYxlu1xGP/1ZrsLv4fwrnSlG3ptgZ7Ci2HS227e8VEG0aO/6OifiExQjvv2E+ntaBdBq0i9iMwziYYidLV+3J9t2CO7keG7raNvF/tXAnwDw8zB0vKbAo7ogUnZPCl3AEJ7Ao12IYV1XnpFsWHcO+nOYYuHcJOZ5N0O7Sq7yZmhPfD9INMDwjI3r+JTai1bYL0rpNeIY1CYhhnFGFDBTXY8vDNzEzh25v+X5+gAK3T/y9ksZhb9e4bumMweX0NtYuZKu2YqSdFwWP3JpdIv6fASEwJEUPYRh+pl3RbZG8kbpfUzxSuF8o1nmjTSrzcaDUZHvpoJFdrIqCx7sjmuLPVQfQeiZOsQ7bMpvCxrieYG1bCjcG1BnkRif4vwC/Ab0RYxl9FmQXAAAAAElFTkSuQmCC"/>
                    :    
                    <img  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAiJJREFUSEu1lc+LjWEUxz9fapr8qFmYmKSICTExjIUaLEZJYkFZMYzGP6BmxUrNytixErEQC8nCwk4jSRrSTETkR81EWSg1FsjxnDq37n3v++a+93bfuov7Ps9zPuf5nvM9r2jzozbHJxdgZiuA+4ABByV9bTaROoCZdQNPgHUR9D2wq1lIDSCCPwI2AJ8CsBp4B+xuBpIFuCwHgM/AYEg0CawF/CYO+VJGrizgD7AQWCVp1gNFPR7GrV5K6m8F8ANYCiyRNJ8DmJK0oxXADLDZf5JeBeAF4Fn72pCkb60AriX9R1KBT0q6EQBv0eXATklPywT3vdkanEr6XwVuSjoWgOvAiSTbRJJtrFWAe8Az/g30SPpuZtuBKeAXsEXSmzKQPKPdSXofAcYlnYtbXAFGo32PSnoW7z2hB1WOr2vhPEAfMB0ZD0iaMbNFgAfdFNnfBS4Al4Ft8c7NuCfrk6JZdBE4E24elDQXkEvRBNUqfYw/a8LxNZAiQCfgI8N7/gNwqKpttwIu3WHgLbA3AG7G3iykcFyb2bJ0+DGwHnDTnZZ0q6jAGcc/lzRQ16bZw2bWBdxzbWPtdoKNVcZI9f4YlD63NqYR3xggOmWBBwXOAx3AX8Bd7t3mMvrU/Ql4cJ/CNUOx4S+ama1M/jibajKcOmhxgVRecP92zFXWGwZUDpiZ32I/cNxnE+Ay+vMa2JeVrzSgjIv/W+SywfL2t/0G/wAOa8MZSMiv9QAAAABJRU5ErkJggg=="/>                    
                    }
                </td>
                <td className="px-2">0625092086</td>
            </tr>
            <tr>
                <td className="icon">
                    {them === "clear"?
                    <img  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAUlJREFUSEvd1T8ohWEUx/GPJIPBZJBSMmCwW2xGpbBSNmVSBhbJRCmTsilWfxaZbBYzA5OQMpgMBsmfe/S8um73ute93eWe5an3vM/5nt/vvM/zNqlzNNW5vsYCjGEN/TXadoUFnESdfIse0FVj8Wz7DXoLAZ8pO4DrKkGhPhT81M5XkAFeMI3Df0LGsYu2coCs7gYW8V4G1JxmF77nx3fzxRTMYButOMMEnkpAOnCAYbxiFjvlFAR0EMfoxiNC/nkBZCjZ2Il7jOaauURmdUkFmap27GMEb5jHVoLMYRMtOMVkLv+cchUDMgtXsJw276V1Kq2RW83rOh7/C5C5EipCTaiKiG6j6+i+MKoCRJEeHOXUfKSZ3JYYfNWASo9FAwPu0ndfqRV/vRfziZn9OslxXa+jr0bCRe5ULxW7rmusW3x7Y/0y62LRF2qEQhkl8rgIAAAAAElFTkSuQmCC"/>                    :    
                    <img  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAXVJREFUSEvdlS9IZFEUxn8fIgaDySALghh0w/YtNuOCMFoVbIJJMLhlkU0KgmnBtuDW3bWIyWYxa9AkowgGk8Egsn7rGe6TmdF5vpnHlLnlhnPv+Z3vO/eP6PJQl/PTQwDbM8AGMFnStjNgVdJB5HmxyPY18KFk8mz7haTxZoBT9KOk805AtkN9KEBSrfh6BRngHliQ9LcdiO0KsAsMvgfI8m4Ba5L+5YFs96Xerdavy1OwCOwAA8ARMCvp9i2I7WHgDzAFPABLwM9cBUG2/QnYB0aBG6Ai6bgeYvszEDaOAFfAF0mntmtWt1SQBWwPAb+BaeARWJH0IzbbXga2gX7gEJiTdJdixQBpcRyCdeBbqv5XmufTHLHvITpTV1hBkx2hItSEqhhRbVQd1TeMjgBJzRiw96zmKfWk2qLxxS1q5x6UsqgdUMcWFYXkAS7TuS+aK29dVVL0rOEtiud6E5goSTh5vtVfXz3XJZO23N5DX2a3LPoPOrOrGWF3AyAAAAAASUVORK5CYII="/>                    
                    }
                </td>
                <td className="px-2">sbitikhalid0@gmail.com</td>
            </tr>
            <tr>
                <td className="icon">
                {them === "clear"?
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAlxJREFUSEu11cmrj1EYB/DPNacMkTlEhDIryZRhIUNio4iSIRIbFuIPYIMSJSFFkmkhkY0pQ4kimYWMmZUkM+epc3Vd9zeEe3bv2znP93yH5zkVanlV1HJ95QB0wnRMQL98oUs4gt14XOySxQCaYicmFynwA3sxBx9q2lcIoDHOozc+YTPW414u0hVLMR8N8t4R+FIdpBDADszCI4zDjQIs+uJoukA7rMOycgD64Aq+Jp0HI/Rui62p2JBc4GzSfh5eYiRO4TO64GlVkJoYbMBibMSSXLwSpOrZYNcfb7ALMxLISqwuBXAH3bL+17LRM3Ew+bEiH16bdB+fvVmYGIxOTI7jdGb0C6MmBmFqGFcX35ORT9AebfCiisl3U3oeojNaJLavM5uWpRi8RXM0wfuc8w7oWCXz0RsP8nf8j73vEGcDrCiDixiUmqhH0vV2uuF2zM4SLUejxHBVbrxt2exeuI4LORhFAbbkQ2FwGN0KV9G6WgSjg8PkkCbiuSbJuCnJuKgUgzE4hsvp1gPy5vCgMqbhyxkswHPUwc2UpO4YhnOlAML4+9m8KVmaYuMmEhYj5RZ6ltNosWca9uAZovFeFUAI80O+CMUkHC4XIPadwKjcpWPxrdrhhlmOgSkUhwoNxWLTNMZDNFrELtISgy2mZ6x62Jd8CgmjF8LsiOgfq9R7MDSxOIn6iAE4N8c03oGQJEZ0GBuBqHGVAohDU9PY2J/TEo9MvBPD8xifmBNXMATlAMTh8OAAmuVKYX48RNFYRVe5AFEkujWS9TFr/9tY/heJSl3yvzH4K6CfFgx2GUKNzOIAAAAASUVORK5CYII="/>                    
:    
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAqNJREFUSEu1ldmrz1EUxT/LnDJE5q4bEcqsJFOGBxkSL4ooGSK5LzyIP4AXlCgJKZJMDxJ5MWUoUSSzkDGzkmS8y9l16OL3+31vyn495+y191pr7yP+c+g/56cQwHZXYCYwCRiQC7oMHAX2SHpSqciyALZbAruAqRUSGNgHzJP0sdS9kgC2mwMXgL7AZ2ALsEHS/UhiuzuwDFgINMl3R0n6+idIOYCdwBzgMTBB0s1S1dnuDxxLBXQC1ktaXghgux9wFfiWeB4q6bLtjsC2lGxYTnAOWCDple3RwGngC9BN0rO6IH91YHsjsBTYJKkmJw9RA6RuRHcDJb21vRuYlUBWSVpTBHAX6BH8S7puO4SeDRxKeqzMj9cl3ieGNpIW2x4LnADOSIqOfkWpDkLUEK6hpFrbT4HOQAdJL+uIfC+555GkatttgDfAW0ltiwDeAa2BFpI+2A6fdwGqfno+z8bDpMMTSVW2WyRXvQfeSQqwih1cAoakIeol6Y7tHcDcTNEKoFnqcHUevO0JdIHtPsAN4KKkoUUAW8MhqeUaSZtstwOuAe3/EDk6C5Hf2A57rk00bk40LikCGAccB65IGpQ5Dw1+2rQWOAsskvTCdgPgFtATGCHpfBFACP8AqE4g0xJIuKds2A6HhdNuS+pdOGi54hnAXuA50E/S6zKTHOIHfWGKKZKO1Asgg5wExuQpHS/pe93HtpsCQcfgZIrDkkouxUrbNCb3OhC22x6LTVJsz1h2jYD9QWHMQhY77P1XVPwPbA9PXZwCGgOxAOdnm+4JSoBY0SHslXIi1efDmZ7WxgEg3BKfTPwTI/ManywpHFc2CgEyJeOT2AeBVjlTiD9V0sVKyeOsXgAZJKY1nPUp2/e3tfzPFBVVWHRe7w6KEpU7/wEt+foZEMvsVwAAAABJRU5ErkJggg=="/>                    }
                </td>
                <td className="px-2">SIDI ABDALAH GHIAT</td>
            </tr>
            <tr>
                <td className="icon">
                    {them === "clear"?
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAALNJREFUSEvdlUEKgzAQRZ/nEATpot7Gy3TTG7QX6kHcuBMF79FSMBQi099Mq1izCzPz//yfSZKx8MoWxkcR3KcGrDwVX5+gBi5A5bSuBU7ALdTH0kcgd4KHsg44WATB0y85XtbHClYjUNNlKZxNlaVgPwSx5NT97KKlAqh8SZA6rts7ZGWBikuLFICKS4L/P4OfKxiAIhU1yu+B0nqunx/OFTg6SRrg/O7DceLaZd5X8+NGHks5NBnCpFrAAAAAAElFTkSuQmCC"/>
                :   
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAALhJREFUSEvtlk0KwjAQhb93DkEQF3qbXsaNN9ALeRA37sSC9xhpoWDbJEMiEZHOLkzmvbz5SSIqmyrjkyQwM+sOICm4z/P3sSkFHoDnnxGYWQOcgH1h6m7AQdJliB8pMLMnsCoEH8LukrYxgj7nn9p7zaYKvkMQ6xpPWajoQQX/QzCVnLsOzcFocnMBlxqQm7KlBrPB/okuaoG1d+c4/oekTey67h6cM7ArJLkCx+iDUwiaDKv+q3gBXGS+GZicyfwAAAAASUVORK5CYII="/> 
                }
                </td>
                <td className="px-2">29/10/2003</td>
            </tr>
        </tbody>
    </table>
            <div className="w-100 text text-center">
                <button className="dwnCV"  onClick={handleDownload} >
                Download CV
                </button>
            </div>
        </div>

    )
}