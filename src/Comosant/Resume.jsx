import ScrollReveal from "scrollreveal";
import { useEffect } from "react";

export default function Resume(props){
    const {them} = props;
    const sr = ScrollReveal({
        distance:"40px",
        reset :true,
        duration:1000 
      })
    useEffect(()=>{
        sr.reveal('.ul1,.ul2,.TITLE',{delay:200,origin:"bottom"})
      },[])
    return(
        <div className="w-100 resume container">
        <h4 className="my-2 Hometitle d-flex align-items-center justify-content-left">

        {them === "clear"?
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAN9JREFUSEvtlkEOATEUhr85hQURbDiBhQVu4DxuwIVsha2dFRZCYuMUqHSSUW1fO6MJiVnOvL7v9f1/Xycj8ZMlzo8NMAFmQM8D3wFj4CoVaANcgLq0ENgDIwliA9x0clf78u8q7AgMfJAqgBPQAg7A0AWpAmgAa6Dj20kVgFpbA1ZA1wUJAZiaFDUwvbAB+sWXZQBLbVGX0V5yhgACHPsMsbrvKwC+nqvK8yJL7yA54K/BWwdiDtZHRP49Dc5AM7RsI06N8LY0i9SVOdcTMoazBaaPYbeQADFJxdjkfxV3PzQ9GVWa3fYAAAAASUVORK5CYII="/>
                    :
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAOdJREFUSEvtlj0OwjAMRp9PwQBCwAInYGAAbsB5uAFciBXBysYEDKhILJzCkKpFKCRNfxSxkDF1/OrPX9wKkZdEzs8XQFUXwAoYFcBPwFxEHqEXdAHuQDt0EDgDsxDEBVCTXESc8qlq+jxbV2BSBGkCSIAecAGmPkgTQAfYAwPAW0ltgJFQVVvADhj6IEFArnneE6sHthcOIjL+3KwD2BqL+lxmmyMIKGHXNMSuND/3e0BA8/d9qV1BdMC/B0EX/XvgkugGdMu6x4pLRKQfmkXmk7nOJmQVzhFYvobdphBQJWOZ2Oh/FU8bJr4ZjbIKagAAAABJRU5ErkJggg=="/>
                    }
                    <span className="mx-2">Resume</span> 
        </h4>
        <div className="txt RES">
            <h4 className="m-3 TITLE">Education :</h4>
            <ul className="my-1 ul1" >
                <li className="py-2">
                    <h5>
                    <img className="mx-2" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAOJJREFUWEftmFEOwiAMhkt9VC/rBcQLeFn1ccVhXIINDGhSA0n3yDr4+f62kDkY7HGD6YF5BBFi0KSHRFkYRUIm6GvHbg4tiN4BXGNsALgdiLzExp55TFCNtIhQyYLe8Zz9JkjFst5KsyqrERMTCoiX9QCLze/MF0m9762mNJ7N+1iryjui+zb+U2WE+ASAY27HSoLiUi8kOpUEFU94RUGQnvycUJOgWs7w9zuWfUJN0N8IlS5x/DZogngSG6GNiOVQbwOUxosao3Sxlu/mEdSyG+2YeX42aJMozW+EauSHI/QGxSNgNAELTTwAAAAASUVORK5CYII="/>         
                     SIDI ABDELAH GHIAT college high school (2021-2022)</h5>
                    Scientific baccalaureate sector science of life and the earth
                </li>
                <li className="py-2">
                    <h5>
                    <img className="mx-2"  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAp1JREFUWEftlztoFFEUhv//jhYGKwVN4auIEMRgtTsbTdBKsBSxU0EELZIiaGljZSvBJyoiphFsrKx9ZyY+sBB8FhotNgqpxIByz5HdzS6zuzNzb9wVguxWy8x/zvnuf8893CGW2Y/LjAf/IVCo2wLoVQBqyeOI+KYT150OBaEeUMpQahGtOMxxAGsW388DegGEpukp5pWd4d084FwgU9RxUM93suL2WI5JzEtZObOBCtpvjH4AsNoD6POiZrOH9oeAA4g5l+piVgIT2lsAD3sU+CrkaEVnVB8B2OCO0SmJgyP+QCXdZVQfuxOjBhPxU1Vb0i2+UEKOIOKT1hrtW3ZQAzOrrwEMOoDKQg43YOriGtQ0gH5H/FvZxO24Q5vUtQGZUCcAPeeEMRzFND+m6oZ1wEh1+xxQnJCYk9lAfo38TcARxKw0PFDUHQExBOK3tQtP8azvS/V5qFsNqlDrcxbX1uBNDpnQTgE8lJOgLAlnTNGeAHkloX8p5ClEvJ+AepjvlN6UODhaz9ECJJX9NBlAZVHuxgzfN5wxuKaqhWY9b0jMY41nwzpoRB8AWJeRd0Fi05cFlDphAcyL5U4857t6YFDSfap6r60I+V0iNhevQVVO7do0KIlNw5hWhxpASVHqyrJGAzErkXEOSBNKaq2/ByroRlInSexvAibPSsTTrhnWfSAAK0q6x4qepMFeAHMQvS3WXMQLzv5ToKzVuIpW3mfFduRQD6hu/VLtTeqT25c8oUvN6XXKTMmeqReUKGj89wLyiO3OHGpp2CyHshq/o6b2SdoDSnPJp4d83PXqIZ+h1y1NHtBPAKu6VcgzT871o2QvQ6t3mZWeyTqV/QL0usTBWOp9qNPs3Yh3fkp3o8hScvSAXG71HHI59Af9Wnk0IbcIuAAAAABJRU5ErkJggg=="/>
                    The specialized institute of applied technology SIDI YOUSEF BEN ALI (2023-2024)</h5>
                    Specialized Technician Diploma in Digital Development Full Web Option Stack
                </li>
            </ul>
            <h4 className="m-3 TITLE">Experiences :</h4>
            <ul  className="my-1 ul2"> 
                <li className="py-2">
                    <h5>
                    <img className="mx-2" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAABAxJREFUWEftl09oXFUUxr/vvsS2WiNtFTUasKmCFkGlhDhvQhzQgt0EBRdaF0KNoggiWq0K0tpFwVr/FMR/VXRRdNGNLvxTlTbFzJuKrYpQrQE1VNNKBElbhMTOO5+8mTeTSczMvDfZBOldvjnnu7/7nXvPvUMssMEFxoP/B5AL/S0gNjd0V3jWvGBL2gq05NBZoLQ2J45XthOwDrBwtF5OSyWrisnv8aArBXZG3wgdD+GNgMOH/zOh+lc6FYcALDI6Hxz+ZS6o9EDqvdyZexTknQAurbPSMUjvmWt7CfzyRBTjzP8BwDVx/LiR/WD+p9n5yYG05lxni18ENQjAS1imIoTXzJ3cCHR0O3EYwIo49ztzwQ2tASlzmRM/AnDdLIFTAgNKpZWKuJqAD+D82jgCB0N6A4Atd9IwoNNGlwPzx9IDqW+Zk30NYFUlWcBej7ajiK794J5whqhybR7OrIVss8De6d/4vbE9C0x2Ae0TlVKmAxLoyd8v4KZqIvGQMXg1Scmcsk9B2lazkA/kgtsb5TbcQ578+yW8UREgsSFk8E6tYJv6cmaWK21c54aKHI5OUnU4ZR+HtL1G47aQwYfpj70yS5z4K4CLS8nCdvOCTbOFZnTtOteFCzPvgrwnzj1qDFZHPWIuqLoOefLvkLAnTjpuvKAb/GSqFSAos9wJxwCeF+UblQULQSogF/q7QdxddkdbzSvMeZkmcahUztB/E8R9sdvPmRc8mQ7IMkcAri6viD1g/tBcAkmBPGUHJJX2joB9csHNKYH8PwFcGFu8Aiz8NR8gqK/byX6ONUbNBSvTAv0DoL0MdE47OFScH9C6RU4nJ2ONSXPBkrRAf1ROmNHrrNfIkpYM5W7/ewxxwlxQupBnj7qnzJn/LYDr45LlwMKBuQSSfmvTjbeY3OdRPIFDoQt60gGFmbdA3hufsufNKzyRdPI6pd0J4uFY73XzCg+mAqo9FQDGjUu7wc/+bglKvR1O3iiAZaUWQN1aZGFvKiAo2oSnRgFdUl4VXjAv2NgKkAv9XSCiZ0s0fjNOrQIPn0kHFD16lB2UtKuSSHIwZP7tNFBO/mMQdkxraH3Iwvv1NBo/0ATnyd8387bXA8ZC9cJtBOeUeQbi1kqMwE/l8usa5TR/MZbuIUZv5CtqhL/wiG1F5A+AsBkTaE27h8VrITwtKFvz249G9oL50/MDKu2f/i6n4scArp0lNiEgoDgCWJvIqwj1VS7Rapmgr0JyAAzGm5W7uUNVW3JLnU29DHJDuZUkGkWIr5ib2AQeiTp/05FUeFoo+jtjxUdA3AXgojozjEHYbc7bWa/Dt7apG61HkUvZXg/WLaAToAiMhbAR8OA3Ta2oE5DeoVZnSph3FqiZUQvOoX8BCpi1NJZlm4kAAAAASUVORK5CYII="/>
                    Competition 21/03/2023 in the specialized institute of applied technology SIDI YOUSEF BEN ALI</h5>
                    Creating a chatbot with python
                </li>
                <li className="py-2">
                    <h5>
                    <img className="mx-2" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAT1JREFUWEftV1FuwjAMfU4FZ2k04ArsAtsfu8wmARJcZtvfdoBxhbGpPcukxBMtRYGqhEweSqX0M7GfX57txCVE9lFkfJAI+TKSFOq3QlnBdwyMATv0nURmX/0QsDWa3hq8Qw2pwn4BuJEJFIzybbUa7bwqQlnJM2Z+DoYRdCCiB5PTS0VIlfwI5tUpPgEbBn/UzOmWgen+FCLrR/GInmxO65pQYRYAzdsH5qXV2aJtI7XuRqwx+0XoqinDRQoJVq0Xqo+EIkyZVDd14aQuO3+RHtd5H4va26miBoEKuR0XysN9B7t9Awlhf5OGkjn/VgZ3WdvhOoQ6xg83+L+nzB0/IhnQZianV3eELQDkf0mJgM/WajU5jLANYFbyfTXksx0IBLkAohryP42m98Y4/Sj6ZEsKJYV8Cvj2o6uhX0ksUzScyBXvAAAAAElFTkSuQmCC"/>
                     FACULTY OF ECONOMIC LEGAL SCIENCE AND SOCIAL SOCIALISTS OF MARRAKECH FROM 02/04/2024 A 04/26/2024</h5>
                    Internship : Creation of an entry and exit management application
                </li>
            </ul>
        </div>
        </div>
    )
}